/** Check manuscript order, tables, revised figures, equations and citation wiring. */
import assert from "node:assert/strict";
import { readFile, writeFile, unlink, access } from "node:fs/promises";
import { build } from "esbuild";
import { renderToStaticMarkup } from "react-dom/server";

const bundle = await build({
  stdin: {
    contents: `export * from './src/data/wet-lab/measurementPage';
      export * from './src/data/wet-lab/measurementAssets';
      export { measurementFeatures, renderMeasurementCitedText } from './src/components/wiki/features/wet-lab/MeasurementPanels';
      export { renderInlineFormatting } from './src/components/wiki/proseInline';
      export { buildAuthorYearCitationIndex } from './src/data/citations/citationIndex';`,
    loader: "tsx",
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  jsx: "automatic",
  platform: "node",
  packages: "external",
  loader: { ".css": "empty" },
  define: { "import.meta.env.DEV": "false", "import.meta.env.BASE_URL": '"/"' },
  plugins: [{
    name: "omit-browser-charts",
    setup(builder) {
      builder.onResolve({ filter: /\/(EpitopeStructuralValidationChart|ModelVolcanoChart)$/ }, ({path}) => ({path,namespace:"chart"}));
      builder.onLoad({ filter: /.*/, namespace: "chart" }, () => ({
        contents: "export const EpitopeStructuralValidationChart = () => null; export const ModelVolcanoChart = () => null;",
      }));
    },
  }],
});
const temporary = new URL("../.measurement-verification.mjs", import.meta.url);
try {
  await writeFile(temporary, bundle.outputFiles[0].text);
  const {
    measurementPage, measurementJudgingCriteria, measurementReferences,
    measurementAssets, measurementFeatures, renderMeasurementCitedText,
    renderInlineFormatting, buildAuthorYearCitationIndex,
  } = await import(temporary.href);
  const normalize = text => text
    .replace(/\\([\\`*_{}\[\]()#+.!|>~%\-])/g, "$1")
    .replace(/\*\*|\$|`/g, "").replace(/\s+/g, " ").trim();
  // These three static captions were already replaced by the author's interactive charts.
  const chartCaptions = new Set([
    "Differential protein abundance of the four candidates across two proteomic datasets",
    "Per-position side-chain burial for the 17 candidate epitopes",
    "Absolute buried area of the position-9 side chain for the 17 systems",
  ]);
  const source = await readFile("文案集/wetlab/Measurment/Measurement.md", "utf8");
  const expected = [];
  for (let line of source.split(/\r?\n/)) {
    line = line.trim();
    if (line === "## References") break;
    if (!line || line === "# Measurement" || /^---+$/.test(line) || line.startsWith("https://static.igem.wiki/")) continue;
    if (/^\|[\s:|\-]+\|$/.test(line)) continue;
    if (line.startsWith("|")) {
      expected.push(...line.replace(/^\||\|$/g, "").split(/(?<!\\)\|/).map(normalize));
      continue;
    }
    if (line.startsWith("#")) line = line.replace(/^#+\s*/, "").replace(/\*\*/g, "").replace(/^\d+\.\s*/, "");
    const value=normalize(line);
    if (value && !chartCaptions.has(value)) expected.push(value);
  }
  const actual = [];
  const features = measurementFeatures();
  for (const section of measurementPage.sections) {
    if (section.id === "references") break;
    actual.push(normalize(section.title));
    for (const block of section.blocks) {
      if (block.type === "prose") actual.push(...block.paragraphs.map(normalize));
      else if (["heading", "subheading"].includes(block.type)) actual.push(normalize(block.title));
      else if (block.type === "table") actual.push(normalize(block.caption), ...block.headers.map(normalize), ...block.rows.flat().map(normalize));
      else if (block.type === "figure") actual.push(normalize(block.caption));
      else if (block.key === "measurement-judging-criteria") {
        for (const question of measurementJudgingCriteria) actual.push(normalize(question.question), ...question.paragraphs.map(normalize));
      } else if (block.key.startsWith("measurement-plate-")) actual.push(normalize(features[block.key].props.caption));
    }
  }
  for (let i=0;i<Math.max(expected.length,actual.length);i++) {
    assert.equal(actual[i],expected[i],`Manuscript order/content differs at text unit ${i}`);
  }
  const blocks=measurementPage.sections.flatMap(section=>section.blocks);
  assert.equal(blocks.filter(b=>b.type==='subheading'&&b.level===3).length,22); // 14 methods + five contributions + three future items.
  assert.equal(measurementReferences.length,38);
  const citationIndex=buildAuthorYearCitationIndex(measurementPage.sections,measurementReferences);
  assert.deepEqual(citationIndex.issues,[]);
  const spacedCitation=blocks.flatMap(block=>block.paragraphs??[]).find(text=>text.includes('(Chen et al. , 2017)'));
  const citedHtml=renderToStaticMarkup(renderMeasurementCitedText(spacedCitation,renderInlineFormatting));
  assert(citedHtml.includes('href="#ref-10"'));
  assert(citedHtml.includes('Chen et al. , 2017'));
  const bibliography=renderToStaticMarkup(features['measurement-references']);
  for(const reference of measurementReferences) assert(bibliography.includes(`id="ref-${reference.id}"`));
  const formulas=blocks.flatMap(block=>(block.paragraphs??[]).flatMap(text=>text.match(/\$[^$]+\$/g)??[]));
  assert.equal(formulas.length,2);
  for(const formula of formulas) {
    const html=renderToStaticMarkup(renderMeasurementCitedText(formula,renderInlineFormatting));
    assert(html.includes('role="math"') && html.includes('wiki-math__frac'));
    assert(!html.includes('\\') && !html.includes('$'),`Unrendered equation: ${formula}`);
  }
  assert(formulas[1].includes('Cq_{L,i}-Cq_{C,i}'));
  assert(formulas[1].includes('\\frac{100}{1+2^{-\\Delta Cq_i}}'));
  const inputTable=blocks.find(b=>b.type==='table'&&b.caption.startsWith('Table 4.'));
  assert.equal(inputTable.headers.length,2);
  assert.deepEqual(inputTable.rows.map(row=>row[1]),['92.85 ± 0.08%','96.96 ± 0.70%','96.25 ± 1.14%']);
  const flow=features['measurement-plate-3'].props;
  assert.equal(flow.columns,1);
  assert.equal(flow.images.length,4);
  const newFiles=['sanger-trace-across-the-backsplice-junction-bsj-of-the-combined-vaccine.avif','wet-image.avif',...Array.from({length:9},(_,i)=>`wet-image${i+2}.avif`)];
  for(const filename of newFiles) {
    const asset=Object.values(measurementAssets).find(a=>a.fileName===filename);
    assert(asset && asset.width>0 && asset.height>0,`Missing updated asset: ${filename}`);
    await access(asset.localSourcePath);
  }
  console.log(`Measurement verified: ${actual.length} text units in manuscript order, 14 methods, 38 references, 2 equations, 11 revised figures.`);
} finally {
  await unlink(temporary).catch(()=>{});
}
