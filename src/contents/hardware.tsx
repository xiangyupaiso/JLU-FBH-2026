import { DryLabWikiPage } from "../components/wiki/DryLabWikiPage";
import {
  AnnotatedSystemDiagram,
  BuildIterationTimeline,
  HardwareAssemblyAndBom,
  HardwareCalibrationAndPerformance,
  HardwareSafetyRiskMatrix,
  OpenHardwareReleaseChecklist,
} from "../components/wiki/features/HardwareEvidenceFeatures";
import { CirCureHardwareEvidenceExplorer } from "../components/wiki/features/DryLabProjectExplorers";
import { hardwareEvidencePage } from "../data/hardwarePage";
import "../styles/hardware-page.css";
import "../styles/dry-lab-calm.css";
import "../styles/dry-lab-reading.css";

export function Hardware() {
  return (
    <DryLabWikiPage
      content={hardwareEvidencePage}
      heroVisual={null}
      pageClassName="wiki-page--hardware-hero"
      features={{
        "hardware-requirements": <CirCureHardwareEvidenceExplorer />,
        "hardware-system": <AnnotatedSystemDiagram />,
        "hardware-assembly": <HardwareAssemblyAndBom />,
        "hardware-iterations": <BuildIterationTimeline />,
        "hardware-calibration": <HardwareCalibrationAndPerformance />,
        "hardware-safety": <HardwareSafetyRiskMatrix />,
        "hardware-release": <OpenHardwareReleaseChecklist />,
      }}
    />
  );
}
