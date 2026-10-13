import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getEngagementHeroImage } from "../components/wiki/engagementHeroAssets";
import { educationFeatures, renderEducationInline } from "../components/wiki/features/engagement/EducationMedia";
import { educationPage } from "../data/engagement/educationPage";

export function Education() {
  return (
    <WikiRoutePage
      content={educationPage}
      heroImage={getEngagementHeroImage(educationPage.route)}
      theme="engagement"
      pageClassName="wiki-page--engagement"
      hideHeroCopy
      outlineDepth={4}
      showAllOutlineHeadings
      deferContentImages
      features={educationFeatures()}
      inlineRenderer={renderEducationInline}
    />
  );
}
