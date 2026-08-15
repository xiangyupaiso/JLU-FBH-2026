import overviewSstQnPreview01 from "../assets/wiki/sustainability-overview-sst-qn-preview-01.png";
import overviewScaleFramework03 from "../assets/wiki/sustainability-overview-scale-framework-03.png";
import frameworkSetDevelopGrow06 from "../assets/wiki/sustainability-framework-set-develop-grow-06.png";
import setStakeholderOverview07 from "../assets/wiki/sustainability-set-stakeholder-overview-07.png";
import sdg9BatchProjection from "../assets/wiki/sustainability-sdg9-batch-projection.png";
import sdg9Evidence from "../assets/wiki/sustainability-sdg9-evidence.png";
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
