import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import {
  ResourceShelf,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import { contributionPage } from "../data/project/contributionPage";

export function Contribution() {
  return (
    <WikiRoutePage
      content={contributionPage}
      heroImage={getProjectHeroImage(contributionPage.route)}
      theme="project"
      pageClassName="wiki-page--project"
      hideHeroCopy
      features={{
        "contribution-packages": <ResourceShelf />,
        "contribution-reuse": <ResourceShelf />,
        "contribution-release": <ResultGateTable />,
      }}
    />
  );
}
