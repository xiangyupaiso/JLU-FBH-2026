import { memo, useEffect, useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NAV_ICONS } from "../navIcons";
import { useWikiNextCompanion } from "../../hooks/useWikiNextCompanion";
import { wikiDestinationPreviews } from "../../data/wikiDestinationPreviews";
import { QueuedImage } from "../common/QueuedImage";
const lambUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/lamb.webp";
const ribbonUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/next-record-ribbon-watercolor.avif";
import "./WikiNextRecord.css";

// Resolve the illustration by route, even when the page's display label differs.
const NAV_ICONS_BY_PATH = Object.fromEntries(
  Object.entries(NAV_ICONS).map(([name, icon]) => [
    `/${name.toLowerCase().replace(/ /g, "-")}`,
    icon,
  ]),
);

interface WikiNextRecordProps {
  path: string;
  label: string;
  title: string;
  description?: string;
  reveal?: boolean;
  studyProgress?: number;
}

export const WikiNextRecord = memo(function WikiNextRecord({
  path,
  label,
  title,
  description,
  reveal = true,
  studyProgress,
}: WikiNextRecordProps) {
  const icon = NAV_ICONS_BY_PATH[path];
  const preview = wikiDestinationPreviews[path];
  const previewId = useId();
  const [showPreview, setShowPreview] = useState(false);
  const { sectionRef, companionRef, ribbonRef, actionRef } =
    useWikiNextCompanion(path, studyProgress);

  // Match Home: scrolling dismisses mouse hints while keyboard focus keeps them.
  useEffect(() => {
    const dismiss = () => {
      setShowPreview(
        (showing) =>
          showing && (actionRef.current?.matches(":focus-visible") ?? false),
      );
    };
    window.addEventListener("scroll", dismiss, { passive: true });
    return () => window.removeEventListener("scroll", dismiss);
  }, [actionRef]);

  return (
    <section
      ref={sectionRef}
      className="wiki-next wiki-next--record"
      data-wiki-reveal={reveal ? "" : undefined}
    >
      <QueuedImage
        ref={ribbonRef}
        className="wiki-next__ribbon"
        src={ribbonUrl}
        alt=""
        width="2171"
        height="724"
        loading="lazy"
        decoding="async"
        draggable={false}
        aria-hidden="true"
      />
      <div className="wiki-next__inner">
        <span
          ref={companionRef}
          className="wiki-next__companion"
          aria-hidden="true"
        >
          <QueuedImage
            src={lambUrl}
            alt=""
            width="813"
            height="338"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </span>
        <div className="wiki-next__copy">
          <h2>{title}</h2>
          <p>
            {description ? (
              description
            ) : (
              <>
                Continue to <strong>{label}</strong>.
              </>
            )}
          </p>
        </div>

        <Link
          ref={actionRef}
          className={`wiki-next__action${showPreview ? " is-previewing" : ""}`}
          to={path}
          aria-describedby={preview ? previewId : undefined}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setShowPreview(true);
          }}
          onPointerMove={(event) => {
            if (
              event.pointerType === "mouse" &&
              (event.movementX !== 0 || event.movementY !== 0)
            )
              setShowPreview(true);
          }}
          onPointerLeave={() => {
            setShowPreview(
              actionRef.current?.matches(":focus-visible") ?? false,
            );
          }}
          onFocus={() => setShowPreview(true)}
          onBlur={() => setShowPreview(false)}
          onClick={() => setShowPreview(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setShowPreview(false);
          }}
        >
          <span className="wiki-next__destination">
            <span className="wiki-next__eyebrow">
              {icon && (
                <QueuedImage
                  className="wiki-next__icon"
                  src={icon}
                  alt=""
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              )}
              Next page
            </span>
            <strong
              className={
                label === "Entrepreneurship"
                  ? "wiki-next__label--long-word"
                  : undefined
              }
            >
              {label === "Entrepreneurship" ? "Entrepreneur\u00adship" : label}
            </strong>
            {preview && (
              <span className="wiki-next__preview" id={previewId}>
                <span className="wiki-next__summary">{preview.summary}</span>
                <span aria-hidden="true">{preview.hint}</span>
              </span>
            )}
          </span>
          <span className="wiki-next__arrow" aria-hidden="true">
            <ArrowUpRight size={24} strokeWidth={1.5} />
          </span>
        </Link>
      </div>
    </section>
  );
});
