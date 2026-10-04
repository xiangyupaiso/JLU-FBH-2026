/**
 * Sustainability page asset registry.
 *
 * Semantic key → file name / local source / iGEM URL / alt for every image and
 * PDF the page renders. Local sources live in
 * `文案集/engagement/sustainability/图片和附件/`; upload targets follow the team's
 * `static.igem.wiki/teams/6056/wiki/files/...` naming (uploads are handled by
 * the asset owner — see IGEM_ASSET_REGISTRY.md).
 *
 * SST-QN Figures 5–7 are rendered as interactive charts (ECharts), and the
 * Overview SDG / SET-DEVELOP-GROW graphics as components, so they have no
 * image entry here. Engagement photographs live in `sustainabilityPhotos.ts`.
 */

import overviewMapOfStakeholdersImg from "../../../assets/wiki/sustainability/sustainability-overview-map-of-stakeholders.png";
import overviewScaleModelImg from "../../../assets/wiki/sustainability/sustainability-overview-scale-model.png";
import overviewSstQnNetworkImg from "../../../assets/wiki/sustainability/sustainability-overview-sst-qn-network.png";
import overviewReusableToolkitImg from "../../../assets/wiki/sustainability/sustainability-overview-reusable-toolkit.png";
import overviewSetDevelopGrowImg from "../../../assets/wiki/sustainability/sustainability-overview-set-develop-grow.png";
import sstQnStatusClassificationImg from "../../../assets/wiki/sustainability/sustainability-sst-qn-status-classification.png";
import sdg3StakeholdersDistributionImg from "../../../assets/wiki/sustainability/sustainability-sdg3-stakeholders-distribution.png";
import sdg3TraceableImprovementsImg from "../../../assets/wiki/sustainability/sustainability-sdg3-traceable-improvements.png";
import sdg3DcMaturationFlowImg from "../../../assets/wiki/sustainability/sustainability-sdg3-dc-maturation-flow.png";
import sdg3SplenocyteFlowImg from "../../../assets/wiki/sustainability/sustainability-sdg3-splenocyte-flow.png";
import sdg3TumorGrowthImg from "../../../assets/wiki/sustainability/sustainability-sdg3-tumor-growth.png";

export type SustainabilityAssetKind = "image" | "pdf";

export interface SustainabilityAssetEntry {
  kind: SustainabilityAssetKind;
  fileName: string;
  localSourcePath: string;
  localSrc?: string;
  uploadUrl: string;
  alt: string;
  section: string;
  pdfPages?: number;
}

const IMG = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement";
const DOCS = "https://static.igem.wiki/teams/6056/wiki/files/docs";

export const sustainabilityAssets = {
  overviewMapOfStakeholders: {
    kind: "image",
    fileName: "sustainability-overview-map-of-stakeholders.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-map-of-stakeholders.png",
    localSrc: overviewMapOfStakeholdersImg,
    uploadUrl: `${IMG}/sustainability-overview-map-of-stakeholders.avif`,
    alt: "Map of stakeholders",
    section: "Overview",
  },
  overviewScaleModel: {
    kind: "image",
    fileName: "sustainability-overview-scale-model.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-scale-model.png",
    localSrc: overviewScaleModelImg,
    uploadUrl: `${IMG}/sustainability-overview-scale-model.avif`,
    alt: "SCALE Model",
    section: "Overview",
  },
  overviewSstQnNetwork: {
    kind: "image",
    fileName: "sustainability-overview-sst-qn-network.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-sst-qn-network.png",
    localSrc: overviewSstQnNetworkImg,
    uploadUrl: `${IMG}/sustainability-overview-sst-qn-network.avif`,
    alt: "SDG Synergy–Trade-off Quantification Network (SST-QN)",
    section: "Overview",
  },
  overviewReusableToolkit: {
    kind: "image",
    fileName: "sustainability-overview-reusable-toolkit.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-reusable-toolkit.png",
    localSrc: overviewReusableToolkitImg,
    uploadUrl: `${IMG}/sustainability-overview-reusable-toolkit.avif`,
    alt: "Reusable Sustainability Toolkit",
    section: "Overview",
  },
  sstQnStatusClassification: {
    kind: "image",
    fileName: "sustainability-sst-qn-status-classification.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sst-qn-status-classification.png",
    localSrc: sstQnStatusClassificationImg,
    uploadUrl: `${IMG}/sustainability-sst-qn-status-classification.avif`,
    alt: "SST-QN Interaction Status Classification",
    section: "SST-QN",
  },
  frameworkSetDevelopGrow: {
    kind: "image",
    fileName: "sustainability-overview-set-develop-grow.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-set-develop-grow.png",
    localSrc: overviewSetDevelopGrowImg,
    uploadUrl: `${IMG}/sustainability-framework-set-develop-grow.avif`,
    alt: "SET-DEVELOP-GROW Impact Framework (SDG Impact Framework)",
    section: "SDG Impact Framework",
  },
  sdg3StakeholdersDistribution: {
    kind: "image",
    fileName: "sustainability-sdg3-stakeholders-distribution.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sdg3-stakeholders-distribution.png",
    localSrc: sdg3StakeholdersDistributionImg,
    uploadUrl: `${IMG}/sustainability-sdg3-stakeholders-distribution.avif`,
    alt: "49 stakeholders across five groups",
    section: "SDG 3 — Evidence",
  },
  sdg3TraceableImprovements: {
    kind: "image",
    fileName: "sustainability-sdg3-traceable-improvements.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sdg3-traceable-improvements.png",
    localSrc: sdg3TraceableImprovementsImg,
    uploadUrl: `${IMG}/sustainability-sdg3-traceable-improvements.avif`,
    alt: "Eight traceable project improvements",
    section: "SDG 3 — Evidence",
  },
  sdg3DcMaturationFlow: {
    kind: "image",
    fileName: "sustainability-sdg3-dc-maturation-flow.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sdg3-dc-maturation-flow.png",
    localSrc: sdg3DcMaturationFlowImg,
    uploadUrl: `${IMG}/sustainability-sdg3-dc-maturation-flow.avif`,
    alt: "In vitro flow cytometry of dendritic-cell maturation and CD8⁺ T-cell subsets",
    section: "SDG 3 — Evidence",
  },
  sdg3SplenocyteFlow: {
    kind: "image",
    fileName: "sustainability-sdg3-splenocyte-flow.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sdg3-splenocyte-flow.png",
    localSrc: sdg3SplenocyteFlowImg,
    uploadUrl: `${IMG}/sustainability-sdg3-splenocyte-flow.avif`,
    alt: "In vivo splenocyte flow cytometry of IFN-γ⁺CD8⁺ and GzmB⁺CD8⁺ subsets",
    section: "SDG 3 — Evidence",
  },
  sdg3TumorGrowth: {
    kind: "image",
    fileName: "sustainability-sdg3-tumor-growth.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sdg3-tumor-growth.png",
    localSrc: sdg3TumorGrowthImg,
    uploadUrl: `${IMG}/sustainability-sdg3-tumor-growth.avif`,
    alt: "Excised tumors and endpoint tumor volume across PBS, control and circRNA vaccine groups",
    section: "SDG 3 — Evidence",
  },
  sstQnModelConstruction: {
    kind: "pdf",
    fileName: "sustainability-sst-qn-model-construction.pdf",
    localSourcePath: "public/assets/docs/sustainability-sst-qn-model-construction.pdf",
    uploadUrl: `${DOCS}/sustainability-sst-qn-model-construction.pdf`,
    alt: "SDG 模型构建",
    section: "SST-QN",
    pdfPages: 53,
  },
} as const satisfies Record<string, SustainabilityAssetEntry>;

export type SustainabilityAssetKey = keyof typeof sustainabilityAssets;

export type SustainabilityImageAssetKey = {
  [K in SustainabilityAssetKey]: (typeof sustainabilityAssets)[K]["kind"] extends "image"
    ? K
    : never;
}[SustainabilityAssetKey];

/** iGEM URL of a registered image with local fallback. */
export const sustainabilityImage = (key: SustainabilityImageAssetKey): string =>
  sustainabilityAssets[key].localSrc || sustainabilityAssets[key].uploadUrl;

/** iGEM docs URL of a hosted PDF/HTML file name, with local dev fallback. */
export const sustainabilityDocUrl = (fileName: string) =>
  import.meta.env.DEV ? `/assets/docs/${fileName}` : `${DOCS}/${fileName}`;
