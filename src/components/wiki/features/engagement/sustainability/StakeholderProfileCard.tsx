import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type {
  ArticleBlock,
  StakeholderArticle,
  StakeholderProfile,
} from "../../../../../data/engagement/sustainability/sdgChapterContract";
import { stakeholderPhotos } from "../../../../../data/engagement/sustainability/sustainabilityPhotos";
import { PatientChatDialog } from "./PatientChatDialog";
import { RichText } from "./RichText";
import { StakeholderPhotoReel } from "./StakeholderPhotoReel";

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (typeof block === "string") {
    return (
      <p>
        <RichText text={block} />
      </p>
    );
  }
  if ("quotes" in block) return <PatientChatDialog quotes={block.quotes} />;
  // One engagement photo, placed between sections at body width.
  if ("photo" in block) {
    return (
      <figure className="sust-stake-article__figure">
        <img src={block.photo.src} alt={block.photo.alt} loading="lazy" decoding="async" />
        <figcaption>{block.photo.caption}</figcaption>
      </figure>
    );
  }
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
 * Changed, status + SDG pills, and the popup modal "Click more" interview
 * article with full text and engagement photographs.
 *
 * When the profile has documented photographs, a reel bleeds off the right edge
 * of the card and the body copy is narrowed to keep the measure readable; with
 * none, the card falls back to the plain full-width layout.
 */
export function StakeholderProfileCard({ profile }: { profile: StakeholderProfile }) {
  const [open, setOpen] = useState(false);
  // The reel is `pointer-events: none`, so the card owns the hover hold.
  const [held, setHeld] = useState(false);
  const photos = profile.photos ?? stakeholderPhotos(profile.id);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <article
      className={`sust-stake-card${photos.length ? " sust-stake-card--with-photos" : ""}`}
      id={profile.id}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
    >
      {photos.length ? (
        <StakeholderPhotoReel photos={photos} label={profile.name} paused={held} />
      ) : null}

      <div className="sust-stake-card__body">
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
      </div>

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
            aria-haspopup="dialog"
            onClick={() => setOpen(true)}
          >
            Click more
          </button>
        ) : null}
      </footer>

      {open && profile.article ? (
        createPortal(
          <div
            className="sust-stake-modal-backdrop"
            onClick={() => setOpen(false)}
            role="presentation"
          >
            <div
              className="sust-stake-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-title-${profile.id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="sust-stake-modal__close"
                onClick={() => setOpen(false)}
                aria-label="Close dialog"
              >
                &times;
              </button>

              <div className="sust-stake-modal__header">
                <div className="sust-stake-modal__meta">
                  <div className="sust-stake-modal__tags">
                    <span className="sust-stake-card__index">{profile.index}</span>
                    <span className="sust-stake-card__status">{profile.currentStatus}</span>
                    <ul className="sust-stake-card__sdgs" aria-label="SDGs addressed">
                      {profile.sdgs.map((sdg) => (
                        <li key={sdg} data-sdg={sdg}>
                          SDG {sdg}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h3 className="sust-stake-modal__name" id={`modal-title-${profile.id}`}>
                    {profile.name}
                  </h3>
                  {profile.role ? (
                    <span className="sust-stake-card__role">{profile.role}</span>
                  ) : null}
                </div>
              </div>

              <div className="sust-stake-modal__body">
                <ArticleView article={profile.article} />
              </div>
            </div>
          </div>,
          document.body,
        )
      ) : null}
    </article>
  );
}
