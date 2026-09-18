"""Read-only static server for the OLD project's prebuilt dist.

Serves C:/Users/香芋派/.trae-cn/Official-wiki/dist under the /jlu-fbh/ base the
build expects, with SPA fallback to index.html. Opens no write handle anywhere:
it is used purely as the ground-truth reference for the panel port.
"""

import functools
import http.server
import os

ROOT = r"C:\Users\香芋派\.trae-cn\Official-wiki\dist"
PREFIX = "/jlu-fbh"
PORT = 8098


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        if path.startswith(PREFIX):
            path = path[len(PREFIX) :] or "/"
        local = super().translate_path(path)
        if not os.path.exists(local) and "." not in os.path.basename(local):
            local = os.path.join(ROOT, "index.html")
        return local

    def log_message(self, *args):  # keep the job output quiet
        pass


http.server.ThreadingHTTPServer(
    ("127.0.0.1", PORT), functools.partial(Handler, directory=ROOT)
).serve_forever()
