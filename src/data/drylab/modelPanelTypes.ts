import type { WikiContentBlock } from "../../components/wiki/wikiPageTypes";

export type ModelPanel =
  | { kind: "fold"; title: string; blocks: WikiContentBlock[] }
  | {
      kind: "tabs";
      title: string;
      entries: { title: string; blocks: WikiContentBlock[] }[];
    }
  | { kind: "transpose"; table: Extract<WikiContentBlock, { type: "table" }> }
  | { kind: "antigen-table"; table: Extract<WikiContentBlock, { type: "table" }> }
  | {
      kind: "chart";
      chart: "volcano-024322" | "volcano-028102" | "burial-heatmap" | "p9-volume" | "confidence-scatter";
    };
