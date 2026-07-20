import { WikiPage } from "../components/wiki/WikiPage";
import {
  ProjectSignature,
  ResourceShelf,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import { contributionPage } from "../data/projectPages";

export function Contribution() {
  return (
    <WikiPage
      content={contributionPage}
      heroVisual={<ProjectSignature variant="contribution" />}
      features={{
        "contribution-packages": <ResourceShelf />,
        "contribution-reuse": <ResourceShelf />,
        "contribution-release": <ResultGateTable />,
      }}
    />
  );
}
