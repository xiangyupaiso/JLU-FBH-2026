// Phase 0 analysis v2: proper CSS rule parsing (paren/brace aware) + which
// stylesheet covers each class used by the 17 old panels.
import { readFile } from "node:fs/promises";

const OLD = "C:/Users/香芋派/.trae-cn/Official-wiki/src/";
const CSS = ["model-page.css", "software-page.css", "dry-lab-calm.css", "dry-lab-reading.css"];
const PANELS = [
  "components/wiki/features/ModelEvidenceFeatures.tsx",
  "components/wiki/features/SoftwareEvidenceFeatures.tsx",
  "components/wiki/features/DryLabProjectExplorers.tsx",
];

const stripComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, "");

/** Walk a stylesheet, returning every selector-list at rule level (incl. inside at-rules). */
function walk(css) {
  const src = stripComments(css);
  const out = [];
  let i = 0;
  const stack = [];
  let buffer = "";
  while (i < src.length) {
    const ch = src[i];
    if (ch === "{") {
      const prelude = buffer.trim();
      buffer = "";
      if (prelude.startsWith("@") && !prelude.startsWith("@font-face")) {
        stack.push(prelude);
        i++;
        continue;
      }
      // a declaration block: read to matching }
      let depth = 1;
      let j = i + 1;
      while (j < src.length && depth > 0) {
        if (src[j] === "{") depth++;
        else if (src[j] === "}") depth--;
        j++;
      }
      out.push({ prelude, at: [...stack] });
      i = j;
      continue;
    }
    if (ch === "}") {
      stack.pop();
      buffer = "";
      i++;
      continue;
    }
    buffer += ch;
    i++;
  }
  return out;
}

/** Split a selector list on top-level commas (paren aware). */
function splitSelectors(list) {
  const parts = [];
  let depth = 0;
  let cur = "";
  for (const ch of list) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      parts.push(cur.trim());
      cur = "";
    } else cur += ch;
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts;
}

const SCOPE_RE = /\.wiki-page(?:\.wiki-page--[a-z-]+)*/g;

for (const file of CSS) {
  const rules = walk(await readFile(OLD + "styles/" + file, "utf8"));
  const unscoped = [];
  let scopedCount = 0;
  for (const { prelude } of rules) {
    for (const sel of splitSelectors(prelude)) {
      if (!sel) continue;
      if (sel.includes(".wiki-page")) scopedCount++;
      else unscoped.push(sel);
    }
  }
  console.log(`\n=== ${file}: ${rules.length} rules, ${scopedCount} scoped selectors ===`);
  if (unscoped.length) {
    console.log(`  UNSCOPED (${unscoped.length}):`);
    [...new Set(unscoped)].forEach((s) => console.log(`     ${s}`));
  }
}

// --- class coverage -------------------------------------------------------
const classNames = new Set();
for (const p of PANELS) {
  const src = await readFile(OLD + p, "utf8");
  for (const m of src.matchAll(/className=(?:"([^"]+)"|\{`([^`]+)`\})/g)) {
    const text = m[1] ?? m[2] ?? "";
    for (const token of text.split(/[\s${}?:`'"+()[\]]+/)) {
      if (/^[a-z][a-z0-9-]*$/.test(token) && token.includes("-")) {
        classNames.add(token);
      }
    }
  }
}
const cssText = {};
for (const file of CSS) cssText[file] = await readFile(OLD + "styles/" + file, "utf8");

console.log(`\n=== class coverage for ${classNames.size} panel classes ===`);
const uncovered = [];
for (const name of [...classNames].sort()) {
  const owners = CSS.filter((f) => cssText[f].includes("." + name));
  if (!owners.length) uncovered.push(name);
}
console.log("classes with NO rule in the four sheets:", uncovered.length);
uncovered.slice(0, 40).forEach((c) => console.log(`   ${c}`));
const onlyReading = [...classNames]
  .filter((n) => {
    const owners = CSS.filter((f) => cssText[f].includes("." + n));
    return owners.length === 1 && owners[0] === "dry-lab-reading.css";
  })
  .sort();
console.log("classes defined ONLY in dry-lab-reading.css:", onlyReading.length);
onlyReading.forEach((c) => console.log(`   ${c}`));
