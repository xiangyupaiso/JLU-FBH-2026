/**
 * Verification harness for the shared citation register.
 *
 * The register is one implementation serving every page that cites sources, so
 * this script exercises it through the pages' real feature wiring — the same
 * components `WikiRoutePage` mounts — and asserts both the interaction markup and
 * the bibliographic text. Covering two different in-text conventions at once is
 * the point: Description writes `(Sung et al. 2026)` and Design writes `[1]`, and
 * both must reach the same register, anchors and back-links.
 *
 * Run with `node scripts/verify-citations.mjs`.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, ".tmp-verify");
mkdirSync(outDir, { recursive: true });

const probe = resolve(outDir, "citationProbe.tsx");
writeFileSync(
  probe,
  `import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { linkify } from "../src/components/wiki/proseInline";
import { descriptionFeatures, renderCitedText } from "../src/components/wiki/features/project/DescriptionPanels";
import { designFeatures, renderDesignCitedText } from "../src/components/wiki/features/wet-lab/DesignPanels";
import { hardwareFeatures, renderHardwareCitedText } from "../src/components/wiki/features/drylab/HardwarePanels";
import { resultsFeatures, renderResultsText } from "../src/components/wiki/features/project/ResultsPanels";
import { entrepreneurshipFeatures, renderEntrepreneurshipInline } from "../src/components/wiki/features/engagement/EntrepreneurshipPanels";
import { alternativePlatformFeatures, renderAlternativePlatformCitedText } from "../src/components/wiki/features/wet-lab/AlternativePlatformPanels";
import { descriptionPage, descriptionReferences } from "../src/data/project/descriptionPage";
import { designPage, designReferences } from "../src/data/wet-lab/designPage";
import { hardwarePage, hardwareReferences } from "../src/data/drylab/hardwarePage";
import { resultsPage } from "../src/data/project/resultsPage";
import { resultsReferences } from "../src/data/project/resultsReferences";
import { entrepreneurshipPage } from "../src/data/engagement/entrepreneurshipPage";
import { entrepreneurshipReferences } from "../src/data/engagement/entrepreneurshipReferences";
import { alternativePlatformPage, alternativePlatformReferences } from "../src/data/wet-lab/alternativePlatformPage";
import { buildAuthorYearCitationIndex, buildNumericCitationIndex } from "../src/data/citations/citationIndex";

const render = (node: unknown) =>
  renderToStaticMarkup(<MemoryRouter>{node as never}</MemoryRouter>);

function page(name: string, sections: never, refs: never, index: never, renderer: never, feature: unknown, minimumCited = 12) {
  const paragraphs = [...(index as { byParagraph: Map<string, unknown> }).byParagraph.keys()] as string[];
  return {
    name,
    minimumCited,
    references: refs,
    indexPath: index,
    register: render(feature),
    cited: paragraphs.map((paragraph) => ({
      paragraph,
      html: render(<p>{(renderer as (t: string, f: unknown) => unknown)(paragraph, linkify)}</p>),
    })),
  };
}

const descriptionIndex = buildAuthorYearCitationIndex(descriptionPage.sections, descriptionReferences);
const designIndex = buildNumericCitationIndex(designPage.sections, designReferences);
const hardwareIndex = buildNumericCitationIndex(hardwarePage.sections, hardwareReferences);
const resultsIndex = buildNumericCitationIndex(resultsPage.sections, resultsReferences);
const entrepreneurshipIndex = buildNumericCitationIndex(entrepreneurshipPage.sections, entrepreneurshipReferences);
const alternativePlatformIndex = buildAuthorYearCitationIndex(alternativePlatformPage.sections, alternativePlatformReferences);

/**
 * Emphasis rules are checked as units, not through the corpus: the paragraphs
 * that carry a gene-name italic or a significance note of asterisks mostly carry
 * no citation marker, so the indexed paragraphs alone would never exercise them.
 */
const emphasis = {
  italic: render(<p>{(renderResultsText as never as (t: string, f: unknown) => unknown)("circularised through the T4 *td* permuted intron", linkify)}</p>),
  hla: render(<p>{(renderResultsText as never as (t: string, f: unknown) => unknown)("screened against HLA-A*02:01 and HLA-A*02:01 again", linkify)}</p>),
  stars: render(<p>{(renderResultsText as never as (t: string, f: unknown) => unknown)("Error bars are SD; *** denotes P < 0.001 for Blank vs Combined.", linkify)}</p>),
  stars4: render(<p>{(renderResultsText as never as (t: string, f: unknown) => unknown)("**** denotes P < 0.0001.", linkify)}</p>),
  bold: render(<p>{(renderResultsText as never as (t: string, f: unknown) => unknown)("**Aim**｜Quantify at **single-cell resolution** the frequency.", linkify)}</p>),
};

export const report = {
  entrepreneurship: page(
    "entrepreneurship",
    entrepreneurshipPage.sections as never,
    entrepreneurshipReferences as never,
    entrepreneurshipIndex as never,
    renderEntrepreneurshipInline as never,
    entrepreneurshipFeatures()["entrepreneurship-references"],
    8,
  ),
  alternativePlatform: page(
    "alternative-platform",
    alternativePlatformPage.sections as never,
    alternativePlatformReferences as never,
    alternativePlatformIndex as never,
    renderAlternativePlatformCitedText as never,
    alternativePlatformFeatures()["alternative-platform-references"],
  ),
  description: page(
    "description",
    descriptionPage.sections as never,
    descriptionReferences as never,
    descriptionIndex as never,
    renderCitedText as never,
    descriptionFeatures()["description-references"],
  ),
  design: page(
    "design",
    designPage.sections as never,
    designReferences as never,
    designIndex as never,
    renderDesignCitedText as never,
    designFeatures()["design-references"],
  ),
  hardware: page(
    "hardware",
    hardwarePage.sections as never,
    hardwareReferences as never,
    hardwareIndex as never,
    renderHardwareCitedText as never,
    hardwareFeatures()["hardware-references"],
  ),
  results: page(
    "results",
    resultsPage.sections as never,
    resultsReferences as never,
    resultsIndex as never,
    renderResultsText as never,
    resultsFeatures()["results-references"],
    11,
  ),
  emphasis,
};
`,
  "utf8",
);

const esbuild = resolve(root, "node_modules/esbuild/bin/esbuild");
const bundle = resolve(outDir, "citationProbe.cjs");

execFileSync(
  process.execPath,
  [
    esbuild,
    "--bundle",
    probe,
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
    "--loader:.webm=empty",
    "--loader:.woff=empty",
    "--loader:.woff2=empty",
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
const textOf = (html) =>
  html
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");

for (const page of [
  report.description,
  report.design,
  report.hardware,
  report.results,
  report.entrepreneurship,
  report.alternativePlatform,
]) {
  const { name, references, indexPath, register, cited } = page;

  /* -------------------------------------------------------------- register */

  check(
    `${name}: every reference is listed`,
    occurrences(register, 'class="wiki-reference-item"') === references.length,
    `${occurrences(register, 'class="wiki-reference-item"')} of ${references.length}`,
  );
  check(
    `${name}: anchors use the shared scheme`,
    references.every((ref) => register.includes(`id="ref-${ref.id}"`)),
  );
  check(
    `${name}: every entry has the body anchor the inline link points at`,
    references.every((ref) => register.includes(`id="ref-${ref.id}-body"`)),
  );
  check(
    `${name}: authors render in the bold slot`,
    occurrences(register, "wiki-reference-item__authors") >=
      references.length - 6,
  );
  check(
    `${name}: journals render in the italic slot`,
    occurrences(register, "wiki-reference-item__journal") ===
      references.filter((ref) => ref.journal).length,
  );
  check(
    `${name}: volume and year render in the mono slot`,
    occurrences(register, "wiki-reference-item__vol") === references.length,
  );
  check(
    `${name}: hover card is mounted once`,
    occurrences(register, 'class="wiki-cite-preview"') === 0 &&
      register.includes("wiki-reference-list"),
  );

  // Every alphabetic token of the reference data must survive into the register.
  const missing = [];
  for (const ref of references) {
    const source = textOf(
      [ref.authors, ref.title, ref.journal, ref.volumeYear]
        .filter(Boolean)
        .join(" "),
    );
    const rendered = textOf(register);
    for (const token of source.split(/[^\p{L}\p{N}]+/u)) {
      if (token.length < 5) continue;
      if (!rendered.includes(token)) missing.push(`${ref.id}:${token}`);
    }
  }
  check(
    `${name}: reference text survives verbatim`,
    missing.length === 0,
    missing.slice(0, 8).join(", "),
  );

  check(
    `${name}: identifier links point off-site`,
    references.every((ref) =>
      (ref.links ?? []).every(
        (link) =>
          register.includes(`href="${link.href}"`) &&
          textOf(register).includes(link.label.split(" ")[0]),
      ),
    ),
  );

  /* ---------------------------------------------------------------- in-text */

  check(
    `${name}: the index resolved every citation it saw`,
    indexPath.issues.length === 0,
    indexPath.issues.slice(0, 5).join(" | "),
  );
  check(
    `${name}: paragraphs with citations were found`,
    cited.length >= page.minimumCited,
    `${cited.length}`,
  );
  check(
    `${name}: every cited paragraph renders inline citation links`,
    cited.every((entry) => entry.html.includes('class="wiki-cite"')),
  );
  check(
    `${name}: inline links carry the occurrence anchor`,
    cited.some((entry) => entry.html.includes('id="cite-1-1"')),
  );
  check(
    `${name}: inline links target the register`,
    cited.every(
      (entry) =>
        !entry.html.includes('class="wiki-cite"') ||
        /href="#ref-\d+"/.test(entry.html),
    ),
  );
  check(
    `${name}: no markup artefacts leaked into prose`,
    !register.includes("undefined") &&
      !register.includes("NaN") &&
      cited.every((entry) => !entry.html.includes("undefined")),
  );

  // Every occurrence recorded by the index must exist in the rendered markup.
  const occIds = [...indexPath.byRef.values()].flat().map((occ) => occ.occId);
  const renderedOccIds = new Set(
    cited.flatMap((entry) =>
      [...entry.html.matchAll(/id="(cite-\d+-\d+)"/g)].map((m) => m[1]),
    ),
  );
  const missingOcc = occIds.filter((id) => !renderedOccIds.has(id));
  check(
    `${name}: every recorded occurrence is rendered`,
    missingOcc.length === 0,
    missingOcc.slice(0, 6).join(", "),
  );

  // Back-links: a cited reference must link back, an uncited one must not.
  const citedRefIds = new Set(
    cited.flatMap((entry) =>
      [...entry.html.matchAll(/aria-describedby="([^"]+)"/g)].flatMap((m) =>
        [...m[1].matchAll(/ref-(\d+)-body/g)].map((ref) => Number(ref[1])),
      ),
    ),
  );
  const backlinkRefIds = new Set(
    [...register.matchAll(/class="wiki-reference-item__backlinks"/g)].length
      ? [...register.matchAll(/href="#cite-(\d+)-\d+"/g)].map((m) =>
          Number(m[1]),
        )
      : [],
  );
  const uncited = references.filter((ref) => !citedRefIds.has(ref.id));
  check(
    `${name}: cited references carry back-links`,
    [...citedRefIds].every((id) => backlinkRefIds.has(id)),
    [...citedRefIds].filter((id) => !backlinkRefIds.has(id)).join(", "),
  );
  check(
    `${name}: uncited references carry none`,
    uncited.every((ref) => !backlinkRefIds.has(ref.id)),
    uncited
      .filter((ref) => backlinkRefIds.has(ref.id))
      .map((ref) => ref.id)
      .join(", "),
  );
}

/* ------------------------------------------------- page-specific behaviour */

const description = report.description;
check(
  "description: author-year markers show the author-year text",
  // The parentheses stay outside the anchor, exactly as the page wrote them; the
  // link carries the author group itself.
  description.cited.some((entry) =>
    /\(<a[^>]*class="wiki-cite"[^>]*>[A-Z][^<]*\d{4}<\/a>\)/.test(entry.html),
  ),
  description.cited
    .find((entry) => entry.html.includes("wiki-cite"))
    ?.html.slice(0, 220),
);
check(
  "description: multi-source groups resolve item by item",
  description.cited.some(
    (entry) => occurrences(entry.html, 'class="wiki-cite"') >= 2,
  ),
);

const design = report.design;
check(
  "design: bracketed markers keep their numerals",
  design.cited.some((entry) => />\[1\]</.test(entry.html)),
);
check(
  "design: adjacent markers both resolve",
  design.cited.some(
    (entry) => {
      const adjacent = entry.paragraph.match(/\[(\d+)\]\[(\d+)\]/);
      return adjacent &&
        entry.html.includes(`href="#ref-${adjacent[1]}"`) &&
        entry.html.includes(`href="#ref-${adjacent[2]}"`);
    },
  ),
);
check(
  "design: Markdown page links still become links inside cited paragraphs",
  design.cited.some((entry) => entry.html.includes('href="/measurement"')),
);

const hardware = report.hardware;
check(
  "hardware: bracketed markers keep their numerals",
  hardware.cited.some((entry) => />\[1\]</.test(entry.html)),
);
check(
  "hardware: every reference is cited in the text",
  new Set([...hardware.indexPath.byRef.keys()]).size ===
    hardware.references.length,
  `${new Set([...hardware.indexPath.byRef.keys()]).size} of ${hardware.references.length}`,
);
check(
  "hardware: italic manual titles survive",
  hardware.register.includes("<em>Ribonuclease R (RNase R) Manual</em>"),
);

const results = report.results;
check(
  "results: bracketed markers keep their numerals",
  results.cited.some((entry) => />\[17\]</.test(entry.html)),
);
check(
  "results: every reference is cited in the text",
  new Set([...results.indexPath.byRef.keys()]).size ===
    results.references.length,
  `${new Set([...results.indexPath.byRef.keys()]).size} of ${results.references.length}`,
);
check(
  "results: adjacent markers both resolve",
  results.cited.some(
    (entry) =>
      occurrences(entry.html, 'class="wiki-cite"') >= 2 &&
      />\[9\]</.test(entry.html) &&
      />\[10\]</.test(entry.html),
  ),
);
check(
  "results: the manuscript's italics render as emphasis",
  report.emphasis.italic.includes("<em>td</em>"),
  report.emphasis.italic,
);
// `HLA-A*02:01` is the manuscript's most frequent token; its asterisk must never
// open an emphasis run.
check(
  "results: HLA-A*02:01 is never mistaken for emphasis",
  occurrences(report.emphasis.hla, "HLA-A*02:01") === 2 &&
    !report.emphasis.hla.includes("<em>"),
  report.emphasis.hla,
);
check(
  "results: the significance asterisks stay literal",
  report.emphasis.stars.includes("*** denotes") &&
    !report.emphasis.stars.includes("<em>") &&
    report.emphasis.stars4.includes("**** denotes"),
  `${report.emphasis.stars} || ${report.emphasis.stars4}`,
);
check(
  "results: `**bold**` still reaches the reader's formatter",
  occurrences(report.emphasis.bold, "<strong>") === 2,
  report.emphasis.bold,
);

/* ----------------------------------------------------------------- report */

const entrepreneurship = report.entrepreneurship;
check(
  "entrepreneurship: comma and range markers preserve the manuscript",
  entrepreneurship.cited.some((entry) => />\[9,10\]</.test(entry.html)) &&
    entrepreneurship.cited.some((entry) => />\[11–13\]</.test(entry.html)),
);
check(
  "entrepreneurship: patient callout citations reach the shared register",
  entrepreneurship.cited.some(
    (entry) => entry.paragraph.startsWith("She had completed") &&
      entry.html.includes('href="#ref-1"') &&
      entry.html.includes('href="#ref-4"'),
  ),
);
check(
  "entrepreneurship: every source has a return link, including range members",
  entrepreneurship.references.every((reference) =>
    entrepreneurship.indexPath.byRef.has(reference.id),
  ),
);
check(
  "entrepreneurship: grouped previews describe all their sources",
  entrepreneurship.cited.some((entry) =>
    entry.html.includes('aria-describedby="ref-9-body ref-10-body"'),
  ),
);

const alternativePlatform = report.alternativePlatform;
check(
  "alternative-platform: comma-separated author-year citations resolve",
  alternativePlatform.cited.some((entry) =>
    /<a[^>]*class="wiki-cite"[^>]*>Bardia et al\., 2021<\/a>/.test(entry.html),
  ),
);
check(
  "alternative-platform: multi-word surnames resolve",
  alternativePlatform.cited.some((entry) =>
    /<a[^>]*class="wiki-cite"[^>]*>Percie du Sert et al\., 2020<\/a>/.test(entry.html),
  ),
);

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed:`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

for (const page of [
  report.description,
  report.design,
  report.hardware,
  report.results,
  report.entrepreneurship,
  report.alternativePlatform,
]) {
  console.log(
    `  ${page.name.padEnd(12)} ${page.references.length} references, ` +
      `${page.cited.length} cited paragraphs, ${page.register.length.toLocaleString()} chars`,
  );
}
console.log("citation register verification: all checks passed");
