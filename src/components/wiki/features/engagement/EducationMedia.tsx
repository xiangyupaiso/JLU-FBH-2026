import { useState, type ReactNode, type TouchEvent } from "react";
import galleries from "../../../../data/engagement/educationGalleries.json";
import mediaGroups from "../../../../data/engagement/educationMediaGroups.json";
import "../../../../styles/features/education-media.css";

type Gallery = (typeof galleries)[number];
type MediaGroup = (typeof mediaGroups)[number];

const assetUrl = (value: string) => value.replace("__BASE__", import.meta.env.BASE_URL);

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

function MediaGrid({ group }: { group: MediaGroup }) {
  const allPdf = group.items.every((item) => item.kind === "pdf");
  return (
    <div className="education-media-grid" data-count={group.items.length} data-pdf={allPdf || undefined}>
      {group.items.map((item, index) => {
        const src = assetUrl(item.src);
        if (item.kind === "pdf") {
          const filename = src.split("/").at(-1) ?? "";
          const preview = `${import.meta.env.BASE_URL}assets/education/pdf-previews/${filename.replace(/\.pdf$/i, ".webp")}`;
          return (
            <a className="education-media-grid__pdf" href={src} target="_blank" rel="noreferrer" key={`${src}-${index}`}>
              <img src={preview} alt="" loading="lazy" decoding="async" />
              <span>{"title" in item ? item.title : filename}</span>
            </a>
          );
        }
        return (
          <figure className="education-media-grid__image" key={`${src}-${index}`}>
            <img src={src} alt={"alt" in item ? item.alt : "Education illustration"} loading="lazy" decoding="async" />
            {"caption" in item && item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        );
      })}
    </div>
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
  for (const group of mediaGroups) {
    features[group.key] = <MediaGrid group={group} key={group.key} />;
  }
  features["education-equation-1"] = (
    <div className="education-equation" role="math" aria-label="x sub i equals one if education format i is selected, otherwise zero">
      <span><var>x</var><sub>i</sub> = </span><span className="education-equation__brace">&#123;</span>
      <span className="education-equation__cases"><span>1, <small>if education format <var>i</var> is selected</small></span><span>0, <small>otherwise</small></span></span>
    </div>
  );
  features["education-equation-2"] = (
    <div className="education-equation education-equation--stacked" role="math" aria-label="Coverage and weighted education portfolio objective">
      <div><var>y</var><sub>k</sub> ≤ <span className="education-equation__sum"><sup>n</sup>∑<sub>i=1</sub></span> <var>a</var><sub>ik</sub><var>x</var><sub>i</sub>,</div>
      <div>max <var>Z</var> = <span className="education-equation__sum"><sup>K</sup>∑<sub>k=1</sub></span> <var>w</var><sub>k</sub><var>y</var><sub>k</sub></div>
    </div>
  );
  features["education-equation-3"] = (
    <div className="education-equation" role="math" aria-label="Sum of resources required by selected educational formats is no greater than available resources">
      <span className="education-equation__sum"><sup>n</sup>∑<sub>i=1</sub></span> <var>c</var><sub>ir</sub><var>x</var><sub>i</sub> ≤ <var>C</var><sub>r</sub>
    </div>
  );
  return features;
}

export function renderEducationInline(text: string, fallback: (value: string) => ReactNode): ReactNode {
  if (!text.includes("$")) return fallback(text);
  return text.split(/(\$[^$]+\$)/g).map((part, index) => {
    if (!part.startsWith("$") || !part.endsWith("$")) return <span key={index}>{fallback(part)}</span>;
    const formula = part.slice(1, -1);
    const match = formula.match(/^([A-Za-z])_(?:\{([^}]+)\}|([A-Za-z]))$/);
    return match ? <span className="education-inline-math" key={index}><var>{match[1]}</var><sub>{match[2] ?? match[3]}</sub></span>
      : <span className="education-inline-math" key={index}><var>{formula}</var></span>;
  });
}
