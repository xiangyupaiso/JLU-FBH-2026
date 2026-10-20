import { useEffect, useRef, useState } from "react";
import { WikiNextRecord } from "../../../WikiNextRecord";
import { useStudyEnvironment } from "./useStudyEnvironment";

/** Keep the complete journey available until the reader chooses to play it. */
export function RibbonStudy() {
  const root = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const { active, reducedMotion } = useStudyEnvironment();

  useEffect(() => {
    if (!active || reducedMotion) setPlaying(false);
  }, [active, reducedMotion]);

  useEffect(() => {
    if (!playing || !active || reducedMotion) return;
    let frame = 0;
    let previous = 0;
    const tick = (time: number) => {
      if (previous) {
        const elapsed = Math.min(time - previous, 64);
        setProgress((value) => Math.min(1, value + elapsed / 6500));
      }
      previous = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, active, reducedMotion]);

  useEffect(() => {
    if (progress === 1) setPlaying(false);
  }, [progress]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setPlaying(false);
    });
    if (root.current) observer.observe(root.current);
    const pause = () => {
      if (document.hidden) setPlaying(false);
    };
    document.addEventListener("visibilitychange", pause);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", pause);
    };
  }, []);

  return (
    <div className="ribbon-study" ref={root}>
      <div className="ribbon-study__controls">
        <button
          type="button"
          disabled={reducedMotion}
          onClick={() => {
            if (progress === 1) setProgress(0);
            setPlaying((value) => !value);
          }}
        >
          {reducedMotion
            ? "Reduced motion"
            : playing
              ? "Pause"
              : progress === 1
                ? "Replay"
                : "Play journey"}
        </button>
        <label>
          <span>Journey</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.001"
            value={progress}
            aria-label="Ribbon journey progress"
            onChange={(event) => {
              setPlaying(false);
              setProgress(Number(event.target.value));
            }}
          />
        </label>
      </div>
      <div className="wiki-page wiki-page--project-preview">
        <WikiNextRecord
          path="/notebook"
          label="Notebook"
          title="Follow the project through its working record"
          description="Read the daily notes, protocol changes and decisions behind the project."
          reveal={false}
          studyProgress={progress}
        />
      </div>
    </div>
  );
}
