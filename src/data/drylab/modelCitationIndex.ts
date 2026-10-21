import type { CitationIndex, CitationOccurrence } from "../citations/citationTypes";
import { buildAuthorYearKeys, tokenizeAuthorYearCitations } from "../citations/citationIndex";
import { citationParagraphKey, citationTableCellKey } from "../citations/citationTypes";
import type { WikiContentBlock } from "../../components/wiki/wikiPageTypes";
import {
  modelPage,
  modelPanels,
  modelJudging,
} from "./modelPage";
import { modelCitationReferences as modelReferences, modelCitationLabels as modelReferenceLabels } from "./modelCitationReferences";

/** Recognize caption labels only; prose references such as "Figure 16 summarizes" stay prose. */
export function parseModelFigureCaption(text: string) {
  const match =
    /^[*\s]*Figure\s+[*\s]*(\d+[A-Z]?)[*\s]*[.,:|][*\s]*(.+?)\s*\**$/s.exec(
      text,
    );
  return match
    ? { label: `FIG. ${match[1].padStart(2, "0")}`, text: match[2] }
    : null;
}

/** This manuscript uses comma-separated, frequently bold author/year labels.
 * Match its own bibliography labels without rewriting any displayed copy. */
export function buildModelCitationIndex(): CitationIndex {
  const index: CitationIndex = {
    style: "author-year",
    byParagraph: new Map(),
    byScopedParagraph: new Map(),
    byRef: new Map(),
    issues: [],
  };
  // Repeated generic labels (e.g. different trial registrations from the same
  // database) cannot identify one paper. Keep those bibliography entries without
  // silently linking an ambiguous author/year citation to the wrong study.
  const groups = new Map<string, typeof modelReferenceLabels>();
  for (const label of modelReferenceLabels) {
    const key = `${label.name}\0${label.year}`;
    groups.set(key, [...(groups.get(key) ?? []), label]);
  }
  const labels = [...groups.values()].flatMap((group) => {
    const { id, name, year } = group[0];
    if (group.length > 1) {
      const urls = group.map(
        (label) =>
          modelReferences.find((r) => r.id === label.id)?.links?.[0]?.href,
      );
      if (!urls[0] || !urls.every((url) => url === urls[0])) return [];
    }
    return [[`${name}, ${year}`, id] as const];
  });
  const keys = buildAuthorYearKeys(modelReferences, Object.fromEntries(labels));
  const visit = (text: string, sectionId: string, locationKey?: string) => {
    text = parseModelFigureCaption(text)?.text ?? text;
    const scopedKey = citationParagraphKey(sectionId, text, locationKey);
    if (index.byScopedParagraph!.has(scopedKey)) return;
    const segments = tokenizeAuthorYearCitations(text, keys, (issue) => index.issues.push(issue));
    const occs: CitationOccurrence[] = [];
    for (const segment of segments) {
      if (segment.kind !== "cite") continue;
      for (const refId of segment.refIds ?? [segment.refId]) {
        const list = index.byRef.get(refId) ?? [];
        const occurrence = { occId: `cite-${refId}-${list.length + 1}`, refId, ordinal: list.length + 1, sectionId };
        list.push(occurrence);
        index.byRef.set(refId, list);
        occs.push(occurrence);
      }
    }
    if (!segments.some((segment) => segment.kind === "cite" || segment.displayText)) return;
    index.byScopedParagraph!.set(scopedKey, { segments, occs });
    if (!index.byParagraph.has(text))
      index.byParagraph.set(text, { segments, occs });
  };
  const blocks = (items: readonly WikiContentBlock[], sectionId: string) => {
    for (const block of items) {
      if (block.type === "figure" && block.caption)
        visit(block.caption, sectionId);
      if (block.type === "prose")
        block.paragraphs.forEach((text) => visit(text, sectionId));
      if (block.type === "list")
        block.items.forEach((text) => visit(text, sectionId));
      if (block.type === "table") {
        block.headers.forEach((text, column) => visit(text, sectionId, citationTableCellKey(block, -1, column)));
        block.rows.forEach((row, index) => row.forEach((text, column) => visit(text, sectionId, citationTableCellKey(block, index, column))));
        if (block.caption) visit(block.caption, sectionId);
      }
      if (block.type === "split") {
        blocks(block.prose, sectionId);
        blocks([block.aside], sectionId);
      }
      if (block.type === "feature") {
        const panel = modelPanels[block.key];
        if (panel?.kind === "fold") blocks(panel.blocks, block.key);
        if (panel?.kind === "tabs")
          panel.entries.forEach((entry) => blocks(entry.blocks, block.key));
      }
    }
  };
  modelPage.sections.forEach((section) =>
    blocks(section.blocks ?? [], section.id),
  );
  modelJudging.forEach((criterion) =>
    criterion.paragraphs.forEach((text) => visit(text, "model-judging")),
  );
  return index;
}
