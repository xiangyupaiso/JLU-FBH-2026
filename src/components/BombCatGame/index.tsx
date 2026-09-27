import { useEffect, useRef } from "react";
import { initializeBombCatGame } from "./bombCatEngine";
import "./index.css";

export interface BombCatGameProps {
  // Kept compatible with the integration API requested by the Wiki.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onGameComplete?: (stats: any) => void;
  onRequestClose?: () => void;
  className?: string;
}

export default function BombCatGame({
  onGameComplete,
  onRequestClose,
  className,
}: BombCatGameProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const onGameCompleteRef = useRef(onGameComplete);
  const onRequestCloseRef = useRef(onRequestClose);

  useEffect(() => {
    onGameCompleteRef.current = onGameComplete;
    onRequestCloseRef.current = onRequestClose;
  }, [onGameComplete, onRequestClose]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    return initializeBombCatGame(host, {
      gameUrl: `${import.meta.env.BASE_URL}game-assets/bomb-cat/index.html`,
      onGameComplete: (stats) => onGameCompleteRef.current?.(stats),
      onRequestClose: () => onRequestCloseRef.current?.(),
    });
  }, []);

  const rootClassName = ["bomb-cat-game-root", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={hostRef} className={rootClassName} data-bomb-cat-game="" />
  );
}
