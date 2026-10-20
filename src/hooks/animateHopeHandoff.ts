import gsap from "gsap";
import { bindHomeArtwork } from "../utils/homeArtworkSource";
import {
  HOME_EASE,
  HOME_SCRUB,
  createHomeScrubBoundaryGuard,
  settleHomeScrubEndpoint,
} from "./homeMotion";

// Carry the warm room at viewport size while its window light reveals the
// real incoming room. Both endpoints hand back to native sticky positioning.
export function animateHopeHandoff(root: HTMLElement) {
  const beyond = root.querySelector<HTMLElement>("#beyond-tnbc");
  const hope = root.querySelector<HTMLElement>("#what-we-hope");
  const track = beyond?.querySelector<HTMLElement>(".story-scene-track");
  const source = beyond?.querySelector<HTMLElement>(".story-chapter-inner");
  const destination = hope?.querySelector<HTMLElement>(".story-chapter-inner");
  const hopeTrack = hope?.querySelector<HTMLElement>(".story-scene-track");
  if (!beyond || !hope || !track || !source || !destination || !hopeTrack)
    return;

  const frame = document.createElement("div");
  frame.className = "story-hope-room-carry story-chapter--beyond";
  frame.setAttribute("aria-hidden", "true");
  frame.inert = true;
  const room = source.cloneNode(true) as HTMLElement;
  room.classList.add("story-hope-room-source");
  room.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
  room.querySelectorAll("img").forEach((image) => {
    image.loading = "eager";
  });
  frame.append(room);
  root.append(frame);
  const stopArtwork = bindHomeArtwork(source, room);
  root.classList.add("has-hope-room-handoff");

  const sourceNodes = [
    source,
    ...source.querySelectorAll<HTMLElement>("[style]"),
  ];
  const roomNodes = [room, ...room.querySelectorAll<HTMLElement>("[style]")];
  const title = room.querySelector<HTMLElement>(".story-artwork-title");
  const people = room.querySelectorAll<HTMLElement>(".story-art");
  const state = { progress: 0 };
  const clamp = gsap.utils.clamp(0, 1);
  // Zero velocity and acceleration at both ends avoids a visible change of
  // pace as the carried image takes over from the settled native artwork.
  const dissolve = (start: number, end: number, progress: number) => {
    const t = clamp((progress - start) / (end - start));
    return t * t * t * (t * (t * 6 - 15) + 10);
  };
  let carrying = false;
  const render = () => {
    const p = state.progress;
    const active = p > 0 && p < 1;
    if (active && !carrying) {
      // Sample the settled artwork on entry, including a reverse entry after
      // resize. Do not let the clone retain the initial hidden title/layers.
      sourceNodes.forEach((node, index) => {
        roomNodes[index].style.cssText = node.style.cssText;
      });
      room.style.backgroundColor = getComputedStyle(source).backgroundColor;
    }
    carrying = active;
    boundary.setActive(active);
    frame.style.visibility = active ? "visible" : "hidden";
    destination.classList.toggle("is-hope-room-carried", active);
    // A broad diagonal feather follows the existing painted window light.
    // Its ends lie outside the viewport, leaving no stripe at either handoff.
    const reveal = dissolve(0.04, 0.98, p);
    destination.style.setProperty("--hope-room-edge", `${-26 + 152 * reveal}%`);
    if (title) title.style.opacity = String(1 - dissolve(0, 0.28, p));
    people.forEach((person) => {
      person.style.opacity = String(1 - dissolve(0.08, 0.52, p));
    });
    frame.dataset.progress = p.toFixed(4);
  };
  const boundary = createHomeScrubBoundaryGuard(
    () => bridge.scrollTrigger,
    render,
  );
  const bridge = gsap.timeline({
    onUpdate: render,
    scrollTrigger: {
      id: "home-hope-room-handoff",
      trigger: track,
      start: "bottom bottom",
      endTrigger: hope,
      end: "top top",
      scrub: HOME_SCRUB,
      invalidateOnRefresh: true,
      onRefreshInit: () => destination.classList.remove("is-hope-room-carried"),
      onRefresh: render,
      onUpdate: settleHomeScrubEndpoint,
    },
  });
  bridge.to(state, { progress: 1, duration: 1, ease: "none" });

  // Finish the feather while the room is still sticky, then retain the
  // original copy/pigment exit timing as the viewport starts moving away.
  const featherLead = 0.4;
  const sceneExitStart = featherLead / 0.82;
  const exit = gsap.timeline({
    defaults: { ease: HOME_EASE },
    scrollTrigger: {
      id: "home-what-we-hope-exit-edge",
      trigger: hopeTrack,
      start: () => `bottom bottom+=${window.innerHeight * featherLead}`,
      end: "bottom 18%",
      scrub: HOME_SCRUB,
      invalidateOnRefresh: true,
      onUpdate: settleHomeScrubEndpoint,
    },
  });
  exit.fromTo(
    hope,
    { "--hope-copy-exit": 1 },
    {
      "--hope-copy-exit": 0,
      duration: 0.4,
    },
    sceneExitStart,
  );
  exit.fromTo(
    hope,
    { "--hope-exit-feather": 0 },
    { "--hope-exit-feather": 1, duration: 0.32 },
    0,
  );
  exit.fromTo(
    hope,
    {
      "--hope-scene-exit": 1,
      "--hope-exit-surface": "#edf0fa",
    },
    {
      "--hope-scene-exit": 0,
      "--hope-exit-surface": "#f7e7e6",
      duration: 1,
    },
    sceneExitStart,
  );

  return {
    timeline: bridge,
    exitTimeline: exit,
    cleanup: () => {
      stopArtwork();
      boundary.dispose();
      frame.remove();
      root.classList.remove("has-hope-room-handoff");
      destination.classList.remove("is-hope-room-carried");
      destination.style.removeProperty("--hope-room-edge");
    },
  };
}
