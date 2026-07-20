import { WikiPage } from "../components/wiki/WikiPage";
import {
  BomTable,
  ReproducibilityChecklist,
} from "../components/wiki/features/DryLabFeatures";
import { hardwarePage } from "../data/dryLabPages";

export function Hardware() {
  return (
    <WikiPage
      content={hardwarePage}
      heroVisual={null}
      pageClassName="wiki-page--hardware-hero"
      features={{
        "hardware-iterations": <BomTable />,
        "hardware-release": <ReproducibilityChecklist />,
      }}
    />
  );
}
