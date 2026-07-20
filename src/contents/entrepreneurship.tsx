import { WikiPage } from "../components/wiki/WikiPage";
import {
  AssumptionFunnel,
  DecisionProofTable,
  EngagementSignature,
  TradeoffOrbit,
} from "../components/wiki/features/EngagementFeatures";
import { entrepreneurshipPage } from "../data/engagementPages";

export function Entrepreneurship() {
  return (
    <WikiPage
      content={entrepreneurshipPage}
      heroVisual={<EngagementSignature variant="entrepreneurship" />}
      features={{
        "venture-discovery": <AssumptionFunnel />,
        "venture-hypotheses": <DecisionProofTable />,
        "venture-roadmap": <TradeoffOrbit />,
      }}
    />
  );
}
