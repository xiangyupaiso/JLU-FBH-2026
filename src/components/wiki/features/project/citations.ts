/**
 * In-text citation parser for the Description page.
 *
 * Pure functions: (Author et al. Year) groups in prose paragraphs are mapped
 * deterministically to the 24 entries of `descriptionReferences` using the
 * rule "first-author surname + year (+ disambiguating initials / second
 * author)". The visible text is never altered — segments are slices of the
 * input, and `segments.map(s => s.text).join("")` reconstructs the paragraph.
 */
import type { ReferenceItem } from "../../../../data/project/descriptionPage";
import {
  descriptionPage,
  descriptionReferences,
} from "../../../../data/project/descriptionPage";
import type { WikiContentBlock, WikiSection } from "../../wikiPageTypes";

export interface CiteRefKey {
  id: number;
  surname: string;
  initials: string;
  second?: string;
  year: string;
}

export type CitationSegment =
  | { kind: "text"; text: string }
  | { kind: "cite"; text: string; refId: number };

export interface CiteOccurrence {
  occId: string;
  refId: number;
  ordinal: number;
  sectionId: string;
}

export interface CitationIssue {
  text: string;
  reason: "unresolved" | "ambiguous" | "in-bold" | "dup-paragraph";
}

const GROUP_RE = /\(([^()]*?\b(?:19|20)\d{2})\)/g;
const ITEM_RE =
  /^(?:(?<init>(?:\p{Lu}\.-?)+)\s+)?(?<sur>\p{Lu}[\p{L}'-]+)(?:\s+et al\.|\s+and\s+(?<second>\p{Lu}[\p{L}'-]+))?\s+(?<year>(?:19|20)\d{2})$/u;
const BOLD_RE = /\*\*[^*]+?\*\*/g;
const SEP_RE = /;\s*/g;

const nfc = (value: string) => value.normalize("NFC");
const normInitials = (value: string) => nfc(value).replace(/[.-]/g, "");

/** Derive matching keys from the reference list (no explicit citation keys). */
export function buildRefKeys(refs: readonly ReferenceItem[]): CiteRefKey[] {
  return refs.map((ref) => {
    const comma = ref.authors.indexOf(",");
    const surname = ref.authors.slice(0, comma).trim();
    const initials =
      comma >= 0
        ? ref.authors.slice(comma + 1).split(/,|&| et al\./)[0].trim()
        : "";
    const amp = ref.authors.indexOf("&");
    const second =
      amp >= 0 ? ref.authors.slice(amp + 1).split(",")[0].trim() : undefined;
    const year = ref.volumeYear.match(/\((\d{4})\)/)?.[1] ?? "";
    return {
      id: ref.id,
      surname: nfc(surname),
      initials,
      second: second ? nfc(second) : undefined,
      year,
    };
  });
}

type MatchResult =
  | { id: number }
  | { reason: "unresolved" | "ambiguous" };

function matchCitation(item: string, keys: readonly CiteRefKey[]): MatchResult {
  const match = ITEM_RE.exec(nfc(item.trim()));
  if (!match?.groups) return { reason: "unresolved" };
  const { sur, year, init, second } = match.groups as Record<
    string,
    string | undefined
  >;

  let candidates = keys.filter((key) => key.surname === sur && key.year === year);
  if (init) {
    const wanted = normInitials(init);
    candidates = candidates.filter((key) => {
      const have = normInitials(key.initials);
      return have === wanted || have.startsWith(wanted) || wanted.startsWith(have);
    });
  }
  if (second) {
    candidates = candidates.filter((key) => key.second === second);
  }
  if (candidates.length === 1) return { id: candidates[0].id };
  return { reason: candidates.length === 0 ? "unresolved" : "ambiguous" };
}

/** Resolve one parenthesised item to a reference id, or null. */
export function resolveCitation(
  item: string,
  keys: readonly CiteRefKey[],
): number | null {
  const result = matchCitation(item, keys);
  return "id" in result ? result.id : null;
}

/**
 * Split one paragraph into text / citation segments. If any item inside a
 * parenthesised group cannot be resolved (or the group sits inside `**…**`),
 * the whole group stays plain text — the conservative policy.
 */
export function tokenizeCitations(
  text: string,
  keys: readonly CiteRefKey[],
  onIssue?: (issue: CitationIssue) => void,
): CitationSegment[] {
  const segments: CitationSegment[] = [];
  const boldRanges: Array<[number, number]> = [];
  BOLD_RE.lastIndex = 0;
  let boldMatch: RegExpExecArray | null;
  while ((boldMatch = BOLD_RE.exec(text))) {
    boldRanges.push([boldMatch.index, boldMatch.index + boldMatch[0].length]);
  }

  const pushText = (piece: string) => {
    if (piece) segments.push({ kind: "text", text: piece });
  };

  let last = 0;
  GROUP_RE.lastIndex = 0;
  let groupMatch: RegExpExecArray | null;
  while ((groupMatch = GROUP_RE.exec(text))) {
    const start = groupMatch.index;
    const end = start + groupMatch[0].length;
    const inner = groupMatch[1];

    if (boldRanges.some(([from, to]) => start < to && end > from)) {
      onIssue?.({ text: inner, reason: "in-bold" });
      continue;
    }

    // Split "; "-separated items while keeping raw slice offsets.
    const itemRanges: Array<[number, number]> = [];
    let itemStart = 0;
    SEP_RE.lastIndex = 0;
    let sepMatch: RegExpExecArray | null;
    while ((sepMatch = SEP_RE.exec(inner))) {
      itemRanges.push([itemStart, sepMatch.index]);
      itemStart = sepMatch.index + sepMatch[0].length;
    }
    itemRanges.push([itemStart, inner.length]);

    const results = itemRanges.map(([from, to]) =>
      matchCitation(inner.slice(from, to), keys),
    );
    const failure = results.find((result) => !("id" in result));
    if (failure && !("id" in failure)) {
      onIssue?.({ text: inner, reason: failure.reason });
      continue;
    }

    // Text up to and including the opening parenthesis.
    pushText(text.slice(last, start + 1));
    itemRanges.forEach(([from, to], index) => {
      if (index > 0) pushText(inner.slice(itemRanges[index - 1][1], from));
      const result = results[index];
      if (result && "id" in result) {
        segments.push({ kind: "cite", text: inner.slice(from, to), refId: result.id });
      }
    });
    // The closing parenthesis stays with the trailing text slice.
    last = end - 1;
  }
  pushText(text.slice(last));
  return segments;
}

export interface CitationIndex {
  byParagraph: Map<
    string,
    { segments: CitationSegment[]; occs: CiteOccurrence[] }
  >;
  byRef: Map<number, CiteOccurrence[]>;
  issues: CitationIssue[];
}

/** Walk sections → blocks (recursing into split.prose) in render order. */
export function buildCitationIndex(
  sections: readonly WikiSection[],
  refs: readonly ReferenceItem[],
): CitationIndex {
  const keys = buildRefKeys(refs);
  const byParagraph = new Map<
    string,
    { segments: CitationSegment[]; occs: CiteOccurrence[] }
  >();
  const byRef = new Map<number, CiteOccurrence[]>();
  const issues: CitationIssue[] = [];

  const addOccurrence = (refId: number, sectionId: string): CiteOccurrence => {
    const list = byRef.get(refId) ?? [];
    const occ: CiteOccurrence = {
      occId: `cite-${refId}-${list.length + 1}`,
      refId,
      ordinal: list.length + 1,
      sectionId,
    };
    list.push(occ);
    byRef.set(refId, list);
    return occ;
  };

  const visitParagraph = (paragraph: string, sectionId: string) => {
    if (byParagraph.has(paragraph)) {
      issues.push({ text: paragraph.slice(0, 80), reason: "dup-paragraph" });
      return;
    }
    const segments = tokenizeCitations(paragraph, keys, (issue) =>
      issues.push(issue),
    );
    if (import.meta.env.DEV && segments.map((s) => s.text).join("") !== paragraph) {
      issues.push({ text: paragraph.slice(0, 80), reason: "unresolved" });
    }
    if (!segments.some((segment) => segment.kind === "cite")) return;
    const occs = segments
      .filter((segment): segment is Extract<CitationSegment, { kind: "cite" }> =>
        segment.kind === "cite",
      )
      .map((segment) => addOccurrence(segment.refId, sectionId));
    byParagraph.set(paragraph, { segments, occs });
  };

  const visitBlock = (block: WikiContentBlock, sectionId: string) => {
    if (block.type === "prose") {
      block.paragraphs.forEach((paragraph) => visitParagraph(paragraph, sectionId));
    } else if (block.type === "split") {
      block.prose.forEach((nested) => visitBlock(nested, sectionId));
    }
  };

  sections.forEach((section) => {
    section.blocks?.forEach((block) => visitBlock(block, section.id));
  });

  return { byParagraph, byRef, issues };
}

export const citationIndex = buildCitationIndex(
  descriptionPage.sections,
  descriptionReferences,
);

if (import.meta.env.DEV && citationIndex.issues.length) {
  console.error("[citations]", citationIndex.issues);
}
