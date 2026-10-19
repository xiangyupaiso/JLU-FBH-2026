import { useRef } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../components/wiki/features/project/visual-design-studies/NavigationStudy";
import { HomeExploreLinks } from "../components/home/HomeExploreLinks";
import { WikiNextRecord } from "../components/wiki/WikiNextRecord";
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
  explore: "A destination, its hint and its companion",
  ribbon: "The artwork becomes a route to the next chapter",
  navigation: "One landmark, two navigation states",
  controller: "Reading controls within reach",
};
document.body.dataset.study = kind;
document.body.dataset.state = params.get("state") ?? "compact";
document.body.classList.toggle("is-capture", params.has("capture"));
document.body.classList.toggle("is-raw", params.has("raw"));
document.body.classList.toggle("is-embedded", params.has("embed"));

export function Study() {
  const root = useRef<HTMLDivElement>(null);

  return (
    <MemoryRouter basename="/jlu-fbh" initialEntries={["/jlu-fbh/"]}>
      <main className={`component-study component-study--${kind}`}>
        {!capture && (
          <header className="component-study__header">
            <p>CirCure / Component study</p>
            <h1>{titles[kind]}</h1>
            <p>
              {kind === "controller"
                ? "Open the scene list, change the selection, then return with Escape."
                : kind === "navigation"
                  ? "Select the crest to expand or collapse the menu. Explore its category controls."
                  : "Use Tab to focus the destination and reveal its local hint. Press Escape to dismiss the hint."}
            </p>
          </header>
        )}
        <div className="component-canvas" ref={root}>
          {kind === "navigation" && <Navbar />}
          {kind === "explore" && <HomeExploreLinks />}
          {kind === "controller" && <HomePlayback introPlaying={false} />}
          {kind === "ribbon" && (
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
        {!capture && (
          <footer className="component-study__footer">
            <a
              href={`${import.meta.env.BASE_URL}visual-design#measuring-artwork-and-layout`}
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
    </MemoryRouter>
  );
}

createRoot(document.getElementById("root")!).render(<Study />);
