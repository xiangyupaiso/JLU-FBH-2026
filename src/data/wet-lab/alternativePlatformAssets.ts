import platformComparison from "../../assets/wiki/alternative-platform/platform-comparison.webp";
import necessityChain from "../../assets/wiki/alternative-platform/necessity-chain.webp";
import backboneArchitecture from "../../assets/wiki/alternative-platform/backbone-architecture.webp";
import evidenceDependencyMap from "../../assets/wiki/alternative-platform/evidence-dependency-map.webp";
import releaseWorkflow from "../../assets/wiki/alternative-platform/release-workflow.webp";
import roundOneRanking from "../../assets/wiki/alternative-platform/round-one-ranking.webp";
import roundOneElispot from "../../assets/wiki/alternative-platform/round-one-elispot.webp";
import inVivoResults from "../../assets/wiki/alternative-platform/in-vivo-results.webp";
import evidenceTiers from "../../assets/wiki/alternative-platform/evidence-tiers.webp";

export interface AlternativePlatformAssetEntry {
  fileName: string;
  localSourcePath: string;
  localSrc?: string;
  uploadUrl: string;
  alt: string;
  caption: string;
  section: string;
}

export const alternativePlatformAssets = {
  platformComparison: {
    fileName: "platform-comparison.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/Mea Fig 1.png",
    localSrc: platformComparison,
    uploadUrl: "",
    alt: "Five platforms against the problem's requirements, with the failure point of each marked.",
    caption:
      "Five platforms against the problem's requirements, with the failure point of each marked.",
    section: "The gap",
  },
  necessityChain: {
    fileName: "necessity-chain.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/Create a publication-quality BioRender scientific figure titled “The Necessity C.png",
    localSrc: necessityChain,
    uploadUrl: "",
    alt: "Host, modality and production as three stacked layers, with the forcing constraint on each arrow.",
    caption:
      "Host, modality and production as three stacked layers, with the forcing constraint on each arrow.",
    section: "Why this platform",
  },
  backboneArchitecture: {
    fileName: "backbone-architecture.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/Create a publication-quality BioRender mechanism figure titled “Engineering the.png",
    localSrc: backboneArchitecture,
    uploadUrl: "",
    alt: "The circRNA in translation order, with the four encoded elements highlighted.",
    caption:
      "The circRNA in translation order, with the four encoded elements highlighted.",
    section: "Why this platform",
  },
  evidenceDependencyMap: {
    fileName: "evidence-dependency-map.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/Create a publication-ready BioRender-style SCIENTIFIC DEPENDENCY MAP, -CirCure -.png",
    localSrc: evidenceDependencyMap,
    uploadUrl: "",
    alt: "The evidence chain from DC maturation to tumour-cell killing, each link with its read-out and its control.",
    caption:
      "The evidence chain from DC maturation to tumour-cell killing, each link with its read-out and its control.",
    section: "Evidence",
  },
  releaseWorkflow: {
    fileName: "release-workflow.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/放行流程图.png",
    localSrc: releaseWorkflow,
    uploadUrl: "",
    alt: "The cell-free production route and the release gate that returns a failed preparation to transcription.",
    caption:
      "The cell-free production route and the release gate that returns a failed preparation to transcription.",
    section: "Construction and release",
  },
  roundOneRanking: {
    fileName: "round-one-ranking.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/image 1.png",
    localSrc: roundOneRanking,
    uploadUrl: "",
    alt: "Round-1 ELISpot rank against K562 killing rank for all 13 constructs.",
    caption:
      "Round-1 ELISpot rank against K562 killing rank for all 13 constructs.",
    section: "Why the platform includes a wet screen",
  },
  roundOneElispot: {
    fileName: "round-one-elispot.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/image.png",
    localSrc: roundOneElispot,
    uploadUrl: "",
    alt: "Round-1 IFN-γ ELISpot wells for all 13 single-epitope constructs.",
    caption:
      "Round-1 IFN-γ ELISpot wells for all 13 single-epitope constructs.",
    section: "Why the platform includes a wet screen",
  },
  inVivoResults: {
    fileName: "in-vivo-results.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/9458b226-2e84-44af-bb78-95b25d378d0c.png",
    localSrc: inVivoResults,
    uploadUrl: "",
    alt: "Tumour growth curves to day 35 and excised tumours at endpoint.",
    caption: "Tumour growth curves to day 35 and excised tumours at endpoint.",
    section: "In vivo",
  },
  evidenceTiers: {
    fileName: "evidence-tiers.webp",
    localSourcePath:
      "文案集/wetlab/Alternative_Platform/图片和附件/证据链.png",
    localSrc: evidenceTiers,
    uploadUrl: "",
    alt: "Every claim on this page placed in one of six evidence tiers, with the read-out that supports it.",
    caption:
      "Every claim on this page placed in one of six evidence tiers, with the read-out that supports it.",
    section: "Evidence strength",
  },
} as const satisfies Record<string, AlternativePlatformAssetEntry>;

export type AlternativePlatformAssetKey =
  keyof typeof alternativePlatformAssets;

export function getAlternativePlatformImage(
  key: AlternativePlatformAssetKey,
): string {
  const asset = alternativePlatformAssets[key];
  return asset.uploadUrl || asset.localSrc || "";
}
