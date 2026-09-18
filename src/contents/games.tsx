import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getDryLabHeroImage } from "../components/wiki/dryLabHeroAssets";
import {
  GameLaunchCard,
  GamesProvider,
  GamesStationMap,
} from "../components/wiki/features/GamesShowcase";
import { gamesPage } from "../data/gamesPage";
import "../styles/route-palette-drylab.css";

/**
 * Dry Lab 04 — Games.
 *
 * Runs on the shared Dry Lab reader-route template with the module palette, so
 * the hero, mat, paper frame, section rhythm, closing prompt and footer are the
 * same components as Model / Software / Hardware. `hideOutline` is the Library
 * layout variant carried over from `/protocol`: this record has no table of
 * contents in either build, so it renders without the TOC card and its reader
 * frame takes the released width.
 */
export function Games() {
  return (
    <GamesProvider>
      <WikiRoutePage
        content={gamesPage}
        heroImage={getDryLabHeroImage(gamesPage.route)}
        theme="dry-lab"
        pageClassName="wiki-page--dry-lab wiki-page--games"
        hideOutline
        features={{
          "games-project-map": <GamesStationMap />,
          "game-breast-guardian": <GameLaunchCard game="breast-guardian" />,
          "game-bomb-cat": <GameLaunchCard game="bomb-cat" />,
          "game-bio-memory": <GameLaunchCard game="bio-memory" />,
        }}
      />
    </GamesProvider>
  );
}
