import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { sustainabilityFeatures } from "../components/wiki/features/engagement/SustainabilityPanels";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { sustainabilityPage } from "../data/engagement/sustainability";
import "../styles/route-palette-engagement.css";

export function Sustainability() {
  return (
    <WikiRoutePage
      content={sustainabilityPage}
      heroImage={getEngagementHeroImage(sustainabilityPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement wiki-page--sustainability"
      hideHeroCopy
      outlineDepth={2}
      features={sustainabilityFeatures()}
    />
  );
}
