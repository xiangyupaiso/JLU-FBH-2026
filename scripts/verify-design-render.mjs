/**
 * End-to-end render probe for the Design page.
 *
 * The page is client-rendered, so the only way to check it without a browser is
 * to render its feature components and data layer through `react-dom/server`:
 * esbuild bundles a generated probe entry, the probe renders the construct
 * viewer, the bibliography and a cited paragraph, and this script asserts on the
 * markup and on the asset registry. Run with
 * `node scripts/verify-design-render.mjs`.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, ".tmp-verify");
mkdirSync(outDir, { recursive: true });

/* Part of the document skin's contract is "must NOT exist" (no ornament), so
   the stylesheet is read as well as the rendered markup. */
const documentSkinCss = readFileSync(
  resolve(root, "src/styles/wiki-documents.css"),
  "utf8",
);

const probe = resolve(outDir, "designRenderProbe.tsx");
writeFileSync(
  probe,
  `import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { linkify } from "../src/components/wiki/proseInline";
import { DesignConstructViewer, SEQUENCE_BASES_PER_ROW } from "../src/components/wiki/features/wet-lab/DesignConstructViewer";
import { DocumentViewer } from "../src/components/wiki/documents/DocumentViewer";
import { designFeatures } from "../src/components/wiki/features/wet-lab/DesignPanels";
import { designAssets, getDesignDocument, getDesignImage } from "../src/data/wet-lab/designAssets";
import { designPage, designReferences } from "../src/data/wet-lab/designPage";
import { buildNumericCitationIndex } from "../src/data/citations/citationIndex";
import type { WikiContentBlock } from "../src/components/wiki/wikiPageTypes";

/** Citation rendering is verified end to end by scripts/verify-citations.mjs;
    this probe owns the construct viewer, the embedded report and the data. */
const citationIndex = buildNumericCitationIndex(designPage.sections, designReferences);

/** The Overview paragraph that cross-references other pages and the Registry. */
const crossReferenceParagraph = designPage.sections
  .flatMap((section) => section.blocks ?? [])
  .flatMap((block) => (block.type === "prose" ? block.paragraphs : []))
  .find((paragraph) => paragraph.includes("registry.igem.org")) as string;

const crossReferences = renderToStaticMarkup(
  <MemoryRouter>
    <p>{linkify(crossReferenceParagraph)}</p>
  </MemoryRouter>,
);

/** The bibliography, through the page's real feature wiring. */
const references = renderToStaticMarkup(<>{designFeatures()["design-references"]}</>);

/** The embedded report, in both states: the page mounts it collapsed. */
const edaReport = designAssets.edaReport;
const edaCollapsed = renderToStaticMarkup(<>{designFeatures()["design-eda-report"]}</>);
const edaExpanded = renderToStaticMarkup(
  <DocumentViewer
    defaultOpen
    document={{
      caption: edaReport.caption,
      url: getDesignDocument("edaReport"),
    }}
  />,
);

/** Every content block, flattened out of the section tree. */
function flatten(blocks: WikiContentBlock[] | undefined): WikiContentBlock[] {
  return (blocks ?? []).flatMap((block) =>
    block.type === "split" ? [block, ...flatten(block.prose)] : [block],
  );
}

export const report = {
  viewer: renderToStaticMarkup(<DesignConstructViewer />),
  basesPerRow: SEQUENCE_BASES_PER_ROW,
  references,
  edaCollapsed,
  edaExpanded,
  crossReferences,
  citedParagraphs: [...citationIndex.byParagraph.keys()],
  blocks: designPage.sections.flatMap((section) => flatten(section.blocks)),
  sections: designPage.sections.map((section) => ({
    id: section.id,
    index: section.index,
    title: section.title,
  })),
  links: designPage.links,
  next: designPage.next,
  referenceCount: designReferences.length,
  assets: Object.entries(designAssets).map(([key, asset]) => ({
    key,
    kind: asset.kind,
    uploadUrl: asset.uploadUrl,
    localSourcePath: asset.localSourcePath,
    fileName: asset.fileName,
    alt: asset.alt,
    caption: "caption" in asset ? asset.caption : undefined,
  })),
  figureSources: Object.keys(designAssets)
    .filter((key) => designAssets[key as keyof typeof designAssets].kind === "image")
    .map((key) => ({ key, src: getDesignImage(key as never) })),
  edaReportUrl: getDesignDocument("edaReport"),
};
`,
  "utf8",
);

const esbuild = resolve(root, "node_modules/esbuild/bin/esbuild");
const bundle = resolve(outDir, "designRenderProbe.cjs");

execFileSync(
  process.execPath,
  [
    esbuild,
    "--bundle",
    probe,
    // CJS: react-dom/server pulls node built-ins through `require`.
    "--format=cjs",
    "--platform=node",
    "--jsx=automatic",
    "--loader:.css=empty",
    "--loader:.webp=text",
    "--loader:.png=text",
    "--loader:.svg=text",
    "--loader:.jpg=text",
    "--loader:.jpeg=text",
    "--loader:.avif=text",
    "--loader:.gif=text",
    "--loader:.mp4=empty",
    "--loader:.woff=empty",
    "--loader:.woff2=empty",
    // No shell here, so the JSON quotes reach esbuild verbatim.
    '--define:import.meta.env.BASE_URL="/jlu-fbh/"',
    "--define:import.meta.env.DEV=false",
    `--outfile=${bundle}`,
    "--log-level=warning",
  ],
  { stdio: "inherit" },
);

const { report } = createRequire(import.meta.url)(bundle);

const failures = [];
const check = (label, condition, detail = "") => {
  if (!condition) failures.push(`${label}${detail ? ` — ${detail}` : ""}`);
};
const occurrences = (haystack, needle) => haystack.split(needle).length - 1;

/* ------------------------------------------------------- construct viewer */

const { viewer } = report;
check("viewer renders at all", viewer.length > 2000, `${viewer.length} chars`);
check("viewer names the plasmid", viewer.includes("pCirCure-circMEV"));
check("viewer names the template length", viewer.includes("5,267 bp"));
check(
  "three panel headings, sentence case",
  ["Plasmid map", "Element function", "Sequence"].every((heading) =>
    viewer.includes(`>${heading}<`),
  ),
);
check("no uppercase panel eyebrow", !viewer.includes("PLASMID MAP"));
check(
  "Figure 6 caption is present",
  viewer.includes("Figure 6. Construct architecture"),
);
check("map ring is drawn", viewer.includes("cc-ring"));
check("element glyphs are drawn", occurrences(viewer, 'class="cc-tag"') >= 39);
check("hit targets carry a title", occurrences(viewer, 'class="cc-hit"') >= 39);
check(
  "restriction cut marks are drawn",
  occurrences(viewer, 'class="cc-g cc-gsite"') === 7,
);
check("sequence browser is mounted", viewer.includes('class="cc-seqscroll"'));
check(
  "the base-advance measuring probe is mounted",
  viewer.includes("cc-strand cc-meas"),
);
/* Row layout needs a measured base advance, which only exists in a browser;
   scripts/verify-design-construct.mjs covers that half against explicit metrics. */
check("no NaN leaked into the markup", !viewer.includes("NaN"));
check("no undefined leaked into the markup", !viewer.includes("undefined"));
check(
  "element panel starts in its neutral state",
  viewer.includes("select an element"),
);

/* -------------------------------------------------- cross-page prose links */

check(
  "internal page links render as router links",
  report.crossReferences.includes('href="/measurement"') &&
    report.crossReferences.includes('href="/engineering"'),
  report.crossReferences.slice(0, 200),
);
check(
  "registry links render as external anchors",
  report.crossReferences.includes('href="https://registry.igem.org/parts"') &&
    report.crossReferences.includes('target="_blank"'),
);
check(
  "no Markdown link syntax survives into the prose",
  !report.crossReferences.includes("](/") &&
    !report.crossReferences.includes("](https"),
);
check(
  "the bibliography is mounted through the page's feature map",
  report.references.includes("wiki-reference-list") &&
    report.references.includes('id="ref-15"'),
);
check(
  "citation markers are indexed for the shared register",
  report.citedParagraphs.length >= 15,
  `${report.citedParagraphs.length} paragraphs`,
);
/* --------------------------------------------------------- data / assets */

const figures = report.blocks.filter((block) => block.type === "figure");
check(
  "nine figure blocks are placed",
  figures.length === 9,
  `${figures.length}`,
);
check(
  "every figure has a source, alt text and caption",
  figures.every(
    (block) =>
      block.type === "figure" &&
      block.src &&
      block.alt.length > 40 &&
      block.caption,
  ),
);
check(
  "captions carry no manual figure number",
  figures.every(
    (block) =>
      block.type === "figure" && !/^figure\s/i.test(block.caption ?? ""),
  ),
  // The reader prints its own "FIG. nn" badge from a CSS counter, so a caption
  // that repeats the number would double it up.
  figures
    .map((block) => (block.type === "figure" ? block.caption : ""))
    .join(" | "),
);

const features = report.blocks.filter((block) => block.type === "feature");
check(
  "three feature slots are placed",
  features.length === 3 &&
    features.every((block) =>
      block.type === "feature"
        ? [
            "construct-architecture-viewer",
            "design-eda-report",
            "design-references",
          ].includes(block.key)
        : false,
    ),
  JSON.stringify(features),
);

check(
  "ten assets are registered",
  report.assets.length === 10,
  `${report.assets.length}`,
);
check(
  "no asset pretends to be uploaded",
  report.assets.every((asset) => asset.uploadUrl === ""),
);
check(
  "every asset names its local source",
  report.assets.every((asset) => asset.localSourcePath.length > 0),
);
check(
  "every asset carries accessibility text",
  report.assets.every((asset) => asset.alt.length > 30),
);
check(
  "every bundled image resolves",
  report.figureSources.every((figure) => figure.src.length > 0),
  report.figureSources
    .filter((figure) => !figure.src)
    .map((figure) => figure.key)
    .join(", "),
);
check(
  "the EDA report resolves to a public URL",
  report.edaReportUrl === "/jlu-fbh/assets/docs/design-eda-report-nc3rs.pdf",
  report.edaReportUrl,
);

/* The report is a document, not an illustration: the reader's `FIG. nn` badge
   hangs on `.wiki-figure`, so the embed must not carry that class — and it is
   mounted collapsed, so no plugin surface exists until the reader asks. */
check(
  "the report is collapsed until asked for",
  !report.edaCollapsed.includes("<iframe") &&
    report.edaCollapsed.includes('aria-expanded="false"') &&
    report.edaCollapsed.includes(">Read<"),
  report.edaCollapsed.slice(0, 240),
);
check(
  "the collapsed report carries no figure badge",
  !report.edaCollapsed.includes("wiki-figure"),
);
/* The manuscript owns the card's words. It gives exactly one line for this
   embed — `Figure 9. Experimental Design Report, NC3Rs EDA.` — so the card shows
   that caption and nothing else: no invented title, subtitle, file name or
   "PDF" tile restating what the paragraph above already says. */
const edaText = report.edaCollapsed
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();
check(
  "the card carries the manuscript caption and nothing else",
  report.edaCollapsed.includes("wiki-document__caption") &&
    edaText === "Experimental Design Report, NC3Rs EDA. Read",
  edaText,
);
check(
  "the card invents no title, subtitle, file name or file-type badge",
  !report.edaCollapsed.includes("NC3Rs Experimental Design Report") &&
    !report.edaCollapsed.includes("ARRIVE 2.0 Essential 10") &&
    !report.edaCollapsed.includes("design-eda-report-nc3rs.pdf") &&
    !report.edaCollapsed.includes("__tile") &&
    !report.edaCollapsed.includes("__file") &&
    !report.edaCollapsed.includes("__meta") &&
    !report.edaCollapsed.includes("<svg"),
);
/* The team's own rules ban AI eyebrows (铁律 4) and generative ornaments such as
   top rules and dots (铁律 3). The card's colour is its surface, not an added
   line, and the skin file must not grow one back. */
check(
  "the card carries no ornament beyond its surface",
  report.edaCollapsed.includes("wiki-document__card") &&
    !report.edaCollapsed.includes("__rail") &&
    !documentSkinCss.includes("__rail") &&
    !documentSkinCss.includes("::after"),
  report.edaCollapsed.slice(0, 240),
);
check(
  "the collapsed report is not marked open",
  !report.edaCollapsed.includes("is-open") &&
    report.edaExpanded.includes("wiki-document is-open"),
);
check(
  "expanding mounts the frame at the resolved document URL",
  report.edaExpanded.includes('aria-expanded="true"') &&
    report.edaExpanded.includes("wiki-document__frame") &&
    report.edaExpanded.includes(
      'src="/jlu-fbh/assets/docs/design-eda-report-nc3rs.pdf"',
    ),
);
check(
  "one sequence row holds the fixed fifty bases",
  report.basesPerRow === 50,
  String(report.basesPerRow),
);

check(
  "ten sections are declared",
  report.sections.length === 10,
  report.sections.map((section) => section.id).join(", "),
);
check(
  "the first section is an unnumbered overview",
  report.sections[0].id === "overview",
);
check(
  "section numbering matches the manuscript",
  report.sections
    .slice(1)
    .every(
      (section, index) => section.index === String(index + 1).padStart(2, "0"),
    ),
  report.sections.map((s) => s.index).join(", "),
);
check(
  "related links point at routes that exist",
  report.links.length >= 3 &&
    report.links.every((link) => link.path.startsWith("/")),
);
check(
  "next record is the Experiments page",
  report.next.path === "/experiments",
);

/* ----------------------------------------------------------------- report */

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed:`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log("design page render verification: all checks passed");
console.log(`  viewer     ${viewer.length.toLocaleString()} chars of markup`);
console.log(
  `  citations  ${report.citedParagraphs.length} cited paragraphs, ${report.referenceCount} references`,
);
console.log(
  `  content    ${figures.length} figures, ${features.length} feature slots, ${report.sections.length} sections`,
);
console.log(
  `  assets     ${report.assets.length} registered, none uploaded yet`,
);
