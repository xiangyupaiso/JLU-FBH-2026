"""Check indicator position at progress=0 vs spec ('leftmost point')."""
from playwright.sync_api import sync_playwright
import math

URL = "http://localhost:8080/index.html"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(500)

    # Scroll to the very top of the timeline so progress=0
    page.evaluate("window.scrollTo({top: document.querySelector('#evidenceTimeline').offsetTop + 4, behavior: 'instant'})")
    page.wait_for_timeout(1500)

    info = page.evaluate(
        """() => {
            const dial = document.querySelector('.dial');
            const ind = document.querySelector('.dial-indicator');
            const activeCard = document.querySelector('.dial-card.is-active');
            const dRect = dial.getBoundingClientRect();
            const iRect = ind.getBoundingClientRect();
            const cRect = activeCard.getBoundingClientRect();
            return {
                dial_rotation_var: dial.style.getPropertyValue('--dial-rotation'),
                dial_cx: dRect.left + dRect.width/2,
                dial_cy: dRect.top + dRect.height/2,
                dial_w: dRect.width,
                indicator_cx: iRect.left + iRect.width/2,
                indicator_cy: iRect.top + iRect.height/2,
                active_cx: cRect.left + cRect.width/2,
                active_cy: cRect.top + cRect.height/2,
            };
        }"""
    )

    radius = info["dial_w"] / 2  # NB: dial is rotated, bounding box != layout size
    # Use layout radius instead
    layout_radius = 360  # 720/2

    # Where is the indicator relative to dial center?
    idx = info["indicator_cx"] - info["dial_cx"]
    idy = info["indicator_cy"] - info["dial_cy"]
    idist = math.sqrt(idx*idx + idy*idy)

    # Where is the active card relative to dial center?
    acx = info["active_cx"] - info["dial_cx"]
    acy = info["active_cy"] - info["dial_cy"]
    acdist = math.sqrt(acx*acx + acy*acy)

    # Leftmost point of the visible circle = dial_cx - layout_radius
    leftmost_x = info["dial_cx"] - layout_radius
    rightmost_x = info["dial_cx"] + layout_radius

    print(f"dial_rotation_var: {info['dial_rotation_var']}")
    print(f"dial_center: ({info['dial_cx']:.0f}, {info['dial_cy']:.0f})")
    print(f"layout_radius: {layout_radius}")
    print(f"leftmost_x of circle: {leftmost_x:.0f}")
    print(f"rightmost_x of circle: {rightmost_x:.0f}")
    print()
    print(f"indicator at: ({info['indicator_cx']:.0f}, {info['indicator_cy']:.0f})")
    print(f"  offset from center: ({idx:.0f}, {idy:.0f}), distance: {idist:.0f}")
    print(f"  on left side? {idx < 0}")
    print(f"  near leftmost point (x≈{leftmost_x:.0f})? {abs(info['indicator_cx'] - leftmost_x) < 30}")
    print(f"  near rightmost point (x≈{rightmost_x:.0f})? {abs(info['indicator_cx'] - rightmost_x) < 30}")
    print()
    print(f"active card center: ({info['active_cx']:.0f}, {info['active_cy']:.0f})")
    print(f"  offset from center: ({acx:.0f}, {acy:.0f}), distance: {acdist:.0f}")
    print(f"  on left side? {acx < 0}")
    print(f"  near leftmost point (x≈{leftmost_x:.0f})? {abs(info['active_cx'] - leftmost_x) < 80}")

    page.screenshot(path=r"D:\TRAE SOLO CN\project\hp-testimonial-cards-local\.trae\verify-timeline\s4_progress_zero.png", full_page=False)

    browser.close()
