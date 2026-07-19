"""
Verify the redesigned .story-timeline section.

Read-only verification - does NOT modify files.
"""
from playwright.sync_api import sync_playwright

URL = "http://localhost:8080/index.html"
SHOTS_DIR = r"D:\TRAE SOLO CN\project\hp-testimonial-cards-local\.trae\verify-timeline"


def get_styles(page, selector):
    return page.evaluate(
        """(sel) => {
            const el = document.querySelector(sel);
            if (!el) return null;
            const cs = getComputedStyle(el);
            return {
                width: el.offsetWidth,
                height: el.offsetHeight,
                transform: cs.transform,
                opacity: cs.opacity,
                filter: cs.filter,
            };
        }""",
        selector,
    )


def main():
    results = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=1,
        )
        page = context.new_page()

        console_msgs = []
        page.on("console", lambda msg: console_msgs.append(f"{msg.type}: {msg.text}"))

        page.goto(URL, wait_until="networkidle")
        page.wait_for_timeout(800)

        # Bring the timeline into view
        timeline = page.locator("#evidenceTimeline")
        timeline.scroll_into_view_if_needed()
        page.wait_for_timeout(500)

        # ============================================================
        # STEP 1 + 2: Layout - guide on left, large rotating circle on right
        # ============================================================
        semicircle = page.locator(".semicircle-timeline")
        sem_box = semicircle.bounding_box()
        guide = page.locator(".guide-axis")
        guide_box = guide.bounding_box()
        dial_stage = page.locator(".dial-stage")
        stage_box = dial_stage.bounding_box()

        guide_left_of_dial = guide_box["x"] + guide_box["width"] <= stage_box["x"] + 5
        both_visible = sem_box is not None and guide_box is not None and stage_box is not None

        results.append(
            ("1. Navigate + 2. Layout (guide left, circle right)",
             both_visible and guide_left_of_dial,
             f"guide_x={guide_box['x']:.0f} guide_right={guide_box['x']+guide_box['width']:.0f} "
             f"stage_x={stage_box['x']:.0f} stage_w={stage_box['width']:.0f}")
        )

        # ============================================================
        # STEP 3: Circle is large (close to viewport height)
        # Expected: --dial-size: min(80vh, 50vw)
        # ============================================================
        dial = page.locator(".dial")
        dial_box = dial.bounding_box()
        dial_size_css = page.evaluate(
            "() => { const el = document.querySelector('.dial'); return getComputedStyle(el).getPropertyValue('--dial-size').trim(); }"
        )
        vh = page.evaluate("() => window.innerHeight")
        vw = page.evaluate("() => window.innerWidth")
        expected = min(0.8 * vh, 0.5 * vw)
        # Allow some tolerance
        size_ok = dial_box["width"] >= expected * 0.9 and dial_box["height"] >= expected * 0.9
        results.append(
            ("3. Circle large (~min(80vh, 50vw))",
             size_ok,
             f"--dial-size={dial_size_css} dial_w={dial_box['width']:.0f} dial_h={dial_box['height']:.0f} "
             f"vh={vh} vw={vw} expected~{expected:.0f}")
        )

        # ============================================================
        # STEP 4: Cards are ON the circle and rotate WITH it as you scroll
        # ============================================================
        # Verify the dial has transform: rotate(...), and cards are children of .dial
        dial_transform_initial = page.evaluate(
            "() => { const el = document.querySelector('.dial'); return getComputedStyle(el).transform; }"
        )

        # Verify all dial-cards are descendants of .dial
        cards_in_dial = page.evaluate(
            """() => {
                const dial = document.querySelector('.dial');
                const cards = [...document.querySelectorAll('.dial-card')];
                return cards.every(c => dial.contains(c));
            }"""
        )

        # Each card should have --angle set (proves they're bound to the circumference)
        card_angles = page.evaluate(
            """() => {
                const cards = [...document.querySelectorAll('.dial-card')];
                return cards.map(c => c.style.getPropertyValue('--angle'));
            }"""
        )
        all_have_angle = all(a.strip() for a in card_angles) and len(card_angles) == 8

        # Each card transform should include rotate(var(--angle)) and translateX(var(--radius))
        card_transform_sample = page.evaluate(
            """() => {
                const c = document.querySelector('.dial-card');
                return getComputedStyle(c).transform;
            }"""
        )

        # Now scroll to test rotation. Find a point in the middle of the timeline.
        timeline_box = page.locator("#evidenceTimeline").bounding_box()
        # Scroll to ~25% into timeline
        target_y = timeline_box["y"] + page.evaluate("() => window.scrollY") + timeline_box["height"] * 0.25
        page.evaluate(f"window.scrollTo({{top: {target_y}, behavior: 'instant'}})")
        page.wait_for_timeout(1500)  # allow easing to settle

        dial_transform_after = page.evaluate(
            "() => { const el = document.querySelector('.dial'); return getComputedStyle(el).transform; }"
        )

        rotation_changed = dial_transform_initial != dial_transform_after
        results.append(
            ("4. Cards on circle + rotate WITH dial as you scroll",
             cards_in_dial and all_have_angle and rotation_changed,
             f"cards_in_dial={cards_in_dial} angle_count={len(card_angles)} "
             f"all_have_angle={all_have_angle} dial_transform_changed={rotation_changed} "
             f"initial={dial_transform_initial} after={dial_transform_after}")
        )

        page.screenshot(path=f"{SHOTS_DIR}\\s1_mid_scroll.png", full_page=False)

        # ============================================================
        # STEP 5: Only 3 cards visible (active + prev + next), others hidden
        # ============================================================
        # Scroll back to the very beginning of the timeline (progress ~0 -> active index 0)
        page.evaluate("window.scrollTo({top: document.querySelector('#evidenceTimeline').offsetTop + 10, behavior: 'instant'})")
        page.wait_for_timeout(1500)

        card_states = page.evaluate(
            """() => {
                const cards = [...document.querySelectorAll('.dial-card')];
                return cards.map((c, i) => {
                    const cs = getComputedStyle(c);
                    return {
                        index: i,
                        opacity: parseFloat(cs.opacity),
                        filter: cs.filter,
                        classes: c.className,
                        visible: cs.opacity !== '0' && cs.visibility !== 'hidden',
                    };
                });
            }"""
        )

        visible_indices = [s["index"] for s in card_states if s["visible"] and s["opacity"] > 0.05]
        active_idx = [s["index"] for s in card_states if "is-active" in s["classes"]]
        prev_idx = [s["index"] for s in card_states if "is-prev" in s["classes"]]
        next_idx = [s["index"] for s in card_states if "is-next" in s["classes"]]

        # Expected at progress=0: active=0, prev=7 (wrap), next=1
        # Visible should be exactly those three. Active opacity=1, prev/next opacity=0.4.
        only_three = len(visible_indices) == 3
        active_opacity = card_states[active_idx[0]]["opacity"] if active_idx else 0
        prev_opacity = card_states[prev_idx[0]]["opacity"] if prev_idx else 0
        next_opacity = card_states[next_idx[0]]["opacity"] if next_idx else 0
        active_sharp = "blur(0" in card_states[active_idx[0]]["filter"] if active_idx else False
        prev_blurred = "blur" in card_states[prev_idx[0]]["filter"] and "blur(0" not in card_states[prev_idx[0]]["filter"] if prev_idx else False
        next_blurred = "blur" in card_states[next_idx[0]]["filter"] and "blur(0" not in card_states[next_idx[0]]["filter"] if next_idx else False

        results.append(
            ("5. Only 3 cards visible (active + prev + next), others hidden",
             only_three and len(active_idx) == 1 and len(prev_idx) == 1 and len(next_idx) == 1,
             f"visible_idx={visible_indices} active={active_idx} prev={prev_idx} next={next_idx} "
             f"active_op={active_opacity} prev_op={prev_opacity} next_op={next_opacity} "
             f"active_sharp={active_sharp} prev_blurred={prev_blurred} next_blurred={next_blurred} "
             f"only_three={only_three}")
        )

        # ============================================================
        # STEP 6: Scroll through, verify active card changes, guide updates, circle rotates
        # ============================================================
        # Scroll through several positions and capture state
        scroll_states = []
        for frac in [0.15, 0.35, 0.55, 0.75, 0.95]:
            ty = timeline_box["y"] + page.evaluate("() => window.scrollY") + timeline_box["height"] * frac
            # Use the original offsetTop for stable calc
            page.evaluate(f"window.scrollTo({{top: document.querySelector('#evidenceTimeline').offsetTop + document.querySelector('#evidenceTimeline').offsetHeight * {frac}, behavior: 'instant'}})")
            page.wait_for_timeout(1200)
            state = page.evaluate(
                """() => {
                    const cards = [...document.querySelectorAll('.dial-card')];
                    const guides = [...document.querySelectorAll('.guide-item')];
                    const dial = document.querySelector('.dial');
                    return {
                        active_card: cards.findIndex(c => c.classList.contains('is-active')),
                        active_guide: guides.findIndex(g => g.classList.contains('is-active')),
                        dial_rotation: dial.style.getPropertyValue('--dial-rotation'),
                        dial_transform: getComputedStyle(dial).transform,
                    };
                }"""
            )
            scroll_states.append((frac, state))

        active_card_changes = len(set(s["active_card"] for _, s in scroll_states)) > 1
        active_guide_matches_card = all(s["active_card"] == s["active_guide"] for _, s in scroll_states)
        rotation_changes = len(set(s["dial_rotation"] for _, s in scroll_states)) > 1

        results.append(
            ("6. Scroll: active card changes, guide updates, circle rotates",
             active_card_changes and active_guide_matches_card and rotation_changes,
             f"states={[(round(f,2), s['active_card'], s['active_guide'], s['dial_rotation']) for f,s in scroll_states]} "
             f"card_changes={active_card_changes} guide_matches={active_guide_matches_card} rot_changes={rotation_changes}")
        )

        # ============================================================
        # STEP 7: "View evidence" dialog still works
        # ============================================================
        # Scroll back to start so we have an active card with a button
        page.evaluate("window.scrollTo({top: document.querySelector('#evidenceTimeline').offsetTop + 10, behavior: 'instant'})")
        page.wait_for_timeout(800)

        # The active card's button should be clickable (pointer-events: auto on .is-active)
        active_button = page.locator(".dial-card.is-active .timeline-open").first
        button_visible = active_button.is_visible()
        dialog_open_before = page.evaluate("() => document.querySelector('#timelineDialog').open")

        try:
            active_button.click(timeout=3000)
            page.wait_for_timeout(500)
            dialog_open_after = page.evaluate("() => document.querySelector('#timelineDialog').open")
            dialog_title = page.evaluate("() => document.querySelector('#timelineDialogTitle').textContent")
            dialog_stakeholder = page.evaluate("() => document.querySelector('#timelineDialogStakeholder').textContent")
            dialog_works = dialog_open_after and not dialog_open_before and bool(dialog_title)
        except Exception as e:
            dialog_works = False
            dialog_title = ""
            dialog_stakeholder = ""
            dialog_open_after = False
            dialog_open_before = False

        # Close it
        page.evaluate("() => document.querySelector('.timeline-close').click()")
        page.wait_for_timeout(400)
        dialog_closed = page.evaluate("() => !document.querySelector('#timelineDialog').open")

        results.append(
            ("7. 'View evidence' dialog works",
             dialog_works and dialog_closed,
             f"button_visible={button_visible} open_before={dialog_open_before} open_after={dialog_open_after} "
             f"title='{dialog_title[:50]}' stakeholder_len={len(dialog_stakeholder)} closed_after={dialog_closed}")
        )

        page.screenshot(path=f"{SHOTS_DIR}\\s2_dialog_open.png", full_page=False)

        # ============================================================
        # STEP 8: Responsive <=900px: circle hidden, cards stack vertically
        # ============================================================
        # Switch to a narrow viewport
        mobile_context = browser.new_context(
            viewport={"width": 800, "height": 900},
            device_scale_factor=1,
        )
        mpage = mobile_context.new_page()
        mpage.goto(URL, wait_until="networkidle")
        mpage.wait_for_timeout(600)
        mpage.locator("#evidenceTimeline").scroll_into_view_if_needed()
        mpage.wait_for_timeout(400)

        m_ring_display = mpage.evaluate("() => getComputedStyle(document.querySelector('.dial-ring')).display")
        m_indicator_display = mpage.evaluate("() => getComputedStyle(document.querySelector('.dial-indicator')).display")

        m_card_states = mpage.evaluate(
            """() => {
                const cards = [...document.querySelectorAll('.dial-card')];
                return cards.map((c, i) => {
                    const cs = getComputedStyle(c);
                    return {
                        index: i,
                        opacity: parseFloat(cs.opacity),
                        position: cs.position,
                        transform: cs.transform,
                        margin_bottom: cs.marginBottom,
                    };
                });
            }"""
        )

        m_all_visible = all(s["opacity"] > 0.9 for s in m_card_states)
        m_stacked = all(s["position"] == "relative" for s in m_card_states)
        m_circle_hidden = m_ring_display == "none" and m_indicator_display == "none"

        # All cards visible (not just 3)
        m_visible_count = sum(1 for s in m_card_states if s["opacity"] > 0.9)

        results.append(
            ("8. Responsive <=900px: circle hidden, cards stack vertically",
             m_circle_hidden and m_stacked and m_all_visible and m_visible_count == 8,
             f"ring_display={m_ring_display} indicator_display={m_indicator_display} "
             f"stacked={m_stacked} all_visible={m_all_visible} visible_count={m_visible_count}/8 "
             f"sample={m_card_states[0]}")
        )

        mpage.screenshot(path=f"{SHOTS_DIR}\\s3_responsive_800.png", full_page=False)

        # ============================================================
        # Output final report
        # ============================================================
        print("\n" + "=" * 78)
        print("VERIFICATION REPORT — .story-timeline redesign")
        print("=" * 78)
        all_pass = True
        for name, passed, detail in results:
            status = "PASS" if passed else "FAIL"
            if not passed:
                all_pass = False
            print(f"\n[{status}] {name}")
            print(f"       {detail}")
        print("\n" + "=" * 78)
        print(f"OVERALL: {'ALL PASS' if all_pass else 'HAS FAILURES'}")
        print("=" * 78)

        # Print any console errors
        errors = [m for m in console_msgs if m.startswith("error")]
        if errors:
            print("\nConsole errors detected:")
            for e in errors[:10]:
                print(f"  {e}")

        browser.close()


if __name__ == "__main__":
    main()
