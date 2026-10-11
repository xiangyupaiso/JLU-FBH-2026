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
}
