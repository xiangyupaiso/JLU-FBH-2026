import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import {
  PlatformOrbit,
  PlatformEvidenceMatrix,
  PlatformWorkflow,
} from "../components/wiki/features/wet-lab/AlternativePlatformPanels";
import { alternativePlatformPage } from "../data/wet-lab/alternativePlatformPage";

export function AlternativePlatform() {
  return (
    <WikiRoutePage
      content={alternativePlatformPage}
      heroImage={getWetLabHeroImage(alternativePlatformPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      hideHeroCopy
      features={{
        "platform-rationale": <PlatformOrbit />,
        "platform-workflow": <PlatformWorkflow />,
        "platform-evidence": <PlatformEvidenceMatrix />,
      }}
    />
  );
}
