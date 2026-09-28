import { useEffect, useRef, useState } from "react";
import { scrollReaderToTarget } from "../../../../utils";
import {
  experimentProtocolImage,
  experimentProtocolPairs,
  type ExperimentProtocolPair,
} from "../../../../data/wet-lab/experimentProtocolPages";
import "../../../../styles/features/experiments-protocol.css";

const sections = [
  "Construct",
  "Screen",
  "Optimise",
  "Validate",
  "Target model",
];

export function ExperimentProtocolAtlas() {
  const [activeKey, setActiveKey] = useState(experimentProtocolPairs[0].key);
  const [zoomPage, setZoomPage] = useState<{
    page: number;
    label: string;
    size: [number, number];
  } | null>(null);
  const [showActualSize, setShowActualSize] = useState(false);
  const zoomDialogRef = useRef<HTMLDialogElement>(null);
  const activeIndex = Math.max(
    0,
    experimentProtocolPairs.findIndex((pair) => pair.key === activeKey),
  );
  const active = experimentProtocolPairs[activeIndex];

  useEffect(() => {
    const dialog = zoomDialogRef.current;
    if (!dialog) return;
    if (zoomPage && !dialog.open) dialog.showModal();
    if (!zoomPage && dialog.open) dialog.close();
  }, [zoomPage]);

  const openImage = (page: number, label: string, size: [number, number]) => {
    setShowActualSize(false);
    setZoomPage({ page, label, size });
  };

  const closeImage = () => {
    zoomDialogRef.current?.close();
    setZoomPage(null);
  };

  const jumpToArticle = () => {
    const target = document.getElementById(active.targetId);
    if (!target) return;
    const reader = target.closest<HTMLElement>(".route-frame__scroll");
    scrollReaderToTarget(target, reader, "smooth");
  };

  return (
    <section className="exp-atlas" aria-labelledby="exp-atlas-title">
      <header className="exp-atlas__header">
        <div>
          <h3 id="exp-atlas-title">Follow the experimental route</h3>
        </div>
      </header>

      <nav className="exp-atlas__map" aria-label="Illustrated experiment index">
        {sections.map((section, sectionIndex) => (
          <div className="exp-atlas__phase" key={section}>
            <div className="exp-atlas__phase-heading">
              <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
              <strong>{section}</strong>
            </div>
            <div className="exp-atlas__nodes">
              {experimentProtocolPairs
                .filter((pair) => pair.section === section)
                .map((pair) => (
                  <button
                    className={`exp-atlas__node${active.key === pair.key ? " is-active" : ""}`}
                    type="button"
                    key={pair.key}
                    aria-pressed={active.key === pair.key}
                    onClick={() => setActiveKey(pair.key)}
                  >
                    <span>{pair.code}</span>
                    <small>{pair.shortTitle}</small>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </nav>

      <p className="exp-atlas__note">
        2.5 flow validation is covered in the written steps and has no matching
        illustration in this set.
      </p>

      <div className="exp-atlas__reader">
        <div className="exp-atlas__selection">
          <h4 aria-live="polite">
            {active.code} {active.title}
          </h4>
          {active.boundary ? <p>{active.boundary}</p> : null}
        </div>
        <div
          className="exp-atlas__book"
          aria-label="Selected two-page illustrated spread"
        >
          <button
            type="button"
            className="exp-atlas__page"
            onClick={() =>
              openImage(active.flowPage, "Workflow", active.flowSize)
            }
            aria-label={`Enlarge workflow page ${active.flowPage} for ${active.title}`}
          >
            <span className="exp-atlas__page-heading">
              <strong>P{active.flowPage}</strong> Workflow
            </span>
            <img
              src={experimentProtocolImage(active.flowPage)}
              alt={`${active.title} workflow diagram`}
              width={active.flowSize[0]}
              height={active.flowSize[1]}
              decoding="async"
            />
            <span className="exp-atlas__page-zoom">Enlarge this page ↗</span>
          </button>
          <button
            type="button"
            className="exp-atlas__page"
            onClick={() =>
              openImage(
                active.inventoryPage,
                "Materials & equipment",
                active.inventorySize,
              )
            }
            aria-label={`Enlarge materials and equipment page ${active.inventoryPage} for ${active.title}`}
          >
            <span className="exp-atlas__page-heading">
              <strong>P{active.inventoryPage}</strong> Materials & equipment
            </span>
            <img
              src={experimentProtocolImage(active.inventoryPage)}
              alt={`${active.title} illustrated materials and equipment`}
              width={active.inventorySize[0]}
              height={active.inventorySize[1]}
              decoding="async"
            />
            <span className="exp-atlas__page-zoom">Enlarge this page ↗</span>
          </button>
        </div>
        <div className="exp-atlas__footer">
          <div
            className="exp-atlas__flip"
            aria-label="Change illustrated spread"
          >
            <button
              type="button"
              disabled={activeIndex === 0}
              onClick={() =>
                setActiveKey(experimentProtocolPairs[activeIndex - 1].key)
              }
            >
              ← Previous
            </button>
            <span>
              {activeIndex + 1} / {experimentProtocolPairs.length}
            </span>
            <button
              type="button"
              disabled={activeIndex === experimentProtocolPairs.length - 1}
              onClick={() =>
                setActiveKey(experimentProtocolPairs[activeIndex + 1].key)
              }
            >
              Next →
            </button>
          </div>
          <button
            className="exp-atlas__jump"
            type="button"
            onClick={jumpToArticle}
          >
            Jump to detailed steps <span aria-hidden="true">↘</span>
          </button>
        </div>
      </div>
      <dialog
        ref={zoomDialogRef}
        className="exp-atlas__viewer"
        aria-labelledby="exp-atlas-viewer-title"
        onClose={() => setZoomPage(null)}
      >
        {zoomPage ? (
          <>
            <header className="exp-atlas__viewer-header">
              <div>
                <span className="exp-atlas__eyebrow">Page {zoomPage.page}</span>
                <h4 id="exp-atlas-viewer-title">
                  {active.title} · {zoomPage.label}
                </h4>
              </div>
              <div className="exp-atlas__viewer-actions">
                <button
                  type="button"
                  onClick={() => setShowActualSize(!showActualSize)}
                >
                  {showActualSize ? "Fit width" : "Actual size"}
                </button>
                <button
                  type="button"
                  onClick={closeImage}
                  aria-label="Close enlarged page"
                >
                  Close ×
                </button>
              </div>
            </header>
            <div className="exp-atlas__viewer-scroll">
              <img
                className={showActualSize ? "is-actual" : ""}
                src={experimentProtocolImage(zoomPage.page)}
                alt={`${active.title}, ${zoomPage.label.toLowerCase()}, page ${zoomPage.page}`}
                width={zoomPage.size[0]}
                height={zoomPage.size[1]}
              />
            </div>
          </>
        ) : null}
      </dialog>
    </section>
  );
}

export function ExperimentProtocolSpread({
  pair,
}: {
  pair: ExperimentProtocolPair;
}) {
  return (
    <figure
      className="exp-protocol-spread"
      aria-label={`Illustrated protocol for ${pair.code} ${pair.title}`}
    >
      <figcaption className="exp-protocol-spread__heading">
        <strong>{pair.title}</strong>
      </figcaption>
      {pair.boundary ? (
        <p className="exp-protocol-spread__boundary">{pair.boundary}</p>
      ) : null}
      <div className="exp-protocol-spread__images">
        <a
          className="exp-protocol-spread__workflow"
          href={experimentProtocolImage(pair.flowPage)}
          target="_blank"
          rel="noreferrer"
        >
          <span>P{pair.flowPage} · Workflow</span>
          <img
            src={experimentProtocolImage(pair.flowPage)}
            alt={`Workflow diagram for ${pair.title}`}
            width={pair.flowSize[0]}
            height={pair.flowSize[1]}
            loading="lazy"
            decoding="async"
          />
          <small>View full image ↗</small>
        </a>
        <details className="exp-protocol-spread__materials">
          <summary>Materials &amp; equipment</summary>
          <a
            href={experimentProtocolImage(pair.inventoryPage)}
            target="_blank"
            rel="noreferrer"
          >
            <span>P{pair.inventoryPage} · Materials &amp; equipment</span>
            <img
              src={experimentProtocolImage(pair.inventoryPage)}
              alt={`Illustrated materials and equipment for ${pair.title}`}
              width={pair.inventorySize[0]}
              height={pair.inventorySize[1]}
              loading="lazy"
              decoding="async"
            />
            <small>View full image ↗</small>
          </a>
        </details>
      </div>
    </figure>
  );
}
