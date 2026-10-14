import assert from "node:assert/strict";
import { build } from "esbuild";

const result = await build({
  stdin: {
    contents: `export { buildModelCitationIndex, parseModelFigureCaption } from "./src/data/drylab/modelCitationIndex";
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
try {
  await writeFile(path, result.outputFiles[0].text);
  const { buildModelCitationIndex, parseModelFigureCaption, createEpitopeHeatmapOption } = await import(
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
  console.log(
    `Model interaction checks passed: ${index.byParagraph.size} cited paragraphs; stable citation text; heatmap zero, missing and measured-cell tooltips.`,
  );
} finally {
  await unlink(path).catch(() => {});
}
