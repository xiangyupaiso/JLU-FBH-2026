import { WikiPage } from "../components/wiki/WikiPage";
import {
  PlatformOrbit,
  ReadoutMatrix,
  WetLabSignature,
} from "../components/wiki/features/WetLabFeatures";
import { ResultGateTable } from "../components/wiki/features/ProjectFeatures";
import { alternativePlatformPage } from "../data/wetLabPages";

export function AlternativePlatform() {
  return (
    <WikiPage
      content={alternativePlatformPage}
      heroVisual={<WetLabSignature variant="platform" />}
      features={{
        "platform-rationale": <PlatformOrbit />,
        "platform-workflow": <ReadoutMatrix />,
        "platform-evidence": <ResultGateTable />,
      }}
    />
  );
}
