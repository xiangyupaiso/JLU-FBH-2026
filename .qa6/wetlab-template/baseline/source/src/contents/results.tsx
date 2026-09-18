import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import {
  DecisionLoop,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import { resultsPage } from "../data/projectPages";
import "../styles/route-palette-project.css";

export function Results() {
  return (
    <WikiRoutePage
      content={resultsPage}
      heroImage={getProjectHeroImage(resultsPage.route)}
      theme="project"
      pageClassName="wiki-page--project"
      features={{
        "results-standard": <ResultGateTable />,
        "results-gates": <ResultGateTable />,
        "results-reflection": <DecisionLoop />,
      }}
    />
  );
}
