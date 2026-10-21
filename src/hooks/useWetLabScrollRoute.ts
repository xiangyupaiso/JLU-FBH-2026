import { useLayoutEffect, type RefObject } from "react";
import { readerTrackStart } from "../utils";

/**
 * Makes the document the single scroll source for reader routes. The article
 * viewport remains visually pinned; its scrollTop is only a projection of the
 * document position. This avoids the feedback loop caused by syncing both
 * scrollTop and window.scrollY in response to one gesture.
 */
export function useWetLabScrollRoute(
  enabled: boolean,
  interfaceRef: RefObject<HTMLElement | null>,
  innerRef: RefObject<HTMLElement | null>,
  options: { rootClass?: string } = {},
) {
  useLayoutEffect(() => {
    const frame = interfaceRef.current;
    const inner = innerRef.current;
    const track = frame?.parentElement;
    if (!frame || !inner || !track) return;

    const root = document.documentElement;
    const rootClass = options.rootClass ?? "has-wet-lab-scroll-route";
    if (enabled) root.classList.add(rootClass);

    let start = 0;
    let extra = 0;
    let raf = 0;
    let resizeRaf = 0;
    let resizing = false;
    let anchorValue: string | null = null;
    let anchorPriority = "";

    const refresh = () => {
      const fixed = getComputedStyle(inner).overflowY === "hidden";
      // CSS can cross the breakpoint before React changes `enabled`.
      if (fixed !== enabled || (fixed && inner.clientHeight > window.innerHeight)) return;
      // Natural flow ignores this variable. Seed its full article capacity so a
      // cold compact page cannot collapse to a zero-length desktop timeline.
      extra = Math.max(0, inner.scrollHeight - (fixed ? inner.clientHeight : 0));
      // Keep enough document space while responsive styles settle. A shorter
      // intermediate measurement must not clamp a reader/footer position.
      if (fixed && resizing) {
        extra = Math.max(extra, Number.parseFloat(track.style.getPropertyValue("--reader-scroll-extra")) || 0);
      }
      const value = `${extra}px`;
      if (track.style.getPropertyValue("--reader-scroll-extra") !== value) {
        track.style.setProperty("--reader-scroll-extra", value);
      }
      start = readerTrackStart(track);
      if (fixed) sync();
    };

    const sync = () => {
      raf = 0;
      if (extra <= 0) return;
      // Hero/header layout can move the track without resizing the track.
      start = readerTrackStart(track);
      const next = Math.max(0, Math.min(extra, window.scrollY - start));
      if (Math.abs(inner.scrollTop - next) > 0.5) inner.scrollTop = next;
    };

    const requestSync = () => {
      if (!raf) raf = requestAnimationFrame(sync);
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      start = readerTrackStart(track);
      const projected = Math.max(0, Math.min(extra, window.scrollY - start));
      const delta = inner.scrollTop - projected;
      if (Math.abs(delta) <= 0.5) return;
      const bounds = target.getBoundingClientRect();
      const viewport = inner.getBoundingClientRect();
      const visualTop = window.visualViewport?.offsetTop ?? 0;
      const visibleTop = Math.max(viewport.top, visualTop,
        document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0);
      const visibleBottom = Math.min(viewport.bottom,
        visualTop + (window.visualViewport?.height ?? window.innerHeight));
      // Native focus can scroll this overflow-hidden viewport. Accept that
      // one focus movement only when the target was outside the document's
      // projected view; visible clicks must not inherit scroll-margin jumps.
      if (bounds.top + delta < visibleTop || bounds.bottom + delta > visibleBottom) {
        window.scrollTo({ top: start + inner.scrollTop, behavior: "instant" });
      }
    };

    const restoreAnchor = () => {
      if (anchorValue === null) return;
      if (anchorValue) root.style.setProperty("overflow-anchor", anchorValue, anchorPriority);
      else root.style.removeProperty("overflow-anchor");
      anchorValue = null;
    };

    const onResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      // Pure natural-flow resizing keeps the browser's normal anchoring.
      if (!enabled && getComputedStyle(inner).overflowY !== "hidden") {
        resizeRaf = 0;
        resizing = false;
        restoreAnchor();
        refresh();
        return;
      }
      resizing = true;
      if (anchorValue === null) {
        anchorValue = root.style.getPropertyValue("overflow-anchor");
        anchorPriority = root.style.getPropertyPriority("overflow-anchor");
        root.style.setProperty("overflow-anchor", "none");
      }
      // Viewport-unit geometry can settle after the resize callback. During
      // that interval the footer must not anchor to an intermediate track.
      let previous = "";
      let stableSince = performance.now();
      const settle = () => {
        resizeRaf = 0;
        refresh();
        const geometry = `${inner.clientWidth}:${inner.clientHeight}:${inner.scrollHeight}:${track.offsetTop}`;
        if (geometry !== previous) stableSince = performance.now();
        previous = geometry;
        if (performance.now() - stableSince >= 200) {
          resizing = false;
          refresh();
          restoreAnchor();
        } else resizeRaf = requestAnimationFrame(settle);
      };
      refresh();
      resizeRaf = requestAnimationFrame(settle);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const keys = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End"]);
      if (event.defaultPrevented || !keys.has(event.key)) return;
      const target = event.target instanceof Element ? event.target : null;
      // Native controls and keyboard widgets handle these keys themselves.
      // Match ancestors as the event target can be a label span or SVG child.
      if (target?.closest(
        "button, input, select, textarea, a[href], summary, audio[controls], video[controls], " +
        "[role~='button'], [role~='checkbox'], [role~='combobox'], [role~='grid'], [role~='gridcell'], " +
        "[role~='link'], [role~='listbox'], [role~='menu'], [role~='menubar'], [role~='menuitem'], " +
        "[role~='menuitemcheckbox'], [role~='menuitemradio'], [role~='option'], [role~='radio'], " +
        "[role~='radiogroup'], [role~='scrollbar'], [role~='searchbox'], [role~='slider'], [role~='spinbutton'], " +
        "[role~='switch'], [role~='tab'], [role~='tablist'], [role~='textbox'], [role~='toolbar'], " +
        "[role~='tree'], [role~='treegrid'], [role~='treeitem']",
      ) || target?.closest<HTMLElement>("[contenteditable]")?.isContentEditable) return;
      // The inner viewport is intentionally non-scrollable. Route keyboard
      // input to the same document timeline as wheel and touch input.
      event.preventDefault();
      const amount = event.key === "Home" ? -window.scrollY : event.key === "End" ? document.documentElement.scrollHeight : event.key === "PageDown" || event.key === " " ? window.innerHeight * 0.9 : event.key === "PageUp" ? -window.innerHeight * 0.9 : event.key === "ArrowDown" ? 80 : -80;
      window.scrollBy({ top: amount, behavior: "auto" });
    };

    const resizeObserver = new ResizeObserver(refresh);
    resizeObserver.observe(track);
    resizeObserver.observe(frame);
    resizeObserver.observe(inner);
    // `inner` has a fixed height, so it never reports content growth. Watch
    // the article itself so lazy images, opened accordions and late feature
    // renders extend the timeline instead of cutting off the page's tail.
    Array.from(inner.children).forEach((child) => resizeObserver.observe(child));
    if (enabled) {
      window.addEventListener("scroll", requestSync, { passive: true });
      // Focus can scroll an overflow-hidden viewport even when scrollY stays
      // unchanged. Re-project it from the document instead of making it an
      // independent scroll source.
      inner.addEventListener("scroll", requestSync, { passive: true });
      inner.addEventListener("focusin", onFocusIn);
      inner.addEventListener("keydown", onKeyDown);
    }
    window.addEventListener("resize", onResize, { passive: true });

    onResize();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      restoreAnchor();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestSync);
      inner.removeEventListener("scroll", requestSync);
      inner.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("resize", onResize);
      inner.removeEventListener("keydown", onKeyDown);
      if (enabled) root.classList.remove(rootClass);
    };
  }, [enabled, interfaceRef, innerRef, options.rootClass]);
}
