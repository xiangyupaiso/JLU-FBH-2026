// Generate the page from the unchanged source document; never transcribe SOPs.
// Usage: node scripts/generate-protocols.mjs /absolute/path/to/marked/lib/marked.esm.js
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const { Marked } = await import(
  process.argv[2] ? pathToFileURL(process.argv[2]).href : "marked"
);
const source = await readFile(
  new URL("../src/data/CirCure_Protocols.md", import.meta.url),
  "utf8",
);
// The supplied export escapes punctuation even inside bare URLs. Decode only
// those URL escapes before GFM autolinking, keeping their visible text intact.
const markdown = source.replace(/https:\/\/\S+/g, (url) =>
  url.replace(/\\([\p{P}\p{S}])/gu, "$1"),
);
const parser = new Marked({ gfm: true });
const tokens = parser.lexer(markdown);
parser.walkTokens(tokens, (token) => {
  assert.notEqual(token.type, "html", "Raw HTML is not allowed in the source");
});
const render = (blocks) =>
  parser
    .parser(blocks)
    .replaceAll(
      "<table>",
      '<div class="protocol-table-scroll" role="region" aria-label="Protocol table" tabindex="0"><table>',
    )
    .replaceAll("</table>", "</table></div>");
const plainHeading = (token) => token.text.replace(/\\([\p{P}\p{S}])/gu, "$1");
assert.equal(tokens[0].type, "heading");
assert.equal(tokens[0].depth, 1);
const document = {
  sourceSha256: createHash("sha256").update(source).digest("hex"),
  title: plainHeading(tokens[0]),
  introHtml: "",
  labs: [],
};
let blocks = [];
let lab;
let protocol;
function flush() {
  const html = render(blocks);
  if (protocol) protocol.html = html;
  else if (lab) lab.introHtml = html;
  else document.introHtml = html;
  blocks = [];
}
for (const token of tokens.slice(1)) {
  if (token.type === "heading") {
    flush();
    if (token.depth === 2) {
      const title = plainHeading(token);
      lab = {
        id: title.toLowerCase().replaceAll(" ", "-"),
        title,
        introHtml: "",
        protocols: [],
      };
      document.labs.push(lab);
      protocol = undefined;
    } else {
      assert.equal(token.depth, 3, "Unexpected heading depth");
      assert.ok(lab, "A protocol must belong to a laboratory");
      const match = plainHeading(token).match(/^([MCA]\d+)\. (.+)$/);
      assert.ok(match, "Invalid protocol heading");
      protocol = { id: match[1], title: match[2], html: "" };
      lab.protocols.push(protocol);
    }
  } else {
    blocks.push(token);
  }
}
flush();
assert.deepEqual(
  document.labs.map((item) => item.title),
  ["Molecular Lab", "Cell Lab", "Animal Lab"],
);
const expectedIds = [
  ["M", 16],
  ["C", 17],
  ["A", 10],
].flatMap(([prefix, count]) =>
  Array.from({ length: count }, (_, index) => `${prefix}${index + 1}`),
);
assert.deepEqual(
  document.labs.flatMap((item) => item.protocols.map((sop) => sop.id)),
  expectedIds,
);
for (const sop of document.labs.flatMap((item) => item.protocols)) {
  for (const label of [
    "Introduction",
    "Equipment",
    "Reagents",
    "Procedure",
    "Notes",
  ]) {
    assert.ok(
      sop.html.includes(`<strong>${label}`),
      `${sop.id}: missing ${label}`,
    );
  }
}
const output = `${JSON.stringify(document, null, 2)}\n`;
const outputUrl = new URL("../src/data/protocolContent.json", import.meta.url);
if (process.argv.includes("--check")) {
  assert.equal(
    await readFile(outputUrl, "utf8"),
    output,
    "Generated content differs from source",
  );
} else {
  await writeFile(outputUrl, output);
}
console.log(
  `43 protocols verified (16 / 17 / 10). Source SHA-256: ${document.sourceSha256}`,
);
