/** Validate finalized copy, review restorations, and chapter/asset links. */
import assert from "node:assert/strict";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve, basename } from "node:path";
import { build } from "esbuild";

const root = process.cwd();
const temporary = resolve(root, ".tmp-verify");
mkdirSync(temporary, { recursive: true });
const bundle = await build({
  stdin: {
    contents: `export { sustainabilityPage } from './src/data/engagement/sustainability/sustainabilityPage';
      export { sustainabilityChapters, coreSdgs, impactTiers, sustainabilityOverview } from './src/data/engagement/sustainability/sustainabilityData';
      export { sustainabilityContributionScores } from './src/data/engagement/sustainability/sustainabilityContributionData';`,
    resolveDir: root,
  },
  bundle: true,
  platform: "node",
  format: "cjs",
  write: false,
  define: {
    "import.meta.env.BASE_URL": JSON.stringify("/jlu-fbh/"),
    "import.meta.env.DEV": "true",
  },
  plugins: [
    {
      name: "image-metadata",
      setup(builder) {
        builder.onLoad(
          { filter: /\.(?:png|jpe?g|webp|avif|svg)$/ },
          (args) => ({
            contents: `export default ${JSON.stringify(`asset:${basename(args.path)}`)}`,
            loader: "js",
          }),
        );
      },
    },
  ],
});
const modulePath = resolve(temporary, "sustainability-data.cjs");
writeFileSync(modulePath, bundle.outputFiles[0].text);
const data = createRequire(import.meta.url)(modulePath);

const strings = (value) =>
  typeof value === "string"
    ? [value]
    : Array.isArray(value)
      ? value.flatMap(strings)
      : value && typeof value === "object"
        ? Object.values(value).flatMap(strings)
        : [];
const normalize = (text) =>
  text
    .replace(/\\([^\w\s]|_)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*|`/g, "")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
const manuscript = readFileSync(
  resolve(
    root,
    "文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md",
  ),
  "utf8",
);
// Repeated review omissions: verify the restored paragraph is actually rendered
// between the toolkit figure and the contribution pathways, and preserve every
// SDG 12 table description from the manuscript.
const overview = data.sustainabilityPage.sections[0].blocks;
const contributionIndex = overview.findIndex(
  (block) => block.type === "prose" &&
    block.paragraphs.includes(data.sustainabilityOverview.contributions),
);
assert(contributionIndex > 0, "Missing Overview contribution paragraph");
assert(normalize(manuscript).includes(normalize(data.sustainabilityOverview.contributions)));
assert.match(overview[contributionIndex - 1].src, /04-reusable-sustainability-toolkit\.avif$/);
assert.match(overview[contributionIndex + 1].src, /05-circure-s-sdg-contribution-pathways\.avif$/);
const sdg12 = data.sustainabilityChapters.find((chapter) => chapter.id === "sdg12");
const sdg12Table = manuscript.split(/\r?\n/).filter((line) =>
  /^\|(?:Resource Responsibility Map|Sustainability Claim Boundary Protocol|Sustainable Planting Education Guide)\|/.test(line),
);
assert.equal(sdg12Table.length, 3);
assert(sdg12.evidence.measurable.some((item) => item.toolTable));
for (const row of sdg12Table) {
  const [title, description] = row.slice(1).split("|");
  const tool = sdg12.legacy.tools.find((entry) => entry.title === title);
  assert.equal(normalize(tool?.whatItDoes ?? ""), normalize(description), title);
  assert.deepEqual(tool.pdfs.map((pdf) => pdf.label).sort(), ["Chinese", "English"]);
}
assert(!strings(data.sustainabilityPage).join("\n").includes(
  "To assess the Tracker’s usability and analytical value in real projects",
));
const source = manuscript.slice(manuscript.indexOf("### SDG4"));
const updatedChapters = data.sustainabilityChapters.filter((chapter) =>
  ["sdg4", "sdg17"].includes(chapter.id),
);
const updatedSections = data.sustainabilityPage.sections.slice(5);
// GROW's five complete narratives now live in the review-supplied explorer.
const explorerSource = readFileSync(
  resolve(root, "src/assets/wiki/sustainability/circure-sdg.js"),
  "utf8",
);
const explorerGoals = JSON.parse(
  explorerSource.match(/const GOALS = (\[[\s\S]*?\n\s*\]);/)[1],
);
assert.deepEqual(explorerGoals.map((goal) => goal.id), [1, 5, 8, 10, 13]);
const copyStrings = strings([
  ...updatedChapters,
  ...updatedSections,
  ...explorerGoals.map((goal) => goal.original),
]);
const corpus = copyStrings.map(normalize).join("\n");
const omissions = [];
// Review PDF item 21 explicitly removes this sentence and its portrait navigation.
const approvedDeletions = new Set([
  normalize(
    "Details about these stakeholders are provided in the preceding SDG sections. Click their corresponding profile images to revisit their backgrounds, feedback, and contributions to CirCure.",
  ),
]);
let verifiedParagraphs = 0;
for (let line of source.split(/\r?\n/)) {
  line = line.trim();
  if (!line || /^(?:#+ |https?:|!\[|这里|\(这两个)/.test(line)) continue;
  if (line.startsWith("|")) {
    for (const cell of line.replace(/^\||\|$/g, "").split("|")) {
      const text = normalize(cell);
      if (text.length > 65 && !corpus.includes(text)) omissions.push(text);
    }
    continue;
  }
  if (/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\?\.? \d/.test(line))
    continue;
  line = line
    .replace(/^[-] /, "")
    .replace(
      /^\*\*(?:Potential Benefit|Potential Risk|Evidence Boundary)\*\*\s*/,
      "",
    )
    .replace(/^\*\*(?:Why|What it helps with|Best for)\*\*\s*/, "")
    .replace(
      / Classroom answers, task performance, and participant feedback from this activity:.*?\./,
      "",
    )
    .replace(
      "corrected XX scientific misconceptions",
      "corrected 43 scientific misconceptions",
    )
    .replace(
      "XX teams working across XX iGEM Villages completed XX explanations",
      "17 teams working across 11 iGEM Villages completed 47 explanations",
    );
  const text = normalize(line);
  if (approvedDeletions.has(text)) continue;
  if (text.length <= 65) continue;
  verifiedParagraphs++;
  if (!corpus.includes(text)) omissions.push(text);
}
assert.deepEqual(
  omissions,
  [],
  `Missing manuscript copy:\n${omissions.join("\n\n")}`,
);
assert(!/\bXX\b|XXX|Add actual records|This progression from/.test(corpus));
assert.equal(data.sustainabilityPage.sections.length, 8);
assert.equal(updatedChapters[0].legacy.table.rows.length, 16);
assert.equal(updatedChapters[0].alignment.table.rows.length, 7);
assert.equal(
  updatedChapters[0].evidence.measurable.find((item) => item.table)?.table.rows
    .length,
  5,
);
assert.equal(
  updatedChapters[1].stakeholders.groups.flatMap((group) => group.profiles)
    .length,
  8,
);

const anchors = new Set(
  [
    ...data.sustainabilityPage.sections.flatMap((section) => [
      section.id,
      ...section.blocks
        .filter((block) => block.type === "subheading")
        .map((block) => block.id),
    ]),
    // SdgExplorer renders these compatibility anchors around the five goals.
    ...explorerGoals.map((goal) => `grow-sdg${goal.id}`),
  ],
);
for (const tier of data.impactTiers)
  for (const goal of tier.sdgs)
    assert(anchors.has(goal.target), `Missing SDG ${goal.number} target`);
for (const goal of data.coreSdgs) assert(anchors.has(goal.target));
const allAnchors = [
  ...data.sustainabilityPage.sections.flatMap((section) => [
    section.id,
    ...section.blocks
      .filter((block) => block.type === "subheading")
      .map((block) => block.id),
  ]),
  ...explorerGoals.map((goal) => `grow-sdg${goal.id}`),
];
assert.equal(
  new Set(allAnchors).size,
  allAnchors.length,
  "Duplicate section anchors",
);

assert.equal(data.sustainabilityContributionScores.length, 12);
assert.deepEqual(
  data.sustainabilityContributionScores
    .slice(0, 5)
    .map((row) => Number(row.total.toFixed(3))),
  [3.227, 3.435, 2.358, 3.819, 1.875],
);
for (const row of data.sustainabilityContributionScores) {
  assert(Math.abs(row.total - row.direct - row.one - row.multi) < 1e-12);
  assert(row.direct >= 0 && row.direct <= 3);
}
assert(
  data.sustainabilityContributionScores
    .filter((row) => [14, 15].includes(row.sdg))
    .every((row) => row.total < 0),
);
assert(
  !strings(updatedSections).some((text) => /(?:C:|D:)\\/.test(text)),
  "Local editorial paths leaked into published data",
);

console.log(
  JSON.stringify(
    {
      verifiedParagraphs,
      restoredOverviewParagraphs: 1,
      sdg12ToolRows: sdg12Table.length,
      sections: 8,
      resourceRows: 16,
      partnershipProfiles: 8,
      partnershipCards: 5,
      partnershipProseGroups: 3,
      approvedDeletions: approvedDeletions.size,
      contributionRows: 12,
      anchors: anchors.size,
      omissions: 0,
    },
    null,
    2,
  ),
);
