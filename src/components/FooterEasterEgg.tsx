import { lazy, Suspense, useRef } from "react";
import lambUrl from "../assets/loading/lamb.webp";
import { useFooterEasterEgg } from "../hooks/useFooterEasterEgg";
import "../styles/footer-easter-egg.css";

const FooterPhotoScene = lazy(() => import("./FooterPhotoScene"));

/** A photographic afterword waits beneath the footer; pushing past the end opens it. */
export function FooterEasterEgg() {
  const rootRef = useRef<HTMLElement>(null);
  const seamRef = useRef<HTMLButtonElement>(null);
  const { revealed, reveal } = useFooterEasterEgg(rootRef, seamRef);

  return (
    <>
      <button
        ref={seamRef}
        type="button"
        className="finale-seam"
        aria-expanded={revealed}
        aria-label="Open a photograph from JLU-FBH"
        onClick={reveal}
      >
        <img src={lambUrl} alt="" width="815" height="338" draggable={false} />
      </button>
      {revealed && (
        <section
          ref={rootRef}
          id="circure-team-finale"
          className="circure-photo-afterword"
          aria-label="A photograph from JLU-FBH"
          data-theme="dark"
          tabIndex={-1}
        >
          <Suspense
            fallback={
              <div className="finale-photo-loading" role="status">
                <span className="visually-hidden">
                  Loading the team photograph…
                </span>
              </div>
            }
          >
            <FooterPhotoScene />
          </Suspense>
        </section>
      )}
    </>
  );
}
