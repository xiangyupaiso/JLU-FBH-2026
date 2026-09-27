import {
  HeterogeneityField,
  MechanismRoute,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { descriptionPage } from "../data/projectPages";
import { ProjectPreviewPage } from "../project-preview/ProjectPreviewPage";

export function Description() {
  return (
    <ProjectPreviewPage
      content={descriptionPage}
      variant="description"
      features={{
        "description-need": <HeterogeneityField />,
        "description-system": <MechanismRoute />,
        "description-boundaries": <ResultGateTable />,
      }}
    />
  );
}
