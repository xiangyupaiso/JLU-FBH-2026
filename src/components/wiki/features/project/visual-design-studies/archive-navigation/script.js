// Isolated adapter for the preserved July navigation: original FLIP and category state.
const root = document.documentElement;
const ease = "cubic-bezier(0.215, 0.61, 0.355, 1)";
let flipAnimations = [];
let activeNavKey = "project";
let navOpenTimer = 0;
let navCloseTimer = 0;
const header = document.querySelector("[data-header]");
const navShell = document.querySelector("[data-nav-shell]");
const navHome = document.querySelector("[data-nav-home]");
const dropdownToggles = Array.from(document.querySelectorAll("[data-nav-key]"));
const dropdownPanels = Array.from(
  document.querySelectorAll("[data-nav-panel]"),
);
const dropdown = document.querySelector("[data-dropdown]");
const flipTargets = Array.from(document.querySelectorAll("[data-flip]"));
function measure(elements) {
  return new Map(
    elements.map((element) => [element, element.getBoundingClientRect()]),
  );
}

function runFlip(mutator) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    mutator();
    return;
  }
  const first = measure(flipTargets);
  flipAnimations.forEach((animation) => animation.cancel());
  flipAnimations = [];

  root.classList.add("is-flipping");
  mutator();
  const last = measure(flipTargets);
  root.classList.remove("is-flipping");

  flipTargets.forEach((element) => {
    const before = first.get(element);
    const after = last.get(element);
    if (!before || !after || after.width === 0 || after.height === 0) return;

    const dx = before.left - after.left;
    const dy = before.top - after.top;
    const sx = before.width / after.width;
    const sy = before.height / after.height;
    const moved =
      Math.abs(dx) > 0.5 ||
      Math.abs(dy) > 0.5 ||
      Math.abs(sx - 1) > 0.01 ||
      Math.abs(sy - 1) > 0.01;

    if (!moved) return;

    const animation = element.animate(
      [
        {
          transformOrigin: "top left",
          transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
        },
        {
          transformOrigin: "top left",
          transform: "translate(0, 0) scale(1, 1)",
        },
      ],
      {
        duration: 400,
        easing: ease,
      },
    );

    flipAnimations.push(animation);
    animation.addEventListener("finish", () => {
      flipAnimations = flipAnimations.filter((item) => item !== animation);
    });
  });
}

function applyDropdownState(nextKey, open) {
  activeNavKey = nextKey;
  root.classList.toggle("dropdown-open", open);
  dropdown?.classList.toggle("is-open", open);
  dropdown?.setAttribute("aria-hidden", String(!open));
  dropdown?.toggleAttribute("inert", !open);
  dropdownPanels.forEach((panel) => {
    const isActive = panel.dataset.navPanel === nextKey;
    panel.classList.toggle("is-active", isActive);
    panel.setAttribute("aria-hidden", String(!isActive));
    panel.toggleAttribute("inert", !isActive);
  });
  dropdownToggles.forEach((toggle) => {
    toggle.setAttribute(
      "aria-expanded",
      String(open && toggle.dataset.navKey === nextKey),
    );
  });
}

function setDropdown(key, open) {
  const nextKey = key || activeNavKey;
  const isAlreadyOpen = root.classList.contains("dropdown-open");
  if (open && isAlreadyOpen && nextKey === activeNavKey) return;
  if (!open && !isAlreadyOpen) return;

  if (open && isAlreadyOpen) {
    applyDropdownState(nextKey, true);
    return;
  }

  runFlip(() => applyDropdownState(nextKey, open));
}

function queueDropdownOpen(key) {
  window.clearTimeout(navCloseTimer);
  window.clearTimeout(navOpenTimer);
  navOpenTimer = window.setTimeout(() => setDropdown(key, true), 45);
}

function queueDropdownClose(delay = 150) {
  window.clearTimeout(navOpenTimer);
  window.clearTimeout(navCloseTimer);
  navCloseTimer = window.setTimeout(
    () => setDropdown(activeNavKey, false),
    delay,
  );
}

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "touch") queueDropdownOpen(toggle.dataset.navKey);
  });
  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    clearTimeout(navOpenTimer);
    clearTimeout(navCloseTimer);
    setDropdown(
      toggle.dataset.navKey,
      !(
        root.classList.contains("dropdown-open") &&
        activeNavKey === toggle.dataset.navKey
      ),
    );
  });
});

navHome?.addEventListener("pointerenter", () => queueDropdownClose(70));
navHome?.addEventListener("focus", () => queueDropdownClose(0));
navShell?.addEventListener("pointerenter", () =>
  window.clearTimeout(navCloseTimer),
);
navShell?.addEventListener("pointerleave", () => queueDropdownClose());
navShell?.addEventListener("focusout", (event) => {
  if (!navShell.contains(event.relatedTarget)) queueDropdownClose(80);
});
dropdown
  ?.querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () => setDropdown(activeNavKey, false)),
  );

document.addEventListener("pointerdown", (event) => {
  if (
    !root.classList.contains("dropdown-open") ||
    header?.contains(event.target)
  )
    return;
  setDropdown(activeNavKey, false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !root.classList.contains("dropdown-open"))
    return;
  clearTimeout(navOpenTimer);
  clearTimeout(navCloseTimer);
  setDropdown(activeNavKey, false);
  dropdownToggles
    .find((toggle) => toggle.dataset.navKey === activeNavKey)
    ?.focus();
});

// Archived destinations stay inside the study instead of navigating to missing July sections.
dropdown.querySelectorAll("a").forEach((link) => {
  link.href = "#destination-preview";
  link.addEventListener("click", () => {
    const label = link.classList.contains("image-tile")
      ? link.querySelector(":scope > span").textContent
      : link.textContent.replace("→", "");
    document.getElementById("destination-preview").textContent =
      `${label.trim()} — selected from the July ${activeNavKey.replaceAll("-", " ")} menu.`;
  });
});
let lastY = 0;
let scheduled = false;
window.addEventListener(
  "scroll",
  () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const scrolled = y > 42;
      const passedFold = y > innerHeight * 1.08;
      const down =
        Math.abs(y - lastY) > 3 || y < 60
          ? y > lastY && y >= 60
          : root.classList.contains("is-scrolling-down");
      if (
        scrolled !== root.classList.contains("has-scrolled") ||
        passedFold !== root.classList.contains("has-passed-fold") ||
        down !== root.classList.contains("is-scrolling-down")
      )
        runFlip(() => {
          root.classList.toggle("has-scrolled", scrolled);
          root.classList.toggle("has-passed-fold", passedFold);
          root.classList.toggle("is-scrolling-down", down);
        });
      lastY = y;
      scheduled = false;
    });
  },
  { passive: true },
);
dropdownToggles.forEach((toggle) =>
  toggle.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    clearTimeout(navOpenTimer);
    clearTimeout(navCloseTimer);
    setDropdown(toggle.dataset.navKey, true);
    dropdown.querySelector(".is-active a")?.focus();
  }),
);
window.addEventListener("resize", () => {
  clearTimeout(navOpenTimer);
  clearTimeout(navCloseTimer);
  setDropdown(activeNavKey, false);
});
