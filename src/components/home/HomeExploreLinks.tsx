import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { homeDestinations } from "../../data/homeDestinations";
import { QueuedImage } from "../common/QueuedImage";
import descriptionSheep from "../../assets/home/explore/description.webp";
import engineeringSheep from "../../assets/home/explore/engineering.webp";
import sustainabilitySheep from "../../assets/home/explore/sustainability.webp";
import contributionSheep from "../../assets/home/explore/contribution.webp";
import modelSheep from "../../assets/home/explore/model.webp";
import softwareSheep from "../../assets/home/explore/software.webp";
import "../../styles/home-explore.css";

const destinationSheep = {
  description: descriptionSheep,
  engineering: engineeringSheep,
  sustainability: sustainabilitySheep,
  contribution: contributionSheep,
  model: modelSheep,
  software: softwareSheep,
};

export function HomeExploreLinks() {
  const [preview, setPreview] = useState<string | null>(null);
  const id = useId();

  // Dismiss pointer hints on scroll, preserving the focused link's description.
  useEffect(() => {
    const dismiss = () => {
      const focused = document.activeElement?.closest(".story-hope-entry");
      setPreview(
        focused?.closest("[inert]")
          ? null
          : (focused?.getAttribute("data-hope-card") ?? null),
      );
    };
    window.addEventListener("scroll", dismiss, { passive: true });
    return () => window.removeEventListener("scroll", dismiss);
  }, []);

  return (
    <nav
      className="story-hope-links"
      aria-label="Continue exploring CirCure"
      onKeyDown={(event) => {
        if (event.key === "Escape") setPreview(null);
      }}
    >
      {["left", "right"].map((side, groupIndex) => {
        const destinations = homeDestinations.slice(
          groupIndex * 3,
          groupIndex * 3 + 3,
        );
        return (
          <div
            className={`story-hope-group story-hope-group--${side}`}
            key={side}
          >
            {destinations.map((destination) => {
              const { key, label, path, summary, hint } = destination;
              const showingPreview = preview === key;
              return (
                <div
                  className={`story-hope-entry${showingPreview ? " is-previewing" : ""}`}
                  data-hope-card={key}
                  key={key}
                  onPointerEnter={(event) => {
                    // Layout changes can put a stationary pointer over another row.
                    if (
                      event.pointerType === "mouse" &&
                      !document.activeElement?.matches(
                        ".story-hope-card:focus-visible",
                      )
                    )
                      setPreview(key);
                  }}
                  onPointerMove={(event) => {
                    if (
                      event.pointerType === "mouse" &&
                      (event.movementX !== 0 || event.movementY !== 0)
                    )
                      setPreview(key);
                  }}
                  onPointerLeave={() => {
                    const focused =
                      document.activeElement?.closest(".story-hope-entry");
                    setPreview(focused?.getAttribute("data-hope-card") ?? null);
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget))
                      setPreview(null);
                  }}
                >
                  <Link
                    className="story-hope-card"
                    to={path}
                    aria-label={label}
                    aria-describedby={`${id}-${key}-preview`}
                    onFocus={() => setPreview(key)}
                    onClick={() => setPreview(null)}
                  >
                    <span className="home-explore-copy">
                      <span className="home-explore-label">
                        {label}
                        <ArrowUpRight
                          className="home-explore-arrow"
                          size={15}
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        className="home-explore-preview"
                        id={`${id}-${key}-preview`}
                      >
                        <span className="home-explore-summary">{summary}</span>
                        <span className="home-explore-topic" aria-hidden="true">
                          {hint}
                        </span>
                      </span>
                    </span>
                    <span className="home-explore-mascot" aria-hidden="true">
                      <QueuedImage
                        src={destinationSheep[key]}
                        width={736}
                        height={736}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        );
      })}
    </nav>
  );
}
