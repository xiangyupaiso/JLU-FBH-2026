import { useId } from "react";
import type { EntrepreneurshipOrbitTone } from "../../../../data/engagement/entrepreneurshipPage";

/** Transparent pigment, uneven edges, and a fine wash rather than stacked discs. */
export function WatercolorCircle({
  cx,
  cy,
  radius,
  tone,
  seed = 8,
  active = false,
}: {
  cx: number;
  cy: number;
  radius: number;
  tone: EntrepreneurshipOrbitTone;
  seed?: number;
  active?: boolean;
}) {
  const id = useId();
  return (
    <g
      className={`entrepreneurship-watercolor${active ? " is-active" : ""}`}
      data-orbit-tone={tone}
    >
      <defs>
        <radialGradient id={`${id}-pigment`} cx="42%" cy="38%" r="65%">
          <stop offset="0" stopColor="var(--orbit-color)" stopOpacity="0.1" />
          <stop
            offset="0.55"
            stopColor="var(--orbit-color)"
            stopOpacity="0.23"
          />
          <stop
            offset="0.83"
            stopColor="var(--orbit-color)"
            stopOpacity="0.35"
          />
          <stop
            offset="0.96"
            stopColor="var(--orbit-color)"
            stopOpacity="0.17"
          />
          <stop offset="1" stopColor="var(--orbit-color)" stopOpacity="0" />
        </radialGradient>
        <filter
          id={`${id}-wash`}
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="3"
            seed={seed}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={radius * 0.065}
            xChannelSelector="R"
            yChannelSelector="G"
            result="edge"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0.9 0 0.35"
            result="paper"
          />
          <feComposite in="edge" in2="paper" operator="in" />
        </filter>
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={`url(#${id}-pigment)`}
        filter={`url(#${id}-wash)`}
      />
      <circle
        className="entrepreneurship-watercolor__edge"
        cx={cx}
        cy={cy}
        r={radius * 0.96}
        fill="none"
        filter={`url(#${id}-wash)`}
      />
    </g>
  );
}
