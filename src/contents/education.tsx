import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import {
  ConsentMatrix,
  DecisionProofTable,
  DialogueLoop,
} from "../components/wiki/features/EngagementFeatures";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { educationPage } from "../data/engagement/educationPage";
import "../styles/route-palette-engagement.css";

export function Education() {
  return (
    <WikiRoutePage
      content={educationPage}
      heroImage={getEngagementHeroImage(educationPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement"
      hideHeroCopy
      features={{
        "education-design": <DialogueLoop />,
        "education-activities": <DecisionProofTable />,
        "education-evaluation": <ConsentMatrix />,
      }}
    />
  );
}
