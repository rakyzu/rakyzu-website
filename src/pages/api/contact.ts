import type { APIRoute } from "astro";
import { getDb } from "./_lib/db";
import { sanitize, validateEmail, validateString } from "./_lib/validate";
import { sendNotification } from "./_lib/email";

export const POST: APIRoute = async (ctx) => {
  const body = await ctx.request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (!validateString(name, 100)) {
    return Response.json({ error: "Name is required (max 100 chars)" }, { status: 400 });
  }
  if (!validateString(email, 254) || !validateEmail(email)) {
    return Response.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (!validateString(message, 5000)) {
    return Response.json({ error: "Message is required (max 5000 chars)" }, { status: 400 });
  }

  const safeName = sanitize(name.trim());
  const safeEmail = sanitize(email.trim().toLowerCase());
  const safeMessage = sanitize(message.trim());

  try {
    const db = getDb(ctx);
    await db
      .prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)")
      .bind(safeName, safeEmail, safeMessage)
      .run();

    sendNotification(ctx, safeName, safeEmail, safeMessage);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact insert error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
