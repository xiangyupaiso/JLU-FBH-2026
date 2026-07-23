import { WikiPage } from "../components/wiki/WikiPage";
import {
  DynamicsValidationPanel,
  EpitopeEvidencePanel,
  ModelArchitectureMap,
  ModelJudgeBrief,
  ModelLimitationsMatrix,
  ModelReproducibilityRelease,
  StructureComparisonPanel,
  ValidationAndSensitivityPanel,
  WetDryDecisionLedger,
} from "../components/wiki/features/ModelEvidenceFeatures";
import { modelEvidencePage } from "../data/modelPage";
import "../styles/model-page.css";

export function Model() {
  return (
    <WikiPage
      content={modelEvidencePage}
      heroVisual={null}
      pageClassName="wiki-page--model-hero"
      features={{
        "model-judge-brief": <ModelJudgeBrief />,
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
