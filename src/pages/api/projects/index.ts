import type { APIRoute } from "astro";
import { getDb } from "../_lib/db";

export const GET: APIRoute = async (ctx) => {
  const tag = ctx.url.searchParams.get("tag");

  try {
    const db = getDb(ctx);

    let rows;
    if (tag) {
      const { results } = await db
        .prepare("SELECT * FROM projects WHERE tags LIKE ? ORDER BY created_at DESC")
        .bind(`%${tag}%`)
        .all();
      rows = results;
    } else {
      const { results } = await db
        .prepare("SELECT * FROM projects ORDER BY created_at DESC")
        .all();
      rows = results;
    }

    return Response.json({ projects: rows });
  } catch (err) {
    console.error("Projects fetch error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
