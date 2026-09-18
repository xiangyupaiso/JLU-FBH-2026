import { WikiPage } from "../components/wiki/WikiPage";
import {
  MeasurementWindow,
  MeasurementPublicationGate,
  ReadoutMatrix,
} from "../components/wiki/features/WetLabFeatures";
import { measurementPage } from "../data/wetLabPages";

export function Measurement() {
  return (
    <WikiPage
      content={measurementPage}
      heroVisual={null}
      features={{
        "measurement-chain": <MeasurementWindow />,
        "measurement-readouts": <ReadoutMatrix />,
        "measurement-publication": <MeasurementPublicationGate />,
      }}
    />
  );
}
