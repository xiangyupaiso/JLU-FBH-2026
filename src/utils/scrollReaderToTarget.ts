/**
 * Document scrollY at which the reader mat pins. The mat is `position: sticky`
 * with `top: var(--header-height)`, so it pins when the track's top reaches the
 * header's bottom edge — not the viewport top. Using the raw track top shifted
 * the whole projection by one header height (the frame idled for the first
 * 78px and the last 78px of the article were never reached).
 */
export function readerTrackStart(track: HTMLElement) {
  const mat = track.firstElementChild as HTMLElement | null;
  const pinTop = mat ? Number.parseFloat(getComputedStyle(mat).top) || 0 : 0;
  return track.getBoundingClientRect().top + window.scrollY - pinTop;
}

/**
 * Scroll a reader-route section into the single DOCUMENT timeline.
 *
 * Reader frames stay pinned while the document owns the scroll and projects
 * its position onto the frame's inner container, so scrolling the inner
 * container directly desyncs it from the document (wrong scrollbar position,
 * hidden Back-to-Top, snap-back on the next wheel gesture). Convert the
 * target's in-frame offset into a document position instead.
 */
export function scrollReaderToTarget(
  target: HTMLElement,
  inner: HTMLElement | null | undefined,
  behavior: ScrollBehavior = "instant",
) {
  const track = inner?.closest<HTMLElement>(".wiki-reader-track");
  if (!inner || !track) {
    target.scrollIntoView({ behavior, block: "start" });
    return;
  }

  const trackStart = readerTrackStart(track);
  const innerBounds = inner.getBoundingClientRect();
  const targetBounds = target.getBoundingClientRect();
  const innerTop =
    inner.scrollTop + targetBounds.top - innerBounds.top - 32;
  const targetScrollTop = Math.max(0, innerTop);
  if (behavior !== "smooth") {
    inner.scrollTop = targetScrollTop;
  }
  window.scrollTo({ top: trackStart + targetScrollTop, behavior });
}
