// Phase 0 analysis v3: which ported rules depend on page-chrome ancestors
// (they would not match when the panels are wrapped in a scope container), and
// which rules touch panel classes at all.
import { readFile } from "node:fs/promises";

const OLD = "C:/Users/香芋派/.trae-cn/Official-wiki/src/";
const CSS = ["model-page.css", "software-page.css", "dry-lab-calm.css"];
const PANELS = [
  "components/wiki/features/ModelEvidenceFeatures.tsx",
  "components/wiki/features/SoftwareEvidenceFeatures.tsx",
  "components/wiki/features/DryLabProjectExplorers.tsx",
];

const stripComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, "");
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

// panel classes actually used by the three components
const panelClasses = new Set();
for (const p of PANELS) {
  const src = await readFile(OLD + p, "utf8");
  for (const m of src.matchAll(/className=(?:"([^"]+)"|\{`([^`]+)`\})/g)) {
    const text = m[1] ?? m[2] ?? "";
    for (const token of text.split(/[\s${}?:`'"+()[\]]+/)) {
      if (/^[a-z][a-z0-9-]*$/.test(token) && token.includes("-")) {
        panelClasses.add(token);
      }
    }
  }
}

const CHROME = [
  "wiki-section",
  "wiki-article",
  "wiki-hero",
  "wiki-record",
  "wiki-outline",
  "wiki-prose",
  "wiki-manuscript-list",
  "wiki-next",
  "wiki-facts",
  "wiki-boundary",
  "wiki-blocks",
  "wiki-page-progress",
  "wiki-chapter",
  "wiki-kicker",
  "wiki-status",
  "wiki-feature",
];

let panelRules = 0;
let chromeOnly = 0;
const risky = [];
for (const file of CSS) {
  for (const { prelude, at } of walk(await readFile(OLD + "styles/" + file, "utf8"))) {
    const mentionsPanel = [...panelClasses].some((c) => prelude.includes("." + c));
    if (!mentionsPanel) {
      chromeOnly++;
      continue;
    }
    panelRules++;
    const chrome = CHROME.filter((c) => new RegExp(`\\.${c}(?![a-z0-9-])`).test(prelude));
    // a chrome class that appears AFTER the scope class is a descendant need
    const scopeIdx = prelude.indexOf(".wiki-page");
    const chromeAfter = chrome.filter((c) => prelude.indexOf("." + c) > scopeIdx);
    if (chromeAfter.length) {
      risky.push({ file, at: at.join(" "), sel: prelude.replace(/\s+/g, " "), chromeAfter });
    }
  }
}

console.log(`rules mentioning panel classes: ${panelRules}`);
console.log(`rules with no panel class (page chrome): ${chromeOnly}`);
console.log(`\nPANEL rules that also need a chrome descendant: ${risky.length}`);
risky.forEach((r) =>
  console.log(`  [${r.file}${r.at ? " @" + r.at : ""}] ${r.sel}\n      needs: ${r.chromeAfter.join(", ")}`),
);
