// Original progress phases and smoothing, scoped to the preserved Person and Design chapters.
const human = document.querySelector(".human-chapter");
const expansion = document.querySelector(".expansion");
const guide = document.querySelector(".thread-guide");
const track = document.querySelector(".thread-guide-track");
const chapterIndex = document.querySelector(".thread-guide-index");
const chapterName = document.querySelector(".thread-guide-name");
const controls = [...document.querySelectorAll(".study-controls a")];
const reduced = matchMedia("(prefers-reduced-motion: reduce)");
const compact = matchMedia("(max-width: 620px)");
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoothstep = (value) => value * value * (3 - 2 * value);
let metrics;
let frame = 0;
let previousTime = 0;
let renderedHuman = 0;
let renderedExpansion = 0;
let renderedPage = 0;
let pageVelocity = 0;
let pointerId = null;
let activeChapter = "";
function followProgress(current, target, elapsed, response, maxStep) {
  const delta = target - current;
  const easedStep = delta * (1 - Math.exp(-elapsed / response));
  const frameLimit = maxStep * (elapsed / 16.67);
  return current + clamp(easedStep, -frameLimit, frameLimit);
}

function measure() {
  const bounds = (element) => {
    const rect = element.getBoundingClientRect();
    return { top: rect.top + scrollY, height: rect.height };
  };
  metrics = {
    human: bounds(human),
    expansion: bounds(expansion),
    header: parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--header-height",
      ),
    ),
    maxScroll: Math.max(1, document.documentElement.scrollHeight - innerHeight),
  };
  guide.setAttribute(
    "aria-orientation",
    compact.matches ? "horizontal" : "vertical",
  );
  requestPaint();
}
function setChapter(isDesign) {
  const name = isDesign ? "Design" : "Person";
  if (activeChapter === name) return;
  activeChapter = name;
  chapterIndex.textContent = isDesign ? "04 / 09" : "03 / 09";
  chapterName.textContent = name;
  guide.setAttribute(
    "aria-valuetext",
    `${name}, original chapter ${isDesign ? 4 : 3} of 9`,
  );
  controls.forEach((link) => {
    if (link.hash === (isDesign ? "#approach" : "#person"))
      link.setAttribute("aria-current", "step");
    else link.removeAttribute("aria-current");
  });
}
function paint(time) {
  frame = 0;
  if (document.hidden) {
    previousTime = 0;
    return;
  }
  const elapsed = previousTime ? Math.min(64, time - previousTime) : 16.67;
  previousTime = time;
  const targetHuman = clamp(
    (scrollY - metrics.human.top + metrics.header) /
      Math.max(1, metrics.human.height - innerHeight),
  );
  const targetExpansion = clamp(
    (innerHeight * 0.62 - (metrics.expansion.top - scrollY)) /
      Math.max(1, innerHeight * 0.73),
  );
  const targetPage = clamp(scrollY / metrics.maxScroll);
  if (reduced.matches) {
    renderedHuman = 1;
    renderedExpansion = 1;
    renderedPage = targetPage;
    pageVelocity = 0;
  } else {
    renderedHuman =
      Math.abs(targetHuman - renderedHuman) < 0.0025
        ? targetHuman
        : followProgress(renderedHuman, targetHuman, elapsed, 128, 0.011);
    renderedExpansion =
      Math.abs(targetExpansion - renderedExpansion) < 0.0025
        ? targetExpansion
        : followProgress(
            renderedExpansion,
            targetExpansion,
            elapsed,
            108,
            0.014,
          );
    // Original critically damped spring keeps the ribbon marker reversible without overshoot.
    const dt = elapsed / 1000;
    const displacement = renderedPage - targetPage;
    const decay = Math.exp(-17 * dt);
    const springStep = (pageVelocity + 17 * displacement) * dt;
    renderedPage = clamp(targetPage + (displacement + springStep) * decay);
    pageVelocity = (pageVelocity - 17 * springStep) * decay;
    if (
      Math.abs(targetPage - renderedPage) < 0.0005 &&
      Math.abs(pageVelocity) < 0.0005
    ) {
      renderedPage = targetPage;
      pageVelocity = 0;
    }
  }
  human.style.setProperty("--human-progress", renderedHuman.toFixed(4));
  const stages = {
    "--frame-progress": smoothstep(renderedExpansion),
    "--radius-progress": smoothstep(clamp((renderedExpansion - 0.54) / 0.46)),
    "--content-progress": smoothstep(clamp((renderedExpansion - 0.06) / 0.58)),
    "--label-progress": smoothstep(clamp((renderedExpansion - 0.28) / 0.72)),
    "--diagram-progress": smoothstep(clamp((renderedExpansion - 0.04) / 0.86)),
  };
  Object.entries(stages).forEach(([key, value]) =>
    expansion.style.setProperty(key, value.toFixed(4)),
  );
  expansion.classList.toggle("is-revealed", stages["--content-progress"] > 0.9);
  guide.style.setProperty("--page-progress", renderedPage.toFixed(4));
  guide.classList.toggle(
    "on-dark",
    scrollY + innerHeight * 0.46 <
      metrics.expansion.top + metrics.expansion.height,
  );
  guide.style.color =
    scrollY + innerHeight * 0.46 <
    metrics.expansion.top + metrics.expansion.height
      ? ""
      : "var(--brand-navy)";
  guide.setAttribute("aria-valuenow", String(Math.round(renderedPage * 100)));
  setChapter(scrollY + innerHeight * 0.46 >= metrics.expansion.top);
  if (
    !reduced.matches &&
    (renderedHuman !== targetHuman ||
      renderedExpansion !== targetExpansion ||
      renderedPage !== targetPage)
  )
    frame = requestAnimationFrame(paint);
  else previousTime = 0;
}
function requestPaint() {
  if (!frame && !document.hidden) frame = requestAnimationFrame(paint);
}
function seek(progress) {
  const next = clamp(progress);
  renderedPage = next;
  pageVelocity = 0;
  window.scrollTo({ top: next * metrics.maxScroll, behavior: "instant" });
  requestPaint();
}
function pointerProgress(event) {
  const bounds = track.getBoundingClientRect();
  return compact.matches
    ? (event.clientX - bounds.left) / Math.max(1, bounds.width)
    : (event.clientY - bounds.top) / Math.max(1, bounds.height);
}
track.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  event.preventDefault();
  pointerId = event.pointerId;
  track.setPointerCapture(pointerId);
  guide.classList.add("is-dragging");
  document.body.classList.add("is-thread-dragging");
  guide.focus({ preventScroll: true });
  seek(pointerProgress(event));
});
track.addEventListener("pointermove", (event) => {
  if (event.pointerId !== pointerId) return;
  event.preventDefault();
  seek(pointerProgress(event));
});
function endDrag(event) {
  if (event.pointerId !== pointerId) return;
  if (track.hasPointerCapture(pointerId))
    track.releasePointerCapture(pointerId);
  pointerId = null;
  guide.classList.remove("is-dragging");
  document.body.classList.remove("is-thread-dragging");
}
track.addEventListener("pointerup", endDrag);
track.addEventListener("pointercancel", endDrag);
guide.addEventListener("keydown", (event) => {
  const step = event.shiftKey ? 0.1 : 0.025;
  const changes = {
    ArrowDown: step,
    ArrowRight: step,
    ArrowUp: -step,
    ArrowLeft: -step,
    PageDown: 0.12,
    PageUp: -0.12,
  };
  if (event.key !== "Home" && event.key !== "End" && !(event.key in changes))
    return;
  event.preventDefault();
  seek(
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? 1
        : renderedPage + changes[event.key],
  );
});
controls.forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top:
        link.hash === "#person"
          ? 0
          : Math.max(0, metrics.expansion.top + innerHeight * 0.12),
      behavior: reduced.matches ? "instant" : "smooth",
    });
  }),
);
document.querySelectorAll("[data-replay]").forEach((button) =>
  button.addEventListener("click", () => {
    seek(0);
    controls[0].focus({ preventScroll: true });
  }),
);
window.addEventListener("scroll", requestPaint, { passive: true });
window.addEventListener("resize", measure, { passive: true });
window.addEventListener("load", measure, { once: true });
reduced.addEventListener("change", measure);
document.addEventListener("visibilitychange", requestPaint);
document.fonts.ready.then(measure);
new ResizeObserver(measure).observe(document.querySelector("main"));
measure();
