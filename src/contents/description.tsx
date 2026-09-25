import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { descriptionFeatures } from "../components/wiki/features/DescriptionPanels";
import { getProjectHeroImage } from "../components/wiki/projectHeroAssets";
import { descriptionPage } from "../data/project/descriptionPage";
import "../styles/route-palette-project.css";
import "../styles/description-page.css";

export function Description() {
  return (
    <WikiRoutePage
      content={descriptionPage}
      heroImage={getProjectHeroImage(descriptionPage.route)}
      theme="project"
      pageClassName="wiki-page--project"
      features={descriptionFeatures()}
    />
  );
}
