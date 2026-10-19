import {
  type MouseEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { QueuedImage } from "./common/QueuedImage";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
const teamCrestUrl =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/jlu-fbh-crest.avif";
import Pages from "../pages";
import { PageSearch } from "./PageSearch";
import { HOME_INTRO_REPLAY_EVENT } from "../utils/homeIntro";
import { useRouteModule } from "../hooks/useRouteModule";
import { NAV_ICONS } from "./navIcons";

interface NavCard {
  name: string;
  path: string;
  icon: string;
}

interface NavDropdown {
  key: string;
  label: string;
  cards: NavCard[];
}

const NAV_KEYS: Record<string, string> = {
  Team: "team",
  Project: "project",
  "Wet Lab": "wet-lab",
  "Dry Lab": "dry-lab",
  Engagement: "engagement",
};

const DROPDOWNS: NavDropdown[] = Pages.flatMap((item) => {
  if (!("folder" in item) || !item.folder || !item.name) return [];
  const key = NAV_KEYS[item.name];
  if (!key) return [];

  const cards = item.folder.flatMap((page): NavCard[] => {
    if (!page.name || !page.path) return [];
    return [
      {
        name: page.name,
        path: page.path,
        icon: NAV_ICONS[page.name] ?? "",
      },
    ];
  });

  return [
    {
      key,
      label: item.name,
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
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [menuGeometry, setMenuGeometry] = useState({
    left: 0,
    height: 0,
    index: 0,
    toggleLeft: 0,
    toggleWidth: 0,
  });
  const openTimerRef = useRef<number>(0);
  const closeTimerRef = useRef<number>(0);
  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const panelTransitionRef = useRef<
    { weight: number; x: number; blur: number }[]
  >([]);
  const menuMotionRef = useRef<{
    values: number[];
    velocities: number[];
  } | null>(null);
  const homeSurfaceRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const pathname = useLocation().pathname;
  const module = useRouteModule();
  const homeActive = module.home;
  const currentDropdownKey =
    DROPDOWNS.find((d) => dropdownActive(pathname, d))?.key ?? null;
  const [isBallMode, setIsBallMode] = useState(false);
  const [isBallExpanded, setIsBallExpandedState] = useState(false);
  const ballExpandedRef = useRef(false);
  const scrollDeltaRef = useRef(0);
  const [areHomeControlsHidden, setAreHomeControlsHidden] = useState(false);
  const ballCollapsed = isBallMode && !isBallExpanded;

  // Width changes belong only to the expandable floating capsule.
  useLayoutEffect(() => {
    const surface = homeSurfaceRef.current;
    const shell = shellRef.current;
    if (!homeActive || !surface || !shell) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let initialized = surface.style.width !== "";
    const syncSurface = () => {
      const content = shell.querySelector<HTMLElement>(".nav-ball-content")!;
      const gap = Number.parseFloat(getComputedStyle(content).columnGap) || 0;
      const controls = Array.from(content.children).filter(
        (node) =>
          !node.classList.contains("ball-collapse-btn") &&
          getComputedStyle(node).display !== "none",
      );
      const controlsWidth =
        controls.reduce(
          (sum, node) => sum + (node as HTMLElement).offsetWidth,
          0,
        ) +
        28 +
        gap * controls.length;
      const floatingWidth =
        window.innerWidth <= NAV_BREAKPOINT
          ? shell.clientWidth
          : Math.min(shell.clientWidth, 118 + 12 + controlsWidth + 14);
      const preparing = headerRef.current?.hasAttribute("data-home-preparing");
      gsap.to(surface, {
        width: isBallMode && isBallExpanded ? floatingWidth : 48,
        duration:
          initialized && !reduced.matches ? (preparing ? 0.2 : 0.48) : 0,
        delay: preparing ? 0.18 : 0,
        ease: preparing
          ? "sine.inOut"
          : isBallExpanded
            ? "power3.out"
            : "power3.inOut",
        overwrite: true,
      });
      initialized = true;
    };
    syncSurface();
    const observer = new ResizeObserver(syncSurface);
    observer.observe(shell);
    reduced.addEventListener("change", syncSurface);
    document.fonts.addEventListener("loadingdone", syncSurface);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", syncSurface);
      document.fonts.removeEventListener("loadingdone", syncSurface);
      gsap.killTweensOf(surface);
    };
  }, [homeActive, isBallMode, isBallExpanded]);

  const clearTimers = useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    window.clearTimeout(closeTimerRef.current);
  }, []);

  // One animation owner keeps the tray, highlight and lists in step. Killing
  // a tween preserves its rendered values, so a quick reversal never resets.
  useLayoutEffect(() => {
    const menu = menuRef.current;
    const highlight = highlightRef.current;
    if (!menu || !highlight) return;
    const panels = Array.from(
      menu.querySelectorAll<HTMLElement>("[data-nav-panel]"),
    );
    if (panelTransitionRef.current.length !== panels.length) {
      panelTransitionRef.current = panels.map(() => ({
        weight: 0,
        x: 0,
        blur: 0,
      }));
    }
    const transitions = panelTransitionRef.current;
    const targets = [menu, highlight, ...panels, ...transitions];
    const setPanelX = panels.map((panel) => gsap.quickSetter(panel, "x", "px"));
    const renderPanels = () => {
      panels.forEach((panel, index) => {
        const { weight, x, blur } = transitions[index];
        panel.style.opacity = String(weight);
        panel.style.visibility = weight > 0.001 ? "visible" : "hidden";
        // Soften only the brief handoff, keeping settled copy sharp. This
        // avoids two crisp labels competing in the same place mid-transition.
        panel.style.filter =
          weight > 0.001 && blur > 0.01 ? `blur(${blur}px)` : "none";
        setPanelX[index](x);
      });
    };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stopFollowing: (() => void) | undefined;
    const animate = () => {
      stopFollowing?.();
      gsap.killTweensOf(targets);
      const wasVisible = Number(gsap.getProperty(menu, "opacity")) > 0.01;
      const duration = reduced.matches ? 0 : 0.3;
      if (!openKey) {
        menuMotionRef.current?.velocities.fill(0);
        // Keep the last list intact while its carrier retires; inactive lists
        // are already inert, independently of their visual exit.
        gsap.to(menu, {
          autoAlpha: 0,
          y: -6,
          duration: reduced.matches ? 0 : 0.24,
          ease: "power2.inOut",
          overwrite: true,
        });
        gsap.to(highlight, {
          autoAlpha: 0,
          duration: reduced.matches ? 0 : 0.2,
          overwrite: true,
        });
        return;
      }
      if (!wasVisible) {
        // Opening starts beneath its own trigger, without a flight from x=0
        // or a stale category's height.
        gsap.set(menu, {
          x: menuGeometry.left,
          height: menuGeometry.height + 10,
          y: -6,
        });
        gsap.set(highlight, {
          x: menuGeometry.toggleLeft,
          width: menuGeometry.toggleWidth,
        });
      }
      gsap.to(menu, {
        y: 0,
        autoAlpha: 1,
        duration,
        ease: "power2.out",
        overwrite: true,
      });
      gsap.to(highlight, {
        autoAlpha: 1,
        duration,
        ease: "power2.out",
        overwrite: true,
      });
      const destination = [
        menuGeometry.left,
        menuGeometry.height + 10,
        menuGeometry.toggleLeft,
        menuGeometry.toggleWidth,
      ];
      const setters = [
        gsap.quickSetter(menu, "x", "px"),
        gsap.quickSetter(menu, "height", "px"),
        gsap.quickSetter(highlight, "x", "px"),
        gsap.quickSetter(highlight, "width", "px"),
      ];
      if (!wasVisible || reduced.matches || !menuMotionRef.current) {
        menuMotionRef.current = {
          values: [...destination],
          velocities: destination.map(() => 0),
        };
        setters.forEach((set, index) => set(destination[index]));
      } else {
        // Critically damped following preserves position AND velocity when
        // the pointer changes direction, rather than restarting an easing.
        const motion = menuMotionRef.current;
        const follow = (_time: number, deltaMs: number) => {
          const dt = Math.min(deltaMs / 1000, 0.04);
          const frequency = 28;
          const decay = Math.exp(-frequency * dt);
          let settled = true;
          destination.forEach((target, index) => {
            const offset = motion.values[index] - target;
            const step = (motion.velocities[index] + frequency * offset) * dt;
            motion.values[index] = target + (offset + step) * decay;
            motion.velocities[index] =
              (motion.velocities[index] - frequency * step) * decay;
            if (
              Math.abs(motion.values[index] - target) > 0.01 ||
              Math.abs(motion.velocities[index]) > 0.05
            ) {
              settled = false;
            }
            setters[index](motion.values[index]);
          });
          if (settled) {
            setters.forEach((set, index) => set(destination[index]));
            motion.values = [...destination];
            motion.velocities.fill(0);
            gsap.ticker.remove(follow);
          }
        };
        gsap.ticker.add(follow);
        stopFollowing = () => gsap.ticker.remove(follow);
      }
      // Keep each icon and label together. The short, simultaneous handoff
      // has no empty beat and retains its current mix on rapid reversals.
      gsap.set(panels, { xPercent: 0, clipPath: "none" });
      if (!wasVisible || reduced.matches) {
        transitions.forEach((transition, index) => {
          transition.weight = index === menuGeometry.index ? 1 : 0;
          transition.x = 0;
          transition.blur = 0;
        });
        renderPanels();
      } else {
        const dominantIndex = transitions.reduce(
          (current, transition, index) =>
            transition.weight > transitions[current].weight ? index : current,
          0,
        );
        const direction = menuGeometry.index >= dominantIndex ? 1 : -1;
        const incoming = transitions[menuGeometry.index];
        if (incoming.weight < 0.001) {
          incoming.x = direction * 4;
          incoming.blur = 1.2;
        }
        gsap.to(transitions, {
          weight: (index: number) => (index === menuGeometry.index ? 1 : 0),
          x: (index: number) =>
            index === menuGeometry.index ? 0 : -direction * 2,
          blur: (index: number) => (index === menuGeometry.index ? 0 : 6),
          duration: 0.18,
          ease: "power2.out",
          onUpdate: renderPanels,
          overwrite: true,
        });
      }
    };
    animate();
    reduced.addEventListener("change", animate);
    return () => {
      stopFollowing?.();
      reduced.removeEventListener("change", animate);
      gsap.killTweensOf(targets);
    };
  }, [openKey, menuGeometry]);

  const updateMenuAnchor = useCallback((key: string) => {
    const shell = shellRef.current;
    const toggle = shell?.querySelector<HTMLButtonElement>(
      `button[data-nav-key="${key}"]`,
    );
    if (!shell || !toggle) return;
    const shellRect = shell.getBoundingClientRect();
    const toggleRect = toggle.getBoundingClientRect();
    const nav = shell.querySelector<HTMLElement>(".desktop-nav");
    const panel = shell.querySelector<HTMLElement>(`[data-nav-panel="${key}"]`);
    if (!nav || !panel) return;
    const trayWidth = Math.min(
      Number.parseFloat(
        getComputedStyle(shell).getPropertyValue("--nav-menu-width"),
      ) || 304,
      shellRect.width - 20,
    );
    const centeredLeft =
      toggleRect.left - shellRect.left + toggleRect.width / 2 - trayWidth / 2;
    const next = {
      left: Math.max(
        10,
        Math.min(shellRect.width - trayWidth - 10, centeredLeft),
      ),
      height: panel.offsetHeight,
      index: DROPDOWNS.findIndex((dropdown) => dropdown.key === key),
      toggleLeft: toggleRect.left - nav.getBoundingClientRect().left,
      toggleWidth: toggleRect.width,
    };
    setMenuGeometry((current) =>
      Object.keys(next).every(
        (name) =>
          current[name as keyof typeof next] ===
          next[name as keyof typeof next],
      )
        ? current
        : next,
    );
  }, []);

  const queueOpen = useCallback(
    (key: string) => {
      if (typeof window === "undefined" || window.innerWidth <= NAV_BREAKPOINT)
        return;
      clearTimers();
      openTimerRef.current = window.setTimeout(() => {
        updateMenuAnchor(key);
        setOpenKey(key);
      }, 70);
    },
    [clearTimers, updateMenuAnchor],
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
      updateMenuAnchor(key);
      setOpenKey(key);
    },
    [clearTimers, updateMenuAnchor],
  );

  const closeAll = useCallback(() => {
    clearTimers();
    setOpenKey(null);
    setMobileOpen(false);
  }, [clearTimers]);

  const setIsBallExpanded = useCallback(
    (expanded: boolean) => {
      if (ballExpandedRef.current === expanded) return;
      // Restore focus before inert hides the controls from keyboard navigation.
      if (!expanded) {
        const header = headerRef.current;
        if (
          header
            ?.querySelector(".nav-ball-content")
            ?.contains(document.activeElement)
        ) {
          header
            .querySelector<HTMLAnchorElement>(".wordmark")
            ?.focus({ preventScroll: true });
        }
        closeAll();
      }
      ballExpandedRef.current = expanded;
      setIsBallExpandedState(expanded);
    },
    [closeAll],
  );

  const returnHome = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    closeAll();
    setIsBallExpanded(false);
    if (homeActive) {
      event.preventDefault();
      window.dispatchEvent(new Event(HOME_INTRO_REPLAY_EVENT));
    }
  };

  const handleCrestClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isBallMode && !isBallExpanded) {
      event.preventDefault();
      setIsBallExpanded(true);
      return;
    }
    const target = event.target as HTMLElement | null;
    if (isBallMode && isBallExpanded && target?.closest(".wordmark-crest")) {
      event.preventDefault();
      setIsBallExpanded(false);
      return;
    }
    returnHome(event);
  };

  // Close on route change
  useEffect(() => {
    closeAll();
    setIsBallExpanded(false);
  }, [pathname, closeAll, setIsBallExpanded]);

  // Clean up timers on unmount
  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    if (!openKey) return;
    const onResize = () => {
      if (window.innerWidth <= NAV_BREAKPOINT) {
        clearTimers();
        setOpenKey(null);
      } else updateMenuAnchor(openKey);
    };
    // Font loading and the capsule transition can move the trigger without a
    // window resize. Observe layout, never the animated menu surface itself.
    const observer = new ResizeObserver(onResize);
    const head = shellRef.current?.querySelector(".circure-nav-head");
    const panel = shellRef.current?.querySelector(
      `[data-nav-panel="${openKey}"]`,
    );
    if (head) observer.observe(head);
    if (panel) observer.observe(panel);
    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [openKey, updateMenuAnchor, clearTimers]);

  // The crest follows eased progress; opening labels also respect the scene
  // edge so easing cannot leave them overlapping the approaching illustration.
  // The opening uses the scene's own background; the finale surface stays fixed.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = { progress: 0 };
    let frame = 0;
    let lastY = window.scrollY;
    let lastTarget = -1;
    let ballMode: boolean | null = null;
    let handingOff: boolean | null = null;
    let controlsHidden: boolean | null = null;
    let preparing = false;
    let preparationTimer = 0;
    let openingPalette = homeActive;
    let closingPalette = false;
    let finaleSurface = 0;
    let openingReveal = 1;
    const clamp = gsap.utils.clamp(0, 1);
    const smooth = (value: number) => {
      const t = clamp(value);
      return t * t * (3 - 2 * t);
    };
    const renderMotion = () => {
      const p = clamp(motion.progress);
      const folded = smooth(p);
      const revealed = Math.min(1 - folded, openingPalette ? openingReveal : 1);
      const lift = `${-24 * (1 - revealed)}px`;
      const transitioning = p > 0.001 && p < 0.999;
      // Keep the outgoing palette until its rendered labels have retired.
      header.dataset.homeOpening = String(
        homeActive && openingPalette && p < 0.999,
      );
      header.dataset.homeClosing = String(
        homeActive && closingPalette && p < 0.999,
      );
      header.style.setProperty("--home-handoff", folded.toFixed(5));
      header.style.setProperty("--home-bar-opacity", finaleSurface.toFixed(5));
      header.style.setProperty("--home-label-opacity", revealed.toFixed(5));
      header.style.setProperty("--home-label-lift", lift);
      header.style.setProperty("--home-float-opacity", folded.toFixed(5));
      header.style.setProperty("--home-float-label-opacity", p.toFixed(5));
      if (transitioning !== handingOff) {
        handingOff = transitioning;
        header.toggleAttribute("data-home-handoff", transitioning);
        if (transitioning) {
          if (
            header
              .querySelector(".nav-ball-content")
              ?.contains(document.activeElement)
          ) {
            header
              .querySelector<HTMLAnchorElement>(".wordmark")
              ?.focus({ preventScroll: true });
          }
          closeAll();
          setIsBallExpanded(false);
        }
      }
      const hideControls = preparing || transitioning;
      if (hideControls !== controlsHidden) {
        controlsHidden = hideControls;
        setAreHomeControlsHidden(hideControls);
        if (hideControls) closeAll();
      }
      // Switch the control layout while it is still fully hidden.
      const nextBallMode = homeActive && p >= 0.999;
      if (nextBallMode !== ballMode) {
        ballMode = nextBallMode;
        setIsBallMode(nextBallMode);
      }
    };
    const paint = () => {
      frame = 0;
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      lastY = currentY;
      const opening = homeActive
        ? document.querySelector<HTMLElement>(".home-scene01")
        : null;
      const openingBottom = opening?.getBoundingClientRect().bottom;
      const closingSection = homeActive
        ? document.getElementById("home-finale")
        : null;
      // The finale is pinned below the header; its spacer retains the document anchor.
      const closingAnchor = closingSection?.parentElement?.classList.contains(
        "pin-spacer",
      )
        ? closingSection.parentElement
        : closingSection;
      const closingTop = closingAnchor?.getBoundingClientRect().top;
      const headerHeight =
        Number.parseFloat(
          getComputedStyle(header).getPropertyValue("--header-height"),
        ) || 84;
      // Retire labels before the illustration reaches the header, with a
      // shorter exit band. Keep the crest's existing smooth transform.
      const handoffDistance = headerHeight + 8;
      // Establish the matching finale background before revealing controls.
      // Keep it opaque throughout their fade so no pale seam shows through.
      finaleSurface =
        homeActive && closingTop !== undefined
          ? 1 - smooth((closingTop - handoffDistance) / headerHeight)
          : 0;
      const openingEnd = headerHeight;
      const openingDistance = 56;
      const openingProgress =
        openingBottom === undefined
          ? 0
          : clamp(
              (openingEnd + openingDistance - openingBottom) / openingDistance,
            );
      openingReveal = 1 - smooth(openingProgress);
      const openingActive =
        homeActive &&
        (openingBottom === undefined || openingBottom > openingEnd);
      const handoffTarget =
        homeActive && openingBottom !== undefined
          ? Math.min(
              openingProgress,
              closingTop === undefined
                ? 1
                : clamp(closingTop / handoffDistance),
            )
          : 0;
      const target = reduced.matches
        ? handoffTarget >= 0.5
          ? 1
          : 0
        : handoffTarget;

      // An expanded capsule uses a different control layout. Let its labels
      // fade and its surface settle around the crest before changing layout.
      if (
        !reduced.matches &&
        target < 1 &&
        ballMode &&
        !preparing &&
        (ballExpandedRef.current ||
          (homeSurfaceRef.current?.getBoundingClientRect().width ?? 48) > 49)
      ) {
        preparing = true;
        header.setAttribute("data-home-preparing", "");
        setIsBallExpanded(false);
        gsap.to(homeSurfaceRef.current, {
          width: 48,
          delay: 0.18,
          duration: 0.2,
          ease: "sine.inOut",
          overwrite: true,
        });
        preparationTimer = window.setTimeout(() => {
          preparing = false;
          header.removeAttribute("data-home-preparing");
          request();
        }, 410);
      }
      const animationTarget = preparing ? 1 : target;

      // Keep the retiring surface's palette even after a large scroll jump.
      if (homeActive && target < 1) {
        openingPalette = openingActive;
        closingPalette =
          closingTop !== undefined && closingTop < handoffDistance;
      }
      if (homeActive && (target < 1 || finaleSurface > 0)) {
        header.style.setProperty(
          "--home-bar-base",
          openingActive ? "#21141f" : "#f7e7e6",
        );
      }
      // Finish layout reads before painting.
      if (lastTarget !== animationTarget || reduced.matches) {
        const initialized = lastTarget !== -1;
        lastTarget = animationTarget;
        gsap.to(motion, {
          progress: animationTarget,
          duration:
            initialized && !reduced.matches
              ? 0.16 + 0.12 * Math.abs(animationTarget - motion.progress)
              : 0,
          ease: "power1.out",
          overwrite: true,
          onUpdate: renderMotion,
        });
        renderMotion();
      }
      // Keep the rendered state in sync when resize leaves progress unchanged.
      else renderMotion();
      const awayFromBoundaries =
        openingBottom !== undefined &&
        -openingBottom > handoffDistance + 160 &&
        (closingTop === undefined || closingTop > handoffDistance + 160);
      if (
        homeActive &&
        !preparing &&
        target === 1 &&
        motion.progress > 0.999 &&
        awayFromBoundaries
      ) {
        if (delta > 0) {
          if (scrollDeltaRef.current < 0) scrollDeltaRef.current = 0;
          scrollDeltaRef.current += delta;
          if (scrollDeltaRef.current > 18) setIsBallExpanded(false);
        } else if (delta < 0) {
          if (scrollDeltaRef.current > 0) scrollDeltaRef.current = 0;
          scrollDeltaRef.current += delta;
          if (scrollDeltaRef.current < -18) setIsBallExpanded(true);
        }
      } else {
        scrollDeltaRef.current = 0;
      }
    };
    const request = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    paint();
    const observer = new ResizeObserver(request);
    observer.observe(root);
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    reduced.addEventListener("change", request);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.clearTimeout(preparationTimer);
      gsap.killTweensOf(motion);
      observer.disconnect();
      header.removeAttribute("data-home-handoff");
      header.removeAttribute("data-home-preparing");
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      reduced.removeEventListener("change", request);
    };
  }, [pathname, homeActive, closeAll, setIsBallExpanded]);

  // Click-outside to close whichever menu is open (desktop, mobile, or expanded ball)
  useEffect(() => {
    if (!openKey && !mobileOpen && !isBallExpanded) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current) return;
      if (headerRef.current.contains(event.target as Node)) return;
      closeAll();
      if (isBallExpanded) setIsBallExpanded(false);
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    return () =>
      document.removeEventListener("pointerdown", onPointerDown, true);
  }, [openKey, mobileOpen, isBallExpanded, closeAll, setIsBallExpanded]);

  // Escape closes whichever menu is open and restores focus to its toggle
  useEffect(() => {
    if (!openKey && !mobileOpen && !isBallExpanded) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      if (mobileOpen) {
        setMobileOpen(false);
        clearTimers();
        mobileToggleRef.current?.focus();
      } else if (isBallExpanded) {
        closeAll();
        setIsBallExpanded(false);
        clearTimers();
        shellRef.current
          ?.querySelector<HTMLAnchorElement>(".wordmark")
          ?.focus();
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
  }, [
    openKey,
    mobileOpen,
    isBallExpanded,
    clearTimers,
    closeAll,
    setIsBallExpanded,
  ]);

  // Arrow Left/Right cycling among dropdown toggles
  const onToggleKeydown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        const key = event.currentTarget.dataset.navKey;
        if (!key) return;
        openImmediate(key);
        window.requestAnimationFrame(() => {
          shellRef.current
            ?.querySelector<HTMLAnchorElement>(
              ".circure-nav-panel.is-active .nav-image-card",
            )
            ?.focus({ preventScroll: true });
        });
        return;
      }
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

  // Reader-route modules recolour the fixed bar and its pills from their own
  // palette (`route-palette-<module>.css`). The footer needs the same answer and
  // lives outside the reader tree, so both read it from `useRouteModule`.
  const headerClassName = [
    "site-header",
    module.home ? "is-home-page" : "",
    isBallMode ? "is-nav-ball" : "",
    isBallMode && isBallExpanded ? "is-ball-expanded" : "",
    openKey ? "is-nav-open" : "",
    mobileOpen ? "is-mobile-open" : "",
    module.className,
  ]
    .filter(Boolean)
    .join(" ");

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
        data-home-opening={homeActive ? "true" : undefined}
        data-home-ball={isBallMode ? "true" : undefined}
        data-ball-expanded={isBallMode && isBallExpanded ? "true" : undefined}
        data-nav-theme={openKey ?? DROPDOWNS[menuGeometry.index]?.key}
      >
        <div
          className="circure-nav-shell"
          ref={shellRef}
          onPointerEnter={clearTimers}
          onPointerLeave={queueClose}
        >
          {homeActive && (
            <div
              className="home-nav-floating-surface"
              ref={homeSurfaceRef}
              aria-hidden="true"
            >
              <span className="home-nav-logo-glow" />
            </div>
          )}
          <div className="circure-nav-head">
            <Link
              to="/"
              className={`wordmark ${isBallMode ? "is-ball-target" : ""}`}
              aria-label={
                isBallMode && !isBallExpanded
                  ? "Expand navigation menu"
                  : "CirCure home"
              }
              title={
                isBallMode && !isBallExpanded
                  ? "Click to expand navigation"
                  : undefined
              }
              onClick={handleCrestClick}
              aria-expanded={isBallMode ? isBallExpanded : undefined}
              aria-controls={isBallMode ? "circure-nav-controls" : undefined}
            >
              <span className="wordmark-stage" aria-hidden="true">
                <span className="wordmark-crest">
                  <QueuedImage
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

            <div
              id="circure-nav-controls"
              className="nav-ball-content"
              inert={ballCollapsed || areHomeControlsHidden || undefined}
              aria-hidden={ballCollapsed || areHomeControlsHidden || undefined}
            >
              <nav className="desktop-nav" aria-label="Primary navigation">
                <span
                  ref={highlightRef}
                  className="nav-active-highlight"
                  aria-hidden="true"
                />
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/"
                      onClick={returnHome}
                      onPointerEnter={queueClose}
                      aria-current={homeActive ? "page" : undefined}
                    >
                      Home
                    </Link>
                  </li>
                  {DROPDOWNS.map((d) => (
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
                        onPointerEnter={(event) => {
                          if (event.pointerType !== "touch") queueOpen(d.key);
                        }}
                        onClick={() => {
                          clearTimers();
                          if (openKey === d.key) setOpenKey(null);
                          else openImmediate(d.key);
                        }}
                        onKeyDown={onToggleKeydown}
                      >
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

              <PageSearch
                onOpen={closeAll}
                menuOpen={
                  !!openKey ||
                  mobileOpen ||
                  ballCollapsed ||
                  areHomeControlsHidden
                }
              />

              <button
                className="ball-collapse-btn"
                type="button"
                tabIndex={isBallMode && isBallExpanded ? 0 : -1}
                aria-label="Collapse navigation"
                aria-hidden={!isBallMode || undefined}
                title="Collapse navigation"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                  setIsBallExpanded(false);
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  width="16"
                  height="16"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <button
                className="mobile-menu-toggle"
                type="button"
                aria-expanded={mobileOpen}
                aria-controls="circure-mobile-menu"
                onClick={() => {
                  // Re-open on the module the reader is currently in.
                  setMobileGroup(currentDropdownKey);
                  setMobileOpen((v) => !v);
                }}
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
            ref={menuRef}
            className={`circure-mega-menu${openKey ? " is-open" : ""}`}
            id="circure-nav-menu"
            aria-hidden={!openKey}
            inert={!openKey || undefined}
            onPointerEnter={clearTimers}
          >
            <div className="circure-nav-viewport">
              {DROPDOWNS.map((d) => {
                const isActivePanel = openKey === d.key;
                return (
                  <div
                    key={d.key}
                    className={[
                      "circure-nav-panel",
                      isActivePanel ? "is-active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    data-nav-panel={d.key}
                    aria-hidden={!isActivePanel}
                    inert={!isActivePanel || undefined}
                    role="navigation"
                    aria-label={`${d.label} pages`}
                  >
                    {d.cards.map((c) => (
                      <Link
                        key={c.path}
                        to={c.path}
                        className="nav-image-card"
                        aria-current={
                          isActive(pathname, c.path) ? "page" : undefined
                        }
                        onClick={closeAll}
                      >
                        <span className="nav-card-thumb" aria-hidden="true">
                          <QueuedImage src={c.icon} alt="" loading="eager" />
                        </span>
                        <span className="nav-card-info">
                          <strong>{c.name}</strong>
                        </span>
                      </Link>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          <nav
            className={`circure-mobile-menu${mobileOpen ? " is-open" : ""}`}
            id="circure-mobile-menu"
            aria-label="Mobile navigation"
            aria-hidden={!mobileOpen}
            inert={!mobileOpen || undefined}
          >
            <Link
              to="/"
              onClick={returnHome}
              aria-current={homeActive ? "page" : undefined}
            >
              Home
            </Link>
            {/* Two-level accordion: each module is a toggle, its pages nest
                underneath. One group open at a time keeps the sheet short. */}
            {DROPDOWNS.map((d) => {
              const groupOpen = mobileGroup === d.key;
              const panelId = `circure-mobile-group-${d.key}`;
              return (
                <div
                  key={d.key}
                  className={`circure-mobile-group${groupOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="circure-mobile-group__toggle"
                    aria-expanded={groupOpen}
                    aria-controls={panelId}
                    aria-current={
                      dropdownActive(pathname, d) ? "true" : undefined
                    }
                    onClick={() => setMobileGroup(groupOpen ? null : d.key)}
                  >
                    <span>{d.label}</span>
                    <svg
                      className="circure-mobile-group__caret"
                      viewBox="0 0 10 6"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  </button>
                  <div
                    className="circure-mobile-group__panel"
                    id={panelId}
                    inert={!groupOpen || undefined}
                  >
                    <div className="circure-mobile-group__list">
                      {d.cards.map((c) => (
                        <Link
                          key={c.path}
                          to={c.path}
                          className="circure-mobile-group__link"
                          aria-current={
                            isActive(pathname, c.path) ? "page" : undefined
                          }
                          onClick={closeAll}
                        >
                          {c.icon ? (
                            <QueuedImage
                              src={c.icon}
                              alt=""
                              className="circure-mobile-group__icon"
                              loading="eager"
                            />
                          ) : null}
                          <span>{c.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
