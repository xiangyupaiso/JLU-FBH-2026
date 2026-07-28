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
}
