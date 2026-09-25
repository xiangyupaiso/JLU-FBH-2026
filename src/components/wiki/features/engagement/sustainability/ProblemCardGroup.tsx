import {
  coreProblems,
  type CoreProblem,
} from "../../../../../data/engagement/sustainability/sustainabilityData";
import { useInViewReveal } from "./useInViewReveal";
import "../../../../../styles/sustainability-panels.css";

export function ProblemCardGroup({
  items = coreProblems,
}: {
  items?: ReadonlyArray<CoreProblem>;
}) {
  const { ref, visible } = useInViewReveal<HTMLUListElement>(0.1);

  return (
    <ul
      ref={ref}
      className={`sust-problem-grid${visible ? " is-visible" : ""}`}
    >
      {items.map((problem, index) => (
        <li
          className="sust-problem-card"
          key={problem.id}
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          <span className="sust-problem-card__index" aria-hidden="true">
            {`P-${String(index + 1).padStart(2, "0")}`}
          </span>
          <h3 className="sust-problem-card__title-zh">{problem.titleZh}</h3>
          <p className="sust-problem-card__title-en">{problem.titleEn}</p>
          <p className="sust-problem-card__description">
            {problem.description}
          </p>
        </li>
      ))}
    </ul>
  );
}


