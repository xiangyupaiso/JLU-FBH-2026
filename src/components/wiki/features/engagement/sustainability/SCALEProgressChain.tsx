import { Fragment } from "react";
import {
  sustainabilityAnchors,
  type SustainabilityAnchor,
} from "../../../../../data/engagement/sustainability/sustainabilityData";
import "../../../../../styles/sustainability-panels.css";

const DEFAULT_SCALE_ANCHOR_IDS = [
  "sdg3-stakeholder",
  "sdg3-consequences",
  "sdg3-alignment",
  "sdg3-legacy",
  "sdg3-evidence",
] as const;

type NodeState = "done" | "current" | "upcoming" | "reserved";

export function SCALEProgressChain({
  activeId = "sdg3-stakeholder",
  anchors = sustainabilityAnchors,
  anchorIds = DEFAULT_SCALE_ANCHOR_IDS,
}: {
  activeId?: string;
  anchors?: ReadonlyArray<SustainabilityAnchor>;
  anchorIds?: ReadonlyArray<string>;
}) {
  const nodes = anchorIds.flatMap((id) => {
    const anchor = anchors.find((item) => item.id === id);
    return anchor ? [anchor] : [];
  });
  const activeIndex = Math.max(
    0,
    nodes.findIndex((node) => node.id === activeId),
  );

  const jumpTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({
      behavior: "instant",
      block: "start",
    });
    window.history.replaceState(window.history.state, "", `#${id}`);
  };

  return (
    <nav className="sust-scale-chain" aria-label="SCALE 五要素导航">
      {nodes.map((node, index) => {
        const letter = node.label.charAt(0);
        const shortLabel = node.label.split("—")[1]?.trim() ?? node.label;
        const state: NodeState =
          index < activeIndex
            ? "done"
            : index === activeIndex
              ? "current"
              : node.status === "reserved"
                ? "reserved"
                : "upcoming";

        return (
          <Fragment key={node.id}>
            {index > 0 && (
              <span
                aria-hidden="true"
                className={`sust-scale-chain__connector${
                  index <= activeIndex
                    ? " sust-scale-chain__connector--done"
                    : ""
                }`}
              />
            )}
            <button
              type="button"
              className="sust-scale-chain__node"
              onClick={() => jumpTo(node.id)}
              aria-current={index === activeIndex ? "step" : undefined}
              aria-label={`${node.label}${
                node.status === "reserved" ? "（正文预留）" : ""
              }`}
            >
              <span
                className={`sust-scale-chain__dot sust-scale-chain__dot--${state}`}
              >
                {letter}
              </span>
              <span className="sust-scale-chain__label">{shortLabel}</span>
            </button>
          </Fragment>
        );
      })}
    </nav>
  );
}


