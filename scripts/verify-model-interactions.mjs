import assert from "node:assert/strict";
import { build } from "esbuild";

const result = await build({
  stdin: {
    contents: `export { buildModelCitationIndex, parseModelFigureCaption } from "./src/data/drylab/modelCitationIndex";
      export { createModelConfidenceOption } from "./src/components/wiki/features/drylab/ModelCharts";
      export { loadModelVolcanoData } from "./src/data/drylab/modelVolcanoData";
      export { createEpitopeHeatmapOption } from "./src/components/wiki/features/project/EpitopeStructuralValidationChart";`,
    resolveDir: process.cwd(),
  },
  bundle: true,
  write: false,
  format: "esm",
  platform: "node",
  packages: "external",
  loader: { ".png": "empty", ".css": "empty" },
  define: { "import.meta.env.DEV": "false" },
});
// Import from the project so external React/ECharts resolve against its dependencies.
const { writeFile, unlink } = await import("node:fs/promises");
const path = new URL("../.model-verification.mjs", import.meta.url);
const originalFetch = globalThis.fetch;
try {
  await writeFile(path, result.outputFiles[0].text);
  const { buildModelCitationIndex, parseModelFigureCaption, createEpitopeHeatmapOption, createModelConfidenceOption, loadModelVolcanoData } = await import(
    path.href
  );
  assert.deepEqual(parseModelFigureCaption("**Figure 5.** Caption with **emphasis**."), { label: "FIG. 05", text: "Caption with **emphasis**." });
  assert.deepEqual(parseModelFigureCaption("**Figure 15. **Caption."), { label: "FIG. 15", text: "Caption." });
  assert.equal(parseModelFigureCaption("Figure 16 summarizes burial."), null);
  const index = buildModelCitationIndex();
  assert(
    index.byParagraph.size > 25,
    "Citation index should cover the manuscript and nested panels",
  );
  for (const [paragraph, entry] of index.byParagraph) {
    assert.equal(entry.segments.map((s) => s.text).join(""), paragraph);
    for (const segment of entry.segments) {
      if (segment.kind === "cite")
        assert(
          segment.text.length > 5 && /\d{4}|n\.d/.test(segment.text),
          `Invalid citation: ${segment.text}`,
        );
    }
  }
  assert(
    !index.byParagraph.has("**AEIP (Antigen–Epitope Integration Pipeline)**"),
  );
  const option = createEpitopeHeatmapOption(
    [
      {
        peptide: "AGVVVVVVV",
        target: "TROP2",
        targetColor: "#207062",
        passed: true,
        values: [0, null, 20, 30, 40, 50, 60, 70, 80],
      },
    ],
    true,
  );
  assert.equal(option.series[0].data[0][2], 0, "Real zero stays in the data");
  assert.equal(
    option.series[1].data.length,
    1,
    "Missing values have their own hatch series",
  );
  assert.equal(
    option.tooltip.formatter({ seriesType: "heatmap", value: [0, 0, 0] }),
    "",
  );
  assert.equal(
    option.tooltip.formatter({ seriesType: "custom", value: [1, 0] }),
    "",
  );
  assert.match(
    option.tooltip.formatter({ seriesType: "heatmap", value: [2, 0, 20] }),
    /20%/,
  );
  const confidence = createModelConfidenceOption();
  assert.equal(confidence.series[0].data.length, 15);
  assert.equal(confidence.series[1].data.length, 2);
  const alanine = confidence.series[1].data.find((row) => row.peptide === "HILHVSFLA");
  const glycine = confidence.series[1].data.find((row) => row.peptide === "FLAEASVRG");
  assert(Math.abs(alanine.value[0] - 42.928571) < 0.000001);
  assert.equal(alanine.value[1], 0.960);
  assert.deepEqual(glycine.value, [0, 0.968]);
  assert.match(confidence.tooltip.formatter({ data: alanine }), /42.93%/);
  assert.match(confidence.tooltip.formatter({ data: alanine }), /Rejected/);
  assert.match(confidence.tooltip.formatter({ data: glycine }), /Model 4: 0.960/);
  let requests = 0;
  globalThis.fetch = async () => {
    requests++;
    if (requests === 1) return new Response(null, { status: 503 });
    if (requests === 2) return Response.json({ "024322": [["bad", 0, 0, "id"]] });
    return Response.json({ "024322": [["TACSTD2", 0.185, 0.037, "id"]], "028102": [["VTCN1", -1.2, 0.001, "id"]] });
  };
  await assert.rejects(loadModelVolcanoData(), /HTTP 503/);
  await assert.rejects(loadModelVolcanoData(), /Invalid volcano data/);
  const first = loadModelVolcanoData();
  assert.equal(first, loadModelVolcanoData(), "Both charts share one pending request");
  const loaded = await first;
  assert.equal(loaded["024322"][0][0], "TACSTD2");
  assert.equal(await loadModelVolcanoData(), loaded, "Loaded data stays cached");
  assert.equal(requests, 3, "Failed requests retry; successful requests are reused");
  console.log('Remote volcano loader checks passed: HTTP errors, invalid data, retry and shared cache.');
  console.log(
    `Model interaction checks passed: ${index.byParagraph.size} cited paragraphs; stable citation text; heatmap zero, missing and measured-cell tooltips.`,
  );
} finally {
  globalThis.fetch = originalFetch;
  await unlink(path).catch(() => {});
}
