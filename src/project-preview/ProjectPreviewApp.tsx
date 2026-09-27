import { useEffect, type ReactNode } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  DecisionLoop,
  HeterogeneityField,
  MechanismRoute,
  ResourceShelf,
  ResultGateTable,
} from "../components/wiki/features/ProjectFeatures";
import {
  contributionPage,
  descriptionPage,
  engineeringPage,
  resultsPage,
} from "../data/projectPages";
import type { WikiPageContent } from "../components/wiki/wikiPageTypes";
import { ProjectPreviewPage } from "./ProjectPreviewPage";
import type { ProjectPreviewVariant } from "./ProjectPreviewHero";

interface PreviewDefinition {
  content: WikiPageContent;
  variant: ProjectPreviewVariant;
  features: Record<string, ReactNode>;
}

const PREVIEWS: Record<string, PreviewDefinition> = {
  "/description": {
    content: descriptionPage,
    variant: "description",
    features: {
      "description-need": <HeterogeneityField />,
      "description-system": <MechanismRoute />,
      "description-boundaries": <ResultGateTable />,
    },
  },
  "/engineering": {
    content: engineeringPage,
    variant: "engineering",
    features: {
      "engineering-framework": <MechanismRoute />,
      "engineering-cycles": <DecisionLoop />,
      "engineering-trace": <ResultGateTable />,
    },
  },
  "/results": {
    content: resultsPage,
    variant: "results",
    features: {
      "results-standard": <ResultGateTable />,
      "results-gates": <ResultGateTable />,
      "results-reflection": <DecisionLoop />,
    },
  },
  "/contribution": {
    content: contributionPage,
    variant: "contribution",
    features: {
      "contribution-packages": <ResourceShelf />,
      "contribution-reuse": <ResourceShelf />,
      "contribution-release": <ResultGateTable />,
    },
  },
};

function PreviewChrome() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageName = PREVIEWS[pathname]?.content.chapter.split(" / ")[0];
    document.title = `${pageName ?? "Project"} Preview · CirCure`;
    const page = pathname.replace("/", "") || "description";
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("page", page);
    nextUrl.hash = "";
    window.history.replaceState(null, "", nextUrl);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <header className="project-preview-chrome">
        <Link className="project-preview-chrome__brand" to="/description">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="15.25" />
            <path d="M13.2 29.8C15.3 24.3 21.4 18.2 23 13.1C24.2 9.2 21.8 7 18.9 7.5C15.4 8.1 14.2 11.1 15.8 14.4C17.8 18.7 22.1 23.7 24.3 29.7" />
          </svg>
          <span>CirCure</span>
        </Link>
        <nav aria-label="Project preview pages">
          {Object.entries(PREVIEWS).map(([path, preview]) => (
            <Link
              className={pathname === path ? "is-active" : ""}
              aria-current={pathname === path ? "page" : undefined}
              to={path}
              key={path}
            >
              {preview.variant}
            </Link>
          ))}
        </nav>
      </header>

      <Routes>
        {Object.entries(PREVIEWS).map(([path, preview]) => (
          <Route
            path={path}
            element={
              <ProjectPreviewPage
                key={path}
                content={preview.content}
                variant={preview.variant}
                features={preview.features}
              />
            }
            key={path}
          />
        ))}
        <Route path="*" element={<Navigate replace to="/description" />} />
      </Routes>

      <footer className="project-preview-footer">
        <span>CirCure · Project working copy</span>
        <p>
          This isolated preview does not modify the production Project routes.
        </p>
      </footer>
    </>
  );
}

export default function ProjectPreviewApp() {
  return <PreviewChrome />;
}
