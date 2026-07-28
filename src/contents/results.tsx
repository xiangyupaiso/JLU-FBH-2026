import {
  DecisionLoop,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { resultsPage } from "../data/projectPages";
import { ProjectPreviewPage } from "../project-preview/ProjectPreviewPage";

export function Results() {
  return (
    <ProjectPreviewPage
      content={resultsPage}
      variant="results"
      features={{
        "results-standard": <ResultGateTable />,
        "results-gates": <ResultGateTable />,
        "results-reflection": <DecisionLoop />,
      }}
    />
  );
}
