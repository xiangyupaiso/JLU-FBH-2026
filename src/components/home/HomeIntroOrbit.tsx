import "../../styles/home-intro-orbit.css";

const ORBIT_PATH =
  "M 890 360 C 890 224 719 125 500 130 C 289 135 111 223 110 360 C 109 490 284 599 500 590 C 716 581 891 496 890 360 Z";

const orbitNodes = Array.from({ length: 36 }, (_, index) => {
  const angle = (index / 36) * Math.PI * 2;
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  return {
    x: 500 + 390 * cosine,
    y: 360 + 230 * sine,
    innerX: 500 + (390 - 6) * cosine,
    innerY: 360 + (230 - 6) * sine,
    dot: index % 3 === 0,
  };
});

/** A closed light strand; HomeIntro owns its complete animation clock. */
export function HomeIntroOrbit() {
  return (
    <div className="home-intro-orbit" aria-hidden="true">
      <div className="home-intro-bloom" />
      <div className="home-intro-flare" />
      <svg
        className="home-intro-orbit-svg"
        viewBox="0 0 1000 720"
        focusable="false"
      >
        <defs>
          <linearGradient
            id="home-intro-orbit-ink"
            x1="110"
            y1="130"
            x2="890"
            y2="590"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d784b3" />
            <stop offset="0.32" stopColor="#f3c6df" />
            <stop offset="0.62" stopColor="#fff5e8" />
            <stop offset="1" stopColor="#e8b5d6" />
          </linearGradient>
          <radialGradient id="home-intro-orbit-spark">
            <stop offset="0" stopColor="#fff9ed" />
            <stop offset="0.2" stopColor="#fce9ed" stopOpacity="0.95" />
            <stop offset="0.48" stopColor="#efb4d4" stopOpacity="0.4" />
            <stop offset="1" stopColor="#d784b3" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="home-intro-orbit-body">
          <path
            className="home-intro-orbit-thread"
            d={ORBIT_PATH}
            transform="translate(500 360) scale(0.97 0.96) translate(-500 -360)"
          />
          <path
            className="home-intro-orbit-path"
            d={ORBIT_PATH}
            pathLength="1"
          />
          <g className="home-intro-orbit-nodes">
            {orbitNodes.map((node, index) =>
              node.dot ? (
                <circle key={index} cx={node.x} cy={node.y} r="1.6" />
              ) : (
                <line
                  key={index}
                  x1={node.x}
                  y1={node.y}
                  x2={node.innerX}
                  y2={node.innerY}
                />
              ),
            )}
          </g>
        </g>
        <g className="home-intro-orbit-tip" transform="translate(890 360)">
          <circle r="23" fill="url(#home-intro-orbit-spark)" />
          <circle r="3.2" fill="#fff8ee" />
        </g>
        <ellipse
          className="home-intro-orbit-wave"
          cx="500"
          cy="360"
          rx="390"
          ry="230"
        />
      </svg>
    </div>
  );
}
