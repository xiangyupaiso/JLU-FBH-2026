import { useState, useCallback, useEffect, useRef } from "react";

export interface EngineeringCarouselImage {
  src: string;
  alt?: string;
}

export interface EngineeringCarouselProps {
  images: EngineeringCarouselImage[];
  caption?: string;
  figureLabel?: string;
}

export function EngineeringCarousel({
  images,
  caption,
  figureLabel,
}: EngineeringCarouselProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const count = images.length;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  if (!count) return null;

  const current = images[index];

  return (
    <figure
      ref={containerRef}
      className="eng-carousel"
      aria-label={figureLabel ?? "Image gallery"}
      tabIndex={0}
    >
      <div className="eng-carousel__frame">
        <img
          key={current.src}
          src={current.src}
          alt={current.alt ?? `${figureLabel ?? "Figure"} image ${index + 1} of ${count}`}
          className="eng-carousel__image"
          loading="lazy"
          decoding="async"
        />

        {count > 1 ? (
          <>
            <button
              type="button"
              className="eng-carousel__arrow eng-carousel__arrow--prev"
              onClick={prev}
              aria-label="Previous photograph"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
                <path d="M15 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="eng-carousel__arrow eng-carousel__arrow--next"
              onClick={next}
              aria-label="Next photograph"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="eng-carousel__counter" aria-live="polite">
              {index + 1} / {count}
            </div>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="eng-carousel__dots" role="tablist" aria-label="Slides">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1} of ${count}`}
              className={`eng-carousel__dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}

      {caption ? (
        <figcaption className="eng-carousel__caption">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
