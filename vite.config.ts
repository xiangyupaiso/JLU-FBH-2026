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

// https://vitejs.dev/config/
export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `/${stringToSlug(env.VITE_TEAM_NAME)}/`,
    plugins: [react(), nonBlockingAppCss()],
    optimizeDeps: {
      entries: ["index.html", "src/**/*.{ts,tsx,js,jsx}"],
    },
  });
};
