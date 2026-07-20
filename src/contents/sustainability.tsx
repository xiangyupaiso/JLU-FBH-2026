import { WikiPage } from "../components/wiki/WikiPage";
import { ResultGateTable } from "../components/wiki/features/ProjectFeatures";
import {
  DecisionProofTable,
  EngagementSignature,
  TradeoffOrbit,
} from "../components/wiki/features/EngagementFeatures";
import { sustainabilityPage } from "../data/engagementPages";

export function Sustainability() {
  return (
    <WikiPage
      content={sustainabilityPage}
      heroVisual={<EngagementSignature variant="sustainability" />}
      features={{
        "sustainability-scope": <TradeoffOrbit />,
        "sustainability-sdgs": <DecisionProofTable />,
        "sustainability-indicators": <ResultGateTable />,
      }}
    />
  );
}
