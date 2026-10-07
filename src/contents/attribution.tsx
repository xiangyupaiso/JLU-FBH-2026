import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { TeamInspirations } from "../components/wiki/features/team/TeamInspirations";
import { getTeamHeroImage } from "../components/wiki/teamHeroAssets";
import { attributionPage } from "../data/team/attributionPage";

export function Attribution() {
  return (
    <WikiRoutePage
      content={attributionPage}
      heroImage={getTeamHeroImage(attributionPage.route)}
      theme="team"
      pageClassName="wiki-page--team"
      hideHeroCopy
      features={{ inspirations: <TeamInspirations /> }}
    />
  );
}

