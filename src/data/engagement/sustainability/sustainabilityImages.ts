const overviewSstQnPreview01 = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-sst-qn-preview-01.avif";
const overviewScaleFramework03 = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-scale-framework-03.avif";
const frameworkSetDevelopGrow06 = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-framework-set-develop-grow-06.avif";
const setStakeholderOverview07 = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-set-stakeholder-overview-07.avif";
const sdg9BatchProjection = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg9-batch-projection.avif";
const sdg9Evidence = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg9-evidence.avif";
import {
  sustainabilityAssets,
  type SustainabilityImageAssetKey,
} from "./sustainabilityAssets";

export const sustainabilityImages = {
  overviewSstQnPreview01,
  overviewScaleFramework03,
  frameworkSetDevelopGrow06,
  setStakeholderOverview07,
  sdg9BatchProjection,
  sdg9Evidence,
} satisfies Record<SustainabilityImageAssetKey, string>;

export const sustainabilityImageAlt = (key: SustainabilityImageAssetKey) =>
  sustainabilityAssets[key].alt;

