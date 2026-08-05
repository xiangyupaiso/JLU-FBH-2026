import { useEffect, useRef } from "react";
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

  useEffect(() => {
    onGameCompleteRef.current = onGameComplete;
    onQuizAnswerRef.current = onQuizAnswer;
    onRequestCloseRef.current = onRequestClose;
  }, [onGameComplete, onQuizAnswer, onRequestClose]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const gameUrl = `${import.meta.env.BASE_URL}game-assets/index.html`;

    return initializeBreastGuardianGame(host, {
      gameUrl,
      initialChapter,
      onGameComplete: (stats) => onGameCompleteRef.current?.(stats),
      onQuizAnswer: (questionId, isCorrect) =>
        onQuizAnswerRef.current?.(questionId, isCorrect),
      onRequestClose: () => onRequestCloseRef.current?.(),
    });
  }, [initialChapter]);

  const rootClassName = ["breast-guardian-game-root", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={hostRef}
      className={rootClassName}
      data-breast-guardian-game=""
    />
  );
}
