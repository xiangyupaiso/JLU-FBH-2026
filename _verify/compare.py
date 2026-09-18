"""Focused visual comparison for the /protocol migration.

Captures the card grid (all / DNA filter) in both builds, the phone layout, the
closing block, and probes whether Chrome honours `#toolbar=0` on the embedded
PDF. Reuses the already-built `dist` and the staged reference copy from
verify.py, so it does not rebuild.

Usage: python _verify/compare.py
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
OUT = HERE
BASE = "/jlu-fbh"
NEW_PORT = 4190
OLD_PORT = 4191


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


def grid_shot(page, path: Path, label: str) -> None:
    grid = page.locator(".protocol-grid")
    grid.scroll_into_view_if_needed()
    page.wait_for_timeout(600)
    grid.screenshot(path=str(path))
    print(f"  {label}: {path.name}")


def main() -> None:
    new_server = serve(OUT / "serve-new", NEW_PORT)
    old_server = serve(OUT / "serve-old", OLD_PORT)
    report: dict = {}

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chromium_executable())

        # ---- fresh build: grid, DNA filter, phone, closing block ----
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(f"http://127.0.0.1:{NEW_PORT}{BASE}/protocol", wait_until="networkidle")
        page.wait_for_selector(".protocol-grid", timeout=15000)
        page.wait_for_timeout(1200)
        grid_shot(page, OUT / "cmp-new-grid-all.png", "new grid / all")

        page.get_by_role("button", name="DNA", exact=True).click()
        page.wait_for_timeout(700)
        grid_shot(page, OUT / "cmp-new-grid-dna.png", "new grid / dna")
        report["new_dna_layout"] = page.evaluate(
            """() => {
                const grid = document.querySelector('.protocol-grid');
                const items = [...grid.children].map(el => {
                  const r = el.getBoundingClientRect();
                  return {
                    kind: el.classList.contains('protocol-card') ? 'card' : 'deco',
                    left: Math.round(r.left), top: Math.round(r.top),
                    width: Math.round(r.width), height: Math.round(r.height),
                  };
                });
                const gridRect = grid.getBoundingClientRect();
                const covered = items.reduce((sum, i) => sum + i.width * i.height, 0);
                return {
                  grid: { width: Math.round(gridRect.width), height: Math.round(gridRect.height) },
                  items,
                  uncoveredArea: Math.round(gridRect.width * gridRect.height - covered),
                  background: getComputedStyle(grid).backgroundColor,
                };
            }"""
        )

        # closing block + footer
        page.get_by_role("button", name="All manuals").click()
        page.wait_for_timeout(400)
        page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")
        page.wait_for_timeout(1200)
        page.screenshot(path=str(OUT / "cmp-new-closing.png"))
        report["closing"] = page.evaluate(
            """() => ({
                nextTitle: document.querySelector('.wiki-next--record h2')?.textContent,
                nextLabel: document.querySelector('.wiki-next__action strong')?.textContent,
                footerVariant: document.querySelector('.circure-footer')?.className,
            })"""
        )
        page.close()

        # phone
        phone = browser.new_page(viewport={"width": 480, "height": 900})
        phone.goto(f"http://127.0.0.1:{NEW_PORT}{BASE}/protocol", wait_until="networkidle")
        phone.wait_for_selector(".protocol-grid", timeout=15000)
        phone.wait_for_timeout(1000)
        grid_shot(phone, OUT / "cmp-new-grid-phone.png", "new grid / phone")
        phone.close()

        # probe: does Chrome honour #toolbar=0 ?
        probe = browser.new_page(viewport={"width": 900, "height": 700})
        probe.set_content(
            f"""<iframe id="plain" src="http://127.0.0.1:{NEW_PORT}{BASE}/assets/dna-extraction-C6I6JCSw.pdf"
                 style="width:100%;height:320px;border:0"></iframe>
                <iframe id="notoolbar" src="http://127.0.0.1:{NEW_PORT}{BASE}/assets/dna-extraction-C6I6JCSw.pdf#toolbar=0"
                 style="width:100%;height:320px;border:0"></iframe>"""
        )
        probe.wait_for_timeout(3000)
        probe.screenshot(path=str(OUT / "cmp-pdf-toolbar-probe.png"))
        print("  pdf toolbar probe written")
        probe.close()

        # ---- previous build: same two grids ----
        old = browser.new_page(viewport={"width": 1440, "height": 900})
        old.goto(f"http://127.0.0.1:{OLD_PORT}{BASE}/protocol", wait_until="networkidle")
        old.wait_for_selector(".protocol-grid", timeout=15000)
        old.wait_for_timeout(1200)
        grid_shot(old, OUT / "cmp-old-grid-all.png", "old grid / all")
        old.get_by_role("button", name="DNA", exact=True).click()
        old.wait_for_timeout(700)
        grid_shot(old, OUT / "cmp-old-grid-dna.png", "old grid / dna")
        report["old_dna_layout"] = old.evaluate(
            """() => {
                const grid = document.querySelector('.protocol-grid');
                const items = [...grid.children].map(el => {
                  const r = el.getBoundingClientRect();
                  return {
                    kind: el.classList.contains('protocol-card') ? 'card' : 'deco',
                    left: Math.round(r.left), top: Math.round(r.top),
                    width: Math.round(r.width), height: Math.round(r.height),
                  };
                });
                const gridRect = grid.getBoundingClientRect();
                const covered = items.reduce((sum, i) => sum + i.width * i.height, 0);
                return {
                  grid: { width: Math.round(gridRect.width), height: Math.round(gridRect.height) },
                  items,
                  uncoveredArea: Math.round(gridRect.width * gridRect.height - covered),
                  background: getComputedStyle(grid).backgroundColor,
                };
            }"""
        )
        old.close()
        browser.close()

    new_server.shutdown()
    old_server.shutdown()
    (OUT / "compare.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
