import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { entrepreneurshipFeatures } from "../components/wiki/features/engagement/EntrepreneurshipPanels";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { entrepreneurshipPage } from "../data/engagement/entrepreneurshipPage";

export function Entrepreneurship() {
  return (
    <WikiRoutePage
      content={entrepreneurshipPage}
      heroImage={getEngagementHeroImage(entrepreneurshipPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement"
      hideHeroCopy
      features={entrepreneurshipFeatures()}
    />
  );
}
