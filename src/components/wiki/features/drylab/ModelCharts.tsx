import { useEffect, useMemo, useRef, useState } from "react";
import * as echarts from "echarts";
import volcanoData from "../../../../data/drylab/modelVolcanoData.json";
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

type VolcanoPoint = [string, number, number, string];
const categories = ["Up", "Down", "Other"];
const colors = ["#c74d55", "#4c79a7", "#cbd0d4"];
const targets: Record<string, { label: string; color: string }> = {
  TACSTD2: { label: "TROP2 / TACSTD2", color: "#d56a16" },
  VTCN1: { label: "B7-H4 / VTCN1", color: "#c875a5" },
  NECTIN4: { label: "Nectin-4 / NECTIN4", color: "#0878b2" },
  PVRL4: { label: "Nectin-4 / PVRL4", color: "#0878b2" },
  SLC39A6: { label: "LIV-1 / SLC39A6", color: "#209d87" },
};

export function ModelVolcano({ cohort }: { cohort: "024322" | "028102" }) {
  const [visible, setVisible] = useState([true, true, true]);
  const threshold = cohort === "024322" ? 0.15 : 1;
  const fdr = cohort === "024322" ? 0.05 : 0.01;
  const rows = volcanoData[cohort] as VolcanoPoint[];
  const grouped = useMemo(() => {
    const result: VolcanoPoint[][] = [[], [], []];
    for (const point of rows) {
      const category =
        point[2] < fdr && Math.abs(point[1]) >= threshold
          ? point[1] > 0
            ? 0
            : 1
          : 2;
      result[category].push(point);
    }
    return result;
  }, [rows, threshold, fdr]);
  const option = useMemo<echarts.EChartsOption>(() => {
    const xs = rows.map((row) => row[1]);
    const yMax =
      Math.ceil(Math.max(...rows.map((row) => -Math.log10(row[2]))) / 5) * 5;
    const series: echarts.ScatterSeriesOption[] = grouped.map(
      (points, index) => ({
        name: categories[index],
        type: "scatter",
        symbolSize: 4,
        animation: false,
        data: visible[index]
          ? points.map((row) => ({
              value: [row[1], -Math.log10(row[2])],
              source: row,
            }))
          : [],
        itemStyle: { color: colors[index], opacity: 0.52 },
        emphasis: { scale: 2, itemStyle: { opacity: 1 } },
      }),
    );
    // Highlighted antigens obey the same category filter as their source points.
    const markers = grouped.flatMap((points, i) =>
      visible[i] ? points.filter((point) => targets[point[0]]) : [],
    );
    series.push({
      name: "Candidate antigens",
      type: "scatter",
      symbol: "diamond",
      symbolSize: 14,
      data: markers.map((row) => ({
        value: [row[1], -Math.log10(row[2])],
        source: row,
        itemStyle: {
          color: targets[row[0]].color,
          borderColor: "white",
          borderWidth: 1.5,
        },
        label: {
          show: true,
          formatter: targets[row[0]].label,
          position: row[0] === "VTCN1" ? "bottom" : "top",
          color: "#20332d",
          fontSize: 10,
        },
      })),
      labelLayout: { hideOverlap: true, moveOverlap: "shiftY" },
      z: 5,
    });
    // A separate transparent series keeps guides visible even when all categories are hidden.
    series.push({
      type: "scatter",
      data: [],
      markLine: {
        silent: true,
        symbol: "none",
        lineStyle: { color: "#7f8184", type: "dashed" },
        label: { position: "insideEndTop", fontSize: 10, formatter: "{b}" },
        data: [
          { xAxis: -threshold, name: `log₂FC = −${threshold}` },
          { xAxis: threshold, name: `log₂FC = +${threshold}` },
          { yAxis: -Math.log10(fdr), name: `BH-adjusted P = ${fdr}` },
        ],
      },
    });
    return {
      animation: false,
      grid: { left: 62, right: 24, top: 24, bottom: 72 },
      tooltip: {
        trigger: "item",
        confine: true,
        formatter: (params) => {
          const item = (Array.isArray(params) ? params[0] : params).data as {
            source?: VolcanoPoint;
          };
          if (!item.source) return "";
          const [gene, fc, p, id] = item.source;
          return `${echarts.format.encodeHTML(targets[gene]?.label ?? gene)}<br/>ID: ${echarts.format.encodeHTML(id)}<br/>log₂FC: ${fc.toFixed(4)}<br/>BH-adjusted P: ${p.toExponential(3)}`;
        },
      },
      xAxis: {
        type: "value",
        name:
          cohort === "024322"
            ? "log₂ fold change (TNBC − healthy normal)"
            : "log₂ fold change (TNBC − NAT)",
        nameLocation: "middle",
        nameGap: 38,
        nameTextStyle: { fontSize: 11 },
        min: Math.floor(Math.min(...xs)),
        max: Math.ceil(Math.max(...xs)),
        splitLine: { show: false },
      },
      yAxis: {
        type: "value",
        name: "−log₁₀ (BH-adjusted P)",
        nameLocation: "middle",
        nameGap: 43,
        min: 0,
        max: yMax,
        splitLine: { lineStyle: { color: "#edf1ef" } },
      },
      series,
    };
  }, [cohort, rows, grouped, visible, threshold, fdr]);
  return (
    <div className="model-chart-panel" data-cohort={cohort}>
      <div
        className="model-chart-filters"
        role="group"
        aria-label={`PXD${cohort} protein categories`}
      >
        {categories.map((label, i) => (
          <button
            key={label}
            type="button"
            data-category={i}
            aria-pressed={visible[i]}
            onClick={() =>
              setVisible((current) =>
                current.map((on, j) => (j === i ? !on : on)),
              )
            }
          >
            {label} ({grouped[i].length.toLocaleString()})
          </button>
        ))}
        <button type="button" onClick={() => setVisible([true, true, true])}>
          Show all
        </button>
      </div>
      <p className="model-chart-rule">
        BH-adjusted P &lt; {fdr}; |log₂FC| ≥ {threshold}
      </p>
      <ModelChart
        option={option}
        label={`PXD${cohort} volcano plot. ${grouped[0].length} upregulated, ${grouped[1].length} downregulated and ${grouped[2].length} other proteins. Use the category buttons to filter.`}
      />
    </div>
  );
}

const volumeOption = createEpitopeVolumeOption();

export function ModelP9Volume() {
  return <ModelChart option={volumeOption} heatmap label="Position-9 buried surface area and fill ratio for 17 candidates. Hover a bar for the mean, standard deviation, fill ratio and pass status." />;
}
