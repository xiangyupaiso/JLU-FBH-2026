import { WikiPage } from "../components/wiki/WikiPage";
import {
  DryLabSignature,
  ReproducibilityChecklist,
  SoftwareRun,
} from "../components/wiki/features/DryLabFeatures";
import { ResourceShelf } from "../components/wiki/features/ProjectFeatures";
import { softwarePage } from "../data/dryLabPages";

export function Software() {
  return (
    <WikiPage
      content={softwarePage}
      heroVisual={<DryLabSignature variant="software" />}
      features={{
        "software-purpose": <SoftwareRun />,
        "software-workflow": <ReproducibilityChecklist />,
        "software-release": <ResourceShelf />,
      }}
    />
  );
}
