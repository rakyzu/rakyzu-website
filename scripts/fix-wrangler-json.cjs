const path = require("path");
const j = require(path.resolve(process.cwd(), "dist/server/wrangler.json"));
if (Array.isArray(j.send_email) && j.send_email.length === 0 && j.r2_buckets?.[0]?.send_email) {
  j.send_email = j.r2_buckets[0].send_email;
  delete j.r2_buckets[0].send_email;
}
require("fs").writeFileSync("./dist/server/wrangler.json", JSON.stringify(j, null, 2));
