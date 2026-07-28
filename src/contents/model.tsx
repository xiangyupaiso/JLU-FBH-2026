import { DryLabWikiPage } from "../components/wiki/DryLabWikiPage";
import {
  DynamicsValidationPanel,
  EpitopeEvidencePanel,
  ModelArchitectureMap,
  ModelLimitationsMatrix,
  ModelReproducibilityRelease,
  StructureComparisonPanel,
  ValidationAndSensitivityPanel,
  WetDryDecisionLedger,
} from "../components/wiki/features/ModelEvidenceFeatures";
import { CirCureModelDecisionExplorer } from "../components/wiki/features/DryLabProjectExplorers";
import { modelEvidencePage } from "../data/modelPage";
import "../styles/model-page.css";
import "../styles/dry-lab-calm.css";
import "../styles/dry-lab-reading.css";

export function Model() {
  return (
    <DryLabWikiPage
      content={modelEvidencePage}
      heroVisual={null}
      pageClassName="wiki-page--model-hero"
      features={{
        "model-judge-brief": <CirCureModelDecisionExplorer />,
        "model-architecture": <ModelArchitectureMap />,
        "model-epitope": <EpitopeEvidencePanel />,
        "model-structure": <StructureComparisonPanel />,
        "model-dynamics": <DynamicsValidationPanel />,
        "model-validation": <ValidationAndSensitivityPanel />,
        "model-wet-dry": <WetDryDecisionLedger />,
        "model-limitations": <ModelLimitationsMatrix />,
        "model-reproducibility": <ModelReproducibilityRelease />,
      }}
    />
  );
}
