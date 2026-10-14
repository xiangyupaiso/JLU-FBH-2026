import fs from "node:fs";
import path from "node:path";
import { resolveConfig } from "vite";

const config = await resolveConfig({}, "build");
const distDir = path.resolve(config.root, config.build.outDir);
const base = config.base;

if (fs.existsSync(distDir)) {
  // Cloudflare maps the public base path to the single Vite output tree.
  // Vite preview and GitLab/GitHub Pages already mount that tree at the base.
  const redirects = base === "/" ? [] : [
    `/ ${base} 302`,
    `${base.slice(0, -1)} ${base} 301`,
  ];

  // Keep the full wiki output; only skip oversized files in the Cloudflare preview upload.
  const oversizedAssets = [];
  const collectAssets = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        collectAssets(file);
      } else if (entry.isFile()) {
        const relativePath = path.relative(distDir, file).split(path.sep).join("/");
        if (fs.statSync(file).size > 25 * 1024 * 1024) {
          oversizedAssets.push(`/${relativePath}`);
        }
        // Canonicalize before rewriting so Cloudflare's HTML redirects keep the base.
        if (base !== "/" && entry.name.endsWith(".html")) {
          const publicPath = `${base}${relativePath.split("/").map(encodeURIComponent).join("/")}`;
          const canonicalPath = entry.name === "index.html"
            ? publicPath.slice(0, -"index.html".length)
            : publicPath.slice(0, -".html".length);
          redirects.push(`${publicPath} ${canonicalPath} 301`);
          if (entry.name === "index.html" && relativePath !== "index.html") {
            redirects.push(`${canonicalPath.slice(0, -1)} ${canonicalPath} 301`);
          }
        }
      }
    }
  };
  collectAssets(distDir);
  if (base !== "/") redirects.push(`${base}* /:splat 200`);
  fs.writeFileSync(path.join(distDir, "_redirects"), `${redirects.join("\n")}\n`);
  if (oversizedAssets.length) {
    fs.writeFileSync(path.join(distDir, ".assetsignore"), `${oversizedAssets.sort().join("\n")}\n`);
    console.log(`Cloudflare preview: skip ${oversizedAssets.length} oversized assets; all files are retained.`);
  }
}
