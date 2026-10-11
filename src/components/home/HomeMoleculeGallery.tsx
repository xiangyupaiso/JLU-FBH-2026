import { type CSSProperties } from "react";
import frame from "../../assets/home/molecule-gallery/frame.png";
import cards from "../../assets/home/molecule-gallery/cards.png";
import symbols from "../../assets/home/molecule-gallery/symbols.png";
import ring from "../../assets/home/molecule-gallery/ring.png";
import labels from "../../assets/home/molecule-gallery/labels.png";
import "../../styles/home-molecule-gallery.css";

const layers = [
  { name: "frame", src: frame },
  { name: "paper", src: cards },
  { name: "symbols", src: symbols },
  { name: "labels", src: labels },
] as const;
const captions = ["DNA", "mRNA", "circRNA", "Protein and cells"];
const ringBounds = { x: 1378, y: 589, width: 447, height: 444 };

function GalleryRing() {
  const style: CSSProperties = {
    left: `${((ringBounds.x - 1280) / 640) * 100}%`,
    top: `${(ringBounds.y / 1440) * 100}%`,
    width: `${(ringBounds.width / 640) * 100}%`,
    height: `${(ringBounds.height / 1440) * 100}%`,
  };

  return (
    <svg
      className="home-molecule-gallery__ring"
      data-gallery-ring=""
      style={style}
      viewBox={`${ringBounds.x} ${ringBounds.y} ${ringBounds.width} ${ringBounds.height}`}
      aria-hidden="true"
    >
      <image href={ring} width="2560" height="1440" />
    </svg>
  );
}

function GalleryCard({ index }: { index: number }) {
  return (
    <div
      className={`home-molecule-gallery__card${index === 2 ? " home-molecule-gallery__card--chosen" : ""}`}
      data-gallery-card={index}
    >
      <svg
        className="home-molecule-gallery__card-art"
        viewBox={`${index * 640} 0 640 1440`}
        aria-hidden="true"
      >
        {layers.map((layer) => (
          <image
            key={layer.name}
            href={layer.src}
            width="2560"
            height="1440"
            data-gallery-layer={layer.name}
            data-gallery-symbols={layer.name === "symbols" ? "" : undefined}
          />
        ))}
      </svg>
      {index === 2 && <GalleryRing />}
    </div>
  );
}

export function HomeMoleculeGallery() {
  return (
    <section
      id="molecule-gallery"
      className="home-molecule-gallery"
      aria-labelledby="molecule-gallery-title"
    >
      <h2 id="molecule-gallery-title" className="story-sr-only">
        Many possible vaccine platforms. We chose circRNA.
      </h2>
      <div className="home-molecule-gallery__stage">
        <div className="home-molecule-gallery__choices" aria-hidden="true">
          {captions.map((caption, index) => (
            <GalleryCard key={caption} index={index} />
          ))}
        </div>
        <p className="home-molecule-gallery__decision">
          Many possibilities. <em>We chose circRNA.</em>
        </p>
      </div>
    </section>
  );
}
