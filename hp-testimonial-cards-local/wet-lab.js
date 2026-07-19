const root = document.documentElement;
const topbar = document.querySelector(".topbar");
const edgeTools = document.querySelector(".edge-tools");
const edgeSection = document.querySelector(".edge-section");
const backToTop = document.querySelector(".back-to-top");
const contents = document.querySelector(".contents");
const contentsToggle = document.querySelector(".contents-toggle");
const contentsLinks = [...document.querySelectorAll(".contents nav a")];
const recordSections = [...document.querySelectorAll("[data-record]")];
const revealItems = [...document.querySelectorAll(".reveal")];

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function setActiveRecord(recordId) {
    contentsLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${recordId}`);
    });

    const section = document.getElementById(recordId);
    if (section && edgeSection) {
        edgeSection.textContent = `${section.dataset.record} / 08`;
    }
}

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const recordObserver = new IntersectionObserver(
        (entries) => {
            const activeEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (activeEntry) setActiveRecord(activeEntry.target.id);
        },
        { rootMargin: "-18% 0px -68%", threshold: [0, 0.05, 0.16] },
    );

    recordSections.forEach((section) => recordObserver.observe(section));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-accordion-group]").forEach((group) => {
    const folds = [...group.querySelectorAll(":scope > details")];

    folds.forEach((fold) => {
        fold.addEventListener("toggle", () => {
            if (!fold.open) return;
            folds.forEach((otherFold) => {
                if (otherFold !== fold) otherFold.open = false;
            });
        });
    });
});

function updatePageState() {
    const scrollable = Math.max(1, root.scrollHeight - window.innerHeight);
    const progress = clamp(window.scrollY / scrollable, 0, 1);

    root.style.setProperty("--page-progress", progress.toFixed(4));
    topbar?.classList.toggle("is-scrolled", window.scrollY > 48);
    edgeTools?.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.72);
}

let scrollFrame = 0;

function requestPageStateUpdate() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
        updatePageState();
        scrollFrame = 0;
    });
}

contentsToggle?.addEventListener("click", () => {
    const isOpen = contents?.classList.toggle("is-open") ?? false;
    contentsToggle.setAttribute("aria-expanded", String(isOpen));
});

contentsLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 940) {
            contents?.classList.remove("is-open");
            contentsToggle?.setAttribute("aria-expanded", "false");
        }
    });
});

backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", requestPageStateUpdate, { passive: true });
window.addEventListener("resize", requestPageStateUpdate);
window.addEventListener("load", updatePageState);

setActiveRecord("record-overview");
updatePageState();
