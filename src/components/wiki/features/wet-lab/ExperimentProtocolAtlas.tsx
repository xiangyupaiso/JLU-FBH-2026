import { useId, useState, type ReactNode } from "react";
import { scrollReaderToTarget } from "../../../../utils";
import {
  experimentProtocolImage,
  experimentProtocolLocalImage,
  experimentProtocolPairs,
  type ExperimentProtocolPair,
} from "../../../../data/wet-lab/experimentProtocolPages";
import { experimentRingStages } from "../../../../data/wet-lab/experimentProtocolRing";
import { WikiProtocolModal } from "../../WikiProtocolViewer";
import "../../../../styles/features/experiments-protocol.css";

const RING_CENTER = 560;
const STAGE_RADIUS = 132;
const LEAF_RADIUS = 252;
const OUTER_RADIUS = 499.8;

function ringPoint(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: RING_CENTER + Math.cos(radians) * radius,
    y: RING_CENTER + Math.sin(radians) * radius,
  };
}

function ringArc(start: number, end: number, radius: number) {
  const from = ringPoint(start, radius);
  const to = ringPoint(end, radius);
  return `M ${from.x} ${from.y} A ${radius} ${radius} 0 0 ${end > start ? 1 : 0} ${to.x} ${to.y}`;
}

/** The supplied single-ring design, with each leaf bound to its protocol pair. */
export function ExperimentProtocolAtlas() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const ringId = useId().replace(/:/g, "");
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
        <svg
          className="exp-atlas__ring"
          viewBox="0 0 1120 1120"
          role="group"
          aria-label="Experiment protocols"
        >
          {experimentRingStages.map((stage) => {
            const hub = ringPoint(stage.angle, STAGE_RADIUS);
            const labelId = `${ringId}-stage-${stage.number}`;
            const reverseLabel = Math.sin((stage.angle * Math.PI) / 180) > 0;

            return (
              <g
                className="exp-atlas__stage"
                key={stage.number}
                color={stage.color}
              >
                <g aria-hidden="true">
                  <path
                    className="exp-atlas__spoke"
                    d={`M ${RING_CENTER} ${RING_CENTER} L ${hub.x} ${hub.y}`}
                  />
                  <path
                    className="exp-atlas__outer-arc"
                    d={ringArc(stage.start, stage.end, OUTER_RADIUS)}
                  />
                  <path
                    id={labelId}
                    fill="none"
                    d={ringArc(
                      reverseLabel ? stage.end : stage.start,
                      reverseLabel ? stage.start : stage.end,
                      OUTER_RADIUS,
                    )}
                  />
                  <text className="exp-atlas__stage-title">
                    <textPath
                      href={`#${labelId}`}
                      startOffset="50%"
                      textAnchor="middle"
                      dominantBaseline={reverseLabel ? "hanging" : "auto"}
                    >
                      {stage.label}
                    </textPath>
                  </text>
                </g>
                {stage.nodes.map((node) => {
                  const pair = experimentProtocolPairs.find(
                    (entry) => entry.key === node.key,
                  );
                  if (!pair) return null;
                  const point = ringPoint(node.angle, LEAF_RADIUS);
                  const branch = ringArc(stage.angle, node.angle, STAGE_RADIUS);
                  const label = ringPoint(node.angle, LEAF_RADIUS + 26.5);
                  const left = Math.cos((node.angle * Math.PI) / 180) < 0;

                  return (
                    <g key={node.key}>
                      <path
                        className="exp-atlas__branch"
                        d={`${branch} L ${point.x} ${point.y}`}
                        aria-hidden="true"
                      />
                      <g
                        className={`exp-atlas__node${activeKey === pair.key ? " is-active" : ""}`}
                        role="button"
                        tabIndex={0}
                        aria-haspopup="dialog"
                        aria-label={`${pair.code} ${pair.title}`}
                        data-protocol-key={pair.key}
                        onClick={() => openPair(pair)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            openPair(pair);
                          }
                        }}
                      >
                        <circle
                          className="exp-atlas__node-hit"
                          cx={point.x}
                          cy={point.y}
                          r="26"
                        />
                        <circle
                          className="exp-atlas__node-dot"
                          cx={point.x}
                          cy={point.y}
                          r="17.5"
                        />
                        <text
                          className="exp-atlas__node-code"
                          x={point.x}
                          y={point.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                        >
                          {pair.code}
                        </text>
                        <text
                          className="exp-atlas__node-title"
                          x={label.x}
                          y={label.y}
                          textAnchor={left ? "end" : "start"}
                          dominantBaseline="central"
                          transform={`rotate(${node.angle + (left ? 180 : 0)} ${label.x} ${label.y})`}
                        >
                          {node.label}
                        </text>
                      </g>
                    </g>
                  );
                })}
                <g className="exp-atlas__hub" aria-hidden="true">
                  <circle cx={hub.x} cy={hub.y} r="23" />
                  <text
                    x={hub.x}
                    y={hub.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    {stage.number}
                  </text>
                </g>
              </g>
            );
          })}
          <g className="exp-atlas__center" aria-hidden="true">
            <circle cx={RING_CENTER} cy={RING_CENTER} r="27" />
            <text
              x={RING_CENTER}
              y={RING_CENTER}
              textAnchor="middle"
              dominantBaseline="central"
            >
              C
            </text>
          </g>
        </svg>
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
