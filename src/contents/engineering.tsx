import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import {
  DecisionLoop,
  MechanismRoute,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import { engineeringPage } from "../data/projectPages";
import "../styles/route-palette-project.css";

export function Engineering() {
  return (
    <WikiRoutePage
      content={engineeringPage}
      heroImage={getProjectHeroImage(engineeringPage.route)}
      theme="project"
      pageClassName="wiki-page--project"
      features={{
        "engineering-framework": <MechanismRoute />,
        "engineering-cycles": <DecisionLoop />,
        "engineering-trace": <ResultGateTable />,
      }}
    />
  );
}
