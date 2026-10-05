import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
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

const profilePhotos = (profile: StakeholderProfile) =>
  profile.photos ?? stakeholderPhotos(profile.id);

/** "Current Status" + "SDGs Addressed" on one row, as in the finalized wiki copy. */
function StakeMeta({ profile }: { profile: StakeholderProfile }) {
  return (
    <dl className="sust-stake-meta">
      <div className="sust-stake-meta__item">
        <dt>Current Status</dt>
        <dd>
          <span className="sust-stake-card__status">{profile.currentStatus}</span>
        </dd>
      </div>
      <div className="sust-stake-meta__item">
        <dt>SDGs Addressed</dt>
        <dd>
          <ul className="sust-stake-card__sdgs">
            {profile.sdgs.map((sdg) => (
              <li key={sdg} data-sdg={sdg}>
                SDG {sdg}
              </li>
            ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
}

/**
 * Card face shared by the page card and its "Click more" popup: the index tab
 * on the left, copy on the left of the body and photographs on the right, and
 * the status row along the bottom.
 */
function StakeCardFace({
  profile,
  held,
  action,
}: {
  profile: StakeholderProfile;
  held: boolean;
  action?: ReactNode;
}) {
  const photos = profilePhotos(profile);
  return (
    <>
      <span className="sust-stake-card__tab" aria-hidden="true">
        {profile.index}
      </span>
      <div className="sust-stake-card__main">
        <header className="sust-stake-card__header">
          <h4 className="sust-stake-card__name">{profile.name}</h4>
          {profile.role ? <span className="sust-stake-card__role">{profile.role}</span> : null}
        </header>

        <div className="sust-stake-card__body">
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
          {photos.length ? (
            <div className="sust-stake-card__media">
              <StakeholderPhotoReel photos={photos} label={profile.name} paused={held} />
            </div>
          ) : null}
        </div>

        <footer className="sust-stake-card__footer">
          <StakeMeta profile={profile} />
          {action}
        </footer>
      </div>
    </>
  );
}

/**
 * Stakeholder card: Relevant Stakeholder / Challenge / Key Insight / What
 * Changed beside the engagement photographs, the status row underneath, and a
 * "Click more" popup that repeats the card face above the full interview text.
 */
export function StakeholderProfileCard({ profile }: { profile: StakeholderProfile }) {
  const [open, setOpen] = useState(false);
  // The reel is `pointer-events: none`, so the card owns the hover hold.
  const [held, setHeld] = useState(false);
  const withPhotos = profilePhotos(profile).length > 0;

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

  const className = `sust-stake-card${withPhotos ? " sust-stake-card--with-photos" : ""}`;

  return (
    <article
      className={className}
      id={profile.id}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
    >
      <StakeCardFace
        profile={profile}
        held={held}
        action={
          profile.article ? (
            <button
              type="button"
              className="sust-stake-card__toggle"
              aria-haspopup="dialog"
              onClick={() => setOpen(true)}
            >
              Click more
            </button>
          ) : null
        }
      />

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
              aria-label={`${profile.name} — interview`}
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

              {/* The card stays as it is on top; the interview text opens below. */}
              <div className="sust-stake-modal__scroll">
                <div className={`${className} sust-stake-card--in-modal`}>
                  <StakeCardFace profile={profile} held={false} />
                </div>
                <div className="sust-stake-modal__body">
                  <ArticleView article={profile.article} />
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      ) : null}
    </article>
  );
}

/**
 * Stakeholder deck for a run of profiles without a "Click more" article.
 *
 * Adapted from `stakeholder-versions.html`: a numbered rail of voices on the
 * left, one card on the right with the four fields beside a tilted photo plate,
 * and the status row along the bottom like the single cards. Colours follow
 * the route palette; profiles with no documented photographs get a typographic
 * plate instead.
 */
export function StakeholderDeck({ profiles }: { profiles: ReadonlyArray<StakeholderProfile> }) {
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const profile = profiles[active];
  const photos = profilePhotos(profile);
  const deckId = `deck-${profiles[0].id}`;

  const select = (index: number) => {
    const next = (index + profiles.length) % profiles.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onRailKey = (event: ReactKeyboardEvent) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (step) select(active + step);
    else if (event.key === "Home") select(0);
    else if (event.key === "End") select(profiles.length - 1);
    else return;
    event.preventDefault();
  };

  return (
    <section className="sust-deck" aria-label="Stakeholder voices">
      <nav className="sust-deck__rail" aria-label="Choose a stakeholder">
        <p className="sust-deck__label">Stakeholder voices</p>
        <div role="tablist" aria-orientation="vertical" onKeyDown={onRailKey}>
          {profiles.map((p, index) => (
            <button
              key={p.id}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`${deckId}-tab-${p.id}`}
              aria-selected={index === active}
              aria-controls={`${deckId}-panel`}
              tabIndex={index === active ? 0 : -1}
              className="sust-deck__tab"
              onClick={() => setActive(index)}
            >
              <span className="sust-deck__num">{p.index}</span>
              <span>
                <span className="sust-deck__name">{p.name}</span>
                {p.role ? <span className="sust-deck__role">{p.role}</span> : null}
              </span>
            </button>
          ))}
        </div>
      </nav>
      <article
        className="sust-deck__card"
        id={`${deckId}-panel`}
        role="tabpanel"
        aria-labelledby={`${deckId}-tab-${profile.id}`}
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
      >
        {/* Keeps in-page anchors to each profile id working for the active one. */}
        <span id={profile.id} className="sust-deck__anchor" />
        <header className="sust-deck__top">
          <div>
            <p className="sust-deck__kicker">
              {profile.index}
              {profile.role ? ` · ${profile.role}` : ""}
            </p>
            <h4 className="sust-deck__title">{profile.name}</h4>
          </div>
          <span className="sust-deck__step">
            {String(active + 1).padStart(2, "0")} / {String(profiles.length).padStart(2, "0")}
          </span>
        </header>

        <div className="sust-deck__grid">
          <dl className="sust-deck__fields">
            {FIELDS.map(([key, label]) =>
              profile[key] ? (
                <div
                  className={`sust-deck__field${key === "challenge" ? " sust-deck__field--quote" : ""}`}
                  key={key}
                >
                  <dt>{label}</dt>
                  <dd>
                    <RichText text={profile[key]} />
                  </dd>
                </div>
              ) : null,
            )}
          </dl>

          {/* Re-keyed per profile so the reel restarts from its first frame. */}
          <div className="sust-deck__visual" key={profile.id}>
            <div className="sust-deck__frame">
              {photos.length ? (
                <StakeholderPhotoReel photos={photos} label={profile.name} paused={held} />
              ) : (
                <div className="sust-deck__plate" aria-hidden="true">
                  <span className="sust-deck__glyph">{profile.index}</span>
                  <span className="sust-deck__plate-label">Interview · {profile.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="sust-stake-card__footer">
          <StakeMeta profile={profile} />
        </footer>
      </article>
    </section>
  );
}
