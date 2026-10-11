/* eslint-disable react-refresh/only-export-components */
/**
 * Results page — feature layer.
 *
 * Two things live here, and nothing else:
 *
 * 1. **`FigurePlate`** — a layout container. It adds no words, derives nothing
 *    from the prose and holds no state: it arranges two to four of the
 *    manuscript's own images side by side so that they stay legible and fit
 *    inside one screen, which is the arrangement the manuscript's own layout
 *    used. It is mounted for the fourteen unnumbered supplementary charts of §1
 *    (which the manuscript never gave a `Figure N` label, so they must not enter
 *    the reader's `FIG. nn` counter), for the two halves of Figure 18, and for
 *    the three gating panels of Figure 23.
 *
 * 2. **The shared citation register** — numeric style, `[n]`, per
 *    WIKI_ARCHITECTURE_SPEC.md §4.5. No second implementation of the hover card,
 *    the jump-and-flash or the back-links exists on this page.
 *
 * The inline renderer wraps the register with the manuscript's `*italic*` runs,
 * which the reader's default formatter does not carry. The pattern requires the
 * opening `*` to sit outside a word, so `HLA-A*02:01` — the manuscript's most
 * frequent token — is never mistaken for emphasis.
 */

import { Fragment, type ReactNode } from "react";
import {
  CitationReferenceList,
  createCitationRenderer,
  PROJECT_CITATION_FLASH,
} from "../../citations/CitationRegister";
import {
  buildNumericCitationIndex,
  reportCitationIssues,
} from "../../../../data/citations/citationIndex";
import {
  getResultsImage,
  resultsAssets,
  type ResultsAssetKey,
} from "../../../../data/project/resultsAssets";
import { resultsPage } from "../../../../data/project/resultsPage";
import { resultsReferences } from "../../../../data/project/resultsReferences";
import { EpitopeStructuralValidationChart } from "./EpitopeStructuralValidationChart";
import type { InlineRenderer } from "../../WikiRoutePage";
import "../../../../styles/features/results-panels.css";

export { EpitopeStructuralValidationChart };

/* ------------------------------------------------------------- figure plate */

interface FigurePlateProps {
  /** Asset-dictionary keys, in manuscript order. */
  keys: readonly ResultsAssetKey[];
  /** Columns at the desktop breakpoint; the plate collapses to one on mobile. */
  columns?: 1 | 2 | 3;
  /** Caption text, straight from the manuscript. Only set on numbered plates. */
  caption?: string;
  /**
   * `true` renders the reader's `figure` block semantics, so the plate takes the
   * next `FIG. nn` number and gets the manuscript's caption underneath.
   */
  numbered?: boolean;
  /**
   * Keeps the counter where the previous numbered figure left it. Figure 18A and
   * Figure 18B are two panels of one numbered figure, so 18B must not advance
   * the counter — otherwise every later figure would disagree with the body text
   * that cites it.
   */
  shareNumber?: boolean;
}

export function FigurePlate({
  keys,
  columns = 2,
  caption,
  numbered = false,
  shareNumber = false,
}: FigurePlateProps) {
  const images = keys.map((key) => ({
    key,
    src: getResultsImage(key),
    alt: resultsAssets[key].alt,
  }));

  const grid = (
    <div className={`results-plate__grid results-plate__grid--cols-${columns}`}>
      {images.map((image) => (
        <img
          key={image.key}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );

  if (!numbered) {
    return <div className="results-plate results-plate--bare">{grid}</div>;
  }

  return (
    <figure
      className={`wiki-figure results-plate results-plate--numbered${
        shareNumber ? " results-plate--share-number" : ""
      }`}
    >
      {grid}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/**
 * The plate slots the data layer mounts, and the manuscript images each holds.
 * Grouping is the manuscript's own: the four charts that carry Table 1, the four
 * that carry Table 2's second half, the four published panels of Table 4, the
 * four structural-validation charts, and the two multi-panel figures.
 */
function plateFeatures(): Record<string, ReactNode> {
  return {
    "results-plate-proteomics": (
      <FigurePlate
        columns={2}
        keys={[
          "proteomicsPxd024322Volcano",
          "proteomicsPxd024322Abundance",
          "proteomicsPxd028102Volcano",
          "proteomicsPxd028102Abundance",
        ]}
      />
    ),
    "results-plate-singlecell-umap": (
      <FigurePlate columns={1} keys={["singleCellUmap"]} />
    ),
    "results-plate-singlecell-detection": (
      <FigurePlate columns={1} keys={["singleCellDetection"]} />
    ),
    "results-plate-ihc": (
      <FigurePlate
        columns={2}
        keys={["ihcPanel1", "ihcPanel2", "ihcPanel3", "ihcPanel4"]}
      />
    ),
    "results-plate-structural": <EpitopeStructuralValidationChart />,
    "results-plate-fig18b": (
      <FigurePlate
        columns={1}
        numbered
        shareNumber
        keys={["fig18b"]}
        caption={resultsAssets.fig18b.caption}
      />
    ),
    "results-plate-fig23": (
      <FigurePlate
        columns={3}
        numbered
        keys={["fig23a", "fig23b", "fig23c"]}
        caption={resultsAssets.fig23a.caption}
      />
    ),
  };
}

/* ------------------------------------------------------------ inline render */

const resultsCitationIndex = buildNumericCitationIndex(
  resultsPage.sections,
  resultsReferences,
);
reportCitationIssues("results", resultsCitationIndex);

const citedRenderer = createCitationRenderer(
  resultsCitationIndex,
  PROJECT_CITATION_FLASH,
);

/**
 * The manuscript's emphasis: `*…*` between non-word characters. `**bold**` is
 * left to the reader's own formatter, and `HLA-A*02:01` (asterisk inside a word)
 * never matches. Markers that cannot pair — the `***` significance notes, for
 * instance — are left exactly as the manuscript wrote them.
 */
const PROSE_ITALIC_RE =
  /(?<![\w*])\*(?![\s*])([^*\n]{1,200}?)(?<![\s*])\*(?![\w*])/g;

function renderItalics(
  text: string,
  fallback: (chunk: string) => ReactNode,
): ReactNode {
  if (!text.includes("*")) return fallback(text);

  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  PROSE_ITALIC_RE.lastIndex = 0;

  while ((match = PROSE_ITALIC_RE.exec(text)) !== null) {
    if (match.index > last) {
      const chunk = text.slice(last, match.index);
      nodes.push(<Fragment key={`t-${last}`}>{fallback(chunk)}</Fragment>);
    }
    nodes.push(<em key={`em-${match.index}`}>{match[1]}</em>);
    last = match.index + match[0].length;
  }

  if (!nodes.length) return fallback(text);
  if (last < text.length) {
    nodes.push(
      <Fragment key={`t-${last}`}>{fallback(text.slice(last))}</Fragment>,
    );
  }
  return nodes;
}

/** Inline renderer handed to `WikiRoutePage` on the Results page. */
export const renderResultsText: InlineRenderer = (text, fallback) =>
  citedRenderer(text, (chunk) => renderItalics(chunk, fallback));

/* --------------------------------------------------------------- register */

function ResultsReferenceList() {
  return (
    <div data-wiki-reveal>
      <CitationReferenceList
        references={resultsReferences}
        index={resultsCitationIndex}
        tint={PROJECT_CITATION_FLASH}
      />
    </div>
  );
}

export function resultsFeatures(): Record<string, ReactNode> {
  return {
    ...plateFeatures(),
    "results-references": <ResultsReferenceList />,
  };
}
