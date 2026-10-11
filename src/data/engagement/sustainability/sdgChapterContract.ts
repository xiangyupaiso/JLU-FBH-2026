/**
 * SDG chapter contract for the Sustainability page.
 *
 * Every SDG chapter (SDG 3 now; SDG 9 / 12 / 4 / 17 later) follows the same
 * SCALE skeleton. Going live with another SDG = one more file exporting an
 * `SdgChapter`, pushed into `sustainabilityChapters`; the page builder and the
 * feature map derive their blocks and keys from it. Pure types + helpers.
 */

import type { SustainabilityImageAssetKey } from "./sustainabilityAssets";
import type { StakeholderPhoto } from "./sustainabilityPhotos";

export interface SustainabilityStat {
  id: string;
  value: number;
  /** Fraction digits kept when counting up (e.g. 22.37 → 2). */
  decimals?: number;
  unit?: string;
  label: string;
}

/** A run of direct quotes; `speaker` is omitted for anonymous family voices. */
export interface ChatQuote {
  speaker?: string;
  text: string;
}

/** Ordered content of a "Click more" article: prose, quote runs or bullets. */
export type ArticleBlock =
  | string
  | { quotes: ReadonlyArray<ChatQuote> }
  | { bullets: ReadonlyArray<string> }
  /** One engagement photo, placed at body width between sections. */
  | { photo: StakeholderPhoto };

export interface ArticleSection {
  heading?: string;
  blocks: ReadonlyArray<ArticleBlock>;
}

export interface StakeholderArticle {
  title: string;
  sections: ReadonlyArray<ArticleSection>;
}

export interface StakeholderProfile {
  id: string;
  /** Ordinal from the source heading ("01" … "12"). */
  index: string;
  name: string;
  role?: string;
  /**
   * Engagement photographs. Resolved from `sustainabilityPhotos.ts` by `id`;
   * profiles with nothing documented render without a photo layer.
   */
  photos?: ReadonlyArray<StakeholderPhoto>;
  relevantStakeholder?: string;
  activityType?: string;
  partner?: string;
  challenge?: string;
  keyInsight: string;
  whatWeDid?: string;
  whatChanged: string;
  whatChangedLabel?: string;
  /** Some source cards intentionally omit a status line. */
  currentStatus?: string;
  sdgs: ReadonlyArray<number>;
  /** Prose that sits in the main flow right before this card. */
  leadIn?: ReadonlyArray<string>;
  article?: StakeholderArticle;
}

export interface ConsequenceDimension {
  id: "social" | "economic" | "environmental";
  title: string;
  intro?: string;
  benefit: string;
  risk: string;
  boundary: string;
}

export interface AlignmentTable {
  headers: ReadonlyArray<string>;
  rows: ReadonlyArray<ReadonlyArray<string>>;
}

export interface LegacyToolPdf {
  label: string;
  fileName: string;
  /** Explicit manuscript URL, including when a PDF is reused by another tool. */
  url?: string;
}

export interface LegacyTool {
  title: string;
  why: string;
  whatItHelpsWith: string;
  bestFor: string;
  /** One-line summary shown in the Evidence tool table. */
  whatItDoes: string;
  pdfs: ReadonlyArray<LegacyToolPdf>;
}

export interface EvidenceItem {
  text: string;
  figure?: SustainabilityImageAssetKey;
  /** Caption under `figure`; defaults to the asset's alt text. */
  figureCaption?: string;
  /** Follow the item with the chapter's Legacy tool table (Tool / What it does / Download). */
  toolTable?: true;
}

export type ScaleStepKey = "stakeholder" | "consequences" | "alignment" | "legacy" | "evidence";

export interface SdgChapter {
  /** Anchor prefix; SCALE anchors are `${id}-${ScaleStepKey}`. */
  id: string;
  /** Anchor of the chapter heading itself, e.g. `sdg3-health`. */
  headingId: string;
  index: string;
  title: string;
  intro: ReadonlyArray<string>;
  stakeholders: {
    lead: ReadonlyArray<string>;
    profiles: ReadonlyArray<StakeholderProfile>;
  };
  consequences: {
    lead: ReadonlyArray<string>;
    shortTerm: { heading: string; paragraphs: ReadonlyArray<string> };
    longTerm: { heading: string; intro: string };
    dimensions: ReadonlyArray<ConsequenceDimension>;
  };
  alignment: {
    leadHeading?: string;
    lead: ReadonlyArray<string>;
    /** Optional because some chapters present alignment as prose findings only. */
    table?: AlignmentTable;
    findings: ReadonlyArray<string>;
  };
  legacy: { intro: ReadonlyArray<string>; tools: ReadonlyArray<LegacyTool> };
  evidence: {
    intro: ReadonlyArray<string>;
    stats: ReadonlyArray<SustainabilityStat>;
    measurableIntro?: ReadonlyArray<string>;
    measurable: ReadonlyArray<EvidenceItem>;
    significant: ReadonlyArray<string>;
  };
}

/** SCALE letters with the full names shown by the rail and subheadings. */
export const scaleSteps: ReadonlyArray<{ key: ScaleStepKey; letter: string; name: string }> = [
  { key: "stakeholder", letter: "S", name: "Stakeholder Insights" },
  { key: "consequences", letter: "C", name: "Consequences" },
  { key: "alignment", letter: "A", name: "Alignment" },
  { key: "legacy", letter: "L", name: "Legacy" },
  { key: "evidence", letter: "E", name: "Evidence" },
];

export const scaleAnchorId = (chapter: Pick<SdgChapter, "id">, key: ScaleStepKey) =>
  `${chapter.id}-${key}`;


/** Chinese + English PDF pair hosted on iGEM docs. */
export const pdfPair = (slug: string) => [
  { label: "Chinese", fileName: `sustainability-${slug}-cn.pdf` },
  { label: "English", fileName: `sustainability-${slug}-en.pdf` },
];
