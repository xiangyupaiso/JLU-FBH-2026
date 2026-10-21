/**
 * Canonical citation index builder.
 *
 * Two in-text conventions exist in the manuscripts and both are supported here,
 * because a citation style belongs to the document that was written in it:
 *
 * - `author-year` — Description writes `(Sung et al. 2026)` in the running
 *   sentence. The key is derived from the reference's own metadata (first-author
 *   surname + year, disambiguated by initials or second author).
 * - `numeric` — Experiments and Hardware write bracketed markers, `…prognostic
 *   markers[1]`, occasionally doubled as `in cells[3][4]`. The marker is the
 *   reference id.
 *
 * Both produce the same `CitationIndex`, so the register, hover preview,
 * jump-and-flash and back-links are one implementation for the whole wiki.
 *
 * Pure functions: the inline renderer looks a paragraph up by its exact string,
 * which is why the data layer never has to carry citation metadata.
 */

import type {
  CitationIndex,
  CitationReference,
  CitationSegment,
  CitationStyle,
} from "./citationTypes";
import { cleanCitationLabel, formatAuthorYearLabel } from "./citationFormatting";
import { splitNoteContent } from "../../utils/wikiNoteContent";
import { citationParagraphKey, citationTableCellKey } from "./citationTypes";
import type {
  WikiContentBlock,
  WikiSection,
} from "../../components/wiki/wikiPageTypes";

/* --------------------------------------------------------------- assembly */

type ParagraphTokenizer = (
  paragraph: string,
  onIssue: (issue: string) => void,
) => CitationSegment[];

/** Walk sections → blocks (recursing into `split.prose`) in render order. */
function assemble(
  sections: readonly WikiSection[],
  tokenize: ParagraphTokenizer,
  style: CitationStyle,
  namespace?: string,
): CitationIndex {
  const byParagraph = new Map<
    string,
    {
      segments: CitationSegment[];
      occs: import("./citationTypes").CitationOccurrence[];
    }
  >();
  const byRef = new Map<
    number,
    import("./citationTypes").CitationOccurrence[]
  >();
  const byScopedParagraph = new Map<
    string,
    import("./citationTypes").CitationEntry
  >();
  const issues: string[] = [];

  const addOccurrence = (refId: number, sectionId: string) => {
    const list = byRef.get(refId) ?? [];
    const occurrence = {
      occId: `${namespace ? `${namespace}-` : ""}cite-${refId}-${list.length + 1}`,
      refId,
      ordinal: list.length + 1,
      sectionId,
    };
    list.push(occurrence);
    byRef.set(refId, list);
    return occurrence;
  };

  const visitParagraph = (paragraph: string, sectionId: string, locationKey?: string) => {
    if (/<br\s*\/?>/.test(paragraph)) {
      paragraph.split(/<br\s*\/?>/).forEach((line, index) => visitParagraph(line, sectionId, `${locationKey ?? ""}:line-${index}`));
      return;
    }
    const scopedKey = citationParagraphKey(sectionId, paragraph, locationKey);
    if (byScopedParagraph.has(scopedKey)) {
      return;
    }
    const segments = tokenize(paragraph, (issue) => issues.push(issue));
    if (
      import.meta.env.DEV &&
      segments.map((s) => s.text).join("") !== paragraph
    ) {
      issues.push(
        `segments do not reconstruct the paragraph: ${paragraph.slice(0, 60)}`,
      );
    }
    if (!segments.some((segment) => segment.kind === "cite" || segment.displayText)) return;

    const occs = segments
      .filter(
        (segment): segment is Extract<CitationSegment, { kind: "cite" }> =>
          segment.kind === "cite",
      )
      .flatMap((segment) =>
        (segment.refIds ?? [segment.refId]).map((refId) =>
          addOccurrence(refId, sectionId),
        ),
      );

    const entry = { segments, occs };
    if (!byParagraph.has(paragraph)) byParagraph.set(paragraph, entry);
    byScopedParagraph.set(scopedKey, entry);
    // Protocol steps render their number separately from the cited text.
    const stepPrefix = paragraph.match(/^\s*\d+[.、]\s+/)?.[0];
    if (stepPrefix) {
      byScopedParagraph.set(
        citationParagraphKey(sectionId, paragraph.slice(stepPrefix.length), locationKey),
        {
          occs,
          segments: segments.map((segment, index) =>
            index === 0 && segment.kind === "text"
              ? { ...segment, text: segment.text.slice(stepPrefix.length) }
              : segment,
          ),
        },
      );
    }
  };

  const visitBlock = (block: WikiContentBlock, sectionId: string) => {
    if (block.type === "prose") {
      block.paragraphs.forEach((paragraph) =>
        visitParagraph(paragraph, sectionId),
      );
    } else if (block.type === "quote") {
      visitParagraph(block.text, sectionId);
    } else if (block.type === "split") {
      block.prose.forEach((nested) => visitBlock(nested, sectionId));
      visitBlock(block.aside, sectionId);
    } else if (block.type === "callout") {
      visitParagraph(block.body, sectionId);
    } else if (block.type === "heading") {
      visitParagraph(block.title, sectionId);
    } else if (block.type === "list") {
      block.items.forEach((item) => visitParagraph(item, sectionId));
    } else if (block.type === "protocol-steps") {
      block.steps.forEach((step) => step.blocks.forEach((nested) => visitBlock(nested, sectionId)));
    } else if (block.type === "table") {
      block.headers.forEach((text, column) => visitParagraph(text, sectionId, citationTableCellKey(block, -1, column)));
      block.rows.forEach((row, index) => row.forEach((text, column) => visitParagraph(text, sectionId, citationTableCellKey(block, index, column))));
      if (block.caption) visitParagraph(block.caption, sectionId);
    } else if (block.type === "parts-table") {
      block.headers.forEach((text, column) => visitParagraph(text, sectionId, citationTableCellKey(block, -1, column)));
      block.rows.forEach((row, index) => row.cells.forEach((text, column) => visitParagraph(text, sectionId, citationTableCellKey(block, index, column))));
      if (block.caption) visitParagraph(block.caption, sectionId);
    } else if (block.type === "figure" || block.type === "carousel" || block.type === "image-placeholder") {
      if (block.caption) visitParagraph(block.caption, sectionId);
    } else if (block.type === "note") {
      splitNoteContent(block.body).forEach((text) => visitParagraph(text, sectionId));
    } else if (block.type === "dbtl") {
      block.stages.forEach((stage) => stage.blocks.forEach((nested) => visitBlock(nested, sectionId)));
    }
  };

  sections.forEach((section) => {
    section.blocks?.forEach((block) => visitBlock(block, section.id));
    section.body?.forEach((text) => visitParagraph(text, section.id));
    if (section.note) splitNoteContent(section.note.body).forEach((text) => visitParagraph(text, section.id));
    section.items?.forEach((item) => {
      visitParagraph(item.body, section.id);
      item.evidence?.forEach((text) => visitParagraph(text, section.id));
      if (item.decision) visitParagraph(item.decision, section.id);
    });
  });

  return { style, namespace, byParagraph, byScopedParagraph, byRef, issues };
}

/* ----------------------------------------------------------- numeric style */

const MARKER_RE =
  /(?:\[|【)(\d{1,3}(?:\s*[–-]\s*\d{1,3})?(?:\s*[,，]\s*\d{1,3}(?:\s*[–-]\s*\d{1,3})?)*)(?:\]|】)/g;

/** Never turn code examples or Markdown link labels/URLs into bibliography links. */
function protectedRanges(text: string): Array<[number, number]> {
  return [...text.matchAll(/`[^`]*`|\[[^\]\n]*\]\([^\s)]*\)/g)]
    .map((match) => [match.index!, match.index! + match[0].length]);
}

/** Resolve single, comma-separated and ranged markers without changing their text. */
export function tokenizeNumericCitations(
  text: string,
  knownRefs: ReadonlySet<number>,
  onIssue?: (issue: string) => void,
): CitationSegment[] {
  const segments: CitationSegment[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const protectedText = protectedRanges(text);

  MARKER_RE.lastIndex = 0;
  while ((match = MARKER_RE.exec(text)) !== null) {
    // `[label](url)` is a Markdown link, not a citation.
    if (protectedText.some(([start, end]) => match!.index < end && match!.index + match![0].length > start)) continue;
    const refIds: number[] = [];
    let valid = true;
    for (const item of match[1].split(/\s*[,，]\s*/)) {
      const [start, end = start] = item.split(/\s*[–-]\s*/).map(Number);
      if (end < start) {
        onIssue?.(`descending citation range [${item}]: ${text.slice(0, 60)}`);
        valid = false;
        break;
      }
      for (let refId = start; refId <= end; refId++) {
        if (!knownRefs.has(refId)) {
          onIssue?.(`no reference [${refId}]: ${text.slice(0, 60)}`);
          valid = false;
        }
        if (!refIds.includes(refId)) refIds.push(refId);
      }
    }
    if (!valid) {
      continue;
    }
    if (match.index > last) {
      segments.push({ kind: "text", text: text.slice(last, match.index) });
    }
    segments.push({
      kind: "cite",
      text: match[0],
      displayText: `[${match[1].replace(/，/g, ",").replace(/\s+/g, "").replace(/-/g, "–")}]`,
      refId: refIds[0],
      ...(refIds.length > 1 ? { refIds } : {}),
    });
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
    "numeric",
  );
}

/** Explicit organisation/author labels use the same author-year rules as other pages. */
export function buildLabelCitationIndex(
  sections: readonly WikiSection[],
  references: readonly CitationReference[],
  labels: Readonly<Record<string, number>>,
): CitationIndex {
  return buildAuthorYearCitationIndex(sections, references, labels);
}

/* ------------------------------------------------------- author-year style */

interface AuthorYearKey {
  id: number;
  surname: string;
  initials: string;
  second?: string;
  year: string;
  aliases: string[];
}

const YEAR = "(?:(?:19|20)\\d{2}[a-z]?|n\\.d\\.(?:-[a-z])?)";
const GROUP_RE = /[([（【]([^()[\]（）【】\n]+)[)\]）】]/g;
const LABEL_RE = new RegExp(`^(.+), (${YEAR})$`, "u");
const escapePattern = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const nfc = (value: string) => value.normalize("NFC");
const normInitials = (value: string) => nfc(value).replace(/[.-]/g, "");

/** Derive matching keys from the reference list (no explicit citation keys). */
export function buildAuthorYearKeys(
  references: readonly CitationReference[],
  labels: Readonly<Record<string, number>> = {},
): AuthorYearKey[] {
  return references.map((reference) => {
    const comma = reference.authors.indexOf(",");
    const first = (comma >= 0 ? reference.authors.slice(0, comma) : reference.authors).trim();
    const vancouver = /^(.+?)\s+([A-Z]{1,6})$/.exec(first);
    const surname = (vancouver?.[1] ?? first).replace(/\.$/, "");
    const initials =
      vancouver?.[2] ?? (comma >= 0
        ? reference.authors
            .slice(comma + 1)
            .split(/,|&| et al\./)[0]
            .trim()
        : "");
    const second = reference.authors.match(/(?:&|\band)\s+([^,.]+)(?:,|$)/)?.[1].trim()
      ?? reference.authors.split(",")[1]?.trim().match(/^(.+?)\s+[A-Z]{1,6}$/)?.[1];
    // Four-digit issue numbers such as (5247) are not publication years.
    const year = reference.volumeYear.match(new RegExp(`\\((${YEAR})\\)`))?.[1]
      ?? reference.volumeYear.match(new RegExp(`\\b${YEAR}`))?.[0] ?? "";
    return {
      id: reference.id,
      surname: nfc(surname),
      initials,
      second: second ? nfc(second) : undefined,
      year,
      aliases: Object.entries(labels).filter(([, id]) => id === reference.id)
        .map(([label]) => formatAuthorYearLabel(label)),
    };
  });
}

type MatchResult = { id: number } | { reason: "unresolved" | "ambiguous" };

function matchAuthorYear(
  item: string,
  keys: readonly AuthorYearKey[],
): MatchResult {
  const label = formatAuthorYearLabel(item);
  const exact = keys.filter((key) => key.aliases.includes(label));
  if (exact.length === 1) return { id: exact[0].id };
  if (exact.length > 1) return { reason: "ambiguous" };
  const match = LABEL_RE.exec(label);
  if (!match) return { reason: "unresolved" };
  const [, author, year] = match;
  const initial = /^(?:\p{Lu}\.-?)+\s+/u.exec(author)?.[0];
  const name = initial ? author.slice(initial.length) : author;
  let candidates = keys.filter((key) => key.year === year && key.surname && (
    name === key.surname || name.startsWith(`${key.surname} et al.`)
    || name.startsWith(`${key.surname} and `) || name.startsWith(`${key.surname}, `)
  ));
  if (initial) candidates = candidates.filter((key) => normInitials(key.initials).startsWith(normInitials(initial.trim())));
  if (name.includes(" and ")) {
    const second = name.split(" and ").at(-1);
    if (candidates.some((key) => key.second === second)) candidates = candidates.filter((key) => key.second === second);
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
 * Match complete groups first, then known narrative/bare labels. Source slices
 * remain exact; displayText carries the agreed (Author, year) punctuation.
 * Unresolved author-year groups are formatted, reported and left unlinked.
 */
export function tokenizeAuthorYearCitations(
  text: string,
  keys: readonly AuthorYearKey[],
  onIssue?: (issue: string) => void,
): CitationSegment[] {
  const matches: Array<{ start: number; end: number; segment: CitationSegment }> = [];
  const protectedText = protectedRanges(text);
  const groups = [...text.matchAll(GROUP_RE)];
  const add = (start: number, end: number, items: string[], wrap = true) => {
    if (protectedText.some(([from, to]) => start < to && end > from)) return;
    const labels = items.map(formatAuthorYearLabel);
    // Experimental ranges, dates and mathematical parentheses are not citations.
    if (!labels.every((label) => {
      const match = LABEL_RE.exec(label);
      if (!match) return false;
      if (keys.some((key) => key.aliases.includes(label))) return true;
      if (/^(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/.test(match[1])) return false;
      const authorWords = match[1].replace(/\bet al\.|\band\b|\b(?:de|du|van|von|der|la|of|for|the)\b/g, "").split(/[,\s]+/).filter(Boolean);
      return authorWords.length > 0 && authorWords.every((word) => /^(?:\p{Lu}|iGEM|cBioPortal)/u.test(word));
    })) return;
    const results = labels.map((label) => matchAuthorYear(label, keys));
    const failure = results.find((result) => !("id" in result));
    const formatted = wrap ? `(${labels.join("; ")})` : labels.join("; ");
    const displayText = /\*\*[^*]+\*\*/.test(text.slice(start, end)) ? `**${formatted}**` : formatted;
    if (failure && !("id" in failure)) {
      results.forEach((result, index) => {
        if (!("id" in result)) onIssue?.(`${result.reason}: ${labels[index]}`);
      });
      // A missing source must not prevent a verified neighbour from linking.
      // Keep raw offsets so bold labels and the original manuscript stay intact.
      const raw = text.slice(start, end);
      const inner = raw.slice(1, -1);
      const separators = [...inner.matchAll(new RegExp(`${YEAR}(?:\\*\\*)?\\s*([,;；])\\s*`, "gu"))]
        .map((match) => ({ start: match.index! + match[0].indexOf(match[1]), end: match.index! + match[0].length }));
      if (results.some((result) => "id" in result) && items.length > 1
        && /^[([（【]/.test(raw) && separators.length === items.length - 1) {
        const push = (from: number, to: number, segment: CitationSegment) => {
          matches.push({ start: from, end: to, segment });
        };
        push(start, start + 1, { kind: "text", text: raw[0], displayText: "(" });
        let cursor = 0;
        results.forEach((result, index) => {
          const boundary = separators[index]?.start ?? inner.length;
          const part = inner.slice(cursor, boundary);
          const label = /\*\*[^*]+\*\*/.test(part) ? `**${labels[index]}**` : labels[index];
          push(start + 1 + cursor, start + 1 + boundary, "id" in result
            ? { kind: "cite", text: part, displayText: label, refId: result.id }
            : { kind: "text", text: part, displayText: label });
          const separator = separators[index];
          if (separator) {
            push(start + 1 + separator.start, start + 1 + separator.end,
              { kind: "text", text: inner.slice(separator.start, separator.end), displayText: "; " });
            cursor = separator.end;
          }
        });
        push(end - 1, end, { kind: "text", text: raw.at(-1)!, displayText: ")" });
        return;
      }
      matches.push({ start, end, segment: { kind: "text", text: text.slice(start, end), displayText } });
    } else {
      const refIds = [...new Set(results.flatMap((result) => "id" in result ? [result.id] : []))];
      matches.push({ start, end, segment: { kind: "cite", text: text.slice(start, end), displayText, refId: refIds[0], ...(refIds.length > 1 ? { refIds } : {}) } });
    }
  };
  for (const match of groups) {
    const inner = match[1].replace(/\*\*/g, "").replace(new RegExp(`(${YEAR})\\s*,\\s*(?=[\\p{L}])`, "gu"), "$1; ");
    add(match.index!, match.index! + match[0].length, inner.split(/\s*[;；]\s*/));
  }
  const patterns = new Set<string>();
  for (const key of keys) {
    const names = [key.surname, `${key.surname} et al.`, ...(key.second ? [`${key.surname} and ${key.second}`] : [])];
    const labels = [...names.filter(() => key.year).map((name) => `${name}, ${key.year}`), ...key.aliases];
    for (const label of labels) {
      const match = LABEL_RE.exec(label);
      if (match) patterns.add(`${escapePattern(match[1]).replace(/ and /g, " (?:and|&) ")}\\s*[,，(（]?\\s*${escapePattern(match[2])}(?![\\p{L}\\p{N}])(?:\\s*[)）])?`);
    }
  }
  if (patterns.size) {
    const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])(?:${[...patterns].sort((a, b) => b.length - a.length).join("|")})`, "gu");
    for (const match of text.matchAll(pattern)) {
      if (matches.some(({ start, end }) => match.index! < end && match.index! + match[0].length > start)) continue;
      const alreadyWrapped = groups.some((group) => group.index! < match.index!
        && group.index! + group[0].length > match.index! + match[0].length);
      add(match.index!, match.index! + match[0].length, [cleanCitationLabel(match[0])], !alreadyWrapped);
    }
  }
  const segments: CitationSegment[] = [];
  let last = 0;
  for (const match of matches.sort((a, b) => a.start - b.start || b.end - a.end)) {
    if (match.start < last) continue;
    if (match.start > last) segments.push({ kind: "text", text: text.slice(last, match.start) });
    segments.push(match.segment);
    last = match.end;
  }
  if (last < text.length) segments.push({ kind: "text", text: text.slice(last) });
  return segments;
}

export function buildAuthorYearCitationIndex(
  sections: readonly WikiSection[],
  references: readonly CitationReference[],
  labels: Readonly<Record<string, number>> = {},
  namespace?: string,
): CitationIndex {
  const keys = buildAuthorYearKeys(references, labels);
  const index = assemble(sections, (paragraph, onIssue) =>
    tokenizeAuthorYearCitations(paragraph, keys, onIssue),
    "author-year", namespace,
  );
  const known = new Set(references.map((reference) => reference.id));
  for (const [label, id] of Object.entries(labels)) {
    if (!known.has(id)) index.issues.push(`unknown reference ${id} for label: ${label}`);
  }
  return index;
}

/** Log unresolved/ambiguous citations once per index, in development only. */
export function reportCitationIssues(
  label: string,
  index: CitationIndex,
): void {
  if (import.meta.env.DEV && index.issues.length) {
    console.error(`[citations:${label}]`, index.issues);
  }
}
