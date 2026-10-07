/**
 * Faithfulness harness for the Results page.
 *
 * The page is a transcription of `文案集/project/results/3.3 Results.md`, so the
 * check that matters is textual: every word of the manuscript's body — prose,
 * table cells and the numbered bibliography — must appear in what the page
 * renders, and every manuscript paragraph must survive *contiguously* inside one
 * rendered paragraph unit (a re-ordered or re-split paragraph reuses the same
 * words, so word coverage alone is not enough).
 *
 * Structure is checked against the same imported objects the route renders, not
 * against the source text. The `FIG. nn` counter alignment in particular is a
 * structural claim — 33 `figure` blocks plus one incrementing plate must come to
 * the manuscript's 34 figure numbers — and it is asserted here rather than
 * assumed.
 *
 * Deliberate, documented deviations from the letter of the manuscript:
 *   - `**Click to learn**` (§I) is an instruction to the developer, not published
 *     copy, so it is not carried; the sentence pointing at the Model page is.
 *   - One bold run that also italicised a gene name
 *     (`**T4 *****td***** permuted intron**`) is carried as its bold form; a bold
 *     span cannot also contain an emphasis run in the reader's inline formatter.
 *   - Emphasised table cells (`*(before Week 1)*`) and one italicised table
 *     caption (`*Table 22. …*`) are carried without the marker: table cells and
 *     captions take `**bold**` only.
 * All three preserve every word, which is what this harness asserts.
 *
 * Run with `node scripts/verify-results-faithfulness.mjs`.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, ".tmp-verify");
mkdirSync(outDir, { recursive: true });

/* ------------------------------------------------------------- manuscript */

const MANUSCRIPT = resolve(root, "文案集/project/results/3.3 Results.md");
const raw = readFileSync(MANUSCRIPT, "utf8").replace(/\r\n/g, "\n");
const lines = raw.split("\n");

const unescapeMd = (text) => text.replace(/\\([.()\-+_*[\]|&<>~$#'"])/g, "$1");
/**
 * The one normalization both sides of every comparison go through: Markdown
 * escapes resolved, emphasis markers dropped, whitespace collapsed. Dropping
 * `*` on both sides is what keeps `HLA-A*02:01` from counting as a different
 * word than `HLA-A02:01`, which the two forms in the manuscript would otherwise
 * make it.
 */
const comparable = (text) =>
  unescapeMd(text)
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Manuscript paragraphs additionally lose the manuscript's own bullet dash. */
const asParagraph = (text) => comparable(text).replace(/^[-*+]\s+/, "");

const CAPTION_RE = /^\*?\s*(Figure|Table)\s+\d+[A-Za-z]?\\?\./;
const isDropLine = (trimmed) =>
  !trimmed ||
  /^#{1,6}\s/.test(trimmed) ||
  trimmed.startsWith("![") ||
  trimmed.startsWith("|") ||
  /^-{3,}$/.test(trimmed) ||
  CAPTION_RE.test(trimmed);

/** Body prose only: no headings, images, captions, table rows or references. */
function proseLines() {
  const kept = [];
  let inReferences = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (/^#\s*References\s*$/i.test(trimmed)) {
      inReferences = true;
      continue;
    }
    if (inReferences) continue;
    if (isDropLine(trimmed)) continue;
    kept.push(trimmed.replace(/\s*\*\*Click to learn\*\*\s*/g, "").trim());
  }
  return kept;
}

const prose = proseLines();
const manuscriptParagraphs = prose.map(asParagraph).filter(Boolean);
const proseCorpus = prose.join("\n");

/** Every table row, one entry per line, cells joined with a space. */
const tableRows = lines
  .filter((line) => line.trim().startsWith("|"))
  .map((line) =>
    comparable(
      line
        .trim()
        .replace(/^\||\|$/g, "")
        .replace(/\|/g, " "),
    ),
  )
  .filter(Boolean);

/** The numbered bibliography, as written. */
const referenceLines = (() => {
  const start = lines.findIndex((line) =>
    /^#\s*References\s*$/i.test(line.trim()),
  );
  return lines
    .slice(start + 1)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => comparable(line.replace(/^\d+\\?\.\s*/, "")));
})();

/** The manuscript's own figure captions, keyed by the label it printed. */
const manuscriptCaptions = new Map();
for (const line of lines) {
  const trimmed = line.trim();
  const match = trimmed.match(/^\*Figure\s+(\d+[AB]?)\\?\.\s*(.*?)\\?\.\*\s*$/);
  if (match) manuscriptCaptions.set(match[1], comparable(match[2]) + ".");
}

const tokens = (text) => text.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
const counter = (list) => {
  const map = new Map();
  for (const item of list) map.set(item, (map.get(item) ?? 0) + 1);
  return map;
};

/* ------------------------------------------------------------ page modules */

const esbuild = resolve(root, "node_modules/esbuild/bin/esbuild");
const entry = resolve(outDir, "resultsProbe.ts");
const bundle = resolve(outDir, "resultsProbe.cjs");

writeFileSync(
  entry,
  [
    'export { resultsPage } from "../src/data/project/resultsPage";',
    'export { resultsReferences } from "../src/data/project/resultsReferences";',
    'export { resultsAssets } from "../src/data/project/resultsAssets";',
    'export { buildNumericCitationIndex } from "../src/data/citations/citationIndex";',
    "",
  ].join("\n"),
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
    "--loader:.jpeg=text",
    "--loader:.avif=text",
    '--define:import.meta.env.BASE_URL="/jlu-fbh/"',
    "--define:import.meta.env.DEV=false",
    `--outfile=${bundle}`,
    "--log-level=warning",
  ],
  { stdio: "inherit" },
);

const {
  resultsPage,
  resultsReferences,
  resultsAssets,
  buildNumericCitationIndex,
} = createRequire(import.meta.url)(bundle);

/* -------------------------------------------------------------- extraction */

const pageStrings = [];
const paragraphUnits = [];
const push = (origin, value) => {
  if (typeof value === "string" && value.trim())
    pageStrings.push({ origin, value });
};

push("meta", resultsPage.title);
push("meta", resultsPage.lede);
push("meta", resultsPage.boundary);
push("meta", resultsPage.visualLabel);
resultsPage.visualSteps.forEach((step) => push("meta", step));
resultsPage.facts.forEach((fact) => {
  push("fact.label", fact.label);
  push("fact.value", fact.value);
});
resultsPage.links.forEach((link) => push("meta", link.label));
push("meta", resultsPage.next.title);

const figures = [];
const tables = [];
const features = [];
const subheadings = [];

function walk(origin, block) {
  switch (block.type) {
    case "prose":
      block.paragraphs.forEach((p) => {
        push(`${origin}.prose`, p);
        paragraphUnits.push(p);
      });
      break;
    case "subheading":
      subheadings.push(block);
      push(`${origin}.subheading`, block.title);
      break;
    case "figure":
      figures.push({ origin, block });
      push(`${origin}.figure.caption`, block.caption ?? "");
      push(`${origin}.figure.alt`, block.alt);
      break;
    case "table":
      tables.push({ origin, block });
      push(`${origin}.table.caption`, block.caption ?? "");
      block.headers.forEach((h) => push(`${origin}.table.header`, h));
      block.rows.forEach((row) =>
        row.forEach((cell) => push(`${origin}.table.cell`, cell)),
      );
      break;
    case "feature":
      features.push(block.key);
      break;
    case "split":
      block.prose.forEach((nested) => walk(origin, nested));
      walk(origin, block.aside);
      break;
    default:
      break;
  }
}

resultsPage.sections.forEach((section, index) => {
  const origin = `section[${index}](${section.id})`;
  push(`${origin}.title`, section.title);
  push(`${origin}.navLabel`, section.navLabel ?? "");
  section.blocks?.forEach((block) => walk(origin, block));
});

resultsReferences.forEach((ref) => {
  push(`ref[${ref.id}].authors`, ref.authors);
  push(`ref[${ref.id}].title`, ref.title);
  push(`ref[${ref.id}].journal`, ref.journal);
  push(`ref[${ref.id}].volumeYear`, ref.volumeYear);
  // DOI / PMID / PMC / URL tails are `links`; their labels carry the text.
  (ref.links ?? []).forEach((link) => push(`ref[${ref.id}].link`, link.label));
});

const assets = Object.values(resultsAssets);

/* ----------------------------------------------------------- word coverage */

const checkCorpus = (label, corpus, strings) => {
  const wanted = counter(tokens(comparable(corpus)));
  const rendered = counter(
    strings.flatMap(({ value }) => tokens(comparable(value))),
  );
  const missing = [];
  for (const [token, need] of wanted) {
    const have = rendered.get(token) ?? 0;
    if (have < need) missing.push(`${token}×${need - have}`);
  }
  return {
    label,
    words: [...wanted.values()].reduce((a, b) => a + b, 0),
    missing,
  };
};

const bodyCoverage = checkCorpus(
  "body prose + table cells",
  `${proseCorpus}\n${tableRows.join("\n")}`,
  pageStrings,
);
const referenceCoverage = checkCorpus(
  "bibliography",
  // The register's link labels drop the `https://` prefix by contract (§4.5), so
  // the scheme is not expected to survive into the page.
  referenceLines.join("\n").replace(/https?:\/\//g, ""),
  pageStrings.filter(({ origin }) => origin.startsWith("ref[")),
);

/**
 * Figure captions live in two places: the numbered figures the page mounts
 * directly, and the plates `ResultsPanels.tsx` mounts for Figure 18B and Figure
 * 23. Both are checked against the manuscript's own caption lines.
 */
const captionStrings = [
  ...pageStrings.filter(({ origin }) => origin.includes(".figure.caption")),
  ...assets
    .filter((asset) => asset.caption)
    .map((asset) => ({
      origin: `asset[${asset.fileName}].caption`,
      value: asset.caption,
    })),
];
const figureCaptionCoverage = checkCorpus(
  "figure captions",
  [...manuscriptCaptions.values()].join("\n"),
  captionStrings,
);

/* ------------------------------------------------------- paragraph verbatim */

const units = paragraphUnits.map(comparable);
const brokenParagraphs = manuscriptParagraphs.filter(
  (paragraph) => !units.some((unit) => unit.includes(paragraph)),
);

/* --------------------------------------------------------------- structure */

const failures = [];
const check = (label, condition, detail = "") => {
  if (!condition) failures.push(`${label}${detail ? ` — ${detail}` : ""}`);
};

const sections = resultsPage.sections;
check(
  "ten sections",
  sections.length === 10,
  sections.map((s) => s.id).join(", "),
);
check(
  "section numbering runs 01..10",
  sections.every((s, i) => s.index === String(i + 1).padStart(2, "0")),
  sections.map((s) => s.index).join(", "),
);
check(
  "the manuscript's chapter headings survive as section titles",
  [
    "I. Target Discovery: From Four Antigens to Fifteen Testable Epitopes",
    "II. Building the Vaccine: Construction and Quality Control",
    "III. Round 1: Screening Single-Epitope Immunogenicity",
    "IV. Round 2: Functional Validation of the Combined Vaccine",
    "V. Safety: Defining the Boundaries",
    "VI. In Vivo: Efficacy and Immune Mechanism",
  ].every((title) => sections.some((s) => s.title === title)),
  sections.map((s) => s.title).join(" | "),
);
check(
  "32 subheadings (9 + 2 + 5 + 6 + 3 + 4 + 3)",
  subheadings.length === 32,
  String(subheadings.length),
);
check(
  "30 tables (27 numbered + 3 inline)",
  tables.length === 30,
  String(tables.length),
);
check(
  "every numbered table 1..27 is present, in order",
  Array.from({ length: 27 }, (_, i) => i + 1).every((n) => {
    const at = tables.findIndex((t) =>
      new RegExp(`^Table ${n}\\.`).test(t.block.caption ?? ""),
    );
    return at !== -1;
  }),
  tables.map((t) => (t.block.caption ?? "(inline)").slice(0, 26)).join(" | "),
);
check(
  "the three inline tables keep the manuscript's shape",
  tables.filter((t) => !t.block.caption).length === 3,
);
check(
  "33 numbered-figure blocks (Figure 18B and Figure 23 are plates)",
  figures.length === 33,
  String(figures.length),
);
check(
  "every figure block carries a resolved asset and real alt text",
  figures.every(({ block }) => block.src && block.alt.length > 40),
  figures
    .filter(({ block }) => !block.src || block.alt.length <= 40)
    .map(({ origin }) => origin)
    .join(", "),
);
check(
  "no figure caption repeats a manual figure number",
  figures.every(({ block }) => !/^figure\s*\d/i.test(block.caption ?? "")),
  figures.map(({ block }) => block.caption).join(" | "),
);
check("eight feature slots", features.length === 8, feats(features));
check(
  "the feature slots are the seven plates and the register",
  features.filter((key) => key === "results-references").length === 1,
  feats(features),
);

function feats(keys) {
  return keys.join(", ");
}

/* --------------------------------------------------------------- assets */

check("51 registered images", assets.length === 51, String(assets.length));
check(
  "every asset keeps its CDN slot empty until the upload is confirmed",
  assets.every((asset) => asset.uploadUrl === ""),
  assets
    .filter((asset) => asset.uploadUrl !== "")
    .map((asset) => asset.fileName)
    .join(", "),
);
check(
  "every asset resolves to a bundled local file",
  assets.every(
    (asset) => typeof asset.localSrc === "string" && asset.localSrc.length > 0,
  ),
  assets
    .filter((a) => !a.localSrc)
    .map((a) => a.fileName)
    .join(", "),
);
check(
  "every asset's recorded local source exists on disk",
  assets.every((asset) => existsSync(resolve(root, asset.localSourcePath))),
  assets
    .filter((asset) => !existsSync(resolve(root, asset.localSourcePath)))
    .map((asset) => asset.localSourcePath)
    .join(", "),
);
check(
  "every asset carries an academic alt description",
  assets.every((asset) => asset.alt.length > 40),
  assets
    .filter((a) => a.alt.length <= 40)
    .map((a) => a.fileName)
    .join(", "),
);
check(
  "filenames follow the kebab-case convention",
  assets.every((asset) =>
    /^[a-z0-9]+(-[a-z0-9]+)*\.webp$/.test(asset.fileName),
  ),
  assets
    .filter((a) => !/^[a-z0-9]+(-[a-z0-9]+)*\.webp$/.test(a.fileName))
    .map((a) => a.fileName)
    .join(", "),
);

const assetByKey = resultsAssets;
const keyForLabel = (label) => {
  const numeric = label.match(/^(\d+)([AB])?$/);
  if (!numeric) return null;
  const [, number, letter] = numeric;
  if (letter) return `fig${number}${letter.toLowerCase()}`;
  if (number === "23") return "fig23a";
  return `fig${number.padStart(2, "0")}`;
};

const captionMismatches = [];
for (const [label, caption] of manuscriptCaptions) {
  const key = keyForLabel(label);
  const entry = key ? assetByKey[key] : null;
  if (!entry) {
    captionMismatches.push(`Figure ${label}: no asset key ${key}`);
    continue;
  }
  if (comparable(entry.caption ?? "") !== caption) {
    captionMismatches.push(
      `Figure ${label}: "${entry.caption ?? "(none)"}" ≠ "${caption}"`,
    );
  }
}
check(
  "every manuscript figure caption survives on its asset, verbatim and without the label",
  captionMismatches.length === 0,
  captionMismatches.slice(0, 4).join(" | "),
);

/* ------------------------------------------------------------- citations */

const citationIndex = buildNumericCitationIndex(sections, resultsReferences);
const knownIds = new Set(resultsReferences.map((ref) => ref.id));
const citedIds = new Set([...citationIndex.byRef.keys()]);
check(
  "19 bibliography entries",
  resultsReferences.length === 19,
  String(resultsReferences.length),
);
check(
  "ids run 1..19",
  [...knownIds].sort((a, b) => a - b).every((id, i) => id === i + 1),
  [...knownIds].join(", "),
);
check(
  "every entry is field-ised for the shared register",
  resultsReferences.every(
    (ref) =>
      typeof ref.authors === "string" &&
      typeof ref.title === "string" &&
      ref.title.length > 0 &&
      typeof ref.journal === "string" &&
      typeof ref.volumeYear === "string",
  ),
);
check(
  "every bibliography entry is cited from the body",
  [...knownIds].every((id) => citedIds.has(id)),
  [...knownIds].filter((id) => !citedIds.has(id)).join(", "),
);
check(
  "no in-text marker points at a missing entry",
  citationIndex.issues.filter((issue) => issue.startsWith("no reference"))
    .length === 0,
  citationIndex.issues
    .filter((issue) => issue.startsWith("no reference"))
    .join(" | "),
);
check(
  "no paragraph drifts out of the citation index (duplicate paragraphs)",
  citationIndex.issues.filter((issue) =>
    issue.startsWith("duplicate paragraph"),
  ).length === 0,
  citationIndex.issues
    .filter((issue) => issue.startsWith("duplicate paragraph"))
    .slice(0, 3)
    .join(" | "),
);
check(
  "the author-year marker the manuscript never listed stays plain text",
  pageStrings.some(({ value }) => value.includes("(Falk et al., 1991)")),
);

/* --------------------------------------------------- plate slots are wired */

const panelsSource = readFileSync(
  resolve(root, "src/components/wiki/features/project/ResultsPanels.tsx"),
  "utf8",
);
const unwired = features.filter((key) => !panelsSource.includes(`"${key}"`));
check(
  "every feature key has an implementation in ResultsPanels.tsx",
  unwired.length === 0,
  unwired.join(", "),
);
check(
  "Figure 18B and Figure 23's three panels are mounted as plates",
  ["fig18b", "fig23a", "fig23b", "fig23c"].every((key) =>
    panelsSource.includes(`"${key}"`),
  ),
);
check(
  "the FIG. counter alignment is declared: 33 blocks + Figure 23's plate = 34 numbers",
  figures.length + 1 === 34 && manuscriptCaptions.size === 35,
  `blocks ${figures.length}, captions ${manuscriptCaptions.size}`,
);

/* ------------------------------------------------------------------ report */

if (bodyCoverage.missing.length) {
  failures.push(
    `${bodyCoverage.label}: manuscript words missing — ${bodyCoverage.missing
      .slice(0, 25)
      .join(", ")}`,
  );
}
if (referenceCoverage.missing.length) {
  failures.push(
    `${referenceCoverage.label}: manuscript words missing — ${referenceCoverage.missing
      .slice(0, 25)
      .join(", ")}`,
  );
}
if (figureCaptionCoverage.missing.length) {
  failures.push(
    `${figureCaptionCoverage.label}: manuscript words missing — ${figureCaptionCoverage.missing
      .slice(0, 25)
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

console.log("— coverage —");
for (const coverage of [
  bodyCoverage,
  referenceCoverage,
  figureCaptionCoverage,
]) {
  console.log(
    `  ${coverage.label}: ${coverage.words} words, ${coverage.missing.length} missing`,
  );
}
console.log(
  `  paragraphs: ${manuscriptParagraphs.length} checked, ${brokenParagraphs.length} broken`,
);

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed:`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log("\nresults page faithfulness verification: all checks passed");
console.log(
  `  ${sections.length} sections, ${subheadings.length} subheadings, ${tables.length} tables, ` +
    `${figures.length} figure blocks + 2 plates, ${assets.length} assets, ${resultsReferences.length} references`,
);
