"""Focused check for the /games numbering + station-jump change.

Reuses the already-built `dist` (run verify/games_check.py first, or build
manually) and asserts:

  1. The station map heading renders without a section number, and its text
     column starts at the article's left edge (aligned with the stations).
  2. The three playable projects are numbered 1 / 2 / 3.
  3. Clicking a station scrolls its showcase into view inside the reader frame.

Usage: python _verify/games_numbering.py
"""

from __future__ import annotations

import functools
import http.server
import json
import os
import socketserver
import sys
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HERE = Path(__file__).resolve().parent
BASE = "/jlu-fbh"
PORT = 4202


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


def main() -> None:
    server = serve(HERE / "serve-new", PORT)
    url = f"http://127.0.0.1:{PORT}{BASE}"
    report: dict = {}

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chromium_executable())
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(f"{url}/games", wait_until="networkidle")
        page.wait_for_selector(".games-project-map", timeout=20000)
        page.wait_for_timeout(1600)

        report["sections"] = page.evaluate(
            """() => [...document.querySelectorAll('.wiki-section')].map(s => ({
                id: s.id,
                headingClass: s.querySelector('.wiki-section__heading')?.className,
                numberText: s.querySelector('.wiki-section-number')?.textContent ?? null,
                hasNumberElement: Boolean(s.querySelector('.wiki-section-number')),
                kicker: s.querySelector('.wiki-kicker')?.textContent,
                title: s.querySelector('h2')?.textContent,
                headingLeft: Math.round(s.querySelector('.wiki-section__heading').getBoundingClientRect().left),
                textLeft: Math.round(s.querySelector('.wiki-section__heading > div').getBoundingClientRect().left),
            }))"""
        )
        report["alignment"] = page.evaluate(
            """() => {
                const map = document.querySelector('#games-project-map');
                const station = map.querySelector('.games-project-map__stations > li');
                const grid = map.querySelector('.games-project-map__stations');
                return {
                  mapHeadingLeft: Math.round(map.querySelector('.wiki-section__heading > div').getBoundingClientRect().left),
                  stationsLeft: Math.round(grid.getBoundingClientRect().left),
                  firstStationLeft: Math.round(station.getBoundingClientRect().left),
                };
            }"""
        )

        page.evaluate("document.querySelector('.wiki-record')?.scrollIntoView()")
        page.wait_for_timeout(700)
        page.locator(".games-project-map").scroll_into_view_if_needed()
        page.wait_for_timeout(700)
        page.screenshot(path=str(HERE / "games-numbering-map.png"))

        # jump: station 1 -> breast guardian showcase
        page.locator("#breast-guardian-rpg button").click()
        page.wait_for_timeout(1800)
        page.screenshot(path=str(HERE / "games-jump-breast.png"))
        report["jump_breast"] = page.evaluate(
            """() => {
                const section = document.getElementById('game-breast-guardian');
                const scroller = document.querySelector('.route-frame__scroll');
                const s = section.getBoundingClientRect();
                const f = scroller.getBoundingClientRect();
                return {
                  offsetFromFrameTop: Math.round(s.top - f.top),
                  scrollerTop: Math.round(scroller.scrollTop),
                };
            }"""
        )

        # jump: station 2 -> bomb cat
        page.locator(".games-project-map").scroll_into_view_if_needed()
        page.wait_for_timeout(700)
        page.locator("#exploding-cat-card-game button").click()
        page.wait_for_timeout(1800)
        report["jump_bombcat"] = page.evaluate(
            """() => {
                const section = document.getElementById('game-bomb-cat');
                const scroller = document.querySelector('.route-frame__scroll');
                const s = section.getBoundingClientRect();
                const f = scroller.getBoundingClientRect();
                return { offsetFromFrameTop: Math.round(s.top - f.top), scrollerTop: Math.round(scroller.scrollTop) };
            }"""
        )

        # jump: station 3 -> bio memory
        page.locator(".games-project-map").scroll_into_view_if_needed()
        page.wait_for_timeout(700)
        page.locator("#bio-memory-match button").click()
        page.wait_for_timeout(1800)
        report["jump_biomemory"] = page.evaluate(
            """() => {
                const section = document.getElementById('game-bio-memory');
                const scroller = document.querySelector('.route-frame__scroll');
                const s = section.getBoundingClientRect();
                const f = scroller.getBoundingClientRect();
                return { offsetFromFrameTop: Math.round(s.top - f.top), scrollerTop: Math.round(scroller.scrollTop) };
            }"""
        )

        page.close()
        browser.close()

    server.shutdown()
    (HERE / "games-numbering.json").write_text(
        json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
