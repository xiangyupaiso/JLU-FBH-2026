"""Whole-site smoke check: every route still renders, no console errors.

Run after the /protocol migration to confirm no regression on the other records,
including the five pre-existing Wet Lab pages, which must keep their TOC card.

Usage: python _verify/smoke.py
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
PORT = 4193

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

WET_LAB = {
    "/experiments",
    "/notebook",
    "/measurement",
    "/alternative-platform",
    "/safety-and-security",
    "/protocol",
}


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
    rows = []

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chromium_executable())
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        errors: list[str] = []
        page.on(
            "console",
            lambda m: errors.append(f"{m.type}: {m.text[:160]}")
            if m.type == "error"
            else None,
        )
        page.on("pageerror", lambda e: errors.append(f"pageerror: {str(e)[:160]}"))

        for route in ROUTES:
            errors.clear()
            page.goto(f"{url}{route}", wait_until="networkidle")
            page.wait_for_timeout(1100)
            info = page.evaluate(
                """() => ({
                    title: document.title,
                    h1: document.querySelector('.wiki-hero h1, h1')?.textContent?.trim() ?? null,
                    hasOutline: Boolean(document.querySelector('.wiki-outline')),
                    bodyLength: document.body.innerText.trim().length,
                    notFound: document.body.innerText.includes('The requested URL was not found'),
                })"""
            )
            info["route"] = route
            info["consoleErrors"] = list(errors)
            info["isWetLab"] = route in WET_LAB
            rows.append(info)
            flag = "OK "
            if info["notFound"] or not info["bodyLength"] or info["consoleErrors"]:
                flag = "!! "
            print(f"{flag}{route:26} outline={info['hasOutline']!s:5} {info['title'][:44]}", flush=True)

        page.close()
        browser.close()

    server.shutdown()
    (HERE / "smoke.json").write_text(json.dumps(rows, indent=2), encoding="utf-8")
    bad = [r for r in rows if r["notFound"] or not r["bodyLength"] or r["consoleErrors"]]
    print(f"\n{len(rows) - len(bad)}/{len(rows)} routes clean")
    if bad:
        print(json.dumps(bad, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
