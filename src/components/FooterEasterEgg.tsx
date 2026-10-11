import { lazy, Suspense } from "react";
import "../styles/footer-easter-egg.css";

const FooterPhotoScene = lazy(() => import("./FooterPhotoScene"));

/** A photographic afterword follows the footer in the normal document flow. */
export function FooterEasterEgg() {
  return (
    <section
      id="circure-team-finale"
      className="circure-photo-afterword"
      aria-label="A photograph from JLU-FBH"
      data-theme="dark"
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
  );
}
