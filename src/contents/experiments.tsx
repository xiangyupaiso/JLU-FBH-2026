import { WikiPage } from "../components/wiki/WikiPage";
import {
  FiveGateMap,
  ProtocolStack,
  ReadoutMatrix,
} from "../components/wiki/features/WetLabFeatures";
import { experimentsPage } from "../data/wetLabPages";

export function Experiments() {
  return (
    <WikiPage
      content={experimentsPage}
      heroVisual={null}
      features={{
        "experiments-route": <FiveGateMap />,
        "experiments-record": <ProtocolStack />,
        "experiments-controls": <ReadoutMatrix />,
      }}
    />
  );
}
