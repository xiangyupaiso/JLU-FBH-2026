import { Suspense, lazy, useState } from "react";
import { useWikiPageScroll, WikiPage } from "../components/wiki/WikiPage";
import {
  ConsequencesDimensionCard,
  CountUpStat,
  ExpertFeedbackGrid,
  ImpactFrameworkDiagram,
  ProblemCardGroup,
  SCALEProgressChain,
  SDGInteractiveCard,
  SdgBoundaryMatrix,
  SdgImpactRadar,
  SdgInteractionHeatmap,
  SSTQNClassificationMatrix,
  SSTQNScoreProcess,
  StakeholderProfileCard,
} from "../components/wiki/sustainability";

// react-pdf is heavy — lazy-load the PDF components so they split into a
// separate chunk and don't bloat the initial sustainability page bundle.
const PdfViewerModal = lazy(() =>
  import("../components/wiki/features/PdfViewerModal").then((m) => ({
    default: m.PdfViewerModal,
  })),
);
const SustainabilityPdfPreview = lazy(() =>
  import("../components/wiki/sustainability/SustainabilityPdfPreview").then(
    (m) => ({ default: m.SustainabilityPdfPreview }),
  ),
);
import type { ProtocolManual } from "../data/protocolPages";
import {
  sustainabilityAssets,
  type SustainabilityImageAssetKey,
} from "../data/sustainabilityAssets";
import { sustainabilityImages } from "../data/sustainabilityImages";
import { sustainabilityPage } from "../data/sustainabilityPage";
import {
  sstqnSection,
  stakeholderProfiles,
  sustainabilityOverview,
  sustainabilityStats,
} from "../data/sustainabilityData";
import "../styles/sustainability-page.css";

/** SDG 3 章节内的子锚点；SCALE 链随滚动高亮当前所在要素。 */
const SCALE_ANCHOR_IDS = [
  "sdg3-health",
  "sdg3-stakeholder",
  "sdg3-consequences",
  "sdg3-alignment",
  "sdg3-legacy",
];

const FRAMEWORK_INTRO_LINKS: Record<string, string> = {
  "sst-qn": "#sst-qn",
  "sdg-impact-framework": "#sdg-impact-framework",
  // SCALE Framework 落地于 SET 章节内的 SDG 3 → S/C/A/L/E 五要素
  "scale-framework": "#set-core-challenges",
};

const pdfAsset = sustainabilityAssets.sstQnModelConstruction09;

const sstqnPdfManual: ProtocolManual = {
  id: "SST-QN",
  title: sstqnSection.pdf.title,
  category: "report",
  description: sstqnSection.pdf.description,
  pdfUrl: `${import.meta.env.BASE_URL}${pdfAsset.webPath ?? ""}`,
  assetName: pdfAsset.fileName,
  documentType: "Report",
  addedAt: "2026-08-08",
  pages: pdfAsset.pdfPages ?? 1,
};

/** Overview 内三篇框架导读（SST-QN / SDG Impact Framework / SCALE）。 */
function FrameworkIntroGrid() {
  return (
    <div className="sust-framework-intros">
      {sustainabilityOverview.frameworks.map((framework, index) => {
        const link = FRAMEWORK_INTRO_LINKS[framework.id];
        return (
          <article
            className="sust-framework-intro"
            key={framework.id}
            data-wiki-reveal
          >
            <span
              className="sust-framework-intro__index"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="sust-framework-intro__body">
              <p className="sust-framework-intro__kicker">
                {framework.shortName}
              </p>
              <h3 className="sust-framework-intro__name">
                {framework.fullName}
              </h3>
              <p className="sust-framework-intro__copy">
                {framework.paragraph}
              </p>
              {framework.assetKey && (
                <figure className="sust-framework-intro__figure">
                  <img
                    src={
                      sustainabilityImages[
                        framework.assetKey as SustainabilityImageAssetKey
                      ]
                    }
                    alt={
                      sustainabilityAssets[
                        framework.assetKey as SustainabilityImageAssetKey
                      ].alt
                    }
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              )}
              {link ? (
                <a
                  className="sust-framework-intro__link"
                  href={link}
                  onClick={(event) => {
                    event.preventDefault();
                    document
                      .getElementById(link.slice(1))
                      ?.scrollIntoView({
                        behavior: window.matchMedia(
                          "(prefers-reduced-motion: reduce)",
                        ).matches
                          ? "auto"
                          : "smooth",
                        block: "start",
                      });
                  }}
                >
                  进入章节 <span aria-hidden="true">↘</span>
                </a>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** SCALE 链：随侧边栏滚动间谍高亮当前所在 SDG 3 要素。 */
function ScaleChainWithSpy() {
  const { activeSubsection } = useWikiPageScroll();
  const activeId = SCALE_ANCHOR_IDS.includes(activeSubsection)
    ? activeSubsection
    : "sdg3-stakeholder";
  return <SCALEProgressChain activeId={activeId} />;
}

export function Sustainability() {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <>
      <WikiPage
        content={sustainabilityPage}
        features={{
          "sdg-cards": (
            <div className="sust-sdg-grid">
              {sustainabilityOverview.coreSdgs.map((sdg) => (
                <SDGInteractiveCard key={sdg.number} sdg={sdg} />
              ))}
            </div>
          ),
          "sdg-radar": <SdgImpactRadar />,
          "sdg-interaction-heatmap": <SdgInteractionHeatmap />,
          "sdg-boundary-matrix": <SdgBoundaryMatrix />,
          "framework-intros": <FrameworkIntroGrid />,
          "sstqn-matrix": <SSTQNClassificationMatrix />,
          "sstqn-score-flow": <SSTQNScoreProcess />,
          "pdf-sst-qn": (
            <Suspense fallback={null}>
              <SustainabilityPdfPreview
                manual={sstqnPdfManual}
                onOpen={() => setPdfOpen(true)}
              />
            </Suspense>
          ),
          "framework-diagram": <ImpactFrameworkDiagram />,
          "scale-chain": <ScaleChainWithSpy />,
          stats: (
            <div className="sust-stats-grid">
              {sustainabilityStats.map((stat) => (
                <CountUpStat key={stat.id} stat={stat} />
              ))}
            </div>
          ),
          stakeholders: (
            <>
              {stakeholderProfiles.map((profile) => (
                <StakeholderProfileCard
                  key={profile.id}
                  profile={profile}
                />
              ))}
            </>
          ),
          problems: <ProblemCardGroup />,
          experts: <ExpertFeedbackGrid />,
          consequences: <ConsequencesDimensionCard />,
        }}
      />
      <Suspense fallback={null}>
        <PdfViewerModal
          manual={pdfOpen ? sstqnPdfManual : null}
          onClose={() => setPdfOpen(false)}
        />
      </Suspense>
    </>
  );
}
