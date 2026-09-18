import { WikiPage } from "../components/wiki/WikiPage";
import {
  SafetyBoundary,
  SafetyControlHierarchy,
  SafetyNoGoLedger,
} from "../components/wiki/features/WetLabFeatures";
import { safetyPage } from "../data/wetLabPages";

export function SafetyAndSecurity() {
  return (
    <WikiPage
      content={safetyPage}
      heroVisual={null}
      features={{
        "safety-risks": <SafetyBoundary />,
        "safety-controls": <SafetyControlHierarchy />,
        "safety-boundaries": <SafetyNoGoLedger />,
      }}
    />
  );
}
