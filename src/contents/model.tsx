import { WikiPage } from "../components/wiki/WikiPage";
import {
  DryLabSignature,
  ModelEquationPanel,
  ModelPipeline,
  WetDryReturn,
} from "../components/wiki/features/DryLabFeatures";
import { modelPage } from "../data/dryLabPages";

export function Model() {
  return (
    <WikiPage
      content={modelPage}
      heroVisual={<DryLabSignature variant="model" />}
      features={{
        "model-architecture": <ModelPipeline />,
        "model-evidence": <ModelEquationPanel />,
        "model-reproducibility": <WetDryReturn />,
      }}
    />
  );
}
