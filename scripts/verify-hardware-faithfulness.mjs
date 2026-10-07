/**
 * Faithfulness harness for the Hardware page.
 *
 * The page is a transcription of `文案集/drylab/hardware/Hardware.md`, so the
 * check that matters is textual: every word of the manuscript's body must appear
 * in the data the page actually renders, and any string the data carries that is
 * NOT in the manuscript must be a deliberate addition (an id, a nav label, alt
 * text) — those are printed for review rather than silently accepted.
 *
 * Structure is checked against the same imported object the route renders, not
 * against the source text. Run with `node scripts/verify-hardware-faithfulness.mjs`.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, ".tmp-verify");
mkdirSync(outDir, { recursive: true });

/* ------------------------------------------------------------- manuscript */

const MANUSCRIPT = resolve(root, "文案集/drylab/hardware/Hardware.md");
const raw = readFileSync(MANUSCRIPT, "utf8").replace(/\r\n/g, "\n");

const unescapeMd = (text) => text.replace(/\\([.()\-+_*[\]|])/g, "$1");
const stripInline = (text) =>
  unescapeMd(text).replace(/\*\*/g, "").replace(/\*/g, "");

/**
 * Body prose only: no headings, images, figure/table captions, table rows or
 * references. The manuscript's editorial instruction "(click to see Chapter 5)"
 * is dropped too — the page renders it as a link, and the instruction itself is
 * not published copy.
 */
function proseCorpus(markdown) {
  const lines = markdown.split("\n");
  const kept = [];
  let inReferences = false;
  for (const line of lines) {
    if (/^#+\s*References\s*$/i.test(line.trim())) {
      inReferences = true;
      continue;
    }
    if (inReferences) continue;
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^#{1,6}\s/.test(trimmed)) continue;
    if (trimmed.startsWith("![")) continue;
    if (/^(Figure|Table)\s+\d+[a-z]?\s*\|/i.test(unescapeMd(trimmed))) continue;
    if (trimmed.startsWith("|")) continue;
    kept.push(
      stripInline(trimmed).replace(/\(click to see (Chapter \d+)\)/gi, "($1)"),
    );
  }
  return kept.join("\n");
}

/**
 * Table rows, including the one-cell note in 5.7 that the page renders as a
 * callout. Separator rows (`|---|---|`) carry no words and drop out naturally.
 */
function tableRowText(markdown) {
  return markdown
    .split("\n")
    .filter((line) => line.trim().startsWith("|"))
    .map((line) =>
      stripInline(
        line
          .trim()
          .replace(/^\||\|$/g, "")
          .replace(/\|/g, " "),
      ),
    )
    .join("\n");
}

const tokens = (text) => text.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];

const counter = (list) => {
  const map = new Map();
  for (const item of list) map.set(item, (map.get(item) ?? 0) + 1);
  return map;
};

/** Body prose plus every table cell — the two places the manuscript carries text. */
const corpusWords = counter(
  tokens(`${proseCorpus(raw)}\n${tableRowText(raw)}`),
);
const corpusTokenCount = [...corpusWords.values()].reduce((a, b) => a + b, 0);

/** The manuscript's body prose, one entry per paragraph, whitespace-collapsed. */
const manuscriptParagraphs = proseCorpus(raw)
  .split("\n")
  .map((line) => line.replace(/\s+/g, " ").trim())
  .filter(Boolean);

/* ------------------------------------------------------------ page module */

const esbuild = resolve(root, "node_modules/esbuild/bin/esbuild");
const entry = resolve(outDir, "hardwareProbe.ts");
const bundle = resolve(outDir, "hardwareProbe.cjs");

writeFileSync(
  entry,
  `export { hardwarePage, hardwareReferences } from "../src/data/drylab/hardwarePage";\n`,
  "utf8",
);

execFileSync(
  process.execPath,
  [
    esbuild,
    "--bundle",
    entry,
    "--format=cjs",
    "--platform=node",
    "--loader:.webp=text",
    "--loader:.png=text",
    "--loader:.svg=text",
    "--loader:.jpg=text",
    "--loader:.avif=text",
    '--define:import.meta.env.BASE_URL="/jlu-fbh/"',
    "--define:import.meta.env.DEV=false",
    `--outfile=${bundle}`,
    "--log-level=warning",
  ],
  { stdio: "inherit" },
);

const { hardwarePage, hardwareReferences } = createRequire(import.meta.url)(
  bundle,
);

/* -------------------------------------------------------------- extraction */

/** All human-readable strings the page renders, in order, with their origin. */
function collectStrings() {
  const found = [];
  /** Paragraph-shaped units, for the contiguous check: a prose paragraph, or the
      reassembled parts of a `prose-linked` paragraph. */
  const units = [];
  const push = (origin, value) => {
    if (typeof value === "string" && value.trim())
      found.push({ origin, value });
  };

  push("meta", hardwarePage.title);
  push("meta", hardwarePage.lede);
  push("meta", hardwarePage.boundary);
  push("meta", hardwarePage.visualLabel);
  hardwarePage.visualSteps.forEach((step) => push("meta", step));
  hardwarePage.facts.forEach((fact) => {
    push("fact.label", fact.label);
    push("fact.value", fact.value);
  });
  hardwarePage.links.forEach((link) => push("meta", link.label));
  push("meta", hardwarePage.next.title);

  const walk = (origin, block) => {
    switch (block.type) {
      case "prose":
        block.paragraphs.forEach((p) => {
          push(origin + ".prose", p);
          units.push(p);
        });
        break;
      case "prose-linked": {
        // A part with a target renders its label, not its own text.
        block.parts.forEach((part) =>
          push(
            origin + ".linked",
            part.target ? (part.label ?? "") : part.text,
          ),
        );
        units.push(
          block.parts
            .map((part) => (part.target ? (part.label ?? "") : part.text))
            .join(""),
        );
        break;
      }
      case "subheading":
        push(origin + ".subheading", block.title);
        break;
      case "figure":
        push(origin + ".figure.caption", block.caption ?? "");
        push(origin + ".figure.alt", block.alt);
        break;
      case "table":
        push(origin + ".table.caption", block.caption ?? "");
        block.headers.forEach((h) => push(origin + ".table.header", h));
        block.rows.forEach((row) =>
          row.forEach((cell) => push(origin + ".table.cell", cell)),
        );
        break;
      case "callout":
      case "note":
        push(origin + ".body", block.body);
        if (block.label) push(origin + ".label", block.label);
        break;
      case "split":
        block.prose.forEach((nested) => walk(origin, nested));
        walk(origin, block.aside);
        break;
      default:
        break;
    }
  };

  hardwarePage.sections.forEach((section, index) => {
    const origin = `section[${index}](${section.id})`;
    push(origin + ".title", section.title);
    push(origin + ".summary", section.summary);
    push(origin + ".kicker", section.kicker);
    push(origin + ".navLabel", section.navLabel ?? "");
    section.blocks?.forEach((block) => walk(origin, block));
  });

  // The manuscript's subtitle becomes the page lede, so it is prose too.
  units.push(hardwarePage.lede);

  hardwareReferences.forEach((ref) => {
    push(`ref[${ref.id}].authors`, ref.authors);
    push(`ref[${ref.id}].title`, ref.title);
    push(`ref[${ref.id}].journal`, ref.journal);
    push(`ref[${ref.id}].volumeYear`, ref.volumeYear);
  });

  return { found, units };
}

const { found: strings, units: paragraphUnits } = collectStrings();
const normalise = (text) => text.replace(/\s+/g, " ").trim();

/* ------------------------------------------------------------ word coverage */

const rendered = new Map();
for (const { origin, value } of strings) {
  for (const token of tokens(value)) {
    rendered.set(token, (rendered.get(token) ?? 0) + 1);
  }
}

const missing = new Map();
for (const [token, need] of corpusWords) {
  const have = rendered.get(token) ?? 0;
  if (have < need) missing.set(token, need - have);
}

/**
 * Paragraph-level guard: a merged, split or reordered paragraph can still use the
 * same words, so every manuscript paragraph must also appear contiguously inside
 * one rendered paragraph unit — a `prose` paragraph, or the reassembled parts of a
 * `prose-linked` paragraph.
 */
const units = paragraphUnits.map(normalise);
const brokenParagraphs = manuscriptParagraphs.filter(
  (paragraph) => !units.some((unit) => unit.includes(paragraph)),
);

/* --------------------------------------------------------- additions review */

const manuscriptWords = new Set(tokens(raw));
/** Strings carrying a word the manuscript never uses — deliberate metadata. */
const additions = strings
  .filter(({ value }) =>
    tokens(value).some((token) => !manuscriptWords.has(token)),
  )
  .map(
    ({ origin, value }) =>
      `${origin}: ${value.length > 120 ? value.slice(0, 117) + "…" : value}`,
  );

/* --------------------------------------------------------------- structure */

const failures = [];
const check = (label, condition, detail = "") => {
  if (!condition) failures.push(`${label}${detail ? ` — ${detail}` : ""}`);
};

const sections = hardwarePage.sections;
const blocksOf = (id) => sections.find((s) => s.id === id)?.blocks ?? [];
const allBlocks = sections.flatMap((section) => section.blocks ?? []);
const subheadings = allBlocks.filter((block) => block.type === "subheading");
const tables = allBlocks.filter((block) => block.type === "table");
const figures = allBlocks.filter((block) => block.type === "figure");
const features = allBlocks.filter((block) => block.type === "feature");
const callouts = allBlocks.filter((block) => block.type === "callout");

check(
  "seven sections",
  sections.length === 7,
  sections.map((s) => s.id).join(", "),
);
check(
  "section numbering runs 01..07",
  sections.every(
    (section, index) => section.index === String(index + 1).padStart(2, "0"),
  ),
  sections.map((s) => s.index).join(", "),
);
check(
  "26 subheadings (2 + 4 + 7 + 2 + 8 + 3)",
  subheadings.length === 26,
  String(subheadings.length),
);
check("two tables", tables.length === 2, String(tables.length));
check("six figures", figures.length === 6, String(figures.length));
check(
  "every figure resolves to an asset and carries alt text",
  figures.every(
    (block) => block.type === "figure" && block.src && block.alt.length > 40,
  ),
  figures.map((block) => (block.type === "figure" ? block.src : "")).join(" | "),
);
check("one feature slot", features.length === 1, JSON.stringify(features));
check(
  "the feature slot is the citation register",
  features.every((block) => block.key === "hardware-references"),
);
check(
  "the design-stage note is a callout",
  callouts.length === 1,
  String(callouts.length),
);
check(
  "the callout carries the design-stage statement",
  callouts.some((block) =>
    block.body.startsWith("Both generations are designs"),
  ),
);
check(
  "Figure 6 references Figure 2 in the text",
  figures.some((block) =>
    (block.caption ?? "").includes("to be read against Figure 2"),
  ),
);
check(
  "no caption repeats a manual figure number",
  figures.every((block) => !/^figure\s*\d/i.test(block.caption ?? "")),
  figures.map((b) => b.caption).join(" | "),
);
check(
  "table captions keep the manuscript's numbering",
  tables.every((block) => /^Table \d \|/.test(block.caption ?? "")),
  tables.map((b) => b.caption).join(" | "),
);
check(
  "Table 1 is the six-column capability matrix",
  tables.some(
    (block) => block.headers.length === 6 && block.rows.length === 10,
  ),
  tables.map((b) => `${b.headers.length}x${b.rows.length}`).join(", "),
);
check(
  "Table 2 is the four-column generation comparison",
  tables.some((block) => block.headers.length === 4 && block.rows.length === 8),
  tables.map((b) => `${b.headers.length}x${b.rows.length}`).join(", "),
);
check(
  "the capability matrix uses the manuscript's three marks",
  tables
    .filter((block) => block.headers.length === 6)
    .every((block) =>
      block.rows.every((row) =>
        row.slice(1).every((cell) => ["✓", "✗", "△"].includes(cell.trim())),
      ),
    ),
  JSON.stringify(
    tables
      .filter((block) => block.headers.length === 6)
      .flatMap((block) => block.rows.flatMap((row) => row.slice(1)))
      .filter((cell) => !["✓", "✗", "△"].includes(cell.trim())),
  ),
);
check(
  "the Chapter 5 cross-reference is a link",
  allBlocks.some(
    (block) =>
      block.type === "prose-linked" &&
      block.parts.some((part) => part.target === "hardware-gen2"),
  ),
);
check(
  "every inline marker has a reference",
  Array.from({ length: 9 }, (_, i) => i + 1).every((id) =>
    hardwareReferences.some((ref) => ref.id === id),
  ),
  String(hardwareReferences.length),
);
check(
  "reference entries are in the canonical field format",
  hardwareReferences.every(
    (ref) =>
      typeof ref.authors === "string" &&
      typeof ref.title === "string" &&
      typeof ref.journal === "string" &&
      typeof ref.volumeYear === "string" &&
      ref.title.length > 0,
  ),
);
check(
  "the page metadata is present",
  Boolean(
    hardwarePage.lede &&
    hardwarePage.boundary &&
    hardwarePage.facts.length === 4,
  ),
);

/* ------------------------------------------------------------------ report */

console.log(
  "— deliberate additions (strings with words absent from the manuscript) —",
);
for (const line of additions) console.log(`  · ${line}`);
console.log(`  (${additions.length} of ${strings.length} strings)`);

if (missing.size) {
  failures.push(
    `manuscript words missing from the page: ${[...missing.entries()]
      .slice(0, 25)
      .map(([token, count]) => `${token}×${count}`)
      .join(", ")}`,
  );
}

if (brokenParagraphs.length) {
  failures.push(
    `${brokenParagraphs.length} manuscript paragraph(s) do not survive verbatim: ` +
      brokenParagraphs
        .slice(0, 5)
        .map((paragraph) => `"${paragraph.slice(0, 70)}…"`)
        .join(" | "),
  );
}

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed:`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log("\nhardware page faithfulness verification: all checks passed");
console.log(
  `  manuscript ${corpusTokenCount} words → ${strings.length} rendered strings, 0 missing`,
);
console.log(
  `  structure  ${sections.length} sections, ${subheadings.length} subheadings, ${tables.length} tables, ${figures.length} figures, ${hardwareReferences.length} references`,
);
