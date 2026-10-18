import assert from "node:assert/strict";
import { readFile, writeFile, unlink, access } from "node:fs/promises";
import { build } from "esbuild";
import { renderToStaticMarkup } from "react-dom/server";

const bundle = await build({
  stdin: {
    contents: `export { experimentsPage, experimentsReferences } from './src/data/wet-lab/experimentsPage';
      export { renderExperimentText, experimentsCitationIndex, experimentsFeatures } from './src/components/wiki/features/wet-lab/ExperimentsPanels';
      export { renderInlineFormatting } from './src/components/wiki/proseInline';
      export { experimentProtocolPairs } from './src/data/wet-lab/experimentProtocolPages';
      export { experimentProtocolAssets } from './src/data/wet-lab/experimentProtocolAssets';
      export { experimentRingStages } from './src/data/wet-lab/experimentProtocolRing';`,
    loader: "tsx",
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  jsx: "automatic",
  platform: "node",
  packages: "external",
  loader: {
    ".css": "empty",
    ".png": "empty",
    ".webp": "empty",
    ".jpg": "empty",
    ".avif": "empty",
  },
  define: { "import.meta.env.DEV": "false", "import.meta.env.BASE_URL": '"/"' },
  // The interactive atlas needs a browser; this check covers prose and references.
  plugins: [
    {
      name: "omit-atlas",
      setup(build) {
        build.onResolve({ filter: /\/ExperimentProtocolAtlas$/ }, () => ({
          path: "atlas",
          namespace: "test",
        }));
        build.onLoad({ filter: /.*/, namespace: "test" }, () => ({
          contents: "export const ExperimentProtocolAtlas = () => null;",
        }));
      },
    },
  ],
});
const temporary = new URL("../.experiments-verification.mjs", import.meta.url);
try {
  await writeFile(temporary, bundle.outputFiles[0].text);
  const {
    experimentsPage,
    experimentsReferences,
    experimentsCitationIndex,
    experimentsFeatures,
    renderExperimentText,
    renderInlineFormatting,
    experimentProtocolPairs,
    experimentProtocolAssets,
    experimentRingStages,
  } = await import(temporary.href);
  const flatten = (blocks) => blocks.flatMap(block => block.type === "protocol-steps"
    ? [block, ...block.steps.flatMap(step => flatten(step.blocks))] : [block]);
  const blocks = flatten(experimentsPage.sections.flatMap((section) => section.blocks));
  const formulas = blocks.flatMap((block) =>
    (block.paragraphs ?? []).flatMap((text) => text.match(/\$[^$]+\$/g) ?? []),
  );
  assert.equal(formulas.length, 1);
  for (const formula of formulas) {
    const html = renderToStaticMarkup(
      renderExperimentText(formula, renderInlineFormatting),
    );
    assert(!html.includes("\\"), `Unrendered LaTeX: ${formula}`);
    assert(!html.includes("$"));
    assert(html.includes('role="math"'));
    if (formula.includes("\\frac"))
      assert(html.includes("wiki-math__frac"));
    assert(formula.includes("Cq_{L,i}-Cq_{C,i}"));
    assert(formula.includes("\\frac{100}{1+2^{-\\Delta Cq_i}}"));
    assert(html.includes("<sup>") && html.includes("Δ"));
  }
  const references = experimentsReferences;
  assert.equal(references.length, 43);
  const bibliography = renderToStaticMarkup(
    experimentsFeatures()["exp-references"],
  );
  for (const reference of references) {
    assert(bibliography.includes(`id="ref-${reference.id}"`));
    assert(bibliography.includes(`href="${reference.links[0].href}"`));
  }
  assert.equal(experimentsCitationIndex.issues.length, 0);
  const ids = new Set();
  for (const section of experimentsPage.sections) {
    for (const block of flatten(section.blocks)) {
      const textItems =
        block.type === "prose"
          ? block.paragraphs.map((text) => text.replace(/^\s*\d+[.、]\s+/, ""))
          : block.type === "heading"
            ? [block.title]
            : block.type === "list"
              ? block.items
              : [];
      for (const text of textItems) {
        assert(!text.startsWith("- "), `Unparsed bullet: ${text}`);
        const html = renderToStaticMarkup(
          renderExperimentText(text, renderInlineFormatting, section.id),
        );
        const markers = [...text.matchAll(/\[(\d+)\]/g)];
        for (const marker of markers)
          assert(
            html.includes(`href="#ref-${marker[1]}"`),
            `Unlinked citation: ${text}`,
          );
        for (const match of html.matchAll(/id="(cite-\d+-\d+)"/g)) {
          assert(!ids.has(match[1]), `Duplicate citation anchor: ${match[1]}`);
          ids.add(match[1]);
        }
      }
    }
  }
  assert.equal(
    ids.size,
    [...experimentsCitationIndex.byRef.values()].flat().length,
  );
  const panelStep = blocks.filter(block => block.type === "protocol-steps")
    .flatMap(block => block.steps).find(step => step.blocks.some(block => block.type === "list" && block.items[0].startsWith("Panel ①")));
  assert.equal(panelStep.number, "2");
  assert.equal(panelStep.blocks.find(block => block.type === "list").items.length, 4);
  assert(
    blocks.filter((block) => block.type === "heading" && block.level === 4)
      .length >= 130,
  );
  assert.equal(blocks.filter(block => block.type === "heading" && block.level === 5).length, 0);
  assert(blocks.some(block => block.type === "prose" && block.paragraphs.includes("**Stimulation & Transport Block**")));
  assert.deepEqual(
    blocks
      .filter((block) => block.type === "feature")
      .map((block) => block.key),
    ["exp-references"],
  );
  assert(
    (await readFile("src/contents/experiments.tsx", "utf8")).includes(
      'articleLead={experimentsFeatures()["exp-protocol-map"]}',
    ),
  );
  const headings = blocks.filter(block => block.type === "subheading");
  assert.equal(experimentProtocolPairs.length, 24);
  assert.deepEqual(
    experimentRingStages.flatMap(stage => stage.nodes.map(node => node.key)).sort(),
    experimentProtocolPairs.map(pair => pair.key).sort(),
  );
  for (const pair of experimentProtocolPairs) {
    assert(headings.some(heading => heading.id === pair.targetId), `Missing protocol target: ${pair.key}`);
    if (pair.key === "6-3") {
      assert.equal(pair.hasFigure, false);
      assert.equal(pair.flowPage, undefined);
      assert.equal(pair.inventoryPage, undefined);
      continue;
    }
    assert(pair.hasFigure, `Missing illustration: ${pair.key}`);
    for (const [page, size] of [[pair.flowPage, pair.flowSize], [pair.inventoryPage, pair.inventorySize]]) {
      const asset = experimentProtocolAssets[page];
      assert.deepEqual(size, [asset.width, asset.height]);
      await access(`public/assets/experiments/protocol/${asset.fileName}`);
    }
  }
  for (const code of ["1", "3"]) {
    assert(headings.find(h => h.id === `exp-${code}-1`).anchorIds.includes(`exp-${code}-2`));
  }
  console.log(
    `Experiments render verified: 1 equation, 43 references, ${ids.size} linked citations; 24 atlas targets, illustrations pending only for 6.3.`,
  );
} finally {
  await unlink(temporary).catch(() => {});
}
