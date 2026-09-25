import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import {
  AssumptionFunnel,
  DecisionProofTable,
  TradeoffOrbit,
} from "../components/wiki/features/EngagementFeatures";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { entrepreneurshipPage } from "../data/engagement/entrepreneurshipPage";
import "../styles/route-palette-engagement.css";

export function Entrepreneurship() {
  return (
    <WikiRoutePage
      content={entrepreneurshipPage}
      heroImage={getEngagementHeroImage(entrepreneurshipPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement"
      features={{
        "venture-discovery": <AssumptionFunnel />,
        "venture-hypotheses": <DecisionProofTable />,
        "venture-roadmap": <TradeoffOrbit />,
      }}
    />
  );
}
