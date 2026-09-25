import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { sustainabilityFeatures } from "../components/wiki/features/SustainabilityPanels";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { sustainabilityPage } from "../data/engagement/sustainability";
import "../styles/route-palette-engagement.css";

/**
 * Sustainability shares the Engagement module's palette (the whole nav group is
 * one module): 主色 #E6A272 header bar, 辅色 #F7C7A1 sidebar card and pills,
 * 底色 #FCEAC1 page surface, `engagement.png` for the article frame.
 *
 * The prose record is the finalized `sustainabilityPage` copy — it already
 * composes the sourced text into ordered blocks with `feature` keys — and the
 * pre-revamp page's visual vocabulary is ported verbatim as those features
 * (see `SustainabilityPanels.tsx`).
 */
export function Sustainability() {
  return (
    <WikiRoutePage
      content={sustainabilityPage}
      heroImage={getEngagementHeroImage(sustainabilityPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement wiki-page--sustainability"
      enableWideFlow
      features={sustainabilityFeatures()}
    />
  );
}
