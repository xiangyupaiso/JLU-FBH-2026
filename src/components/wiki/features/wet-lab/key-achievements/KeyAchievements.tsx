import { QueuedSvgImage } from "../../../../common/QueuedImage";
import { useId, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { WatercolorCircle } from "../../../WatercolorCircle";
import { keyAchievements } from "../../../../../data/wet-lab/keyAchievementsData";
import { keyAchievementsAssets } from "../../../../../data/wet-lab/keyAchievementsAssets";
import { mountKeyAchievements } from "./keyAchievementsController";
import "../../../../../styles/features/key-achievements.css";

export interface KeyAchievementsProps {
  className?: string;
  /** Optional local URL supplied by the Wiki's existing asset loader. */
  overviewSrc?: string;
}

function ExpandIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M3 3l6 6m12-6-6 6M3 21l6-6m12 6-6-6" />
    </svg>
  );
}

function AchievementWash({ seed }: { seed: number }) {
  return (
    <svg
      className="cc-wash"
      viewBox="6 6 88 88"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="cc-wash-paper" cx="50" cy="50" r="42" />
      <WatercolorCircle
        cx={50}
        cy={50}
        radius={44}
        seed={seed}
        className="cc-pigment"
      />
    </svg>
  );
}

/** Uses the existing React runtime plus native DOM/CSS/SVG animation APIs. */
export function KeyAchievements({
  className = "",
  overviewSrc = keyAchievementsAssets.overview,
}: KeyAchievementsProps) {
  const rootRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const reactId = useId();
  const instanceId = `cc-achievements-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return mountKeyAchievements(root, keyAchievements, overviewSrc, navigate);
  }, [navigate, overviewSrc]);

  return (
    <section
      ref={rootRef}
      className={`cc-achievements ${className}`.trim()}
      aria-label="CirCure key achievements"
    >
      <div className="cc-responsive">
        <div className="cc-workspace">
          <nav
            className="cc-navigation"
            aria-label="Explore the seven achievements"
          >
            <div className="cc-orbit">
              <svg
                className="cc-orbit-ink"
                viewBox="0 0 100 100"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <filter id={`${instanceId}-orbit-grain`}>
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.22"
                      numOctaves="2"
                      seed="12"
                      result="grain"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="grain"
                      scale="0.55"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                </defs>
                <g filter={`url(#${instanceId}-orbit-grain)`}>
                  <path
                    className="cc-orbit-stroke"
                    d="M50 12.8C70.4 12.2 87.8 29.7 87.1 50.3C87.6 70.2 70.6 87.6 49.5 87.2C29.5 87.8 12.2 70.1 12.8 49.4C12.1 29.4 30.4 12.3 50 12.8Z"
                  />
                  <path
                    className="cc-orbit-echo"
                    d="M20.2 27.5C28 17.4 38.6 12.3 51 12.2M86.3 41C90.4 59.6 79.2 78.9 62 85.9M39 86C23.1 81.3 12.2 66 13.4 49"
                  />
                </g>
              </svg>
              <div className="cc-rotor" data-cc="rotor">
                {keyAchievements.map((item, index) => (
                  <div className="cc-node-position" key={item.id}>
                    <button
                      className="cc-bubble"
                      data-achievement={item.id}
                      type="button"
                      aria-pressed="false"
                      aria-controls={`${instanceId}-content`}
                      aria-label={item.name}
                    >
                      <AchievementWash seed={index * 7 + 3} />
                      <span className="cc-label">
                        {item.label.map((line) => <span key={line}>{line}</span>)}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
              <button
                className="cc-centre"
                data-cc="overview-button"
                type="button"
                aria-pressed="true"
                aria-controls={`${instanceId}-content`}
                aria-label="Key Achievements: show visual overview"
              >
                <AchievementWash seed={8} />
                <span className="cc-label">
                  Key
                  <br />
                  Achievements
                </span>
              </button>
            </div>
            <p className="cc-hint">
              <span>Select an achievement to explore.</span>Click the centre to
              return to the overview.
            </p>
          </nav>
          <div
            className="cc-panel"
            id={`${instanceId}-content`}
            data-cc="content"
            role="region"
            aria-label="Achievement overview"
          >
            <div className="cc-layer cc-overview" data-cc="overview">
              <div className="cc-panel-heading">
                <h3>Visual overview</h3>
                <button
                  type="button"
                  className="cc-expand"
                  data-expand="overview"
                  aria-label="Enlarge visual overview"
                >
                  <ExpandIcon />
                </button>
              </div>
              <div className="cc-overview-body">
                <svg
                  className="cc-overview-image"
                  data-cc="overview-image"
                  viewBox="0 5 1394 2092"
                  role="img"
                  aria-label="Visual overview of all seven CirCure achievements"
                >
                  <QueuedSvgImage width="1394" height="2097" href={overviewSrc} />
                </svg>
              </div>
              <p className="cc-overview-caption">
                Seven connected contributions to a reusable circRNA platform.
              </p>
            </div>
            <article
              className="cc-layer cc-detail"
              data-cc="detail"
              aria-labelledby={`${instanceId}-detail-title`}
              hidden
            >
              <div className="cc-copy" data-cc="copy">
                <h3
                  className="cc-detail-title"
                  id={`${instanceId}-detail-title`}
                  data-cc="detail-title"
                />
                <div data-cc="detail-text" />
              </div>
              <div className="cc-figure-area" data-cc="figure-area">
                <figure className="cc-figure">
                  <svg
                    className="cc-crop"
                    data-cc="detail-image"
                    viewBox="0 5 1394 329"
                    role="img"
                  >
                    <title data-cc="crop-title" />
                    <QueuedSvgImage width="1394" height="2097" href={overviewSrc} />
                  </svg>
                </figure>
                <div className="cc-figure-bottom">
                  <button
                    type="button"
                    className="cc-expand"
                    data-expand="detail"
                    aria-label="Enlarge selected achievement illustration"
                  >
                    <ExpandIcon />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div
        className="cc-sr-only"
        data-cc="announcement"
        aria-live="polite"
        aria-atomic="true"
      />
      <dialog
        className="cc-dialog"
        data-cc="image-dialog"
        aria-labelledby={`${instanceId}-dialog-title`}
      >
        <div className="cc-dialog-bar">
          <h3 id={`${instanceId}-dialog-title`} data-cc="dialog-title">
            Visual overview
          </h3>
          <button type="button" className="cc-close" data-cc="close-dialog">
            Close
          </button>
        </div>
        <svg
          className="cc-dialog-image"
          data-cc="dialog-image"
          viewBox="0 5 1394 2092"
          role="img"
          aria-label="Enlarged visual overview"
        >
          <QueuedSvgImage width="1394" height="2097" href={overviewSrc} />
        </svg>
      </dialog>
    </section>
  );
}

export default KeyAchievements;
