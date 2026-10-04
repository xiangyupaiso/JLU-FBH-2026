import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import {
  SafetyBoundary,
  SafetyControlHierarchy,
  SafetyNoGoLedger,
} from "../components/wiki/features/WetLabFeatures";
import { safetyPage } from "../data/project/safetyPage";

export function SafetyAndSecurity() {
  return (
    <WikiRoutePage
      content={safetyPage}
      heroImage={getProjectHeroImage(safetyPage.route)}
      theme="project"
      pageClassName="wiki-page--project"
      hideHeroCopy
      features={{
        "safety-risks": <SafetyBoundary />,
        "safety-controls": <SafetyControlHierarchy />,
        "safety-boundaries": <SafetyNoGoLedger />,
      }}
    />
  );
}
