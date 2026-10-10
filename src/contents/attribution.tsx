import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { WikiNextRecord } from "../components/wiki/WikiNextRecord";
import { getTeamHeroImage } from "../components/wiki/teamHeroAssets";
import "../styles/official-attributions.css";

const OFFICIAL_ATTRIBUTIONS_URL =
  "https://teams.igem.org/wiki/6056/attributions";
const DEFAULT_FORM_HEIGHT = 900;

interface AttributionFormMessage {
  type?: unknown;
  data?: unknown;
}

function readAttributionFormMessage(data: unknown): AttributionFormMessage | null {
  if (typeof data === "string") {
    try {
      data = JSON.parse(data) as unknown;
    } catch {
      return null;
    }
  }

  if (typeof data !== "object" || data === null) return null;
  return data as AttributionFormMessage;
}

export function Attribution() {
  const [formHeight, setFormHeight] = useState(DEFAULT_FORM_HEIGHT);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const heroStyle = {
    backgroundImage: `url(${getTeamHeroImage("/attributions")})`,
  } as CSSProperties;

  useLayoutEffect(() => {
    const onMessage = (event: MessageEvent<unknown>) => {
      const frame = frameRef.current;
      if (
        !frame ||
        event.origin !== "https://teams.igem.org" ||
        event.source !== frame.contentWindow
      ) return;

      const message = readAttributionFormMessage(event.data);
      if (message?.type !== "igem-attribution-form") return;

      const reportedHeight = Number(message.data);
      if (!Number.isFinite(reportedHeight) || reportedHeight <= 0) return;

      setFormHeight(Math.ceil(reportedHeight + 100));
      // The official app sends its height after rendering the form. An iframe
      // load event alone only confirms that its app shell has arrived.
      frame.dataset.pageEmbedReady = "true";
      frame.dispatchEvent(new Event("wiki-embed-ready"));
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <main className="wiki-page wiki-page--team official-attributions-page">
      <link rel="preconnect" href="https://teams.igem.org" />
      <link rel="dns-prefetch" href="https://teams.igem.org" />
      <header
        className="official-attributions-page__hero"
        style={heroStyle}
        aria-labelledby="attributions-title"
      >
        <h1 id="attributions-title" className="official-attributions-page__sr-only">
          Project Attributions
        </h1>
      </header>

      <section
        className="official-attributions-page__form"
        aria-label="Official iGEM attribution form"
      >
        <iframe
          ref={frameRef}
          id="igem-attribution-form"
          title="Official iGEM attribution form"
          src={OFFICIAL_ATTRIBUTIONS_URL}
          style={{ height: `${formHeight}px` }}
          loading="eager"
          data-page-embed-ready="false"
        />
      </section>

      <WikiNextRecord
        path="/activities"
        label="Team Activities"
        title="Explore our team building, outreach, and milestones."
        reveal={false}
      />
    </main>
  );
}

