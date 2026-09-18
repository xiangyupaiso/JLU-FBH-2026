import type { ReactNode } from "react";
import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getDryLabHeroImage } from "../components/wiki/dryLabHeroAssets";
import { DryPanelScope } from "../components/wiki/features/DryPanelScope";
import {
  SoftwareArchitectureFlow,
  SoftwareIterationTimeline,
  SoftwareLimitationsAndAppendices,
  SoftwareReleasePackage,
  SoftwareRunEvidence,
  SoftwareScopeContract,
  SoftwareValidationPanel,
} from "../components/wiki/features/SoftwareEvidenceFeatures";
import { CirCureSoftwareWorkflowExplorer } from "../components/wiki/features/DryLabProjectExplorers";
import { softwareEvidencePage } from "../data/softwarePage";
import "../styles/route-palette-drylab.css";
import "../styles/dry-panel-software.css";

/**
 * Every visual panel is the pre-revamp component, ported verbatim and rendered
 * inside the `DryPanelScope` namespace container (see that file). The prose
 * sections, hero, sidebar and closing prompt stay on the shared reader-route
 * template.
 */
const panel = (node: ReactNode) => (
  <DryPanelScope module="software">{node}</DryPanelScope>
);

export function Software() {
  return (
    <WikiRoutePage
      content={softwareEvidencePage}
      heroImage={getDryLabHeroImage(softwareEvidencePage.route)}
      theme="dry-lab"
      pageClassName="wiki-page--dry-lab"
      features={{
        "software-user-task": panel(<CirCureSoftwareWorkflowExplorer />),
        "software-scope": panel(<SoftwareScopeContract />),
        "software-architecture": panel(<SoftwareArchitectureFlow />),
        "software-workflow": panel(<SoftwareRunEvidence />),
        "software-validation": panel(<SoftwareValidationPanel />),
        "software-iteration": panel(<SoftwareIterationTimeline />),
        "software-release": panel(<SoftwareReleasePackage />),
        "software-limitations": panel(<SoftwareLimitationsAndAppendices />),
      }}
    />
  );
}
