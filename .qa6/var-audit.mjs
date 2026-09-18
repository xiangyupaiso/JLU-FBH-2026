// Variable audit: every var(--x) used by the ported panel rules must be
// defined either in the ported sheets (on the scope container) or globally.
import { readFile } from "node:fs/promises";

const S = new URL("../src/styles/", import.meta.url);
const PORTED = ["dry-panel-shared.css", "dry-panel-model.css", "dry-panel-software.css"];
const GLOBAL = ["circure-tokens.css", "wiki-rebuild.css", "wetlab-editorial.css", "wiki-feature.css", "wiki-features.css"];

const body = (css) => css.replace(/\/\*[\s\S]*?\*\//g, "");

const used = new Map();
const defined = new Map(); // name -> Set(scope selector)

for (const file of PORTED) {
  const css = body(await readFile(new URL(file, S), "utf8"));
  for (const m of css.matchAll(/var\(\s*(--[a-z0-9-]+)/gi)) {
    used.set(m[1], (used.get(m[1]) ?? new Set()).add(file));
  }
  // definition = `--x:` inside a declaration block; capture the selector
  let sel = "";
  let depth = 0;
  let buf = "";
  for (const ch of css) {
    if (ch === "{") {
      if (depth === 0) sel = buf.trim().replace(/\s+/g, " ");
      depth++;
      buf = "";
    } else if (ch === "}") {
      depth = Math.max(0, depth - 1);
      buf = "";
    } else if (depth === 0) {
      buf += ch;
    } else if (depth === 1) {
      if (ch === ":") {
        const name = buf.trim().match(/^(--[a-z0-9-]+)$/);
        if (name) {
          if (!defined.has(name[1])) defined.set(name[1], new Set());
          defined.get(name[1]).add(sel);
        }
        buf = "";
      } else if (ch === ";" || ch === "{") {
        buf = "";
      } else {
        buf += ch;
      }
    }
  }
}

const globalDefs = new Set();
for (const file of GLOBAL) {
  try {
    const css = body(await readFile(new URL(file, S), "utf8"));
    for (const m of css.matchAll(/(--[a-z0-9-]+)\s*:/gi)) globalDefs.add(m[1]);
  } catch {
    /* optional file */
  }
}

const missing = [];
for (const [name, files] of [...used.entries()].sort()) {
  const local = defined.get(name);
  const inGlobal = globalDefs.has(name);
  if (!local && !inGlobal) missing.push({ name, files: [...files] });
}

console.log(`vars used by ported sheets: ${used.size}`);
console.log(`vars defined in ported sheets: ${defined.size}`);
console.log(`vars missing everywhere: ${missing.length}`);
missing.forEach((m) => console.log(`   ${m.name}  (used in ${m.files.join(", ")})`));

console.log("\nscopes that define vars used by panels:");
const interesting = ["--model-navy-deep", "--dry-calm-ink", "--dry-calm-line-strong", "--model-gold-soft", "--paper-bright", "--font-editorial"];
for (const name of interesting) {
  const local = defined.get(name);
  console.log(`  ${name}: ${local ? [...local].join(" | ") : globalDefs.has(name) ? "(global)" : "(MISSING)"}`);
}
