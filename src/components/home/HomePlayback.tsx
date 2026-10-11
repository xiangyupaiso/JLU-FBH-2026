import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { ChevronUp, Pause, Play, RotateCcw, X } from "lucide-react";
import { useHomePlayback } from "../../hooks/useHomePlayback";
import "../../styles/home-playback.css";

type HomePlaybackProps = { root: RefObject<HTMLDivElement | null> };

export function HomePlayback({ root }: HomePlaybackProps) {
  const {
    mode,
    rate,
    chapterIndex,
    progress,
    ended,
    chapters,
    reducedMotion,
    toggle,
    seekChapter,
    setRate,
  } = useHomePlayback(root);
  const [showScenes, setShowScenes] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scenesButtonRef = useRef<HTMLButtonElement>(null);
  const id = useId();
  const currentChapter = chapters[chapterIndex] ?? chapters[0];
  const playLabel = ended
    ? "Replay story"
    : mode === "playing"
      ? "Pause story"
      : mode === "paused"
        ? "Resume story"
        : "Play story";
  const percent = Math.round(Math.min(1, Math.max(0, progress)) * 100);

  useEffect(() => {
    if (!showScenes) return;

    panelRef.current
      ?.querySelector<HTMLButtonElement>('[aria-current="step"]')
      ?.focus({ preventScroll: true });

    const dismissOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !playerRef.current?.contains(event.target)
      ) {
        setShowScenes(false);
      }
    };
    const dismissEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setShowScenes(false);
      scenesButtonRef.current?.focus({ preventScroll: true });
    };
    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissEscape);
    };
  }, [showScenes]);

  const closeScenes = () => {
    setShowScenes(false);
    scenesButtonRef.current?.focus({ preventScroll: true });
  };

  return (
    <div
      className={`home-playback${reducedMotion ? " is-static" : ""}`}
      data-home-player=""
      data-playback-mode={mode}
      ref={playerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setShowScenes(false);
      }}
    >
      {showScenes && (
        <div
          className="home-playback-scenes"
          id={`${id}-scenes`}
          ref={panelRef}
          role="dialog"
          aria-label="Story scenes"
        >
          <div className="home-playback-scenes-heading">
            <div>
              <h2>Scenes</h2>
            </div>
            <button
              className="home-playback-close"
              type="button"
              onClick={closeScenes}
              aria-label="Close scene list"
            >
              <X size={14} aria-hidden="true" />
            </button>
          </div>
          <ol className="home-playback-scene-list">
            {chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <button
                  type="button"
                  aria-current={index === chapterIndex ? "step" : undefined}
                  onClick={() => {
                    seekChapter(index);
                    closeScenes();
                  }}
                >
                  <span
                    className="home-playback-scene-number"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{chapter.title}</span>
                </button>
              </li>
            ))}
          </ol>
          {!reducedMotion && (
            <div className="home-playback-settings">
              <span>Speed</span>
              <div
                className="home-playback-speeds"
                role="group"
                aria-label="Playback speed"
              >
                {[0.75, 1, 1.2, 1.5].map((speed) => (
                  <button
                    type="button"
                    key={speed}
                    aria-pressed={rate === speed}
                    aria-label={`Playback speed ${speed} times`}
                    onClick={() => setRate(speed)}
                  >
                    {speed}×
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div
        className="home-playback-bar"
        role="group"
        aria-label="Story playback"
      >
        {!reducedMotion && (
          <button
            className="home-playback-toggle"
            type="button"
            onClick={toggle}
            aria-label={playLabel}
            title={playLabel}
            aria-pressed={mode === "playing"}
          >
            {ended ? (
              <RotateCcw size={14} aria-hidden="true" />
            ) : mode === "playing" ? (
              <Pause
                size={13}
                fill="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            ) : (
              <Play
                size={13}
                fill="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
          </button>
        )}
        <button
          className="home-playback-scenes-toggle"
          type="button"
          ref={scenesButtonRef}
          onClick={() => setShowScenes((visible) => !visible)}
          aria-label="Choose a story scene"
          aria-haspopup="dialog"
          aria-expanded={showScenes}
          aria-controls={showScenes ? `${id}-scenes` : undefined}
          title={`${String(chapterIndex + 1).padStart(2, "0")} / ${chapters.length} · ${currentChapter.title}`}
        >
          <span className="home-playback-index" aria-hidden="true">
            {String(chapterIndex + 1).padStart(2, "0")}
          </span>
          <ChevronUp
            size={11}
            className={showScenes ? "is-open" : ""}
            aria-hidden="true"
          />
        </button>
        <div
          className="home-playback-progress"
          role="progressbar"
          aria-label="Story progress"
          aria-orientation="vertical"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <span style={{ transform: `scaleY(${progress})` }} />
        </div>
      </div>
      <span className="home-playback-sr" role="status" aria-live="polite">
        {reducedMotion
          ? "Reduced motion is on. Story playback is in static view."
          : ended
            ? "Story complete. Replay is available."
            : mode === "playing"
              ? "Story playing. Scroll or use the arrow keys to pause."
              : mode === "paused"
                ? "Story paused."
                : "Automatic story playback is available."}
      </span>
    </div>
  );
}
