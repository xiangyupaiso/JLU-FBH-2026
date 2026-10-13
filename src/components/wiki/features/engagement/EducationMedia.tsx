import { useState, type ReactNode, type TouchEvent } from "react";
import galleries from "../../../../data/engagement/educationGalleries.json";
import "../../../../styles/features/education-media.css";

type Gallery = (typeof galleries)[number];

const interactivePages = {
  "education-interactive-map": {
    title: "Community & Educational Function Map",
    file: "community-educational-function-map.html",
    height: 730,
  },
  "education-interactive-design-board": {
    title: "Education Design Board",
    file: "education-design-board.html",
    height: 850,
  },
  "education-interactive-evidence-room": {
    title: "Breast Guardian Evidence Room",
    file: "breast-guardian-evidence-room.html",
    height: 900,
  },
} as const;

function InteractivePage({ item }: { item: (typeof interactivePages)[keyof typeof interactivePages] }) {
  const src = `${import.meta.env.BASE_URL}assets/education/${item.file}`;
  return (
    <section className="education-interactive" aria-label={item.title}>
      <div className="education-interactive__head">
        <strong>{item.title}</strong>
        <a href={src} target="_blank" rel="noreferrer">Open full screen ↗</a>
      </div>
      <iframe
        src={src}
        title={item.title}
        loading="lazy"
        sandbox="allow-scripts allow-popups"
        style={{ height: item.height }}
      />
    </section>
  );
}

function PhotoGallery({ gallery }: { gallery: Gallery }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const photos = gallery.images;
  const count = photos.length;
  const go = (step: number) => setIndex((current) => (current + step + count) % count);
  const onTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) go(distance < 0 ? 1 : -1);
    setTouchStart(null);
  };
  const photo = photos[index];
  const src = `${import.meta.env.BASE_URL}assets/education/galleries/${photo.file}`;
  return (
    <figure
      className="education-gallery"
      aria-label={`${gallery.title} photographs`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
      }}
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      <div className="education-gallery__stage">
        <img src={src} alt={photo.caption} loading="lazy" decoding="async" />
        <button type="button" className="education-gallery__arrow education-gallery__arrow--prev" onClick={() => go(-1)} aria-label={`Previous ${gallery.title} photograph`}>‹</button>
        <button type="button" className="education-gallery__arrow education-gallery__arrow--next" onClick={() => go(1)} aria-label={`Next ${gallery.title} photograph`}>›</button>
      </div>
      <figcaption>
        <span>{photo.caption}</span>
        <span>{index + 1} / {count}</span>
      </figcaption>
    </figure>
  );
}

export function educationFeatures() {
  const features: Record<string, ReactNode> = {};
  for (const [key, item] of Object.entries(interactivePages)) {
    features[key] = <InteractivePage item={item} key={key} />;
  }
  for (const gallery of galleries) {
    features[gallery.key] = <PhotoGallery gallery={gallery} key={gallery.key} />;
  }
  return features;
}
