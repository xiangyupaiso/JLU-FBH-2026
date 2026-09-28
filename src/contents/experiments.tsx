import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import { experimentsFeatures } from "../components/wiki/features/wet-lab/ExperimentsPanels";
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
      features={experimentsFeatures()}
    />
  );
}
