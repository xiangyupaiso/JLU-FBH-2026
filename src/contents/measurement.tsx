import { WikiPage } from "../components/wiki/WikiPage";
import {
  MeasurementWindow,
  ProtocolStack,
  ReadoutMatrix,
  WetLabSignature,
} from "../components/wiki/features/WetLabFeatures";
import { measurementPage } from "../data/wetLabPages";

export function Measurement() {
  return (
    <WikiPage
      content={measurementPage}
      heroVisual={<WetLabSignature variant="measurement" />}
      features={{
        "measurement-chain": <MeasurementWindow />,
        "measurement-readouts": <ReadoutMatrix />,
        "measurement-publication": <ProtocolStack />,
      }}
    />
  );
}
