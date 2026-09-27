import {
  ResourceShelf,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { contributionPage } from "../data/projectPages";
import { ProjectPreviewPage } from "../project-preview/ProjectPreviewPage";

export function Contribution() {
  return (
    <ProjectPreviewPage
      content={contributionPage}
      variant="contribution"
      features={{
        "contribution-packages": <ResourceShelf />,
        "contribution-reuse": <ResourceShelf />,
        "contribution-release": <ResultGateTable />,
      }}
    />
  );
}
