// Builds src/components/wiki/features/SustainabilityPanels.tsx by extracting the
// pre-revamp Sustainability page's helpers, local components and feature map
// verbatim (no copy or markup is retyped).
import { readFile, writeFile } from "node:fs/promises";

const OLD =
  "C:/Users/香芋派/.trae-cn/Official-wiki/src/contents/sustainability.tsx";
const OUT = new URL(
  "../src/components/wiki/features/SustainabilityPanels.tsx",
  import.meta.url,
);

const src = await readFile(OLD, "utf8");
const lines = src.split("\n");
const slice = (from, to) => lines.slice(from - 1, to).join("\n");

const header = `import type { ReactNode } from "react";
import {
  ConsequencesDimensionCard,
  CountUpStat,
  ExpertFeedbackGrid,
  ImpactFrameworkDiagram,
  PdfToolList,
  ProblemCardGroup,
  SCALEProgressChain,
  SDGInteractiveCard,
  SdgBoundaryMatrix,
  SdgDimensionChord,
  SdgImpactRadar,
  SdgInteractionHeatmap,
  SSTQNClassificationMatrix,
  SSTQNScoreProcess,
  StakeholderProfileCard,
  SustainabilityPdfPreview,
} from "../sustainability";
import type { ProtocolManual } from "../../../data/protocolPages";
import {
  sustainabilityAssets,
  type SustainabilityImageAssetKey,
} from "../../../data/sustainabilityAssets";
import { sustainabilityImages } from "../../../data/sustainabilityImages";
import {
  sdg3EvidenceStats,
  sdg3LegacyTools,
  sdg3Section,
  sstqnSection,
  stakeholderProfiles,
  sustainabilityOverview,
  sustainabilityStats,
  type StakeholderProfile,
  type StakeholderVariant,
  type SustainabilityStat,
} from "../../../data/sustainabilityData";
import { sdg9Section } from "../../../data/sustainabilitySdg9";
import { sdg12Section } from "../../../data/sustainabilitySdg12";
import { growSection } from "../../../data/sustainabilityGrow";
import { SustPanelScope } from "./SustPanelScope";
import "../../../styles/sustainability-panels.css";

/**
 * Feature panels of the pre-revamp Sustainability record, ported verbatim.
 *
 * The Engagement reader owns the hero, sidebar, section rhythm and closing
 * prompt (shared reader-route template); the old page's own visual vocabulary —
 * SDG cards, radar, interaction heatmap, boundary matrix, dimension chord,
 * SST-QN matrix/flow, impact framework, SCALE chain, stats, stakeholder cards,
 * problem/feedback/consequence panels and the PDF tool lists — mounts as that
 * template's section "features", in the exact order the copy requires.
 *
 * Every panel is wrapped in \`SustPanelScope\`, which supplies the ported
 * stylesheet's token aliases (see the port note in \`sustainability-panels.css\`)
 * without adding a box to the article.
 */

type FeatureMap = Record<string, ReactNode>;
`;

const helpers = slice(44, 223);

const mapBody = slice(231, 326);

const builder = `
export function sustainabilityFeatures(): FeatureMap {
  const map: FeatureMap = {
${mapBody}
  };

  // Each panel carries the ported stylesheet's scope container.
  return Object.fromEntries(
    Object.entries(map).map(([key, node]) => [
      key,
      <SustPanelScope key={key}>{node}</SustPanelScope>,
    ]),
  );
}
`;

const out = [header, helpers, builder].join("\n");
await writeFile(OUT, out, "utf8");
console.log(`${OUT.pathname.split("/").pop()}: ${out.split("\n").length} lines`);
