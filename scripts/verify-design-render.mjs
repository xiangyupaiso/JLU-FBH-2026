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
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, ".tmp-verify");
mkdirSync(outDir, { recursive: true });

const probe = resolve(outDir, "designRenderProbe.tsx");
writeFileSync(
  probe,
  `import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { linkify } from "../src/components/wiki/proseInline";
import { DesignConstructViewer } from "../src/components/wiki/features/wet-lab/DesignConstructViewer";
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

/** Every content block, flattened out of the section tree. */
function flatten(blocks: WikiContentBlock[] | undefined): WikiContentBlock[] {
  return (blocks ?? []).flatMap((block) =>
    block.type === "split" ? [block, ...flatten(block.prose)] : [block],
  );
}

export const report = {
  viewer: renderToStaticMarkup(<DesignConstructViewer />),
  references,
  edaReport: renderToStaticMarkup(<>{designFeatures()["design-eda-report"]}</>),
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
check("Figure 6 caption is present", viewer.includes("Figure 6. Construct architecture"));
check("map ring is drawn", viewer.includes("cc-ring"));
check("element glyphs are drawn", occurrences(viewer, 'class="cc-tag"') >= 39);
check(
  "hit targets carry a title",
  occurrences(viewer, 'class="cc-hit"') >= 39,
);
check("restriction cut marks are drawn", occurrences(viewer, 'class="cc-g cc-gsite"') === 7);
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
  !report.crossReferences.includes("](/") && !report.crossReferences.includes("](https"),
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
check("nine figure blocks are placed", figures.length === 9, `${figures.length}`);
check(
  "every figure has a source, alt text and caption",
  figures.every(
    (block) =>
      block.type === "figure" && block.src && block.alt.length > 40 && block.caption,
  ),
);
check(
  "captions carry no manual figure number",
  figures.every(
    (block) => block.type === "figure" && !/^figure\s/i.test(block.caption ?? ""),
  ),
  // The reader prints its own "FIG. nn" badge from a CSS counter, so a caption
  // that repeats the number would double it up.
  figures.map((block) => (block.type === "figure" ? block.caption : "")).join(" | "),
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
  report.figureSources.filter((figure) => !figure.src).map((figure) => figure.key).join(", "),
);
check(
  "the EDA report resolves to a public URL",
  report.edaReportUrl === "/jlu-fbh/assets/docs/design-eda-report-nc3rs.pdf",
  report.edaReportUrl,
);

/* The report is a document, not an illustration: the reader's `FIG. nn` badge
   hangs on `.wiki-figure`, so the embed must not carry that class. */
check(
  "the embedded report carries no figure badge",
  !report.edaReport.includes("wiki-figure"),
  report.edaReport.slice(0, 200),
);
check(
  "the embedded report is still captioned",
  report.edaReport.includes("design-pdf-figure__frame") &&
    report.edaReport.includes("Experimental Design Report, NC3Rs EDA.") &&
    report.edaReport.includes("/jlu-fbh/assets/docs/design-eda-report-nc3rs.pdf"),
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
    .every((section, index) => section.index === String(index + 1).padStart(2, "0")),
  report.sections.map((s) => s.index).join(", "),
);
check(
  "related links point at routes that exist",
  report.links.length === 3 &&
    report.links.every((link) => link.path.startsWith("/")),
);
check("next record is the Experiments page", report.next.path === "/experiments");

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
console.log(`  assets     ${report.assets.length} registered, none uploaded yet`);
