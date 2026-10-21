import { QueuedImage } from "../../../common/QueuedImage";
import { useEffect, useRef, useState, type CSSProperties, type TouchEvent } from "react";
import galleries from "../../../../data/engagement/educationGalleries.json";
import mediaGroups from "../../../../data/engagement/educationMediaGroups.json";
import { educationAssetUrl } from "../../../../data/engagement/educationRemoteAssets";
import { getEducationFigureCaption } from "../../../../data/engagement/educationFigureCaptions";
import { DocumentViewer } from "../../documents/DocumentViewer";
import "../../../../styles/features/education-media.css";

type Gallery = (typeof galleries)[number];
type MediaGroup = (typeof mediaGroups)[number];

function useNearViewport<T extends HTMLElement>(rootMargin = "400px 0px") {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setNear(entry.isIntersecting), { rootMargin });
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);
  return { ref, near };
}

export function InteractivePage({ item }: { item: { title: string; load: () => Promise<string>; height: number } }) {
  const { ref, near } = useNearViewport<HTMLElement>("1200px 0px");
  const [started, setStarted] = useState(false);
  const [html, setHtml] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => { if (near) setStarted(true); }, [near]);
  useEffect(() => {
    if (!started) return;
    let active = true;
    setStatus("loading");
    void item.load().then((content) => {
      if (!active) return;
      setHtml(content);
      setStatus("ready");
    }).catch(() => { if (active) setStatus("error"); });
    return () => { active = false; };
  }, [item, started, attempt]);
  return (
    <section className="education-interactive" aria-label={item.title} ref={ref}>
      <div className="education-interactive__head">
        <strong>{item.title}</strong>
      </div>
      {status === "ready" && html && near ? <iframe srcDoc={html} title={item.title} loading="lazy" sandbox="allow-scripts allow-popups" style={{ height: item.height }} />
        : <div className="education-interactive__launch" style={{ minHeight: item.height }}>
            <p>{status === "loading" ? "Loading activity…" : status === "error" ? "This activity could not load. Please try again." : started ? "Activity ready — scroll here to play." : "Activity loads automatically when you reach this section."}</p>
            {status === "error" ? <button type="button" onClick={() => setAttempt((current) => current + 1)}>Try again</button> : null}
          </div>}
    </section>
  );
}

export function MediaGrid({ group }: { group: MediaGroup }) {
  const allPdf = group.items.every((item) => item.kind === "pdf");
  if (allPdf) {
    return (
      <div className="education-document-group">
        {group.items.map((item, index) => {
          const src = educationAssetUrl(item.src);
          const title = "title" in item ? String(item.title) : "Education Document";
          return (
            <DocumentViewer
              key={`${src}-${index}`}
              document={{
                caption: title,
                url: src,
                openUrl: src,
                downloadUrl: src,
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="education-media-grid" data-count={group.items.length}>
      {group.items.map((item, index) => {
        const src = educationAssetUrl(item.src);
        const caption = getEducationFigureCaption(item.src)?.caption ?? ("caption" in item ? item.caption : "");
        return (
          <figure className="education-media-grid__image" key={`${src}-${index}`}>
            <QueuedImage src={src} alt={"alt" in item ? item.alt : "Education illustration"} loading="lazy" decoding="async" />
            {caption ? <figcaption>{caption}</figcaption> : null}
          </figure>
        );
      })}
    </div>
  );
}

export function PhotoGallery({ gallery, imageUrl = (file) => educationAssetUrl(`galleries/${file}`), showCount = true }: { gallery: Gallery; imageUrl?: (file: string) => string; showCount?: boolean }) {
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
          ><QueuedImage src={imageUrl(photo.file)} alt={photo.caption} loading="lazy" decoding="async" /></button>;
        })}
        <button type="button" className="education-gallery__arrow education-gallery__arrow--prev" onClick={() => go(-1)} aria-label={`Previous ${gallery.title} photograph`}>‹</button>
        <button type="button" className="education-gallery__arrow education-gallery__arrow--next" onClick={() => go(1)} aria-label={`Next ${gallery.title} photograph`}>›</button>
      </div>
      <figcaption>
        <span>{photos[index].caption}</span>
        {showCount && <span>{index + 1} / {count}</span>}
      </figcaption>
    </figure>
  );
}

const winterStations = [
  { name: "Hailun", filePrefix: "hailun", count: 6 },
  { name: "Yanbian", filePrefix: "jilinyanbian", count: 2 },
  { name: "Chongqing", filePrefix: "chongqing", count: 5 },
  { name: "Jining", filePrefix: "shandongjining", count: 4 },
  { name: "Turin", filePrefix: "yidaliduling", count: 3 },
] as const;

export function WinterOutreachGallery() {
  const [stationIndex, setStationIndex] = useState(0);
  const station = winterStations[stationIndex];
  const gallery: Gallery = {
    key: "education-gallery-winter-outreach",
    title: `Winter Outreach · ${station.name}`,
    images: Array.from({ length: station.count }, (_, index) => ({
      file: `new-figure/${station.filePrefix}-${index + 1}.avif`,
      caption: `${station.name} · ${index + 1} / ${station.count}`,
    })),
  };

  return (
    <section className="education-stations" aria-label="Winter Outreach locations">
      <div className="education-stations__labels">
        {winterStations.map((stop, index) => (
          <button
            key={stop.name}
            type="button"
            className={index === stationIndex ? "education-stations__label education-stations__label--active" : "education-stations__label"}
            aria-current={index === stationIndex ? "step" : undefined}
            onClick={() => setStationIndex(index)}
          >{stop.name}</button>
        ))}
      </div>
      <input
        className="education-stations__range"
        type="range"
        min={0}
        max={winterStations.length - 1}
        step={1}
        value={stationIndex}
        onChange={(event) => setStationIndex(Number(event.currentTarget.value))}
        aria-label="Choose a Winter Outreach location"
        aria-valuetext={station.name}
        style={{ "--education-station-progress": `${stationIndex / (winterStations.length - 1) * 100}%` } as CSSProperties}
      />
      <PhotoGallery key={station.name} gallery={gallery} />
    </section>
  );
}
