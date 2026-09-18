import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import {
  SafetyBoundary,
  SafetyControlHierarchy,
  SafetyNoGoLedger,
} from "../components/wiki/features/WetLabFeatures";
import { safetyPage } from "../data/wetLabPages";
import "../styles/route-palette-wetlab.css";

export function SafetyAndSecurity() {
  return (
    <WikiRoutePage
      content={safetyPage}
      heroImage={getWetLabHeroImage(safetyPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      features={{
        "safety-risks": <SafetyBoundary />,
        "safety-controls": <SafetyControlHierarchy />,
        "safety-boundaries": <SafetyNoGoLedger />,
      }}
    />
  );
}
