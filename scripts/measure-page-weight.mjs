/**
 * Page-weight probe.
 *
 * The reader scrolls by projecting the document position onto a pinned container
 * (`useWetLabScrollRoute`: `inner.scrollTop = next` every frame), so every frame
 * repaints the exposed strip of the article. What that costs is proportional to
 * the DOM the strip contains — which is why a page can "feel" heavy even when its
 * copy is the same length as its neighbours'. This script measures the
 * page-specific subtree (each route's feature slots) and reports node counts and
 * the heaviest repeated element, so a regression is visible before it ships.
 *
 * Run with `node scripts/measure-page-weight.mjs`.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, ".tmp-verify");
mkdirSync(outDir, { recursive: true });

const probe = resolve(outDir, "weightProbe.tsx");
writeFileSync(
  probe,
  `import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { descriptionFeatures } from "../src/components/wiki/features/project/DescriptionPanels";
import { resultsFeatures } from "../src/components/wiki/features/project/ResultsPanels";
import { designFeatures } from "../src/components/wiki/features/wet-lab/DesignPanels";
import { hardwareFeatures } from "../src/components/wiki/features/drylab/HardwarePanels";
import { alternativePlatformFeatures } from "../src/components/wiki/features/wet-lab/AlternativePlatformPanels";
import { buildSequenceRows } from "../src/components/wiki/features/wet-lab/constructGeometry";

const render = (node: unknown) =>
  renderToStaticMarkup(<MemoryRouter>{node as never}</MemoryRouter>);

/**
 * The sequence browser only exists in the browser: its row layout waits for a
 * measured base advance, so server rendering stops at the empty panel. Count the
 * rows the way the component lays them out, so the comparison is honest.
 */
function sequenceNodes(metrics: { advance: number; basesPerRow: number; lineHeight: number; letterSpacing: number }) {
  const rows = buildSequenceRows(metrics);
  let after = 0;
  let before = 0;
  for (const row of rows) {
    const bars = row.bars.length;
    const chips = row.chips.length;
    const cuts = row.cuts.length;
    const labels = row.ruler.length;
    // row + highlight + 2 strands + features lane + ruler box
    const shell = 6 + bars + chips + cuts;
    after += shell + 2 + labels; // ticks strip + the row-origin mark + labels
    before += shell + labels * 2; // one <i> and one <b> per ruler entry
  }
  return { rows: rows.length, before, after };
}

export const report = {
  description: Object.fromEntries(
    Object.entries(descriptionFeatures()).map(([key, node]) => [key, render(node)]),
  ),
  results: Object.fromEntries(
    Object.entries(resultsFeatures()).map(([key, node]) => [key, render(node)]),
  ),
  design: Object.fromEntries(
    Object.entries(designFeatures()).map(([key, node]) => [key, render(node)]),
  ),
  hardware: Object.fromEntries(
    Object.entries(hardwareFeatures()).map(([key, node]) => [key, render(node)]),
  ),
  alternativePlatform: Object.fromEntries(
    Object.entries(alternativePlatformFeatures()).map(([key, node]) => [key, render(node)]),
  ),
  sequence: sequenceNodes({ advance: 12, basesPerRow: 50, lineHeight: 17.75, letterSpacing: 2.9 }),
};
`,
  "utf8",
);

const esbuild = resolve(root, "node_modules/esbuild/bin/esbuild");
const bundle = resolve(outDir, "weightProbe.cjs");
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
    "--loader:.avif=text",
    "--loader:.gif=text",
    "--loader:.html=text",
    "--loader:.pdb=text",
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

const TAG_RE = /<([a-zA-Z][\w:-]*)/g;

function measure(html) {
  const counts = new Map();
  let nodes = 0;
  for (const [, tag] of html.matchAll(TAG_RE)) {
    nodes += 1;
    counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4);
  return { nodes, top, chars: html.length };
}

const rows = [];
for (const [page, features] of Object.entries(report)) {
  if (page === "sequence") continue;
  for (const [key, html] of Object.entries(features)) {
    const { nodes, top, chars } = measure(html);
    rows.push({ page, key, nodes, chars, top });
  }
}

// The viewer's browser-side rows belong to the design page's weight.
const viewer = rows.find((row) => row.key === "construct-architecture-viewer");
if (viewer) {
  viewer.nodes += report.sequence.after;
  viewer.top = [...viewer.top, ["cc-row", report.sequence.rows]].slice(0, 5);
}

rows.sort((a, b) => b.nodes - a.nodes);
console.log("page-specific feature subtrees, heaviest first\n");
console.log(
  `${"page".padEnd(12)} ${"slot".padEnd(32)} ${"nodes".padStart(7)} ${"chars".padStart(9)}  heaviest elements`,
);
for (const row of rows) {
  console.log(
    `${row.page.padEnd(12)} ${row.key.padEnd(32)} ${String(row.nodes).padStart(7)} ` +
      `${String(row.chars).padStart(9)}  ${row.top.map(([tag, n]) => `${tag}×${n}`).join(" ")}`,
  );
}

const totals = {};
for (const row of rows) totals[row.page] = (totals[row.page] ?? 0) + row.nodes;
console.log("\ntotal feature nodes per route:");
for (const [page, nodes] of Object.entries(totals).sort(
  (a, b) => b[1] - a[1],
)) {
  console.log(`  ${page.padEnd(12)} ${nodes}`);
}

console.log(
  `\nsequence browser: ${report.sequence.rows} rows, ${report.sequence.before} → ` +
    `${report.sequence.after} nodes after moving the decade ticks into CSS ` +
    `(−${report.sequence.before - report.sequence.after})`,
);
