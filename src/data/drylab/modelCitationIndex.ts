import type {
  CitationIndex,
  CitationSegment,
} from "../citations/citationTypes";
import type { WikiContentBlock } from "../../components/wiki/wikiPageTypes";
import { modelPage, modelPanels, modelReferences } from "./modelPage";

/** This manuscript uses comma-separated, frequently bold author/year labels.
 * Match its own bibliography labels without rewriting any displayed copy. */
export function buildModelCitationIndex(): CitationIndex {
  const index: CitationIndex = {
    byParagraph: new Map(),
    byRef: new Map(),
    issues: [],
  };
  const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const labels = modelReferences.map((reference) => {
    const label = reference.authors.replace(/\.$/, "");
    const split = label.lastIndexOf(",");
    const name = label.slice(0, split).trim();
    const year = label.slice(split + 1).trim();
    if (split < 1 || !name || !year)
      throw new Error(`Invalid Model citation label: ${label}`);
    return {
      id: reference.id,
      pattern: new RegExp(
        `(?:\\*\\*\\s*)?${escape(name)}\\s*,?\\s*${escape(year)}(?:\\.?\\s*\\*\\*)?`,
        "gu",
      ),
    };
  });
  const visit = (text: string, sectionId: string) => {
    if (index.byParagraph.has(text)) return;
    const matches = labels
      .flatMap(({ id, pattern }) =>
        [...text.matchAll(pattern)].map((m) => ({
          id,
          start: m.index!,
          text: m[0],
        })),
      )
      .sort((a, b) => a.start - b.start || b.text.length - a.text.length);
    const segments: CitationSegment[] = [];
    const occs = [];
    let cursor = 0;
    for (const match of matches) {
      if (match.start < cursor) continue;
      if (match.start > cursor)
        segments.push({ kind: "text", text: text.slice(cursor, match.start) });
      segments.push({ kind: "cite", refId: match.id, text: match.text });
      const list = index.byRef.get(match.id) ?? [];
      const occurrence = {
        occId: `cite-${match.id}-${list.length + 1}`,
        refId: match.id,
        ordinal: list.length + 1,
        sectionId,
      };
      list.push(occurrence);
      index.byRef.set(match.id, list);
      occs.push(occurrence);
      cursor = match.start + match.text.length;
    }
    if (!occs.length) return;
    if (cursor < text.length)
      segments.push({ kind: "text", text: text.slice(cursor) });
    index.byParagraph.set(text, { segments, occs });
  };
  const blocks = (items: readonly WikiContentBlock[], sectionId: string) => {
    for (const block of items) {
      if (block.type === "prose")
        block.paragraphs.forEach((text) => visit(text, sectionId));
      if (block.type === "feature") {
        const panel = modelPanels[block.key];
        if (panel?.kind === "fold") blocks(panel.blocks, sectionId);
        if (panel?.kind === "tabs")
          panel.entries.forEach((entry) => blocks(entry.blocks, sectionId));
      }
    }
  };
  modelPage.sections.forEach((section) =>
    blocks(section.blocks ?? [], section.id),
  );
  return index;
}
