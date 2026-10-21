import { QueuedImage } from "../../../common/QueuedImage";
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, type ReactNode } from "react";
import { WikiContentBlocks } from "../../WikiRoutePage";
import {
  CitationReferenceList,
  createCitationRenderer,
} from "../../citations/CitationRegister";
import { linkify } from "../../proseInline";
import { ManuscriptTabs } from "../shared/ManuscriptTabs";
import { JudgingCriteria } from "../shared/JudgingCriteria";
import { DosePredictionExplorer } from "../shared/DosePredictionExplorer";
import { ImageAnchorMap } from "../shared/ImageAnchorMap";
import { scrollReaderToId } from "../../../../utils/scrollReaderToTarget";
import { Trop2ComplexViewer } from "../Trop2ComplexViewer";
import { SdgBoundaryMatrix } from "../engagement/sustainability/SdgBoundaryMatrix";
import { SdgInteractionHeatmap } from "../engagement/sustainability/SdgInteractionHeatmap";
import { SdgDimensionChord } from "../engagement/sustainability/SdgDimensionChord";
import { SdgContributionBubbles } from "../engagement/sustainability/SdgContributionBubbles";
import { ModelSdgNetwork } from "./ModelSdgNetwork";
import {
  ModelBurialHeatmap,
  ModelConfidenceScatter,
  ModelP9Volume,
  ModelVolcano,
} from "./ModelCharts";
import {
  modelDownloads,
  modelPanels,
  modelJudging,
  modelStructuralConfirmation,
  modelModuleLinks,
} from "../../../../data/drylab/modelPage";
import { modelCitationReferences as modelReferences } from "../../../../data/drylab/modelCitationReferences";
import {
  getModelImage,
  getModelDoseScanDownload,
  modelAssets,
} from "../../../../data/drylab/modelAssets";
import modelDoseScan from "../../../../data/drylab/modelDoseScanData.json";
import type { ModelPanel } from "../../../../data/drylab/modelPanelTypes";
import {
  buildModelCitationIndex,
  parseModelFigureCaption,
} from "../../../../data/drylab/modelCitationIndex";
import "../../../../styles/features/model-panels.css";
import "../../../../styles/features/sustainability-panels.css";

const citationIndex = buildModelCitationIndex();
const tint = {
  ramp: "rgba(21,62,52,0.14)",
  ring: "0 0 0 3px rgba(21,62,52,0.32)",
};
const renderCitedText = createCitationRenderer(citationIndex, tint);
const referenceUrls = new Set(modelReferences.flatMap((reference) => reference.links?.map((link) => link.href.replace(/\/$/, "")) ?? []));
function isReferenceUrl(href: string) {
  return referenceUrls.has(href.replace(/\/$/, "")) || /(?:^|\/)doi\.org\//.test(href);
}
function withoutReferenceLinks(text: string) {
  return text
    .replace(/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g, (match, label: string, href: string) => {
      if (!isReferenceUrl(href)) return match;
      return /^(?:https?:\/\/|doi(?:\.org)?(?:\b|:))/i.test(label) ? "" : label;
    })
    .replace(/https?:\/\/[^\s<>]+/g, (href) => isReferenceUrl(href) ? "" : href);
}

export function renderModelCitedText(
  text: string,
  fallback: (text: string) => ReactNode,
  sectionId?: string,
  locationKey?: string,
) {
  const caption = parseModelFigureCaption(text);
  const plainFallback = (value: string) => fallback(withoutReferenceLinks(value));
  if (!caption) return renderCitedText(text, plainFallback, sectionId, locationKey);
  return (
    <span className="model-figure-caption">
      <span className="wiki-figure__label">{caption.label}</span>
      {renderCitedText(caption.text, plainFallback, sectionId, locationKey)}
    </span>
  );
}

function ModelFold({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    const reveal = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a[href^="#"]');
      if (!link) return;
      const target = document.getElementById(
        link.getAttribute("href")!.slice(1),
      );
      let parent = target?.parentElement;
      while (parent) {
        if (parent instanceof HTMLDetailsElement) parent.open = true;
        parent = parent.parentElement;
      }
    };
    document.addEventListener("click", reveal, true);
    return () => document.removeEventListener("click", reveal, true);
  }, []);
  return (
    <details className="model-fold">
      <summary>{title}</summary>
      <div className="model-fold__body">{children}</div>
    </details>
  );
}

function TransposableTable({
  table,
}: {
  table: Extract<ModelPanel, { kind: "transpose" }>["table"];
}) {
  const [transposed, setTransposed] = useState(false);
  const matrix = [table.headers, ...table.rows];
  const displayed = transposed
    ? matrix[0].map((_, column) => matrix.map((row) => row[column] ?? ""))
    : matrix;
  return (
    <div className="model-transpose">
      <button
        type="button"
        className="model-action"
        aria-pressed={transposed}
        onClick={() => setTransposed((value) => !value)}
      >
        {transposed ? "Models as columns" : "Models as rows"}
      </button>
      <div
        className="wiki-table-wrap"
        tabIndex={0}
        role="region"
        aria-label="SVCWCVNSV measurements across five models"
      >
        <table className="wiki-table">
          {table.caption && <caption>{linkify(table.caption)}</caption>}
          <thead>
            <tr>
              {displayed[0].map((cell, i) => (
                <th key={i} scope="col">
                  {linkify(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayed.slice(1).map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">
                      {linkify(cell)}
                    </th>
                  ) : (
                    <td key={j}>{linkify(cell)}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AntigenTable({
  table,
}: {
  table: Extract<ModelPanel, { kind: "antigen-table" }>["table"];
}) {
  const antigens = [...new Set(table.rows.map((row) => row[0]))];
  const [selected, setSelected] = useState(antigens[0]);
  const rows = table.rows.filter((row) => row[0] === selected);
  return (
    <div className="model-antigen-table">
      <fieldset className="model-antigen-filter">
        <legend>Antigen</legend>
        <input
          type="range"
          min={0}
          max={antigens.length - 1}
          step={1}
          value={antigens.indexOf(selected)}
          aria-label="Antigen"
          aria-valuetext={selected}
          onChange={(event) =>
            setSelected(antigens[Number(event.target.value)])
          }
        />
        <div className="model-antigen-options">
          {antigens.map((antigen) => (
            <button
              type="button"
              key={antigen}
              aria-pressed={selected === antigen}
              onClick={() => setSelected(antigen)}
            >
              {antigen}
            </button>
          ))}
        </div>
      </fieldset>
      <WikiContentBlocks
        blocks={[{ ...table, rows }]}
        sectionId="model-antigen-table"
      />
    </div>
  );
}

function ModelPanelContent({
  panel,
  panelKey,
  features,
}: {
  panel: ModelPanel;
  panelKey: string;
  features: Record<string, ReactNode>;
}) {
  if (panel.kind === "sdg-chart") {
    const caption =
      parseModelFigureCaption(panel.caption)?.text ?? panel.caption;
    if (panel.chart === "dimensions")
      return (
        <SdgDimensionChord numbered={false} scrollable caption={caption} figureLabel={parseModelFigureCaption(panel.caption)?.label} />
      );
    const matrix = panel.chart === "boundary" || panel.chart === "interactions";
    return (
      <figure
        className={`model-sdg-chart${matrix ? " model-sdg-chart--matrix" : ""}`}
      >
        {matrix ? (
          <div
            className="model-sdg-chart__scroll"
            tabIndex={0}
            role="region"
            aria-label={caption}
          >
            <div className="model-sdg-chart__matrix">
              {panel.chart === "boundary" ? (
                <SdgBoundaryMatrix />
              ) : (
                <SdgInteractionHeatmap />
              )}
            </div>
          </div>
        ) : panel.chart === "network" ? (
          <ModelSdgNetwork />
        ) : (
          <SdgContributionBubbles />
        )}
        <figcaption className="sust-chart-caption">{renderModelCitedText(panel.caption, linkify, panelKey)}</figcaption>
      </figure>
    );
  }
  if (panel.kind === "numbered-reasons")
    return (
      <ol className="model-numbered-reasons">
        {panel.items.map((item) => (
          <li key={item.title}>
            <p className="model-numbered-reasons__title">
              {renderModelCitedText(item.title, linkify, panelKey)}
            </p>
            <WikiContentBlocks
              blocks={[{ type: "prose", paragraphs: item.paragraphs }]}
              sectionId={panelKey}
            />
          </li>
        ))}
      </ol>
    );
  if (panel.kind === "fold")
    return (
      <ModelFold title={panel.title}>
        <WikiContentBlocks
          blocks={panel.blocks}
          features={features}
          sectionId={panelKey}
        />
      </ModelFold>
    );
  if (panel.kind === "tabs") {
    if (panelKey === "model-panel-8") {
      return (
        <ManuscriptTabs
          title={panel.title}
          orientation="horizontal"
          skipTarget="model-ihc-summary"
          entries={panel.entries.map((entry) => ({
            title: entry.title,
            content: (
              <div className="model-ihc-layout">
                <h4 className="model-ihc-layout__antigen-title">
                  {entry.title}
                </h4>
                <WikiContentBlocks
                  blocks={entry.blocks
                    .filter((block) => !(block.type === "subheading" && block.title.includes("Representative Published Tissue Images")))
                    .map((block) => block.type === "figure" ? { ...block, className: "model-ihc-figure" } : block)}
                  features={features}
                  sectionId={panelKey}
                />
              </div>
            ),
          }))}
        />
      );
    }
    return (
      <ManuscriptTabs
        title={panel.title}
        flowLabels={
          panelKey === "model-panel-7"
            ? [
                "Input · GSE176078",
                "Quality\nControl",
                "Normalization &\nIntegration",
                "Clustering & Annotation",
                "Gene Detection\nAnalysis",
                "Pseudobulk\nDifferential Analysis",
              ]
            : panelKey === "model-panel-10"
              ? ["Input", "IEDB Prediction", "Topology Review"]
              : undefined
        }
        flowInputSource={panelKey === "model-panel-10" ? "4 Protein Sequences + HLA-A*02:01" : undefined}
        flowNodeDetails={panelKey === "model-panel-10" ? ["", "Generate 1,838 9-mer peptides\nBinding Affinity + Immunogenicity\n→ 51 peptides", "Exclude signal/TM regions\n→ 17 peptides"] : undefined}
        flowOutputLabel={panelKey === "model-panel-10" ? "17 Candidate Epitopes" : undefined}
        entries={panel.entries.map((entry) => ({
          title: entry.title,
          content: (
            <WikiContentBlocks
              blocks={entry.blocks}
              features={features}
              sectionId={panelKey}
            />
          ),
        }))}
      />
    );
  }
  if (panel.kind === "transpose")
    return <TransposableTable table={panel.table} />;
  if (panel.kind === "antigen-table")
    return <AntigenTable table={panel.table} />;
  if (panel.chart === "confidence-scatter") return <ModelConfidenceScatter tableCaption={linkify(panel.tableCaption!.replace(/^(Table \d+\.)/, "**$1**"))} figureCaption={renderModelCitedText(panel.caption!, linkify, panelKey)} />;
  if (panel.chart === "p9-volume") return <ModelP9Volume />;
  if (panel.chart === "burial-heatmap") return <ModelBurialHeatmap tableCaption={linkify(panel.tableCaption!.replace(/^(Table \d+\.)/, "**$1**"))} figureCaption={renderModelCitedText(panel.caption!, linkify, panelKey)} />;
  return (
    <ModelVolcano
      cohort={panel.chart === "volcano-024322" ? "024322" : "028102"}
    />
  );
}

export function modelFeatures(): Record<string, ReactNode> {
  const features: Record<string, ReactNode> = {
    "model-figure-1-navigation": (
      <figure className="wiki-figure wiki-figure--labelled" data-wiki-reveal>
        <ImageAnchorMap
          src={getModelImage("AEIP structure.png")}
          alt="Overview of the Antigen-Epitope Integration Pipeline (AEIP) workflow."
          width={3191}
          height={1855}
          regions={[
            {
              target: "model-antigen-selection",
              label: "Antigen Selection",
              x: 125,
              y: 216,
              width: 889,
              height: 1522,
            },
            {
              target: "model-heading-3",
              label: "Four-Layer Validation (3.1.3)",
              x: 1132,
              y: 216,
              width: 965,
              height: 1522,
            },
            {
              target: "model-epitope-screening",
              label: "Epitope Screening",
              x: 2223,
              y: 216,
              width: 855,
              height: 1522,
            },
          ]}
        />
        <figcaption>
          <span className="wiki-figure__label">FIG. 01</span>
          Overview of the Antigen-Epitope Integration Pipeline (AEIP) workflow.
        </figcaption>
      </figure>
    ),
    "model-module-navigation": (
      <ImageAnchorMap
        src={getModelImage("Model_structure (2).png")}
        alt={modelAssets["Model_structure (2).png"].alt.replace(/\*\*/g, "")}
        width={modelAssets["Model_structure (2).png"].width}
        height={modelAssets["Model_structure (2).png"].height}
        regions={modelModuleLinks}
      />
    ),
    "model-structural-confirmation": (
      <div className="model-structural-viewer">
        <h5
          id="model-structural-confirmation"
          className="model-structural-viewer__title"
        >
          {modelStructuralConfirmation.title} in{" "}
          <span>{modelStructuralConfirmation.complex}</span>
        </h5>
        <Trop2ComplexViewer figureLabel={modelStructuralConfirmation.figureLabel} />
      </div>
    ),
    "model-judging": (
      <JudgingCriteria
        items={modelJudging}
        renderParagraph={(text) =>
          renderModelCitedText(text, linkify, "model-judging")
        }
      />
    ),
    "model-dose-explorer": (
      <div className="model-dose-figure">
      <DosePredictionExplorer
        compact
        rows={modelDoseScan.rows}
        draws={modelDoseScan.draws}
        downloadUrl={getModelDoseScanDownload()}
      />
      <p className="model-chart-caption"><span className="wiki-figure__label">FIG. 40</span>Interactive dose scan: efficacy, viability and exposure screening, and joint pass fractions.</p>
      </div>
    ),
    "model-graphical-abstracts": (
      <nav
        className="model-graphical-abstracts"
        aria-label="Explore the three models"
      >
        {(
          [
            [
              "AEIP",
              "model-aeip",
              "CirCure_icon_screening_funnel_transparent.png",
            ],
            [
              "Cell2Dose",
              "model-cell2dose",
              "CirCure_icon_dose_response_model_transparent.png",
            ],
            [
              "SST-QN",
              "model-sst-qn",
              "CirCure_icon_correlation_heatmap_transparent.png",
            ],
          ] as const
        ).map(([label, target, image]) => (
          <a
            href={`#${target}`}
            key={target}
            onClick={(event) => {
              event.preventDefault();
              scrollReaderToId(target, event.currentTarget);
            }}
          >
            <QueuedImage
              src={getModelImage(image)}
              width={modelAssets[image].width}
              height={modelAssets[image].height}
              alt=""
              loading="lazy"
            />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    ),
    "model-references": (
      <CitationReferenceList
        references={modelReferences}
        index={citationIndex}
        tint={tint}
      />
    ),
    "model-downloads": (
      <div className="model-download-card">
        <div className="model-download-card__header">
          <svg
            className="model-download-card__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <div>
            <h4 className="model-download-card__title">
              Reproducibility Package & Dataset Downloads
            </h4>
            <p className="model-download-card__desc">
              All raw batch execution logs, AlphaFold 3 model files, contact
              network tables, SASA determinations, and differential expression
              CSV outputs.
            </p>
          </div>
        </div>
        <div className="model-download-card__grid">
          {modelDownloads.map((file) => (
            <a
              key={file.path}
              className="model-download-card__item"
              href={
                file.path.startsWith("https://")
                  ? file.path
                  : `${import.meta.env.BASE_URL}${file.path}`
              }
              download
              title={`Download ${file.label}`}
            >
              <svg
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="currentColor"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              <span>{file.label}</span>
            </a>
          ))}
        </div>
      </div>
    ),
  };
  for (const [key, panel] of Object.entries(modelPanels))
    features[key] = (
      <ModelPanelContent panel={panel} panelKey={key} features={features} />
    );
  return features;
}
