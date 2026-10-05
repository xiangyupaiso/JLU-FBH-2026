import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { HeatmapChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  GraphicComponent,
  GridComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import type { EChartsOption } from "echarts";

echarts.use([
  HeatmapChart,
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  VisualMapComponent,
  GraphicComponent,
]);

// eslint-disable-next-line react-refresh/only-export-components
export const SDG = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-Being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economic Growth",
  "Industry, Innovation and Infrastructure",
  "Reduced Inequalities",
  "Sustainable Cities and Communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice and Strong Institutions",
  "Partnerships for the Goals",
];

/** 17x17 directed interaction scores, row = source, column = target. */
const M: (number | null)[][] = [
  [null,0.92,0.59,0.92,0.00,0.00,0.00,0.00,0.00,0.59,0.26,0.00,0.00,0.00,0.00,0.59,0.00],
  [0.00,null,0.89,0.00,0.00,-0.40,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,-0.63,0.00,0.00],
  [0.92,0.00,null,0.92,0.00,0.00,0.00,0.59,0.00,0.00,0.59,0.00,0.00,0.00,0.00,0.00,0.00],
  [0.92,0.00,0.59,null,0.92,0.00,0.59,0.92,0.59,0.59,0.00,0.59,0.59,0.00,0.00,0.59,0.29],
  [0.26,0.59,0.00,0.26,null,0.00,0.00,0.00,0.00,0.26,0.00,0.00,0.00,0.00,0.00,0.59,0.00],
  [0.00,0.59,0.92,0.00,0.00,null,0.17,0.00,0.00,0.00,0.59,0.00,0.00,0.29,0.26,0.00,0.00],
  [0.00,0.26,0.00,0.59,0.00,-0.17,null,0.59,0.59,0.00,0.00,0.59,0.92,0.00,-0.28,0.00,0.00],
  [0.92,0.00,0.00,0.00,0.59,0.00,0.26,null,0.59,0.59,0.59,-0.64,-0.71,-0.39,-0.63,0.00,0.29],
  [0.00,0.00,0.00,0.59,0.00,0.59,0.59,0.89,null,0.00,0.89,0.26,-0.51,-0.34,-0.56,0.00,0.29],
  [0.92,0.00,0.00,0.00,0.26,0.00,0.59,0.26,0.59,null,0.00,0.59,0.59,0.00,0.00,0.00,0.00],
  [0.00,0.00,0.00,0.00,0.00,-0.28,0.00,0.00,0.00,0.00,null,0.59,0.26,-0.34,-0.56,0.00,0.00],
  [0.00,0.00,0.00,0.00,0.00,0.00,0.59,0.00,0.26,0.00,0.00,null,0.92,0.29,0.00,0.00,0.00],
  [0.00,0.00,0.00,0.00,0.00,0.59,0.00,0.00,0.00,0.00,0.00,0.00,null,0.90,0.90,0.00,0.00],
  [0.00,0.92,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.52,null,0.29,0.00,0.00],
  [0.00,0.59,0.26,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.29,null,0.00,0.00],
  [0.59,0.00,0.00,0.00,0.92,0.59,0.00,0.00,0.00,0.59,0.00,0.00,0.00,0.00,0.60,null,0.29],
  [0.00,0.00,0.00,0.00,0.59,0.59,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.29,0.59,null],
];

/** Colour-bar sampled pixel-by-pixel from the source figure, -1 -> 1, step 0.1. */
const STOPS = [
  "#821e3a", "#982b3f", "#af3844", "#c74649", "#d55d51", "#de765a", "#e89264",
  "#f0ac77", "#f2c49d", "#f5dcc3", "#f7f2e7", "#e0e9dd", "#c8dfd1", "#b0d5c5",
  "#96c8ba", "#7dbcb1", "#61aea7", "#4a9d9d", "#3c8595", "#2d6d8d", "#1f5785",
];

const FONT = "'DejaVu Sans', 'Helvetica Neue', Arial, sans-serif";

/** Colour bar geometry in design units, shared by the drawing and the hover probe. */
const BAR = { x: 247.5, y: 692.5, width: 618.7, height: 16 };

const cells: { value: number[]; label?: { color: string } }[] = [];
const diag: { value: number[] }[] = [];
M.forEach((row, r) =>
  row.forEach((v, c) => {
    if (v === null) diag.push({ value: [c, r, 0] });
    else
      cells.push({
        value: [c, r, v],
        // Dark teal / dark red backgrounds carry white labels, pale ones black.
        label: { color: Math.abs(v) >= 0.55 ? "#fff" : "#222" },
      });
  }),
);

function option(s: number): EChartsOption {
  const text = (
    x: number,
    y: number,
    t: string,
    fontSize: number,
    fill: string,
    fontWeight: string | number = "normal",
    rich?: Record<string, Record<string, unknown>>,
  ): Record<string, unknown> => ({
    type: "text",
    silent: true,
    style: {
      x: x * s,
      y: y * s,
      text: t,
      fill,
      fontWeight,
      fontSize: fontSize * s,
      fontFamily: FONT,
      textAlign: "center",
      textVerticalAlign: "middle",
      ...(rich ? { rich } : {}),
    },
  });
  const g: Record<string, unknown>[] = [
    text(557, 38.6, "Rows: source goal (influencing)    |    Columns: target goal (influenced)", 13.5, "#434443"),
    text(198, 671, "Negative = trade-off", 10.5, "#821e3a", "bold"),
    text(557, 671, "Zero = no pre-registered direct edge", 10.5, "#545554"),
    text(921.6, 671, "Positive = synergy", 10.5, "#1f5785", "bold"),
    {
      type: "rect",
      silent: true,
      shape: { x: BAR.x * s, y: BAR.y * s, width: BAR.width * s, height: BAR.height * s },
      style: {
        fill: new echarts.graphic.LinearGradient(
          0, 0, 1, 0,
          STOPS.map((color, i) => ({ offset: i / (STOPS.length - 1), color })),
        ),
        stroke: "#777",
        lineWidth: 1,
      },
    },
    ...[-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1].map((v) =>
      text(247.5 + ((v + 1) / 2) * 618.7, 719.7, v.toFixed(2), 10, "#222"),
    ),
    text(
      557, 736.8,
      "Evidence-calibrated directed interaction score S{sub|ij}",
      11.5, "#000", "bold",
      { sub: { fontSize: 7.5 * s, fontFamily: FONT, fontWeight: "bold", fill: "#000", padding: [3 * s, 0, 0, 0] } },
    ),
    // Hover probe on the colour bar, moved and relabelled by `bindBarProbe`.
    {
      id: "probe-line",
      type: "rect",
      silent: true,
      invisible: true,
      shape: { x: -1.5 * s, y: (BAR.y - 5) * s, width: 3 * s, height: (BAR.height + 10) * s, r: 1.5 * s },
      style: { fill: "#222" },
    },
    {
      id: "probe-text",
      type: "text",
      silent: true,
      invisible: true,
      style: {
        x: 0,
        y: (BAR.y - 13) * s,
        text: "",
        fill: "#222",
        fontSize: 10.5 * s,
        fontWeight: "bold",
        fontFamily: FONT,
        textAlign: "center",
        textVerticalAlign: "middle",
      },
    },
  ];
  return {
    animation: false,
    grid: { left: 270.9 * s, top: 71 * s, right: 140.8 * s, bottom: 109.5 * s },
    xAxis: {
      type: "category",
      position: "top",
      data: SDG.map((_, i) => `${i + 1}`),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#000", fontWeight: "bold", fontSize: 11 * s, fontFamily: FONT, margin: 8 * s },
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: SDG.map((n, i) => `${i + 1}  ${n}`),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { align: "right", color: "#000", fontSize: 10.2 * s, fontFamily: FONT, margin: 8 * s },
    },
    tooltip: {
      formatter: (p: unknown) => {
        const { value, seriesIndex } = p as {
          value: number[];
          seriesIndex: number;
        };
        const [c, r, v] = value;
        return seriesIndex === 1
          ? `SDG ${r + 1} ${SDG[r]} (self)`
          : `SDG ${r + 1} ${SDG[r]} → SDG ${c + 1} ${SDG[c]}<br/>score: <b>${Number(v).toFixed(2)}</b>`;
      },
    },
    visualMap: [
      { show: false, min: -1, max: 1, seriesIndex: 0, inRange: { color: STOPS } },
      // Diagonal cells ignore the scale: fixed neutral grey like the source figure.
      { show: false, min: 0, max: 1, seriesIndex: 1, inRange: { color: ["#d4d7da"] } },
    ],
    series: [
      {
        type: "heatmap",
        data: cells,
        label: {
          show: true,
          fontSize: 9.5 * s,
          fontFamily: FONT,
          formatter: (p: unknown) => {
            const v = Number((p as { value: number[] }).value[2]);
            return Math.abs(v) < 1e-6 ? "" : v.toFixed(2);
          },
        },
        itemStyle: { borderColor: "#fff", borderWidth: 1 },
        // Cells picked from the colour bar float up: a raised drop shadow.
        emphasis: {
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 2,
            shadowBlur: 10 * s,
            shadowOffsetY: 4 * s,
            shadowColor: "rgba(20, 30, 40, 0.45)",
          },
        },
      },
      {
        type: "heatmap",
        data: diag,
        label: { show: true, formatter: "−", color: "#4c4d4c", fontSize: 9.5 * s, fontFamily: FONT },
        itemStyle: { borderColor: "#fff", borderWidth: 1 },
      },
    ],
    graphic: g as unknown as NonNullable<EChartsOption["graphic"]>,
  };
}

/** Responsive ECharts shell shared by the SDG figures: scales a w0×h0 design canvas to container width. */
// eslint-disable-next-line react-refresh/only-export-components
export function useSdgChart(
  makeOption: (s: number) => EChartsOption,
  w0: number,
  h0: number,
  /** Called once with the chart; `scale()` reads the current design-to-pixel scale. */
  onReady?: (chart: echarts.ECharts, scale: () => number) => void,
) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    let chart: echarts.ECharts | undefined;
    let renderedWidth = 0;
    const render = () => {
      const w = el.clientWidth;
      // Ignore the observer notification caused by our own height update.
      if (w <= 0 || w === renderedWidth) return;
      renderedWidth = w;
      const height = Math.ceil((w * h0) / w0);
      el.style.height = `${height}px`;
      if (chart) chart.resize({ width: w, height });
      else {
        chart = echarts.init(el, undefined, { width: w, height });
        onReady?.(chart, () => renderedWidth / w0);
      }
      chart.setOption(makeOption(w / w0), true);
    };
    render();
    const ro = new ResizeObserver(render);
    ro.observe(el);
    return () => {
      ro.disconnect();
      chart?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

/** Distinct non-zero scores shown in the matrix; the bar snaps to these. */
const SCORES = [...new Set(cells.map((c) => c.value[2]).filter((v) => Math.abs(v) > 1e-6))].sort(
  (a, b) => a - b,
);

/** How far (in score units) the pointer may sit from a score and still pick it. */
const SNAP = 0.04;

/**
 * Colour-bar ↔ matrix link: moving along the bar lifts every cell carrying the
 * score under the pointer (e.g. all the 0.60 cells) and marks that score on
 * the bar. Leaving the bar drops them back.
 */
function bindBarProbe(chart: echarts.ECharts, scale: () => number) {
  const zr = chart.getZr();
  let picked: number | null = null;

  const pick = (score: number | null) => {
    if (score === picked) return;
    picked = score;
    chart.dispatchAction({ type: "downplay", seriesIndex: 0 });
    const s = scale();
    if (score === null) {
      zr.setCursorStyle("default");
      chart.setOption({
        graphic: [
          { id: "probe-line", invisible: true },
          { id: "probe-text", invisible: true },
        ],
      });
      return;
    }
    const dataIndex = cells.flatMap((c, i) => (Math.abs(c.value[2] - score) < 1e-6 ? [i] : []));
    chart.dispatchAction({ type: "highlight", seriesIndex: 0, dataIndex });
    zr.setCursorStyle("pointer");
    const x = (BAR.x + ((score + 1) / 2) * BAR.width) * s;
    chart.setOption({
      graphic: [
        { id: "probe-line", invisible: false, x },
        { id: "probe-text", invisible: false, style: { x, text: score.toFixed(2) } },
      ],
    });
  };

  zr.on("mousemove", (e) => {
    const s = scale();
    const x = e.offsetX / s;
    const y = e.offsetY / s;
    const onBar =
      x >= BAR.x - 6 && x <= BAR.x + BAR.width + 6 && y >= BAR.y - 18 && y <= BAR.y + BAR.height + 8;
    if (!onBar) return pick(null);
    const score = ((x - BAR.x) / BAR.width) * 2 - 1;
    const nearest = SCORES.reduce((a, b) => (Math.abs(b - score) < Math.abs(a - score) ? b : a));
    pick(Math.abs(nearest - score) <= SNAP ? nearest : null);
  });
  zr.on("globalout", () => pick(null));
}

export function SdgInteractionHeatmap() {
  const ref = useSdgChart(option, 984, 753, bindBarProbe);
  return <div ref={ref} style={{ width: "100%" }} />;
}


