import { useMemo, useRef, useState, type ReactNode } from "react";
import { useWikiPageMotion } from "../../hooks/useWikiPageMotion";
import type { WikiPageContent, WikiSection } from "./wikiPageTypes";
import { SubNav } from "./SubNav";
import { SUB_NAV_CONFIG } from "./subNavConfig";
import { WikiLineSidebar } from "./WikiLineSidebar";
import { WikiNextRecord } from "./WikiNextRecord";
import "../../styles/wiki-rebuild.css";

type FeatureMap = Partial<Record<string, ReactNode>>;

interface WikiPageProps {
  content: WikiPageContent;
  heroVisual: ReactNode;
  features?: FeatureMap;
  pageClassName?: string;
  routeAddon?: ReactNode;
}

function ItemCollection({
  section,
  sectionNumber,
}: {
  section: WikiSection;
  sectionNumber?: number;
}) {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]));

  if (!section.items?.length) return null;

  return (
    <div
      className={`wiki-manuscript-list wiki-manuscript-list--${section.layout ?? "editorial"}`}
      data-wiki-reveal
    >
      {section.items.map((item, itemIndex) => {
        const isOpen = openItems.has(itemIndex);
        const itemId = `${section.id}-${itemIndex + 1}`;
        const contentId = `${itemId}-content`;

        return (
          <article
            className={isOpen ? "is-open" : undefined}
            id={itemId}
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
                  {sectionNumber ?? Number.parseInt(section.index, 10)}.
                  {itemIndex + 1}
                </span>
                <span>{item.title}</span>
                <i
                  aria-hidden="true"
                  data-state-label={isOpen ? "Close" : "Expand"}
                />
              </button>
            </h3>

            <div
              className="wiki-manuscript-list__fold"
              id={contentId}
              aria-hidden={!isOpen}
            >
              <div>
                <div className="wiki-manuscript-list__content">
                  <p>{item.body}</p>

                  {item.evidence?.length ? (
                    <section>
                      <h4>Evidence to include</h4>
                      <ul>
                        {item.evidence.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  {item.decision ? (
                    <aside>
                      <h4>Decision rule</h4>
                      <p>{item.decision}</p>
                    </aside>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function WikiSectionBlock({
  section,
  feature,
  sectionNumber,
}: {
  section: WikiSection;
  feature?: ReactNode;
  sectionNumber?: number;
}) {
  return (
    <section
      className="wiki-section"
      id={section.id}
      data-section-layout={section.layout ?? "editorial"}
      data-wiki-section
    >
      <header className="wiki-section__heading" data-wiki-reveal>
        <span className="wiki-section-number">
          {sectionNumber ?? section.index}
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
      <ItemCollection section={section} sectionNumber={sectionNumber} />

      {section.note ? (
        <aside className="wiki-boundary" data-wiki-reveal>
          <span>{section.note.label}</span>
          <p>{section.note.body}</p>
        </aside>
      ) : null}
    </section>
  );
}

export function DryLabWikiPage({
  content,
  heroVisual,
  features = {},
  pageClassName = "",
  routeAddon,
}: WikiPageProps) {
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

  return (
    <main
      ref={rootRef}
      className={`wiki-page wiki-page--unified-disclosures wiki-page--${content.category} wiki-page--dry-reading ${pageClassName}`}
      data-wiki-route={content.route}
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

      {heroVisual ? (
        <div className="wiki-hero__visual" data-wiki-reveal>
          {heroVisual}
        </div>
      ) : null}

      <SubNav activePath={content.route} {...SUB_NAV_CONFIG["dry-lab"]} />

      {routeAddon}

      {content.facts.length ? (
        <section className="wiki-facts" aria-label="Page at a glance">
          {content.facts.map((fact, index) => (
            <article key={fact.label} data-wiki-reveal>
              <span>
                {String(index + 1).padStart(2, "0")} / {fact.label}
              </span>
              <strong>{fact.value}</strong>
            </article>
          ))}
        </section>
      ) : null}

      {content.sections.length || content.links.length ? (
        <div className="wiki-record">
          <WikiLineSidebar
            activeId={activeSection}
            items={content.sections.map((section, sectionIndex) => ({
              id: section.id,
              index: String(sectionIndex + 1),
              label: section.navLabel ?? section.kicker,
              meta: section.kicker,
            }))}
            links={content.links}
            minimal
          />

          <article className="wiki-article">
            {content.sections.map((section, sectionIndex) => (
              <WikiSectionBlock
                key={section.id}
                section={section}
                feature={features[section.id]}
                sectionNumber={
                  content.category === "dry-lab" ? sectionIndex + 1 : undefined
                }
              />
            ))}
          </article>
        </div>
      ) : null}

      <WikiNextRecord {...content.next} />
    </main>
  );
}
