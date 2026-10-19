import { QueuedImage } from "../common/QueuedImage";
import { useEffect, useRef, useState } from "react";
import { initializeBreastGuardianGame } from "./gameEngine";
import "./index.css";

export interface BreastGuardianGameProps {
  initialChapter?: "childhood" | "youth" | "elderly";
  // Kept compatible with the integration API requested by the Wiki.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onGameComplete?: (stats: any) => void;
  onQuizAnswer?: (questionId: string, isCorrect: boolean) => void;
  onRequestClose?: () => void;
  className?: string;
}

const SPRITES = [
  "https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8f186094407d9c6f.avif",
  "https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7fa40ddbd4448803.avif",
  "https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-819d0baf4b0f6860.avif",
];

export default function BreastGuardianGame({
  initialChapter,
  onGameComplete,
  onQuizAnswer,
  onRequestClose,
  className,
}: BreastGuardianGameProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const onGameCompleteRef = useRef(onGameComplete);
  const onQuizAnswerRef = useRef(onQuizAnswer);
  const onRequestCloseRef = useRef(onRequestClose);

  const [loadState, setLoadState] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [spriteIndex, setSpriteIndex] = useState(0);

  useEffect(() => {
    onGameCompleteRef.current = onGameComplete;
    onQuizAnswerRef.current = onQuizAnswer;
    onRequestCloseRef.current = onRequestClose;
  }, [onGameComplete, onQuizAnswer, onRequestClose]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    setLoadState("loading");
    const gameUrl = `${import.meta.env.BASE_URL}game-assets/index.html`;

    const cleanup = initializeBreastGuardianGame(host, {
      gameUrl,
      initialChapter,
      onGameComplete: (stats) => onGameCompleteRef.current?.(stats),
      onQuizAnswer: (questionId, isCorrect) =>
        onQuizAnswerRef.current?.(questionId, isCorrect),
      onRequestClose: () => onRequestCloseRef.current?.(),
    });

    const frame = host.querySelector("iframe");

    // An iframe's load event also fires when its game scripts fail. Only the
    // game's own mount signal confirms there is a rendered game to reveal.
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (!frame || event.source !== frame.contentWindow) return;
      if (
        event.data?.source === "breast-guardian-game" &&
        event.data?.type === "breast-guardian:ready"
      ) {
        window.clearTimeout(fallback);
        setLoadState("ready");
      }
    };
    window.addEventListener("message", onMessage);

    // Keep a recoverable UI if startup fails; a late ready signal still works.
    const fallback = window.setTimeout(() => setLoadState("error"), 15000);

    return () => {
      window.removeEventListener("message", onMessage);
      window.clearTimeout(fallback);
      cleanup();
    };
  }, [initialChapter, loadAttempt]);

  // Rotate pixel-art portraits while the overlay is visible.
  useEffect(() => {
    if (loadState !== "loading") return;
    const id = window.setInterval(
      () => setSpriteIndex((i) => (i + 1) % SPRITES.length),
      1800,
    );
    return () => window.clearInterval(id);
  }, [loadState]);

  const rootClassName = ["breast-guardian-game-root", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName} data-breast-guardian-game="">
      <div ref={hostRef} className="breast-guardian-game-host" />
      <div
        className={`bg-loading${loadState === "ready" ? " is-hidden" : ""}`}
        role="status"
        aria-live="polite"
      >
        <QueuedImage
          key={spriteIndex}
          className="bg-loading__sprite"
          src={SPRITES[spriteIndex]}
          alt=""
        />
        <span className="bg-loading__text">
          {loadState === "error"
            ? "The game is taking longer than expected."
            : "Loading"}
          {loadState === "loading" && (
            <span className="bg-loading__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          )}
        </span>
        {loadState === "error" && (
          <button
            type="button"
            className="bg-loading__retry"
            onClick={() => setLoadAttempt((attempt) => attempt + 1)}
          >
            Retry loading
          </button>
        )}
      </div>
    </div>
  );
}
