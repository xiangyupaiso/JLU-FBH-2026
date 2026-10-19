import { useMemo, useState, type ReactNode } from "react";
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
  SdgExplorer,
  StakeholderDeck,
  StakeholderProfileCard,
  StatsGrid,
  SustainabilityInteractiveCity,
  SustainabilityPdfPreview,
  ToolTable,
} from "./sustainability";
import type {
  EducationResource,
  SdgChapter,
} from "../../../../data/engagement/sustainability/sdgChapterContract";
import {
  sustainabilityAssets,
  sustainabilityDocUrl,
  sustainabilityImage,
  sustainabilityImageEntry,
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
import { useRoutePageScroll, WikiContentBlocks } from "../../WikiRoutePage";
import type { WikiContentBlock } from "../../wikiPageTypes";
import { numberWikiSections } from "../../wikiPageNumbering";
import type { ScaleRailStep } from "./sustainability/SCALEProgressChain";
import { SdgContributionBubbles } from "./sustainability/SdgContributionBubbles";
import { DocumentViewer, type WikiDocument } from "../../documents/DocumentViewer";
import { GameShowcaseLink } from "../GamesShowcase";
import { StakeholderArticleView } from "./sustainability/StakeholderProfileCard";
import { StakeholderTrackerEmbed } from "./sustainability/StakeholderTrackerEmbed";
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
const numberedSections = numberWikiSections(sustainabilityPage.sections);

function ChartFigure({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
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
  const headings = numberedSections.flatMap((section) => section.blocks ?? []);
  const heading = headings.find(
    (block) => block.type === "subheading" && block.id === chapter.headingId,
  );
  if (!heading || heading.type !== "subheading") return [];
  const prefix = `${heading.index}.`;
  return headings
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
  const sectionIndex = numberedSections.findIndex((section) =>
    section.blocks?.some(
      (block) => block.type === "subheading" && block.id === chapter.headingId,
    ),
  );
  const allSubheadings = (
    numberedSections[sectionIndex]?.blocks ?? []
  ).filter(
    (block): block is Extract<WikiContentBlock, { type: "subheading" }> =>
      block.type === "subheading",
  );
  const chapterIndex = allSubheadings.findIndex(
    (block) => block.id === chapter.headingId,
  );
  const chapterDepth = allSubheadings[chapterIndex]?.index.split(".").length;
  const nextChapter = allSubheadings
    .slice(chapterIndex + 1)
    .find((block) => block.index.split(".").length === chapterDepth);
  const endId =
    nextChapter?.id ?? numberedSections[sectionIndex + 1]?.id ?? "";
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
    if (!profile.article && previous && !previous.article)
      runs[runs.length - 1].push(profile);
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

/** SDG 17 follows the manuscript's four partnership groups. */
function PartnershipStakeholders({ chapter }: { chapter: SdgChapter }) {
  return (
    <div className="sust-partnerships">
      {chapter.stakeholders.groups?.map((group) => (
        <section
          className="sust-partnerships__group"
          key={group.id}
          id={group.id}
        >
          {group.title ? (
            <h4 className="sust-minor-heading">
              {group.index ? `${group.index} — ` : ""}
              {group.title}
            </h4>
          ) : null}
          {group.intro.length ? (
            <WikiContentBlocks
              sectionId={group.id}
              blocks={[{ type: "prose", paragraphs: [...group.intro] }]}
            />
          ) : null}
          {group.layout === "prose" ? (
            group.profiles.map((profile) => (
              <div
                className="sust-partnerships__prose"
                key={profile.id}
                id={profile.id}
              >
                <h4 className="sust-minor-heading">
                  {profile.index} — {profile.name}
                </h4>
                {profile.article ? (
                  <StakeholderArticleView article={profile.article} />
                ) : null}
              </div>
            ))
          ) : (
            <div className="sust-stake-grid">
              {group.profiles.map((profile) => (
                <StakeholderProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          )}
        </section>
      ))}
      {chapter.stakeholders.closing?.length ? (
        <WikiContentBlocks
          sectionId={chapter.id}
          blocks={[
            { type: "prose", paragraphs: [...chapter.stakeholders.closing] },
          ]}
        />
      ) : null}
    </div>
  );
}

/** One reusable educational resource (virtual lab, game, picture book …). */
function ResourceShowcase({ resource }: { resource: EducationResource }) {
  const game =
    resource.id === "virtual-laboratory"
      ? "virtual-lab"
      : resource.id === "bio-memory-match"
        ? "bio-memory"
        : resource.id === "breast-guardian-rpg"
          ? "breast-guardian"
          : undefined;
  return (
    <article className="sust-edu-resource" id={resource.id}>
      <h5 className="sust-edu-resource__title">{resource.title}</h5>
      <div className="wiki-prose">
        {resource.paragraphs.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
      {resource.gamesLink && game ? (
        <GameShowcaseLink game={game} />
      ) : resource.figure ? (
        <figure className="wiki-figure sust-edu-resource__figure">
          <img
            src={sustainabilityImage(resource.figure)}
            alt={sustainabilityAssets[resource.figure].alt}
            width={sustainabilityImageEntry(resource.figure).width}
            height={sustainabilityImageEntry(resource.figure).height}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ) : null}
      {resource.pdfs?.length ? (
        <div className="sust-edu-resource__pdfs">
          {resource.pdfs.map((pdf) => (
            <DocumentViewer
              key={pdf.fileName}
              document={{
                caption: pdf.label,
                url: pdf.url ?? sustainabilityDocUrl(pdf.fileName),
                openUrl: pdf.url ?? sustainabilityDocUrl(pdf.fileName),
              }}
              defaultOpen
            />
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
  const { measurableIntro, measurable, measurableClosing, significant } =
    chapter.evidence;
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
            {item.table ? (
              <WikiContentBlocks
                sectionId={`${chapter.id}-evidence`}
                blocks={[
                  {
                    type: "table",
                    headers: [...item.table.headers],
                    rows: item.table.rows.map((row) => [...row]),
                  },
                ]}
              />
            ) : null}
            {item.document ? (
              <DocumentViewer
                document={{
                  caption: item.document.label,
                  url: item.document.url ?? sustainabilityDocUrl(item.document.fileName),
                  openUrl: item.document.url ?? sustainabilityDocUrl(item.document.fileName),
                  downloadUrl: item.document.url ?? sustainabilityDocUrl(item.document.fileName),
                }}
              />
            ) : null}
            {item.figure ? (
              // Keep the caption as the source text; figure labels are not added here.
              <figure className="wiki-figure">
                <img
                  src={sustainabilityImage(item.figure)}
                  alt={sustainabilityAssets[item.figure].alt}
                  width={sustainabilityImageEntry(item.figure).width}
                  height={sustainabilityImageEntry(item.figure).height}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  {item.figureCaption ?? sustainabilityAssets[item.figure].alt}
                </figcaption>
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

/** Folder documents use the same modal reader as Safety. */
function ChapterToolArchive({ chapter }: { chapter: SdgChapter }) {
  const [selected, setSelected] = useState<WikiDocument | null>(null);
  return (
    <>
      <PdfToolList
        tools={chapter.legacy.tools}
        instance={`${chapter.id}-legacy`}
        onPdfSelect={(pdf, title) =>
          setSelected({
            caption: `${title} — ${pdf.label}`,
            url: pdf.url ?? sustainabilityDocUrl(pdf.fileName),
            openUrl: pdf.url ?? sustainabilityDocUrl(pdf.fileName),
          })
        }
      />
      {selected ? (
        <DocumentViewer
          variant="modal"
          document={selected}
          open
          onOpenChange={(open) => {
            if (!open) setSelected(null);
          }}
        />
      ) : null}
    </>
  );
}

function chapterFeatures(chapter: SdgChapter): FeatureMap {
  const keys = chapterFeatureKeys(chapter);
  return {
    [keys.rail]: <ScaleRail chapter={chapter} />,
    [keys.stakeholders]: chapter.stakeholders.groups ? (
      <PartnershipStakeholders chapter={chapter} />
    ) : chapter.stakeholders.extras ? (
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
    [keys.legacy]: <ChapterToolArchive chapter={chapter} />,
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
    "overview-set-develop-grow": (
      <OverviewSetDevelopGrowCards tiers={impactTiers} />
    ),
    "sdg-contribution-bubbles": <SdgContributionBubbles />,
    "sdg-explorer": <SdgExplorer />,
    stats: <StatsGrid stats={sustainabilityStats} />,
    "sstqn-matrix": (
      <SSTQNClassificationMatrix caption={sstqnSection.statusCaption} />
    ),
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
    "stakeholder-tracker-blank": <StakeholderTrackerEmbed variant="blank" />,
    "stakeholder-tracker-example": <StakeholderTrackerEmbed variant="example" />,
    "stakeholder-tracker-manuals": (
      <div className="sust-tracker-manuals">
        {stakeholderTracker.manuals.map((manual) => (
          <DocumentViewer
            key={manual.fileName}
            document={{
              caption: manual.label,
              url: manual.url,
              openUrl: manual.url,
              downloadUrl: manual.url,
            }}
          />
        ))}
      </div>
    ),
    "sustainability-interactive-city": <SustainabilityInteractiveCity />,
  };
}
