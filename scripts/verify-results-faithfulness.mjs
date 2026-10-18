/**
 * Compare the actual Results data and inline output against the current manuscript.
 * The only omissions are implementation instructions, image URLs, the document's
 * title, and Markdown presentation markers.
 */
import assert from "node:assert/strict";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { build } from "esbuild";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const root = resolve(import.meta.dirname, "..");
const temp = resolve(root, ".tmp-verify");
mkdirSync(temp, { recursive: true });
const entry = resolve(temp, "results-faithfulness-entry.ts");
writeFileSync(
  entry,
  `
export { resultsPage } from "../src/data/project/resultsPage";
export { resultsReferences, resultsCitationReferences } from "../src/data/project/resultsReferences";
export { resultsAssets, resultsFigureCaptions } from "../src/data/project/resultsAssets";
export { resultsFeatures, renderResultsText } from "../src/components/wiki/features/project/ResultsPanels";
export { renderInlineFormatting } from "../src/components/wiki/proseInline";
export { buildAuthorYearCitationIndex } from "../src/data/citations/citationIndex";
`,
);
const bundle = resolve(temp, "results-faithfulness.cjs");
await build({
  entryPoints: [entry],
  outfile: bundle,
  bundle: true,
  platform: "node",
  format: "cjs",
  packages: "external",
  logLevel: "error",
  define: { "import.meta.env.DEV": "false", "import.meta.env.BASE_URL": '"/"' },
  loader: { ".css": "empty" },
  plugins: [
    {
      name: "source-asset-paths",
      setup(builder) {
        builder.onLoad({ filter: /\.(png|webp|avif|svg)$/ }, ({ path }) => ({
          contents: `export default ${JSON.stringify(path)};`,
          loader: "js",
        }));
      },
    },
  ],
});
const require = createRequire(import.meta.url);
delete require.cache[bundle];
const {
  resultsPage,
  resultsReferences,
  resultsCitationReferences,
  resultsAssets,
  resultsFigureCaptions,
  resultsFeatures,
  renderResultsText,
  renderInlineFormatting,
  buildAuthorYearCitationIndex,
} = require(bundle);

const unescape = (s) => s.replace(/\\([\p{P}\p{S}])/gu, "$1");
const normalize = (s) =>
  unescape(s).replace(/\*/g, "").replace(/\s+/g, " ").trim();
const caption = (s) => normalize(s).replace(/^Figure \d+\.\s*/, "");
const source = readFileSync(
  resolve(root, "文案集/project/results/3.3 Results.md"),
  "utf8",
)
  .replace(/\r\n/g, "\n")
  .split(/\n\s*\n/)
  .map((s) => s.trim())
  .filter(Boolean);
const expected = [];
const referenceSource = [];
const sourceCaptions = [];
const sourceHeadings = [];
let inReferences = false;
for (let i = 1; i < source.length; i++) {
  const p = unescape(source[i]);
  if (/^# References\s*$/.test(p)) {
    inReferences = true;
    continue;
  }
  if (inReferences) {
    referenceSource.push(normalize(p.replace(/^\d+\.\s*/, "")));
    continue;
  }
  if (
    p === "这里用model页已经做好了的组件" ||
    p === "这两个图是现在现成的组件" ||
    /^---+$/.test(p)
  )
    continue;
  if (p.startsWith("![") || p.startsWith("https://static.igem.wiki/")) {
    if (source[i + 1]?.startsWith("https:")) i++;
    const text = caption(source[++i]);
    sourceCaptions.push(text);
    expected.push(text);
    continue;
  }
  if (p.startsWith("|")) {
    for (const line of source[i]
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)) {
      if (/^\|[\s:|\-]+\|$/.test(line)) continue;
      expected.push(
        line
          .replace(/^\||\|$/g, "")
          .split(/(?<!\\)\|/)
          .map(normalize)
          .join(" | "),
      );
    }
    continue;
  }
  if (/^#{1,3} /.test(p)) {
    const heading = normalize(p.replace(/^#{1,3} /, ""));
    if (/^# /.test(p)) sourceHeadings.push(heading);
    expected.push(heading);
    continue;
  }
  expected.push(normalize(p.replace(/^\d+\.\s*/, "")));
}

const actual = [];
const textUnits = [];
const featureKeys = [];
const figures = [];
const tables = [];
for (const section of resultsPage.sections) {
  if (section.title === "References") continue;
  actual.push(normalize(section.title));
  for (const block of section.blocks || []) {
    if (block.type === "prose") {
      actual.push(...block.paragraphs.map(normalize));
      textUnits.push(...block.paragraphs);
    } else if (block.type === "list") {
      actual.push(...block.items.map(normalize));
      textUnits.push(...block.items);
    } else if (block.type === "subheading") {
      actual.push(normalize(block.title));
    } else if (block.type === "table") {
      tables.push(block);
      if (block.caption) actual.push(normalize(block.caption));
      actual.push(block.headers.map(normalize).join(" | "));
      actual.push(...block.rows.map((row) => row.map(normalize).join(" | ")));
    } else if (block.type === "figure") {
      actual.push(normalize(block.caption));
      figures.push(block);
    } else if (block.type === "feature") {
      featureKeys.push(block.key);
      const keys = {
        "results-volcano-024322": ["fig01"],
        "results-volcano-028102": ["fig03"],
        "results-plate-structural": ["fig11", "fig12"],
        "results-dose-scan": ["fig30"],
      }[block.key];
      assert.ok(keys, "Unrecognized Results feature: " + block.key);
      actual.push(...keys.map((key) => normalize(resultsFigureCaptions[key])));
    } else assert.fail("Unverified block type: " + block.type);
  }
}
const mismatches = [];
for (let i = 0; i < Math.max(expected.length, actual.length); i++) {
  if (expected[i] !== actual[i])
    mismatches.push({ unit: i + 1, source: expected[i], page: actual[i] });
}
writeFileSync(
  resolve(temp, "results-text-diff.json"),
  JSON.stringify(mismatches, null, 2),
);
assert.equal(
  mismatches.length,
  0,
  "Manuscript mismatch; inspect .tmp-verify/results-text-diff.json",
);
assert.deepEqual(
  resultsPage.sections.map((s) => s.title),
  [...sourceHeadings, "References"],
);
assert.equal(resultsPage.sections.length, 11);
assert.equal(figures.length, 46);
assert.equal(sourceCaptions.length, 51);
assert.deepEqual(
  Object.values(resultsFigureCaptions).map(normalize),
  sourceCaptions,
);
assert.equal(tables.length, 31);
assert.ok(
  tables.some((t) => /^Table 1\./.test(t.caption || "")),
  "Render the author's supplied Table 1",
);

const referenceText = resultsReferences.map((r) =>
  normalize(
    [
      r.authors,
      r.title,
      r.journal,
      r.volumeYear,
      ...(r.links || []).map((l) => l.label),
    ].join(" "),
  ),
);
assert.deepEqual(
  referenceText,
  referenceSource,
  "Bibliography must retain every original word and identifier",
);
assert.equal(resultsReferences.length, 37);
assert.deepEqual(
  resultsReferences.map((r) => r.id),
  Array.from({ length: 37 }, (_, i) => i + 1),
);

const decode = (s) =>
  s
    .replace(/<[^>]*>/g, "")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#x([\da-f]+);/gi, (_, n) =>
      String.fromCodePoint(parseInt(n, 16)),
    )
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
for (const paragraph of textUnits) {
  const html = renderToStaticMarkup(
    React.createElement(
      "div",
      null,
      renderResultsText(paragraph, renderInlineFormatting),
    ),
  );
  const visible = decode(html);
  assert.equal(
    normalize(visible),
    normalize(paragraph),
    "Inline rendering lost text: " + paragraph.slice(0, 100),
  );
  assert.deepEqual(
    visible.match(/\*{3,}/g) || [],
    paragraph.match(/\*{3,}/g) || [],
    "Significance stars changed: " + paragraph.slice(0, 100),
  );
  assert.equal(
    (visible.match(/HLA-A\*02:01/g) || []).length,
    (paragraph.match(/HLA-A\*02:01/g) || []).length,
    "HLA allele spelling changed",
  );
}

const features = resultsFeatures();
for (const key of [...featureKeys, "results-references"])
  assert.ok(features[key], "Unmapped feature " + key);
const structuralHtml = renderToStaticMarkup(
  features["results-plate-structural"],
);
assert.ok(
  !structuralHtml.includes("Academic &amp; Structural Interpretation"),
  "Legacy editorial notes leaked into Results",
);
for (const key of ["fig11", "fig12"])
  assert.ok(decode(structuralHtml).includes(resultsFigureCaptions[key]));
for (const asset of Object.values(resultsAssets)) {
  assert.ok(
    /^[a-z0-9-]+\.(avif|png|webp)$/.test(asset.fileName),
    "Noncanonical file name",
  );
  assert.ok(
    asset.width > 0 && asset.height > 0,
    "Missing intrinsic dimensions",
  );
  assert.ok(
    existsSync(resolve(root, asset.localSourcePath)),
    "Missing source " + asset.localSourcePath,
  );
  assert.ok(
    asset.uploadUrl
      ? source.some((p) => unescape(p).trim() === asset.uploadUrl)
      : asset.localSrc && existsSync(asset.localSrc),
    "Unverifiable image source",
  );
}
const ids = resultsPage.sections.flatMap((s) => [
  s.id,
  ...(s.anchorIds || []),
  ...s.blocks
    .filter((b) => b.type === "subheading")
    .flatMap((b) => [b.id, ...(b.anchorIds || [])]),
]);
assert.equal(new Set(ids).size, ids.length, "Duplicate navigation anchor");
const citationIndex = buildAuthorYearCitationIndex(
  resultsPage.sections,
  resultsCitationReferences,
);
const preservedCitationIssues = [
  "citation inside bold text: Falk et al., 1991",
];
assert.deepEqual(
  citationIndex.issues,
  preservedCitationIssues,
  "Only the documented, deliberately preserved manuscript citation issues may remain",
);
writeFileSync(
  resolve(temp, "results-citation-audit.json"),
  JSON.stringify(
    {
      resolved: [...citationIndex.byRef.keys()],
      preservedCitationIssues,
    },
    null,
    2,
  ),
);
const report = {
  manuscriptUnits: expected.length,
  renderedProseUnits: textUnits.length,
  sections: resultsPage.sections.length,
  figureNumbers: sourceCaptions.length,
  staticImages: figures.length,
  tables: tables.length,
  references: resultsReferences.length,
  linkedReferences: citationIndex.byRef.size,
  localOriginals: Object.values(resultsAssets).filter((a) => !a.uploadUrl)
    .length,
};
writeFileSync(
  resolve(temp, "results-faithfulness-report.json"),
  JSON.stringify(report, null, 2),
);
console.log(
  "PASS: Results source, order, captions, tables, references, inline text, stars, assets and anchors.",
);
console.log(JSON.stringify(report));
