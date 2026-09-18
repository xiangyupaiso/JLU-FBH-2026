"""Entry-point check for /protocol.

Verifies that the new record is reachable and returnable through the navigation
the paradigm actually uses: the Wet Lab nav dropdown (desktop + mobile menu), the
closing "Next page" card on the preceding record, the record's own next card, the
document title, and browser back.

Usage: python _verify/entries.py
"""

from __future__ import annotations

import functools
import http.server
import json
import os
import socketserver
import sys
import threading
import traceback
from pathlib import Path

from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

HERE = Path(__file__).resolve().parent
BASE = "/jlu-fbh"
PORT = 4192


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


def state(page) -> dict:
    return page.evaluate(
        """() => ({
            url: location.pathname,
            title: document.title,
            h1: document.querySelector('.wiki-hero h1')?.textContent ?? null,
            hasOutline: Boolean(document.querySelector('.wiki-outline')),
            hasBookcase: Boolean(document.querySelector('.protocol-bookcase')),
        })"""
    )


def step(report: dict, key: str, fn) -> None:
    try:
        report[key] = fn()
    except Exception as exc:
        report[key] = {"ERROR": f"{type(exc).__name__}: {exc}"}
        print(f"!! {key}: {type(exc).__name__}: {exc}", flush=True)
        traceback.print_exc()
    print(f"   {key}: {json.dumps(report[key], ensure_ascii=False)[:400]}", flush=True)


def main() -> None:
    server = serve(HERE / "serve-new", PORT)
    url = f"http://127.0.0.1:{PORT}{BASE}"
    report: dict = {}

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chromium_executable())

        # --- desktop: Wet Lab dropdown must list six records ---
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(f"{url}/experiments", wait_until="networkidle")
        page.wait_for_timeout(1000)
        page.locator("button[data-nav-key='wet-lab']").hover()
        page.wait_for_timeout(800)
        page.screenshot(path=str(HERE / "entry-nav-wetlab.png"))

        step(
            report,
            "nav_cards",
            lambda: page.evaluate(
                """() => [...document.querySelectorAll(".circure-nav-panel[data-nav-panel='wet-lab'] .nav-image-card")]
                    .map(a => ({ label: a.querySelector('strong')?.textContent,
                                 small: a.querySelector('small')?.textContent,
                                 href: a.getAttribute('href') }))"""
            ),
        )

        step(
            report,
            "nav_click",
            lambda: (
                page.locator(
                    ".circure-nav-panel[data-nav-panel='wet-lab'] a.nav-image-card[href$='/protocol']"
                ).click(),
                page.wait_for_selector(".protocol-bookcase", timeout=20000),
                page.wait_for_timeout(1200),
                state(page),
            )[-1],
        )

        # --- record-to-record navigation ---
        step(
            report,
            "safety_next",
            lambda: (
                page.goto(f"{url}/safety-and-security", wait_until="networkidle"),
                page.wait_for_timeout(1200),
                page.evaluate(
                    """() => ({
                        label: document.querySelector('.wiki-next__action strong')?.textContent,
                        href: document.querySelector('.wiki-next__action')?.getAttribute('href'),
                    })"""
                ),
            )[-1],
        )

        step(
            report,
            "safety_next_click",
            lambda: (
                page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)"),
                page.wait_for_timeout(900),
                page.locator(".wiki-next__action").click(),
                page.wait_for_selector(".protocol-bookcase", timeout=20000),
                page.wait_for_timeout(1000),
                state(page),
            )[-1],
        )

        step(
            report,
            "protocol_next_click",
            lambda: (
                page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)"),
                page.wait_for_timeout(900),
                page.locator(".wiki-next__action").click(),
                page.wait_for_timeout(1500),
                state(page),
            )[-1],
        )

        step(
            report,
            "browser_back",
            lambda: (
                page.go_back(),
                page.wait_for_selector(".protocol-bookcase", timeout=20000),
                page.wait_for_timeout(1000),
                state(page),
            )[-1],
        )

        # --- deep link straight into /protocol ---
        fresh = browser.new_page(viewport={"width": 1440, "height": 900})
        step(
            report,
            "deep_link",
            lambda: (
                fresh.goto(f"{url}/protocol", wait_until="networkidle"),
                fresh.wait_for_selector(".protocol-bookcase", timeout=20000),
                fresh.wait_for_timeout(1200),
                {**state(fresh), "cards": fresh.locator(".protocol-card").count()},
            )[-1],
        )
        fresh.close()

        # --- mobile menu lists the record ---
        mobile = browser.new_page(viewport={"width": 480, "height": 900})
        step(
            report,
            "mobile_menu",
            lambda: (
                mobile.goto(f"{url}/experiments", wait_until="networkidle"),
                mobile.wait_for_timeout(900),
                mobile.locator(".mobile-menu-toggle").click(),
                mobile.wait_for_timeout(700),
                mobile.screenshot(path=str(HERE / "entry-mobile-menu.png")),
                mobile.evaluate(
                    """() => {
                        const links = [...document.querySelectorAll('.circure-mobile-menu a')];
                        const protocol = links.find(a => a.textContent.trim() === 'Protocol');
                        if (protocol) protocol.click();
                        return { found: Boolean(protocol), labels: links.map(a => a.textContent.trim()) };
                    }"""
                ),
            )[-1],
        )
        mobile.wait_for_timeout(1500)
        step(report, "mobile_menu_click", lambda: state(mobile))
        mobile.close()

        page.close()
        browser.close()

    server.shutdown()
    (HERE / "entries.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps(report, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
