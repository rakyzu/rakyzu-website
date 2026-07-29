import type { APIRoute } from "astro";
import { getBucket } from "../api/_lib/db";

const R2_URL = "https://pub-<your-r2-public-bucket-url>";

export const GET: APIRoute = async (ctx) => {
  const path = ctx.params.path;

  if (!path) {
    return Response.json({ error: "Path required" }, { status: 400 });
  }

  const cacheUrl = new URL(ctx.request.url);
  const cacheKey = new Request(cacheUrl.toString());
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const bucket = getBucket(ctx);
    const object = await bucket.get(path);

    if (!object) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }

    const headers = new Headers();
    headers.set("Content-Type", object.httpMetadata?.contentType ?? "application/octet-stream");
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
    headers.set("ETag", object.etag);

    const body = await object.blob();
    const response = new Response(body, { headers });
    ctx.locals.runtime?.ctx?.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (err) {
    console.error("Asset proxy error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
};
