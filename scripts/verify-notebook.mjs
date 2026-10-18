/** Compare the English manuscript with the data, and check inclusive Gantt dates. */
import assert from "node:assert/strict";
import { readFile, writeFile, unlink, access } from "node:fs/promises";
import { build } from "esbuild";

const result = await build({
  stdin: {
    contents: `export * from './src/data/project/notebookPage';
      export * from './src/data/project/notebookAssets';
      export * from './src/components/wiki/timeline/verticalGanttDates';`,
    loader: "ts",
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
  packages: "external",
  plugins: [
    {
      name: "source-image-paths",
      setup(builder) {
        builder.onLoad({ filter: /\.png$/ }, ({ path }) => ({
          contents: `export default ${JSON.stringify(path)};`,
          loader: "js",
        }));
      },
    },
  ],
});
const temporary = new URL("../.notebook-verification.mjs", import.meta.url);
try {
  await writeFile(temporary, result.outputFiles[0].text);
  const {
    wetLabEntries,
    notebookAssets,
    notebookPage,
    ganttMonths,
    ganttMonthBounds,
    layoutGanttMonth,
    ganttMonthGroups,
    layoutGanttGroup,
  } = await import(temporary.href);
  const clean = (value) =>
    value.replace(/\\([\\`*_{}\[\]()#+\-.!>])/g, "$1").trim();
  const source = (
    await readFile("文案集/project/notebook/Notebook新.md", "utf8")
  )
    .split("# Wet Lab｜湿实验")[1]
    .split("# Dry Lab｜干实验")[0];
  const lines = source.split(/\r?\n/).map(clean);
  const sourceProse = lines
    .filter((line) => line.startsWith("**English.** "))
    .map((line) => line.slice("**English.** ".length));
  const sourceCaptions = lines
    .filter((line) => line.startsWith("**English caption.** "))
    .map((line) => line.slice("**English caption.** ".length));
  const blocks = wetLabEntries.flatMap((entry) => entry.blocks);
  const sameStrings = (actual, expected, label) =>
    assert.deepEqual([...actual].sort(), [...expected].sort(), label);
  sameStrings(
    blocks
      .filter((block) => block.type === "discussion")
      .map((block) => `${block.label}｜${block.title}`),
    lines
      .filter((line) => line.startsWith("#### "))
      .map((line) => line.slice(5).split("｜").slice(0, 2).join("｜")),
    "Phase labels and discussion titles remain verbatim",
  );
  sameStrings(
    blocks
      .filter((block) => block.type === "prose" || block.type === "discussion")
      .map((block) => block.text),
    sourceProse,
    "Every English paragraph survives exactly once",
  );
  sameStrings(
    blocks.filter((block) => "caption" in block).map((block) => block.caption),
    sourceCaptions,
    "Every caption survives exactly once",
  );
  sameStrings(
    wetLabEntries.map(
      (entry) =>
        `${entry.start}${entry.start === entry.end ? "" : `—${entry.end}`}｜${entry.title}`,
    ),
    lines
      .filter((line) => line.startsWith("### "))
      .map((line) => line.slice(4).split("｜").slice(0, 2).join("｜")),
    "Dates and titles remain verbatim",
  );
  const table = blocks.find((block) => block.type === "table");
  assert.deepEqual(
    [table.headers, ...table.rows],
    lines
      .filter((line) => line.startsWith("| ") && !/^\|\s*---/.test(line))
      .map((line) => line.slice(1, -1).split("|").map(clean)),
    "All scientific table cells survive verbatim",
  );
  assert.equal(wetLabEntries.length, 26);
  assert.equal(blocks.filter((block) => block.type === "figure").length, 31);
  assert.equal(Object.keys(notebookAssets).length, 34);
  assert.equal(
    /[\u4e00-\u9fff]/.test(JSON.stringify(wetLabEntries)),
    false,
    "Only English manuscript copy is published",
  );
  assert.equal(
    notebookPage.sections.length,
    1,
    "Old placeholder sections are removed",
  );
  for (const asset of Object.values(notebookAssets)) {
    await access(asset.localSourcePath);
    assert.ok(
      asset.width > 0 && asset.height > 0,
      "Every image reserves its real dimensions",
    );
    assert.equal(asset.uploadUrl, "", "No unverified CDN address is invented");
  }
  assert.equal(ganttMonthBounds("2026-02").days, 28);
  assert.equal(ganttMonthBounds("2028-02").days, 29);
  assert.deepEqual(ganttMonths(wetLabEntries), [
    "2025-12",
    "2026-01",
    "2026-02",
    "2026-03",
    "2026-04",
    "2026-05",
    "2026-06",
    "2026-07",
    "2026-08",
    "2026-09",
    "2026-10",
  ]);
  assert.equal(
    layoutGanttMonth(wetLabEntries, "2026-05").periods.length,
    0,
    "No activity is invented for the manuscript gap",
  );
  const august = layoutGanttMonth(wetLabEntries, "2026-08");
  const june = layoutGanttMonth(wetLabEntries, "2026-06");
  assert.equal(
    june.firstDay,
    15,
    "The June chart starts with its first recorded activity",
  );
  assert.equal(
    june.lastDay,
    30,
    "Work continuing in July is kept to the month boundary",
  );
  assert.equal(june.visibleDays, 16);
  const october = layoutGanttMonth(wetLabEntries, "2026-10");
  assert.equal(
    october.firstDay,
    1,
    "The September study continues into October",
  );
  assert.equal(
    october.lastDay,
    13,
    "The chart stops when the Wet Lab record ends",
  );
  assert.equal(october.visibleDays, 13);
  const pointOnly = layoutGanttMonth(
    [
      {
        id: "one-day",
        title: "Single-day record",
        start: "2026-10-09",
        end: "2026-10-09",
      },
    ],
    "2026-10",
  );
  assert.equal(
    pointOnly.visibleDays,
    1,
    "A single dated entry does not reserve an empty month",
  );
  assert.equal(august.periods.length, 13);
  assert.equal(august.lanes, 4);
  assert.equal(august.periods[0].startDay, 1);
  assert.equal(august.periods[0].endDay, 8);
  assert.equal(august.periods[0].continuesBefore, true);
  const spanning = august.periods.find(
    (period) =>
      period.entry.title === "Molecular and cellular supplementary readouts",
  );
  assert.equal(spanning.endDay, 31);
  assert.equal(spanning.continuesAfter, true);
  const september = layoutGanttMonth(wetLabEntries, "2026-09");
  assert.equal(
    september.periods.find((period) => period.entry.id === spanning.entry.id)
      .endDay,
    3,
  );
  for (const month of ganttMonths(wetLabEntries)) {
    const { periods } = layoutGanttMonth(wetLabEntries, month);
    for (let i = 0; i < periods.length; i++)
      for (let j = i + 1; j < periods.length; j++) {
        const a = periods[i],
          b = periods[j];
        if (a.lane === b.lane)
          assert.ok(
            a.endDay < b.startDay || b.endDay < a.startDay,
            "Concurrent periods never share a track",
          );
      }
  }
  const groups = ganttMonthGroups(wetLabEntries);
  assert.deepEqual(
    groups.map((group) => group.months),
    [
      ["2025-12", "2026-01", "2026-02", "2026-03", "2026-04"],
      ["2026-06", "2026-07", "2026-08", "2026-09", "2026-10"],
    ],
    "Only months connected by a spanning manuscript record share a chart",
  );
  assert.equal(
    groups.flatMap((group) => group.entries).length,
    wetLabEntries.length,
    "Every original record appears in exactly one connected chart",
  );
  const summer = layoutGanttGroup(groups[1]);
  const preparation = summer.periods.find(
    ({ entry }) => entry.start === "2026-06-21",
  );
  const july = summer.months.find(({ month }) => month === "2026-07");
  const augustHeading = summer.months.find(
    ({ month }) => month === "2026-08",
  ).headingRow;
  assert.ok(
    preparation.startRow < july.headingRow &&
      preparation.endRow > augustHeading,
    "One continuous preparation bar crosses both month headings",
  );
  assert.equal(
    july.rows.flatMap(({ entries }) => entries).length,
    0,
    "An ongoing-only month does not duplicate the event label",
  );
  sameStrings(
    groups.flatMap((group) =>
      layoutGanttGroup(group).months.flatMap(({ rows }) =>
        rows.flatMap(({ entries }) => entries.map(({ id }) => id)),
      ),
    ),
    wetLabEntries.map(({ id }) => id),
    "Every event label appears once, at its actual starting date",
  );
  assert.equal(summer.months[0].rows[0].date, "2026-06-15");
  assert.equal(summer.months.at(-1).rows.at(-1).date, "2026-10-13");
  const independent = ganttMonthGroups([
    {
      id: "june",
      title: "June record",
      start: "2026-06-29",
      end: "2026-06-30",
    },
    {
      id: "july",
      title: "July record",
      start: "2026-07-01",
      end: "2026-07-02",
    },
  ]);
  assert.deepEqual(
    independent.map(({ months }) => months),
    [["2026-06"], ["2026-07"]],
    "Adjacent independent records do not imply a cross-month activity",
  );
  for (const group of groups) {
    const { periods, rowCount } = layoutGanttGroup(group);
    const leftLanes = periods
      .filter(({ side }) => side === "left")
      .map(({ lane }) => lane);
    const rightLanes = periods
      .filter(({ side }) => side === "right")
      .map(({ lane }) => lane);
    if (leftLanes.length && rightLanes.length)
      assert.ok(
        Math.max(...leftLanes) < Math.min(...rightLanes),
        "Opposite-side leaders terminate in separate banks, including simultaneous starts on 28 August",
      );
    for (const a of periods) {
      assert.ok(
        a.startRow > 0 && a.endRow > a.startRow && a.endRow <= rowCount + 1,
      );
      for (const b of periods) {
        if (a !== b && a.lane === b.lane)
          assert.ok(
            a.endRow <= b.startRow || b.endRow <= a.startRow,
            "Continuous tracks never overlap",
          );
      }
    }
  }
  console.log(
    `Notebook verified: 26 dated entries, ${sourceProse.length} English paragraphs, 31 figures / 34 images, complete table, inclusive and cross-month Gantt intervals.`,
  );
} finally {
  await unlink(temporary);
}
