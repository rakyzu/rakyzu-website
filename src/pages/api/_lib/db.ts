import { env } from "cloudflare:workers";

export function getDb() {
  return env.rakyzu_db as import("@cloudflare/workers-types").D1Database;
}

export function getBucket() {
  return env.ASSETS_BUCKET as import("@cloudflare/workers-types").R2Bucket;
}

export function getEmail() {
  return env.EMAIL as import("@cloudflare/workers-types").SendEmail | undefined;
}
