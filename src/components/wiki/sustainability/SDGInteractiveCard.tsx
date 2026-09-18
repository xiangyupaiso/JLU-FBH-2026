import { useState } from "react";
import type { CoreSdg } from "../../../data/sustainabilityData";
import "../../../styles/sustainability-panels.css";

export function SDGInteractiveCard({ sdg }: { sdg: CoreSdg }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`sust-sdg-card${flipped ? " is-flipped" : ""}`}
      aria-pressed={flipped}
      aria-label={`SDG ${sdg.number} ${sdg.title} — 点击翻转查看 CirCure 的回应`}
      onClick={() => setFlipped((value) => !value)}
    >
      <span className="sust-sdg-card__inner">
        <span
          className="sust-sdg-card__face sust-sdg-card__face--front"
          style={{ background: sdg.color.hex }}
        >
          <span className="sust-sdg-card__eyebrow">
            Sustainable Development Goal
          </span>
          <span className="sust-sdg-card__number">
            {String(sdg.number).padStart(2, "0")}
          </span>
          <span className="sust-sdg-card__title">{sdg.title}</span>
          <span className="sust-sdg-card__hint">Hover / Click to flip</span>
        </span>
        <span className="sust-sdg-card__face sust-sdg-card__face--back">
          <span className="sust-sdg-card__eyebrow">CirCure · 回应的核心挑战</span>
          <span className="sust-sdg-card__title">SDG {sdg.number}</span>
          <span className="sust-sdg-card__back-body">{sdg.challenge}</span>
          <span className="sust-sdg-card__pill">{sdg.frameworkLayer}</span>
          <span className="sust-sdg-card__hint">
            SET–Develop–Grow · {sdg.title}
          </span>
        </span>
      </span>
    </button>
  );
}
