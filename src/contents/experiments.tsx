import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import {
  FiveGateMap,
  ProtocolStack,
  ReadoutMatrix,
} from "../components/wiki/features/WetLabFeatures";
import { experimentsPage } from "../data/wet-lab/experimentsPage";
import "../styles/route-palette-wetlab.css";

export function Experiments() {
  return (
    <WikiRoutePage
      content={experimentsPage}
      heroImage={getWetLabHeroImage(experimentsPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      hideHeroCopy
      features={{
        "experiments-route": <FiveGateMap />,
        "experiments-record": <ProtocolStack />,
        "experiments-controls": <ReadoutMatrix />,
      }}
    />
  );
}
