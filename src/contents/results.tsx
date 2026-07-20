import { WikiPage } from "../components/wiki/WikiPage";
import {
  DecisionLoop,
  ProjectSignature,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { resultsPage } from "../data/projectPages";

export function Results() {
  return (
    <WikiPage
      content={resultsPage}
      heroVisual={<ProjectSignature variant="results" />}
      features={{
        "results-standard": <ResultGateTable />,
        "results-gates": <ResultGateTable />,
        "results-reflection": <DecisionLoop />,
      }}
    />
  );
}
