import type { APIRoute } from "astro";
import { getDb } from "../../_lib/db";

export const POST: APIRoute = async (ctx) => {
  const { id } = ctx.params;

  if (!id || !/^\d+$/.test(id)) {
    return Response.json({ error: "Invalid project ID" }, { status: 400 });
  }

  try {
    const db = getDb();
    await db
      .prepare("UPDATE projects SET view_count = view_count + 1 WHERE id = ?")
      .bind(Number(id))
      .run();

    return Response.json({ success: true });
  } catch (err) {
    console.error("View count update error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
