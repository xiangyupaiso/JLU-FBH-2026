import { QueuedImage } from "../../../common/QueuedImage";
import { useEffect, type ReactNode } from "react";
import type { WikiContentBlock } from "../../wikiPageTypes";
import { WikiContentBlocks } from "../../WikiRoutePage";
import { ManuscriptFigureGallery } from "../shared/ManuscriptFigureGallery";
import { JudgingCriteria } from "../shared/JudgingCriteria";
import { linkify } from "../../proseInline";
import { TorusFoldViewer } from "./TorusFoldViewer";
import { EpitopeStructuralValidationChart } from "../project/EpitopeStructuralValidationChart";
import {
  getSoftwareResource,
  softwareFigures,
  softwareUsageVideo,
  softwareVideo,
} from "../../../../data/drylab/softwareAssets";
import {
  softwarePage,
  softwareJudgingCriteria,
  softwarePanels,
  softwareReferences,
  softwareCitationLabels,
  type SoftwarePanel,
} from "../../../../data/drylab/softwarePage";
import {
  buildLabelCitationIndex,
  reportCitationIssues,
} from "../../../../data/citations/citationIndex";
import {
  Backlinks,
  CitationPreview,
  flashCitationTarget,
  createCitationRenderer,
  type CitationFlashTint,
} from "../../citations/CitationRegister";
import "../../../../styles/features/software-panels.css";

/* eslint-disable react-refresh/only-export-components */

const DRY_LAB_CITATION_FLASH: CitationFlashTint = {
  ramp: "rgba(21, 62, 52, 0.14)",
  ring: "0 0 0 3px rgba(21, 62, 52, 0.32)",
};

// Use the same indexed citation anchors as Experiments, including Judging.
// Explicit author-year links become citation text before indexing and rendering.
const softwareLabels: Record<string, number> = { ...softwareCitationLabels };
function normalizeSoftwareCitationLinks(text: string): string {
  return text.replace(/\[([^\]\n]+)\]\((?:https:\/\/2026\.igem\.wiki\/jlu-fbh\/software)?#ref-(\d+)\)/g,
    (original, label: string, id: string) => {
      if (!softwareReferences.some((reference) => reference.id === Number(id))) return original;
      const citation = label.replace(/\*\*/g, "").replace(/^\(|\)$/g, "").trim();
      softwareLabels[citation] = Number(id);
      return label;
    });
}

function normalizeSoftwareContent<T>(value: T): T {
  if (typeof value === "string") return normalizeSoftwareCitationLinks(value) as T;
  if (Array.isArray(value)) return value.map(normalizeSoftwareContent) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, entry]) =>
      [key, normalizeSoftwareContent(entry)])) as T;
  }
  return value;
}

function softwareCitationBlocks(blocks: readonly WikiContentBlock[]): WikiContentBlock[] {
  return blocks.flatMap<WikiContentBlock>((block) => {
    if (block.type === "feature" && block.key === "software-judging-criteria") {
      return softwareJudgingCriteria.map((criterion) => ({
        type: "prose", paragraphs: criterion.paragraphs.map(normalizeSoftwareCitationLinks),
      }));
    }
    if (block.type === "feature" && softwarePanels[block.key]) {
      const panel = softwarePanels[block.key];
      return panel.kind === "fold" ? softwareCitationBlocks(panel.blocks)
        : panel.entries.map((entry) => normalizeSoftwareContent(entry.figure));
    }
    if (block.type === "table") {
      return [{ type: "prose", paragraphs: block.rows.flat().map(normalizeSoftwareCitationLinks) }];
    }
    if (block.type === "split") {
      return [{ ...normalizeSoftwareContent(block), prose: softwareCitationBlocks(block.prose) }];
    }
    return [normalizeSoftwareContent(block)];
  });
}

const indexedSoftwareSections = softwarePage.sections.map((section) => ({
  ...normalizeSoftwareContent(section),
  blocks: softwareCitationBlocks(section.blocks ?? []),
}));
const softwareCitationIndex = buildLabelCitationIndex(
  indexedSoftwareSections, softwareReferences, softwareLabels,
);
const softwareReferencesInOrder = [
  ...[...softwareCitationIndex.byRef.keys()].flatMap((id) =>
    softwareReferences.filter((reference) => reference.id === id)),
  ...softwareReferences.filter((reference) => !softwareCitationIndex.byRef.has(reference.id)),
];
const softwareReferenceNumbers = new Map(
  softwareReferencesInOrder.map((reference, position) => [reference.id, position + 1]),
);
reportCitationIssues("software", softwareCitationIndex);

const renderCitations = createCitationRenderer(
  softwareCitationIndex,
  DRY_LAB_CITATION_FLASH,
);

export function renderSoftwareCitedText(
  text: string,
  fallback: (text: string) => ReactNode,
  sectionId?: string,
  locationKey?: string,
) {
  return renderCitations(normalizeSoftwareCitationLinks(text), fallback, sectionId, locationKey);
}

function SoftwareReferenceList() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!softwareReferences.some((reference) => id === `ref-${reference.id}`)) return;
    const target = document.getElementById(id);
    if (target) flashCitationTarget(target, DRY_LAB_CITATION_FLASH);
  }, []);

  return (
    <>
      <ol className="wiki-reference-list" data-citation-style={softwareCitationIndex.style}>
        {softwareReferencesInOrder.map((reference) => (
          <li key={reference.id} id={`ref-${reference.id}`} tabIndex={-1} className="wiki-reference-item">
            <span className="wiki-reference-item__index">{softwareReferenceNumbers.get(reference.id)}.</span>
            <div className="wiki-reference-item__content" id={`ref-${reference.id}-body`}>
              {linkify(reference.harvard)}
              <Backlinks
                occs={(softwareCitationIndex.byRef.get(reference.id) ?? []).slice(0, 1)}
                tint={DRY_LAB_CITATION_FLASH}
              />
            </div>
          </li>
        ))}
      </ol>
      <CitationPreview references={softwareReferencesInOrder} style={softwareCitationIndex.style} referenceNumbers={softwareReferenceNumbers} />
    </>
  );
}

function renderSoftwareJudgingText(text: string): ReactNode {
  return renderSoftwareCitedText(text, linkify, "software-judging");
}

function SoftwareManuscriptPanel({ panel }: { panel: SoftwarePanel }) {
  if (panel.kind === "gallery") return <ManuscriptFigureGallery {...panel} />;
  return (
    <details className="software-implementation" id={panel.id}>
      <summary>{panel.title}</summary>
      <div className="software-implementation__body">
        <WikiContentBlocks blocks={panel.blocks} sectionId={panel.id} />
      </div>
    </details>
  );
}

function SoftwareRegistryVideo() {
  const url =
    softwareVideo.uploadUrl || getSoftwareResource(softwareVideo.fileName);
  return (
    <figure className="wiki-figure wiki-figure--labelled software-registry-video">
      <QueuedImage
        src={url}
        alt={softwareVideo.alt}
        loading="lazy"
        decoding="async"
        width={2560}
        height={1438}
      />
      <figcaption>
        <span className="wiki-figure__label">{softwareVideo.figureLabel}</span>
        <span className="wiki-figure__caption">{softwareVideo.caption}</span>
      </figcaption>
    </figure>
  );
}

export function softwareFeatures(): Record<string, ReactNode> {
  const features: Record<string, ReactNode> = {
    "software-judging-criteria": (
      <JudgingCriteria
        items={softwareJudgingCriteria}
        renderParagraph={renderSoftwareJudgingText}
      />
    ),
    "software-circuforge-video": (
      <div className="software-usage-video">
        <iframe
          title={softwareUsageVideo.title}
          src={softwareUsageVideo.src}
          allow={softwareUsageVideo.allow}
          sandbox={softwareUsageVideo.sandbox}
          loading="lazy"
          allowFullScreen
        />
      </div>
    ),
    "software-torusfold-video": (
      <div className="software-usage-video">
        <iframe
          title="JLU-FBH: TorusFold-Hybrid Introduction (2026) [English]"
          src="https://video.igem.org/videos/embed/fGFi6rAF2bQkpYTjDoxc7X?subtitle=en&p2p=0"
          allow="fullscreen"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          loading="lazy"
          allowFullScreen
          style={{ border: 0 }}
        />
      </div>
    ),
    "software-torusfold-model": (
      <div id="software-torusfold-model">
        <TorusFoldViewer />
      </div>
    ),
    "software-registry-video": <SoftwareRegistryVideo />,
    "software-references": <SoftwareReferenceList />,
  };
  for (const [key, panel] of Object.entries(softwarePanels))
    features[key] = <SoftwareManuscriptPanel panel={panel} />;
  features["software-validation-structure-gallery"] = (
    <EpitopeStructuralValidationChart
      heatmapFigureTitle=""
      captions={[
        `${softwareFigures["figure-21b-epitope-position-burial"].figureLabel}. ${softwareFigures["figure-21b-epitope-position-burial"].caption}`,
        `${softwareFigures["figure-21-epitope-structural-review"].figureLabel}. ${softwareFigures["figure-21-epitope-structural-review"].caption}`,
      ]}
    />
  );
  return features;
}
