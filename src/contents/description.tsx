import { WikiPage } from "../components/wiki/WikiPage";
import {
  HeterogeneityField,
  MechanismRoute,
  ProjectSignature,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { descriptionPage } from "../data/projectPages";

export function Description() {
  return (
    <WikiPage
      content={descriptionPage}
      heroVisual={<ProjectSignature variant="description" />}
      features={{
        "description-need": <HeterogeneityField />,
        "description-system": <MechanismRoute />,
        "description-boundaries": <ResultGateTable />,
      }}
    />
  );
}
