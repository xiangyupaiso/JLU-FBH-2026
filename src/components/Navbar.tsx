import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import teamCrestUrl from "../assets/jlu-fbh-crest.png";
import projectWetlabSprite from "../assets/story-nav/nav-project-wetlab-v2.webp";
import drylabEngagementSprite from "../assets/story-nav/nav-drylab-engagement-v2.webp";
import Pages from "../pages";
import { PageSearch } from "./PageSearch";

interface NavCard {
  name: string;
  path: string;
  small: string;
  em: string;
  spriteRow: string;
}

interface NavDropdown {
  key: string;
  label: string;
  sprite: string;
  intro: string;
  enterLabel: string;
  cards: NavCard[];
}

const SPRITES = {
  "project-wetlab": projectWetlabSprite,
  "drylab-engagement": drylabEngagementSprite,
} as const;

interface FolderDisplay {
  key: string;
  intro: string;
  enterLabel: string;
  sprite: keyof typeof SPRITES;
  cards: Record<string, Pick<NavCard, "small" | "em" | "spriteRow">>;
}

const NAV_DISPLAY: Record<string, FolderDisplay> = {
  Team: {
    key: "team",
    intro:
      "Coming together with a shared purpose to turn the impossible into reality.",
    enterLabel: "Meet the team",
    sprite: "drylab-engagement",
    cards: {
      Roster: {
        small: "01 / ROSTER",
        em: "Students · Advisors · PIs",
        spriteRow: "100%",
      },
      Attributions: {
        small: "02 / ATTRIBUTIONS",
        em: "Roles · Tasks · Support",
        spriteRow: "100%",
      },
      Activities: {
        small: "03 / ACTIVITIES",
        em: "Team dynamics · Outreach · Milestones",
        spriteRow: "100%",
      },
    },
  },
  Project: {
    key: "project",
    intro:
      "Why TNBC needs a traceable route from evidence to vaccine candidates.",
    enterLabel: "Project overview",
    sprite: "project-wetlab",
    cards: {
      Description: {
        small: "01 / CONTEXT",
        em: "Problem · Gap · Response",
        spriteRow: "0%",
      },
      Engineering: {
        small: "02 / ITERATE",
        em: "Design · Build · Test · Learn",
        spriteRow: "0%",
      },
      Results: {
        small: "03 / EVIDENCE",
        em: "Figures · Statistics · Failures",
        spriteRow: "0%",
      },
      Contribution: {
        small: "04 / RESPONSIBILITY",
        em: "Gates · Limits · Reuse",
        spriteRow: "0%",
      },
    },
  },
  "Wet Lab": {
    key: "wet-lab",
    intro:
      "From construct design to measurements that can support—or reject—a claim.",
    enterLabel: "Enter Wet Lab",
    sprite: "project-wetlab",
    cards: {
      Experiments: {
        small: "01 / METHODS",
        em: "Protocols · Controls · Materials",
        spriteRow: "100%",
      },
      Notebook: {
        small: "02 / TRACE",
        em: "Timeline · Records · Reproduce",
        spriteRow: "100%",
      },
      Measurement: {
        small: "03 / QUANTIFY",
        em: "Parts · Characterization · Range",
        spriteRow: "100%",
      },
      "Alternative Platform": {
        small: "04 / HOST",
        em: "Chassis · Range · Limits",
        spriteRow: "100%",
      },
      "Safety and Security": {
        small: "05 / GUARD",
        em: "Risks · Mitigation · Stewardship",
        spriteRow: "100%",
      },
    },
  },
  "Dry Lab": {
    key: "dry-lab",
    intro:
      "Models, software, and hardware that make the wet claims inspectable.",
    enterLabel: "Enter Dry Lab",
    sprite: "drylab-engagement",
    cards: {
      Model: {
        small: "01 / REASON",
        em: "Assumptions · Validation · Limits",
        spriteRow: "0%",
      },
      Software: {
        small: "02 / REUSE",
        em: "Run · Inspect · Extend",
        spriteRow: "0%",
      },
      Hardware: {
        small: "03 / INSTRUMENT",
        em: "Build · Calibrate · Share",
        spriteRow: "0%",
      },
      Games: {
        small: "04 / INTERACT",
        em: "Play · Explore · Experiment",
        spriteRow: "0%",
      },
    },
  },
  Engagement: {
    key: "engagement",
    intro:
      "Stakeholder input becomes design evidence only when its consequence stays visible.",
    enterLabel: "Follow the decisions",
    sprite: "drylab-engagement",
    cards: {
      Entrepreneurship: {
        small: "01 / TRANSLATE",
        em: "Users · Risks · Next steps",
        spriteRow: "100%",
      },
      "Human Practices": {
        small: "02 / LISTEN",
        em: "Input · Change · Consequence",
        spriteRow: "100%",
      },
      Education: {
        small: "03 / EXPLAIN",
        em: "Audience · Access · Reflection",
        spriteRow: "100%",
      },
      Inclusivity: {
        small: "04 / INCLUDE",
        em: "Reach · Access · Equity",
        spriteRow: "100%",
      },
      Sustainability: {
        small: "05 / SUSTAIN",
        em: "SDGs · Impact · Tradeoffs",
        spriteRow: "100%",
      },
    },
  },
};

const DROPDOWNS: NavDropdown[] = Pages.flatMap((item) => {
  if (!("folder" in item) || !item.folder || !item.name) return [];
  const display = NAV_DISPLAY[item.name];
  if (!display) return [];

  const cards = item.folder.flatMap((page): NavCard[] => {
    if (!page.name || !page.path) return [];
    const card = display.cards[page.name];
    if (!card) return [];
    return [
      {
        name: page.name,
        path: page.path,
        ...card,
      },
    ];
  });

  return [
    {
      key: display.key,
      label: item.name,
      sprite: SPRITES[display.sprite],
      intro: display.intro,
      enterLabel: display.enterLabel,
      cards,
    },
  ];
});

const NAV_BREAKPOINT = 980;

function isActive(pathname: string, path: string): boolean {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function dropdownActive(pathname: string, dropdown: NavDropdown): boolean {
  return dropdown.cards.some((c) => isActive(pathname, c.path));
}

export function Navbar() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openTimerRef = useRef<number>(0);
  const closeTimerRef = useRef<number>(0);
  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const pathname = useLocation().pathname;

  const clearTimers = useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    window.clearTimeout(closeTimerRef.current);
  }, []);

  const queueOpen = useCallback(
    (key: string) => {
      if (typeof window === "undefined" || window.innerWidth <= NAV_BREAKPOINT)
        return;
      clearTimers();
      openTimerRef.current = window.setTimeout(() => setOpenKey(key), 70);
    },
    [clearTimers],
  );

  const queueClose = useCallback(() => {
    if (typeof window === "undefined" || window.innerWidth <= NAV_BREAKPOINT)
      return;
    clearTimers();
    closeTimerRef.current = window.setTimeout(() => setOpenKey(null), 170);
  }, [clearTimers]);

  const openImmediate = useCallback(
    (key: string) => {
      if (
        typeof window === "undefined" ||
        window.innerWidth <= NAV_BREAKPOINT
      ) {
        setMobileOpen(true);
        return;
      }
      clearTimers();
      setOpenKey(key);
    },
    [clearTimers],
  );

  const closeAll = useCallback(() => {
    clearTimers();
    setOpenKey(null);
    setMobileOpen(false);
  }, [clearTimers]);

  // Close on route change
  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  // Clean up timers on unmount
  useEffect(() => () => clearTimers(), [clearTimers]);

  // Keep the reading-progress thread without changing the navigation color
  // as different page surfaces pass beneath it.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    header.style.setProperty("--scroll-p", "0");
    const root = document.documentElement;
    let frame = 0;

    const paint = () => {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      header.style.setProperty("--scroll-p", progress.toFixed(4));
    };

    const request = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    const onScroll = () => request();
    const onResize = () => request();
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  // Click-outside to close whichever menu is open (desktop and/or mobile)
  useEffect(() => {
    if (!openKey && !mobileOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current) return;
      if (headerRef.current.contains(event.target as Node)) return;
      closeAll();
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onPointerDown, true);
  }, [openKey, mobileOpen, closeAll]);

  // Escape closes whichever menu is open and restores focus to its toggle
  useEffect(() => {
    if (!openKey && !mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      if (mobileOpen) {
        setMobileOpen(false);
        clearTimers();
        mobileToggleRef.current?.focus();
      } else {
        const toggle = shellRef.current?.querySelector<HTMLButtonElement>(
          `button[aria-controls="circure-nav-menu"][aria-expanded="true"]`,
        );
        setOpenKey(null);
        clearTimers();
        toggle?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openKey, mobileOpen, clearTimers]);

  // Arrow Left/Right cycling among dropdown toggles
  const onToggleKeydown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const toggles = Array.from(
        shellRef.current?.querySelectorAll<HTMLButtonElement>(
          `button[aria-controls="circure-nav-menu"]`,
        ) ?? [],
      );
      if (toggles.length === 0) return;
      const currentIndex = toggles.findIndex((t) => t === event.currentTarget);
      const nextIndex =
        event.key === "ArrowRight"
          ? (currentIndex + 1) % toggles.length
          : (currentIndex - 1 + toggles.length) % toggles.length;
      const nextToggle = toggles[nextIndex];
      nextToggle.focus();
      const nextKey = nextToggle.dataset.navKey;
      if (nextKey) openImmediate(nextKey);
    },
    [openImmediate],
  );

  const wetLabActive = DROPDOWNS.find((d) => d.key === "wet-lab")?.cards.some(
    (card) => isActive(pathname, card.path),
  );
  // Reader-route modules recolour the fixed bar and its pills from their own
  // palette (`route-palette-<module>.css`). Adding a module here is the only
  // global change a new skinned module needs.
  const projectActive = DROPDOWNS.find((d) => d.key === "project")?.cards.some(
    (card) => isActive(pathname, card.path),
  );
  const dryLabActive = DROPDOWNS.find((d) => d.key === "dry-lab")?.cards.some(
    (card) => isActive(pathname, card.path),
  );
  const engagementActive = DROPDOWNS.find((d) => d.key === "engagement")?.cards.some(
    (card) => isActive(pathname, card.path),
  );
  const teamActive =
    DROPDOWNS.find((d) => d.key === "team")?.cards.some((card) =>
      isActive(pathname, card.path),
    ) || isActive(pathname, "/team");
  const headerClassName = [
    "site-header",
    openKey ? "is-nav-open" : "",
    mobileOpen ? "is-mobile-open" : "",
    wetLabActive ? "is-wet-lab-page" : "",
    projectActive ? "is-project-page" : "",
    dryLabActive ? "is-dry-lab-page" : "",
    engagementActive ? "is-engagement-page" : "",
    teamActive ? "is-team-page" : "",
    wetLabActive || projectActive || dryLabActive || engagementActive || teamActive ? "is-route-page" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const homeActive = isActive(pathname, "/");

  return (
    <>
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        focusable="false"
      >
        <symbol id="circure-ribbon-knot" viewBox="0 0 32 46">
          <path d="M8.2 41C10.8 32.6 19.8 24.7 21.4 15.9C22.6 9.2 18.4 5.1 14.3 6.6C9.7 8.2 9.6 13.3 12.4 18.3C15.7 24.2 21.8 31.3 24.2 41" />
        </symbol>
      </svg>

      <header
        ref={headerRef}
        className={headerClassName}
        data-header
        data-nav-theme={openKey ?? undefined}
      >
        <div
          className="circure-nav-shell"
          ref={shellRef}
          onPointerEnter={openKey ? clearTimers : undefined}
          onPointerLeave={openKey ? queueClose : undefined}
        >
          <div className="circure-nav-head">
            <Link to="/" className="wordmark" aria-label="CirCure home">
              <span className="wordmark-stage" aria-hidden="true">
                <span className="wordmark-crest">
                  <img
                    className="team-crest logo--dark"
                    src={teamCrestUrl}
                    alt=""
                  />
                </span>
                <span className="logo-word-full">CirCure</span>
                <svg className="logo-symbol" viewBox="0 0 40 40">
                  <circle
                    className="logo-ring"
                    pathLength={1}
                    cx="20"
                    cy="20"
                    r="15.25"
                  />
                  <path
                    className="logo-ribbon"
                    pathLength={1}
                    d="M13.2 29.8C15.3 24.3 21.4 18.2 23 13.1C24.2 9.2 21.8 7 18.9 7.5C15.4 8.1 14.2 11.1 15.8 14.4C17.8 18.7 22.1 23.7 24.3 29.7"
                  />
                  <circle className="logo-junction" cx="9.2" cy="8.8" r="1.7" />
                </svg>
                <span className="wordmark-folio">JLU-FBH · iGEM 2026</span>
              </span>
            </Link>

            <PageSearch />

            <nav className="desktop-nav" aria-label="Primary navigation">
              <ul className="nav-list">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    aria-current={homeActive ? "page" : undefined}
                  >
                    Home
                  </Link>
                </li>
                {DROPDOWNS.map((d, i) => (
                  <li key={d.key} className="nav-item" data-section={d.key}>
                    <button
                      className="nav-link"
                      type="button"
                      data-nav-key={d.key}
                      aria-expanded={openKey === d.key}
                      aria-controls="circure-nav-menu"
                      aria-current={
                        dropdownActive(pathname, d) ? "page" : undefined
                      }
                      onPointerEnter={() => queueOpen(d.key)}
                      onFocus={() => openImmediate(d.key)}
                      onClick={() => openImmediate(d.key)}
                      onKeyDown={onToggleKeydown}
                    >
                      <span className="nav-folio" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {d.label}
                      <svg
                        className="nav-caret"
                        viewBox="0 0 10 6"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="mobile-menu-toggle"
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="circure-mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              ref={mobileToggleRef}
            >
              <span>Menu</span>
              <svg
                className="ribbon-mark"
                viewBox="0 0 32 46"
                aria-hidden="true"
              >
                <use href="#circure-ribbon-knot" />
              </svg>
            </button>
          </div>

          <span className="circure-nav-surface" aria-hidden="true">
            {DROPDOWNS.map((dropdown) => (
              <span
                key={`${dropdown.key}-aura`}
                className={`circure-nav-aura circure-nav-aura--${dropdown.key}`}
              />
            ))}
          </span>

          <div
            className={`circure-mega-menu${openKey ? " is-open" : ""}`}
            id="circure-nav-menu"
            aria-hidden={!openKey}
            inert={!openKey || undefined}
          >
            {DROPDOWNS.map((d) => {
              const isActivePanel = openKey === d.key;
              const manyCards = d.cards.length > 3;
              return (
                <div
                  key={d.key}
                  className={[
                    "circure-nav-panel",
                    isActivePanel ? "is-active" : "",
                    manyCards ? "has-many-cards" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  data-nav-panel={d.key}
                  aria-hidden={!isActivePanel}
                  style={
                    manyCards
                      ? {
                          gridTemplateColumns: `1.13fr repeat(${d.cards.length}, 1fr)`,
                        }
                      : undefined
                  }
                >
                  <article className="nav-intro-card">
                    <span>{d.label}</span>
                    <strong>{d.intro}</strong>
                    <Link to={d.cards[0]?.path ?? "/"} onClick={closeAll}>
                      {d.enterLabel} <b>→</b>
                    </Link>
                  </article>
                  {d.cards.map((c, i) => (
                    <Link
                      key={c.path}
                      to={c.path}
                      className="nav-image-card"
                      style={
                        {
                          "--nav-image": `url(${d.sprite})`,
                          "--nav-col": `${(i / Math.max(1, d.cards.length - 1)) * 100}%`,
                          "--nav-row": c.spriteRow,
                        } as React.CSSProperties
                      }
                      onClick={closeAll}
                    >
                      <small>{c.small}</small>
                      <strong>{c.name}</strong>
                      <em>{c.em}</em>
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>

          <nav
            className={`circure-mobile-menu${mobileOpen ? " is-open" : ""}`}
            id="circure-mobile-menu"
            aria-label="Mobile navigation"
            aria-hidden={!mobileOpen}
            inert={!mobileOpen || undefined}
          >
            <Link to="/" onClick={closeAll}>
              Home
            </Link>
            {DROPDOWNS.map((d) => (
              <Link
                key={`${d.key}-head`}
                to={d.cards[0]?.path ?? "/"}
                onClick={closeAll}
              >
                {d.label}
              </Link>
            ))}
            {DROPDOWNS.flatMap((d) =>
              d.cards.map((c) => (
                <Link key={c.path} to={c.path} onClick={closeAll}>
                  {c.name}
                </Link>
              )),
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
