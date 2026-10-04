import { type ReactNode } from "react";
import "../../styles/home-rna-sequence.css";

// Without motion both illustrations retain their normal document order.
export function HomeRnaSequence({
  rna,
  platform,
}: {
  rna: ReactNode;
  platform: ReactNode;
}) {
  return (
    <div className="story-rna-sequence story-chapter story-chapter--platform">
      <div className="story-rna-sequence-track">
        <div className="story-rna-sequence-stage">
          <section
            id="why-circrna"
            className="story-chapter story-chapter--rna"
            aria-labelledby="why-circrna-title"
          >
            <h2 className="story-sr-only" id="why-circrna-title">
              Why circRNA?
            </h2>
            <div className="story-scene-track">
              <div className="story-chapter-inner">
                <div className="story-visual">{rna}</div>
              </div>
            </div>
          </section>
          <section
            id="our-platform"
            className="story-chapter story-chapter--platform"
            aria-labelledby="our-platform-title"
          >
            <div className="story-scene-track">
              <div className="story-chapter-inner">
                <div className="story-visual">{platform}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="story-rna-sequence-reading">
        <div className="story-rna-reading-anchor" aria-hidden="true" />
        <div className="story-copy story-rna-sequence-copy">
          <h2 id="our-platform-title">
            One backbone. <em>Room for more targets.</em>
          </h2>
          <div className="story-body">
            <p>
              Tumors are not defined by a single target. We want to address that
              diversity with a modular circRNA cancer vaccine platform.
            </p>
            <p>
              Keep the vaccine framework. Replace the antigen sequence. Explore
              a different tumor target.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
