import overviewScaleFramework03 from "../assets/wiki/sustainability-overview-scale-framework-03.png";
import frameworkSetDevelopGrow06 from "../assets/wiki/sustainability-framework-set-develop-grow-06.png";
import setStakeholderOverview07 from "../assets/wiki/sustainability-set-stakeholder-overview-07.png";
import {
  sustainabilityAssets,
  type SustainabilityImageAssetKey,
} from "./sustainabilityAssets";

export const sustainabilityImages = {
  overviewScaleFramework03,
  frameworkSetDevelopGrow06,
  setStakeholderOverview07,
} satisfies Record<SustainabilityImageAssetKey, string>;

export const sustainabilityImageAlt = (key: SustainabilityImageAssetKey) =>
  sustainabilityAssets[key].alt;
