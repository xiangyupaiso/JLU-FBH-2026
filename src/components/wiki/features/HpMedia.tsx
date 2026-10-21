import type { ReactNode } from "react";
import { QueuedImage } from "../../common/QueuedImage";
import { humanPracticesSections } from "../../../data/engagement/humanPracticesCopy";
import type { WikiContentBlock } from "../wikiPageTypes";
import { DocumentViewer } from "../documents/DocumentViewer";
import { linkify } from "../proseInline";
import { PhotoGallery } from "./engagement/EducationMedia";
import { PeerTubeVideo } from "./shared/PeerTubeVideo";
import { humanPracticesReferences } from "../../../data/engagement/humanPracticesReferences";
import { buildAuthorYearCitationIndex } from "../../../data/citations/citationIndex";
import { CitationReferenceList, createCitationRenderer } from "../citations/CitationRegister";

const humanPracticesCitationIndex = buildAuthorYearCitationIndex(humanPracticesSections, humanPracticesReferences);
const citationTint = { ramp: "rgba(23,74,71,0.16)", ring: "0 0 0 3px rgba(23,74,71,0.38)" };
// eslint-disable-next-line react-refresh/only-export-components
export const renderHumanPracticesCitedText = createCitationRenderer(humanPracticesCitationIndex, citationTint);

const documentTitles: Record<string, string> = {
  "breast-cancer-public-awareness-and-health-education-survey-english.pdf": "Breast Cancer Public Awareness and Health Education Survey (English)",
  "synthetic-biology-and-circular-rna-public-awareness-survey-english.pdf": "Synthetic Biology and Circular RNA Public Awareness Survey (English)",
  "jienzhihe.pdf": "Ji’en Zhihe — Letter of Intent for Cooperation",
  "jika.pdf": "Jilin Jika — Letter of Intent for Cooperation",
  "together-with-igem-english.pdf": "Together with iGEM: Across Villages, From Myths to Facts (English)",
  "together-with-igem-chinese-5.pdf": "Together with iGEM: Across Villages, From Myths to Facts (Chinese)",
  "igem-handbook-decorated-centeredpages-2.pdf": "The iGEM Handbook for New Team Building and Knowledge Transfer",
  "biosafety-manual.pdf": "A Shared Biosafety Handbook for Anticancer Synthetic Biology",
};

const photoTitles: Record<string, string> = {
  "east-china": "East China Regional Meeting",
  central: "Central-China iGEM Forum",
  north: "North China iGEM Meetup",
  south: "Southern China Regional Meeting",
  apic: "APIC",
  "community-day-1": "Community Day",
  hpzhiboke: "iGEM Human Practices live course",
};

function paragraphMedia(text: string): ReactNode | null {
  const match = text.trim().match(/^\[([^\]]+)\]\((https:\/\/[^\s)]+)\)$/);
  if (!match) return null;
  const [, label, url] = match;
  const parsed = new URL(url);
  if (parsed.hostname === "static.igem.wiki" && parsed.pathname.endsWith(".pdf")) {
    const file = parsed.pathname.split("/").pop() ?? "";
    return <DocumentViewer document={{
      caption: documentTitles[file] ?? label,
      url,
      openUrl: url,
      downloadUrl: url,
    }} />;
  }
  const videoId = parsed.hostname === "video.igem.org"
    ? parsed.pathname.match(/^\/w\/([\w-]+)\/?$/)?.[1]
    : undefined;
  if (!videoId) return null;
  const source = {
    title: "Collaborative Baduanjin Video",
    embedUrl: `https://video.igem.org/videos/embed/${videoId}`,
    hostedBy: "iGEM Video Universe",
  };
  return <PeerTubeVideo video={{ primary: source, fallback: source, credit: "Collaborative Baduanjin ·" }} sourceLabel="Hosted by iGEM Video Universe" />;
}

export function HpInterviewParagraph({ text }: { text: string }) {
  const heading = text.replace(/^[\s#*]+|[\s*]+$/g, "");
  if (/^(Context|Issue|Reframing|Cycle)$/i.test(heading)) {
    return <h4>{heading.charAt(0).toUpperCase() + heading.slice(1).toLowerCase()}</h4>;
  }
  return paragraphMedia(text) ?? <p>{linkify(text)}</p>;
}

// Apply presentation after importing the manuscript, so new copy keeps its media.
function buildPresentation() {
  const features: Record<string, ReactNode> = {};
  const sections = humanPracticesSections.map((section) => {
    const source = section.blocks ?? [];
    const blocks: WikiContentBlock[] = [];
    const addFeature = (node: ReactNode) => {
      const key = `hp-media-${Object.keys(features).length}`;
      features[key] = node;
      blocks.push({ type: "feature", key });
    };
    for (let index = 0; index < source.length; index++) {
      const block = source[index];
      const next = source[index + 1];
      if (section.id === "hp-human" && block.type === "prose" && next?.type === "figure" && next.src.endsWith("/human.avif")) {
        addFeature(<div className="hp-human-intro">
          <div className="wiki-prose">{block.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{linkify(paragraph)}</p>)}</div>
          <figure className="hp-human-intro__image">
            <QueuedImage src={next.src} alt={next.alt} loading="lazy" decoding="async" />
          </figure>
        </div>);
        index++;
      } else if (section.id === "hp-collaboration" && block.type === "figure") {
        const photos: Array<Extract<WikiContentBlock, { type: "figure" }>> = [block];
        while (source[index + 1]?.type === "figure") {
          photos.push(source[++index] as Extract<WikiContentBlock, { type: "figure" }>);
        }
        if (photos.length === 1) {
          blocks.push(block);
          continue;
        }
        const gallery = {
          key: `hp-gallery-${index}`,
          title: "iGEM community exchanges",
          images: photos.map((photo) => {
            const stem = photo.src.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
            return { file: photo.src, caption: photoTitles[stem] ?? photo.alt };
          }),
        };
        addFeature(<div className="hp-collaboration-gallery">
          <PhotoGallery gallery={gallery} imageUrl={(url) => url} showCount={false} />
        </div>);
      } else if (block.type === "prose") {
        let pending: string[] = [];
        for (const paragraph of block.paragraphs) {
          const media = paragraphMedia(paragraph);
          if (media) {
            if (pending.length) blocks.push({ ...block, paragraphs: pending });
            pending = [];
            addFeature(media);
          } else {
            pending.push(paragraph);
          }
        }
        if (pending.length) blocks.push({ ...block, paragraphs: pending });
      } else {
        blocks.push(block);
      }
    }
    return { ...section, blocks };
  });
  const projectStageIds = ["hp-plasmid-design", "hp-in-vitro", "hp-in-vivo"];
  const groupedSections = sections
    .filter((section) => !projectStageIds.includes(section.id))
    .map((section) => {
      if (section.id !== "hp-project") return section;
      const blocks: WikiContentBlock[] = [...section.blocks];
      projectStageIds.forEach((id, stageIndex) => {
        const stage = sections.find((candidate) => candidate.id === id);
        if (!stage) return;
        const parentIndex = `${section.index}.${stageIndex + 1}`;
        blocks.push({
          type: "subheading",
          id: stage.id,
          index: parentIndex,
          title: stage.navLabel ?? stage.title,
          level: 3,
        });
        let subheadingIndex = 0;
        for (const block of stage.blocks) {
          blocks.push(block.type === "subheading" ? {
            ...block,
            index: `${parentIndex}.${++subheadingIndex}`,
            level: 4,
          } : block);
        }
      });
      return { ...section, blocks };
    });
  groupedSections.push({ id: "hp-references", index: "", kicker: "", title: "References", summary: "", hideSectionNumber: true,
    blocks: [{ type: "feature", key: "hp-references" }] });
  features["hp-references"] = <CitationReferenceList references={humanPracticesReferences} index={humanPracticesCitationIndex} tint={citationTint} />;
  return { sections: groupedSections, features };
}

// eslint-disable-next-line react-refresh/only-export-components
export const hpPresentation = buildPresentation();
