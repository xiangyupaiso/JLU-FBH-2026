import { useEffect, useId, useRef, useState } from "react";
import { useFooterPhotoReveal } from "../hooks/useFooterPhotoReveal";
import { useKeepsakeNote } from "../hooks/useKeepsakeNote";
import teamPhotoUrl from "../assets/footer/team-keepsake.webp";
import circureEmblemUrl from "../assets/story-nav/circure-emblem.png";
import hopeHandsUrl from "../assets/home/story/scene-9-layer-2.webp";
import hopePatientUrl from "../assets/home/story/scene-9-layer-3.webp";
import "../styles/footer-photo-scene.css";

const lambUrl =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/lamb.webp";

/** A full-bleed photograph uncovers continuously beneath the closing panel. */
export default function FooterPhotoScene({
  scrollRootSelector,
}: {
  scrollRootSelector?: string;
}) {
  const noteTitleId = useId();
  const imageRef = useRef<HTMLImageElement>(null);
  const {
    noteRef,
    notePanelRef,
    noteButtonRef,
    noteSheetRef,
    noteTitleRef,
    openNote,
    closeNote,
  } = useKeepsakeNote();
  const { stageRef, cardRef } = useFooterPhotoReveal(scrollRootSelector);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) setPhotoFailed(true);
  }, []);

  return (
    <section
      className="finale-photo-window"
      aria-label="The people behind CirCure"
    >
      <div ref={stageRef} className="keepsake-scroll-stage">
        <div className="keepsake-reveal-track">
          <div className="keepsake-pin">
            <figure
              className="keepsake-front"
              style={{ backgroundImage: `url("${teamPhotoUrl}")` }}
            >
              <div ref={cardRef} className="keepsake-photograph">
                <img
                  ref={imageRef}
                  src={teamPhotoUrl}
                  width="2600"
                  height="1734"
                  alt="JLU-FBH iGEM team and mentors gathered at the First Bethune Hospital"
                  decoding="async"
                  draggable={false}
                  onError={() => setPhotoFailed(true)}
                />
              </div>
              <div className="keepsake-photo-shade" aria-hidden="true" />
              <figcaption className="keepsake-brand">
                <img
                  className="keepsake-brand__emblem"
                  src={circureEmblemUrl}
                  alt=""
                  width="1610"
                  height="1610"
                  decoding="async"
                  draggable={false}
                />
                <span>CirCure</span>
              </figcaption>
              {photoFailed && (
                <p className="keepsake-photo-error" role="status">
                  The photograph could not load. Our note is still available.
                </p>
              )}
              <button
                ref={noteButtonRef}
                type="button"
                className="keepsake-note-open"
                aria-haspopup="dialog"
                onClick={openNote}
              >
                A note from us
              </button>
            </figure>
          </div>
        </div>
      </div>
      <dialog
        ref={noteRef}
        className="keepsake-note"
        data-sheep-cursor
        aria-labelledby={noteTitleId}
        onCancel={(event) => {
          event.preventDefault();
          closeNote();
        }}
      >
        <div ref={notePanelRef} className="keepsake-note__panel">
          <div ref={noteSheetRef} className="keepsake-letter__sheet">
            <div className="keepsake-letter__body">
              <div className="keepsake-letter__intro">
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
                  <h3 ref={noteTitleRef} id={noteTitleId} tabIndex={-1}>
                    <span>For more</span>
                    <em>ordinary days.</em>
                  </h3>
                </div>
              </div>
              <div className="keepsake-letter__copy">
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
                    <div>
                      <span>With hope,</span>
                      <strong>all of us at JLU-FBH</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="keepsake-note__actions">
            <button
              type="button"
              className="keepsake-note-close"
              onClick={closeNote}
            >
              <span aria-hidden="true">←</span>
              Back to the photograph
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
