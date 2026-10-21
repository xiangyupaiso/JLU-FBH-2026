/** Verify the numbering contract against every page using the shared outline. */
import assert from "node:assert/strict";
import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import { build } from "esbuild";
import ts from "typescript";

const files = [];
async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await visit(path);
    else if (/Page\.ts$/.test(path)) files.push(path);
  }
}
await visit("src/data");
await mkdir(".tmp-verify", { recursive: true });
const sidebarSource = ts.createSourceFile("WikiLineSidebar.tsx", await readFile("src/components/wiki/WikiLineSidebar.tsx", "utf8"), ts.ScriptTarget.Latest, true);
const outlineRows = sidebarSource.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === "outlineRows");
assert(outlineRows, "Missing outline grouping function");

const bundle = await build({
  stdin: {
    contents: files.map((file, index) => `import * as page${index} from './${file}';`).join("\n") +
      `\nexport const modules = [${files.map((_, index) => `page${index}`).join(",")}];` +
      "\nexport * from './src/components/wiki/wikiPageNumbering';" +
      `\nexport ${outlineRows.getText(sidebarSource)}`,
    loader: "ts",
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
  packages: "external",
  loader: { ".css": "empty" },
  define: { "import.meta.env.DEV": "false", "import.meta.env.BASE_URL": '"/"' },
  plugins: [{
    name: "asset-paths",
    setup(builder) {
      builder.onResolve({ filter: /\.(avif|png|svg|webp|jpe?g|gif|mp4|pdf|woff2?|csv|pdb|cif)(\?.*)?$/i }, ({ path }) => ({ path, namespace: "asset" }));
      builder.onLoad({ filter: /.*/, namespace: "asset" }, ({ path }) => ({ contents: `export default ${JSON.stringify(path)}` }));
    },
  }],
});

const temporary = new URL("../.tmp-verify/wiki-numbering.mjs", import.meta.url);
await writeFile(temporary, bundle.outputFiles[0].text);
try {
  const { modules, numberWikiSections, stripWikiHeadingIndex, wikiSubheadingDepth, outlineRows: groupOutline } = await import(temporary.href);
  const seen = new Set();
  const pages = new Map();
  let headingCount = 0;
  for (const module of modules) {
    for (const page of Object.values(module)) {
      if (!page?.route || !page.sections || seen.has(page.route)) continue;
      seen.add(page.route);
      const routeFile = await readFile(`src/contents/${page.route.slice(1)}.tsx`, "utf8").catch(() => "");
      if (!routeFile.includes("<WikiRoutePage") || /\bhideOutline\b/.test(routeFile)) continue;

      const original = JSON.stringify(page.sections);
      if (/\bpreserveSectionNumbers\b/.test(routeFile)) {
        // Reviewed manuscripts retain their authored chapter numbers.
        pages.set(page.route, page.sections);
        const numbered = page.sections.filter(section => section.index);
        assert.deepEqual(numbered.map(section => section.index), numbered.map((_, index) => String(index + 1)));
        for (const section of page.sections) {
          for (const heading of (section.blocks ?? []).filter(block => block.type === "subheading")) {
            headingCount++;
            if (heading.index) assert(heading.index.startsWith(`${section.index}.`), `${page.route}: heading outside its chapter`);
          }
        }
        assert.equal(JSON.stringify(page.sections), original, `${page.route}: reviewed manuscript mutated`);
        continue;
      }
      const sections = numberWikiSections(page.sections);
      pages.set(page.route, sections);
      assert.equal(JSON.stringify(page.sections), original, `${page.route}: source data mutated`);
      assert.deepEqual(numberWikiSections(sections), sections, `${page.route}: numbering is not stable`);
      assert.deepEqual(sections.map(s => s.id), page.sections.map(s => s.id));

      const overview = sections.findIndex(s => (s.navLabel ?? s.title).toLowerCase() === "overview");
      let chapter = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const source = page.sections[i];
        const excluded = i <= overview || Boolean(source.hideSectionNumber);
        assert.equal(section.index, excluded ? "" : String(++chapter), `${page.route}/${section.id}: chapter`);
        assert.equal(section.hideSectionNumber, excluded);
        assert.equal(stripWikiHeadingIndex(section.title, section.index), stripWikiHeadingIndex(source.title, source.index));
        const indices = new Set();
        const siblingCounts = new Map();

        for (let j = 0; j < (section.blocks?.length ?? 0); j++) {
          const block = section.blocks[j];
          const before = source.blocks[j];
          if (block.type !== "subheading") {
            assert.strictEqual(block, before, `${page.route}: body or feature changed`);
            continue;
          }
          headingCount++;
          assert.equal(wikiSubheadingDepth(block), Math.max(block.level === 4 ? 3 : 2, block.index ? block.index.split(".").length : 0));
          assert.equal(block.id, before.id);
          assert.deepEqual(block.anchorIds, before.anchorIds);
          assert.equal(stripWikiHeadingIndex(block.title, block.index), stripWikiHeadingIndex(before.title, before.index));
          if (excluded || !before.index) {
            assert.equal(block.index, "");
            continue;
          }
          const parts = block.index.split(".");
          assert.equal(parts[0], section.index);
          assert(parts.every(part => /^[1-9]\d*$/.test(part)), `${page.route}: zero or invalid index ${block.index}`);
          const parent = parts.slice(0, -1).join(".");
          if (parts.length > 2) assert(indices.has(parent), `${page.route}: orphan heading ${block.index}`);
          const next = (siblingCounts.get(parent) ?? 0) + 1;
          assert.equal(Number(parts.at(-1)), next, `${page.route}: discontinuous heading ${block.index}`);
          siblingCounts.set(parent, next);
          assert(!indices.has(block.index), `${page.route}: duplicate ${block.index}`);
          indices.add(block.index);
        }
      }
    }
  }
  assert.equal(pages.size, 16);
  const model = pages.get("/model");
  assert.deepEqual(model.map(s => s.index), ["", "", "1", "2", "3", "4"]);
  assert.deepEqual(model[2].blocks.filter(b => b.type === "subheading").slice(0, 3).map(b => b.index), ["1.1", "1.1.1", "1.1.2"]);
  const measurement = pages.get("/measurement");
  assert.deepEqual(measurement.slice(0, 4).map(s => s.index), ["", "", "", "1"]);
  assert.deepEqual(measurement[3].blocks.filter(b => b.type === "subheading").slice(0, 3).map(b => b.index), ["1.1", "1.1.1", "1.1.2"]);
  const dates = pages.get("/safety-and-security").flatMap(s => s.blocks ?? []).filter(b => b.type === "subheading");
  assert(dates.some(b => b.title === "7.21  Software Interview"));
  assert(dates.some(b => b.title === "12.7 Changchun International Medical and Health Industry Expo"));
  assert.equal(stripWikiHeadingIndex("**4.1.2 Heading**", "4.1.2"), "**Heading**");
  assert.equal(stripWikiHeadingIndex("105 Days of Learning", "3.6.1.1.1"), "105 Days of Learning");
  assert.equal(stripWikiHeadingIndex("4T1-TROP2 Model", "4"), "4T1-TROP2 Model");
  const software = pages.get("/software").find(section => section.id === "software-development");
  const softwareHeadings = software.blocks.filter(block => block.type === "subheading");
  const architecture = softwareHeadings.findIndex(block => block.id === "software-architecture-and-design-choices");
  const nextSection = softwareHeadings.findIndex((block, index) => index > architecture && wikiSubheadingDepth(block) === 2);
  const architectureHeadings = softwareHeadings.slice(architecture, nextSection);
  assert.equal(wikiSubheadingDepth(architectureHeadings[0]), 2);
  assert(architectureHeadings.slice(1).every(block => wikiSubheadingDepth(block) === 3));
  assert(architectureHeadings.some(block => block.title === "CircuForge"));
  assert(architectureHeadings.some(block => block.title === "TorusFold"));
  const children = softwareHeadings.map(block => ({ ...block, depth: wikiSubheadingDepth(block) }));
  const choice = children.find(block => block.id === "software-architecture-and-design-choices-choice-5-verifiable-design-exports");
  const grouped = groupOutline(children, choice.id);
  assert(grouped.some(row => row.child.id === choice.id && row.tertiary));
  assert(grouped.some(row => row.child.id === "software-architecture-and-design-choices" && !row.tertiary));
  assert(!grouped.some(row => row.child.id === "software-engineering-iterations-circuforge-carrying-project-decisions-into-construct-design"), "Different chapter expanded under Architecture");
  console.log(`Wiki numbering verified: ${pages.size} pages, ${headingCount} subheadings; front matter excluded, chapter hierarchy continuous, title numbers synchronized, source text and anchors preserved.`);
} finally {
  await unlink(temporary).catch(() => {});
}
