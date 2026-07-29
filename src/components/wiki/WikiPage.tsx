import { useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useWikiPageMotion } from "../../hooks/useWikiPageMotion";
import type { WikiItem, WikiPageContent, WikiSection } from "./wikiPageTypes";
import { EngagementHeroVisual } from "./EngagementHeroVisual";
import { EngagementRouteNav } from "./EngagementRouteNav";
import { WikiLineSidebar } from "./WikiLineSidebar";
import { WikiNextRecord } from "./WikiNextRecord";
import { WetLabHeroVisual } from "./WetLabHeroVisual";
import { WetLabRouteNav } from "./WetLabRouteNav";
import "../../styles/wiki-rebuild.css";
import "../../styles/wetlab-editorial.css";
import "../../styles/engagement-hero.css";

type FeatureMap = Partial<Record<string, ReactNode>>;

interface WikiPageProps {
  content: WikiPageContent;
  heroVisual: ReactNode;
  features?: FeatureMap;
  pageClassName?: string;
}

const STATUS_LABELS = {
  recorded: "recorded",
  planned: "planned",
  boundary: "not claimed",
  open: "open question",
} as const;

function Status({ item }: { item: WikiItem }) {
  return item.status ? (
    <span className="wiki-status" data-status={item.status}>
      {STATUS_LABELS[item.status]}
    </span>
  ) : null;
}

function ItemCollection({
  section,
  manuscript = false,
}: {
  section: WikiSection;
  manuscript?: boolean;
}) {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set([0]));

  if (!section.items?.length) return null;

  if (manuscript) {
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

  if (section.layout === "ledger") {
    return (
      <div className="wiki-ledger" data-wiki-reveal>
        {section.items.map((item) => (
          <article key={`${section.id}-${item.label}`}>
            <div className="wiki-ledger__code">
              <b>{item.label}</b>
              <Status item={item} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.layout === "timeline") {
    return (
      <div className="wiki-mini-timeline" data-wiki-reveal>
        {section.items.map((item) => (
          <article key={`${section.id}-${item.label}`}>
            <span>{item.label}</span>
            <div>
              <Status item={item} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`wiki-item-grid wiki-item-grid--${section.layout ?? "editorial"}`}
      data-wiki-reveal
    >
      {section.items.map((item) => (
        <article key={`${section.id}-${item.label}`}>
          <header>
            <span>{item.label}</span>
            <Status item={item} />
          </header>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function WikiSectionBlock({
  section,
  feature,
  manuscript = false,
}: {
  section: WikiSection;
  feature?: ReactNode;
  manuscript?: boolean;
}) {
  return (
    <section
      className="wiki-section"
      id={section.id}
      data-section-layout={section.layout ?? "editorial"}
      data-wiki-section
    >
      <header className="wiki-section__heading" data-wiki-reveal>
        <span className={manuscript ? "wiki-section-number" : undefined}>
          {manuscript ? Number.parseInt(section.index, 10) : section.index}
        </span>
        <div>
          {!manuscript ? <p className="wiki-kicker">{section.kicker}</p> : null}
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
      <ItemCollection section={section} manuscript={manuscript} />

      {section.note ? (
        <aside className="wiki-boundary" data-wiki-reveal>
          {!manuscript ? <span>{section.note.label}</span> : null}
          <p>{section.note.body}</p>
        </aside>
      ) : null}
    </section>
  );
}

export function WikiPage({
  content,
  heroVisual,
  features = {},
  pageClassName = "",
}: WikiPageProps) {
  const rootRef = useRef<HTMLElement>(null);
  const isWetLab = content.category === "wet-lab";
  const isEngagement = content.category === "engagement";
  const isManuscript = isWetLab || isEngagement;
  const sectionIds = useMemo(
    () => content.sections.map((section) => section.id),
    [content.sections],
  );
  const { activeSection } = useWikiPageMotion(
    rootRef,
    sectionIds,
    content.route,
  );
  const resolvedHeroVisual = isWetLab ? (
    <WetLabHeroVisual route={content.route} label={content.visualLabel} />
  ) : isEngagement ? (
    <EngagementHeroVisual route={content.route} />
  ) : (
    heroVisual
  );

  return (
    <main
      ref={rootRef}
      className={`wiki-page wiki-page--unified-disclosures wiki-page--${content.category} ${
        isManuscript ? "wiki-page--manuscript" : ""
      } ${pageClassName}`}
      data-wiki-route={content.route}
      data-active-section={activeSection}
    >
      <div className="wiki-page-progress" aria-hidden="true">
        <span />
      </div>

      <header className="wiki-hero">
        <div className="wiki-hero__copy" data-wiki-reveal>
          {!isManuscript ? (
            <p className="wiki-chapter">{content.chapter}</p>
          ) : null}
          {!isManuscript ? (
            <p className="wiki-kicker">{content.eyebrow}</p>
          ) : null}
          <h1>{content.title}</h1>
          <p className="wiki-hero__lede">{content.lede}</p>
          {!isManuscript ? (
            <aside className="wiki-hero__boundary">
              <span>What the evidence supports today</span>
              <p>{content.boundary}</p>
              <a className="wiki-begin" href={`#${sectionIds[0]}`}>
                Start with the first question <span aria-hidden="true">↓</span>
              </a>
            </aside>
          ) : null}
        </div>
        {resolvedHeroVisual ? (
          <div className="wiki-hero__visual" data-wiki-reveal>
            {resolvedHeroVisual}
          </div>
        ) : null}
      </header>

      {isWetLab ? (
        <WetLabRouteNav activePath={content.route} />
      ) : isEngagement ? (
        <EngagementRouteNav activePath={content.route} />
      ) : null}

      {!isManuscript ? (
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

      <div className="wiki-record">
        <WikiLineSidebar
          activeId={activeSection}
          items={content.sections.map((section) => ({
            id: section.id,
            index: section.index,
            label:
              section.navLabel ??
              (isEngagement ? section.kicker : section.title),
            meta: section.kicker,
          }))}
          links={content.links}
          minimal={isManuscript}
        />

        <article className="wiki-article">
          {content.sections.map((section) => (
            <WikiSectionBlock
              key={section.id}
              section={section}
              feature={features[section.id]}
              manuscript={isManuscript}
            />
          ))}
        </article>
      </div>

      {isManuscript ? (
        <WikiNextRecord {...content.next} />
      ) : (
        <section className="wiki-next" data-wiki-reveal>
          <div>
            {!isManuscript ? (
              <p className="wiki-kicker">Next record / {content.next.label}</p>
            ) : null}
            <h2>{content.next.title}</h2>
            <p>Continue along the same evidence ribbon into the next record.</p>
          </div>
          <Link
            to={content.next.path}
            aria-label={`Open ${content.next.label}`}
          >
            <span>Open page</span>
            <b aria-hidden="true">↗</b>
          </Link>
        </section>
      )}
    </main>
  );
}
