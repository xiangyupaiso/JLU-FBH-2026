import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { educationPage } from "../data/engagement/educationPage";

export function Education() {
  return (
    <WikiRoutePage
      content={educationPage}
      heroImage={getEngagementHeroImage(educationPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement"
      hideHeroCopy
      outlineDepth={2}
      deferContentImages
    />
  );
}
