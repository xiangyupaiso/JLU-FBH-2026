import {
  sustainabilityAssets,
  type SustainabilityImageAssetKey,
} from "./sustainabilityAssets";

const overviewMapOfStakeholders = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-map-of-stakeholders.avif";
const overviewScaleModel = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-scale-model.avif";
const overviewSstQnNetwork = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-sst-qn-network.avif";
const overviewReusableToolkit = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-reusable-toolkit.avif";
const sstQnStatusClassification = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sst-qn-status-classification.avif";
const sstQnBoundaryMatrix = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sst-qn-boundary-matrix.avif";
const sstQnInteractionScores = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sst-qn-interaction-scores.avif";
const frameworkSetDevelopGrow = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-framework-set-develop-grow.avif";
const sdg3StakeholdersDistribution = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg3-stakeholders-distribution.avif";
const sdg3TraceableImprovements = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg3-traceable-improvements.avif";
const sdg9TraceableExpertFeedback = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg9-traceable-expert-feedback.avif";
const synbioClassroomPathway = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-synbio-classroom-pathway.avif";

const overviewSstQnPreview01 = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-sst-qn-preview-01.avif";
const overviewScaleFramework03 = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-scale-framework-03.avif";
const frameworkSetDevelopGrow06 = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-framework-set-develop-grow-06.avif";
const setStakeholderOverview07 = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-set-stakeholder-overview-07.avif";
const sdg9BatchProjection = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg9-batch-projection.avif";
const sdg9Evidence = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg9-evidence.avif";

export const sustainabilityImages = {
  overviewMapOfStakeholders,
  overviewScaleModel,
  overviewSstQnNetwork,
  overviewReusableToolkit,
  sstQnStatusClassification,
  sstQnBoundaryMatrix,
  sstQnInteractionScores,
  frameworkSetDevelopGrow,
  sdg3StakeholdersDistribution,
  sdg3TraceableImprovements,
  sdg9TraceableExpertFeedback,
  synbioClassroomPathway,
  overviewSstQnPreview01,
  overviewScaleFramework03,
  frameworkSetDevelopGrow06,
  setStakeholderOverview07,
  sdg9BatchProjection,
  sdg9Evidence,
} satisfies Record<SustainabilityImageAssetKey, string>;

export const sustainabilityImageAlt = (key: SustainabilityImageAssetKey) =>
  sustainabilityAssets[key].alt;
