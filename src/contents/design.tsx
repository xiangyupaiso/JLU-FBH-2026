import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import { designPage } from "../data/wet-lab/designPage";

export function Design() {
  return (
    <WikiRoutePage
      content={designPage}
      heroImage={getWetLabHeroImage(designPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab"
      hideHeroCopy
    />
  );
}
