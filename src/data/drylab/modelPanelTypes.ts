import type { WikiContentBlock } from "../../components/wiki/wikiPageTypes";

export type ModelPanel =
  | {
      kind: "sdg-chart";
      chart: "boundary" | "interactions" | "dimensions" | "contributions" | "network";
      caption: string;
    }
  | {
      kind: "numbered-reasons";
      items: { title: string; paragraphs: string[] }[];
    }
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
      tableCaption?: string;
      caption?: string;
      chart: "volcano-024322" | "volcano-028102" | "burial-heatmap" | "p9-volume" | "confidence-scatter";
    };
