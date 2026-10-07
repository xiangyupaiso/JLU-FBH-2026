/**
 * Canonical citation index builder.
 *
 * Two in-text conventions exist in the manuscripts and both are supported here,
 * because a citation style belongs to the document that was written in it:
 *
 * - `author-year` — Description writes `(Sung et al. 2026)` in the running
 *   sentence. The key is derived from the reference's own metadata (first-author
 *   surname + year, disambiguated by initials or second author).
 * - `numeric` — Design and Hardware write bracketed markers, `…prognostic
 *   markers[1]`, occasionally doubled as `in cells[3][4]`. The marker is the
 *   reference id.
 *
 * Both produce the same `CitationIndex`, so the register, hover preview,
 * jump-and-flash and back-links are one implementation for the whole wiki.
 *
 * Pure functions: the inline renderer looks a paragraph up by its exact string,
 * which is why the data layer never has to carry citation metadata.
 */

import type { CitationIndex, CitationReference, CitationSegment } from "./citationTypes";
import type { WikiContentBlock, WikiSection } from "../../components/wiki/wikiPageTypes";

/* --------------------------------------------------------------- assembly */

type ParagraphTokenizer = (
  paragraph: string,
  onIssue: (issue: string) => void,
) => CitationSegment[];

/** Walk sections → blocks (recursing into `split.prose`) in render order. */
function assemble(
  sections: readonly WikiSection[],
  tokenize: ParagraphTokenizer,
): CitationIndex {
  const byParagraph = new Map<string, { segments: CitationSegment[]; occs: import("./citationTypes").CitationOccurrence[] }>();
  const byRef = new Map<number, import("./citationTypes").CitationOccurrence[]>();
  const issues: string[] = [];

  const addOccurrence = (refId: number, sectionId: string) => {
    const list = byRef.get(refId) ?? [];
    const occurrence = {
      occId: `cite-${refId}-${list.length + 1}`,
      refId,
      ordinal: list.length + 1,
      sectionId,
    };
    list.push(occurrence);
    byRef.set(refId, list);
    return occurrence;
  };

  const visitParagraph = (paragraph: string, sectionId: string) => {
    if (byParagraph.has(paragraph)) {
      issues.push(`duplicate paragraph: ${paragraph.slice(0, 60)}`);
      return;
    }
    const segments = tokenize(paragraph, (issue) => issues.push(issue));
    if (import.meta.env.DEV && segments.map((s) => s.text).join("") !== paragraph) {
      issues.push(`segments do not reconstruct the paragraph: ${paragraph.slice(0, 60)}`);
    }
    if (!segments.some((segment) => segment.kind === "cite")) return;

    const occs = segments
      .filter(
        (segment): segment is Extract<CitationSegment, { kind: "cite" }> =>
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

/* ----------------------------------------------------------- numeric style */

const MARKER_RE = /\[(\d{1,2})\]/g;

/** Split on `[n]` markers, validating each against the reference list. */
export function tokenizeNumericCitations(
  text: string,
  knownRefs: ReadonlySet<number>,
  onIssue?: (issue: string) => void,
): CitationSegment[] {
  const segments: CitationSegment[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  MARKER_RE.lastIndex = 0;
  while ((match = MARKER_RE.exec(text)) !== null) {
    // `[label](url)` is a Markdown link, not a citation.
    if (text[match.index + match[0].length] === "(") continue;
    const refId = Number(match[1]);
    if (!knownRefs.has(refId)) {
      onIssue?.(`no reference [${refId}]: ${text.slice(0, 60)}`);
      continue;
    }
    if (match.index > last) {
      segments.push({ kind: "text", text: text.slice(last, match.index) });
    }
    segments.push({ kind: "cite", text: match[0], refId });
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    segments.push({ kind: "text", text: text.slice(last) });
  }
  return segments;
}

export function buildNumericCitationIndex(
  sections: readonly WikiSection[],
  references: readonly CitationReference[],
): CitationIndex {
  const known = new Set(references.map((reference) => reference.id));
  return assemble(sections, (paragraph, onIssue) =>
    tokenizeNumericCitations(paragraph, known, onIssue),
  );
}

/* ------------------------------------------------------- author-year style */

interface AuthorYearKey {
  id: number;
  surname: string;
  initials: string;
  second?: string;
  year: string;
}

const GROUP_RE = /\(([^()]*?\b(?:19|20)\d{2})\)/g;
const ITEM_RE =
  /^(?:(?<init>(?:\p{Lu}\.-?)+)\s+)?(?<sur>\p{Lu}[\p{L}'-]+)(?:\s+et al\.|\s+and\s+(?<second>\p{Lu}[\p{L}'-]+))?\s+(?<year>(?:19|20)\d{2})$/u;
const BOLD_RE = /\*\*[^*]+?\*\*/g;
const SEP_RE = /;\s*/g;

const nfc = (value: string) => value.normalize("NFC");
const normInitials = (value: string) => nfc(value).replace(/[.-]/g, "");

/** Derive matching keys from the reference list (no explicit citation keys). */
export function buildAuthorYearKeys(
  references: readonly CitationReference[],
): AuthorYearKey[] {
  return references.map((reference) => {
    const comma = reference.authors.indexOf(",");
    const surname = reference.authors.slice(0, comma).trim();
    const initials =
      comma >= 0
        ? reference.authors.slice(comma + 1).split(/,|&| et al\./)[0].trim()
        : "";
    const amp = reference.authors.indexOf("&");
    const second =
      amp >= 0 ? reference.authors.slice(amp + 1).split(",")[0].trim() : undefined;
    const year = reference.volumeYear.match(/\((\d{4})\)/)?.[1] ?? "";
    return {
      id: reference.id,
      surname: nfc(surname),
      initials,
      second: second ? nfc(second) : undefined,
      year,
    };
  });
}

type MatchResult = { id: number } | { reason: "unresolved" | "ambiguous" };

function matchAuthorYear(item: string, keys: readonly AuthorYearKey[]): MatchResult {
  const match = ITEM_RE.exec(nfc(item.trim()));
  if (!match?.groups) return { reason: "unresolved" };
  const { sur, year, init, second } = match.groups as Record<string, string | undefined>;

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
export function resolveAuthorYearCitation(
  item: string,
  keys: readonly AuthorYearKey[],
): number | null {
  const result = matchAuthorYear(item, keys);
  return "id" in result ? result.id : null;
}

/**
 * Split one paragraph into text / citation segments. If any item inside a
 * parenthesised group cannot be resolved (or the group sits inside `**…**`),
 * the whole group stays plain text — the conservative policy.
 */
export function tokenizeAuthorYearCitations(
  text: string,
  keys: readonly AuthorYearKey[],
  onIssue?: (issue: string) => void,
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
      onIssue?.(`citation inside bold text: ${inner}`);
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
      matchAuthorYear(inner.slice(from, to), keys),
    );
    const failure = results.find((result) => !("id" in result));
    if (failure && !("id" in failure)) {
      onIssue?.(`${failure.reason}: ${inner}`);
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

export function buildAuthorYearCitationIndex(
  sections: readonly WikiSection[],
  references: readonly CitationReference[],
): CitationIndex {
  const keys = buildAuthorYearKeys(references);
  return assemble(sections, (paragraph, onIssue) =>
    tokenizeAuthorYearCitations(paragraph, keys, onIssue),
  );
}

/** Log unresolved/ambiguous citations once per index, in development only. */
export function reportCitationIssues(label: string, index: CitationIndex): void {
  if (import.meta.env.DEV && index.issues.length) {
    console.error(`[citations:${label}]`, index.issues);
  }
}
