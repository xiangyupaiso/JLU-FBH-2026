import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import {
  HeterogeneityField,
  MechanismRoute,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import { descriptionPage } from "../data/projectPages";
import "../styles/route-palette-project.css";

export function Description() {
  return (
    <WikiRoutePage
      content={descriptionPage}
      heroImage={getProjectHeroImage(descriptionPage.route)}
      theme="project"
      pageClassName="wiki-page--project"
      features={{
        "description-need": <HeterogeneityField />,
        "description-system": <MechanismRoute />,
        "description-boundaries": <ResultGateTable />,
      }}
    />
  );
}
