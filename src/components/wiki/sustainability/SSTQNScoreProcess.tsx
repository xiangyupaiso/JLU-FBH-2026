import {
  sstqnScoringSteps,
  type SstqnScoringStep,
} from "../../../data/sustainabilityData";
import "../../../styles/sustainability-page.css";

const DEFAULT_CAPTION =
  "Evidence-calibrated Directed Interaction Score 评分流程：机制清晰度、跨情境重复性、因果证据与数据兼容性四项输入，经证据校准后，输出范围为 [−1, 1] 的有向相互作用评分（正值 Synergy，负值 Trade-off）。";

/**
 * Compact prose-anchored stepper replacing the full-width flowchart. The
 * pipeline is the same four inputs → calibration → output, but rendered as a
 * small vertical stack with two semantic colours (navy calibration, neutral
 * output) instead of a wide SVG with arrowheads.
 */
export function SSTQNScoreProcess({
  steps = sstqnScoringSteps,
  caption = DEFAULT_CAPTION,
}: {
  steps?: ReadonlyArray<SstqnScoringStep>;
  caption?: string;
}) {
  const inputs = steps.filter((step) => step.role === "input");
  const calibration = steps.find((step) => step.role === "calibration");
  const output = steps.find((step) => step.role === "output");

  return (
    <figure className="sust-score-stepper">
      <div className="sust-score-stepper__inputs">
        {inputs.map((step) => (
          <span
            key={step.id}
            className="sust-score-stepper__input"
            title={step.description}
            aria-label={`${step.label}：${step.description}`}
          >
            {step.label}
          </span>
        ))}
      </div>
      <span className="sust-score-stepper__arrow" aria-hidden="true">
        ↓
      </span>
      {calibration ? (
        <div
          className="sust-score-stepper__cal"
          aria-label={`${calibration.label}：${calibration.description}`}
        >
          {calibration.label}
        </div>
      ) : null}
      <span className="sust-score-stepper__arrow" aria-hidden="true">
        ↓
      </span>
      {output ? (
        <div
          className="sust-score-stepper__out"
          aria-label={`${output.label}：${output.description}`}
        >
          <span className="sust-score-stepper__out-label">
            Directed Interaction Score
          </span>
          <span className="sust-score-stepper__out-range">[−1, 1]</span>
        </div>
      ) : null}
      <figcaption className="sust-chart-caption">{caption}</figcaption>
    </figure>
  );
}
