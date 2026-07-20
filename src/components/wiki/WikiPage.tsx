import { useMemo, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useWikiPageMotion } from "../../hooks/useWikiPageMotion";
import type {
  WikiItem,
  WikiPageContent,
  WikiSection,
} from "./wikiPageTypes";
import { WikiLineSidebar } from "./WikiLineSidebar";
import "../../styles/wiki-rebuild.css";

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

function ItemCollection({ section }: { section: WikiSection }) {
  if (!section.items?.length) return null;

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
}: {
  section: WikiSection;
  feature?: ReactNode;
}) {
  return (
    <section className="wiki-section" id={section.id} data-wiki-section>
      <header className="wiki-section__heading" data-wiki-reveal>
        <span>{section.index}</span>
        <div>
          <p className="wiki-kicker">{section.kicker}</p>
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

      {feature ? <div className="wiki-feature">{feature}</div> : null}
      <ItemCollection section={section} />

      {section.note ? (
        <aside className="wiki-boundary" data-wiki-reveal>
          <span>{section.note.label}</span>
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
  const sectionIds = useMemo(
    () => content.sections.map((section) => section.id),
    [content.sections],
  );
  const activeSection = useWikiPageMotion(
    rootRef,
    sectionIds,
    content.route,
  );

  return (
    <main
      ref={rootRef}
      className={`wiki-page wiki-page--${content.category} ${pageClassName}`}
      data-wiki-route={content.route}
    >
      <div className="wiki-page-progress" aria-hidden="true">
        <span />
      </div>

      <header className="wiki-hero">
        <div className="wiki-hero__copy" data-wiki-reveal>
          <p className="wiki-chapter">{content.chapter}</p>
          <p className="wiki-kicker">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="wiki-hero__lede">{content.lede}</p>
        </div>
        <aside className="wiki-hero__boundary" data-wiki-reveal>
          <span>Current evidence boundary</span>
          <p>{content.boundary}</p>
          <a className="wiki-begin" href={`#${sectionIds[0]}`}>
            Begin the record <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </header>

      {heroVisual ? (
        <div className="wiki-hero__visual" data-wiki-reveal>
          {heroVisual}
        </div>
      ) : null}

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

      <div className="wiki-record">
        <WikiLineSidebar
          activeId={activeSection}
          items={content.sections.map((section) => ({
            id: section.id,
            index: section.index,
            label: section.title,
          }))}
          links={content.links}
        />

        <article className="wiki-article">
          {content.sections.map((section) => (
            <WikiSectionBlock
              key={section.id}
              section={section}
              feature={features[section.id]}
            />
          ))}
        </article>
      </div>

      <section className="wiki-next" data-wiki-reveal>
        <div>
          <p className="wiki-kicker">Next record / {content.next.label}</p>
          <h2>{content.next.title}</h2>
          <p>Continue along the same evidence ribbon into the next record.</p>
        </div>
        <Link to={content.next.path} aria-label={`Open ${content.next.label}`}>
          <span>Open page</span>
          <b aria-hidden="true">↗</b>
        </Link>
      </section>
    </main>
  );
}
