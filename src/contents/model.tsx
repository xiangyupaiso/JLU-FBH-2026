import type { ReactNode } from "react";
import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getDryLabHeroImage } from "../components/wiki/dryLabHeroAssets";
import { DryPanelScope } from "../components/wiki/features/DryPanelScope";
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
import { Trop2ComplexViewer } from "../components/wiki/features/Trop2ComplexViewer";
import { modelEvidencePage } from "../data/modelPage";
import "../styles/route-palette-drylab.css";
import "../styles/dry-panel-model.css";

/**
 * Every visual panel is the pre-revamp component, ported verbatim and rendered
 * inside the `DryPanelScope` namespace container (see that file). The prose
 * sections, hero, sidebar and closing prompt stay on the shared reader-route
 * template.
 */
const panel = (node: ReactNode) => (
  <DryPanelScope module="model">{node}</DryPanelScope>
);

export function Model() {
  return (
    <WikiRoutePage
      content={modelEvidencePage}
      heroImage={getDryLabHeroImage(modelEvidencePage.route)}
      theme="dry-lab"
      pageClassName="wiki-page--dry-lab"
      hideHeroCopy
      features={{
        "model-structural-confirmation": <Trop2ComplexViewer />,
        "model-judge-brief": panel(<CirCureModelDecisionExplorer />),
        "model-architecture": panel(<ModelArchitectureMap />),
        "model-epitope": panel(<EpitopeEvidencePanel />),
        "model-structure": panel(<StructureComparisonPanel />),
        "model-dynamics": panel(<DynamicsValidationPanel />),
        "model-validation": panel(<ValidationAndSensitivityPanel />),
        "model-wet-dry": panel(<WetDryDecisionLedger />),
        "model-limitations": panel(<ModelLimitationsMatrix />),
        "model-reproducibility": panel(<ModelReproducibilityRelease />),
      }}
    />
  );
}
