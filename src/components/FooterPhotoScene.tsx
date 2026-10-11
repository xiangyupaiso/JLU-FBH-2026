import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp, Download } from "lucide-react";
import teamPhotoUrl from "../assets/footer/team-keepsake.webp";
import lambUrl from "../assets/loading/lamb.webp";
import hopeHandsUrl from "../assets/home/story/scene-9-layer-2.webp";
import hopePatientUrl from "../assets/home/story/scene-9-layer-3.webp";
import { useFooterPhotoTurn } from "../hooks/useFooterPhotoTurn";
import "../styles/footer-photo-scene.css";

/** The photo eases into view, rests, then turns with native scrolling. */
export default function FooterPhotoScene() {
  const imageRef = useRef<HTMLImageElement>(null);
  const { stageRef, pinRef, cardRef, flipped, staticView } =
    useFooterPhotoTurn();
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    // Cached photographs may finish before React attaches the error handler.
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) setPhotoFailed(true);
  }, []);

  return (
    <section
      className={"finale-photo-window" + (staticView ? " is-static" : "")}
      aria-label="The people behind CirCure"
    >
      <div ref={stageRef} className="keepsake-scroll-stage">
        <div
          ref={pinRef}
          className={"keepsake-pin" + (flipped ? " is-flipped" : "")}
        >
          <div className="keepsake-perspective">
            <div
              ref={cardRef}
              className={"keepsake-card" + (flipped ? " is-flipped" : "")}
            >
              <figure
                className="keepsake-face keepsake-front"
                aria-hidden={flipped && !staticView}
                inert={(flipped && !staticView) || undefined}
              >
                <div className="keepsake-photograph">
                  <img
                    ref={imageRef}
                    src={teamPhotoUrl}
                    width="2600"
                    height="1734"
                    alt="JLU-FBH iGEM team and mentors gathered at the First Bethune Hospital"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    onError={() => setPhotoFailed(true)}
                  />
                  {photoFailed && (
                    <p className="keepsake-photo-error" role="status">
                      The photograph could not load. Our note follows below.
                    </p>
                  )}
                </div>
                <figcaption>
                  <p>JLU-FBH · iGEM 2026</p>
                  <h2>This is us.</h2>
                  <span className="keepsake-front__note">
                    Many hands. One shared hope.
                  </span>
                </figcaption>
              </figure>

              <div
                className="keepsake-face keepsake-back"
                aria-hidden={!flipped && !staticView}
                inert={(!flipped && !staticView) || undefined}
              >
                <div className="keepsake-letter__sheet">
                  <div className="keepsake-letter__top">
                    <span>From all of us, with hope</span>
                    <span>JLU-FBH · 2026</span>
                  </div>
                  <div className="keepsake-letter__body">
                    <div className="keepsake-letter__hope" aria-hidden="true">
                      <img
                        className="keepsake-letter__patient"
                        src={hopePatientUrl}
                        alt=""
                        width="229"
                        height="408"
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className="keepsake-letter__hands"
                        src={hopeHandsUrl}
                        alt=""
                        width="604"
                        height="310"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="keepsake-letter__greeting">
                      <h3>
                        <span>For more</span>
                        <em>ordinary days.</em>
                      </h3>
                    </div>
                    <div className="keepsake-letter__message">
                      <p className="keepsake-letter__wish">
                        Time with family. Plans made with a little less fear.
                        <br />A future that feels like her own.
                      </p>
                      <p className="keepsake-letter__promise">
                        Our work is a beginning.
                        <br />
                        Her hope is why we keep asking, testing, and learning.
                      </p>
                    </div>
                    <div className="keepsake-letter__farewell">
                      <p>
                        Thank you for giving this story your time,
                        <br />
                        and for seeing the people at its heart.
                      </p>
                      <div className="keepsake-letter__signature">
                        <span>With hope,</span>
                        <strong>all of us at JLU-FBH</strong>
                      </div>
                    </div>
                  </div>
                  <div className="keepsake-lamb" aria-hidden="true">
                    <img
                      src={lambUrl}
                      alt=""
                      width="815"
                      height="338"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="keepsake-controls">
            <span className="keepsake-scroll-hint" aria-hidden="true">
              {flipped ? (
                <ArrowUp size={14} strokeWidth={1.5} />
              ) : (
                <ArrowDown size={14} strokeWidth={1.5} />
              )}
              {flipped ? "Scroll up to return" : "Keep scrolling"}
            </span>
            <a
              href={teamPhotoUrl}
              download="circure-team-photo.webp"
              aria-label="Save the full team photograph"
            >
              <Download aria-hidden="true" size={15} strokeWidth={1.5} />
              Save photo
            </a>
          </div>
          <p className="visually-hidden" role="status">
            {staticView
              ? "The photograph and personal note are both showing."
              : flipped
                ? "The personal note is showing. Scroll up to return to the photograph."
                : "The team photograph is showing. Continue scrolling to read our note."}
          </p>
        </div>
      </div>
    </section>
  );
}
