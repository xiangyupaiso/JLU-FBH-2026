import { useMemo, useRef } from "react";
import { ProtocolBookcase } from "../components/wiki/features/ProtocolBookcase";
import { WikiNextRecord } from "../components/wiki/WikiNextRecord";
import { SubNav } from "../components/wiki/SubNav";
import { SUB_NAV_CONFIG } from "../components/wiki/subNavConfig";
import { useWikiPageMotion } from "../hooks/useWikiPageMotion";
import protocolHeroBg from "../assets/wiki/protocol-hero-bg.png";
import "../styles/wiki-rebuild.css";
import "../styles/wetlab-editorial.css";
import "../styles/protocol-bookcase.css";

export function Protocol() {
  const rootRef = useRef<HTMLElement>(null);
  const sectionIds = useMemo(() => ["protocol-library"], []);
  useWikiPageMotion(rootRef, sectionIds, "/protocol");

  return (
    <main
      ref={rootRef}
      className="wiki-page wiki-page--manuscript wiki-page--wet-lab wiki-page--protocol"
      data-wiki-route="/protocol"
    >
      <div className="wiki-page-progress" aria-hidden="true">
        <span />
      </div>

      <header className="wiki-hero protocol-hero">
        <div className="wiki-hero__copy" data-wiki-reveal>
          <h1>Protocol Library</h1>
          <p className="wiki-hero__lede">
            Fifteen bench-side records, indexed for quick preview and local
            download.
          </p>
        </div>
        <div className="wiki-hero__visual" data-wiki-reveal>
          <figure
            className="wet-hero-art"
            role="img"
            aria-label="Protocol library watercolor background"
          >
            <img
              className="wet-hero-art__image"
              src={protocolHeroBg}
              alt=""
              loading="eager"
              decoding="async"
            />
          </figure>
        </div>
      </header>

      <SubNav activePath="/protocol" {...SUB_NAV_CONFIG["wet-lab"]} />

      <section
        className="protocol-library"
        id="protocol-library"
        data-wiki-section
      >
        <header className="protocol-library__heading" data-wiki-reveal>
          <span>06</span>
          <div>
            <p>Bench reference / 15 indexed files</p>
            <h2>Open the record at the point of work.</h2>
            <p>
              Filter the library by laboratory context, then preview the
              original six-page PDF without leaving the Wet Lab record.
            </p>
          </div>
        </header>

        <ProtocolBookcase />
      </section>

      <WikiNextRecord
        path="/model"
        label="Model"
        title="Which designs deserve the first experiment?"
      />
    </main>
  );
}
