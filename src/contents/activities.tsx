import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { TeamInspirations } from "../components/wiki/features/team/TeamInspirations";
import { getTeamHeroImage } from "../components/wiki/teamHeroAssets";
import { activitiesPage } from "../data/team/activitiesPage";

export function Activities() {
  return (
    <WikiRoutePage
      content={activitiesPage}
      heroImage={getTeamHeroImage(activitiesPage.route)}
      theme="team"
      pageClassName="wiki-page--team"
      hideHeroCopy
      features={{ inspirations: <TeamInspirations /> }}
    />
  );
}

