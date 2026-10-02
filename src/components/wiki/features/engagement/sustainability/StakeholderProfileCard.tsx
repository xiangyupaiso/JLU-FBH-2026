import { useId, useState } from "react";
import type {
  ArticleBlock,
  StakeholderArticle,
  StakeholderProfile,
} from "../../../../../data/engagement/sustainability/sdgChapterContract";
import { PatientChatDialog } from "./PatientChatDialog";
import { RichText } from "./RichText";

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (typeof block === "string") {
    return (
      <p>
        <RichText text={block} />
      </p>
    );
  }
  if ("quotes" in block) return <PatientChatDialog quotes={block.quotes} />;
  return (
    <ul className="sust-stake-article__bullets">
      {block.bullets.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}

function ArticleView({ article }: { article: StakeholderArticle }) {
  return (
    <article className="sust-stake-article">
      <h4 className="sust-stake-article__title">{article.title}</h4>
      {article.sections.map((section, index) => (
        <section className="sust-stake-article__section" key={index}>
          {section.heading ? (
            <h5 className="sust-stake-article__heading">{section.heading}</h5>
          ) : null}
          {section.blocks.map((block, blockIndex) => (
            <ArticleBlockView block={block} key={blockIndex} />
          ))}
        </section>
      ))}
    </article>
  );
}

const FIELDS = [
  ["relevantStakeholder", "Relevant Stakeholder"],
  ["challenge", "Challenge"],
  ["keyInsight", "Key Insight"],
  ["whatChanged", "What Changed"],
] as const;

/**
 * Stakeholder card: Relevant Stakeholder / Challenge / Key Insight / What
 * Changed, status + SDG pills, and the optional "Click more" interview
 * article (with any patient / family quotes inline).
 */
export function StakeholderProfileCard({ profile }: { profile: StakeholderProfile }) {
  const [open, setOpen] = useState(false);
  const articleId = useId();

  return (
    <article className="sust-stake-card" id={profile.id}>
      <header className="sust-stake-card__header">
        <span className="sust-stake-card__index">{profile.index}</span>
        <h4 className="sust-stake-card__name">{profile.name}</h4>
        {profile.role ? <span className="sust-stake-card__role">{profile.role}</span> : null}
      </header>

      <dl className="sust-stake-card__fields">
        {FIELDS.map(([key, label]) =>
          profile[key] ? (
            <div className="sust-stake-card__field" key={key}>
              <dt>{label}</dt>
              <dd>
                <RichText text={profile[key]} />
              </dd>
            </div>
          ) : null,
        )}
      </dl>

      <footer className="sust-stake-card__footer">
        <span className="sust-stake-card__status">{profile.currentStatus}</span>
        <ul className="sust-stake-card__sdgs" aria-label="SDGs addressed">
          {profile.sdgs.map((sdg) => (
            <li key={sdg} data-sdg={sdg}>
              SDG {sdg}
            </li>
          ))}
        </ul>
        {profile.article ? (
          <button
            type="button"
            className="sust-stake-card__toggle"
            aria-expanded={open}
            aria-controls={articleId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Show less" : "Click more"}
          </button>
        ) : null}
      </footer>

      {profile.article ? (
        <div className="sust-stake-card__more" id={articleId} hidden={!open}>
          {open ? <ArticleView article={profile.article} /> : null}
        </div>
      ) : null}
    </article>
  );
}
