/**
 * Sustainability page — structured `WikiPageContent` for the shared renderer.
 *
 * Source: 文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md
 * Scope: Overview → SDG 3 → Stakeholder Sustainability Tracker.
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
  type SustainabilityImageAssetKey,
} from "./sustainabilityAssets";
import {
  impactFrameworkSection,
  setCoreChallengesSection,
  sstqnSection,
  stakeholderTracker,
  sustainabilityChapters,
  sustainabilityEpigraph,
  sustainabilityOverview,
} from "./sustainabilityData";

const prose = (...paragraphs: ReadonlyArray<string>): WikiContentBlock => ({
  type: "prose",
  paragraphs: [...paragraphs],
});

const feature = (key: string): WikiContentBlock => ({ type: "feature", key });

/** Figure block carrying the registered asset; its alt doubles as caption. */
const fig = (key: SustainabilityImageAssetKey): WikiContentBlock => ({
  type: "figure",
  src: sustainabilityImage(key),
  alt: sustainabilityAssets[key].alt,
  caption: sustainabilityAssets[key].alt,
});

/** Feature keys of one SDG chapter, derived from its id. */
export const chapterFeatureKeys = (chapter: Pick<SdgChapter, "id">) => ({
  rail: `${chapter.id}-scale-rail`,
  stakeholders: `${chapter.id}-stakeholders`,
  consequences: `${chapter.id}-consequences`,
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
      `${scaleSteps[i].letter} — ${scaleSteps[i].name}`,
    );

  return [
    subheading(chapter.headingId, chapter.index, chapter.title),
    prose(...chapter.intro),
    feature(keys.rail),

    step(0),
    prose(...chapter.stakeholders.lead),
    feature(keys.stakeholders),

    step(1),
    prose(...chapter.consequences.lead),
    feature(keys.consequences),

    step(2),
    prose(...chapter.alignment.lead),
    {
      type: "table",
      headers: [...chapter.alignment.table.headers],
      rows: chapter.alignment.table.rows.map((row) => [...row]),
    },
    { type: "note", label: "Key Findings", body: chapter.alignment.findings.join("\n") },

    step(3),
    prose(...chapter.legacy.intro),
    feature(keys.legacy),

    step(4),
    prose(...chapter.evidence.intro),
    feature(keys.evidence),
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
  title: "Overview",
  summary: "",
  blocks: [
    { type: "epigraph", ...sustainabilityEpigraph },
    prose(sustainabilityOverview.intro),
    feature("sdg-cards"),
    prose(sustainabilityOverview.framework),
    feature("overview-set-develop-grow"),
    prose(sustainabilityOverview.stakeholders),
    fig("overviewMapOfStakeholders"),
    prose(sustainabilityOverview.scaleModel),
    fig("overviewScaleModel"),
    prose(sustainabilityOverview.sstqn),
    fig("overviewSstQnNetwork"),
    prose(sustainabilityOverview.toolkit),
    fig("overviewReusableToolkit"),
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
  kicker: "03 / SDG Impact Framework",
  navLabel: "SDG Impact Framework",
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
    ...sustainabilityChapters.flatMap(chapterBlocks),
    subheading(stakeholderTracker.id, stakeholderTracker.index, stakeholderTracker.title),
    prose(...stakeholderTracker.paragraphs),
    feature("stakeholder-tracker-tools"),
  ],
};

/* ----------------------------------------------------------------------------
 * Page Export
 * -------------------------------------------------------------------------- */
export const sustainabilityPage: WikiPageContent = {
  route: "/sustainability",
  category: "engagement",
  chapter: "Engagement / 05 of 05",
  eyebrow: "Sustainability",
  title: "Sustainability",
  lede: "",
  boundary: "",
  visual: "sustainability-radar",
  visualLabel: "Sustainability",
  visualSteps: [],
  facts: [],
  sections: [overviewSection, sstQnSection, impactFramework, setCoreChallenges],
  links: [
    { path: "/human-practices", label: "Human Practices" },
    { path: "/education", label: "Education" },
    { path: "/inclusivity", label: "Inclusivity" },
  ],
  next: {
    path: "/roster",
    label: "Roster",
    title: "Unite around a shared vision to turn the impossible.",
  },
};
