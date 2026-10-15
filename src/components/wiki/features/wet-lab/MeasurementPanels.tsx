import { useState, type ReactNode } from "react";
import { EpitopeStructuralValidationChart } from "../project/EpitopeStructuralValidationChart";
import { ModelVolcanoChart } from "../drylab/ModelVolcanoChart";
import { WikiFigurePlate } from "../../WikiFigurePlate";
import {
  getMeasurementImage,
  measurementAssets,
} from "../../../../data/wet-lab/measurementAssets";
import { measurementJudgingCriteria } from "../../../../data/wet-lab/measurementPage";
import { renderInlineFormatting } from "../../proseInline";
import "../../../../styles/features/measurement-panels.css";

export function MeasurementJudgingCriteria() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="highlights-record" data-wiki-reveal>
      {measurementJudgingCriteria.map((item) => {
        const open = openId === item.id;
        return (
          <article
            key={item.id}
            className={`highlights-record__item${open ? " is-open" : ""}`}
          >
            <button
              type="button"
              id={`${item.id}-toggle`}
              className="highlights-record__toggle"
              aria-expanded={open}
              aria-controls={`${item.id}-answer`}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span className="highlights-record__question">
                {item.question}
              </span>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m4 6 4 4 4-4" />
              </svg>
            </button>
            <div
              id={`${item.id}-answer`}
              role="region"
              aria-labelledby={`${item.id}-toggle`}
              className="highlights-record__answer"
              hidden={!open}
            >
              {item.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{renderInlineFormatting(paragraph)}</p>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

const plateGroups = [
  {
    featureKey: "measurement-plate-1",
    keys: [
      "rt-pcr-quantification-of-trop2-mrna-in-4t1-cells",
      "flow-cytometric-detection-of-surface-trop2-on-4t1-cells",
    ],
    caption: "TROP2 message in wild-type and TROP2-overexpressing 4T1",
  },
  {
    featureKey: "measurement-plate-2",
    keys: [
      "flow-cytometric-detection-of-surface-trop2-on-4t1-cells",
      "rt-pcr-quantification-of-trop2-mrna-in-4t1-cells",
    ],
    caption: "Surface TROP2 on wild-type and TROP2-overexpressing 4T1",
  },
  {
    featureKey: "measurement-plate-3",
    keys: [
      "cd80-cd86-double-positive-dc-frequencies-for-each-group",
      "quantification-of-dc-maturation-across-groups",
      "cd8-cd69-t-cell-frequencies-after-dc-t-co-culture",
      "quantification-of-cd8-cd69-frequencies-across-groups",
      "cd8-cd28-t-cell-frequencies-after-dc-t-co-culture",
      "quantification-of-cd8-cd28-frequencies-across-groups",
      "cd45ro-ccr7-effector-memory-frequencies-within-cd8-t-cells",
      "quantification-of-cd45ro-ccr7-frequencies-across-groups",
    ],
    caption: "Representative flow plots for the human immune response chain",
  },
  {
    featureKey: "measurement-plate-4",
    keys: [
      "splenic-dc-cd80-cd86-maturation",
      "splenic-cd8-t-cell-cd69-early-activation",
      "cd44-cd62l-central-memory-frequencies-within-splenic-cd8-t-cells",
      "ifn-frequencies-within-splenic-cd8-t-cells",
      "granzyme-b-frequencies-within-splenic-cd8-t-cells",
    ],
    caption: "Splenic immunophenotype across the immune response chain",
  },
].map((group) => ({
  ...group,
  keys: group.keys as (keyof typeof measurementAssets)[],
}));

export function measurementFeatures(): Record<string, ReactNode> {
  return {
    "measurement-judging-criteria": <MeasurementJudgingCriteria />,
    "measurement-structural-validation": <EpitopeStructuralValidationChart />,
    "measurement-proteomics-volcanoes": (
      <div className="measurement-model-volcanoes">
        <section>
          <h4>PXD024322 · TNBC vs healthy normal</h4>
          <ModelVolcanoChart cohort="024322" />
        </section>
        <section>
          <h4>PXD028102 · TNBC vs matched adjacent normal</h4>
          <ModelVolcanoChart cohort="028102" />
        </section>
      </div>
    ),
    ...Object.fromEntries(
      plateGroups.map((group) => [
        group.featureKey,
        <WikiFigurePlate
          className="measurement-plate"
          images={group.keys.map((key) => ({
            key,
            src: getMeasurementImage(key),
            alt: measurementAssets[key].alt,
          }))}
          caption={group.caption}
          columns={group.keys.length >= 5 ? 3 : 2}
          numbered
        />,
      ]),
    ),
  };
}
