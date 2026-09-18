// Phase 0 analysis: classify selectors in the three old Dry Lab stylesheets so
// the port can scope them safely.
import { readFile } from "node:fs/promises";

const OLD = "C:/Users/香芋派/.trae-cn/Official-wiki/src/styles/";
const FILES = ["model-page.css", "software-page.css", "dry-lab-calm.css", "dry-lab-reading.css"];

const stripComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, "");

// crude rule splitter: top-level rules only (media blocks handled separately)
function selectors(css) {
  const out = [];
  const src = stripComments(css);
  let depth = 0;
  let buffer = "";
  for (const ch of src) {
    if (ch === "{") {
      if (depth === 0) {
        const sel = buffer.trim();
        if (sel) out.push(sel);
        buffer = "";
      }
      depth++;
    } else if (ch === "}") {
      depth = Math.max(0, depth - 1);
      buffer = "";
    } else if (depth === 0) {
      buffer += ch;
    }
  }
  return out;
}

for (const file of FILES) {
  const css = await readFile(OLD + file, "utf8");
  const sels = selectors(css);
  const groups = new Map();
  const globalish = [];
  for (const sel of sels) {
    if (sel.startsWith("@")) continue; // at-rules (@media, @font-face, @supports)
    for (const part of sel.split(",")) {
      const s = part.trim();
      if (!s) continue;
      const m = s.match(/^\.wiki-page(?:\.wiki-page--[a-z-]+)*/);
      if (m) {
        const key = m[0];
        groups.set(key, (groups.get(key) ?? 0) + 1);
      } else {
        globalish.push(s);
      }
    }
  }
  console.log(`\n=== ${file} (${sels.length} top-level rule groups) ===`);
  [...groups.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([k, n]) => console.log(`  ${String(n).padStart(4)}  ${k}`));
  if (globalish.length) {
    console.log(`  --- non-.wiki-page selectors (${globalish.length}):`);
    [...new Set(globalish)].slice(0, 40).forEach((s) => console.log(`      ${s}`));
  }
}
