"""Supplementary check: dial layout size (not rotated bounding box)."""
from playwright.sync_api import sync_playwright

URL = "http://localhost:8080/index.html"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(500)
    page.locator("#evidenceTimeline").scroll_into_view_if_needed()
    page.wait_for_timeout(400)

    info = page.evaluate(
        """() => {
            const dial = document.querySelector('.dial');
            const cs = getComputedStyle(dial);
            const rect = dial.getBoundingClientRect();
            return {
                css_width: cs.width,
                css_height: cs.height,
                offset_width: dial.offsetWidth,
                offset_height: dial.offsetHeight,
                client_width: dial.clientWidth,
                rect_w: rect.width,
                rect_h: rect.height,
                dial_size_var: cs.getPropertyValue('--dial-size'),
                vh: window.innerHeight,
                vw: window.innerWidth,
            };
        }"""
    )
    print("Dial layout info:")
    for k, v in info.items():
        print(f"  {k}: {v}")

    # Also verify ring stroke-width is 12px (thick gradient ring) and indicator exists
    ring = page.evaluate(
        """() => {
            const circle = document.querySelector('.dial-ring circle');
            if (!circle) return null;
            return {
                stroke: circle.getAttribute('stroke'),
                stroke_width: circle.getAttribute('stroke-width'),
                r: circle.getAttribute('r'),
                href: circle.getAttribute('stroke') || '',
            };
        }"""
    )
    print("\nRing info:")
    for k, v in ring.items():
        print(f"  {k}: {v}")

    indicator = page.evaluate(
        """() => {
            const ind = document.querySelector('.dial-indicator');
            const cs = getComputedStyle(ind);
            const rect = ind.getBoundingClientRect();
            const dialRect = document.querySelector('.dial').getBoundingClientRect();
            return {
                display: cs.display,
                width: cs.width,
                height: cs.height,
                background: cs.backgroundColor,
                // leftmost point of dial = dialRect.left, indicator should be near there
                indicator_x: rect.left + rect.width/2,
                dial_left: dialRect.left,
                dial_center_x: dialRect.left + dialRect.width/2,
                dial_center_y: dialRect.top + dialRect.height/2,
                indicator_y: rect.top + rect.height/2,
            };
        }"""
    )
    print("\nIndicator info:")
    for k, v in indicator.items():
        print(f"  {k}: {v}")

    # Guide items count
    guide_count = page.evaluate("() => document.querySelectorAll('.guide-item').length")
    card_count = page.evaluate("() => document.querySelectorAll('.dial-card').length")
    print(f"\nguide_items={guide_count} dial_cards={card_count}")

    browser.close()
