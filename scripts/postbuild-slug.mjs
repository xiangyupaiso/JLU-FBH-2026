import fs from "node:fs";
import path from "node:path";

const slug = process.env.VITE_TEAM_NAME || "jlu-fbh";
const distDir = path.resolve("dist");
const slugDir = path.resolve("dist", slug);

if (fs.existsSync(distDir)) {
  if (fs.existsSync(slugDir)) {
    fs.rmSync(slugDir, { recursive: true, force: true });
  }
  fs.mkdirSync(slugDir, { recursive: true });
  for (const item of fs.readdirSync(distDir)) {
    if (item !== slug) {
      fs.cpSync(path.join(distDir, item), path.join(slugDir, item), { recursive: true });
    }
  }

  // Keep the full wiki output; only skip oversized files in the Cloudflare preview upload.
  const oversizedAssets = [];
  const collectOversizedAssets = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        collectOversizedAssets(file);
      } else if (entry.isFile() && fs.statSync(file).size > 25 * 1024 * 1024) {
        oversizedAssets.push(`/${path.relative(distDir, file).split(path.sep).join("/")}`);
      }
    }
  };
  collectOversizedAssets(distDir);
  if (oversizedAssets.length) {
    fs.appendFileSync(path.join(distDir, ".assetsignore"), `${oversizedAssets.sort().join("\n")}\n`);
    console.log(`Cloudflare preview: skip ${oversizedAssets.length} oversized assets; all files are retained.`);
  }
}
