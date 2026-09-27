import {
  DecisionLoop,
  MechanismRoute,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { engineeringPage } from "../data/projectPages";
import { ProjectPreviewPage } from "../project-preview/ProjectPreviewPage";

export function Engineering() {
  return (
    <ProjectPreviewPage
      content={engineeringPage}
      variant="engineering"
      features={{
        "engineering-framework": <MechanismRoute />,
        "engineering-cycles": <DecisionLoop />,
        "engineering-trace": <ResultGateTable />,
      }}
    />
  );
}
