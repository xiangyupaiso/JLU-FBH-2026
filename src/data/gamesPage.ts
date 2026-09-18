import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

/**
 * Games — Dry Lab 04.
 *
 * Copy migrated verbatim from the previous build's `/games` record: the same
 * title, lede, station map, showcase labels and closing prompt. What changed is
 * only the container: the record now runs on the shared Dry Lab reader-route
 * template (`WikiRoutePage`) with the Dry Lab palette, and — because this page
 * carries no table of contents in either build — it uses the same
 * `hideOutline` full-width variant as the Protocol Library.
 *
 * Each former in-page heading becomes the paradigm's section header, so no
 * string is dropped: "Project map / 04 stations" is the first section's kicker,
 * "Playable project / 0N" the kicker of each showcase section.
 */
export const gamesPage: WikiPageContent = {
  route: "/games",
  category: "dry-lab",
  chapter: "Dry Lab / 04 of 04",
  eyebrow: "Games · Interactive learning",
  title: "Games",
  lede: "Three interactive virtual projects invite visitors to explore breast health, strategic play, and experimental practice.",
  boundary: "",
  visual: "games-portal",
  visualLabel: "Interactive virtual projects",
  visualSteps: [],
  facts: [],
  sections: [
    {
      id: "games-project-map",
      index: "00",
      hideSectionNumber: true,
      kicker: "Project map / 04 stations",
      navLabel: "Project map",
      title: "Follow the interactive route",
      summary:
        "Three playable experiences are ready today, with a connected virtual laboratory being prepared for the next stage.",
      blocks: [{ type: "feature", key: "games-project-map" }],
    },
    {
      id: "game-breast-guardian",
      index: "01",
      kicker: "Playable project / 01",
      navLabel: "Breast Guardian RPG",
      title: "Breast Guardian RPG",
      summary:
        "The game opens in a full-screen play space and loads only when you choose to enter.",
      blocks: [{ type: "feature", key: "game-breast-guardian" }],
    },
    {
      id: "game-bomb-cat",
      index: "02",
      kicker: "Playable project / 02",
      navLabel: "Bomb Cat",
      title: "Bomb Cat · 炸弹猫",
      summary:
        "A circRNA strategy card game with local bots, online rooms and a complete bilingual rulebook.",
      blocks: [{ type: "feature", key: "game-bomb-cat" }],
    },
    {
      id: "game-bio-memory",
      index: "03",
      kicker: "Playable project / 03",
      navLabel: "生物翻翻乐",
      title: "生物翻翻乐",
      summary:
        "A specimen-card memory game for discovering biology concepts through observation, recall and matching.",
      blocks: [{ type: "feature", key: "game-bio-memory" }],
    },
  ],
  links: [],
  next: {
    path: "/entrepreneurship",
    label: "Entrepreneurship",
    title: "How would the project fit a real workflow?",
  },
};
