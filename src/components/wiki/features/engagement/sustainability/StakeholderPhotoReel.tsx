import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { StakeholderPhoto } from "../../../../../data/engagement/sustainability/sustainabilityPhotos";

/** Seconds a frame stays on screen before the crossfade to the next one. */
const DWELL = 1.5;

/** Length of the crossfade, matched to the CSS `transition` on the frames. */
const FADE = 1.3;

/**
 * Engagement photo reel for a stakeholder card.
 *
 * The photos are not a carousel widget — they are one printed plate. The layer
 * bleeds off the card's right edge, its left margin dissolves into the card
 * paper through a `mask-image` ramp, and the frames swap on a crossfade with an
 * alternating breath so no two neighbours move alike. Only `opacity` and
 * `transform` animate, the layer ignores pointer events, and the hairline
 * counter is the single piece of chrome.
 *
 * The reel idles until its card is on screen, holds while the host card is
 * hovered, and rewinds on leave; `prefers-reduced-motion` drops the breath and
 * keeps a plain fade.
 */
export function StakeholderPhotoReel({
  photos,
  label,
  paused,
}: {
  photos: ReadonlyArray<StakeholderPhoto>;
  label: string;
  /** Held by the host card — the reel itself ignores pointer events. */
  paused: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef(0);
  const [index, setIndex] = useState(0);
  const [seen, setSeen] = useState(false);

  const count = photos.length;

  /** (Re)start the dwell timer from frame 0; the hairline fills via CSS. */
  const run = () => {
    window.clearTimeout(timer.current);
    if (count < 2) return;
    timer.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % count);
    }, DWELL * 1000);
  };

  // Restart the timer whenever the frame, the visibility gate or the hover
  // state changes, so the fill always tracks the frame it belongs to.
  useEffect(() => {
    if (!seen || paused) return;
    run();
    return () => window.clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `run` only restarts a timer
  }, [index, seen, paused, count]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Start the sequence the first time the reel is actually visible.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSeen(true);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (count === 0) return null;

  const hold = seen && !paused && count > 1;

  return (
    <div
      ref={ref}
      className="sust-stake-reel"
      aria-label={`${label} — engagement photographs`}
      style={{ "--reel-dwell": `${DWELL}s`, "--reel-fade": `${FADE}s` } as CSSProperties}
    >
      <div className="sust-stake-reel__frame">
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={i === index ? photo.alt : ""}
            className="sust-stake-reel__img"
            data-active={i === index || undefined}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
        ))}
      </div>

      <p className="sust-stake-reel__caption" key={index} aria-live="off">
        {photos[index].caption}
      </p>

      <p className="sust-stake-reel__count" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="sust-stake-reel__rule" data-holding={hold || undefined}>
          {/* Restarting the key replays the fill animation for each frame. */}
          <span className="sust-stake-reel__rule-fill" key={index} />
        </span>
        <span>{String(count).padStart(2, "0")}</span>
      </p>
    </div>
  );
}