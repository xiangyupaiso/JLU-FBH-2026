/**
 * Canonical citation model for the wiki.
 *
 * Provenance: extracted from the Description page's citation layer, which is the
 * house standard for in-text citation, the hover preview and the bibliography
 * register. Every page that cites sources uses these types, so a reference entry
 * is written once, in one shape, for the whole site.
 *
 * Pure types and builders — no React here; `components/wiki/citations/` owns the
 * presentation.
 */

/** One machine-readable identifier hanging off a reference (DOI, PMID, URL). */
export interface CitationIdentifier {
  href: string;
  label: string;
}

/**
 * A bibliography entry in the house format:
 * `Authors. Title. Journal. VolumeYear. Identifiers.`
 *
 * `authors` is `""` when the source names no author (a dataset, a tool, a
 * patent number standing in for one). `journal` carries the italicised slot,
 * which is also where a manual's own title goes when the source has no journal.
 */
export interface CitationReference {
  id: number;
  /** Bibliography position when stable anchor IDs are sparse or reordered. */
  displayNumber?: number;
  authors: string;
  title: string;
  journal: string;
  volumeYear: string;
  links?: readonly CitationIdentifier[];
}

export type CitationStyle = "author-year" | "numeric";

export type CitationSegment =
  | { kind: "text"; text: string; displayText?: string }
  | { kind: "cite"; text: string; displayText?: string; refId: number; refIds?: readonly number[] };

export interface CitationOccurrence {
  occId: string;
  refId: number;
  ordinal: number;
  sectionId: string;
}

export interface CitationEntry {
  segments: CitationSegment[];
  occs: CitationOccurrence[];
}

export interface CitationIndex {
  style: CitationStyle;
  /** Independent registers on one page (Engineering stages) need unique anchors. */
  namespace?: string;
  byParagraph: Map<string, CitationEntry>;
  /** Resolve repeated passages in different chapters without duplicate anchor IDs. */
  byScopedParagraph?: Map<string, CitationEntry>;
  byRef: Map<number, CitationOccurrence[]>;
  issues: string[];
}

export function citationParagraphKey(sectionId: string, text: string, locationKey?: string) {
  return `${sectionId}\0${text}${locationKey ? `\0${locationKey}` : ""}`;
}

/** Identical citation text in different table cells represents distinct occurrences. */
export function citationTableCellKey(table: object, row: number, column: number) {
  return JSON.stringify([table, row, column]);
}

export function citationReferenceId(index: Pick<CitationIndex, "namespace">, id: number) {
  return `${index.namespace ? `${index.namespace}-` : ""}ref-${id}`;
}

/** Landing-highlight colours, so each module's flash belongs to its palette. */
export interface CitationFlashTint {
  ramp: string;
  ring: string;
}
