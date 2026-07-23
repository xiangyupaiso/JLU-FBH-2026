import { WikiPage } from "../components/wiki/WikiPage";
import {
  SoftwareArchitectureFlow,
  SoftwareIterationTimeline,
  SoftwareLimitationsAndAppendices,
  SoftwareReleasePackage,
  SoftwareRunEvidence,
  SoftwareScopeContract,
  SoftwareUserTaskBrief,
  SoftwareValidationPanel,
} from "../components/wiki/features/SoftwareEvidenceFeatures";
import { softwareEvidencePage } from "../data/softwarePage";
import "../styles/software-page.css";

export function Software() {
  return (
    <WikiPage
      content={softwareEvidencePage}
      heroVisual={null}
      pageClassName="wiki-page--software-hero"
      features={{
        "software-user-task": <SoftwareUserTaskBrief />,
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
