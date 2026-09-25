import {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
  type ReactNode,
} from "react";
import { useWikiPageMotion } from "../../hooks/useWikiPageMotion";
import { useRouteReaderScroll } from "../../hooks/useRouteReaderScroll";
import { scrollReaderToTarget } from "../../utils";
import type {
  WikiContentBlock,
  WikiItem,
  WikiPageContent,
  WikiSection,
} from "./wikiPageTypes";
import { WikiLineSidebar } from "./WikiLineSidebar";
import { WikiNextRecord } from "./WikiNextRecord";
import "../../styles/wiki-rebuild.css";
import "../../styles/wetlab-editorial.css";
import "../../styles/wiki-route-skin.css";

/**
 * Reusable reader-route page template (hero → mat → closing prompt).
 *
 * This is the abstract half of the new wiki format: identical structure, type
 * scale, spacing, sidebar, vine frame, reveal animation and scroll routing for
 * every module. Everything visual comes from `wiki-route-skin.css` (structure)
 * plus one palette file per module that only sets three hex values.
 *
 * A module page is therefore:
 *
 *   <WikiRoutePage
 *     content={descriptionPage}
 *     heroImage={getProjectHeroImage("/description")}
 *     theme="project"
 *     pageClassName="wiki-page--project"
 *     features={{ ... }}
 *   />
 *
 * Wet Lab records use this component with their own three-token palette;
 * nothing in the route structure changes between modules.
 */

type FeatureMap = Partial<Record<string, ReactNode>>;

interface WikiScrollState {
  activeSection: string;
  activeSubsection: string;
}

/**
 * Scroll-spy state for feature components mounted inside `blocks`: lets a
 * feature react to the subsection currently in view.
 */
const WikiPageScrollContext = createContext<WikiScrollState>({
  activeSection: "",
  activeSubsection: "",
});

// eslint-disable-next-line react-refresh/only-export-components
export function useRoutePageScroll() {
  return useContext(WikiPageScrollContext);
}

interface WikiRoutePageProps {
  content: WikiPageContent;
  /** Per-page full-bleed hero art; resolved by the module's asset map. */
  heroImage?: string;
  features?: FeatureMap;
  /** Module scope class that carries the palette, e.g. `wiki-page--project`. */
  pageClassName?: string;
  /** `data-route-theme` value for QA and module-scoped overrides. */
  theme?: string;
  /** Opt into the document-flow reader used by pages with long visual panels. */
  enableWideFlow?: boolean;
  /**
   * Library layout variant: render without the TOC card and let the reader frame
   * take the released width. Used by `/games` and the `/protocol` library.
   */
  hideOutline?: boolean;
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
                  {/*
                   * Format note: the Wet Lab accordion shows only the item
                   * title, because its own `label` duplicated the title. The
                   * Project copy uses `label` as the short, distinct name of
                   * the step / gate (Select, G–01, Cycle 01 · Topology…), so
                   * the label and its status chip are surfaced as a mono meta
                   * line inside the same accordion body — same container, same
                   * type scale, no copy dropped.
                   */}
                  {item.label || item.status ? (
                    <p className="wiki-manuscript-list__meta">
                      {item.label ? <span>{item.label}</span> : null}
                      <Status item={item} />
                    </p>
                  ) : null}

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

function RouteBlock({
  block,
  features,
  sectionId,
  scrollContainerRef,
}: {
  block: WikiContentBlock;
  features: FeatureMap;
  sectionId: string;
  scrollContainerRef?: RefObject<HTMLElement | null>;
}) {
  const scrollToTarget = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    scrollReaderToTarget(target, scrollContainerRef?.current, "instant");
  };

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
                    scrollToTarget(part.target!);
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
        <figure
          className="wiki-figure wiki-figure--placeholder"
          data-wiki-reveal
        >
          <div
            className="wiki-image-placeholder"
            role="img"
            aria-label={`Image placeholder: ${block.filename}`}
          >
            <span>IMAGE PLACEHOLDER</span>
            <strong>{block.filename}</strong>
            <p>{block.instruction}</p>
          </div>
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    case "table":
      return (
        <div
          className="wiki-table-wrap"
          data-wiki-reveal
          role="region"
          aria-label={block.caption ?? "Table"}
          tabIndex={0}
        >
          <table className="wiki-table">
            {block.caption ? <caption>{block.caption}</caption> : null}
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th scope="col" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${rowIndex}-${row[0] ?? "row"}`}>
                  {row.map((cell, cellIndex) =>
                    cellIndex === 0 ? (
                      <th scope="row" key={`${rowIndex}-${cellIndex}`}>
                        {cell}
                      </th>
                    ) : (
                      <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "mini-visual":
      return (
        <aside
          className={`wiki-mini-visual wiki-mini-visual--${block.tone ?? "navy"}`}
          data-wiki-reveal
        >
          <span>{block.label}</span>
          <strong>{block.title}</strong>
          <ol>
            {block.items.map((item, index) => (
              <li key={`${index}-${item}`}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <span>{item}</span>
              </li>
            ))}
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
            scrollToTarget(block.target);
          }}
        >
          <span>{block.label}</span>
          <b aria-hidden="true">↘</b>
        </a>
      );
    case "note":
      return (
        <aside className="wiki-boundary" data-wiki-reveal>
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
              <RouteBlock
                key={`${block.id}-prose-${index}`}
                block={nested}
                features={features}
                sectionId={sectionId}
                scrollContainerRef={scrollContainerRef}
              />
            ))}
          </div>
          <div className="wiki-blocks--split__aside">
            <RouteBlock
              block={block.aside}
              features={features}
              sectionId={sectionId}
              scrollContainerRef={scrollContainerRef}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}

function RouteSection({
  section,
  feature,
  features,
  scrollContainerRef,
}: {
  section: WikiSection;
  feature?: ReactNode;
  features: FeatureMap;
  scrollContainerRef?: RefObject<HTMLElement | null>;
}) {
  const blocks = section.blocks?.length ? section.blocks : null;

  return (
    <section
      className="wiki-section"
      id={section.id}
      data-section-layout={section.layout ?? "editorial"}
      data-wiki-section
    >
      <header
        className={`wiki-section__heading${
          section.hideSectionNumber ? " wiki-section__heading--unnumbered" : ""
        }`}
        data-wiki-reveal
      >
        {section.hideSectionNumber ? null : (
          <span className="wiki-section-number">
            {Number.parseInt(section.index, 10)}
          </span>
        )}
        <div>
          {/*
           * The Wet Lab manuscript heading hides the section kicker because
           * its kickers restated the title. The Project copy carries distinct
           * section labels here, so the kicker uses its existing slot (the
           * same `.wiki-kicker` line the non-manuscript pages render) rather
           * than dropping the string.
           */}
          {section.kicker ? (
            <p className="wiki-kicker">{section.kicker}</p>
          ) : null}
          <h2>{section.title}</h2>
          {section.summary ? (
            <p className="wiki-section__summary">{section.summary}</p>
          ) : null}
        </div>
      </header>

      {blocks ? (
        <div className="wiki-blocks">
          {blocks.map((block, index) => (
            <RouteBlock
              key={`${section.id}-${block.type}-${index}`}
              block={block}
              features={features}
              sectionId={section.id}
              scrollContainerRef={scrollContainerRef}
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

          <ItemCollection section={section} />

          {section.note ? (
            <aside className="wiki-boundary" data-wiki-reveal>
              {/* Note labels carry the record id (DR–01, Release gate…) and are
                  hidden by the Wet Lab manuscript skin; the slot is kept. */}
              {section.note.label ? <span>{section.note.label}</span> : null}
              <p>{section.note.body}</p>
            </aside>
          ) : null}
        </>
      )}
    </section>
  );
}

export function WikiRoutePage({
  content,
  heroImage,
  features = {},
  pageClassName = "",
  theme,
  enableWideFlow = false,
  hideOutline = false,
}: WikiRoutePageProps) {
  const rootRef = useRef<HTMLElement>(null);
  const interfaceRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wideFlow =
    enableWideFlow &&
    window.matchMedia("(min-width: 1200px) and (min-height: 700px)").matches;
  const sectionIds = useMemo(
    () => content.sections.map((section) => section.id),
    [content.sections],
  );
  const { activeSection, activeSubsection } = useWikiPageMotion(
    rootRef,
    sectionIds,
    scrollRef,
    content.route,
    !wideFlow,
    wideFlow,
  );
  useRouteReaderScroll(!wideFlow, interfaceRef, scrollRef);

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
      label: section.navLabel ?? section.title,
      meta: section.kicker,
      children: subheadings?.length ? subheadings : undefined,
    };
  });
  const heroStyle = heroImage
    ? ({ "--route-hero-image": `url(${heroImage})` } as CSSProperties)
    : undefined;

  return (
    <main
      ref={rootRef}
      className={`wiki-page wiki-page--route wiki-page--manuscript route--reader ${
        wideFlow ? "route--wide-flow" : ""
      } ${pageClassName}`}
      data-wiki-route={content.route}
      data-route-theme={theme}
      data-active-section={activeSection}
    >
      <div className="wiki-page-progress" aria-hidden="true">
        <span />
      </div>

      <header className="wiki-hero" style={heroStyle}>
        <div className="wiki-hero__copy" data-wiki-reveal>
          <h1>{content.title}</h1>
          <p className="wiki-hero__lede">{content.lede}</p>
        </div>
      </header>

      <div className="wiki-reader-track">
        <div
          ref={interfaceRef}
          className={`wiki-record${hideOutline ? " wiki-record--full" : ""}`}
        >
          {hideOutline ? null : (
            <WikiLineSidebar
              activeId={activeSection}
              activeChildId={activeSubsection}
              items={sidebarItems}
              links={content.links}
              minimal
              scrollContainerRef={scrollRef}
            />
          )}

          <WikiPageScrollContext.Provider value={scrollContextValue}>
            <div className="route-frame">
              <div
                ref={scrollRef}
                className="route-frame__scroll"
                tabIndex={0}
                aria-label={`${content.title} article`}
              >
                <article className="wiki-article">
                  {content.sections.map((section) => (
                    <RouteSection
                      key={section.id}
                      section={section}
                      feature={features[section.id]}
                      features={features}
                      scrollContainerRef={scrollRef}
                    />
                  ))}
                </article>
              </div>
            </div>
          </WikiPageScrollContext.Provider>
        </div>
      </div>

      <WikiNextRecord {...content.next} />
    </main>
  );
}
