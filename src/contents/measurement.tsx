import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import {
  MeasurementWindow,
  MeasurementPublicationGate,
  ReadoutMatrix,
} from "../components/wiki/features/WetLabFeatures";
import { measurementPage } from "../data/wet-lab/measurementPage";

export function Measurement() {
  return (
    <WikiRoutePage
      content={measurementPage}
      heroImage={getWetLabHeroImage(measurementPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      hideHeroCopy
      features={{
        "measurement-chain": <MeasurementWindow />,
        "measurement-readouts": <ReadoutMatrix />,
        "measurement-publication": <MeasurementPublicationGate />,
      }}
    />
  );
}
