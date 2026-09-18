import {
  expertFeedbacks,
  type ExpertFeedback,
} from "../../../data/sustainabilityData";
import { useInViewReveal } from "./useInViewReveal";
import "../../../styles/sustainability-panels.css";

export function ExpertFeedbackGrid({
  items = expertFeedbacks,
}: {
  items?: ReadonlyArray<ExpertFeedback>;
}) {
  const { ref, visible } = useInViewReveal<HTMLUListElement>(0.1);

  return (
    <ul
      ref={ref}
      className={`sust-expert-grid${visible ? " is-visible" : ""}`}
    >
      {items.map((expert, index) => (
        <li
          className="sust-expert-card"
          key={expert.id}
          style={{ transitionDelay: `${index * 60}ms` }}
        >
          <div className="sust-expert-card__head">
            <h3 className="sust-expert-card__name">
              {expert.name}
              <span className="sust-expert-card__title">{expert.title}</span>
            </h3>
            <span className="sust-expert-card__domain">{expert.domain}</span>
          </div>
          <p className="sust-expert-card__suggestion">{expert.suggestion}</p>
          <p className="sust-expert-card__improvement">
            <span>{expert.improvement}</span>
          </p>
          <span className="sust-expert-card__sdg">{expert.sdgMapping}</span>
        </li>
      ))}
    </ul>
  );
}
