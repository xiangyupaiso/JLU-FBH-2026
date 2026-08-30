export type WikiCategory = "project" | "wet-lab" | "dry-lab" | "engagement";

export type WikiVisual =
  | "living-ring"
  | "engineering-cycle"
  | "evidence-ledger"
  | "resource-library"
  | "experiment-gates"
  | "notebook-trace"
  | "measurement-field"
  | "platform-orbit"
  | "safety-boundary"
  | "model-manuscript"
  | "software-console"
  | "hardware-schematic"
  | "games-portal"
  | "venture-path"
  | "human-thread"
  | "education-dialogue"
  | "inclusion-network"
  | "sustainability-radar";

export type WikiSectionLayout =
  | "editorial"
  | "steps"
  | "ledger"
  | "matrix"
  | "timeline";

export interface WikiFact {
  label: string;
  value: string;
}

export interface WikiItem {
  label: string;
  navLabel?: string;
  title: string;
  body: string;
  evidence?: string[];
  decision?: string;
  status?: "recorded" | "planned" | "boundary" | "open";
}

export type WikiCalloutTone = "navy" | "coral" | "gold" | "neutral";

/**
 * Ordered content block inside a section. When a section provides `blocks`,
 * the renderer emits the section header (index / title / summary) followed by
 * the blocks in order — this lets a page keep faithful paragraph / figure /
 * callout interleaving while still running through the shared renderer.
 */
export type WikiContentBlock =
  | { type: "prose"; paragraphs: string[] }
  | { type: "figure"; src: string; alt: string; caption?: string }
  | {
      type: "image-placeholder";
      filename: string;
      instruction: string;
      caption?: string;
    }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "mini-visual";
      label: string;
      title: string;
      items: string[];
      tone?: "navy" | "gold" | "care";
    }
  | {
      type: "callout";
      tone?: WikiCalloutTone;
      label?: string;
      body: string;
    }
  | {
      type: "subheading";
      id: string;
      index: string;
      kicker?: string;
      title: string;
    }
  | { type: "feature"; key: string }
  | { type: "chapter-link"; target: string; label: string }
  | {
      type: "prose-linked";
      parts: Array<{ text: string; target?: string; label?: string }>;
    }
  | { type: "note"; label: string; body: string }
  | {
      type: "epigraph";
      quote: string;
      translationZh: string;
      attribution: string;
      attributionRole: string;
    }
  | {
      /**
       * Prose-anchored two-column pair: narrative text on the left, one compact
       * figure / chart as an aside on the right. Keeps charts from becoming
       * full-width banners that interrupt the reading column. Collapses to a
       * single column below 880px.
       */
      type: "split";
      id: string;
      prose: WikiContentBlock[];
      aside: WikiContentBlock;
    };

export interface WikiSection {
  id: string;
  index: string;
  kicker: string;
  navLabel?: string;
  title: string;
  summary: string;
  body?: string[];
  layout?: WikiSectionLayout;
  items?: WikiItem[];
  blocks?: WikiContentBlock[];
  note?: {
    label: string;
    body: string;
  };
}

export interface WikiLink {
  path: string;
  label: string;
}

export interface WikiPageContent {
  route: string;
  category: WikiCategory;
  chapter: string;
  eyebrow: string;
  title: string;
  lede: string;
  boundary: string;
  visual: WikiVisual;
  visualLabel: string;
  visualSteps: string[];
  facts: WikiFact[];
  sections: WikiSection[];
  links: WikiLink[];
  next: WikiLink & { title: string };
  heroMinimal?: boolean;
}
