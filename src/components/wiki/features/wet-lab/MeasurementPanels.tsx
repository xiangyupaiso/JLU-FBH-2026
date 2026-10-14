import type { ReactNode } from "react";
import { EpitopeStructuralValidationChart } from "../project/EpitopeStructuralValidationChart";
import { ModelVolcanoChart } from "../drylab/ModelVolcanoChart";
import { WikiFigurePlate } from "../../WikiFigurePlate";
import {
  getMeasurementImage,
  measurementAssets,
} from "../../../../data/wet-lab/measurementAssets";
import "../../../../styles/features/measurement-panels.css";

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
