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
  behavior: ScrollBehavior = "smooth",
) {
  const track = inner?.closest<HTMLElement>(".wiki-reader-track");
  if (!inner || !track) {
    target.scrollIntoView({ behavior, block: "start" });
    return;
  }

  const trackStart = track.getBoundingClientRect().top + window.scrollY;
  const innerBounds = inner.getBoundingClientRect();
  const targetBounds = target.getBoundingClientRect();
  const innerTop =
    inner.scrollTop + targetBounds.top - innerBounds.top - 32;
  window.scrollTo({ top: trackStart + Math.max(0, innerTop), behavior });
}
