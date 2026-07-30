import type { APIRoute } from "astro";
import { getDb } from "./_lib/db";
import { sanitize, validateEmail, validateString } from "./_lib/validate";
import { sendNotification } from "./_lib/email";

const expectedHostnames = new Set(
  (import.meta.env.TURNSTILE_HOSTNAMES ?? "localhost,127.0.0.1,rakyzu.my.id")
    .split(",")
    .map((h: string) => h.trim())
    .filter(Boolean),
);

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: import.meta.env.TURNSTILE_SECRET ?? "",
          response: token,
          remoteip: ip,
        }),
      },
    );
    const data = await res.json();
    return (
      data.success === true &&
      data.action === "contact" &&
      expectedHostnames.has(data.hostname)
    );
  } catch {
    return false;
  }
}

export const POST: APIRoute = async (ctx) => {
  const body = await ctx.request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const { name, email, message, turnstileToken } = body as Record<string, unknown>;

  if (typeof turnstileToken !== "string" || turnstileToken.length === 0) {
    return Response.json({ error: "CAPTCHA verification required" }, { status: 403 });
  }

  const clientIp = ctx.request.headers.get("CF-Connecting-IP") ?? ctx.clientAddress ?? "";
  const verified = await verifyTurnstile(turnstileToken, clientIp);
  if (!verified) {
    return Response.json({ error: "CAPTCHA verification failed" }, { status: 403 });
  }

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
    const db = getDb();
    await db
      .prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)")
      .bind(safeName, safeEmail, safeMessage)
      .run();

    sendNotification(safeName, safeEmail, safeMessage);

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact insert error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
