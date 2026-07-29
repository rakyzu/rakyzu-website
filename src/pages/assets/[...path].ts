import { env } from "cloudflare:workers";
import type { APIRoute } from "astro";

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
    const bucket = env.ASSETS_BUCKET as import("@cloudflare/workers-types").R2Bucket;
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
    ctx.locals.cfContext?.waitUntil?.(cache.put(cacheKey, response.clone()));
    return response;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Asset proxy error:", msg, err);
    return Response.json({ error: "Internal server error", detail: msg }, { status: 500 });
  }
};
