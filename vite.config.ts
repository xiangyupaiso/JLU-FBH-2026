import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { stringToSlug } from "./src/utils/stringToSlug";

/**
 * The app stylesheet (~700 kB) would otherwise block the first paint, and with
 * it the inline page loader in index.html. Load it with the print-media swap
 * instead; src/utils/pageLoader.ts keeps the loader up until it has applied.
 */
function nonBlockingAppCss(): Plugin {
  return {
    name: "non-blocking-app-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler: (html) =>
        html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
          `<link rel="stylesheet" crossorigin href="$1" media="print" data-deferred-css onload="this.media='all'"><noscript><link rel="stylesheet" href="$1"></noscript>`,
        ),
    },
  };
}

/**
 * Ensures requests to root `/` or `/${slug}` without trailing slash are automatically
 * redirected to `/${slug}/` with HTTP 302, matching official Nginx / GitLab Pages behavior.
 */
function autoTrailingSlashPlugin(slug: string): Plugin {
  return {
    name: "auto-trailing-slash",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathOnly = (req.url || "").split("?")[0];
        if (pathOnly === `/${slug}` || pathOnly === "/") {
          const query = req.url && req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
          res.writeHead(302, { Location: `/${slug}/${query}` });
          res.end();
          return;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathOnly = (req.url || "").split("?")[0];
        if (pathOnly === `/${slug}` || pathOnly === "/") {
          const query = req.url && req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
          res.writeHead(302, { Location: `/${slug}/${query}` });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default () => {
  const env = loadEnv("dev", process.cwd());
  const slug = stringToSlug(env.VITE_TEAM_NAME || "jlu-fbh");
  return defineConfig({
    base: `/${slug}/`,
    plugins: [react(), nonBlockingAppCss(), autoTrailingSlashPlugin(slug)],
    optimizeDeps: {
      entries: ["index.html", "src/**/*.{ts,tsx,js,jsx}"],
    },
  });
};
