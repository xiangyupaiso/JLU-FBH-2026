import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import {
  PlatformOrbit,
  PlatformEvidenceMatrix,
  PlatformWorkflow,
} from "../components/wiki/features/WetLabFeatures";
import { alternativePlatformPage } from "../data/wetLabPages";
import "../styles/route-palette-wetlab.css";

export function AlternativePlatform() {
  return (
    <WikiRoutePage
      content={alternativePlatformPage}
      heroImage={getWetLabHeroImage(alternativePlatformPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      features={{
        "platform-rationale": <PlatformOrbit />,
        "platform-workflow": <PlatformWorkflow />,
        "platform-evidence": <PlatformEvidenceMatrix />,
      }}
    />
  );
}
