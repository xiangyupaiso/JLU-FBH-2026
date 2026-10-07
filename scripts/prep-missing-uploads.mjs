/**
 * One-off staging builder for assets whose CDN URLs probed 403 (2026-10-03).
 * Encodes PNG -> AVIF at the team convention (original dimensions, q58, effort 4)
 * and copies already-optimized binaries verbatim into upload-ready/ mirroring CDN paths.
 * Requires sharp (installed with --no-save). Run: node scripts/prep-missing-uploads.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const STAGE = path.join(ROOT, "upload-ready");

const ENCODE = [
  // experiment4 interactive lab — app.js / index.html expect .avif under this prefix
  ...[
    "bench", "buffer-blue", "buffer-purple", "clear-tip", "column-green",
    "column-mini", "column-pink", "column-green-alt", "column-collection",
    "large-bottle", "microtube", "microtube-empty", "pipette-tip", "hood",
    "pipette", "reagent-bottle", "rotor", "sample-green", "sample-orange",
    "spin-column-blue", "spin-column", "tip-box", "tube-blue", "tube-rack",
    "tips-open", "scalpel", "tube-rack-filled",
  ].map((name) => ({
    src: `public/virtual-lab/experiment4_lab/assets/ppt/${name}.png`,
    out: `virtual-lab/experiment4/ppt/${name}.avif`,
  })),
  // experiment2 odd-name asset (CDN path uses double dash)
  { src: "public/virtual-lab/images/experiment2/__1.png", out: "virtual-lab/experiment2/--1.avif" },
];

const COPY = [
  { src: "public/virtual-lab/images/experiment7/cleanBenchSmall.webp", out: "virtual-lab/experiment7/cleanBenchSmall.webp" },
  { src: "public/assets/structures/trop2-ctl1.pdb", out: "files/structures/trop2-ctl1.pdb" },
];

async function main() {
  let done = 0;
  for (const job of ENCODE) {
    const src = path.join(ROOT, job.src);
    const out = path.join(STAGE, job.out);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const buf = await sharp(src, { animated: true })
      .avif({ quality: 58, effort: 4 })
      .toBuffer();
    fs.writeFileSync(out, buf);
    const srcKB = Math.round(fs.statSync(src).size / 1024);
    console.log(`AVIF  ${job.out}  ${srcKB}KB -> ${Math.round(buf.length / 1024)}KB`);
    done++;
  }
  for (const job of COPY) {
    const out = path.join(STAGE, job.out);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.copyFileSync(path.join(ROOT, job.src), out);
    console.log(`COPY ${job.out}  ${Math.round(fs.statSync(out).size / 1024)}KB`);
    done++;
  }
  // Merge this batch into the single upload mapping (CDN URL is staging path prefixed)
  const urlsPath = path.join(STAGE, "urls.json");
  const urls = JSON.parse(fs.readFileSync(urlsPath, "utf8"));
  for (const job of [...ENCODE, ...COPY]) {
    urls[job.src] = `https://static.igem.wiki/teams/6056/wiki/${job.out}`;
  }
  fs.writeFileSync(urlsPath, JSON.stringify(urls, null, 2) + "\n", "utf8");
  console.log(`\nStaged ${done} files under upload-ready/; urls.json now has ${Object.keys(urls).length} entries`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
