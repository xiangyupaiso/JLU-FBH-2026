import { useId } from "react";
import { Mouse } from "lucide-react";
import FooterPhotoScene from "../../../FooterPhotoScene";
import "../../../../styles/footer-easter-egg.css";
import "../../../../styles/features/footer-reveal-study.css";

/** Present the production footer with its original geometry and scroll input. */
export function FooterRevealStudy({
  archiveMarkup,
}: {
  archiveMarkup: string;
}) {
  const id = useId();
  return (
    <section
      id="study-07-footer-reveal"
      className="footer-reveal-study"
      aria-labelledby={id + "-title"}
    >
      <header className="footer-reveal-study__header">
        <p className="footer-reveal-study__eyebrow">Try the interaction</p>
        <h4 id={id + "-title"}>A photograph first. A letter by choice.</h4>
        <p
          id={id + "-scroll-hint"}
          className="footer-reveal-study__scroll-hint"
        >
          <Mouse size={14} aria-hidden="true" />
          Scroll the page to reveal · scroll back to replay
        </p>
      </header>
      <div
        className="circure-photo-afterword footer-reveal-study__scene"
        aria-describedby={id + "-scroll-hint"}
      >
        <FooterPhotoScene scrollRootSelector=".route-frame__scroll" />
      </div>
      <details className="footer-reveal-study__archive">
        <summary>
          View the original page sequence <span>4 reference frames</span>
        </summary>
        <div
          dangerouslySetInnerHTML={{
            __html: archiveMarkup.replace(
              /study-07-footer-reveal/g,
              "archive-07-footer-reveal",
            ),
          }}
        />
      </details>
    </section>
  );
}
