import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { HpPanelScope } from "../components/wiki/features/HpPanelScope";
import { HumanPracticesTimeline } from "../components/wiki/features/HumanPracticesPanels";
import { HumanPracticesOriginTree } from "../components/wiki/features/HumanPracticesOriginTree";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { humanPracticesPage } from "../data/engagement/humanPracticesPage";
import "../styles/route-palette-engagement.css";

export function HumanPractices() {
  return (
    <WikiRoutePage
      content={humanPracticesPage}
      heroImage={getEngagementHeroImage(humanPracticesPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement wiki-page--human-practices"
      hideHeroCopy
      features={{
        "hp-timeline-original": <HpPanelScope><HumanPracticesTimeline /></HpPanelScope>,
        "hp-origin-tree": <HumanPracticesOriginTree />,
      }}
    />
  );
}
