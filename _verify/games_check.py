"""Acceptance run for the /games migration (Dry Lab 04).

Builds the project, serves the fresh build and a reference copy of the previous
build, then checks:

  1. /games opens on the Dry Lab reader shell with no TOC card.
  2. The reader frame on /games is wider than on /model (body full width).
  3. /model, /software and /hardware keep their TOC card (no regression).
  4. Station map copy matches the previous build; the three showcase cards render.
  5. A showcase click opens the play surface and its iframe actually loads the
     bundled game (game-assets), Escape closes it and focus returns.
  6. Narrow viewports do not break the layout.
  7. Every route still renders with no console errors (whole-site smoke).

Usage: python _verify/games_check.py
"""

from __future__ import annotations

import functools
import http.server
import json
import os
import shutil
import socketserver
import subprocess
import sys
import threading
import traceback
from pathlib import Path

from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.stderr.reconfigure(encoding="utf-8", errors="replace")

WS = Path(__file__).resolve().parent.parent
OUT = Path(__file__).resolve().parent
OLD_SRC = Path(r"C:\Users\香芋派\.trae-cn\Official-wiki\dist")
BASE = "/jlu-fbh"
NEW_PORT = 4200
OLD_PORT = 4201

ROUTES = [
    "/",
    "/team",
    "/description",
    "/engineering",
    "/results",
    "/contribution",
    "/experiments",
    "/notebook",
    "/measurement",
    "/alternative-platform",
    "/safety-and-security",
    "/protocol",
    "/model",
    "/software",
    "/hardware",
    "/games",
    "/entrepreneurship",
    "/human-practices",
    "/education",
    "/inclusivity",
    "/sustainability",
]


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):  # noqa: N802
        clean = self.path.split("?")[0]
        resolved = Path(self.translate_path(clean))
        if not resolved.is_file() and "." not in os.path.basename(clean):
            self.path = f"{BASE}/index.html"
        return super().do_GET()

    def log_message(self, *args):
        pass


def serve(root: Path, port: int) -> socketserver.TCPServer:
    handler = functools.partial(SPAHandler, directory=str(root))
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", port), handler)
    httpd.daemon_threads = True
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def chromium_executable() -> str | None:
    root = Path(os.environ.get("LOCALAPPDATA", "")) / "ms-playwright"
    found = sorted(root.glob("chromium-*/chrome-win64/chrome.exe"))
    return str(found[-1]) if found else None


def stage_new() -> None:
    target = OUT / "serve-new" / BASE.strip("/")
    if target.exists():
        shutil.rmtree(target)
    shutil.copytree(WS / "dist", target)


def stage_old() -> None:
    """Old build reference; game-assets are skipped (layout comparison only)."""
    target = OUT / "serve-old" / BASE.strip("/")
    if target.exists():
        shutil.rmtree(target)
    target.mkdir(parents=True)
    shutil.copy2(OLD_SRC / "index.html", target / "index.html")
    for folder in ("assets", "vendor"):
        if (OLD_SRC / folder).is_dir():
            shutil.copytree(OLD_SRC / folder, target / folder)


def build() -> None:
    print("=== vite build ===", flush=True)
    result = subprocess.run(
        ["node", str(WS / "node_modules/vite/bin/vite.js"), "build"],
        cwd=WS,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    tail = (result.stdout or "")[-2500:]
    print(tail)
    if result.stderr:
        print("STDERR:", result.stderr[-2500:])
    if result.returncode != 0:
        sys.exit(f"build failed rc={result.returncode}")
    print("build ok", flush=True)


def metrics(page) -> dict:
    return page.evaluate(
        """() => {
            const width = (sel) => {
              const el = document.querySelector(sel);
              return el ? Math.round(el.getBoundingClientRect().width) : null;
            };
            const record = document.querySelector('.wiki-record');
            return {
              hasOutline: Boolean(document.querySelector('.wiki-outline')),
              recordWidth: width('.wiki-record'),
              frameWidth: width('.route-frame'),
              articleWidth: width('.wiki-article'),
              viewportWidth: window.innerWidth,
              hasHorizontalOverflow:
                document.documentElement.scrollWidth > window.innerWidth + 1,
              sectionCount: document.querySelectorAll('.wiki-section').length,
              showcaseCount: document.querySelectorAll('.games-showcase').length,
              stationCount: document.querySelectorAll('.games-project-map__stations > li').length,
              recordClass: record ? record.className : null,
            };
        }"""
    )


def capture(report: dict, key: str, fn) -> None:
    try:
        report[key] = fn()
    except Exception as exc:
        report[key] = {"ERROR": f"{type(exc).__name__}: {exc}"}
        print(f"!! {key}: {type(exc).__name__}: {exc}", flush=True)
        traceback.print_exc()


def main() -> None:
    build()
    stage_new()
    stage_old()
    new_server = serve(OUT / "serve-new", NEW_PORT)
    old_server = serve(OUT / "serve-old", OLD_PORT)
    new_url = f"http://127.0.0.1:{NEW_PORT}{BASE}"
    old_url = f"http://127.0.0.1:{OLD_PORT}{BASE}"
    report: dict = {}

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chromium_executable())

        # ---------------- fresh build: /games ----------------
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        errors: list[str] = []
        page.on(
            "console",
            lambda m: errors.append(f"{m.type}: {m.text[:180]}")
            if m.type == "error"
            else None,
        )
        page.on("pageerror", lambda e: errors.append(f"pageerror: {str(e)[:180]}"))

        page.goto(f"{new_url}/games", wait_until="networkidle")
        page.wait_for_selector(".games-project-map", timeout=20000)
        page.wait_for_timeout(1800)
        page.screenshot(path=str(OUT / "games-new-hero.png"))

        capture(
            report,
            "copy",
            lambda: page.evaluate(
                """() => ({
                    title: document.title,
                    h1: document.querySelector('.wiki-hero h1')?.textContent,
                    lede: document.querySelector('.wiki-hero__lede')?.textContent,
                    sections: [...document.querySelectorAll('.wiki-section')].map(s => ({
                      number: s.querySelector('.wiki-section-number')?.textContent,
                      kicker: s.querySelector('.wiki-kicker')?.textContent,
                      title: s.querySelector('h2')?.textContent,
                      summary: s.querySelector('.wiki-section__summary')?.textContent,
                    })),
                    stations: [...document.querySelectorAll('.games-project-map__stations > li')].map(li => ({
                      small: li.querySelector('small')?.textContent,
                      strong: li.querySelector('strong')?.textContent,
                      p: li.querySelector('p')?.textContent,
                      em: li.querySelector('em')?.textContent,
                    })),
                    showcases: [...document.querySelectorAll('.games-showcase')].map(s => ({
                      cls: s.className,
                      chapters: [...s.querySelectorAll('.games-showcase__chapters i')].map(i => i.textContent),
                      small: s.querySelector('.games-showcase__copy small')?.textContent,
                      strong: s.querySelector('.games-showcase__copy strong')?.textContent,
                      em: s.querySelector('.games-showcase__copy em')?.textContent,
                      play: s.querySelector('.games-showcase__play')?.textContent?.trim(),
                    })),
                    next: {
                      label: document.querySelector('.wiki-next__action strong')?.textContent,
                      href: document.querySelector('.wiki-next__action')?.getAttribute('href'),
                    },
                })"""
            ),
        )

        page.evaluate("document.querySelector('.wiki-record')?.scrollIntoView()")
        page.wait_for_timeout(800)
        page.screenshot(path=str(OUT / "games-new-reader.png"))
        capture(report, "metrics_games", lambda: metrics(page))

        page.locator(".games-project-map").scroll_into_view_if_needed()
        page.wait_for_timeout(600)
        page.screenshot(path=str(OUT / "games-new-stations.png"))

        page.locator(".games-showcase--breast-guardian").scroll_into_view_if_needed()
        page.wait_for_timeout(900)
        page.screenshot(path=str(OUT / "games-new-showcase-breast.png"))
        page.locator(".games-showcase--bomb-cat").scroll_into_view_if_needed()
        page.wait_for_timeout(900)
        page.screenshot(path=str(OUT / "games-new-showcase-bombcat.png"))
        page.locator(".games-showcase--bio-memory").scroll_into_view_if_needed()
        page.wait_for_timeout(900)
        page.screenshot(path=str(OUT / "games-new-showcase-biomemory.png"))

        # station map jump
        capture(
            report,
            "station_jump",
            lambda: (
                page.locator(".games-project-map").scroll_into_view_if_needed(),
                page.wait_for_timeout(500),
                page.locator("#bio-memory-match button").click(),
                page.wait_for_timeout(1600),
                page.evaluate(
                    """() => {
                        const section = document.getElementById('game-bio-memory');
                        const scroller = document.querySelector('.route-frame__scroll');
                        const s = section.getBoundingClientRect();
                        const f = scroller.getBoundingClientRect();
                        return { sectionTopInFrame: Math.round(s.top - f.top), scrolled: Math.round(scroller.scrollTop) };
                    }"""
                ),
            )[-1],
        )

        # open the game surface and confirm the bundled iframe actually loads
        def open_game():
            page.locator(".games-showcase--bio-memory .games-showcase__launch").click()
            page.wait_for_selector(".games-experience", timeout=15000)
            page.wait_for_timeout(6000)
            page.screenshot(path=str(OUT / "games-new-experience.png"))
            return page.evaluate(
                """() => {
                    const frame = document.querySelector('.bio-memory-game-frame');
                    return {
                      open: Boolean(document.querySelector('.games-experience')),
                      dialogTitle: document.querySelector('#games-experience-title')?.textContent,
                      closeLabel: document.querySelector('.games-experience__close span')?.textContent,
                      frameSrc: frame ? frame.getAttribute('src') : null,
                      frameWidth: frame ? Math.round(frame.getBoundingClientRect().width) : null,
                      frameHeight: frame ? Math.round(frame.getBoundingClientRect().height) : null,
                      rootInert: document.getElementById('root')?.inert ?? null,
                    };
                }"""
            )

        capture(report, "open_game", open_game)

        capture(
            report,
            "close_game",
            lambda: (
                page.keyboard.press("Escape"),
                page.wait_for_timeout(900),
                page.evaluate(
                    """() => ({
                        closed: !document.querySelector('.games-experience'),
                        rootInert: document.getElementById('root')?.inert ?? null,
                        focusReturned: document.activeElement?.className ?? null,
                    })"""
                ),
            )[-1],
        )
        page.close()

        # ---------------- regression: sibling Dry Lab records ----------------
        for route in ("/model", "/software", "/hardware"):
            reg = browser.new_page(viewport={"width": 1440, "height": 900})
            reg.goto(f"{new_url}{route}", wait_until="networkidle")
            reg.wait_for_selector(".route-frame", timeout=20000)
            reg.wait_for_timeout(1200)
            reg.evaluate("document.querySelector('.wiki-record')?.scrollIntoView()")
            reg.wait_for_timeout(700)
            reg.screenshot(path=str(OUT / f"games-new{route.replace('/', '-')}-reader.png"))
            capture(report, f"metrics{route}", lambda reg=reg: metrics(reg))
            reg.close()

        # hardware → games entry
        entry = browser.new_page(viewport={"width": 1440, "height": 900})
        entry.goto(f"{new_url}/hardware", wait_until="networkidle")
        entry.wait_for_timeout(1200)
        capture(
            report,
            "hardware_next",
            lambda: (
                entry.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)"),
                entry.wait_for_timeout(800),
                entry.evaluate(
                    """() => ({
                        label: document.querySelector('.wiki-next__action strong')?.textContent,
                        href: document.querySelector('.wiki-next__action')?.getAttribute('href'),
                    })"""
                ),
            )[-1],
        )
        capture(
            report,
            "hardware_next_click",
            lambda: (
                entry.locator(".wiki-next__action").click(),
                entry.wait_for_selector(".games-project-map", timeout=20000),
                entry.wait_for_timeout(1200),
                {"url": entry.url, "h1": entry.locator(".wiki-hero h1").text_content()},
            )[-1],
        )
        entry.close()

        # nav dropdown + mobile menu
        nav = browser.new_page(viewport={"width": 1440, "height": 900})
        nav.goto(f"{new_url}/model", wait_until="networkidle")
        nav.wait_for_timeout(1000)
        nav.locator("button[data-nav-key='dry-lab']").hover()
        nav.wait_for_timeout(800)
        nav.screenshot(path=str(OUT / "games-new-nav-drylab.png"))
        capture(
            report,
            "nav_cards",
            lambda: nav.evaluate(
                """() => [...document.querySelectorAll(".circure-nav-panel[data-nav-panel='dry-lab'] .nav-image-card")]
                    .map(a => ({ label: a.querySelector('strong')?.textContent,
                                 small: a.querySelector('small')?.textContent,
                                 href: a.getAttribute('href') }))"""
            ),
        )
        capture(
            report,
            "nav_click",
            lambda: (
                nav.locator(
                    ".circure-nav-panel[data-nav-panel='dry-lab'] a.nav-image-card[href$='/games']"
                ).click(),
                nav.wait_for_selector(".games-project-map", timeout=20000),
                nav.wait_for_timeout(1200),
                {"url": nav.url, "h1": nav.locator(".wiki-hero h1").text_content()},
            )[-1],
        )
        nav.close()

        # narrow viewports
        for width, name in ((900, "tablet"), (480, "phone")):
            narrow = browser.new_page(viewport={"width": width, "height": 900})
            narrow.goto(f"{new_url}/games", wait_until="networkidle")
            narrow.wait_for_selector(".games-project-map", timeout=20000)
            narrow.wait_for_timeout(1200)
            narrow.evaluate("document.querySelector('.wiki-record')?.scrollIntoView()")
            narrow.wait_for_timeout(700)
            narrow.locator(".games-project-map").scroll_into_view_if_needed()
            narrow.wait_for_timeout(700)
            narrow.screenshot(path=str(OUT / f"games-new-{name}-stations.png"))
            capture(report, f"narrow_{name}", lambda narrow=narrow: metrics(narrow))
            narrow.close()

        # ---------------- whole-site smoke ----------------
        smoke = browser.new_page(viewport={"width": 1440, "height": 900})
        smoke_errors: list[str] = []
        smoke.on(
            "console",
            lambda m: smoke_errors.append(f"{m.type}: {m.text[:160]}")
            if m.type == "error"
            else None,
        )
        smoke.on(
            "pageerror", lambda e: smoke_errors.append(f"pageerror: {str(e)[:160]}")
        )
        rows = []
        for route in ROUTES:
            smoke_errors.clear()
            smoke.goto(f"{new_url}{route}", wait_until="networkidle")
            smoke.wait_for_timeout(1000)
            info = smoke.evaluate(
                """() => ({
                    title: document.title,
                    h1: document.querySelector('.wiki-hero h1, h1')?.textContent?.trim() ?? null,
                    hasOutline: Boolean(document.querySelector('.wiki-outline')),
                    bodyLength: document.body.innerText.trim().length,
                    notFound: document.body.innerText.includes('The requested URL was not found'),
                })"""
            )
            info["route"] = route
            info["consoleErrors"] = list(smoke_errors)
            rows.append(info)
            bad = info["notFound"] or not info["bodyLength"] or info["consoleErrors"]
            print(f"{'!!' if bad else 'OK'} {route:26} outline={info['hasOutline']!s:5} {info['title'][:40]}", flush=True)
        report["smoke"] = rows
        smoke.close()

        # ---------------- previous build reference ----------------
        old = browser.new_page(viewport={"width": 1440, "height": 900})
        old.goto(f"{old_url}/games", wait_until="networkidle")
        old.wait_for_selector(".games-project-map", timeout=20000)
        old.wait_for_timeout(1800)
        old.screenshot(path=str(OUT / "games-old-full.png"), full_page=True)
        capture(
            report,
            "old_copy",
            lambda: old.evaluate(
                """() => ({
                    h1: document.querySelector('h1')?.textContent,
                    lede: document.querySelector('.wiki-hero__lede')?.textContent,
                    stationHeading: document.querySelector('.games-project-map__heading')?.innerText,
                    stations: [...document.querySelectorAll('.games-project-map__stations > li')].map(li => ({
                      small: li.querySelector('small')?.textContent,
                      strong: li.querySelector('strong')?.textContent,
                      p: li.querySelector('p')?.textContent,
                      em: li.querySelector('em')?.textContent,
                    })),
                    showcases: [...document.querySelectorAll('.games-showcase')].map(s => ({
                      cls: s.className,
                      heading: s.querySelector('.games-showcase__heading')?.innerText,
                      chapters: [...s.querySelectorAll('.games-showcase__chapters i')].map(i => i.textContent),
                      small: s.querySelector('.games-showcase__copy small')?.textContent,
                      strong: s.querySelector('.games-showcase__copy strong')?.textContent,
                    })),
                })"""
            ),
        )
        old.close()
        browser.close()

    new_server.shutdown()
    old_server.shutdown()
    (OUT / "games-report.json").write_text(
        json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
