import { useMemo, type ReactNode } from "react";
/* eslint-disable react-refresh/only-export-components --
   This module exports the feature-map builder next to its small layout
   helpers; it is not a fast-refresh boundary. */
import {
  ConsequencesDimensionCard,
  OverviewSetDevelopGrowCards,
  PdfToolList,
  RichText,
  SCALEProgressChain,
  SDGInteractiveCard,
  SdgBoundaryMatrix,
  SdgDimensionChord,
  SdgInteractionHeatmap,
  SSTQNClassificationMatrix,
  SSTQNScoreProcess,
  StakeholderDeck,
  StakeholderProfileCard,
  StatsGrid,
  SustainabilityPdfPreview,
  ToolTable,
} from "./sustainability";
import type { SdgChapter } from "../../../../data/engagement/sustainability/sdgChapterContract";
import {
  sustainabilityAssets,
  sustainabilityImage,
} from "../../../../data/engagement/sustainability/sustainabilityAssets";
import {
  coreSdgs,
  impactTiers,
  sstqnSection,
  stakeholderTracker,
  sustainabilityChapters,
  sustainabilityStats,
} from "../../../../data/engagement/sustainability/sustainabilityData";
import {
  chapterFeatureKeys,
  sustainabilityPage,
} from "../../../../data/engagement/sustainability/sustainabilityPage";
import { useRoutePageScroll } from "../../WikiRoutePage";
import type { WikiContentBlock } from "../../wikiPageTypes";
import type { ScaleRailStep } from "./sustainability/SCALEProgressChain";
import "../../../../styles/features/sustainability-panels.css";

/**
 * Feature slots of the Sustainability page.
 *
 * Page-level slots are listed once; every SDG chapter contributes the same five
 * slots (SCALE rail, stakeholders, consequences, legacy tools, evidence) under
 * keys derived from its id, so a new chapter needs no code here.
 */

type FeatureMap = Record<string, ReactNode>;

const sstqnPdf = sustainabilityAssets.sstQnModelConstruction;

function ChartFigure({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="wiki-figure sust-chart">
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

/**
 * Third-level headings under a chapter ("4.1" → "4.1.1" … "4.1.6"), read from
 * the page data so the rail always matches what the article renders. SCALE
 * titles ("S — Stakeholder Insights") give their letter; the Tracker is "T".
 */
function chapterRailSteps(chapter: SdgChapter): ScaleRailStep[] {
  const prefix = `${chapter.index}.`;
  return sustainabilityPage.sections
    .flatMap((section) => section.blocks ?? [])
    .filter(
      (block): block is Extract<WikiContentBlock, { type: "subheading" }> =>
        block.type === "subheading" && block.index.startsWith(prefix),
    )
    .map((block) => {
      const scale = /^(\S) — (.+)$/.exec(block.title);
      return {
        id: block.id,
        index: block.index,
        mark: scale ? scale[1] : "T",
        label: scale ? scale[2] : block.title,
      };
    });
}

/** Subsection rail of one chapter, following the reader's scroll spy. */
function ScaleRail({ chapter }: { chapter: SdgChapter }) {
  const { activeSubsection } = useRoutePageScroll();
  const steps = useMemo(() => chapterRailSteps(chapter), [chapter]);
  const allSubheadings = sustainabilityPage.sections
    .flatMap((section) => section.blocks ?? [])
    .filter(
      (block): block is Extract<WikiContentBlock, { type: "subheading" }> =>
        block.type === "subheading",
    );
  const chapterIndex = allSubheadings.findIndex((block) => block.id === chapter.headingId);
  const chapterDepth = chapter.index.split(".").length;
  const nextChapter = allSubheadings
    .slice(chapterIndex + 1)
    .find((block) => block.index.split(".").length === chapterDepth);
  // A chapter ends at the next same-level heading. For the final chapter,
  // SCALEProgressChain falls back to the containing SET section's bottom.
  const endId = nextChapter?.id ?? "";
  return (
    <SCALEProgressChain
      steps={steps}
      parentId={chapter.headingId}
      endId={endId}
      activeId={activeSubsection}
    />
  );
}

type StakeProfile = SdgChapter["stakeholders"]["profiles"][number];

/** Consecutive profiles without a "Click more" article share one deck. */
function stakeholderRuns(profiles: ReadonlyArray<StakeProfile>) {
  const runs: StakeProfile[][] = [];
  profiles.forEach((profile, index) => {
    const previous = profiles[index - 1];
    if (!profile.article && previous && !previous.article) runs[runs.length - 1].push(profile);
    else runs.push([profile]);
  });
  return runs;
}

function LeadIn({ run }: { run: ReadonlyArray<StakeProfile> }) {
  const paragraphs = run.flatMap((profile) => profile.leadIn ?? []);
  if (!paragraphs.length) return null;
  return (
    <div className="wiki-prose">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>
          <RichText text={paragraph} />
        </p>
      ))}
    </div>
  );
}

function StakeholderGrid({ chapter }: { chapter: SdgChapter }) {
  return (
    <div className="sust-stake-grid">
      {stakeholderRuns(chapter.stakeholders.profiles).map((run) => (
        <div className="sust-stake-grid__item" key={run[0].id}>
          <LeadIn run={run} />
          {run.length > 1 ? (
            <StakeholderDeck profiles={run} />
          ) : (
            <StakeholderProfileCard profile={run[0]} />
          )}
        </div>
      ))}
    </div>
  );
}

/** E — Evidence: numbered Measurable items with figures, Significant prose. */
function EvidencePanel({ chapter }: { chapter: SdgChapter }) {
  const { measurableIntro, measurable, significant } = chapter.evidence;
  return (
    <div className="sust-evidence">
      <h4 className="sust-minor-heading">Measurable</h4>
      {measurableIntro?.length ? (
        <div className="wiki-prose">
          {measurableIntro.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      ) : null}
      <ol className="sust-evidence__list">
        {measurable.map((item) => (
          <li className="sust-evidence__item" key={item.text}>
            <p>
              <RichText text={item.text} />
            </p>
            {item.toolTable ? <ToolTable tools={chapter.legacy.tools} /> : null}
            {item.figure ? (
              // Keep the caption as the source text; figure labels are not added here.
              <figure className="wiki-figure">
                <img
                  src={sustainabilityImage(item.figure)}
                  alt={sustainabilityAssets[item.figure].alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{item.figureCaption ?? sustainabilityAssets[item.figure].alt}</figcaption>
              </figure>
            ) : null}
          </li>
        ))}
      </ol>
      <h4 className="sust-minor-heading">Significant</h4>
      <div className="wiki-prose">
        {significant.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
    </div>
  );
}

function chapterFeatures(chapter: SdgChapter): FeatureMap {
  const keys = chapterFeatureKeys(chapter);
  return {
    [keys.rail]: <ScaleRail chapter={chapter} />,
    [keys.stakeholders]: <StakeholderGrid chapter={chapter} />,
    [keys.consequences]: <ConsequencesDimensionCard consequences={chapter.consequences} />,
    [keys.alignmentLead]: (
      <div>
        <h4 className="sust-minor-heading">{chapter.alignment.leadHeading}</h4>
        <div className="wiki-prose">
          {chapter.alignment.lead.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </div>
    ),
    [keys.legacy]: <PdfToolList tools={chapter.legacy.tools} instance={`${chapter.id}-legacy`} />,
    [keys.evidence]: <EvidencePanel chapter={chapter} />,
  };
}

export function sustainabilityFeatures(): FeatureMap {
  return {
    "sdg-cards": (
      <div className="sust-sdg-grid">
        {coreSdgs.map((sdg) => (
          <SDGInteractiveCard key={sdg.number} sdg={sdg} />
        ))}
      </div>
    ),
    "overview-set-develop-grow": <OverviewSetDevelopGrowCards tiers={impactTiers} />,
    stats: <StatsGrid stats={sustainabilityStats} />,
    "sstqn-matrix": <SSTQNClassificationMatrix caption={sstqnSection.statusCaption} />,
    "sdg-boundary-matrix": (
      <ChartFigure caption={sstqnSection.boundaryCaption}>
        <SdgBoundaryMatrix />
      </ChartFigure>
    ),
    "sstqn-score-flow": <SSTQNScoreProcess />,
    "sdg-interaction-heatmap": (
      <ChartFigure caption={sstqnSection.scoreCaption}>
        <SdgInteractionHeatmap />
      </ChartFigure>
    ),
    "sdg-dimension-chord": <SdgDimensionChord />,
    "pdf-sst-qn": (
      <SustainabilityPdfPreview
        manual={{
          title: sstqnSection.pdfTitle,
          meta: `SST-QN · Report · ${sstqnPdf.pdfPages} pages`,
          pdfUrl: sstqnPdf.uploadUrl,
          fileName: sstqnPdf.fileName,
        }}
      />
    ),
    ...Object.assign({}, ...sustainabilityChapters.map(chapterFeatures)),
    "stakeholder-tracker-tools": (
      <PdfToolList tools={stakeholderTracker.files} instance="tracker" />
    ),
  };
}
