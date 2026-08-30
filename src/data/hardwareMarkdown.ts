import hardwareMarkdown from "../../文案集/dry lab/hardware/Hardware.md?raw";
import type {
  WikiContentBlock,
  WikiPageContent,
  WikiSection,
} from "../components/wiki/wikiPageTypes";

const ENGLISH_END = /^##\s+概览与定位声明\s*$/m;

function unescapeMarkdown(value: string) {
  return value
    .replace(/\\([\\`*_[\]{}()#+\-.!|>])/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\s+$/g, "")
    .trim();
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function splitTableRow(line: string) {
  const source = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  const cells: string[] = [];
  let current = "";
  let escaped = false;
  for (const character of source) {
    if (character === "|" && !escaped) {
      cells.push(unescapeMarkdown(current));
      current = "";
      continue;
    }
    if (character === "\\" && !escaped) {
      escaped = true;
      current += character;
      continue;
    }
    escaped = false;
    current += character;
  }
  cells.push(unescapeMarkdown(current));
  return cells;
}

function isTableDivider(line: string) {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function parseTable(lines: string[], caption?: string): WikiContentBlock {
  const rows = lines.filter((line) => !isTableDivider(line)).map(splitTableRow);
  const headers = rows.shift() ?? [];
  return { type: "table", headers, rows, caption };
}

function parseImagePlaceholder(line: string) {
  const clean = unescapeMarkdown(line);
  const filename = clean.match(/file name:\s*([^\]\s]+)/i)?.[1] ?? "pending-artwork.png";
  const instruction = clean
    .replace(/<br\s*\/?>(\s*)/gi, " ")
    .replace(/^\[\s*Insert image here\s*—\s*file name:\s*[^\]]+\]\s*/i, "")
    .replace(/^\[\s*Insert image here\s*—\s*file name:\s*[^\]]+\]\s*/i, "")
    .replace(/^\[\s*Insert image here\s*\]\s*/i, "")
    .replace(/^\[\s*此处.*?\]\s*/i, "")
    .replace(/^Use patent|^Flow diagram|^State or block diagram|^Block diagram only|^Timing diagram/gi, (match) => match)
    .trim();
  return { filename, instruction: instruction || "Artwork pending. Keep the figure boundary and evidence note visible." };
}

function sectionId(title: string, index: number) {
  const normalized = title.toLowerCase().replace(/^\d+(?:\.\d+)?(?:\.)?\s+/, "");
  if (normalized.startsWith("overview")) return "hardware-overview";
  if (normalized.startsWith("motivation")) return "hardware-motivation";
  if (normalized.startsWith("first-generation")) return "hardware-gen1";
  if (normalized.startsWith("how the design")) return "hardware-derived";
  if (normalized.startsWith("the patent")) return "hardware-patent";
  if (normalized.startsWith("design iteration")) return "hardware-gen2";
  if (normalized.startsWith("design files")) return "hardware-release";
  if (normalized.startsWith("limitations")) return "hardware-limitations";
  if (normalized.startsWith("references")) return "hardware-references";
  return `hardware-section-${index + 1}`;
}

function cleanHeading(value: string) {
  return unescapeMarkdown(value).replace(/^\d+(?:\.\d+)?(?:\.)?\s+/, "").trim();
}

function sectionKicker(title: string, index: number) {
  const labels = [
    "Overview",
    "Motivation",
    "First-generation design",
    "Design derivation",
    "Patent",
    "Design iteration",
    "Design files & open release",
    "Limitations & future work",
    "References",
  ];
  return `${String(index + 1).padStart(2, "0")} / ${labels[index] ?? cleanHeading(title)}`;
}

function chapterTarget(chapter: string) {
  return {
    "1": "hardware-overview",
    "2": "hardware-motivation",
    "3": "hardware-gen1",
    "4": "hardware-derived",
    "5": "hardware-patent",
    "6": "hardware-gen2",
    "7": "hardware-release",
    "8": "hardware-limitations",
  }[chapter];
}

function parseSection(title: string, sourceLines: string[], index: number): WikiSection {
  const id = sectionId(title, index);
  const blocks: WikiContentBlock[] = [];
  let paragraph: string[] = [];
  let pendingImage: Extract<WikiContentBlock, { type: "image-placeholder" }> | null = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "prose", paragraphs: [paragraph.join(" ")] });
    paragraph = [];
  };

  for (let cursor = 0; cursor < sourceLines.length; cursor += 1) {
    const raw = sourceLines[cursor].trim();
    if (!raw) {
      flushParagraph();
      continue;
    }

    if (/^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(raw) || /^\|\s*-+\s*\|$/.test(raw)) {
      continue;
    }

    const subheading = raw.match(/^###\s+(.+)$/);
    if (subheading) {
      flushParagraph();
      const subTitle = cleanHeading(subheading[1]);
      blocks.push({
        type: "subheading",
        id: `${id}-${slugify(subTitle)}`,
        index: `${index + 1}.${blocks.filter((block) => block.type === "subheading").length + 1}`,
        title: subTitle,
      });
      continue;
    }

    if (raw.startsWith("|") && raw.includes("Insert image here")) {
      flushParagraph();
      const parsed = parseImagePlaceholder(raw.replace(/^\|\*\*/, "").replace(/\*\|$/, ""));
      pendingImage = { type: "image-placeholder", ...parsed };
      blocks.push(pendingImage);
      continue;
    }

    if (pendingImage && /^Figure\s+\d+\s+\|/i.test(unescapeMarkdown(raw))) {
      pendingImage.caption = unescapeMarkdown(raw);
      pendingImage = null;
      continue;
    }

    if (raw.startsWith("|") && cursor + 1 < sourceLines.length && (sourceLines[cursor + 1].trim().startsWith("|") || isTableDivider(sourceLines[cursor + 1]))) {
      flushParagraph();
      const tableLines: string[] = [];
      while (cursor < sourceLines.length && sourceLines[cursor].trim().startsWith("|")) {
        tableLines.push(sourceLines[cursor].trim());
        cursor += 1;
      }
      cursor -= 1;
      const cleanRows = tableLines.map(splitTableRow);
      if (cleanRows.length === 1 && cleanRows[0]?.[0]?.toUpperCase().startsWith("EDITORIAL NOTE")) {
        blocks.push({ type: "callout", tone: "coral", label: "Editorial note", body: cleanRows[0][0] });
      } else {
        blocks.push(parseTable(tableLines));
      }
      continue;
    }

    if (/^Figure\s+\d+\s+\|/i.test(unescapeMarkdown(raw))) {
      flushParagraph();
      blocks.push({ type: "callout", tone: "neutral", label: "Figure note", body: unescapeMarkdown(raw) });
      continue;
    }

    if (raw.startsWith("|") && raw.endsWith("|")) {
      flushParagraph();
      const cell = splitTableRow(raw)[0] ?? "";
      blocks.push({ type: "callout", tone: "neutral", body: cell });
      continue;
    }

    paragraph.push(unescapeMarkdown(raw));
  }
  flushParagraph();

  const composedBlocks: WikiContentBlock[] = [];
  for (const block of blocks) {
    if (block.type !== "prose") {
      composedBlocks.push(block);
      continue;
    }
    for (const paragraphText of block.paragraphs) {
      const pattern = /(?:\(click to see Chapter\s+(\d+)\)|;\s*click to see Chapter\s+(\d+))\.?/gi;
      let lastIndex = 0;
      let match: RegExpExecArray | null;
      let found = false;
      const parts: Array<{ text: string; target?: string; label?: string }> = [];
      while ((match = pattern.exec(paragraphText))) {
        found = true;
        const before = paragraphText.slice(lastIndex, match.index);
        if (before) parts.push({ text: before });
        const chapter = match[1] ?? match[2];
        const target = chapterTarget(chapter);
        if (target) {
          const rawLabel = match[0].replace(/\.$/, "");
          const label = match[1]
            ? rawLabel
            : `(click to see Chapter ${chapter})`;
          parts.push({ text: "", target, label });
        }
        lastIndex = pattern.lastIndex;
      }
      const after = paragraphText.slice(lastIndex);
      if (after) parts.push({ text: after });
      if (found) {
        composedBlocks.push({ type: "prose-linked", parts });
      } else {
        composedBlocks.push({ type: "prose", paragraphs: [paragraphText] });
      }
    }
  }
  blocks.splice(0, blocks.length, ...composedBlocks);

  // The reference list is explicitly unfinished in the source draft. Keep the
  // chapter anchor, but do not publish partial citations or editorial notes.
  if (id === "hardware-references") {
    blocks.splice(0, blocks.length);
  }

  const visualSpec = (() => {
    const normalized = title.toLowerCase().replace(/^\d+\.\s*/, "");
    if (normalized.startsWith("overview")) {
      return {
        label: "SYSTEM AT A GLANCE",
        title: "One chamber, three controls",
        items: ["sealed reaction space", "temperature control", "active mixing"],
        tone: "navy" as const,
      };
    }
    if (normalized.startsWith("motivation")) {
      return {
        label: "ENGINEERING BOTTLENECK",
        title: "Three pressures on one workflow",
        items: ["reaction conditions", "post-hoc enrichment", "microvolume interference"],
        tone: "care" as const,
      };
    }
    if (normalized.startsWith("first-generation")) {
      return {
        label: "GEN 1 ARCHITECTURE",
        title: "Five functional modules",
        items: ["clamping", "mixing", "thermal core", "sealed path", "UV interlock"],
        tone: "gold" as const,
      };
    }
    if (normalized.startsWith("design iteration")) {
      return {
        label: "GEN 1 → GEN 2",
        title: "Four limitations drive the revision",
        items: ["throughput", "cooling", "observability", "process closure"],
        tone: "navy" as const,
      };
    }
    if (normalized.startsWith("limitations")) {
      return {
        label: "EVIDENCE BOUNDARY",
        title: "What remains unverified",
        items: ["thermal uniformity", "mixing efficiency", "sealing", "fluorescence endpoint"],
        tone: "care" as const,
      };
    }
    return null;
  })();

  // The first narrative paragraph is the secondary introduction beneath the
  // section heading, matching Sustainability's editorial rhythm. It is removed
  // from the body so the Markdown copy is not rendered twice.
  const firstProseIndex = blocks.findIndex((block) => block.type === "prose");
  const firstProse = firstProseIndex >= 0 ? blocks[firstProseIndex] : null;
  if (firstProse?.type === "prose") {
    blocks.splice(firstProseIndex, 1);
  }

  if (visualSpec) {
    const narrativeIndex = blocks.findIndex((block) => block.type === "prose");
    if (narrativeIndex >= 0) {
      const prose = blocks[narrativeIndex];
      if (prose.type === "prose") {
        const leadingSubheading =
          narrativeIndex > 0 && blocks[narrativeIndex - 1]?.type === "subheading"
            ? blocks[narrativeIndex - 1]
            : null;
        const proseBlocks: WikiContentBlock[] = leadingSubheading
          ? [leadingSubheading, prose]
          : [prose];
        const removeStart = leadingSubheading ? narrativeIndex - 1 : narrativeIndex;
        const removeCount = leadingSubheading ? 2 : 1;
        blocks.splice(removeStart, removeCount, {
          type: "split",
          id: `${id}-summary-visual`,
          prose: proseBlocks,
          aside: { type: "mini-visual", ...visualSpec },
        });
      }
    }
  }

  return {
    id,
    index: String(index + 1).padStart(2, "0"),
    kicker: sectionKicker(title, index),
    navLabel: cleanHeading(title).split("—")[0].trim(),
    title: cleanHeading(title),
    summary:
      id === "hardware-references"
        ? ""
        : firstProse?.type === "prose"
          ? firstProse.paragraphs[0] ?? ""
          : "",
    blocks,
  };
}

function parseHardwareMarkdown(): WikiPageContent {
  const english = hardwareMarkdown.split(ENGLISH_END)[0] ?? hardwareMarkdown;
  const lines = english.split(/\r?\n/);
  const h1Index = lines.findIndex((line) => /^#\s+/.test(line));
  const title = unescapeMarkdown((lines[h1Index] ?? "# Hardware").replace(/^#\s+/, ""));
  const lede = unescapeMarkdown(lines[h1Index + 2] ?? "CirCore — an integrated reaction device for the circularisation step of circRNA vaccine manufacture.");
  const sections: WikiSection[] = [];
  for (let cursor = h1Index + 1; cursor < lines.length; cursor += 1) {
    const heading = lines[cursor].match(/^##\s+(.+)$/);
    if (!heading || !heading[1].trim()) continue;
    const body: string[] = [];
    cursor += 1;
    while (cursor < lines.length && !/^##\s+/.test(lines[cursor])) {
      body.push(lines[cursor]);
      cursor += 1;
    }
    cursor -= 1;
    sections.push(parseSection(heading[1], body, sections.length));
  }

  return {
    route: "/hardware",
    category: "dry-lab",
    chapter: "Dry Lab / 03 of 04",
    eyebrow: "Hardware · CirCore",
    title,
    lede,
    boundary: "Neither generation has been built. This page describes design-stage hardware and does not claim measured performance.",
    visual: "hardware-schematic",
    visualLabel: "Design-stage hardware artwork pending",
    visualSteps: ["Gen 1", "Process", "Gen 2"],
    facts: [],
    sections,
    links: [
      { path: "/experiments", label: "Experimental need" },
      { path: "/measurement", label: "Measurement" },
      { path: "/contribution", label: "Open release" },
    ],
    next: { path: "/games", label: "Games", title: "How can interactive experiences make the work explorable?" },
    heroMinimal: true,
  };
}

export const hardwareMarkdownPage = parseHardwareMarkdown();
