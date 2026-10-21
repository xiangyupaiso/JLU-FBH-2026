import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { PageImagePreloads } from "../../../common/PageImagePreloads";
import { WikiNextRecord } from "../../WikiNextRecord";
import { getTeamHeroImage } from "../../teamHeroAssets";
import { attributionPage } from "../../../../data/team/attributionPage";
import "../../../../styles/wiki-route-skin.css";
import "../../../../styles/official-attributions.css";

const FRAME_NAME = "igem-attribution-form";
const FORM_ORIGIN = new URL(attributionPage.formUrl).origin;
const COMPACT_QUERY = "(max-width: 980px)";

function readerTop(track: HTMLElement) {
  const headerHeight = Number.parseFloat(getComputedStyle(track).scrollMarginTop) || 0;
  return Math.max(
    0,
    track.getBoundingClientRect().top + window.scrollY - headerHeight,
  );
}

function sectionFromHostHash(hash: string) {
  const value = hash.replace(/^#(?:attribution-)?/, "");
  return attributionPage.sections.some((section) => section.id === value)
    ? value
    : null;
}

function readFormHeight(data: unknown): number | null {
  if (typeof data === "string") {
    try {
      data = JSON.parse(data) as unknown;
    } catch {
      return null;
    }
  }
  if (typeof data !== "object" || data === null) return null;
  const message = data as { type?: unknown; data?: unknown };
  if (message.type !== "igem-attribution-form") return null;
  const height = Number(message.data);
  return Number.isFinite(height) && height > 0 ? Math.ceil(height + 100) : null;
}

export function OfficialAttributionReader() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const readerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const initialSection = useRef(sectionFromHostHash(window.location.hash)).current;
  const pendingInitialSection = useRef(initialSection);
  const [selectedSection, setSelectedSection] = useState<string>(
    initialSection ?? attributionPage.sections[0].id,
  );
  const [compact, setCompact] = useState(
    () => window.matchMedia(COMPACT_QUERY).matches,
  );
  const [tocOpen, setTocOpen] = useState(false);
  const outlineId = useId();
  const heroImage = getTeamHeroImage(attributionPage.route);
  const jumpToSection = useCallback((sectionId: string) => {
    pendingInitialSection.current = null;
    const frame = frameRef.current;
    if (frame) {
      // Let the official document resolve its own anchors. Its dynamic section
      // positions cannot be inferred from the total cross-origin form height.
      frame.src = `${attributionPage.formUrl}#${sectionId}`;
      // Keep the whole reader below the header. Scrolling to the padded iframe
      // would move the decorated frame while the official document is reading.
      const track = readerRef.current?.parentElement;
      if (track) {
        window.scrollTo({ top: readerTop(track), behavior: "instant" });
      }
    }
    window.history.replaceState(
      window.history.state,
      "",
      `#attribution-${sectionId}`,
    );
    setSelectedSection(sectionId);
    setTocOpen(false);
  }, []);

  useEffect(() => {
    if (!initialSection) return;
    const track = readerRef.current?.parentElement;
    // Bring a deep-linked embed into view so its offscreen resize reporting
    // is not throttled before it can announce that its sections are ready.
    if (track) window.scrollTo({ top: readerTop(track), behavior: "instant" });
  }, [initialSection]);

  useEffect(() => {
    const media = window.matchMedia(COMPACT_QUERY);
    const onChange = () => {
      setCompact(media.matches);
      setTocOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const onLoad = () => {
      if (frame.dataset.pageEmbedReady === "true") return;
      frame.dataset.pageEmbedReady = "true";
      frame.dispatchEvent(new Event("wiki-embed-ready"));
    };
    const onMessage = (event: MessageEvent<unknown>) => {
      if (event.origin !== FORM_ORIGIN || event.source !== frame.contentWindow)
        return;
      const height = readFormHeight(event.data);
      if (height === null) return;
      onLoad();
      // Native fragments cannot resolve before the official React app has
      // mounted its sections. Its first height message marks that point.
      if (pendingInitialSection.current) {
        const section = pendingInitialSection.current;
        pendingInitialSection.current = null;
        jumpToSection(section);
      }
    };
    window.addEventListener("message", onMessage);
    frame.addEventListener("load", onLoad);
    return () => {
      frame.removeEventListener("load", onLoad);
      window.removeEventListener("message", onMessage);
    };
  }, [jumpToSection]);

  useEffect(() => {
    const frame = frameRef.current;
    const track = readerRef.current?.parentElement;
    if (!frame || !track) return;

    let hostScrollRequested = false;
    const onHostInput = () => {
      hostScrollRequested = true;
    };
    const onFrameEnter = () => {
      hostScrollRequested = false;
    };
    const onBlur = () => {
      if (document.activeElement === frame) hostScrollRequested = false;
    };
    const keepFrameInView = () => {
      if (hostScrollRequested || document.activeElement !== frame) return;
      // The official Jump to calls scrollIntoView across the iframe boundary.
      // Preserve the reader position for that native scroll, while gestures
      // on the host remain free to reach the hero, next page and footer.
      const top = readerTop(track);
      if (Math.abs(window.scrollY - top) > 1) {
        window.scrollTo({ top, behavior: "instant" });
      }
    };

    frame.addEventListener("pointerenter", onFrameEnter);
    window.addEventListener("blur", onBlur);
    window.addEventListener("wheel", onHostInput, { passive: true });
    window.addEventListener("touchstart", onHostInput, { passive: true });
    window.addEventListener("pointerdown", onHostInput);
    window.addEventListener("keydown", onHostInput);
    window.addEventListener("scroll", keepFrameInView, { passive: true });
    return () => {
      frame.removeEventListener("pointerenter", onFrameEnter);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("wheel", onHostInput);
      window.removeEventListener("touchstart", onHostInput);
      window.removeEventListener("pointerdown", onHostInput);
      window.removeEventListener("keydown", onHostInput);
      window.removeEventListener("scroll", keepFrameInView);
    };
  }, []);

  useEffect(() => {
    if (!tocOpen) return;
    const trigger = triggerRef.current;
    closeRef.current?.focus({ preventScroll: true });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTocOpen(false);
      if (event.key !== "Tab") return;
      const controls = Array.from(
        document
          .getElementById(outlineId)
          ?.querySelectorAll<HTMLElement>("button, a[href]") ?? [],
      );
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus({ preventScroll: true });
    };
  }, [tocOpen, outlineId]);

  return (
    <main
      className={`wiki-page wiki-page--route wiki-page--manuscript route--reader wiki-page--team official-attributions-page${tocOpen ? " is-toc-open" : ""}`}
      data-wiki-route={attributionPage.route}
      data-route-theme="team"
    >
      <PageImagePreloads sources={[heroImage]} />
      <link rel="preconnect" href={FORM_ORIGIN} />
      <link rel="dns-prefetch" href={FORM_ORIGIN} />
      <header className="wiki-hero" data-page-background-src={heroImage} data-page-critical="true">
        <h1 className="wiki-hero__sr-only">{attributionPage.title}</h1>
      </header>
      <div className="wiki-reader-track">
        <div
          ref={readerRef}
          className="wiki-record"
          aria-label="Project attribution reader"
        >
          <aside
            id={outlineId}
            className="wiki-outline wiki-outline--marker"
            aria-label="Attribution table of contents"
          >
            <div className="wiki-outline__drawer-head">
              <strong>On this page</strong>
              <button
                ref={closeRef}
                type="button"
                className="wiki-outline__close"
                aria-label="Close table of contents"
                onClick={() => setTocOpen(false)}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <nav aria-label="Jump to an official attribution section">
              {attributionPage.sections.map((section, index) => (
                <div className="wiki-outline__group" key={section.id}>
                  <a
                    className={`wiki-outline__primary${selectedSection === section.id ? " is-active" : ""}`}
                    href={`#attribution-${section.id}`}
                    aria-current={selectedSection === section.id ? "location" : undefined}
                    onClick={(event) => {
                      if (
                        event.ctrlKey ||
                        event.metaKey ||
                        event.shiftKey ||
                        event.altKey
                      )
                        return;
                      event.preventDefault();
                      jumpToSection(section.id);
                    }}
                  >
                    <span className="wiki-outline__index">{index + 1}</span>
                    <span className="wiki-outline__copy">
                      <strong>{section.label}</strong>
                    </span>
                  </a>
                </div>
              ))}
            </nav>
          </aside>
          {compact ? (
            <>
              <button
                ref={triggerRef}
                type="button"
                className="wiki-toc-trigger"
                aria-controls={outlineId}
                aria-expanded={tocOpen}
                aria-label="Open table of contents"
                title="Open table of contents"
                onClick={() => setTocOpen(true)}
              >
                <svg
                  viewBox="0 0 20 20"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    d="M3 5h14M3 10h14M3 15h9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span>TOC</span>
              </button>
              <div
                className="wiki-toc-backdrop"
                aria-hidden="true"
                onClick={() => setTocOpen(false)}
              />
            </>
          ) : null}
          <div
            className="route-frame"
            data-page-background-src="https://static.igem.wiki/teams/6056/wiki/files/pages/team/team.avif"
            data-page-background-property="--route-frame-image-ready"
          >
            <div
              className="route-frame__scroll"
              aria-label="Project Attributions article"
            >
              <div
                className="official-attributions-page__form"
              >
                <p className="official-attributions-page__source">
                  <a href={attributionPage.formUrl} target="_blank" rel="noopener noreferrer">
                    Open official attribution form <span aria-hidden="true">↗</span>
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </p>
                <div className="official-attributions-page__document">
                  <iframe
                    ref={frameRef}
                    id={FRAME_NAME}
                    name={FRAME_NAME}
                    title="Official iGEM attribution form"
                    src={attributionPage.formUrl}
                    loading="eager"
                    data-page-embed-ready="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WikiNextRecord {...attributionPage.next} reveal={false} />
    </main>
  );
}
