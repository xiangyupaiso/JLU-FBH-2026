import { DryLabWikiPage } from "../components/wiki/DryLabWikiPage";
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
import "../styles/software-page.css";
import "../styles/dry-lab-calm.css";
import "../styles/dry-lab-reading.css";

export function Software() {
  return (
    <DryLabWikiPage
      content={softwareEvidencePage}
      heroVisual={null}
      pageClassName="wiki-page--software-hero"
      features={{
        "software-user-task": <CirCureSoftwareWorkflowExplorer />,
        "software-scope": <SoftwareScopeContract />,
        "software-architecture": <SoftwareArchitectureFlow />,
        "software-workflow": <SoftwareRunEvidence />,
        "software-validation": <SoftwareValidationPanel />,
        "software-iteration": <SoftwareIterationTimeline />,
        "software-release": <SoftwareReleasePackage />,
        "software-limitations": <SoftwareLimitationsAndAppendices />,
      }}
    />
  );
}
