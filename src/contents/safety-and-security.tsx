import { WikiPage } from "../components/wiki/WikiPage";
import { ResultGateTable } from "../components/wiki/features/ProjectFeatures";
import {
  ReadoutMatrix,
  SafetyBoundary,
  WetLabSignature,
} from "../components/wiki/features/WetLabFeatures";
import { safetyPage } from "../data/wetLabPages";

export function SafetyAndSecurity() {
  return (
    <WikiPage
      content={safetyPage}
      heroVisual={<WetLabSignature variant="safety" />}
      features={{
        "safety-risks": <SafetyBoundary />,
        "safety-controls": <ReadoutMatrix />,
        "safety-boundaries": <ResultGateTable />,
      }}
    />
  );
}
