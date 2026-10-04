/**
 * Verification harness for the ported construct viewer.
 *
 * The viewer's geometry is a pure function of `designConstruct.ts`, so it can
 * be exercised without a browser: bundle it with esbuild and assert that the
 * React port still produces a complete, finite map and a sequence layout that
 * covers the whole template. Run with `node scripts/verify-design-construct.mjs`.
 */

import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, ".tmp-verify");
mkdirSync(outDir, { recursive: true });

const esbuild = resolve(root, "node_modules/esbuild/bin/esbuild");
const featureDir = resolve(root, "src/components/wiki/features/wet-lab");
const dataModule = resolve(root, "src/data/wet-lab/designConstruct.ts");

const bundleTo = (entry, name) => {
  const bundle = resolve(outDir, name);
  execFileSync(
    process.execPath,
    [
      esbuild,
      "--bundle",
      entry,
      "--format=esm",
      "--platform=node",
      `--outfile=${bundle}`,
      "--log-level=warning",
    ],
    { stdio: "inherit" },
  );
  return bundle;
};

const bundle = bundleTo(resolve(featureDir, "constructGeometry.ts"), "constructGeometry.mjs");
bundleTo(dataModule, "designConstruct.mjs");

const geometry = await import(pathToFileURL(bundle).href);
const data = await import(pathToFileURL(resolve(outDir, "designConstruct.mjs")).href);

const failures = [];
const check = (label, condition, detail = "") => {
  if (!condition) failures.push(`${label}${detail ? ` — ${detail}` : ""}`);
};

/* ------------------------------------------------------------------- data */

check("template length is 5,267 bp", data.constructSequence.length === 5267);
check(
  "template is unambiguous DNA",
  /^[ACGTN]+$/.test(data.constructSequence),
);
check("39 annotated elements", data.constructElements.length === 39);
check("7 unique cutters", data.constructSites.length === 7);
check(
  "every element sits inside the template",
  data.constructElements.every((e) => e.start >= 1 && e.end <= 5267 && e.start <= e.end),
);
check(
  "every element names a known category",
  data.constructElements.every((e) => e.category in data.constructCategoryByKey),
);
check(
  "every description keeps its markup intact",
  data.constructElements.every(
    (e) => !e.description.includes("\\&") && !e.name.includes("&amp;"),
  ),
);
check(
  "restriction sites are unique cutters in the template",
  data.constructSites.every(
    (s) => data.constructSequence.split(s.recognition).length - 1 === 1,
  ),
  data.constructSites
    .filter((s) => data.constructSequence.split(s.recognition).length - 1 !== 1)
    .map((s) => s.name)
    .join(", "),
);

/* -------------------------------------------------------------------- map */

const map = geometry.constructMap;
check("map viewBox", map.viewBox === "0 0 680 620");
check(
  "all 39 elements reach the map",
  map.inlineElements.length + map.rightLabels.length + map.leftLabels.length >= 39,
);

const drawn = [...map.inlineElements];
for (const item of [...map.rightLabels, ...map.leftLabels]) {
  if (item.kind === "element") drawn.push(item.geometry);
}
check("every element is either inline or labelled", drawn.length === 39, `${drawn.length}`);
check(
  "no path contains NaN",
  [...map.inlineElements, ...drawn]
    .flatMap((g) => [g.tag, g.hit, g.arc ?? ""])
    .every((d) => !d.includes("NaN")),
);
check(
  "every glyph path is a closed shape",
  drawn.every((g) => g.tag.startsWith("M") && g.tag.endsWith("Z")),
);
check(
  "labels stay inside the canvas",
  [...map.rightLabels, ...map.leftLabels].every((item) => {
    const label = item.geometry.label;
    return (
      label &&
      label.textY >= 0 &&
      label.textY <= 620 &&
      label.textX >= 0 &&
      label.textX <= 680
    );
  }),
);
check(
  "element lanes never leave the hub",
  drawn.every((g) => g.r > 56),
  `min radius ${Math.min(...drawn.map((g) => g.r))}`,
);

/* --------------------------------------------------------------- selection */

let selectable = 0;
for (const element of data.constructElements) {
  const selected = geometry.findSelectable(element.id);
  if (!selected || selected.kind !== "element") {
    failures.push(`findSelectable failed for ${element.id}`);
    continue;
  }
  selectable += 1;
  check(
    `${element.id} reports its own coordinates`,
    selected.start === element.start && selected.end === element.end,
  );
  check(
    `${element.id} serialises as an in-browser selection`,
    typeof selected.wedge?.body === "string" &&
      !selected.wedge.body.includes("NaN") &&
      selected.wedge.edges.length === 2,
  );
}
for (const site of data.constructSites) {
  const selected = geometry.findSelectable(site.id);
  if (!selected || selected.kind !== "site" || selected.wedge !== null) {
    failures.push(`findSelectable failed for site ${site.id}`);
  }
}
check(
  "all 39 elements resolve as selections",
  selectable === 39,
  `${selectable} resolved`,
);

/* ---------------------------------------------------------------- sequence */

const metrics = { advance: 12, basesPerRow: 60, lineHeight: 17.75, letterSpacing: 2.9 };
const rows = geometry.buildSequenceRows(metrics);

check("rows are generated", rows.length > 0);
check(
  "rows tile the template exactly once",
  rows[0].start === 1 &&
    rows[rows.length - 1].end === 5267 &&
    rows.every((row, index) => index === 0 || row.start === rows[index - 1].end + 1),
);
check(
  "strand text is recovered from the template",
  rows.every(
    (row) =>
      row.sense === data.constructSequence.slice(row.start - 1, row.end) &&
      row.antisense.length === row.sense.length,
  ),
);
check(
  "complement is a true complement",
  rows.every((row) =>
    [...row.sense].every((base, index) => {
      const partner = row.antisense[index];
      return (
        (base === "A" && partner === "T") ||
        (base === "G" && partner === "C") ||
        (base === "C" && partner === "G") ||
        (base === "T" && partner === "A")
      );
    }),
  ),
);
check(
  "bars stay inside their row",
  rows.every((row) =>
    row.bars.every(
      (bar) =>
        Number.isFinite(bar.left) &&
        Number.isFinite(bar.width) &&
        bar.left >= -0.01 &&
        bar.left + bar.width <= (row.end - row.start + 1) * metrics.advance + 0.01,
    ),
  ),
);
check(
  "row feature lanes do not overlap",
  rows.every((row) => {
    const byLane = new Map();
    return row.bars.every((bar) => {
      const lane = byLane.get(bar.top) ?? [];
      const clash = lane.some(
        (other) => bar.left < other.left + other.width && other.left < bar.left + bar.width,
      );
      lane.push(bar);
      byLane.set(bar.top, lane);
      return !clash;
    });
  }),
);
check(
  "every row labels its decades",
  rows.every((row) =>
    row.end - row.start + 1 < 10
      ? true
      : row.ruler.length >= 2 && row.ruler.every((mark) => mark.label),
  ),
);
check(
  "the decade ticks are one CSS pattern per row, not elements",
  rows.every(
    (row) =>
      row.tickPitch === metrics.advance * 10 &&
      row.tickPhase === -metrics.advance / 2 &&
      row.ruler.every((mark) => Number.isFinite(mark.left)),
  ),
  `pitch ${rows[0].tickPitch} phase ${rows[0].tickPhase}`,
);

const renderedBars = new Set(rows.flatMap((row) => row.bars.map((bar) => bar.id)));
check(
  "every element appears in the browser",
  data.constructElements.every((element) => renderedBars.has(element.id)),
  data.constructElements
    .filter((element) => !renderedBars.has(element.id))
    .map((element) => element.id)
    .join(", "),
);
const renderedSites = new Set(rows.flatMap((row) => row.cuts.map((cut) => cut.left)));
check("cut marks are drawn", renderedSites.size > 0);

/* ----------------------------------------------------------------- report */

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed:`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}

console.log("construct viewer verification: all checks passed");
console.log(
  `  map      ${map.inlineElements.length} inline + ${
    map.rightLabels.length + map.leftLabels.length
  } labelled annotations, ${map.kbTicks.length} kb ticks`,
);
console.log(
  `  sequence ${rows.length} rows at ${metrics.basesPerRow} bp/row, ${renderedBars.size} element bars`,
);
console.log(`  selection ${selectable} elements + ${data.constructSites.length} cutters`);
