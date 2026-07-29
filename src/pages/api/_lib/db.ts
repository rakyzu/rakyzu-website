import type { APIContext } from "astro";

export function getDb(ctx: APIContext) {
  const env = (ctx.locals.runtime as { env: Record<string, unknown> }).env;
  return env.rakyzu_db as import("@cloudflare/workers-types").D1Database;
}

export function getBucket(ctx: APIContext) {
  const env = (ctx.locals.runtime as { env: Record<string, unknown> }).env;
  return env.ASSETS_BUCKET as import("@cloudflare/workers-types").R2Bucket;
}

export function getEmail(ctx: APIContext) {
  const env = (ctx.locals.runtime as { env: Record<string, unknown> }).env;
  return env.EMAIL as import("@cloudflare/workers-types").SendEmail | undefined;
}
