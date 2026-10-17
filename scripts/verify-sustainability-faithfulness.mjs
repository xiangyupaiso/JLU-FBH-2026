/** Validate the finalized SDG 4 onward copy and the page's chapter/asset links. */
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
      export { sustainabilityChapters, coreSdgs, impactTiers } from './src/data/engagement/sustainability/sustainabilityData';
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
const source = manuscript.slice(manuscript.indexOf("### SDG4"));
const updatedChapters = data.sustainabilityChapters.filter((chapter) =>
  ["sdg4", "sdg17"].includes(chapter.id),
);
const updatedSections = data.sustainabilityPage.sections.slice(5);
const copyStrings = strings([...updatedChapters, ...updatedSections]);
const corpus = copyStrings.map(normalize).join("\n");
const omissions = [];
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
      "17 teams working across 11 iGEM Villages completed 43 explanations",
    );
  const text = normalize(line);
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
assert.equal(updatedChapters[0].legacy.table.rows.length, 15);
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
  data.sustainabilityPage.sections.flatMap((section) => [
    section.id,
    ...section.blocks
      .filter((block) => block.type === "subheading")
      .map((block) => block.id),
  ]),
);
for (const tier of data.impactTiers)
  for (const goal of tier.sdgs)
    assert(anchors.has(goal.target), `Missing SDG ${goal.number} target`);
for (const goal of data.coreSdgs) assert(anchors.has(goal.target));
const allAnchors = data.sustainabilityPage.sections.flatMap((section) => [
  section.id,
  ...section.blocks
    .filter((block) => block.type === "subheading")
    .map((block) => block.id),
]);
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
      sections: 8,
      resourceRows: 15,
      partnershipCards: 8,
      contributionRows: 12,
      anchors: anchors.size,
      omissions: 0,
    },
    null,
    2,
  ),
);
