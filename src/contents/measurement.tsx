import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import {
  MeasurementWindow,
  MeasurementPublicationGate,
  ReadoutMatrix,
} from "../components/wiki/features/WetLabFeatures";
import { measurementPage } from "../data/wet-lab/measurementPage";
import "../styles/route-palette-wetlab.css";

export function Measurement() {
  return (
    <WikiRoutePage
      content={measurementPage}
      heroImage={getWetLabHeroImage(measurementPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      features={{
        "measurement-chain": <MeasurementWindow />,
        "measurement-readouts": <ReadoutMatrix />,
        "measurement-publication": <MeasurementPublicationGate />,
      }}
    />
  );
}
