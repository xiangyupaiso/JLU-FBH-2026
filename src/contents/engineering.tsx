import { WikiPage } from "../components/wiki/WikiPage";
import {
  DecisionLoop,
  MechanismRoute,
  ProjectSignature,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { engineeringPage } from "../data/projectPages";

export function Engineering() {
  return (
    <WikiPage
      content={engineeringPage}
      heroVisual={<ProjectSignature variant="engineering" />}
      features={{
        "engineering-framework": <MechanismRoute />,
        "engineering-cycles": <DecisionLoop />,
        "engineering-trace": <ResultGateTable />,
      }}
    />
  );
}
