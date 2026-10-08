import {
  createContext,
  memo,
  useContext,
  useEffect,
  useId,
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
import { linkify, renderInlineFormatting } from "./proseInline";
import { WikiLineSidebar, type WikiLineSidebarVariant } from "./WikiLineSidebar";
import { WikiNextRecord } from "./WikiNextRecord";
import { WikiProtocolModal } from "./WikiProtocolViewer";
import { PageImagePreloads } from "../common/PageImagePreloads";
import { wikiPageImages } from "./wikiPageImages";
import { experimentProtocolImage } from "../../data/wet-lab/experimentProtocolPages";
import type { ExperimentProtocolPair } from "../../data/wet-lab/experimentProtocolPages";
import "../../styles/wiki-rebuild.css";
import "../../styles/wetlab-editorial.css";
import "../../styles/wiki-route-skin.css";
import "../../styles/features/experiments-panels.css";

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
 *
 * Image readiness is part of this template: hero and every content figure
 * preload before the shared loading cover leaves. Interaction-only images
 * use `preloadImages` or the shared `PageImagePreloads` in their Feature.
 */

type FeatureMap = Partial<Record<string, ReactNode>>;

/** Mobile breakpoint; must match the `@media (max-width: 980px)` skin block. */
const COMPACT_QUERY = "(max-width: 980px)";

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

/**
 * Optional per-page inline formatter for prose paragraphs (e.g. turning
 * "(Sung et al. 2026)" into citation links). Receives the raw paragraph and
 * the default `**bold**` formatter; when omitted every route page keeps its
 * current rendering unchanged.
 */
export type InlineRenderer = (
  text: string,
  fallback: (t: string) => ReactNode,
) => ReactNode;

const InlineRendererContext = createContext<InlineRenderer | null>(null);

interface WikiRoutePageProps {
  content: WikiPageContent;
  /** Per-page full-bleed hero art; resolved by the module's asset map. */
  heroImage?: string;
  /**
   * Small images used only by an inactive tab or dialog. Hero and content
   * figures are collected automatically; do not list PDF or game resources.
   */
  preloadImages?: readonly string[];
  features?: FeatureMap;
  /** Module scope class that carries the palette, e.g. `wiki-page--project`. */
  pageClassName?: string;
  /** `data-route-theme` value for QA and module-scoped overrides. */
  theme?: string;
  /** Opt into the document-flow reader used by pages with long visual panels. */
  enableWideFlow?: boolean;
  /**
   * Library layout variant: render without the TOC card and let the reader frame
   * take the released width. Used by `/games`.
   */
  hideOutline?: boolean;
  /** When true, omits visual title/lede text inside the hero banner. */
  hideHeroCopy?: boolean;
  /** When true, subheadings within blocks are collapsed into accordion cards */
  collapsibleSubheadings?: boolean;
  /** Optional protocol pairs metadata to enable TOC preview and modal */
  protocolPairs?: ExperimentProtocolPair[];
  /**
   * Optional inline formatter for prose paragraphs (citation links on the
   * Description page). Defaults to plain `**bold**` rendering.
   */
  inlineRenderer?: InlineRenderer;
  /**
   * Deepest subheading level listed in the TOC, counted by index segments
   * ("4.1" = 2, "4.1.1" = 3). Deeper subheadings stay on the page and in the
   * scroll spy; the page can surface them elsewhere (e.g. a section rail).
   */
  outlineDepth?: number;
  /**
   * Replaces the default line sidebar with a page-specific navigation object.
   *
   * Generic extension point: the slot receives the live scroll-spy state and
   * the reader frame ref, so an alternative outline (e.g. the Engineering
   * page's concentric TIME dial) can drive the same article without the
   * template naming any module. Ignored below 980px, where the compact drawer
   * keeps the standard sidebar so the outline stays reachable on a phone.
   */
  outlineSlot?: (context: {
    activeSection: string;
    activeSubsection: string;
    scrollContainerRef: RefObject<HTMLDivElement | null>;
  }) => ReactNode;
  /** Optional interactive feature or section mounted right between hero and reader track. */
  leadSection?: ReactNode;
  /** Desktop TOC look ("line" | "ribbon" | "marker"); the mobile drawer is unchanged. */
  outlineVariant?: WikiLineSidebarVariant;
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

                  <p>{renderInlineFormatting(item.body)}</p>

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

function renderSubheadingTitle(title: string) {
  const match = title.match(/[:：]/);
  if (!match || match.index === undefined) {
    return title;
  }
  const lead = title.slice(0, match.index + 1);
  const sub = title.slice(match.index + 1).trim();
  return (
    <>
      <span className="wiki-subheading-line wiki-subheading-line--lead">
        {lead}
      </span>
      {sub ? (
        <span className="wiki-subheading-line wiki-subheading-line--sub">
          {sub}
        </span>
      ) : null}
    </>
  );
}

/**
 * Table cell content: `**bold**` plus the source manuscripts' literal `<br>`
 * line breaks.
 *
 * Both table blocks use this — `table` as well as `parts-table`. The plain
 * `table` block used to emit cells and captions as raw strings, which printed
 * the data layer's `**raw**` markers literally; no page had ever put emphasis in
 * a cell, so the two blocks had quietly drifted apart. Rendering both through
 * the same helper keeps them identical, and for every existing page (no `**`, no
 * `<br>` in any cell or caption) the output is unchanged.
 */
function renderTableCell(cell: string): ReactNode {
  if (!cell.includes("<br")) return renderInlineFormatting(cell);
  const lines = cell.split(/<br\s*\/?>/);
  return lines.map((line, index) => (
    <span key={index}>
      {renderInlineFormatting(line)}
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

function splitNoteContent(body: string): string[] {
  if (!body) return [];
  if (body.includes("\n")) {
    return body
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (/1\.\s+.*2\.\s+/.test(body)) {
    return body
      .split(/(?=\b\d+\.\s+)/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [body.trim()];
}

function renderProseParagraphs(
  paragraphs: string[],
  inline: InlineRenderer | null = null,
): ReactNode[] {
  const elements: ReactNode[] = [];
  let stepBuffer: Array<{ num: string; text: string }> = [];

  const flushSteps = (keyPrefix: string) => {
    if (stepBuffer.length === 0) return;
    const stepsToRender = [...stepBuffer];
    stepBuffer = [];
    elements.push(
      <ol className="wiki-protocol-step-list" key={`${keyPrefix}-step-list`}>
        {stepsToRender.map((step) => (
          <li key={step.num} className="wiki-protocol-step-item">
            <span className="wiki-protocol-step-badge">{step.num}</span>
            <div className="wiki-protocol-step-text">
              {renderInlineFormatting(step.text)}
            </div>
          </li>
        ))}
      </ol>,
    );
  };

  /**
   * Linkify after `**bold**` so the emphasis split cannot break a URL apart.
   * Inline renderers receive `linkify` as their fallback — it delegates to
   * `renderInlineFormatting` for any text without a `](`, so a citation layer
   * inherits plain emphasis rendering and gains Markdown links for free.
   */
  const prose = (text: string): ReactNode =>
    inline ? inline(text, linkify) : linkify(text);

  paragraphs.forEach((paragraph, idx) => {
    const stepMatch = paragraph.match(/^\s*(\d+)[.、]\s+(.*)$/s);
    if (stepMatch) {
      stepBuffer.push({ num: stepMatch[1], text: stepMatch[2] });
      return;
    }

    flushSteps(`flush-${idx}`);

    const trimmed = paragraph.trim();
    if (
      trimmed === "**Step-by-Step Instructions**" ||
      trimmed === "Step-by-Step Instructions"
    ) {
      elements.push(
        <div
          className="wiki-protocol-step-section-heading"
          key={`step-main-${idx}`}
        >
          <span className="wiki-protocol-step-section-heading__badge">SOP</span>
          <h4 className="wiki-protocol-step-section-heading__title">
            Step-by-Step Instructions
          </h4>
        </div>,
      );
      return;
    }

    const subheadMatch = paragraph.match(/^\*\*(.+?)\*\*$/);
    if (subheadMatch) {
      elements.push(
        <div className="wiki-protocol-step-subheading" key={`step-sub-${idx}`}>
          {subheadMatch[1]}
        </div>,
      );
      return;
    }

    elements.push(<p key={`p-${idx}`}>{prose(paragraph)}</p>);
  });

  flushSteps("flush-end");
  return elements;
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
  const inline = useContext(InlineRendererContext);

  const scrollToTarget = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    scrollReaderToTarget(target, scrollContainerRef?.current, "instant");
  };

  switch (block.type) {
    case "prose":
      return (
        <div className="wiki-prose" data-wiki-reveal>
          {renderProseParagraphs(block.paragraphs, inline)}
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
                <span key={`${part.text}-${index}`}>
                  {renderInlineFormatting(part.text)}
                </span>
              ),
            )}
          </p>
        </div>
      );
    case "figure":
      return (
        <figure className="wiki-figure" data-wiki-reveal>
          <img
            src={block.src}
            alt={block.alt}
            loading="eager"
            decoding="async"
          />
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
            {block.caption ? (
              <caption>{renderInlineFormatting(block.caption)}</caption>
            ) : null}
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th scope="col" key={header}>
                    {renderInlineFormatting(header)}
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
                        {renderTableCell(cell)}
                      </th>
                    ) : (
                      <td key={`${rowIndex}-${cellIndex}`}>
                        {renderTableCell(cell)}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "parts-table":
      return (
        <div
          className="wiki-table-wrap wiki-table-wrap--parts"
          data-wiki-reveal
          role="region"
          aria-label={block.caption ?? "Table"}
          tabIndex={0}
        >
          <table className="wiki-table wiki-table--parts">
            {block.caption ? (
              <caption>{renderInlineFormatting(block.caption)}</caption>
            ) : null}
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th scope="col" key={header}>
                    {renderInlineFormatting(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.name}>
                  <th scope="row">
                    {/*
                     * The part name IS the link. A Registry accession is a
                     * hyperlink, not a name with its URL printed beside it —
                     * printing the address adds a line of machine text to every
                     * row and nothing a reader needs.
                     */}
                    <a
                      className="wiki-table__part-link"
                      href={row.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {renderInlineFormatting(row.name)}
                    </a>
                  </th>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={`${row.name}-${cellIndex}`}>
                      {renderTableCell(cell)}
                    </td>
                  ))}
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
          {block.label ? <span>{block.label}</span> : null}
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
          <p>{renderInlineFormatting(block.body)}</p>
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
          <span className="wiki-subheading__title">
            {renderSubheadingTitle(block.title)}
          </span>
        </h3>
      );
    case "feature":
      return (
        <div className="wiki-feature" data-wiki-reveal>
          {features[block.key]}
        </div>
      );
    case "dbtl":
      return (
        <div
          className="wiki-dbtl"
          id={block.id}
          data-wiki-dbtl
          data-wiki-reveal
        >
          <ol className="wiki-dbtl__track">
            {block.stages.map((stage, stageIndex) => (
              <li
                className="wiki-dbtl__stage"
                data-dbtl-stage={stage.key}
                data-dbtl-index={stageIndex}
                key={stage.key}
              >
                <h4 className="wiki-dbtl__stage-title">
                  <span className="wiki-dbtl__stage-key" aria-hidden="true">
                    {stage.title}
                  </span>
                  <span className="wiki-dbtl__stage-rule" aria-hidden="true" />
                </h4>
                <div className="wiki-dbtl__stage-body">
                  {stage.blocks.map((nested, index) => (
                    <RouteBlock
                      key={`${block.id}-${stage.key}-${nested.type}-${index}`}
                      block={nested}
                      features={features}
                      sectionId={sectionId}
                      scrollContainerRef={scrollContainerRef}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      );
    case "references":
      return (
        <div className="wiki-references" data-wiki-reveal>
          <ol className="wiki-references__list">
            {block.items.map((entry, index) => (
              <li
                className="wiki-references__item"
                key={`${entry.label}-${index}`}
              >
                <span className="wiki-references__index" aria-hidden="true">
                  [{index + 1}]
                </span>
                <span className="wiki-references__body">
                  <span>{entry.text}</span>
                  {entry.href ? (
                    <a
                      className="wiki-references__link"
                      href={entry.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {entry.hrefLabel ?? "Source"}
                    </a>
                  ) : null}
                </span>
              </li>
            ))}
          </ol>
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
    case "note": {
      const noteLines = splitNoteContent(block.body);
      return (
        <aside className="wiki-boundary" data-wiki-reveal>
          {block.label ? (
            <span className="wiki-boundary__label">{block.label}</span>
          ) : null}
          <div className="wiki-boundary__body">
            {noteLines.map((line, index) => (
              <p key={index}>{renderInlineFormatting(line)}</p>
            ))}
          </div>
        </aside>
      );
    }
    case "epigraph":
      return (
        <figure className="wiki-epigraph" data-wiki-reveal>
          <blockquote>“{renderInlineFormatting(block.quote)}”</blockquote>
          {block.translationZh ? (
            <p className="wiki-epigraph__zh">
              {renderInlineFormatting(block.translationZh)}
            </p>
          ) : null}
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

function renderSectionTitle(title: string) {
  const match = title.match(/[:：]/);
  if (!match || match.index === undefined) {
    return (
      <span className="wiki-heading-line">
        <span className="wiki-heading-marker">{title}</span>
      </span>
    );
  }
  const lead = title.slice(0, match.index + 1);
  const sub = title.slice(match.index + 1).trim();
  return (
    <>
      <span className="wiki-heading-line wiki-heading-line--lead">
        <span className="wiki-heading-marker wiki-heading-marker--lead">
          {lead}
        </span>
      </span>
      {sub ? (
        <span className="wiki-heading-line wiki-heading-line--sub">
          <span className="wiki-heading-marker wiki-heading-marker--sub">
            {sub}
          </span>
        </span>
      ) : null}
    </>
  );
}

function ProtocolSubheadingDrawer({
  subheading,
  blocks,
  isOpen,
  onToggle,
  features,
  sectionId,
  scrollContainerRef,
}: {
  subheading: Extract<WikiContentBlock, { type: "subheading" }>;
  blocks: WikiContentBlock[];
  isOpen: boolean;
  onToggle: () => void;
  features: FeatureMap;
  sectionId: string;
  scrollContainerRef?: RefObject<HTMLElement | null>;
}) {
  const cleanTitle = subheading.title
    .replace(new RegExp(`^${subheading.index}\\s*`), "")
    .trim();

  return (
    <div
      className={`wiki-protocol-drawer ${isOpen ? "is-open" : ""}`}
      id={subheading.id}
      data-wiki-outline-anchor
      data-wiki-outline-parent={sectionId}
    >
      <button
        type="button"
        className="wiki-protocol-drawer__header"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <div className="wiki-protocol-drawer__title-row">
          <span className="wiki-protocol-drawer__index-pill">
            {subheading.index}
          </span>
          <span className="wiki-protocol-drawer__title">{cleanTitle}</span>
        </div>
        <span className="wiki-protocol-drawer__chevron" aria-hidden="true">
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="wiki-protocol-drawer__body">
          {blocks.map((block, idx) => (
            <RouteBlock
              key={`${subheading.id}-${block.type}-${idx}`}
              block={block}
              features={features}
              sectionId={sectionId}
              scrollContainerRef={scrollContainerRef}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function RouteSection({
  section,
  feature,
  features,
  scrollContainerRef,
  collapsibleSubheadings = false,
  openSubheadingIds,
  onToggleSubheading,
}: {
  section: WikiSection;
  feature?: ReactNode;
  features: FeatureMap;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  collapsibleSubheadings?: boolean;
  openSubheadingIds?: Set<string>;
  onToggleSubheading?: (id: string) => void;
}) {
  const blocks = section.blocks?.length ? section.blocks : null;

  const firstSubIndex = useMemo(
    () => (blocks ? blocks.findIndex((b) => b.type === "subheading") : -1),
    [blocks],
  );

  const shouldCollapseSubheadings = Boolean(
    collapsibleSubheadings && blocks && firstSubIndex !== -1,
  );

  const { overviewBlocks, subheadingGroups } = useMemo(() => {
    if (!shouldCollapseSubheadings || !blocks) {
      return { overviewBlocks: [], subheadingGroups: [] };
    }
    const overview = blocks.slice(0, firstSubIndex);
    const groups: Array<{
      subheading: Extract<WikiContentBlock, { type: "subheading" }>;
      blocks: WikiContentBlock[];
    }> = [];

    let currentGroup: {
      subheading: Extract<WikiContentBlock, { type: "subheading" }>;
      blocks: WikiContentBlock[];
    } | null = null;

    for (let i = firstSubIndex; i < blocks.length; i++) {
      const block = blocks[i];
      if (block.type === "subheading") {
        if (currentGroup) groups.push(currentGroup);
        currentGroup = { subheading: block, blocks: [] };
      } else if (currentGroup) {
        currentGroup.blocks.push(block);
      }
    }
    if (currentGroup) groups.push(currentGroup);

    return { overviewBlocks: overview, subheadingGroups: groups };
  }, [blocks, firstSubIndex, shouldCollapseSubheadings]);

  return (
    <section
      className="wiki-section"
      id={section.id}
      data-section-layout={section.layout ?? "editorial"}
      data-wiki-section
    >
      {section.masthead ? (
        <figure className="wiki-masthead">
          <img
            className="wiki-masthead__image"
            src={section.masthead.image}
            alt={section.masthead.imageAlt}
            decoding="async"
          />
          <figcaption className="wiki-masthead__epigraph">
            <blockquote>{renderInlineFormatting(section.masthead.quote)}</blockquote>
            <cite>
              <strong>{section.masthead.attribution}</strong>
              <span>{section.masthead.attributionRole}</span>
            </cite>
          </figcaption>
        </figure>
      ) : null}
      <header
        className={`wiki-section__heading${
          section.hideSectionNumber ? " wiki-section__heading--unnumbered" : ""
        }`}
        data-wiki-reveal
      >
        {section.hideSectionNumber ? null : (
          <span className="wiki-section-number" aria-hidden="true">
            {String(Number.parseInt(section.index, 10)).padStart(2, "0")}
          </span>
        )}
        <div className="wiki-section__heading-body">
          <h2>{renderSectionTitle(section.title)}</h2>
        </div>
      </header>

      {blocks ? (
        shouldCollapseSubheadings ? (
          <div className="wiki-blocks">
            {overviewBlocks.map((block, index) => (
              <RouteBlock
                key={`${section.id}-${block.type}-${index}`}
                block={block}
                features={features}
                sectionId={section.id}
                scrollContainerRef={scrollContainerRef}
              />
            ))}

            {subheadingGroups.map((group) => (
              <ProtocolSubheadingDrawer
                key={group.subheading.id}
                subheading={group.subheading}
                blocks={group.blocks}
                isOpen={openSubheadingIds?.has(group.subheading.id) ?? false}
                onToggle={() => onToggleSubheading?.(group.subheading.id)}
                features={features}
                sectionId={section.id}
                scrollContainerRef={scrollContainerRef}
              />
            ))}
          </div>
        ) : (
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
        )
      ) : (
        <>
          {section.body?.length ? (
            <div className="wiki-prose" data-wiki-reveal>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{renderInlineFormatting(paragraph)}</p>
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
              {section.note.label ? (
                <span className="wiki-boundary__label">
                  {section.note.label}
                </span>
              ) : null}
              <div className="wiki-boundary__body">
                {splitNoteContent(section.note.body).map((line, index) => (
                  <p key={index}>{renderInlineFormatting(line)}</p>
                ))}
              </div>
            </aside>
          ) : null}
        </>
      )}
    </section>
  );
}

const MemoRouteSection = memo(RouteSection);

export function WikiRoutePage({
  content,
  heroImage,
  preloadImages,
  features = {},
  pageClassName = "",
  theme,
  enableWideFlow = false,
  hideOutline = false,
  hideHeroCopy = false,
  collapsibleSubheadings = false,
  protocolPairs,
  inlineRenderer,
  outlineDepth,
  outlineSlot,
  leadSection,
  outlineVariant,
}: WikiRoutePageProps) {
  const imageSources = useMemo(
    () => [
      heroImage,
      ...wikiPageImages(content),
      ...(preloadImages ?? []),
      ...(protocolPairs ?? []).flatMap((pair) => [
        experimentProtocolImage(pair.flowPage),
        experimentProtocolImage(pair.inventoryPage),
      ]),
    ],
    [content, heroImage, preloadImages, protocolPairs],
  );
  const rootRef = useRef<HTMLElement>(null);
  const interfaceRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeProtocolModal, setActiveProtocolModal] = useState<{
    pair: ExperimentProtocolPair;
    initialTab?: "flow" | "inventory";
  } | null>(null);

  const [openSubheadingIds, setOpenSubheadingIds] = useState<Set<string>>(
    () => new Set(),
  );

  const toggleSubheading = (id: string) => {
    setOpenSubheadingIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const openSubheading = (id: string) => {
    setOpenSubheadingIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && hash.startsWith("exp-")) {
        openSubheading(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const wideFlow =
    enableWideFlow &&
    window.matchMedia("(min-width: 1200px) and (min-height: 700px)").matches;

  // Mobile (≤980px, same breakpoint as the skin): plain document flow instead
  // of the pinned reader, and the TOC becomes an off-canvas drawer.
  const [compact, setCompact] = useState(
    () => window.matchMedia(COMPACT_QUERY).matches,
  );
  const [tocOpen, setTocOpen] = useState(false);
  const outlineId = useId();
  const tocTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = window.matchMedia(COMPACT_QUERY);
    const onChange = () => setCompact(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const drawerOpen = compact && tocOpen;

  useEffect(() => {
    if (!drawerOpen) return;
    const trigger = tocTriggerRef.current;
    const outline = document.getElementById(outlineId);
    outline?.querySelector<HTMLElement>(".wiki-outline__close")?.focus({
      preventScroll: true,
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTocOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus({ preventScroll: true });
    };
  }, [drawerOpen, outlineId]);

  const documentFlow = wideFlow || compact;
  const drawerScrollBehavior: ScrollBehavior = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
    ? "instant"
    : "smooth";
  const sectionIds = useMemo(
    () => content.sections.map((section) => section.id),
    [content.sections],
  );
  const { activeSection, activeSubsection } = useWikiPageMotion(
    rootRef,
    sectionIds,
    scrollRef,
    content.route,
    !documentFlow,
    wideFlow,
  );
  useRouteReaderScroll(!documentFlow, interfaceRef, scrollRef);

  const scrollContextValue = useMemo(
    () => ({ activeSection, activeSubsection }),
    [activeSection, activeSubsection],
  );
  const sidebarItems = content.sections.map((section) => {
    const subheadings = section.blocks
      ?.filter(
        (block): block is Extract<WikiContentBlock, { type: "subheading" }> =>
          block.type === "subheading" &&
          (!outlineDepth || block.index.split(".").length <= outlineDepth),
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
      } ${drawerOpen ? "is-toc-open" : ""} ${pageClassName}`}
      data-wiki-route={content.route}
      data-route-theme={theme}
      data-active-section={activeSection}
    >
      <PageImagePreloads sources={imageSources} />
      <div className="wiki-page-progress" aria-hidden="true">
        <span />
      </div>

      <header className="wiki-hero" style={heroStyle}>
        {!hideHeroCopy ? (
          <div className="wiki-hero__copy" data-wiki-reveal>
            <h1>{content.title}</h1>
            <p className="wiki-hero__lede">{content.lede}</p>
          </div>
        ) : (
          <h1 className="wiki-hero__sr-only">{content.title}</h1>
        )}
      </header>

      {leadSection ? (
        <section className="wiki-lead-section-slot" data-wiki-reveal>
          {leadSection}
        </section>
      ) : null}

      <div className="wiki-reader-track">
        <div
          ref={interfaceRef}
          className={`wiki-record${hideOutline ? " wiki-record--full" : ""}`}
        >
          {hideOutline ? null : outlineSlot && !compact ? (
            <div className="wiki-outline-slot">
              {outlineSlot({
                activeSection,
                activeSubsection,
                scrollContainerRef: scrollRef,
              })}
            </div>
          ) : (
            <WikiLineSidebar
              activeId={activeSection}
              activeChildId={activeSubsection}
              items={sidebarItems}
              links={content.links}
              minimal
              scrollContainerRef={scrollRef}
              protocolPairs={protocolPairs}
              onOpenProtocolModal={(pair, tab) =>
                setActiveProtocolModal({ pair, initialTab: tab })
              }
              onSelectSubheading={openSubheading}
              {...(compact
                ? {
                    id: outlineId,
                    scrollBehavior: drawerScrollBehavior,
                    onRequestClose: () => setTocOpen(false),
                  }
                : { variant: outlineVariant })}
            />
          )}

          {compact && !hideOutline ? (
            <>
              <button
                ref={tocTriggerRef}
                type="button"
                className="wiki-toc-trigger"
                aria-controls={outlineId}
                aria-expanded={tocOpen}
                aria-label="Open table of contents"
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

          <WikiPageScrollContext.Provider value={scrollContextValue}>
            <div className="route-frame">
              <div
                ref={scrollRef}
                className="route-frame__scroll"
                tabIndex={0}
                aria-label={`${content.title} article`}
              >
                <article className="wiki-article">
                  <InlineRendererContext.Provider
                    value={inlineRenderer ?? null}
                  >
                    {content.sections.map((section) => (
                      <MemoRouteSection
                        key={section.id}
                        section={section}
                        feature={features[section.id]}
                        features={features}
                        scrollContainerRef={scrollRef}
                        collapsibleSubheadings={collapsibleSubheadings}
                        openSubheadingIds={openSubheadingIds}
                        onToggleSubheading={toggleSubheading}
                      />
                    ))}
                  </InlineRendererContext.Provider>
                </article>
              </div>
            </div>
          </WikiPageScrollContext.Provider>
        </div>
      </div>

      <WikiNextRecord {...content.next} />

      <WikiProtocolModal
        pair={activeProtocolModal?.pair ?? null}
        initialTab={activeProtocolModal?.initialTab}
        onClose={() => setActiveProtocolModal(null)}
      />
    </main>
  );
}
