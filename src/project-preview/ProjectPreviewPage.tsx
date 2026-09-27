import { useMemo, useRef, useState, type ReactNode } from "react";
import { WikiLineSidebar } from "../components/wiki/WikiLineSidebar";
import type {
  WikiPageContent,
  WikiSection,
} from "../components/wiki/wikiPageTypes";
import { WikiNextRecord } from "../components/wiki/WikiNextRecord";
import { useWikiPageMotion } from "../hooks/useWikiPageMotion";
import type { ProjectPreviewVariant } from "./ProjectPreviewHero";
import { SubNav } from "../components/wiki/SubNav";
import { SUB_NAV_CONFIG } from "../components/wiki/subNavConfig";
import "../styles/wiki-rebuild.css";
import "../styles/wiki-features.css";
import "../styles/wetlab-editorial.css";
import "../styles/dry-lab-calm.css";
import "./project-preview.css";
import "./project-palette.css";

type FeatureMap = Partial<Record<string, ReactNode>>;

function PreviewAccordion({ section }: { section: WikiSection }) {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]));

  if (!section.items?.length) return null;

  const sectionNumber = Number.parseInt(section.index, 10);

  return (
    <div
      className={`wiki-manuscript-list wiki-manuscript-list--${section.layout ?? "editorial"}`}
      data-wiki-reveal
    >
      {section.items.map((item, itemIndex) => {
        const isOpen = openItems.has(itemIndex);
        const contentId = `${section.id}-${itemIndex + 1}-content`;

        return (
          <article
            className={isOpen ? "is-open" : undefined}
            id={`${section.id}-${itemIndex + 1}`}
            data-wiki-outline-anchor
            data-wiki-outline-parent={section.id}
            key={`${section.id}-${item.label}`}
          >
            <h3 className="wiki-manuscript-list__toggle">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() =>
                  setOpenItems((current) => {
                    const next = new Set(current);
                    if (next.has(itemIndex)) {
                      next.delete(itemIndex);
                    } else {
                      next.add(itemIndex);
                    }
                    return next;
                  })
                }
              >
                <span className="wiki-manuscript-list__index">
                  {sectionNumber}.{itemIndex + 1}
                </span>
                <span>{item.title}</span>
                <span className="project-fold-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m9 5 7 7-7 7" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className="wiki-manuscript-list__fold"
              id={contentId}
              aria-hidden={!isOpen}
              inert={!isOpen}
            >
              <div>
                <div className="wiki-manuscript-list__content">
                  <p>{item.body}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function PreviewSection({
  section,
  feature,
}: {
  section: WikiSection;
  feature?: ReactNode;
}) {
  return (
    <section
      className="wiki-section"
      id={section.id}
      data-section-layout={section.layout ?? "editorial"}
      data-wiki-section
    >
      <header className="wiki-section__heading" data-wiki-reveal>
        <span className="wiki-section-index">
          {Number.parseInt(section.index, 10)}
        </span>
        <div>
          <h2>{section.title}</h2>
          <p className="wiki-section__summary">{section.summary}</p>
        </div>
      </header>

      {section.body?.length ? (
        <div className="wiki-prose" data-wiki-reveal>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {feature ? (
        <div className="wiki-feature" data-wiki-reveal>
          {feature}
        </div>
      ) : null}

      <PreviewAccordion section={section} />

      {section.note ? (
        <aside className="wiki-boundary" data-wiki-reveal>
          <span>{section.note.label}</span>
          <p>{section.note.body}</p>
        </aside>
      ) : null}
    </section>
  );
}

const PROJECT_PATHS = new Set([
  "/description",
  "/engineering",
  "/results",
  "/contribution",
]);

export function ProjectPreviewPage({
  content,
  variant,
  features = {},
}: {
  content: WikiPageContent;
  variant: ProjectPreviewVariant;
  features?: FeatureMap;
}) {
  const rootRef = useRef<HTMLElement>(null);
  const sectionIds = useMemo(
    () => content.sections.map((section) => section.id),
    [content.sections],
  );
  const { activeSection } = useWikiPageMotion(
    rootRef,
    sectionIds,
    content.route,
  );
  const nextPath = PROJECT_PATHS.has(content.next.path)
    ? content.next.path
    : "/description";
  const nextLabel = PROJECT_PATHS.has(content.next.path)
    ? content.next.label
    : "Description";
  const nextTitle = PROJECT_PATHS.has(content.next.path)
    ? content.next.title
    : "Return to the Project opening.";

  return (
    <main
      ref={rootRef}
      className="wiki-page wiki-page--unified-disclosures wiki-page--project wiki-page--dry-lab wiki-page--project-preview"
      data-wiki-route={content.route}
      data-preview-variant={variant}
      data-active-section={activeSection}
    >
      <div className="wiki-page-progress" aria-hidden="true">
        <span />
      </div>

      <header className="wiki-hero">
        <div className="wiki-hero__copy" data-wiki-reveal>
          <h1>{content.title}</h1>
          <p className="wiki-hero__lede">{content.lede}</p>
        </div>
      </header>

      <SubNav
        {...SUB_NAV_CONFIG.project}
        activePath={content.route}
        items={SUB_NAV_CONFIG.project.items.map(({ title, path }) => ({
          title,
          path,
        }))}
      />

      <div className="wiki-record">
        <WikiLineSidebar
          activeId={activeSection}
          label="Contents"
          activeMarker={
            <svg viewBox="0 0 32 46" focusable="false">
              <use href="#circure-ribbon-knot" />
            </svg>
          }
          items={content.sections.map((section) => ({
            id: section.id,
            index: section.index,
            label: section.navLabel ?? section.kicker,
          }))}
          minimal
        />

        <article className="wiki-article">
          {content.sections.map((section) => (
            <PreviewSection
              key={section.id}
              section={section}
              feature={features[section.id]}
            />
          ))}
        </article>
      </div>

      <WikiNextRecord path={nextPath} label={nextLabel} title={nextTitle} />
    </main>
  );
}
