import { WikiPage } from "../components/wiki/WikiPage";
import {
  PlatformOrbit,
  PlatformEvidenceMatrix,
  PlatformWorkflow,
} from "../components/wiki/features/WetLabFeatures";
import { alternativePlatformPage } from "../data/wetLabPages";

export function AlternativePlatform() {
  return (
    <WikiPage
      content={alternativePlatformPage}
      heroVisual={null}
      features={{
        "platform-rationale": <PlatformOrbit />,
        "platform-workflow": <PlatformWorkflow />,
        "platform-evidence": <PlatformEvidenceMatrix />,
      }}
    />
  );
}
