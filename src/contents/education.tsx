import { WikiPage } from "../components/wiki/WikiPage";
import {
  ConsentMatrix,
  DecisionProofTable,
  DialogueLoop,
  EngagementSignature,
} from "../components/wiki/features/EngagementFeatures";
import { educationPage } from "../data/engagementPages";

export function Education() {
  return (
    <WikiPage
      content={educationPage}
      heroVisual={<EngagementSignature variant="education" />}
      features={{
        "education-design": <DialogueLoop />,
        "education-activities": <DecisionProofTable />,
        "education-evaluation": <ConsentMatrix />,
      }}
    />
  );
}
