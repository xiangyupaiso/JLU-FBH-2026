import { WikiPage } from "../components/wiki/WikiPage";
import {
  FiveGateMap,
  ProtocolStack,
  ReadoutMatrix,
  WetLabSignature,
} from "../components/wiki/features/WetLabFeatures";
import { experimentsPage } from "../data/wetLabPages";

export function Experiments() {
  return (
    <WikiPage
      content={experimentsPage}
      heroVisual={<WetLabSignature variant="experiments" />}
      features={{
        "experiments-route": <FiveGateMap />,
        "experiments-record": <ProtocolStack />,
        "experiments-controls": <ReadoutMatrix />,
      }}
    />
  );
}
