const teamHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/team/team-hero.webp";
const collaborationHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/team/team-collaboration-hero.webp";

export function getTeamHeroImage(route?: string) {
  if (route === "/activities") {
    return collaborationHero;
  }
  return teamHero;
}
