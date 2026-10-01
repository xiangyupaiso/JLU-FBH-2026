const contributionHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/project-contribution-hero.webp";
const descriptionHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/project-description-hero.webp";
const engineeringHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/project-engineering-gradient.avif";
const resultsHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/project-results-gradient.avif";

/**
 * Per-page hero art for the Project reader.
 *
 * The reader-route template resolves its hero through this map so every page
 * of the module can carry its own full-bleed opening without any component
 * branching. A new module only needs its own `<module>HeroAssets.ts` with the
 * same two functions.
 */
export type ProjectHeroVariant =
  | "description"
  | "engineering"
  | "results"
  | "contribution";

const VARIANT_BY_ROUTE: Record<string, ProjectHeroVariant> = {
  "/description": "description",
  "/engineering": "engineering",
  "/results": "results",
  "/contribution": "contribution",
};

const HERO_BY_VARIANT: Record<ProjectHeroVariant, string> = {
  description: descriptionHero,
  engineering: engineeringHero,
  results: resultsHero,
  contribution: contributionHero,
};

export function getProjectHeroVariant(route: string) {
  return VARIANT_BY_ROUTE[route] ?? "description";
}

export function getProjectHeroImage(route: string) {
  return HERO_BY_VARIANT[getProjectHeroVariant(route)];
}
