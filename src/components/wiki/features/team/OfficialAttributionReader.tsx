import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { PageImagePreloads } from "../../../common/PageImagePreloads";
import { WikiNextRecord } from "../../WikiNextRecord";
import { getTeamHeroImage } from "../../teamHeroAssets";
import { attributionPage } from "../../../../data/team/attributionPage";
import "../../../../styles/wiki-rebuild.css";
import "../../../../styles/wetlab-editorial.css";
import "../../../../styles/wiki-route-skin.css";
import "../../../../styles/official-attributions.css";

const FRAME_NAME = "igem-attribution-form";
const FORM_ORIGIN = new URL(attributionPage.formUrl).origin;

function isFormReadyMessage(data: unknown): boolean {
  if (typeof data === "string") {
    try {
      data = JSON.parse(data) as unknown;
    } catch {
      return false;
    }
  }
  if (typeof data !== "object" || data === null) return false;
  const message = data as { type?: unknown; data?: unknown };
  const height = Number(message.data);
  return (
    message.type === "igem-attribution-form" &&
    Number.isFinite(height) &&
    height > 0
  );
}

export function OfficialAttributionReader() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const readerRef = useRef<HTMLElement>(null);
  const outlineRef = useRef<HTMLDetailsElement>(null);
  const [selectedSection, setSelectedSection] = useState<string>(
    attributionPage.sections[0].id,
  );
  const heroImage = getTeamHeroImage(attributionPage.route);
  const heroStyle = {
    "--route-hero-image": `url(${heroImage})`,
  } as CSSProperties;

  const alignReader = () => {
    const reader = readerRef.current;
    if (!reader) return;
    const headerHeight =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height",
        ),
      ) || 78;
    window.scrollTo({
      top: window.scrollY + reader.getBoundingClientRect().top - headerHeight,
      behavior: "instant",
    });
  };

  useLayoutEffect(() => {
    const onMessage = (event: MessageEvent<unknown>) => {
      const frame = frameRef.current;
      if (
        !frame ||
        event.origin !== FORM_ORIGIN ||
        event.source !== frame.contentWindow ||
        !isFormReadyMessage(event.data)
      )
        return;
      if (frame.dataset.pageEmbedReady === "true") return;
      frame.dataset.pageEmbedReady = "true";
      frame.dispatchEvent(new Event("wiki-embed-ready"));
    };
    // A cross-origin frame cannot receive host wheel/scroll commands. While
    // it fills the reading screen, wheel gestures on the fixed site header
    // or floating outline must not bypass the official document.
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      const reader = readerRef.current;
      if (!reader) return;
      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 78;
      const bounds = reader.getBoundingClientRect();
      if (
        bounds.top <= headerHeight + 32 &&
        bounds.bottom >= window.innerHeight - 32
      ) {
        event.preventDefault();
      }
    };
    window.addEventListener("message", onMessage);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <main
      className="wiki-page wiki-page--route wiki-page--manuscript route--reader wiki-page--team official-attributions-page"
      data-wiki-route={attributionPage.route}
      data-route-theme="team"
    >
      <PageImagePreloads sources={[heroImage]} />
      <link rel="preconnect" href={FORM_ORIGIN} />
      <link rel="dns-prefetch" href={FORM_ORIGIN} />
      <header className="wiki-hero" style={heroStyle}>
        <h1 className="wiki-hero__sr-only">{attributionPage.title}</h1>
      </header>
      <section
        ref={readerRef}
        className="official-attributions-page__reader"
        aria-label="Project attribution reader"
      >
        <details
          ref={outlineRef}
          className="official-attributions-page__outline"
          onToggle={(event) => {
            if (event.currentTarget.open) alignReader();
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape" && outlineRef.current) {
              outlineRef.current.open = false;
              outlineRef.current.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>On this page</summary>
          <nav aria-label="Jump to an official attribution section">
            {attributionPage.sections.map((section, index) => (
              <a
                key={section.id}
                className={
                  selectedSection === section.id ? "is-active" : undefined
                }
                href={`${attributionPage.formUrl}#${section.id}`}
                target={FRAME_NAME}
                onClick={(event) => {
                  if (
                    event.ctrlKey ||
                    event.metaKey ||
                    event.shiftKey ||
                    event.altKey
                  )
                    return;
                  setSelectedSection(section.id);
                  if (outlineRef.current) outlineRef.current.open = false;
                  alignReader();
                }}
              >
                <span>{index + 1}</span>
                <strong>{section.label}</strong>
              </a>
            ))}
          </nav>
        </details>
        <iframe
          ref={frameRef}
          id={FRAME_NAME}
          name={FRAME_NAME}
          title="Official iGEM attribution form"
          src={attributionPage.formUrl}
          loading="eager"
          data-page-embed-ready="false"
        />
      </section>
      <WikiNextRecord {...attributionPage.next} reveal={false} />
    </main>
  );
}
