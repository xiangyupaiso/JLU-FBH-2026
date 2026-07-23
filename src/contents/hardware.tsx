import { WikiPage } from "../components/wiki/WikiPage";
import {
  AnnotatedSystemDiagram,
  BuildIterationTimeline,
  HardwareAssemblyAndBom,
  HardwareCalibrationAndPerformance,
  HardwareRequirementMatrix,
  HardwareSafetyRiskMatrix,
  OpenHardwareReleaseChecklist,
} from "../components/wiki/features/HardwareEvidenceFeatures";
import { hardwareEvidencePage } from "../data/hardwarePage";
import "../styles/hardware-page.css";

export function Hardware() {
  return (
    <WikiPage
      content={hardwareEvidencePage}
      heroVisual={null}
      pageClassName="wiki-page--hardware-hero"
      features={{
        "hardware-requirements": <HardwareRequirementMatrix />,
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
