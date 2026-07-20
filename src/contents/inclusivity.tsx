import { WikiPage } from "../components/wiki/WikiPage";
import {
  BarrierMap,
  ConsentMatrix,
  DecisionProofTable,
  EngagementSignature,
} from "../components/wiki/features/EngagementFeatures";
import { inclusivityPage } from "../data/engagementPages";

export function Inclusivity() {
  return (
    <WikiPage
      content={inclusivityPage}
      heroVisual={<EngagementSignature variant="inclusivity" />}
      features={{
        "inclusion-barriers": <BarrierMap />,
        "inclusion-actions": <DecisionProofTable />,
        "inclusion-consent": <ConsentMatrix />,
      }}
    />
  );
}
