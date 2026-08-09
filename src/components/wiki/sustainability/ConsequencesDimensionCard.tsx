import type { ReactNode } from "react";
import {
  consequencesDimensions,
  type ConsequenceDimension,
  type ConsequenceDimensionId,
} from "../../../data/sustainabilityData";
import { useInViewReveal } from "./useInViewReveal";
import "../../../styles/sustainability-page.css";

const DIMENSION_ICONS: Record<ConsequenceDimensionId, ReactNode> = {
  social: (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.4 19.2c.5-3.1 2.7-5 5.6-5s5.1 1.9 5.6 5" />
      <circle cx="16.8" cy="9" r="2.6" />
      <path d="M17.4 14.2c2.1.6 3.4 2.1 3.8 4.1" />
    </svg>
  ),
  economic: (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 20.5h17" />
      <path d="M5.6 20.5v-6.8" />
      <path d="M10.4 20.5V7.8" />
      <path d="M15.2 20.5v-9.4" />
      <path d="M20 20.5V4.8" />
    </svg>
  ),
  environmental: (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.2 14.8c0-6 4.6-10 13.6-10 0 9.4-4 13.8-10 13.8-1.4 0-2.6-.4-3.6-1.1" />
      <path d="M4 20.4c2.6-5.6 7-9.2 12.2-11.2" />
    </svg>
  ),
};

export function ConsequencesDimensionCard({
  dimensions = consequencesDimensions,
}: {
  dimensions?: ReadonlyArray<ConsequenceDimension>;
}) {
  const { ref, visible } = useInViewReveal<HTMLUListElement>(0.1);

  return (
    <ul
      ref={ref}
      className={`sust-consequence-grid${visible ? " is-visible" : ""}`}
    >
      {dimensions.map((dimension, index) => (
        <li
          className="sust-consequence-card"
          key={dimension.id}
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          <span
            className="sust-consequence-card__icon"
            style={{ color: dimension.color.hex }}
          >
            {DIMENSION_ICONS[dimension.id]}
          </span>
          <h3 className="sust-consequence-card__title">{dimension.title}</h3>
          <p className="sust-consequence-card__description">
            {dimension.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
