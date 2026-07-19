const root = document.documentElement;
const isConstrainedDevice =
    (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4;
root.classList.toggle("is-constrained-device", isConstrainedDevice);
const header = document.querySelector("[data-header]");
const navShell = document.querySelector("[data-nav-shell]");
const navHome = document.querySelector("[data-nav-home]");
const dropdownToggles = Array.from(document.querySelectorAll("[data-nav-key]"));
const dropdownPanels = Array.from(document.querySelectorAll("[data-nav-panel]"));
const dropdown = document.querySelector("[data-dropdown]");
const mobileToggle = document.querySelector("[data-mobile-toggle]");
const flipTargets = Array.from(document.querySelectorAll("[data-flip]"));
const revealTargets = Array.from(document.querySelectorAll(".reveal"));
const continuousMotionSections = Array.from(document.querySelectorAll(".hero, .identity-section"));
const storySection = document.querySelector("[data-story]");
const storySteps = Array.from(document.querySelectorAll("[data-story-step]"));
const pushSection = document.querySelector(".push-section");
const galaxy = document.querySelector(".galaxy");
const particleField = document.querySelector("[data-particles]");
const finalWindow = document.querySelector("[data-final-window]");
const storyFigures = Array.from(document.querySelectorAll("[data-story-figure]"));

const ease = "cubic-bezier(0.215, 0.61, 0.355, 1)";
const particleConfig = {
    driftSpeed: 0.15,
    ease: 0.1,
    scaleEase: 0.25,
    scrollMultiplier: 0.05,
    scaleMin: 0.5,
    scaleMax: 1.4,
};
const particleDepths = [-200, -150, -100, -50, 0, 50, 100, 150, 200];
const particleSpeeds = [0.8, 0.9, 1, 1.1, 1.2];
const particleMotion = { current: 0, target: 0, last: 0, directionSign: 1 };
const particleItems = [];
let particleContainerHeight = 0;
let particleOffsetHeight = 0;
let particleFrameTime = performance.now();
let particleScrollVelocity = 0;
let particleFrameId = 0;
let particleActive = false;
let pageVisible = !document.hidden;
let galaxyActive = false;
let pushActive = false;
let finalActive = false;
let lastScroll = window.scrollY;
let lastScrollTime = performance.now();
let ticking = false;
let resizeFrame = 0;
let isScrolled = false;
let isPassedFold = false;
let isScrollingDown = false;
let flipAnimations = [];
let activeNavKey = "project";
let navOpenTimer = 0;
let navCloseTimer = 0;

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

function clamp(value, min = 0, max = 1) {
    return Math.min(Math.max(value, min), max);
}

function measure(elements) {
    return new Map(elements.map((element) => [element, element.getBoundingClientRect()]));
}

function hydrateParticles() {
    if (!particleField || particleField.children.length > 0) return;

    const fragment = document.createDocumentFragment();
    const particleCount = isConstrainedDevice ? 16 : window.innerWidth < 700 ? 18 : window.innerWidth < 1100 ? 24 : 32;
    for (let index = 0; index < particleCount; index += 1) {
        const particle = document.createElement("span");
        const image = document.createElement("span");
        const depth = particleDepths[index % particleDepths.length];
        const depthOpacity = depth < 0 ? Math.max(0.5, 1 + depth / 250) : 1;
        particle.className = "particle";
        particle.dataset.art = String(index % 8);
        particle.setAttribute("aria-hidden", "true");
        image.className = "particle-image";
        particle.style.setProperty("--wash", (1 - depthOpacity).toFixed(2));
        particle.append(image);
        fragment.append(particle);
        particleItems.push({
            element: particle,
            x: Math.floor(Math.random() * 95),
            y: Math.floor(Math.random() * 100),
            speed: particleSpeeds[index % particleSpeeds.length],
            z: depth,
            top: 0,
            height: 0,
            position: 0,
            extra: 0,
            currentScale: 1,
        });
    }

    particleField.append(fragment);
    layoutParticles();
    startParticleLoop();
}

function canAnimateParticles() {
    return particleActive && pageVisible && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function startParticleLoop() {
    if (particleFrameId || !canAnimateParticles()) return;
    particleFrameTime = performance.now();
    particleFrameId = requestAnimationFrame(updateParticleFrame);
}

function stopParticleLoop() {
    if (!particleFrameId) return;
    cancelAnimationFrame(particleFrameId);
    particleFrameId = 0;
}

function layoutParticles() {
    if (!particleField || particleItems.length === 0) return;
    const containerRect = particleField.getBoundingClientRect();
    const isMobile = window.innerWidth < 700;

    particleItems.forEach((item, index) => {
        const left = isMobile ? (index % 4) * 25 + (item.x % 20) : item.x;
        item.element.style.left = `${left}%`;
        item.element.style.top = `${item.y}%`;
        item.element.style.transform = "translate3d(0, 0, 0) scale(1)";
        const rect = item.element.getBoundingClientRect();
        item.extra = 0;
        item.height = rect.height;
        item.top = rect.top - containerRect.top;
        item.position = 0;
        item.currentScale = 1;
    });

    particleContainerHeight = particleField.clientHeight;
    particleOffsetHeight = particleContainerHeight * 0.1;
    particleMotion.current = 0;
    particleMotion.target = 0;
    particleMotion.last = 0;
    particleScrollVelocity = 0;
}

function updateParticleFrame(timestamp) {
    particleFrameId = 0;
    if (!particleField || particleItems.length === 0 || !canAnimateParticles()) return;
    const delta = Math.min((timestamp - particleFrameTime) / 16.667, 3);
    particleFrameTime = timestamp;

    particleMotion.target += particleScrollVelocity * particleConfig.scrollMultiplier * delta;
    particleScrollVelocity *= Math.pow(0.86, delta);
    if (Math.abs(particleScrollVelocity) < 0.01) particleScrollVelocity = 0;
    particleMotion.target += particleConfig.driftSpeed * delta * particleMotion.directionSign;
    particleMotion.current += (particleMotion.target - particleMotion.current) * particleConfig.ease;
    const movingUp = particleMotion.current >= particleMotion.last;

    particleItems.forEach((item) => {
        item.position = -particleMotion.current * item.speed - item.extra;
        const edge = item.position + item.top + item.height;
        const isBefore = edge < -particleOffsetHeight;
        const isAfter = edge > particleContainerHeight + particleOffsetHeight;

        if (movingUp && isBefore) item.extra -= particleContainerHeight + particleOffsetHeight;
        if (!movingUp && isAfter) item.extra += particleContainerHeight;

        const y = item.position + item.top;
        const progress = clamp(y / particleContainerHeight);
        const targetScale = particleConfig.scaleMin + progress * (particleConfig.scaleMax - particleConfig.scaleMin);
        item.currentScale += (targetScale - item.currentScale) * particleConfig.scaleEase;
        item.element.style.transform = `translate3d(0, ${item.position.toFixed(2)}px, ${item.z}px) scale(${item.currentScale.toFixed(4)})`;
    });

    particleMotion.last = particleMotion.current;
    particleFrameId = requestAnimationFrame(updateParticleFrame);
}

function runFlip(mutator) {
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
        const moved = Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5 || Math.abs(sx - 1) > 0.01 || Math.abs(sy - 1) > 0.01;

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
            }
        );

        flipAnimations.push(animation);
        animation.addEventListener("finish", () => {
            flipAnimations = flipAnimations.filter((item) => item !== animation);
        });
    });
}

function setClass(name, enabled) {
    if (root.classList.contains(name) === enabled) return false;
    root.classList.toggle(name, enabled);
    return true;
}

function updateScrollState() {
    const now = performance.now();
    const y = window.scrollY;
    const nextScrolled = y > 42;
    const nextPassedFold = y > window.innerHeight * 1.08;
    const delta = y - lastScroll;
    if (delta !== 0) {
        const elapsed = clamp(now - lastScrollTime, 8, 48);
        const frameVelocity = clamp((delta / elapsed) * 16.667, -80, 80);
        particleScrollVelocity += (frameVelocity - particleScrollVelocity) * 0.65;
        particleMotion.directionSign = Math.sign(delta);
    }
    const nextDown = delta > 3 ? true : delta < -3 || y < 60 ? false : isScrollingDown;
    const changed = nextScrolled !== isScrolled || nextPassedFold !== isPassedFold || nextDown !== isScrollingDown;

    if (changed) {
        runFlip(() => {
            isScrolled = nextScrolled;
            isPassedFold = nextPassedFold;
            isScrollingDown = nextDown;
            setClass("has-scrolled", isScrolled);
            setClass("has-passed-fold", isPassedFold);
            setClass("is-scrolling-down", isScrollingDown);
        });
    }

    if (pushSection && pushActive) {
        const rect = pushSection.getBoundingClientRect();
        const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height));
        pushSection.style.setProperty("--push-progress", progress.toFixed(4));
        setClass("has-reached-footer", progress > 0.68);
    }

    if (galaxy && galaxyActive) {
        const rect = galaxy.getBoundingClientRect();
        const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.78));
        const wordProgress = clamp((progress - 0.04) / 0.24);
        galaxy.classList.toggle("has-words-in", wordProgress > 0.08);
        galaxy.style.setProperty("--galaxy-progress", progress.toFixed(4));
        galaxy.style.setProperty("--word-progress", wordProgress.toFixed(4));
    }

    if (finalWindow && finalActive) {
        const rect = finalWindow.getBoundingClientRect();
        const progress = clamp((window.innerHeight * 0.85 - rect.top) / (window.innerHeight * 0.65));
        finalWindow.style.setProperty("--final-progress", progress.toFixed(4));
    }

    lastScroll = y;
    lastScrollTime = now;
    ticking = false;
}

function requestScrollUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScrollState);
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
        toggle.setAttribute("aria-expanded", String(open && toggle.dataset.navKey === nextKey));
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
    if (window.innerWidth < 1000) return;
    window.clearTimeout(navCloseTimer);
    window.clearTimeout(navOpenTimer);
    navOpenTimer = window.setTimeout(() => setDropdown(key, true), 45);
}

function queueDropdownClose(delay = 150) {
    window.clearTimeout(navOpenTimer);
    window.clearTimeout(navCloseTimer);
    navCloseTimer = window.setTimeout(() => setDropdown(activeNavKey, false), delay);
}

dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("pointerenter", () => queueDropdownOpen(toggle.dataset.navKey));
    toggle.addEventListener("focus", () => queueDropdownOpen(toggle.dataset.navKey));
    toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        if (window.innerWidth >= 1000) {
            setDropdown(toggle.dataset.navKey, true);
            return;
        }

        document.querySelector(toggle.dataset.navTarget)?.scrollIntoView({ behavior: "smooth" });
        root.classList.remove("mobile-menu-open");
        mobileToggle?.setAttribute("aria-expanded", "false");
    });
});

navHome?.addEventListener("pointerenter", () => queueDropdownClose(70));
navHome?.addEventListener("focus", () => queueDropdownClose(0));
navShell?.addEventListener("pointerenter", () => window.clearTimeout(navCloseTimer));
navShell?.addEventListener("pointerleave", () => queueDropdownClose());
navShell?.addEventListener("focusout", (event) => {
    if (!navShell.contains(event.relatedTarget)) queueDropdownClose(80);
});
dropdown?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setDropdown(activeNavKey, false)));

document.addEventListener("pointerdown", (event) => {
    if (!root.classList.contains("dropdown-open") || header?.contains(event.target)) return;
    setDropdown(activeNavKey, false);
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !root.classList.contains("dropdown-open")) return;
    setDropdown(activeNavKey, false);
    dropdownToggles.find((toggle) => toggle.dataset.navKey === activeNavKey)?.focus();
});

mobileToggle?.addEventListener("click", () => {
    const willOpen = !root.classList.contains("mobile-menu-open");
    runFlip(() => {
        root.classList.toggle("mobile-menu-open", willOpen);
        mobileToggle.setAttribute("aria-expanded", String(willOpen));
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("is-inview");
        });
    },
    { rootMargin: "0px 0px -15% 0px", threshold: 0.08 }
);

revealTargets.forEach((target) => observer.observe(target));

if (particleField) {
    const particleViewportObserver = new IntersectionObserver(
        ([entry]) => {
            particleActive = entry.isIntersecting;
            if (particleActive) {
                hydrateParticles();
                startParticleLoop();
            }
            else stopParticleLoop();
        },
        { rootMargin: "25% 0px", threshold: 0.01 }
    );
    particleViewportObserver.observe(particleField);
}

if (continuousMotionSections.length > 0) {
    const continuousMotionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => entry.target.classList.toggle("is-motion-active", entry.isIntersecting));
        },
        { rootMargin: "12% 0px", threshold: 0.01 }
    );
    continuousMotionSections.forEach((section) => continuousMotionObserver.observe(section));
}

const scrollDrivenTargets = [galaxy, pushSection, finalWindow].filter(Boolean);
if (scrollDrivenTargets.length > 0) {
    const scrollDrivenObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.target === galaxy) galaxyActive = entry.isIntersecting;
                if (entry.target === pushSection) pushActive = entry.isIntersecting;
                if (entry.target === finalWindow) finalActive = entry.isIntersecting;
            });
            requestScrollUpdate();
        },
        { rootMargin: "100% 0px", threshold: 0 }
    );
    scrollDrivenTargets.forEach((target) => scrollDrivenObserver.observe(target));
}

document.addEventListener("visibilitychange", () => {
    pageVisible = !document.hidden;
    if (pageVisible) startParticleLoop();
    else stopParticleLoop();
});

function setStoryActive(index) {
    if (!storySection || storySteps.length === 0) return;
    const activeIndex = clamp(index, 0, storySteps.length - 1);
    storySection.dataset.storyActive = String(activeIndex);
    storySection.style.setProperty("--story-angle", `${(((activeIndex + 1) / storySteps.length) * 360).toFixed(1)}deg`);
    storySteps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === activeIndex));
    storyFigures.forEach((figure) => figure.classList.toggle("is-active", Number(figure.dataset.storyFigure) === activeIndex));
}

if (storySection && storySteps.length > 0) {
    const storyObserver = new IntersectionObserver(
        (entries) => {
            const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (visibleEntry) setStoryActive(Number(visibleEntry.target.dataset.storyStep));
        },
        { rootMargin: "-24% 0px -38% 0px", threshold: [0.08, 0.24, 0.42] }
    );

    storySteps.forEach((step) => storyObserver.observe(step));
    setStoryActive(0);
}

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", () => {
    if (resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => {
        resizeFrame = 0;
        layoutParticles();
        requestScrollUpdate();
    });
});
window.addEventListener("load", () => {
    document.body.classList.add("is-loaded");
    requestScrollUpdate();
});
