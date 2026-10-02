import {
  sstqnScoringSteps,
  type SstqnScoringStep,
} from "../../../../../data/engagement/sustainability/sustainabilityData";

/**
 * Evidence-calibrated Directed Interaction Score as a small vertical stepper:
 * four evidence inputs → calibration → score on [−1, 1].
 */
export function SSTQNScoreProcess({
  steps = sstqnScoringSteps,
}: {
  steps?: ReadonlyArray<SstqnScoringStep>;
}) {
  const inputs = steps.filter((step) => step.role === "input");
  const calibration = steps.find((step) => step.role === "calibration");
  const output = steps.find((step) => step.role === "output");

  return (
    <figure className="sust-score-stepper" aria-label="Evidence-calibrated Directed Interaction Score">
      <div className="sust-score-stepper__inputs">
        {inputs.map((step) => (
          <span key={step.id} className="sust-score-stepper__input">
            {step.label}
          </span>
        ))}
      </div>
      <span className="sust-score-stepper__arrow" aria-hidden="true">
        ↓
      </span>
      {calibration ? <div className="sust-score-stepper__cal">{calibration.label}</div> : null}
      <span className="sust-score-stepper__arrow" aria-hidden="true">
        ↓
      </span>
      {output ? (
        <div className="sust-score-stepper__out">
          <span className="sust-score-stepper__out-label">{output.label}</span>
          <span className="sust-score-stepper__out-range">[−1, 1]</span>
        </div>
      ) : null}
    </figure>
  );
}
