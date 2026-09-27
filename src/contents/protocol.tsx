import { useMemo, useRef } from "react";
import { ProtocolBookcase } from "../components/wiki/features/ProtocolBookcase";
import { WikiNextRecord } from "../components/wiki/WikiNextRecord";
import { SubNav } from "../components/wiki/SubNav";
import { SUB_NAV_CONFIG } from "../components/wiki/subNavConfig";
import { useWikiPageMotion } from "../hooks/useWikiPageMotion";
import protocolHeroBg from "../assets/wiki/protocol-hero-bg.png";
import protocolContent from "../data/protocolContent.json";
import "../styles/wiki-rebuild.css";
import "../styles/wetlab-editorial.css";
import "../styles/protocol-bookcase.css";
import "../styles/protocol-content.css";

export function Protocol() {
  const rootRef = useRef<HTMLElement>(null);
  const sectionIds = useMemo(
    () => ["protocol-library", ...protocolContent.labs.map((lab) => lab.id)],
    [],
  );
  useWikiPageMotion(rootRef, sectionIds, "/protocol");

  return (
    <main
      ref={rootRef}
      className="wiki-page wiki-page--manuscript wiki-page--wet-lab wiki-page--protocol wiki-page--unified-disclosures"
      data-wiki-route="/protocol"
    >
      <div className="wiki-page-progress" aria-hidden="true">
        <span />
      </div>

      <header className="wiki-hero protocol-hero">
        <div className="wiki-hero__copy" data-wiki-reveal>
          <p className="protocol-hero__eyebrow">Wet Lab / Bench reference</p>
          <h1>Protocols</h1>
          <p className="wiki-hero__lede">
            43 standard operating procedures · 3 laboratories
          </p>
          <a className="protocol-hero__browse" href="#protocol-index">
            Browse protocols ↓
          </a>
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
