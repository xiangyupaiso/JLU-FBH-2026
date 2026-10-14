import { useMemo, type ReactNode } from "react";
import { Link } from "react-router-dom";
/* eslint-disable react-refresh/only-export-components --
   This module exports the feature-map builder next to its small layout
   helpers; it is not a fast-refresh boundary. */
import {
  ConsequencesDimensionCard,
  EduFeedbackCards,
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
import type {
  EducationResource,
  SdgChapter,
} from "../../../../data/engagement/sustainability/sdgChapterContract";
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

/** One reusable educational resource (virtual lab, game, picture book …). */
function ResourceShowcase({ resource }: { resource: EducationResource }) {
  return (
    <article className="sust-edu-resource">
      <h5 className="sust-edu-resource__title">{resource.title}</h5>
      <div className="wiki-prose">
        {resource.paragraphs.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
      {resource.figure ? (
        <figure className="wiki-figure sust-edu-resource__figure">
          <img
            src={sustainabilityImage(resource.figure)}
            alt={sustainabilityAssets[resource.figure].alt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ) : null}
      {resource.gamesLink ? (
        <Link className="sust-edu-resource__games" to="/games">
          Visit the Games page
          <span aria-hidden="true"> →</span>
        </Link>
      ) : null}
      {resource.pdfs?.length ? (
        <div className="sust-edu-resource__pdfs">
          {resource.pdfs.map((pdf) => (
            <a
              key={pdf.fileName}
              className="sust-stake-card__resource-btn"
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pdf.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

/**
 * SDG 4 S section: the three educator cards, then the four resource
 * showcases and the eighteen activities grouped by audience.
 */
function Sdg4StakeholderPanel({ chapter }: { chapter: SdgChapter }) {
  const extras = chapter.stakeholders.extras;
  if (!extras) return <StakeholderGrid chapter={chapter} />;
  return (
    <div className="sust-edu">
      <StakeholderGrid chapter={chapter} />

      <div className="wiki-prose">
        {extras.transition.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
      <div className="sust-edu-resource-grid">
        {extras.resources.map((resource) => (
          <ResourceShowcase key={resource.id} resource={resource} />
        ))}
      </div>

      <div className="wiki-prose">
        {extras.activitiesLead.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
        {extras.activitiesLeadLink ? (
          <p>
            <RichText text={extras.activitiesLeadLink.before} />
            <a
              className="sust-edu-inline-link"
              href={`#${extras.activitiesLeadLink.target}`}
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById(extras.activitiesLeadLink!.target)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {extras.activitiesLeadLink.label}
            </a>
            <RichText text={extras.activitiesLeadLink.after} />
          </p>
        ) : null}
      </div>

      {extras.groups.map((group) => (
        <section className="sust-edu-group" key={group.id}>
          <h5 className="sust-edu-group__title">{group.title}</h5>
          <div className="wiki-prose">
            {group.intro.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
          <div className="sust-stake-grid">
            {stakeholderRuns(group.activities).map((run) => (
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
        </section>
      ))}

      <section className="sust-edu-closing">
        <h5 className="sust-edu-group__title">{extras.closing.title}</h5>
        <div className="wiki-prose">
          {extras.closing.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

/** E — Evidence: numbered Measurable items with figures, Significant prose. */
function EvidencePanel({ chapter }: { chapter: SdgChapter }) {
  const { measurableIntro, measurable, measurableClosing, significant } = chapter.evidence;
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
          <li className="sust-evidence__item" key={item.title ?? item.text}>
            {item.title ? (
              <h5 className="sust-evidence__item-title">{item.title}</h5>
            ) : null}
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
      {measurableClosing?.length ? (
        <div className="wiki-prose">
          {measurableClosing.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      ) : null}
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

/** Chapter-specific slots keyed from the data layer (e.g. microplate survey). */
const chapterConsequenceSlots: Record<string, ReactNode> = {
  "sdg4-feedback": <EduFeedbackCards />,
};

function chapterFeatures(chapter: SdgChapter): FeatureMap {
  const keys = chapterFeatureKeys(chapter);
  return {
    [keys.rail]: <ScaleRail chapter={chapter} />,
    [keys.stakeholders]: chapter.stakeholders.extras ? (
      <Sdg4StakeholderPanel chapter={chapter} />
    ) : (
      <StakeholderGrid chapter={chapter} />
    ),
    [keys.consequences]: (
      <ConsequencesDimensionCard
        consequences={chapter.consequences}
        shortTermFeature={
          chapter.consequences.featureKey
            ? chapterConsequenceSlots[chapter.consequences.featureKey]
            : null
        }
      />
    ),
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
