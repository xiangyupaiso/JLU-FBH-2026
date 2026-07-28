"""Smoke test: home page loads without console errors and GSAP ScrollTrigger
drives the --*-progress CSS variables while scrolling."""
from playwright.sync_api import sync_playwright

errors = []

def get_vars(page):
    return page.evaluate(
        """() => {
            const pick = (sel, name) => {
                const el = document.querySelector(sel);
                return el ? el.style.getPropertyValue(name) : null;
            };
            return {
                opening: pick('#opening', '--opening-progress'),
                er: pick('#opening', '--er-progress'),
                page: pick('.thread-guide', '--page-progress'),
                history: pick('.history', '--history-progress') ?? 'n/a',
                headerTone: document.querySelector('[data-header]')?.dataset.tone ?? null,
                guideName: document.querySelector('.thread-guide-name')?.textContent,
                triggers: window.__st_count ?? null,
            };
        }"""
    )

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
    page.on("pageerror", lambda e: errors.append(str(e)))

    page.goto("http://localhost:5173/")
    page.wait_for_load_state("networkidle")
    page.wait_for_timeout(1200)

    at_top = get_vars(page)
    print("AT TOP:", at_top)

    # GSAP pin migration checks: 7 pin-spacers (6 hold sections + expansion),
    # and total page height ≈ old min-height layout (sum of spans + flow parts)
    pin_info = page.evaluate(
        """() => ({
            spacers: document.querySelectorAll('.pin-spacer').length,
            scrollHeight: document.documentElement.scrollHeight,
            innerHeight: innerHeight,
            openingPinned: getComputedStyle(document.querySelector('#opening')).position,
        })"""
    )
    print("PIN INFO:", pin_info)

    # scroll into the opening pin range (pin activates once scrollY > start)
    page.evaluate("window.scrollTo(0, innerHeight * 1.2)")
    page.wait_for_timeout(1500)
    mid_opening = get_vars(page)
    print("MID OPENING:", mid_opening)
    pinned_state = page.evaluate(
        """() => {
            const el = document.querySelector('#opening');
            const cs = getComputedStyle(el);
            const rect = el.getBoundingClientRect();
            const header = document.querySelector('[data-header]');
            return { position: cs.position, top: Math.round(rect.top),
                     headerH: header ? header.offsetHeight : 68 };
        }"""
    )
    print("OPENING PIN STATE:", pinned_state)
    page.screenshot(path="home-gsap-refactor/verify_pin_opening.png")

    # scroll to ~60% of the page
    page.evaluate("window.scrollTo(0, (document.documentElement.scrollHeight - innerHeight) * 0.6)")
    page.wait_for_timeout(1800)
    deep = get_vars(page)
    print("DEEP (60%):", deep)

    # bottom
    page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")
    page.wait_for_timeout(1800)
    bottom = get_vars(page)
    print("BOTTOM:", bottom)

    page.screenshot(path="home-gsap-refactor/verify_bottom.png")

    ok = True
    if errors:
        ok = False
        print("CONSOLE/PAGE ERRORS:")
        for e in errors:
            print("  -", e)
    else:
        print("NO CONSOLE ERRORS")

    def num(v):
        try:
            return float(v)
        except (TypeError, ValueError):
            return None

    if not (num(mid_opening["opening"]) and num(mid_opening["opening"]) > 0):
        ok = False
        print("FAIL: --opening-progress did not advance mid-scroll")
    if not (num(bottom["page"]) and num(bottom["page"]) > 0.95):
        ok = False
        print("FAIL: --page-progress did not reach ~1 at bottom:", bottom["page"])
    if at_top["guideName"] == bottom["guideName"]:
        ok = False
        print("FAIL: thread-guide landmark label never changed")
    if pin_info["spacers"] != 7:
        ok = False
        print("FAIL: expected 7 pin-spacers, got", pin_info["spacers"])
    if pinned_state["position"] != "fixed":
        ok = False
        print("FAIL: #opening not pinned (fixed) mid-range:", pinned_state["position"])
    if abs(pinned_state["top"] - pinned_state["headerH"]) > 2:
        ok = False
        print("FAIL: pinned section not resting at header bottom:", pinned_state)
    # old page: sections 360+380+410+235+335+380+365 svh of pinned span plus
    # engineering/listening/closing flow content — expect roughly >= 25*vh
    if pin_info["scrollHeight"] < pin_info["innerHeight"] * 25:
        ok = False
        print("FAIL: page seems too short — pin spacers missing?", pin_info["scrollHeight"])

    print("RESULT:", "PASS" if ok else "FAIL")
    browser.close()
