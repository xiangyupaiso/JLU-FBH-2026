import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import {
  BarrierMap,
  ConsentMatrix,
  DecisionProofTable,
} from "../components/wiki/features/EngagementFeatures";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { inclusivityPage } from "../data/engagementPages";
import "../styles/route-palette-engagement.css";

export function Inclusivity() {
  return (
    <WikiRoutePage
      content={inclusivityPage}
      heroImage={getEngagementHeroImage(inclusivityPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement"
      features={{
        "inclusion-barriers": <BarrierMap />,
        "inclusion-actions": <DecisionProofTable />,
        "inclusion-consent": <ConsentMatrix />,
      }}
    />
  );
}
