(() => {
    const progress = document.querySelector(".reading-progress span");
    const contents = document.querySelector(".contents");
    const contentsToggle = document.querySelector(".contents-toggle");
    const contentsLinks = [...document.querySelectorAll(".contents nav a")];
    const sections = contentsLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);
    const foldControl = document.querySelector("[data-fold-control]");
    const folds = [...document.querySelectorAll(".technical-fold")];

    const updateProgress = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
        if (progress) progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    };

    const setActiveLink = (id) => {
        contentsLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("is-active", isActive);
            if (isActive) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
        });
    };

    const updateActiveSection = () => {
        let current = sections[0];
        sections.forEach((section) => {
            if (section.getBoundingClientRect().top <= 180) current = section;
        });
        if (current) setActiveLink(current.id);
    };

    const updateReadingState = () => {
        updateProgress();
        updateActiveSection();
    };

    window.addEventListener("scroll", updateReadingState, { passive: true });
    window.addEventListener("resize", updateReadingState);
    updateProgress();
    updateActiveSection();

    contentsToggle?.addEventListener("click", () => {
        const open = contents?.classList.toggle("is-open") ?? false;
        contentsToggle.setAttribute("aria-expanded", String(open));
        const icon = contentsToggle.querySelector("span:last-child");
        if (icon) icon.textContent = open ? "−" : "＋";
    });

    contentsLinks.forEach((link) => {
        link.addEventListener("click", () => {
            contents?.classList.remove("is-open");
            contentsToggle?.setAttribute("aria-expanded", "false");
            const icon = contentsToggle?.querySelector("span:last-child");
            if (icon) icon.textContent = "＋";
        });
    });

    const syncFoldControl = () => {
        if (!foldControl) return;
        const allOpen = folds.length > 0 && folds.every((fold) => fold.open);
        foldControl.textContent = allOpen
            ? "Close technical appendices"
            : "Open technical appendices";
    };

    folds.forEach((fold) => fold.addEventListener("toggle", syncFoldControl));

    foldControl?.addEventListener("click", () => {
        const shouldOpen = folds.some((fold) => !fold.open);
        folds.forEach((fold) => { fold.open = shouldOpen; });
        syncFoldControl();
    });

    syncFoldControl();
})();
