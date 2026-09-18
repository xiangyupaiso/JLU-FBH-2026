"""Local acceptance run for the /protocol migration.

Builds the project, serves the fresh build and a reference copy of the previous
build (both under the `/jlu-fbh/` base path the app is configured with), then
captures the screenshots and measurements needed to check every item on the
acceptance list:

  1. /protocol opens through the Wet Lab reader shell with no TOC card.
  2. The reader frame on /protocol is wider than on /experiments (body full width).
  3. /experiments and the other Wet Lab records keep their TOC card (no regression).
  4. The section copy matches the previous build line for line.
  5. The 15 manuals, the four filter labels and the reader modal all work.
  6. Narrow viewports do not break the layout.

Usage: python _verify/verify.py
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
OUT = WS / "_verify"
OLD_SRC = Path(r"C:\Users\香芋派\.trae-cn\Official-wiki\dist")
BASE = "/jlu-fbh"
NEW_PORT = 4180
OLD_PORT = 4181


class SPAHandler(http.server.SimpleHTTPRequestHandler):
    """Static files plus an SPA fallback for extension-less routes."""

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


def stage(root: Path, src: Path, folders=("assets", "vendor")) -> None:
    """Copy a build into `<root>/jlu-fbh/` so its absolute base paths resolve."""
    target = root / BASE.strip("/")
    if target.exists():
        shutil.rmtree(target)
    target.mkdir(parents=True)
    shutil.copy2(src / "index.html", target / "index.html")
    for folder in folders:
        if (src / folder).is_dir():
            shutil.copytree(src / folder, target / folder)


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
    print(result.stdout[-4000:])
    if result.stderr:
        print("STDERR:", result.stderr[-4000:])
    if result.returncode != 0:
        sys.exit(f"build failed rc={result.returncode}")
    print("build ok", flush=True)


def attach_logging(page, label: str) -> None:
    page.on(
        "console",
        lambda msg: (
            print(f"  [{label} console:{msg.type}] {msg.text[:200]}")
            if msg.type in ("error", "warning")
            else None
        ),
    )
    page.on(
        "pageerror",
        lambda err: print(f"  [{label} pageerror] {str(err)[:300]}"),
    )


def show_record(page) -> None:
    page.evaluate("document.querySelector('.wiki-record')?.scrollIntoView()")
    page.wait_for_timeout(700)


def scroll_inner(page, selector: str) -> None:
    page.evaluate(
        """(sel) => {
            const target = document.querySelector(sel);
            const scroller = document.querySelector('.wet-frame__scroll');
            if (!target || !scroller) return;
            const delta = target.getBoundingClientRect().top
                        - scroller.getBoundingClientRect().top;
            scroller.scrollTop += delta - 24;
        }""",
        selector,
    )
    page.wait_for_timeout(700)


def metrics(page) -> dict:
    return page.evaluate(
        """() => {
            const frame = document.querySelector('.wet-frame');
            const outline = document.querySelector('.wiki-outline');
            const record = document.querySelector('.wiki-record');
            const article = document.querySelector('.wiki-article');
            const grid = document.querySelector('.protocol-grid');
            const width = (el) => el ? Math.round(el.getBoundingClientRect().width) : null;
            return {
              hasOutline: Boolean(outline),
              recordWidth: width(record),
              frameWidth: width(frame),
              articleWidth: width(article),
              gridWidth: width(grid),
              gridColumns: grid ? getComputedStyle(grid).gridTemplateColumns : null,
              cardCount: document.querySelectorAll('.protocol-card').length,
              viewportWidth: window.innerWidth,
              hasHorizontalOverflow:
                document.documentElement.scrollWidth > window.innerWidth + 1,
            };
        }"""
    )


def chromium_executable() -> str | None:
    """Use the installed full Chromium when the bundled headless shell is absent."""
    root = Path(os.environ.get("LOCALAPPDATA", "")) / "ms-playwright"
    candidates = sorted(root.glob("chromium-*/chrome-win64/chrome.exe"))
    return str(candidates[-1]) if candidates else None


def capture(report: dict, key: str, fn) -> None:
    try:
        report[key] = fn()
    except Exception as exc:  # keep the rest of the run alive
        report[key] = {"ERROR": f"{type(exc).__name__}: {exc}"}
        print(f"!! {key} failed: {type(exc).__name__}: {exc}", flush=True)
        traceback.print_exc()


def run() -> None:
    build()
    stage(OUT / "serve-new", WS / "dist")
    stage(OUT / "serve-old", OLD_SRC)
    new_server = serve(OUT / "serve-new", NEW_PORT)
    old_server = serve(OUT / "serve-old", OLD_PORT)
    new_url = f"http://127.0.0.1:{NEW_PORT}{BASE}"
    old_url = f"http://127.0.0.1:{OLD_PORT}{BASE}"
    print(f"new: {new_url}  old: {old_url}", flush=True)

    report: dict = {}
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chromium_executable())

        # ---------------- fresh build ----------------
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        attach_logging(page, "new/protocol")
        page.goto(f"{new_url}/protocol", wait_until="networkidle")
        page.wait_for_selector(".protocol-bookcase", timeout=15000)
        page.wait_for_timeout(1500)
        page.screenshot(path=str(OUT / "new-protocol-hero.png"))

        capture(
            report,
            "protocol_copy",
            lambda: page.evaluate(
                """() => ({
                    h1: document.querySelector('.wiki-hero h1')?.textContent,
                    lede: document.querySelector('.wiki-hero__lede')?.textContent,
                    sectionNumber: document.querySelector('.wiki-section-number')?.textContent,
                    kicker: document.querySelector('.wiki-section__heading .wiki-kicker')?.textContent,
                    title: document.querySelector('.wiki-section__heading h2')?.textContent,
                    summary: document.querySelector('.wiki-section__summary')?.textContent,
                    tabs: [...document.querySelectorAll('.protocol-bookcase__tabs button')].map(b => b.textContent),
                    indexed: document.querySelector('.protocol-bookcase__bar > p')?.textContent,
                    cardCount: document.querySelectorAll('.protocol-card').length,
                    firstCard: {
                      id: document.querySelector('.protocol-card__cover > span')?.textContent,
                      meta: document.querySelector('.protocol-card__meta')?.textContent,
                      title: document.querySelector('.protocol-card__title')?.textContent,
                      description: document.querySelector('.protocol-card__description')?.textContent,
                      footer: document.querySelector('.protocol-card__footer')?.textContent,
                    },
                    nextTitle: document.querySelector('.wiki-next--record h2')?.textContent,
                    nextLink: document.querySelector('.wiki-next__action')?.getAttribute('href'),
                })"""
            ),
        )

        show_record(page)
        page.screenshot(path=str(OUT / "new-protocol-reader.png"))
        capture(report, "protocol_metrics", lambda: metrics(page))

        scroll_inner(page, ".protocol-bookcase")
        page.screenshot(path=str(OUT / "new-protocol-bookcase.png"))

        capture(
            report,
            "dna_filter",
            lambda: (
                page.get_by_role("button", name="DNA", exact=True).click(),
                page.wait_for_timeout(700),
                scroll_inner(page, ".protocol-bookcase"),
                page.screenshot(path=str(OUT / "new-protocol-dna.png")),
                page.evaluate(
                    """() => ({
                        cards: document.querySelectorAll('.protocol-card').length,
                        decorations: document.querySelectorAll('.protocol-grid__decoration').length,
                        indexed: document.querySelector('.protocol-bookcase__bar > p')?.textContent,
                        gridBackground: getComputedStyle(document.querySelector('.protocol-grid')).backgroundColor,
                    })"""
                ),
            )[-1],
        )

        def open_modal():
            page.get_by_role("button", name="All manuals").click()
            page.wait_for_timeout(500)
            page.locator(".protocol-card").first.click()
            page.wait_for_timeout(3000)
            page.screenshot(path=str(OUT / "new-protocol-modal.png"))
            return page.evaluate(
                """() => {
                    const iframe = document.querySelector('.protocol-modal__document');
                    return {
                      open: Boolean(document.querySelector('.protocol-modal')),
                      header: document.querySelector('.protocol-modal__header h2')?.textContent,
                      toolbar: [...document.querySelectorAll('.protocol-modal__toolbar button, .protocol-modal__toolbar a')].map(el => el.textContent.trim()),
                      readout: document.querySelector('.protocol-modal__toolbar span')?.textContent,
                      iframeSrc: iframe ? iframe.getAttribute('src') : null,
                      iframeWidth: iframe ? Math.round(iframe.getBoundingClientRect().width) : null,
                      iframeHeight: iframe ? Math.round(iframe.getBoundingClientRect().height) : null,
                    };
                }"""
            )

        capture(report, "modal", open_modal)

        capture(
            report,
            "modal_closed",
            lambda: (
                page.keyboard.press("Escape"),
                page.wait_for_timeout(600),
                page.evaluate("() => !document.querySelector('.protocol-modal')"),
            )[-1],
        )
        page.close()

        # Regression: the other Wet Lab records keep their TOC card.
        for route in ("/experiments", "/safety-and-security"):
            reg = browser.new_page(viewport={"width": 1440, "height": 900})
            attach_logging(reg, f"new{route}")
            reg.goto(f"{new_url}{route}", wait_until="networkidle")
            reg.wait_for_selector(".wet-frame", timeout=15000)
            reg.wait_for_timeout(1200)
            show_record(reg)
            reg.screenshot(path=str(OUT / f"new{route.replace('/', '-')}-reader.png"))
            capture(report, f"metrics{route}", lambda reg=reg: metrics(reg))
            reg.close()

        # Narrow viewports.
        for width, name in ((900, "tablet"), (480, "phone")):
            narrow = browser.new_page(viewport={"width": width, "height": 900})
            attach_logging(narrow, f"new/protocol/{name}")
            narrow.goto(f"{new_url}/protocol", wait_until="networkidle")
            narrow.wait_for_selector(".protocol-bookcase", timeout=15000)
            narrow.wait_for_timeout(1200)
            show_record(narrow)
            scroll_inner(narrow, ".protocol-bookcase")
            narrow.screenshot(path=str(OUT / f"new-protocol-{name}.png"))
            capture(report, f"narrow_{name}", lambda narrow=narrow: metrics(narrow))
            narrow.close()

        # ---------------- previous build ----------------
        old = browser.new_page(viewport={"width": 1440, "height": 900})
        attach_logging(old, "old/protocol")
        old.goto(f"{old_url}/protocol", wait_until="networkidle")
        old.wait_for_selector(".protocol-bookcase", timeout=15000)
        old.wait_for_timeout(1500)
        old.screenshot(path=str(OUT / "old-protocol-full.png"), full_page=True)

        capture(
            report,
            "old_copy",
            lambda: old.evaluate(
                """() => ({
                    h1: document.querySelector('h1')?.textContent,
                    lede: document.querySelector('.wiki-hero__lede')?.textContent,
                    sectionNumber: document.querySelector('.protocol-library__heading > span')?.textContent,
                    kicker: document.querySelector('.protocol-library__heading > div > p')?.textContent,
                    title: document.querySelector('.protocol-library__heading h2')?.textContent,
                    summary: document.querySelectorAll('.protocol-library__heading > div > p')[1]?.textContent,
                    tabs: [...document.querySelectorAll('.protocol-bookcase__tabs button')].map(b => b.textContent),
                    indexed: document.querySelector('.protocol-bookcase__bar > p')?.textContent,
                    cardCount: document.querySelectorAll('.protocol-card').length,
                    firstCard: {
                      id: document.querySelector('.protocol-card__cover > span')?.textContent,
                      meta: document.querySelector('.protocol-card__meta')?.textContent,
                      title: document.querySelector('.protocol-card__title')?.textContent,
                      description: document.querySelector('.protocol-card__description')?.textContent,
                      footer: document.querySelector('.protocol-card__footer')?.textContent,
                    },
                })"""
            ),
        )

        capture(
            report,
            "old_dna",
            lambda: (
                old.get_by_role("button", name="DNA", exact=True).click(),
                old.wait_for_timeout(700),
                old.screenshot(path=str(OUT / "old-protocol-dna.png"), full_page=True),
                old.evaluate(
                    """() => ({
                        cards: document.querySelectorAll('.protocol-card').length,
                        decorations: document.querySelectorAll('.protocol-grid__decoration').length,
                        gridBackground: getComputedStyle(document.querySelector('.protocol-grid')).backgroundColor,
                    })"""
                ),
            )[-1],
        )

        def old_modal():
            old.get_by_role("button", name="All manuals").click()
            old.wait_for_timeout(500)
            old.locator(".protocol-card").first.click()
            old.wait_for_timeout(3000)
            old.screenshot(path=str(OUT / "old-protocol-modal.png"))
            return old.evaluate(
                """() => ({
                    open: Boolean(document.querySelector('.protocol-modal')),
                    toolbar: [...document.querySelectorAll('.protocol-modal__toolbar button, .protocol-modal__toolbar a')].map(el => el.textContent.trim()),
                    readout: document.querySelector('.protocol-modal__toolbar span')?.textContent,
                })"""
            )

        capture(report, "old_modal", old_modal)
        old.close()
        browser.close()

    new_server.shutdown()
    old_server.shutdown()
    (OUT / "report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    run()
