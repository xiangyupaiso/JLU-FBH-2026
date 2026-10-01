import { useState } from "react";
import type {
  DetailedArticle,
  StakeholderProfile,
} from "../../../../../data/engagement/sustainability/sustainabilityData";
import "../../../../../styles/sustainability-panels.css";
import { PatientChatDialog } from "./PatientChatDialog";

const pad = (n: number) => String(Math.max(1, n)).padStart(2, "0");


function DetailedArticleView({ article }: { article: DetailedArticle }) {
  return (
    <article className="sust-stake-article">
      <h4 className="sust-stake-article__title">{article.title}</h4>
      {article.subtitle && (
        <p className="sust-stake-article__subtitle">{article.subtitle}</p>
      )}
      {article.intro && article.intro.length > 0 && (
        <div className="sust-stake-article__intro">
          {article.intro.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}
      <div className="sust-stake-article__sections">
        {article.sections.map((sec, idx) => (
          <div className="sust-stake-article__section" key={idx}>
            {sec.heading && (
              <h5 className="sust-stake-article__heading">{sec.heading}</h5>
            )}
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}

function ExpandedArticle({
  profile,
  open,
}: {
  profile: StakeholderProfile;
  open: boolean;
}) {
  return (
    <div className="sust-stake-card__expanded">
      {open && (profile.id === "tnbc-patients" || profile.id === "02-tnbc-patients") && (
        <PatientChatDialog />
      )}
      {profile.detailedArticle ? (
        <DetailedArticleView article={profile.detailedArticle} />
      ) : (
        profile.detailedInterview.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))
      )}
    </div>
  );
}

export function StakeholderProfileCard({
  profile,
  ordinal = 1,
}: {
  profile: StakeholderProfile;
  ordinal?: number;
}) {
  const [open, setOpen] = useState(false);
  const codeDisplay = profile.code ?? pad(ordinal);

  const challenge = profile.challenge ?? profile.feedback;
  const keyInsight = profile.keyInsight ?? profile.whyEngaged;
  const whatChanged = profile.whatChanged ?? profile.incorporated;

  return (
    <article className="sust-stake-card" data-wiki-reveal>
      <header className="sust-stake-card__header">
        <div className="sust-stake-card__badge-row">
          <span className="sust-stake-card__code-badge">
            {codeDisplay}
          </span>
          <span className="sust-stake-card__role-tag">{profile.role}</span>
          {profile.currentStatus && (
            <span className="sust-stake-card__status-tag">
              {profile.currentStatus}
            </span>
          )}
        </div>
        <h3 className="sust-stake-card__name">{profile.name}</h3>
        {profile.organization && (
          <p className="sust-stake-card__org">{profile.organization}</p>
        )}
      </header>

      {profile.relevantStakeholder && (
        <div className="sust-stake-card__relevant">
          <p className="sust-stake-card__relevant-label">Relevant Stakeholder</p>
          <p className="sust-stake-card__relevant-text">
            {profile.relevantStakeholder}
          </p>
        </div>
      )}

      <div className="sust-stake-card__body">
        {challenge && (
          <div className="sust-stake-card__field sust-stake-card__field--challenge">
            <span className="sust-stake-card__field-label">Challenge</span>
            <p className="sust-stake-card__field-content">{challenge}</p>
          </div>
        )}

        {keyInsight && (
          <div className="sust-stake-card__field sust-stake-card__field--insight">
            <span className="sust-stake-card__field-label">Key Insight</span>
            <p className="sust-stake-card__field-content">{keyInsight}</p>
          </div>
        )}

        {whatChanged && (
          <div className="sust-stake-card__field sust-stake-card__field--changed">
            <span className="sust-stake-card__field-label">What Changed</span>
            <p className="sust-stake-card__field-content">{whatChanged}</p>
          </div>
        )}

        {profile.improvement && !whatChanged && (
          <div className="sust-stake-card__field sust-stake-card__field--improvement">
            <span className="sust-stake-card__field-label">Improvement</span>
            <p className="sust-stake-card__field-content">{profile.improvement}</p>
          </div>
        )}
      </div>

      <footer className="sust-stake-card__footer">
        <div className="sust-stake-card__meta">
          <span className="sust-stake-card__sdg-pills">
            {profile.sdgAddressed}
          </span>
        </div>

        {(profile.detailedArticle || profile.detailedInterview.length > 0) && (
          <details
            className="sust-stake-card__more"
            open={open}
            onToggle={(e) => setOpen(e.currentTarget.open)}
          >
            <summary className="sust-stake-card__summary">
              <span className="sust-stake-card__toggle-label">
                {open ? "收起详细内容 / Close" : "Click more / 详细访谈与记录"}
              </span>
              <span className="sust-stake-card__toggle-arrow" aria-hidden="true">
                {open ? "▲" : "▼"}
              </span>
            </summary>
            <div className="sust-stake-card__more-body">
              <ExpandedArticle profile={profile} open={open} />
            </div>
          </details>
        )}
      </footer>
    </article>
  );
}
