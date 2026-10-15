import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import heatmapData from "../../../../data/drylab/modelHeatmapData.json";
import type { EpitopeHeatmapRow } from "../../../../data/project/epitopeStructuralData";
import { createEpitopeHeatmapOption, createEpitopeVolumeOption } from "../project/EpitopeStructuralValidationChart";

const GROUP_COLORS = {
  TROP2: "#207062",
  "B7-H4": "#aa8417",
  "Nectin-4": "#2c5fa8",
  "LIV-1": "#b43c4c",
};
// ECharts rich-text style names must not contain hyphens.
const GROUP_STYLES = Object.fromEntries(
  Object.keys(GROUP_COLORS).map((name, index) => [name, `group${index}`]),
);

/** Shared ECharts lifecycle: resize with its container and dispose on unmount. */
function ModelChart({
  option,
  label,
  heatmap = false,
}: {
  option: echarts.EChartsOption;
  label: string;
  heatmap?: boolean;
}) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = element.current;
    if (!node) return;
    const chart = echarts.init(node);
    chart.setOption(option);
    const observer = new ResizeObserver(() => chart.resize());
    observer.observe(node);
    return () => {
      observer.disconnect();
      chart.dispose();
    };
  }, [option]);
  return (
    <div
      ref={element}
      className={`model-chart${heatmap ? " model-chart--heatmap" : ""}`}
      role="img"
      aria-label={label}
    />
  );
}

const heatmapRows: EpitopeHeatmapRow[] = heatmapData.map((row) => ({
  ...row,
  target: row.target as EpitopeHeatmapRow["target"],
  targetColor: GROUP_COLORS[row.target as keyof typeof GROUP_COLORS],
  passed: !["FLAEASVRG", "HILHVSFLA"].includes(row.peptide),
}));
const heatmapOption = createEpitopeHeatmapOption(heatmapRows, true);
heatmapOption.title = { show: false };
heatmapOption.animation = false;
heatmapOption.grid = { top: 12, left: 156, right: 12, bottom: 40 };
// Each antigen has its own hue; all four share the same 0–100% intensity scale.
const originalSeries = heatmapOption.series as echarts.SeriesOption[];
const burialSeries = originalSeries[0] as echarts.HeatmapSeriesOption;
heatmapOption.series = [
  ...Object.keys(GROUP_COLORS).map((target) => ({
    ...burialSeries,
    name: target,
    data: heatmapRows.flatMap((row, y) =>
      row.target !== target
        ? []
        : row.values.flatMap((value, x) =>
            value === null ? [] : [[x, y, value]],
          ),
    ),
  })),
  originalSeries[1],
];
heatmapOption.visualMap = Object.values(GROUP_COLORS).map(
  (color, seriesIndex) => ({
    type: "continuous",
    show: false,
    min: 0,
    max: 100,
    dimension: 2,
    seriesIndex,
    inRange: { color: ["#ffffff", color] },
  }),
);
heatmapOption.yAxis = {
  type: "category",
  data: heatmapRows.map((row) => row.peptide),
  inverse: true,
  axisLine: { lineStyle: { color: "#d2dcd7" } },
  axisLabel: {
    fontSize: 10,
    formatter: (_value: string, index: number) => {
      const row = heatmapRows[index];
      return `{${GROUP_STYLES[row.target]}|${row.target}} {${row.passed ? "pass" : "fail"}|${row.peptide}}`;
    },
    rich: {
      ...Object.fromEntries(
        Object.entries(GROUP_COLORS).map(([name, color]) => [
          GROUP_STYLES[name],
          { color, fontSize: 9, fontWeight: 700, width: 47 },
        ]),
      ),
      pass: { color: "#20332d", fontFamily: "monospace", fontSize: 10 },
      fail: { color: "#b34d3f", fontFamily: "monospace", fontSize: 10 },
    },
  },
};

export function ModelBurialHeatmap() {
  return (
    <div className="model-chart-panel">
      <ModelChart
        option={heatmapOption}
        heatmap
        label="Per-position side-chain burial: 17 candidates by P1–P9. Hover a cell for its measured percentage; hatched cells have no side chain."
      />
      <div
        className="model-heatmap-legend"
        aria-label="Side-chain burial: light 0%, dark 100% in each antigen group"
      >
        {Object.keys(GROUP_COLORS).map((target) => (
          <div key={target} data-target={target}>
            <span>{target}</span>
            <i aria-hidden="true" />
            <small>0–100%</small>
          </div>
        ))}
      </div>
      <details className="model-chart-data">
        <summary>View data</summary>
        <div className="wiki-table-wrap">
          <table className="wiki-table">
            <thead>
              <tr>
                <th scope="col">Peptide</th>
                {Array.from({ length: 9 }, (_, i) => (
                  <th scope="col" key={i}>
                    P{i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {heatmapRows.map((row) => (
                <tr key={row.peptide}>
                  <th scope="row">{row.peptide}</th>
                  {row.values.map((value, i) => (
                    <td key={i}>{value ? `${value.toFixed(1)}%` : "—"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}

export { ModelVolcanoChart as ModelVolcano } from "./ModelVolcanoChart";

const volumeOption = createEpitopeVolumeOption();

export function ModelP9Volume() {
  return <ModelChart option={volumeOption} heatmap label="Position-9 buried surface area and fill ratio for 17 candidates. Hover a bar for the mean, standard deviation, fill ratio and pass status." />;
}
