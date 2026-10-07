/**
 * CDN liveness probe.
 *   node scripts/check-cdn-links.mjs          probe every uploadUrl in the catalog
 *   node scripts/check-cdn-links.mjs full     also extract every CDN URL literal in repo code
 * Pure Node.js stdlib + global fetch (Node >= 18).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const FULL = process.argv[2] === "full";
const catalog = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src/data/assets/igem-assets-catalog.json"), "utf8")
);

const urls = new Set(
  Object.values(catalog.assets)
    .filter((a) => a.uploadUrl && a.status !== "deprecated")
    .map((a) => a.uploadUrl)
);

if (FULL) {
  const SKIP = new Set(["node_modules", "dist", ".git", ".yarn-cache", ".claude", ".qa6"]);
  const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".md", ".json", ".html", ".mjs"]);
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (SKIP.has(e.name)) continue;
      const f = path.join(d, e.name);
      if (e.isDirectory()) walk(f);
      else if (EXTS.has(path.extname(e.name).toLowerCase())) {
        try {
          const s = fs
            .readFileSync(f, "utf8")
            .replace(/\\u002[fF]/g, "/")
            .replace(/\\\//g, "/");
          for (const m of s.matchAll(
            /https:\/\/static\.igem\.wiki[^"'\\)\s<>{}|*^]+/g
          )) {
            const u = m[0].replace(/[`'",;)\]\s]+$/g, "");
            if (/\.(avif|webp|png|jpe?g|gif|svg|pdf|pdb|cif|pse|woff2?|ttf|mp3|wav|mp4|webm|zip)$/i.test(u)) {
              urls.add(u);
            }
          }
        } catch {}
      }
    }
  };
  walk(ROOT);
}

const queue = [...urls];
const CONCURRENCY = 8;
const dead = [];
let done = 0;

async function head(url) {
  for (let i = 0; i < 3; i++) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    try {
      const res = await fetch(url, { method: "HEAD", signal: ctrl.signal, redirect: "follow" });
      clearTimeout(t);
      return res.status;
    } catch (e) {
      clearTimeout(t);
      if (e.name !== "AbortError" && i === 2) return `ERR:${e.message.slice(0, 50)}`;
      await new Promise((r) => setTimeout(r, 1200));
    }
  }
  return "RETRY-EXHAUSTED";
}

const workers = Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const url = queue.shift();
    const status = await head(url);
    done++;
    if (status !== 200) dead.push({ url, status });
    if (done % 100 === 0) console.log(`...checked ${done}`);
  }
});
await Promise.all(workers);

const out = path.join(ROOT, "cdn-dead-links.json");
fs.writeFileSync(out, JSON.stringify(dead, null, 2), "utf8");
console.log(`\nProbed ${done} unique CDN URLs (mode=${FULL ? "full" : "catalog"}); ${dead.length} dead`);
const groups = {};
for (const d of dead) {
  const seg = d.url
    .replace("https://static.igem.wiki/teams/6056/wiki/", "")
    .split("/")
    .slice(0, 3)
    .join("/");
  groups[seg] = (groups[seg] || 0) + 1;
}
console.log("\nDead links by area:");
for (const [k, v] of Object.entries(groups).sort((a, b) => b[1] - a[1])) {
  console.log(`${v}\t${k}`);
}
console.log(`\nSaved: ${path.relative(ROOT, out)}`);
