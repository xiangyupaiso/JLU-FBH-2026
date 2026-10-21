import type { CitationStyle } from "./citationTypes";

/** The bibliography's numbering is the wiki's house style, not Harvard ordering. */
export function formatReferenceNumber(id: number, style: CitationStyle): string {
  return style === "author-year" ? `${id}.` : `[${id}]`;
}

export function cleanCitationLabel(text: string): string {
  return text.normalize("NFC").replace(/\*\*/g, "").trim()
    .replace(/^[([（【]\s*|\s*[)\]）】]$/g, "").trim();
}

/** Normalize punctuation only; author names, year suffixes and n.d. stay intact. */
export function formatAuthorYearLabel(text: string): string {
  const clean = cleanCitationLabel(text).replace(/\s+/g, " ");
  const match = /^(.*?)\s*[,，(（\s]*((?:19|20)\d{2}[a-z]?|n\.d\.(?:-[a-z])?)\s*[)）]?$/u.exec(clean);
  if (!match) return clean;
  const author = match[1].replace(/[,，(（\s]+$/g, "").replace(/\s+&\s+/g, " and ");
  return `${author}, ${match[2]}`;
}
