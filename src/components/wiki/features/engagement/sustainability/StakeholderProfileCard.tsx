import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type {
  ArticleBlock,
  StakeholderArticle,
  StakeholderProfile,
} from "../../../../../data/engagement/sustainability/sdgChapterContract";
import { stakeholderPhotos } from "../../../../../data/engagement/sustainability/sustainabilityPhotos";
import { PatientChatDialog } from "./PatientChatDialog";
import { RichText } from "./RichText";
import { StakeholderPhotoReel } from "./StakeholderPhotoReel";
import { PageImagePreloads } from "../../../../common/PageImagePreloads";
import { scrollReaderToTarget } from "../../../../../utils";
import { whenPageLoaderLeaves } from "../../../../../utils/pageLoader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (typeof block === "string") {
    return (
      <p>
        <RichText text={block} />
      </p>
    );
  }
  if ("quotes" in block) return <PatientChatDialog quotes={block.quotes} />;
  // All interview photographs belong to the gallery above the article.
  if ("photo" in block) return null;
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

const profilePhotos = (profile: StakeholderProfile) => {
  const photos = [
    ...(profile.photos ?? stakeholderPhotos(profile.id)),
    ...(profile.article?.sections.flatMap((section) =>
      section.blocks.flatMap((block) =>
        typeof block !== "string" && "photo" in block ? [block.photo] : [],
      ),
    ) ?? []),
  ];
  return photos.filter(
    (photo, index) =>
      photos.findIndex((item) => item.src === photo.src) === index,
  );
};

/** "Current Status" + "SDGs Addressed" on one row, as in the finalized wiki copy. */
function StakeMeta({ profile }: { profile: StakeholderProfile }) {
  return (
    <dl className="sust-stake-meta">
      {profile.currentStatus ? (
        <div className="sust-stake-meta__item">
          <dt>Current Status</dt>
          <dd>
            <span className="sust-stake-card__status">
              {profile.currentStatus}
            </span>
          </dd>
        </div>
      ) : null}
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
 * Page card with its summary, centered photo viewer and status row.
 */
function StakeCardFace({
  profile,
  paused,
  action,
}: {
  profile: StakeholderProfile;
  paused: boolean;
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
          {profile.role ? (
            <span className="sust-stake-card__role">{profile.role}</span>
          ) : null}
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
              <StakeholderPhotoReel
                photos={photos}
                label={profile.name}
                paused={paused}
              />
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
 * "Click more" popup with a large gallery above the full interview text.
 */
export function StakeholderProfileCard({
  profile,
}: {
  profile: StakeholderProfile;
}) {
  const [open, setOpen] = useState(false);
  const photos = profilePhotos(profile);
  const withPhotos = photos.length > 0;
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus({ preventScroll: true });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const controls = modalRef.current?.querySelectorAll<HTMLElement>(
          "button, a[href], [tabindex='0']",
        );
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open]);

  const className = `sust-stake-card${withPhotos ? " sust-stake-card--with-photos" : ""}`;

  return (
    <article className={className} id={profile.id}>
      <PageImagePreloads sources={photos.map((photo) => photo.src)} />
      <StakeCardFace
        profile={profile}
        paused={open}
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

      {open && profile.article
        ? createPortal(
            <div
              className="sust-stake-modal-backdrop"
              onClick={() => setOpen(false)}
              role="presentation"
            >
              <div
                ref={modalRef}
                className="sust-stake-modal"
                role="dialog"
                aria-modal="true"
                aria-label={`${profile.name} — interview`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  ref={closeRef}
                  type="button"
                  className="sust-stake-modal__close"
                  onClick={() => setOpen(false)}
                  aria-label="Close dialog"
                >
                  &times;
                </button>

                <div className="sust-stake-modal__scroll">
                  <header className="sust-stake-modal__header">
                    <h3>{profile.name}</h3>
                  </header>
                  {withPhotos ? (
                    <div className="sust-stake-modal__gallery">
                      <StakeholderPhotoReel
                        photos={photos}
                        label={profile.name}
                      />
                    </div>
                  ) : null}
                  <div className="sust-stake-modal__body">
                    <ArticleView article={profile.article} />
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </article>
  );
}

/**
 * Stakeholder deck for a run of profiles without a "Click more" article.
 *
 * A sticky reading window holds the rail and shows one voice at a time.
 * Scroll reads a long card, then switches directly to the next card's start.
 * Small screens and reduced motion use the same cards in document flow.
 */
export function StakeholderDeck({
  profiles,
}: {
  profiles: ReadonlyArray<StakeholderProfile>;
}) {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const navigate = useRef<((index: number) => void) | null>(null);
  const initialLinkRestored = useRef(false);
  const deckId = `deck-${profiles[0].id}`;

  useEffect(() => {
    if (!window.matchMedia("(max-width: 980px)").matches) return;
    const tab = tabs.current[active];
    const list = tab?.parentElement;
    if (!tab || !list) return;
    list.scrollTo({
      left:
        list.scrollLeft +
        tab.getBoundingClientRect().left -
        list.getBoundingClientRect().left -
        (list.clientWidth - tab.clientWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }, [active]);

  useGSAP(
    () => {
      const element = root.current;
      if (!element) return;
      const panels = Array.from(
        element.querySelectorAll<HTMLElement>(".sust-deck__card"),
      );
      const inner = element.closest<HTMLElement>(".route-frame__scroll");
      const restoreInitialLink = () => {
        if (initialLinkRestored.current) return;
        const target = document.getElementById(window.location.hash.slice(1));
        if (!target || !element.contains(target)) return;
        // The route hook also applies the hash after its first layout pass.
        // Run after two frames so the deck's calibrated marker wins once.
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            if (initialLinkRestored.current) return;
            initialLinkRestored.current = true;
            scrollReaderToTarget(target, inner, "instant");
          }),
        );
      };
      const media = gsap.matchMedia();
      media.add(
        {
          animated:
            "(min-width: 981px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
          readable:
            "(max-width: 980px), (max-height: 699px), (prefers-reduced-motion: reduce)",
        },
        (context) => {
          const projected =
            inner && getComputedStyle(inner).overflowY === "hidden";
          const scroller = projected ? inner : undefined;
          if (!context.conditions?.animated) {
            let alive = true;
            navigate.current = (index) =>
              scrollReaderToTarget(panels[index], inner, "instant");
            const triggers = panels.map((panel, index) =>
              ScrollTrigger.create({
                trigger: panel,
                scroller,
                start: "top 45%",
                end: "bottom 45%",
                onToggle: (self) => {
                  if (self.isActive) setActive(index);
                },
                onRefresh: (self) => {
                  if (self.isActive) setActive(index);
                },
              }),
            );
            // Wait for the previous desktop context and the reader projection
            // to finish reverting before measuring document-flow cards.
            const refresh = () => ScrollTrigger.refresh();
            let layoutFrame = requestAnimationFrame(() => {
              layoutFrame = requestAnimationFrame(() => {
                if (alive) refresh();
              });
            });
            whenPageLoaderLeaves().then(() => {
              if (!alive) return;
              refresh();
              restoreInitialLink();
            });
            return () => {
              alive = false;
              cancelAnimationFrame(layoutFrame);
              triggers.forEach((trigger) => trigger.kill());
              navigate.current = null;
            };
          }

          element.dataset.scrollDeck = "true";
          const stage =
            element.querySelector<HTMLElement>(".sust-deck__stage")!;
          const anchors = panels.map(
            (panel) => panel.querySelector<HTMLElement>(".sust-deck__anchor")!,
          );
          const headerHeight = () =>
            Number.parseFloat(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--header-height",
              ),
            ) || 78;
          let travel = 0;
          let markers: number[] = [];
          let overflows: number[] = [];
          let lead = 0;
          const measure = () => {
            const height = Math.min(
              720,
              (projected
                ? inner.clientHeight
                : window.innerHeight - headerHeight()) - 48,
            );
            const top = projected ? 24 : headerHeight() + 24;
            const previousHeight = stage.clientHeight;
            element.style.setProperty("--deck-height", `${height}px`);
            element.style.setProperty("--deck-top", `${top}px`);
            const nextOverflows = panels.map((panel) =>
              Math.max(0, panel.offsetHeight - stage.clientHeight),
            );
            const hold = Math.round(Math.max(220, height * 0.55));
            lead = Math.min(160, height * 0.2);
            let nextTravel = 0;
            markers = nextOverflows.map((overflow) => {
              const start = nextTravel;
              nextTravel += overflow + hold;
              return start;
            });
            const changed =
              Math.abs(travel - nextTravel) > 0.5 ||
              previousHeight !== stage.clientHeight ||
              nextOverflows.some((value, index) => value !== overflows[index]);
            travel = nextTravel;
            overflows = nextOverflows;
            element.style.setProperty("--deck-travel", `${travel}px`);
            return changed;
          };
          measure();
          const move = panels.map((panel) =>
            gsap.quickTo(panel, "y", { duration: 0.12, ease: "power1.out" }),
          );
          let previous = -1;
          const update = (self: ScrollTrigger) => {
            const position = Math.max(
              0,
              Math.min(travel, self.scroll() - self.start),
            );
            let index = 0;
            while (
              index + 1 < markers.length &&
              position + 0.5 >= markers[index + 1]
            )
              index++;
            const offset = Math.max(
              0,
              Math.min(overflows[index], position - markers[index] - lead),
            );
            if (index !== previous) {
              move.forEach((shift) => shift.tween.pause());
              gsap.set(panels[index], { y: -offset });
              previous = index;
              setActive(index);
              panels.forEach((panel, i) => {
                panel.toggleAttribute("data-active", i === index);
                panel.inert = i !== index;
                panel.setAttribute("aria-hidden", String(i !== index));
              });
            } else move[index](-offset);
          };
          // The scroll range selects a single panel; there is no between-card
          // translation and no pin spacer altering the reader's geometry.
          const trigger = ScrollTrigger.create({
            id: deckId,
            trigger: element,
            scroller,
            start: () => `top ${projected ? 24 : headerHeight() + 24}px`,
            end: () => `+=${Math.max(1, travel)}`,
            onUpdate: update,
            onRefresh: (self) => {
              anchors.forEach((anchor, index) => {
                anchor.dataset.readerScrollTop = String(
                  self.start + markers[index],
                );
              });
              update(self);
            },
          });
          update(trigger);
          navigate.current = (index) => {
            scrollReaderToTarget(anchors[index], inner, "instant");
            trigger.update();
          };
          let frame = 0;
          let alive = true;
          const requestMeasure = () => {
            if (frame || !alive) return;
            frame = requestAnimationFrame(() => {
              frame = 0;
              if (measure()) trigger.refresh();
            });
          };
          const observer = new ResizeObserver(requestMeasure);
          panels.forEach((panel) => observer.observe(panel));
          if (projected) observer.observe(inner);
          window.addEventListener("resize", requestMeasure, { passive: true });
          document.fonts.ready.then(() => {
            if (!alive) return;
            measure();
            trigger.refresh();
          });
          whenPageLoaderLeaves().then(() => {
            if (!alive) return;
            measure();
            trigger.refresh();
            restoreInitialLink();
            trigger.update();
          });
          return () => {
            alive = false;
            if (frame) cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("resize", requestMeasure);
            navigate.current = null;
            delete element.dataset.scrollDeck;
            element.style.removeProperty("--deck-height");
            element.style.removeProperty("--deck-top");
            element.style.removeProperty("--deck-travel");
            panels.forEach((panel) => {
              panel.inert = false;
              panel.removeAttribute("data-active");
              panel.removeAttribute("aria-hidden");
            });
            anchors.forEach((anchor) => delete anchor.dataset.readerScrollTop);
            gsap.set(panels, { clearProps: "transform" });
          };
        },
      );
      return () => {
        media.revert();
      };
    },
    {
      scope: root,
      dependencies: [deckId, profiles.length],
      revertOnUpdate: true,
    },
  );

  const select = (index: number) => {
    const next = (index + profiles.length) % profiles.length;
    if (navigate.current) navigate.current(next);
    else setActive(next);
    tabs.current[next]?.focus({ preventScroll: true });
  };

  const onRailKey = (event: ReactKeyboardEvent) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[
      event.key
    ];
    if (step) select(active + step);
    else if (event.key === "Home") select(0);
    else if (event.key === "End") select(profiles.length - 1);
    else return;
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <section ref={root} className="sust-deck" aria-label="Stakeholder voices">
      <PageImagePreloads
        sources={profiles.flatMap((profile) =>
          profilePhotos(profile).map((photo) => photo.src),
        )}
      />
      <div className="sust-deck__viewport">
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
                aria-controls={`${deckId}-panel-${p.id}`}
                tabIndex={index === active ? 0 : -1}
                className="sust-deck__tab"
                onClick={() => select(index)}
              >
                <span className="sust-deck__num">{p.index}</span>
                <span>
                  <span className="sust-deck__name">{p.name}</span>
                  {p.role ? (
                    <span className="sust-deck__role">{p.role}</span>
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </nav>
        <div className="sust-deck__stage">
          <div className="sust-deck__cards">
            {profiles.map((profile, index) => {
              const photos = profilePhotos(profile);
              return (
                <article
                  key={profile.id}
                  className="sust-deck__card"
                  data-active={index === active || undefined}
                  id={`${deckId}-panel-${profile.id}`}
                  role="tabpanel"
                  aria-labelledby={`${deckId}-tab-${profile.id}`}
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
                  </header>

                  <div className="sust-deck__body">
                    <div className="sust-deck__grid">
                      <dl className="sust-deck__fields">
                        {FIELDS.map(([key, label]) =>
                          profile[key] ? (
                            <div
                              className={`sust-deck__field${key === "challenge" ? " sust-deck__field--quote" : ""}${key === "relevantStakeholder" ? " sust-deck__field--lead" : ""}`}
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
                            <StakeholderPhotoReel
                              photos={photos}
                              label={profile.name}
                              paused={index !== active}
                            />
                          ) : (
                            <div
                              className="sust-deck__plate"
                              aria-hidden="true"
                            >
                              <span className="sust-deck__glyph">
                                {profile.index}
                              </span>
                              <span className="sust-deck__plate-label">
                                Interview · {profile.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <footer className="sust-stake-card__footer">
                    <StakeMeta profile={profile} />
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
