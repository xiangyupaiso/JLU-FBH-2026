import type { ReactNode } from "react";
import { ArchitectureFlowchart, LumiCursorShowcase, PaletteSwatches } from "./VisualDesignPanels";

export function visualDesignFeatures(): Record<string, ReactNode> {
  return {
    "palette-swatches": <PaletteSwatches />,
    "architecture-flowchart": <ArchitectureFlowchart />,
    "lumi-cursor-showcase": <LumiCursorShowcase />,
  };
}
