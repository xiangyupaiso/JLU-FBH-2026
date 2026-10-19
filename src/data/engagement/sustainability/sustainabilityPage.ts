/**
 * Sustainability page — structured `WikiPageContent` for the shared renderer.
 *
 * Source: 文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md
 * Scope: Overview → SDG 3 → Stakeholder Sustainability Tracker → SDG 9 →
 * SDG 12 (SET) → SDG 4 / 17 (DEVELOP) → GROW → Contributions → Conclusion.
 * Pure data layer — zero React/JSX elements. SDG chapters are expanded from
 * the `SdgChapter` contract by `chapterBlocks`, so every chapter shares one
 * heading tree (4.x → 4.x.1–4.x.5) and one set of feature keys.
 */

import type {
  WikiContentBlock,
  WikiPageContent,
  WikiSection,
} from "../../../components/wiki/wikiPageTypes";
import {
  scaleAnchorId,
  scaleSteps,
  type SdgChapter,
} from "./sdgChapterContract";
import {
  sustainabilityAssets,
  sustainabilityImage,
  sustainabilityImageEntry,
  type SustainabilityImageAssetKey,
} from "./sustainabilityAssets";
import {
  developSection,
  impactFrameworkSection,
  setCoreChallengesSection,
  sstqnSection,
  stakeholderTracker,
  sustainabilityChapters,
  sustainabilityEpigraph,
  sustainabilityOverview,
} from "./sustainabilityData";
import {
  sustainabilityConclusionSection,
  sustainabilityContributionSection,
  sustainabilityGrowSection,
} from "./sustainabilityClosing";

const prose = (...paragraphs: ReadonlyArray<string>): WikiContentBlock => ({
  type: "prose",
  paragraphs: [...paragraphs],
});

const proseWithId = (id: string, ...paragraphs: ReadonlyArray<string>): WikiContentBlock => ({
  type: "prose",
  id,
  paragraphs: [...paragraphs],
});

const feature = (key: string): WikiContentBlock => ({ type: "feature", key });

/** Figure block carrying the registered asset; its alt doubles as caption. */
const fig = (key: SustainabilityImageAssetKey): WikiContentBlock => {
  const entry = sustainabilityImageEntry(key);
  return {
    type: "figure",
    src: sustainabilityImage(key),
    alt: entry.alt,
    caption: entry.alt,
    width: entry.width,
    height: entry.height,
  };
};

/** Feature keys of one SDG chapter, derived from its id. */
export const chapterFeatureKeys = (chapter: Pick<SdgChapter, "id">) => ({
  rail: `${chapter.id}-scale-rail`,
  stakeholders: `${chapter.id}-stakeholders`,
  consequences: `${chapter.id}-consequences`,
  alignmentLead: `${chapter.id}-alignment-lead`,
  legacy: `${chapter.id}-legacy-tools`,
  evidence: `${chapter.id}-evidence`,
});

const subheading = (id: string, index: string, title: string): WikiContentBlock => ({
  type: "subheading",
  id,
  index,
  title,
});

/** SCALE chapter → 4.x heading, SCALE rail and the five S/C/A/L/E subsections. */
function chapterBlocks(chapter: SdgChapter): WikiContentBlock[] {
  const keys = chapterFeatureKeys(chapter);
  const step = (i: number) =>
    subheading(
      scaleAnchorId(chapter, scaleSteps[i].key),
      `${chapter.index}.${i + 1}`,
      `${scaleSteps[i].letter} — ${i === 0 ? chapter.stakeholders.heading ?? scaleSteps[i].name : scaleSteps[i].name}`,
    );

  return [
    subheading(chapter.headingId, chapter.index, chapter.title),
    prose(...chapter.intro),
    feature(keys.rail),

    step(0),
    ...(chapter.stakeholders.lead.length ? [prose(...chapter.stakeholders.lead)] : []),
    feature(keys.stakeholders),

    step(1),
    ...(chapter.consequences.lead.length ? [prose(...chapter.consequences.lead)] : []),
    feature(keys.consequences),

    step(2),
    chapter.alignment.leadHeading
      ? feature(keys.alignmentLead)
      : prose(...chapter.alignment.lead),
    ...(chapter.alignment.table
      ? [
          {
            type: "table" as const,
            headers: [...chapter.alignment.table.headers],
            rows: chapter.alignment.table.rows.map((row) => [...row]),
          },
        ]
      : []),
    ...(chapter.alignment.findingsHeading !== undefined
      ? [
          ...(chapter.alignment.findingsHeading
            ? [{ type: "heading" as const, level: 4 as const, title: chapter.alignment.findingsHeading }]
            : []),
          prose(...chapter.alignment.findings),
        ]
      : [{ type: "note" as const, label: "Key Findings", body: chapter.alignment.findings.join("\n") }]),

    step(3),
    prose(...chapter.legacy.intro),
    feature(keys.legacy),
    ...(chapter.legacy.table
      ? [{ type: "table" as const, headers: [...chapter.legacy.table.headers], rows: chapter.legacy.table.rows.map(row => [...row]) }]
      : []),
    ...(chapter.legacy.closing?.length ? [prose(...chapter.legacy.closing)] : []),

    step(4),
    prose(...chapter.evidence.intro),
    ...(chapter.evidence.measurable.length || chapter.evidence.significant.length ? [feature(keys.evidence)] : []),
  ];
}

/* ----------------------------------------------------------------------------
 * 01 / Overview
 * -------------------------------------------------------------------------- */
const overviewSection: WikiSection = {
  id: "overview",
  index: "01",
  kicker: "01 / Overview",
  navLabel: "Overview",
  masthead: {
    image: sustainabilityImage("overviewMasthead"),
    imageAlt: sustainabilityAssets.overviewMasthead.alt,
    quote: sustainabilityEpigraph.quote,
    attribution: sustainabilityEpigraph.attribution,
    attributionRole: sustainabilityEpigraph.attributionRole,
  },
  title: "Overview",
  summary: "",
  blocks: [
    prose(sustainabilityOverview.intro),
    feature("sdg-cards"),
    prose(sustainabilityOverview.framework),
    feature("overview-set-develop-grow"),
    prose(sustainabilityOverview.stakeholders),
    fig("overviewMapOfStakeholders"),
    proseWithId("overview-scale-model", sustainabilityOverview.scaleModel),
    fig("overviewScaleModel"),
    prose(sustainabilityOverview.sstqn),
    fig("overviewSstQnNetwork"),
    prose(sustainabilityOverview.toolkit),
    fig("overviewReusableToolkit"),
    prose(sustainabilityOverview.contributions),
    fig("overviewContributionPathways"),
  ],
};

/* ----------------------------------------------------------------------------
 * 02 / SST-QN
 * -------------------------------------------------------------------------- */
const sstQnSection: WikiSection = {
  id: "sst-qn",
  index: "02",
  kicker: "02 / SST-QN",
  navLabel: "SST-QN",
  title: sstqnSection.title,
  summary: "",
  blocks: [
    prose(sstqnSection.motivation),
    feature("sdg-dimension-chord"),
    {
      type: "prose-linked",
      parts: [
        { text: sstqnSection.accelerationWeekLead },
        { text: "", ...sstqnSection.accelerationWeekLink },
        { text: sstqnSection.accelerationWeek },
      ],
    },
    prose(sstqnSection.statusIntro),
    fig("sstQnStatusClassification"),
    prose(sstqnSection.boundaryIntro),
    feature("sdg-boundary-matrix"),
    prose(sstqnSection.scoreIntro),
    feature("sdg-interaction-heatmap"),
    prose(sstqnSection.indirectPropagation),
    prose(sstqnSection.alignmentScreening, sstqnSection.reproducibility),
    prose(sstqnSection.transition),
  ],
};

/* ----------------------------------------------------------------------------
 * 03 / SDG Impact Framework
 * -------------------------------------------------------------------------- */
const impactFramework: WikiSection = {
  id: "sdg-impact-framework",
  index: "03",
  kicker: "03 / SET-DEVELOP-GROW",
  navLabel: "SET-DEVELOP-GROW Impact Framework",
  title: impactFrameworkSection.title,
  summary: "",
  blocks: [
    prose(impactFrameworkSection.intro),
    fig("frameworkSetDevelopGrow"),
    prose(impactFrameworkSection.pathway),
  ],
};

/* ----------------------------------------------------------------------------
 * 04 / SET — SDG chapters + Stakeholder Sustainability Tracker
 * -------------------------------------------------------------------------- */
const setCoreChallenges: WikiSection = {
  id: "set-core-challenges",
  index: "04",
  kicker: "04 / SET",
  navLabel: "SET — Addressing Core Challenges",
  title: setCoreChallengesSection.title,
  summary: "",
  blocks: [
    prose(...setCoreChallengesSection.paragraphs),
    ...chapterBlocks(sustainabilityChapters[0]),
    subheading(stakeholderTracker.id, stakeholderTracker.index, stakeholderTracker.title),
    prose(stakeholderTracker.paragraphs[0]),
    feature("stakeholder-tracker-blank"),
    prose(stakeholderTracker.paragraphs[1]),
    feature("stakeholder-tracker-example"),
    feature("stakeholder-tracker-manuals"),
    // SET chapters: SDG 9 / 12 only; DEVELOP chapters live in section 05.
    ...sustainabilityChapters.slice(1, 3).flatMap(chapterBlocks),
  ],
};

/* ----------------------------------------------------------------------------
 * 05 / DEVELOP — SDG 4 and SDG 17
 * -------------------------------------------------------------------------- */
const developBroaderImpact: WikiSection = {
  id: "develop-broader-impact",
  index: "05",
  kicker: "05 / DEVELOP",
  navLabel: "DEVELOP — Expanding Broader Impact",
  title: developSection.title,
  summary: "",
  blocks: [
    prose(...developSection.paragraphs),
    ...sustainabilityChapters.slice(3).flatMap(chapterBlocks),
  ],
};

/* ----------------------------------------------------------------------------
 * Page Export
 * -------------------------------------------------------------------------- */
export const sustainabilityPage: WikiPageContent = {
  route: "/sustainability",
  category: "engagement",
  chapter: "Engagement / 04 of 04",
  eyebrow: "Sustainability",
  title: "Sustainability",
  lede: "",
  boundary: "",
  visual: "sustainability-radar",
  visualLabel: "Sustainability",
  visualSteps: [],
  facts: [],
  sections: [
    overviewSection,
    sstQnSection,
    impactFramework,
    setCoreChallenges,
    developBroaderImpact,
    sustainabilityGrowSection,
    sustainabilityContributionSection,
    sustainabilityConclusionSection,
  ],
  links: [
    { path: "/human-practices", label: "Human Practices & Ethics" },
    { path: "/education", label: "Education & Outreach" },
    { path: "/entrepreneurship", label: "Affordable Healthcare" },
    { path: "/safety-and-security", label: "Environmental Safety" },
  ],
  next: {
    path: "/roster",
    label: "Roster",
    title: "Meet the People Behind CirCure",
    description: "The work described here depends on people across research, education and engagement. Meet the students, advisors and mentors who brought their different skills to CirCure.",
  },
};
