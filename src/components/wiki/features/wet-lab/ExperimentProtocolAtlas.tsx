import { useState } from "react";
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
  const active =
    experimentProtocolPairs.find((pair) => pair.key === activeKey) ??
    experimentProtocolPairs[0];

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
          <span className="exp-atlas__eyebrow">
            Visual protocol index / 15 paired spreads
          </span>
          <h3 id="exp-atlas-title">Follow the experimental route</h3>
        </div>
        <span className="exp-atlas__count">30 illustrated pages</span>
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
        2.5 flow validation is covered in the written protocol; the source PDF
        has no matching illustrated spread.
      </p>

      <div className="exp-atlas__preview" aria-live="polite">
        <div className="exp-atlas__preview-copy">
          <span className="exp-atlas__eyebrow">
            Spread {String(active.flowPage).padStart(2, "0")}–
            {String(active.inventoryPage).padStart(2, "0")}
          </span>
          <h4>
            {active.code} {active.title}
          </h4>
          {active.boundary ? <p>{active.boundary}</p> : null}
          <button type="button" onClick={jumpToArticle}>
            Read the protocol <span aria-hidden="true">↘</span>
          </button>
        </div>
        <div
          className="exp-atlas__preview-pages"
          aria-label="Selected protocol page previews"
        >
          <img
            src={experimentProtocolImage(active.flowPage)}
            alt={`${active.title} workflow preview`}
            width={active.flowSize[0]}
            height={active.flowSize[1]}
          />
          <img
            src={experimentProtocolImage(active.inventoryPage)}
            alt={`${active.title} materials and equipment preview`}
            width={active.inventorySize[0]}
            height={active.inventorySize[1]}
          />
        </div>
      </div>
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
        <div>
          <span>
            Illustrated protocol · P{pair.flowPage}–P{pair.inventoryPage}
          </span>
          <strong>{pair.title}</strong>
        </div>
        <a
          href={experimentProtocolImage(pair.flowPage)}
          target="_blank"
          rel="noreferrer"
        >
          Open full image ↗
        </a>
      </figcaption>
      {pair.boundary ? (
        <p className="exp-protocol-spread__boundary">{pair.boundary}</p>
      ) : null}
      <img
        className="exp-protocol-spread__flow"
        src={experimentProtocolImage(pair.flowPage)}
        alt={`Workflow diagram for ${pair.title}, page ${pair.flowPage} of the illustrated protocol`}
        width={pair.flowSize[0]}
        height={pair.flowSize[1]}
        loading="lazy"
        decoding="async"
      />
      <details className="exp-protocol-spread__inventory">
        <summary>
          <span>Materials, reagents & equipment</span>
          <span>P{pair.inventoryPage}</span>
        </summary>
        <a
          href={experimentProtocolImage(pair.inventoryPage)}
          target="_blank"
          rel="noreferrer"
        >
          Open full image ↗
        </a>
        <img
          src={experimentProtocolImage(pair.inventoryPage)}
          alt={`Illustrated materials, reagents and equipment for ${pair.title}, page ${pair.inventoryPage}`}
          width={pair.inventorySize[0]}
          height={pair.inventorySize[1]}
          loading="lazy"
          decoding="async"
        />
      </details>
    </figure>
  );
}
