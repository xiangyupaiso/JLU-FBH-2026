const rosterHero =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/team/team-hero.webp";
const attributionHero =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/team/team-attributions-hero-c4b886a5d4d5.webp";
const activitiesHero =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/team/team-activities-hero.webp";

export function getTeamHeroImage(route?: string) {
  if (route === "/activities") {
    return activitiesHero;
  }
  if (route === "/attributions") {
    return attributionHero;
  }
  return rosterHero;
}
