/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, type ReactNode } from "react";
import { WikiContentBlocks } from "../../WikiRoutePage";
import {
  CitationReferenceList,
  createCitationRenderer,
} from "../../citations/CitationRegister";
import { linkify } from "../../proseInline";
import { ManuscriptTabs } from "../shared/ManuscriptTabs";
import { Trop2ComplexViewer } from "../Trop2ComplexViewer";
import { ModelBurialHeatmap, ModelConfidenceScatter, ModelP9Volume, ModelVolcano } from "./ModelCharts";
import {
  modelDownloads,
  modelPanels,
  modelReferences,
} from "../../../../data/drylab/modelPage";
import type { ModelPanel } from "../../../../data/drylab/modelPanelTypes";
import { buildModelCitationIndex, parseModelFigureCaption } from "../../../../data/drylab/modelCitationIndex";
import "../../../../styles/features/model-panels.css";

const citationIndex = buildModelCitationIndex();
const tint = {
  ramp: "rgba(21,62,52,0.14)",
  ring: "0 0 0 3px rgba(21,62,52,0.32)",
};
const renderCitedText = createCitationRenderer(citationIndex, tint);
export function renderModelCitedText(text: string, fallback: (text: string) => ReactNode) {
  const caption = parseModelFigureCaption(text);
  if (!caption) return renderCitedText(text, fallback);
  return (
    <span className="model-figure-caption">
      <span className="wiki-figure-caption-label">{caption.label}</span>
      {renderCitedText(caption.text, fallback)}
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
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;
      const target = document.getElementById(link.hash.slice(1));
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
        {transposed
          ? "Models as columns"
          : "Models as rows"}
      </button>
      <div
        className="wiki-table-wrap"
        tabIndex={0}
        role="region"
        aria-label="SVCWCVNSV measurements across five models"
      >
        <table className="wiki-table">
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

function AntigenTable({ table }: {
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
          onChange={(event) => setSelected(antigens[Number(event.target.value)])}
        />
        <div className="model-antigen-options">
          {antigens.map((antigen) => (
            <button type="button" key={antigen} aria-pressed={selected === antigen}
              onClick={() => setSelected(antigen)}>{antigen}</button>
          ))}
        </div>
      </fieldset>
      <WikiContentBlocks blocks={[{ ...table, rows }]} sectionId="model-antigen-table" />
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
  if (panel.kind === "tabs")
    return (
      <ManuscriptTabs
        title={panel.title}
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
  if (panel.kind === "transpose")
    return <TransposableTable table={panel.table} />;
  if (panel.kind === "antigen-table")
    return <AntigenTable table={panel.table} />;
  if (panel.chart === "confidence-scatter") return <ModelConfidenceScatter />;
  if (panel.chart === "p9-volume") return <ModelP9Volume />;
  if (panel.chart === "burial-heatmap") return <ModelBurialHeatmap />;
  return (
    <ModelVolcano
      cohort={panel.chart === "volcano-024322" ? "024322" : "028102"}
    />
  );
}

export function modelFeatures(): Record<string, ReactNode> {
  const features: Record<string, ReactNode> = {
    "model-structural-confirmation": <Trop2ComplexViewer />,
    "model-references": (
      <CitationReferenceList
        references={modelReferences}
        index={citationIndex}
        tint={tint}
      />
    ),
    "model-downloads": (
      <ul className="model-downloads">
        {modelDownloads.map((file) => (
          <li key={file.path}>
            <a
              href={file.path.startsWith("https://") ? file.path : `${import.meta.env.BASE_URL}${file.path}`}
              download
            >
              {file.label}
            </a>
          </li>
        ))}
      </ul>
    ),
  };
  for (const [key, panel] of Object.entries(modelPanels))
    features[key] = (
      <ModelPanelContent panel={panel} panelKey={key} features={features} />
    );
  return features;
}
