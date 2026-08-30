import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { useWikiPageMotion } from "../../hooks/useWikiPageMotion";
import type {
  WikiContentBlock,
  WikiItem,
  WikiPageContent,
  WikiSection,
} from "./wikiPageTypes";
import { EngagementHeroVisual } from "./EngagementHeroVisual";
import { SubNav } from "./SubNav";
import { SUB_NAV_CONFIG } from "./subNavConfig";
import { WikiLineSidebar } from "./WikiLineSidebar";
import { WikiNextRecord } from "./WikiNextRecord";
import { WetLabHeroVisual } from "./WetLabHeroVisual";
import "../../styles/wiki-rebuild.css";
import "../../styles/wetlab-editorial.css";
import "../../styles/engagement-hero.css";

type FeatureMap = Partial<Record<string, ReactNode>>;

interface WikiScrollState {
  activeSection: string;
  activeSubsection: string;
}

/**
 * Scroll-spy state for feature components mounted inside `blocks`: lets a
 * feature (e.g. the SCALE chain) react to the subsection currently in view.
 */
const WikiPageScrollContext = createContext<WikiScrollState>({
  activeSection: "",
  activeSubsection: "",
});

// eslint-disable-next-line react-refresh/only-export-components
export function useWikiPageScroll() {
  return useContext(WikiPageScrollContext);
}

interface WikiPageProps {
  content: WikiPageContent;
  /** Only used for the "project" category; wet-lab / engagement auto-resolve. */
  heroVisual?: ReactNode;
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

function WikiBlock({
  block,
  features,
  sectionId,
  manuscript = false,
}: {
  block: WikiContentBlock;
  features: FeatureMap;
  sectionId: string;
  manuscript?: boolean;
}) {
  switch (block.type) {
    case "prose":
      return (
        <div className="wiki-prose" data-wiki-reveal>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      );
    case "prose-linked":
      return (
        <div className="wiki-prose" data-wiki-reveal>
          <p>
            {block.parts.map((part, index) =>
              part.target ? (
                <a
                  className="wiki-chapter-link wiki-chapter-link--inline"
                  href={`#${part.target}`}
                  key={`${part.target}-${index}`}
                  onClick={(event) => {
                    event.preventDefault();
                    document.getElementById(part.target!)?.scrollIntoView({
                      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                        ? "auto"
                        : "smooth",
                      block: "start",
                    });
                  }}
                >
                  {part.label}
                </a>
              ) : (
                <span key={`${part.text}-${index}`}>{part.text}</span>
              ),
            )}
          </p>
        </div>
      );
    case "figure":
      return (
        <figure className="wiki-figure" data-wiki-reveal>
          <img src={block.src} alt={block.alt} />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    case "image-placeholder":
      return (
        <figure className="wiki-figure wiki-figure--placeholder" data-wiki-reveal>
          <div className="wiki-image-placeholder" role="img" aria-label={`Image placeholder: ${block.filename}`}>
            <span>IMAGE PLACEHOLDER</span>
            <strong>{block.filename}</strong>
            <p>{block.instruction}</p>
          </div>
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    case "table":
      return (
        <div className="wiki-table-wrap" data-wiki-reveal role="region" aria-label={block.caption ?? "Hardware table"} tabIndex={0}>
          <table className="wiki-table">
            {block.caption ? <caption>{block.caption}</caption> : null}
            <thead>
              <tr>{block.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${rowIndex}-${row[0] ?? "row"}`}>
                  {row.map((cell, cellIndex) => cellIndex === 0 ? <th scope="row" key={`${rowIndex}-${cellIndex}`}>{cell}</th> : <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "mini-visual":
      return (
        <aside className={`wiki-mini-visual wiki-mini-visual--${block.tone ?? "navy"}`} data-wiki-reveal>
          <span>{block.label}</span>
          <strong>{block.title}</strong>
          <ol>
            {block.items.map((item, index) => <li key={`${index}-${item}`}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></li>)}
          </ol>
        </aside>
      );
    case "callout":
      return (
        <aside
          className={`wiki-callout wiki-callout--${block.tone ?? "neutral"}`}
          data-wiki-reveal
        >
          {block.label ? (
            <span className="wiki-callout__label">{block.label}</span>
          ) : null}
          <p>{block.body}</p>
        </aside>
      );
    case "subheading":
      return (
        <h3
          className="wiki-subheading"
          id={block.id}
          data-wiki-outline-anchor
          data-wiki-outline-parent={sectionId}
          data-wiki-reveal
        >
          {block.kicker ? (
            <span className="wiki-subheading__kicker">{block.kicker}</span>
          ) : null}
          <span className="wiki-subheading__title">{block.title}</span>
        </h3>
      );
    case "feature":
      return (
        <div className="wiki-feature" data-wiki-reveal>
          {features[block.key]}
        </div>
      );
    case "chapter-link":
      return (
        <a
          className="wiki-chapter-link"
          href={`#${block.target}`}
          data-wiki-reveal
          onClick={(event) => {
            event.preventDefault();
            document.getElementById(block.target)?.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
              block: "start",
            });
          }}
        >
          <span>{block.label}</span>
          <b aria-hidden="true">↘</b>
        </a>
      );
    case "note":
      return (
        <aside className="wiki-boundary" data-wiki-reveal>
          {!manuscript ? <span>{block.label}</span> : null}
          <p>{block.body}</p>
        </aside>
      );
    case "epigraph":
      return (
        <figure className="wiki-epigraph" data-wiki-reveal>
          <blockquote>“{block.quote}”</blockquote>
          <p className="wiki-epigraph__zh">{block.translationZh}</p>
          <figcaption>
            {block.attribution} · {block.attributionRole}
          </figcaption>
        </figure>
      );
    case "split":
      return (
        <div className="wiki-blocks--split" id={block.id}>
          <div className="wiki-blocks--split__prose">
            {block.prose.map((nested, index) => (
              <WikiBlock
                key={`${block.id}-prose-${index}`}
                block={nested}
                features={features}
                sectionId={sectionId}
                manuscript={manuscript}
              />
            ))}
          </div>
          <div className="wiki-blocks--split__aside">
            <WikiBlock
              block={block.aside}
              features={features}
              sectionId={sectionId}
              manuscript={manuscript}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}

function WikiSectionBlock({
  section,
  feature,
  features,
  manuscript = false,
}: {
  section: WikiSection;
  feature?: ReactNode;
  features: FeatureMap;
  manuscript?: boolean;
}) {
  const blocks = section.blocks?.length ? section.blocks : null;

  return (
    <section
      className="wiki-section"
      id={section.id}
      data-section-layout={section.layout ?? "editorial"}
      data-wiki-section
    >
      <header className="wiki-section__heading" data-wiki-reveal>
        <span className="wiki-section-number">
          {manuscript ? Number.parseInt(section.index, 10) : section.index}
        </span>
        <div>
          {!manuscript ? <p className="wiki-kicker">{section.kicker}</p> : null}
          <h2>{section.title}</h2>
          {section.summary ? (
            <p className="wiki-section__summary">{section.summary}</p>
          ) : null}
        </div>
      </header>

      {blocks ? (
        <div className="wiki-blocks">
          {blocks.map((block, index) => (
            <WikiBlock
              key={`${section.id}-${block.type}-${index}`}
              block={block}
              features={features}
              sectionId={section.id}
              manuscript={manuscript}
            />
          ))}
        </div>
      ) : (
        <>
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
        </>
      )}
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
  // Sustainability ships as category "report" but belongs to Engagement.
  const categoryKey =
    (content.category as string) === "report"
      ? "engagement"
      : content.category;
  const subNavConfig = SUB_NAV_CONFIG[categoryKey];
  const sectionIds = useMemo(
    () => content.sections.map((section) => section.id),
    [content.sections],
  );
  const { activeSection, activeSubsection } = useWikiPageMotion(
    rootRef,
    sectionIds,
    content.route,
  );
  const scrollContextValue = useMemo(
    () => ({ activeSection, activeSubsection }),
    [activeSection, activeSubsection],
  );
  const sidebarItems = content.sections.map((section) => {
    const subheadings = section.blocks
      ?.filter(
        (block): block is Extract<WikiContentBlock, { type: "subheading" }> =>
          block.type === "subheading",
      )
      .map((block) => ({
        id: block.id,
        index: block.index,
        label: block.title,
      }));
    return {
      id: section.id,
      index: section.index,
      label:
        section.navLabel ??
        (isEngagement ? section.kicker : section.title),
      meta: section.kicker,
      children: subheadings?.length ? subheadings : undefined,
    };
  });
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
          {!isManuscript && !content.heroMinimal ? (
            <p className="wiki-chapter">{content.chapter}</p>
          ) : null}
          {!isManuscript && !content.heroMinimal ? (
            <p className="wiki-kicker">{content.eyebrow}</p>
          ) : null}
          <h1>{content.title}</h1>
          <p className="wiki-hero__lede">{content.lede}</p>
          {!isManuscript && !content.heroMinimal ? (
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

      {subNavConfig ? (
        <SubNav
          activePath={content.route}
          ariaLabel={subNavConfig.ariaLabel}
          items={subNavConfig.items}
          themeColor={subNavConfig.themeColor}
        />
      ) : null}

      {!isManuscript && !content.heroMinimal ? (
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
          activeChildId={activeSubsection}
          items={sidebarItems}
          links={content.links}
          minimal={isManuscript}
        />

        <WikiPageScrollContext.Provider value={scrollContextValue}>
          <article className="wiki-article">
            {content.sections.map((section) => (
              <WikiSectionBlock
                key={section.id}
                section={section}
                feature={features[section.id]}
                features={features}
                manuscript={isManuscript}
              />
            ))}
          </article>
        </WikiPageScrollContext.Provider>
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
