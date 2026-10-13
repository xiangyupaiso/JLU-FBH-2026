import { useState, type ReactNode } from "react";
import { scrollReaderToTarget } from "../../../../utils";
import {
  experimentProtocolImage,
  experimentProtocolLocalImage,
  experimentProtocolPairs,
  experimentProtocolSections,
  type ExperimentProtocolPair,
} from "../../../../data/wet-lab/experimentProtocolPages";
import { WikiProtocolModal } from "../../WikiProtocolViewer";
import "../../../../styles/features/experiments-protocol.css";

/** Each stage follows its own route, ending at its final protocol node. */
export function ExperimentProtocolAtlas() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const activePair = activeKey
    ? (experimentProtocolPairs.find((pair) => pair.key === activeKey) ?? null)
    : null;

  const openPair = (pair: ExperimentProtocolPair) => {
    setActiveKey(pair.key);
  };

  const jumpToArticle = () => {
    if (!activePair) return;
    const target = document.getElementById(activePair.targetId);
    if (!target) return;
    setActiveKey(null);
    const reader = target.closest<HTMLElement>(".route-frame__scroll");
    scrollReaderToTarget(target, reader, "smooth");
  };

  return (
    <section className="exp-atlas" aria-label="Experiments">
      <nav className="exp-atlas__map" aria-label="Illustrated experiment index">
        {experimentProtocolSections.map((section) => {
          const nodes = section.nodeKeys
            .map((key) =>
              experimentProtocolPairs.find((pair) => pair.key === key),
            )
            .filter((pair): pair is ExperimentProtocolPair => Boolean(pair));
          const route = nodes.reduce((path, _, index) => {
            const x = index % 2 === 0 ? 35 : 65;
            const y = index * 100 + 20;
            if (index === 0) return `M ${x} ${y}`;
            return `${path} H ${x} V ${y}`;
          }, "");

          return (
            <section
              className="exp-atlas__stage"
              key={section.index}
              aria-label={section.name}
            >
              <div className="exp-atlas__stage-track">
                <svg
                  className="exp-atlas__route"
                  viewBox={`0 0 100 ${nodes.length * 100}`}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={route} vectorEffect="non-scaling-stroke" />
                </svg>
                {nodes.map((pair) => (
                  <button
                    className={`exp-atlas__node${
                      activeKey === pair.key ? " is-active" : ""
                    }${!pair.hasFigure ? " is-pending" : ""}`}
                    type="button"
                    key={pair.key}
                    aria-haspopup="dialog"
                    aria-label={`${pair.code} ${pair.title}`}
                    onClick={() => openPair(pair)}
                  >
                    <span className="exp-atlas__node-dot" aria-hidden="true" />
                    <span className="exp-atlas__node-code">{pair.code}</span>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </nav>

      <WikiProtocolModal
        pair={activePair}
        initialTab="flow"
        onClose={() => setActiveKey(null)}
        onJumpToArticle={jumpToArticle}
      />
    </section>
  );
}

/**
 * Article-level illustrated protocol display used beside the detailed prose.
 * The map modal is the primary viewer; this spread remains a static, readable
 * fallback in the protocol sections themselves.
 */
export function ExperimentProtocolSpread({
  pair,
}: {
  pair: ExperimentProtocolPair;
}): ReactNode {
  if (!pair.hasFigure || typeof pair.flowPage !== "number") {
    return null;
  }

  const flowSize = pair.flowSize ?? [2400, 1800];
  const inventorySize = pair.inventorySize ?? [2400, 1800];

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
          <span>P{pair.flowPage} · Workflow 流程图</span>
          <img
            src={experimentProtocolImage(pair.flowPage)}
            alt={`Workflow diagram for ${pair.title}`}
            width={flowSize[0]}
            height={flowSize[1]}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.src = experimentProtocolLocalImage(
                pair.flowPage!,
              );
            }}
          />
          <small>View full image ↗</small>
        </a>
        {typeof pair.inventoryPage === "number" ? (
          <details className="exp-protocol-spread__materials">
            <summary>Materials &amp; equipment 物料清单</summary>
            <a
              href={experimentProtocolImage(pair.inventoryPage)}
              target="_blank"
              rel="noreferrer"
            >
              <span>P{pair.inventoryPage} · Materials &amp; equipment</span>
              <img
                src={experimentProtocolImage(pair.inventoryPage)}
                alt={`Illustrated materials and equipment for ${pair.title}`}
                width={inventorySize[0]}
                height={inventorySize[1]}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.src = experimentProtocolLocalImage(
                    pair.inventoryPage!,
                  );
                }}
              />
              <small>View full image ↗</small>
            </a>
          </details>
        ) : null}
      </div>
    </figure>
  );
}
