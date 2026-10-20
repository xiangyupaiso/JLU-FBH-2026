import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter, useLocation } from "react-router-dom";
import { createPageImageQueue } from "../utils/pageImageQueue";
import Pages from "../pages";
import { Navbar } from "../components/wiki/features/project/visual-design-studies/NavigationStudy";
import { HomeExploreLinks } from "../components/home/HomeExploreLinks";
import { WikiNextRecord } from "../components/wiki/WikiNextRecord";
import { RibbonStudy } from "../components/wiki/features/project/visual-design-studies/RibbonStudy";
import { HomePlayback } from "../components/wiki/features/project/visual-design-studies/PlaybackStudy";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/circure-tokens.css";
import "../styles/circure-nav.css";
import "../styles/circure-search.css";
import "../styles/features/visual-design-component-studies.css";

const params = new URLSearchParams(location.search);
const kind = params.get("kind") ?? "explore";
const capture = params.has("capture") || params.has("raw");
const titles: Record<string, string> = {
  explore: "Choose a destination, meet its companion",
  ribbon: "Follow the ribbon to the next page",
  navigation: "The crest stays as the navigation changes",
  controller: "Reading controls within reach",
};
const returnAnchors: Record<string, string> = {
  explore: "small-responses-shared-character",
  ribbon: "continue-to-next-page",
  navigation: "navigation-with-a-landmark",
  controller: "control-story-playback",
};
document.body.dataset.study = kind;
document.body.dataset.state = params.get("state") ?? "compact";
document.body.classList.toggle("is-capture", params.has("capture"));
document.body.classList.toggle("is-raw", params.has("raw"));
document.body.classList.toggle("is-embedded", params.has("embed"));

function StudyContent() {
  const root = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const selected = Pages.flatMap((page) =>
    "folder" in page && page.folder ? page.folder : [page],
  ).find((page) => "path" in page && page.path === pathname);

  useEffect(() => {
    const host = root.current;
    if (!host) return;
    // Standalone studies have no site loader to activate QueuedImage sources.
    Array.from(host.querySelectorAll("img[data-page-src]"))
      .slice(0, 6)
      .forEach((image) => image.setAttribute("data-page-critical", "true"));
    const queue = createPageImageQueue(host);
    void queue.criticalReady.catch(() => {});
    let lastHeight = 0;
    let frame = 0;
    const reportSize = () => {
      frame = 0;
      if (parent === window || !params.has("embed")) return;
      const top = host.getBoundingClientRect().top;
      const menus = Array.from(
        host.querySelectorAll(
          ".circure-mobile-menu.is-open, .circure-mega-menu.is-open",
        ),
      );
      const height = Math.ceil(
        Math.max(
          host.scrollHeight,
          ...menus.map(
            (menu) => menu.getBoundingClientRect().bottom - top + 22,
          ),
        ),
      );
      if (height === lastHeight) return;
      lastHeight = height;
      parent.postMessage(
        { type: "visual-design-study-size", height },
        location.origin,
      );
    };
    const scheduleSize = () => {
      if (!frame) frame = requestAnimationFrame(reportSize);
    };
    const resize = new ResizeObserver(scheduleSize);
    resize.observe(host);
    host
      .querySelectorAll(".circure-mobile-menu, .circure-mega-menu")
      .forEach((menu) => resize.observe(menu));
    const mutation = new MutationObserver(scheduleSize);
    mutation.observe(host, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "aria-expanded"],
    });
    return () => {
      cancelAnimationFrame(frame);
      mutation.disconnect();
      resize.disconnect();
      queue.dispose();
    };
  }, []);

  return (
    <main className={`component-study component-study--${kind}`} ref={root}>
      {!capture && (
        <header className="component-study__header">
          <p>CirCure / Component study</p>
          <h1>{titles[kind]}</h1>
          <p>
            {kind === "controller"
              ? "Open the scene list and choose a chapter. Press Escape to close the list and return to its button."
              : kind === "navigation"
                ? "Select the crest to open or fold the navigation, then choose a category to see its menu."
                : kind === "ribbon"
                  ? "On desktop, play the journey or use its slider. Hover over or focus Notebook for a hint; narrow screens show the compact layout."
                  : "Hover over a destination or use Tab to focus it. Its hint and greeting appear beside the title; Escape dismisses the hint."}
          </p>
        </header>
      )}
      <div className="component-canvas">
        {kind === "navigation" && <Navbar />}
        {kind === "explore" && <HomeExploreLinks />}
        {kind === "controller" && <HomePlayback introPlaying={false} />}
        {kind === "ribbon" && !capture && <RibbonStudy />}
        {kind === "ribbon" && capture && (
          <div className="wiki-page wiki-page--project-preview">
            <WikiNextRecord
              path="/notebook"
              label="Notebook"
              title="Follow the project through its working record"
              description="Read the daily notes, protocol changes and decisions behind the project."
              reveal={false}
            />
          </div>
        )}
      </div>
      {!capture && pathname !== "/" && (
        <aside className="component-study__selection" role="status">
          <p>
            Selected: <strong>{selected?.name ?? pathname.slice(1)}</strong>.
            The preview stays here so you can compare another choice.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}${pathname.slice(1)}`}
            target="_blank"
            rel="noreferrer"
          >
            Visit {selected?.name ?? "this page"} in the wiki ↗
          </a>
        </aside>
      )}
      {!capture && (
        <footer className="component-study__footer">
          <a
            href={`${import.meta.env.BASE_URL}visual-design#${returnAnchors[kind] ?? "interaction-craft"}`}
            target={params.has("embed") ? "_top" : undefined}
          >
            Return to Visual Design
          </a>
          <span>
            Isolated component study
            {kind === "controller" ? " · local scene selection" : ""}
          </span>
        </footer>
      )}
    </main>
  );
}

export function Study() {
  return (
    <MemoryRouter basename="/jlu-fbh" initialEntries={["/jlu-fbh/"]}>
      <StudyContent />
    </MemoryRouter>
  );
}

createRoot(document.getElementById("root")!).render(<Study />);
