import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import {
  alternativePlatformFeatures,
  renderAlternativePlatformCitedText,
} from "../components/wiki/features/wet-lab/AlternativePlatformPanels";
import { alternativePlatformPage } from "../data/wet-lab/alternativePlatformPage";

const COLLAPSIBLE_SECTIONS = ["judging-criteria", "key-achievements"];

export function AlternativePlatform() {
  return (
    <WikiRoutePage
      content={alternativePlatformPage}
      heroImage={getWetLabHeroImage(alternativePlatformPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      hideHeroCopy
      collapsibleSubheadingSections={COLLAPSIBLE_SECTIONS}
      features={alternativePlatformFeatures()}
      inlineRenderer={renderAlternativePlatformCitedText}
    />
  );
}
