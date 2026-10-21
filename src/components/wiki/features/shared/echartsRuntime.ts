import { use as registerECharts, type ECharts } from "echarts/core";
import {
  BarChart,
  CustomChart,
  HeatmapChart,
  LineChart,
  ScatterChart,
} from "echarts/charts";
import {
  AxisPointerComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// These are the chart families and controls used by the published manuscripts.
registerECharts([
  BarChart,
  CustomChart,
  HeatmapChart,
  LineChart,
  ScatterChart,
  AxisPointerComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  LabelLayout,
  CanvasRenderer,
]);

export function disposeChart(chart: ECharts) {
  if (chart.isDisposed()) return;
  // Invalidate queued progressive canvas frames before zrender frees its layers.
  const renderer = chart.getZr();
  renderer.clear();
  renderer.refreshImmediately(true);
  chart.dispose();
}

export * from "echarts/core";
export type {
  DefaultLabelFormatterCallbackParams,
  EChartsOption,
  HeatmapSeriesOption,
  ScatterSeriesOption,
  SeriesOption,
} from "echarts";
