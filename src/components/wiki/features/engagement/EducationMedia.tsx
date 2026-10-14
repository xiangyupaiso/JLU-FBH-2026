import { useState, type ReactNode, type TouchEvent } from "react";
import galleries from "../../../../data/engagement/educationGalleries.json";
import mediaGroups from "../../../../data/engagement/educationMediaGroups.json";
import { educationAssetUrl } from "../../../../data/engagement/educationRemoteAssets";
import "../../../../styles/features/education-media.css";

type Gallery = (typeof galleries)[number];
type MediaGroup = (typeof mediaGroups)[number];

const interactivePages = {
  "education-interactive-map": {
    title: "Community & Educational Function Map",
    load: () => import("../../../../data/engagement/interactive/community-educational-function-map.html?raw").then((module) => module.default),
    height: 730,
  },
  "education-interactive-design-board": {
    title: "Education Design Board",
    load: () => import("../../../../data/engagement/interactive/education-design-board.html?raw").then((module) => module.default),
    height: 850,
  },
  "education-interactive-evidence-room": {
    title: "Breast Guardian Evidence Room",
    load: () => import("../../../../data/engagement/interactive/breast-guardian-evidence-room.html?raw").then((module) => module.default),
    height: 900,
  },
} as const;

function InteractivePage({ item }: { item: (typeof interactivePages)[keyof typeof interactivePages] }) {
  const [html, setHtml] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const load = async () => {
    setStatus("loading");
    try {
      setHtml(await item.load());
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  };
  return (
    <section className="education-interactive" aria-label={item.title}>
      <div className="education-interactive__head">
        <strong>{item.title}</strong>
      </div>
      {status === "ready" && html ? <iframe srcDoc={html} title={item.title} loading="lazy" sandbox="allow-scripts allow-popups" style={{ height: item.height }} />
        : <div className="education-interactive__launch">
            <p>{status === "loading" ? "Loading activity…" : status === "error" ? "This activity could not load. Please try again." : "Explore this activity here on the Education page."}</p>
            <button type="button" onClick={() => { void load(); }} disabled={status === "loading"}>
              {status === "error" ? "Try again" : "Play here"}
            </button>
          </div>}
    </section>
  );
}

function MediaGrid({ group }: { group: MediaGroup }) {
  const allPdf = group.items.every((item) => item.kind === "pdf");
  return (
    <div className="education-media-grid" data-count={group.items.length} data-pdf={allPdf || undefined}>
      {group.items.map((item, index) => {
        const src = educationAssetUrl(item.src);
        if (item.kind === "pdf") {
          const title = "title" in item ? String(item.title) : "Education PDF";
          const cover = /\.pdf$/i.test(item.src)
            ? educationAssetUrl(item.src.replace(/\.pdf$/i, ".webp"))
            : null;
          return (
            <figure className="education-media-grid__pdf" key={`${src}-${index}`}>
              {cover
                ? <a className="education-media-grid__pdf-cover" href={src} target="_blank" rel="noreferrer" aria-label={`Open ${title} PDF`}><img src={cover} alt={`${title} cover`} loading="lazy" decoding="async" /></a>
                : <iframe src={`${src}#toolbar=0`} title={title} loading="lazy" />}
              <figcaption><a href={src} target="_blank" rel="noreferrer">{title} ↗</a></figcaption>
            </figure>
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
  const visible = [-1, 0, 1].map((offset) => ({
    offset,
    photoIndex: (index + offset + count) % count,
  }));
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
        {visible.map(({ offset, photoIndex }) => {
          const photo = photos[photoIndex];
          return <button
            type="button"
            className={`education-gallery__card education-gallery__card--${offset === 0 ? "active" : offset < 0 ? "previous" : "next"}`}
            key={`${photo.file}-${offset}`}
            onClick={() => offset && go(offset)}
            aria-label={offset === 0 ? photo.caption : `${offset < 0 ? "Previous" : "Next"}: ${photo.caption}`}
            tabIndex={offset === 0 ? -1 : 0}
          ><img src={educationAssetUrl(`galleries/${photo.file}`)} alt={photo.caption} loading="lazy" decoding="async" /></button>;
        })}
        <button type="button" className="education-gallery__arrow education-gallery__arrow--prev" onClick={() => go(-1)} aria-label={`Previous ${gallery.title} photograph`}>‹</button>
        <button type="button" className="education-gallery__arrow education-gallery__arrow--next" onClick={() => go(1)} aria-label={`Next ${gallery.title} photograph`}>›</button>
      </div>
      <figcaption>
        <span>{photos[index].caption}</span>
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
  text = text.replace(/\*\*(?=\[[^\]]+\]\()/g, "").replace(/(?<=\))\*\*/g, "");
  if (!text.includes("$")) return fallback(text);
  return text.split(/(\$[^$]+\$)/g).map((part, index) => {
    if (!part.startsWith("$") || !part.endsWith("$")) return <span key={index}>{fallback(part)}</span>;
    const formula = part.slice(1, -1);
    const match = formula.match(/^([A-Za-z])_(?:\{([^}]+)\}|([A-Za-z]))$/);
    return match ? <span className="education-inline-math" key={index}><var>{match[1]}</var><sub>{match[2] ?? match[3]}</sub></span>
      : <span className="education-inline-math" key={index}><var>{formula}</var></span>;
  });
}
