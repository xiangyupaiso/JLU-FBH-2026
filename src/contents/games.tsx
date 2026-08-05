import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { DryLabWikiPage } from "../components/wiki/DryLabWikiPage";
import { gamesPage } from "../data/gamesPage";
import "../styles/games-page.css";
import "../styles/dry-lab-calm.css";
import "../styles/dry-lab-reading.css";

const BreastGuardianGame = lazy(
  () => import("../components/BreastGuardianGame"),
);
const BombCatGame = lazy(() => import("../components/BombCatGame"));

type GameKey = "breast-guardian" | "bomb-cat";

function GameExperience({
  game,
  onExit,
}: {
  game: GameKey;
  onExit: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isBombCat = game === "bomb-cat";

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
            <span>{isBombCat ? "02" : "01"} / Live project</span>
            <h2 id="games-experience-title">
              {isBombCat ? "Bomb Cat · 炸弹猫" : "Breast Guardian RPG"}
            </h2>
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
            {isBombCat ? (
              <BombCatGame onRequestClose={onExit} />
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

function GamesProjectMap() {
  const [activeGame, setActiveGame] = useState<GameKey | null>(null);
  const breastLaunchRef = useRef<HTMLButtonElement>(null);
  const bombCatLaunchRef = useRef<HTMLButtonElement>(null);
  const breastShowcaseRef = useRef<HTMLElement>(null);
  const bombCatShowcaseRef = useRef<HTMLElement>(null);
  const returnFocusToRef = useRef<GameKey>("breast-guardian");

  const closeGame = useCallback(() => {
    setActiveGame(null);
    window.requestAnimationFrame(() => {
      const launchButton =
        returnFocusToRef.current === "bomb-cat"
          ? bombCatLaunchRef.current
          : breastLaunchRef.current;
      launchButton?.focus({ preventScroll: true });
    });
  }, []);

  const scrollToGame = (section: HTMLElement | null) => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    section?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const openGame = (game: GameKey) => {
    returnFocusToRef.current = game;
    setActiveGame(game);
  };

  return (
    <>
      <section
        className="games-project-map"
        aria-labelledby="games-project-map-title"
        data-wiki-reveal
      >
        <header className="games-project-map__heading">
          <span>Project map / 03 stations</span>
          <div>
            <h2 id="games-project-map-title">Follow the interactive route</h2>
            <p>
              Two playable experiences are ready today, with a connected
              virtual laboratory being prepared for the next stage.
            </p>
          </div>
        </header>

        <div className="games-project-map__stage">
          <span className="games-project-map__ribbon" aria-hidden="true" />
          <ol className="games-project-map__stations">
            <li id="breast-guardian-rpg" className="is-available">
              <button
                type="button"
                onClick={() => scrollToGame(breastShowcaseRef.current)}
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
                  A story-led breast health journey spanning three stages of
                  life.
                </p>
                <em>
                  View game below <span aria-hidden="true">↓</span>
                </em>
              </button>
            </li>

            <li id="exploding-cat-card-game" className="is-available">
              <button
                type="button"
                onClick={() => scrollToGame(bombCatShowcaseRef.current)}
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

            <li id="virtual-laboratory">
              <article aria-labelledby="virtual-lab-title">
                <span className="games-project-map__node" aria-hidden="true" />
                <small>03 / In development</small>
                <strong id="virtual-lab-title">虚拟实验室</strong>
                <p>A guided space for practising experimental workflows.</p>
                <em>Coming later</em>
              </article>
            </li>
          </ol>
        </div>
      </section>

      <section
        ref={breastShowcaseRef}
        className="games-showcase games-showcase--breast-guardian"
        id="game-breast-guardian"
        aria-labelledby="game-breast-guardian-title"
        data-wiki-reveal
      >
        <header className="games-showcase__heading">
          <span>Playable project / 01</span>
          <div>
            <h2 id="game-breast-guardian-title">Breast Guardian RPG</h2>
            <p>
              The game opens in a full-screen play space and loads only when
              you choose to enter.
            </p>
          </div>
        </header>

        <button
          ref={breastLaunchRef}
          type="button"
          className="games-showcase__launch"
          onClick={() => openGame("breast-guardian")}
          aria-haspopup="dialog"
        >
          <span className="games-showcase__art" aria-hidden="true" />
          <span className="games-showcase__chapters" aria-hidden="true">
            <i>01 / Childhood</i>
            <i>02 / Youth</i>
            <i>03 / Elderly</i>
          </span>
          <span className="games-showcase__copy">
            <small>Interactive breast health journey</small>
            <strong>Enter the story.</strong>
            <em>Click anywhere to expand and play full screen</em>
          </span>
          <span className="games-showcase__play" aria-hidden="true">
            <b>▶</b>
            Play
          </span>
        </button>
      </section>

      <section
        ref={bombCatShowcaseRef}
        className="games-showcase games-showcase--bomb-cat"
        id="game-bomb-cat"
        aria-labelledby="game-bomb-cat-title"
        data-wiki-reveal
      >
        <header className="games-showcase__heading">
          <span>Playable project / 02</span>
          <div>
            <h2 id="game-bomb-cat-title">Bomb Cat · 炸弹猫</h2>
            <p>
              A circRNA strategy card game with local bots, online rooms and a
              complete bilingual rulebook.
            </p>
          </div>
        </header>

        <button
          ref={bombCatLaunchRef}
          type="button"
          className="games-showcase__launch"
          onClick={() => openGame("bomb-cat")}
          aria-haspopup="dialog"
        >
          <span className="games-showcase__art" aria-hidden="true" />
          <span className="games-showcase__chapters" aria-hidden="true">
            <i>01 / Local play</i>
            <i>02 / Online rooms</i>
            <i>03 / Rules</i>
          </span>
          <span className="games-showcase__cards" aria-hidden="true">
            <i>circRNA</i>
            <i>TNBC</i>
            <i>VAX</i>
          </span>
          <span className="games-showcase__copy">
            <small>Scientific card strategy</small>
            <strong>Defuse the outbreak.</strong>
            <em>Click anywhere to expand and play full screen</em>
          </span>
          <span className="games-showcase__play" aria-hidden="true">
            <b>▶</b>
            Play
          </span>
        </button>
      </section>

      {activeGame ? (
        <GameExperience game={activeGame} onExit={closeGame} />
      ) : null}
    </>
  );
}

export function Games() {
  return (
    <DryLabWikiPage
      content={gamesPage}
      heroVisual={null}
      pageClassName="wiki-page--games-hero"
      routeAddon={<GamesProjectMap />}
    />
  );
}
