import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  lazy,
  Suspense,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import "../../../styles/games-page.css";

/**
 * Games — interactive station map + four playable projects.
 *
 * Migrated from the previous build's `contents/games.tsx` without copy changes.
 * The interaction model is unchanged: the station map scrolls to a showcase, a
 * showcase opens the game in a full-screen play surface, Escape / backdrop /
 * "Close game" leave it and focus returns to the button that opened it.
 *
 * What changed is the container: the page now runs on the shared Dry Lab
 * reader-route template, so this file exports the pieces the page mounts as
 * feature blocks (`GamesStationMap`, `GameLaunchCard`) plus the provider that
 * owns the open-game state they share.
 */

const BreastGuardianGame = lazy(() => import("../../BreastGuardianGame"));
const BombCatGame = lazy(() => import("../../BombCatGame"));
const BioMemoryGame = lazy(() => import("../../BioMemoryGame"));
const VirtualLaboratory = lazy(() => import("../../VirtualLaboratory"));

type GameKey = "breast-guardian" | "bomb-cat" | "bio-memory" | "virtual-lab";

const GAME_META: Record<GameKey, { station: string; title: string }> = {
  "breast-guardian": {
    station: "01 / Live project",
    title: "Breast Guardian RPG",
  },
  "bomb-cat": { station: "02 / Live project", title: "Bomb Cat · 炸弹猫" },
  "bio-memory": { station: "03 / Live project", title: "生物翻翻乐" },
  "virtual-lab": {
    station: "04 / Live project",
    title: "Virtual Laboratory · 虚拟实验室",
  },
};

const SECTION_ID: Record<GameKey, string> = {
  "breast-guardian": "game-breast-guardian",
  "bomb-cat": "game-bomb-cat",
  "bio-memory": "game-bio-memory",
  "virtual-lab": "game-virtual-lab",
};

interface GamesContextValue {
  openGame: (game: GameKey, trigger: HTMLElement | null) => void;
  scrollToShowcase: (game: GameKey) => void;
}

const GamesContext = createContext<GamesContextValue | null>(null);

function useGames(): GamesContextValue {
  const value = useContext(GamesContext);
  if (!value) {
    throw new Error("Games features must be rendered inside <GamesProvider>.");
  }
  return value;
}

function GameExperience({
  game,
  onExit,
}: {
  game: GameKey;
  onExit: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isBombCat = game === "bomb-cat";
  const isBioMemory = game === "bio-memory";
  const gameMeta = GAME_META[game];

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const appRoot = document.getElementById("root");
    const previousRootInert = appRoot?.inert ?? false;

    document.body.style.overflow = "hidden";
    if (appRoot) appRoot.inert = true;
    closeButtonRef.current?.focus();

    const closeFromKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") onExit();
    };
    window.addEventListener("keydown", closeFromKeyboard);

    return () => {
      window.removeEventListener("keydown", closeFromKeyboard);
      document.body.style.overflow = previousBodyOverflow;
      if (appRoot) appRoot.inert = previousRootInert;
    };
  }, [onExit]);

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onExit();
  };

  return createPortal(
    <div
      className="games-experience"
      role="dialog"
      aria-modal="true"
      aria-labelledby="games-experience-title"
      onClick={closeFromBackdrop}
    >
      <div className="games-experience__surface">
        <header className="games-experience__bar">
          <div>
            <span>{gameMeta.station}</span>
            <h2 id="games-experience-title">{gameMeta.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="games-experience__close"
            onClick={onExit}
          >
            <span>Close game</span>
            <b aria-hidden="true">×</b>
          </button>
        </header>

        <div className="games-experience__body">
          <Suspense
            fallback={
              <div className="games-experience__loading" role="status">
                <span aria-hidden="true" />
                Preparing the game…
              </div>
            }
          >
            {game === "virtual-lab" ? (
              <VirtualLaboratory onRequestClose={onExit} />
            ) : isBombCat ? (
              <BombCatGame onRequestClose={onExit} />
            ) : isBioMemory ? (
              <BioMemoryGame onRequestClose={onExit} />
            ) : (
              <BreastGuardianGame onRequestClose={onExit} />
            )}
          </Suspense>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/** Owns the open-game state shared by the station map and the showcase cards. */
export function GamesProvider({ children }: { children: ReactNode }) {
  const [activeGame, setActiveGame] = useState<GameKey | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openGame = useCallback((game: GameKey, trigger: HTMLElement | null) => {
    triggerRef.current = trigger;
    setActiveGame(game);
  }, []);

  const closeGame = useCallback(() => {
    setActiveGame(null);
    window.requestAnimationFrame(() =>
      triggerRef.current?.focus({ preventScroll: true }),
    );
  }, []);

  const scrollToShowcase = useCallback((game: GameKey) => {
    const target = document.getElementById(SECTION_ID[game]);
    target?.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
  }, []);

  const value = useMemo(
    () => ({ openGame, scrollToShowcase }),
    [openGame, scrollToShowcase],
  );

  return (
    <GamesContext.Provider value={value}>
      {children}
      {activeGame ? (
        <GameExperience game={activeGame} onExit={closeGame} />
      ) : null}
    </GamesContext.Provider>
  );
}

/** Four-station route map; all stations jump to their showcase. */
export function GamesStationMap() {
  const { scrollToShowcase } = useGames();

  return (
    <div className="games-project-map">
      <div className="games-project-map__stage">
        <span className="games-project-map__ribbon" aria-hidden="true" />
        <ol className="games-project-map__stations">
          <li id="breast-guardian-rpg" className="is-available">
            <button
              type="button"
              onClick={() => scrollToShowcase("breast-guardian")}
              aria-controls="game-breast-guardian"
            >
              <span className="games-project-map__node" aria-hidden="true">
                <svg className="ribbon-mark" viewBox="0 0 32 46">
                  <use href="#circure-ribbon-knot" />
                </svg>
              </span>
              <small>01 / Ready to play</small>
              <strong>Breast Guardian RPG</strong>
              <p>
                A story-led breast health journey spanning three stages of life.
              </p>
              <em>
                View game below <span aria-hidden="true">↓</span>
              </em>
            </button>
          </li>

          <li id="exploding-cat-card-game" className="is-available">
            <button
              type="button"
              onClick={() => scrollToShowcase("bomb-cat")}
              aria-controls="game-bomb-cat"
            >
              <span className="games-project-map__node" aria-hidden="true">
                <svg className="ribbon-mark" viewBox="0 0 32 46">
                  <use href="#circure-ribbon-knot" />
                </svg>
              </span>
              <small>02 / Ready to play</small>
              <strong id="exploding-cat-title">炸弹猫卡牌小游戏</strong>
              <p>A compact strategy card game for collaborative play.</p>
              <em>
                View game below <span aria-hidden="true">↓</span>
              </em>
            </button>
          </li>

          <li id="bio-memory-match" className="is-available">
            <button
              type="button"
              onClick={() => scrollToShowcase("bio-memory")}
              aria-controls="game-bio-memory"
            >
              <span className="games-project-map__node" aria-hidden="true">
                <svg className="ribbon-mark" viewBox="0 0 32 46">
                  <use href="#circure-ribbon-knot" />
                </svg>
              </span>
              <small>03 / Ready to play</small>
              <strong>生物翻翻乐</strong>
              <p>A memory match field guide for exploring biology concepts.</p>
              <em>
                View game below <span aria-hidden="true">↓</span>
              </em>
            </button>
          </li>

          <li id="virtual-laboratory" className="is-available">
            <button
              type="button"
              onClick={() => scrollToShowcase("virtual-lab")}
              aria-controls="game-virtual-lab"
            >
              <span className="games-project-map__node" aria-hidden="true">
                <svg className="ribbon-mark" viewBox="0 0 32 46">
                  <use href="#circure-ribbon-knot" />
                </svg>
              </span>
              <small>04 / Ready to play</small>
              <strong id="virtual-lab-title">虚拟实验室</strong>
              <p>
                Nine guided molecular biology experiments, from culture revival
                to GFP verification.
              </p>
              <em>
                View laboratory below <span aria-hidden="true">↓</span>
              </em>
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
}

const LAUNCH_COPY: Record<
  GameKey,
  {
    chapters: string[];
    small: string;
    strong: string;
  }
> = {
  "breast-guardian": {
    chapters: ["01 / Childhood", "02 / Youth", "03 / Elderly"],
    small: "Interactive breast health journey",
    strong: "Enter the story.",
  },
  "bomb-cat": {
    chapters: ["01 / Local play", "02 / Online rooms", "03 / Rules"],
    small: "Scientific card strategy",
    strong: "Defuse the outbreak.",
  },
  "bio-memory": {
    chapters: ["01 / Field guide", "02 / Memory match", "03 / Specimen codex"],
    small: "Biology memory field guide",
    strong: "Find the pair.",
  },
  "virtual-lab": {
    chapters: ["01 / Beginner", "02 / Intermediate", "03 / Advanced"],
    small: "Nine interactive molecular biology experiments",
    strong: "Enter the laboratory.",
  },
};

/** One showcase launch card; clicking anywhere opens the game surface. */
export function GameLaunchCard({ game }: { game: GameKey }) {
  const { openGame } = useGames();
  const isBombCat = game === "bomb-cat";
  const isBioMemory = game === "bio-memory";
  const copy = LAUNCH_COPY[game];

  return (
    <div className={`games-showcase games-showcase--${game}`}>
      <button
        type="button"
        className="games-showcase__launch"
        onClick={(event) => openGame(game, event.currentTarget)}
        aria-haspopup="dialog"
      >
        <span className="games-showcase__art" aria-hidden="true" />
        <span className="games-showcase__chapters" aria-hidden="true">
          {copy.chapters.map((chapter) => (
            <i key={chapter}>{chapter}</i>
          ))}
        </span>
        {isBombCat ? (
          <span className="games-showcase__cards" aria-hidden="true">
            <i>circRNA</i>
            <i>TNBC</i>
            <i>VAX</i>
          </span>
        ) : null}
        {isBioMemory ? (
          <span className="games-showcase__bio-mark" aria-hidden="true">
            <i>DNA</i>
            <i>RNA</i>
            <i>CELL</i>
          </span>
        ) : null}
        <span className="games-showcase__copy">
          <small>{copy.small}</small>
          <strong>{copy.strong}</strong>
          <em>Click anywhere to expand and play full screen</em>
        </span>
        <span className="games-showcase__play" aria-hidden="true">
          <b>▶</b>
          Play
        </span>
      </button>
    </div>
  );
}
