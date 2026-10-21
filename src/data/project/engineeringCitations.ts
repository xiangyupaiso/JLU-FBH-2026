import type { WikiContentBlock, WikiReferenceEntry, WikiSection } from "../../components/wiki/wikiPageTypes";
import type { CitationReference } from "../citations/citationTypes";
import { buildAuthorYearCitationIndex } from "../citations/citationIndex";
import { engineeringPage } from "./engineeringPage";

function sourceKey(entry: WikiReferenceEntry) { return entry.href ?? entry.text; }

function collectSources(blocks: readonly WikiContentBlock[]): WikiReferenceEntry[] {
  return blocks.flatMap((block) => block.type === "references" ? block.items
    : block.type === "dbtl" ? block.stages.flatMap((stage) => collectSources(stage.blocks)) : []);
}

const sources = [...new Map(engineeringPage.sections.flatMap((section) => collectSources(section.blocks ?? []))
  .map((entry) => [sourceKey(entry), entry])).values()];

function asReference(entry: WikiReferenceEntry, id: number): CitationReference {
  // The original complete bibliographic line is retained, including journal italics.
  return { id, authors: "", title: entry.text, journal: "", volumeYear: "",
    links: entry.href ? [{ href: entry.href, label: entry.hrefLabel ?? entry.label }] : undefined };
}

function sourceLabels(entry: WikiReferenceEntry): string[] {
  const undated = /^(.*?)\s*\((n\.d\.(?:-[a-z])?)\)/.exec(entry.text);
  if (undated) return [`${undated[1].trim()}, ${undated[2]}`];
  const year = entry.text.match(/\b((?:19|20)\d{2})(?=;|\.)/)?.[1]
    ?? entry.text.match(/\b((?:19|20)\d{2})\b/)?.[1];
  const authors = entry.text.split(/\.\s/)[0];
  if (!year || !authors) return [];
  const names = authors.split(",").map((name) => name.trim().replace(/\s+[A-Z]{1,6}$/, ""));
  const first = names[0];
  return [`${first}, ${year}`, `${first} et al., ${year}`,
    ...(names.length === 2 && names[1] !== "et al" ? [`${first} and ${names[1]}, ${year}`] : [])];
}

function labelsFor(entries: readonly WikiReferenceEntry[]) {
  return Object.fromEntries(entries.flatMap((entry, index) => sourceLabels(entry).map((label) => [label, index + 1])));
}

const allReferences = sources.map((entry, index) => asReference(entry, index + 1));
const allLabels = labelsFor(sources);

/** Each DBTL stage keeps its local source list and gets independent shared anchors. */
export function buildEngineeringStageCitations(blocks: WikiContentBlock[], namespace: string) {
  const section: WikiSection = { id: namespace, index: "", kicker: "", title: "", summary: "", blocks };
  const probe = buildAuthorYearCitationIndex([section], allReferences, allLabels);
  const entries = [...new Map([
    ...collectSources(blocks),
    ...[...probe.byRef.keys()].map((id) => sources[id - 1]),
  ].map((entry) => [sourceKey(entry), entry])).values()];
  const references = entries.map((entry, index) => asReference(entry, index + 1));
  const index = buildAuthorYearCitationIndex([section], references, labelsFor(entries), namespace);
  return { references, index };
}
