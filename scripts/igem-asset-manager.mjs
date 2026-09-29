import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

/**
 * iGEM Asset Manager - Minimalist CLI for managing Wiki media assets & URLs.
 * Pure Node.js stdlib (fs, path, crypto). Follows /ponytail guidelines.
 */

const ROOT_DIR = process.cwd();
const CATALOG_PATH = path.join(ROOT_DIR, "src", "data", "assets", "igem-assets-catalog.json");
const MARKDOWN_REGISTRY_PATH = path.join(ROOT_DIR, "IGEM_ASSET_REGISTRY.md");

const MEDIA_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".pdf", ".mp4", ".woff2", ".woff"]);
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".md", ".json", ".html"]);
const IGNORED_DIRS = new Set(["node_modules", "dist", ".git", ".yarn-cache", "tmp"]);

// --- Utility Functions ---

function getMD5(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    return crypto.createHash("md5").update(buffer).digest("hex");
  } catch {
    return "";
  }
}

function walkDir(dir, filterFn, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, filterFn, fileList);
    } else if (filterFn(fullPath)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function loadCatalog() {
  if (fs.existsSync(CATALOG_PATH)) {
    try {
      return JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
    } catch {
      // Fallback if corrupt
    }
  }
  return {
    meta: {
      teamId: "6056",
      teamName: "JLU-FBH",
      year: 2026,
      lastUpdated: new Date().toISOString(),
      stats: { total: 0, inUse: 0, standby: 0, deprecated: 0 },
    },
    assets: {},
  };
}

function saveCatalog(catalog) {
  const dir = path.dirname(CATALOG_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const stats = { total: 0, inUse: 0, standby: 0, deprecated: 0 };
  for (const item of Object.values(catalog.assets)) {
    stats.total++;
    if (item.status === "in-use") stats.inUse++;
    else if (item.status === "standby") stats.standby++;
    else if (item.status === "deprecated") stats.deprecated++;
  }
  catalog.meta.stats = stats;
  catalog.meta.lastUpdated = new Date().toISOString();

  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), "utf-8");
  exportMarkdown(catalog);
}

function inferCategory(filePath) {
  const normalized = filePath.replace(/\\/g, "/").toLowerCase();
  if (normalized.includes("wetlab") || normalized.includes("wet-lab")) return "wet-lab";
  if (normalized.includes("drylab") || normalized.includes("dry-lab")) return "dry-lab";
  if (normalized.includes("engagement") || normalized.includes("human-practices") || normalized.includes("sustainability")) return "engagement";
  if (normalized.includes("project") || normalized.includes("description") || normalized.includes("design")) return "project";
  if (normalized.includes("team") || normalized.includes("members") || normalized.includes("roster")) return "team";
  if (normalized.includes("home") || normalized.includes("story")) return "home";
  if (normalized.includes("game")) return "game";
  return "shared";
}

// --- Analysis & Topology ---

function analyzeCodebaseReferences(mediaFiles) {
  const codeFiles = walkDir(ROOT_DIR, (f) => CODE_EXTS.has(path.extname(f).toLowerCase()));
  const referencesMap = new Map(); // mediaRelPath -> Array<{ file, line, text, type }>

  for (const m of mediaFiles) {
    referencesMap.set(m, []);
  }

  // Pre-index media filenames for fast matching
  const mediaLookup = [];
  for (const m of mediaFiles) {
    const rel = path.relative(ROOT_DIR, m).replace(/\\/g, "/");
    const basename = path.basename(m);
    const stem = path.parse(m).name;
    mediaLookup.push({ fullPath: m, rel, basename, stem });
  }

  for (const codeFile of codeFiles) {
    const codeRel = path.relative(ROOT_DIR, codeFile).replace(/\\/g, "/");
    // Don't search catalog itself or generated markdown
    if (codeRel.includes("igem-assets-catalog.json") || codeRel.includes("IGEM_ASSET_REGISTRY.md")) continue;

    let content;
    try {
      content = fs.readFileSync(codeFile, "utf-8");
    } catch {
      continue;
    }

    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (const item of mediaLookup) {
        let matched = false;
        let matchType = "mention";

        if (line.includes(item.basename)) {
          matched = true;
          if (line.includes("import ") || line.includes("require(")) matchType = "import";
          else if (line.includes("url(")) matchType = "css-url";
          else if (line.includes("<img") || line.includes("src=")) matchType = "html-img";
          else if (/!\[.*?\]\(.*?\)/.test(line)) matchType = "markdown-image";
        } else if (line.includes(item.rel)) {
          matched = true;
          matchType = "path-reference";
        }

        if (matched) {
          referencesMap.get(item.fullPath).push({
            file: codeRel,
            line: i + 1,
            text: line.trim().slice(0, 140),
            type: matchType,
          });
        }
      }
    }
  }

  return referencesMap;
}

// --- Command Handlers ---

export function analyzeFolder(targetFolder = "src/assets") {
  const targetDir = path.resolve(ROOT_DIR, targetFolder);
  if (!fs.existsSync(targetDir)) {
    console.error(`Target directory not found: ${targetFolder}`);
    return;
  }

  console.log(`\nScanning media assets in: ${targetFolder} ...`);
  const mediaFiles = walkDir(targetDir, (f) => MEDIA_EXTS.has(path.extname(f).toLowerCase()));
  console.log(`Found ${mediaFiles.length} media file(s). Analyzing codebase references...`);

  const refsMap = analyzeCodebaseReferences(mediaFiles);
  const catalog = loadCatalog();

  let referencedCount = 0;
  let standbyCount = 0;

  for (const fullPath of mediaFiles) {
    const relPath = path.relative(ROOT_DIR, fullPath).replace(/\\/g, "/");
    const filename = path.basename(fullPath);
    const md5 = getMD5(fullPath);
    const stat = fs.statSync(fullPath);
    const refs = refsMap.get(fullPath) || [];
    const isReferenced = refs.length > 0;

    if (isReferenced) referencedCount++;
    else standbyCount++;

    // Find existing by md5 or filename
    let key = Object.keys(catalog.assets).find(
      (k) => catalog.assets[k].md5 === md5 || catalog.assets[k].fileName === filename
    );

    if (!key) {
      key = filename.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
      catalog.assets[key] = {
        id: key,
        fileName: filename,
        category: inferCategory(relPath),
        localPath: relPath,
        md5,
        fileSize: stat.size,
        uploadUrl: null,
        status: isReferenced ? "in-use" : "standby",
        description: "",
        keywords: [path.parse(filename).name],
        references: refs,
        notes: isReferenced ? `Referenced in ${refs.length} location(s)` : "Standby/Unreferenced asset",
      };
    } else {
      const item = catalog.assets[key];
      item.localPath = relPath;
      item.fileSize = stat.size;
      item.references = refs;
      if (!item.status || item.status === "in-use" || item.status === "standby") {
        item.status = isReferenced ? "in-use" : "standby";
      }
    }
  }

  saveCatalog(catalog);

  console.log("\n=======================================================");
  console.log(` Scan & Analysis Summary`);
  console.log("=======================================================");
  console.log(`Total scanned assets : ${mediaFiles.length}`);
  console.log(`Active in-use        : ${referencedCount}`);
  console.log(`Standby / Unreferenced: ${standbyCount}`);
  console.log(`Updated catalog      : ${path.relative(ROOT_DIR, CATALOG_PATH)}`);
  console.log(`Updated registry MD  : ${path.relative(ROOT_DIR, MARKDOWN_REGISTRY_PATH)}`);
  console.log("=======================================================\n");

  return { total: mediaFiles.length, inUse: referencedCount, standby: standbyCount };
}

export function updateUrls(mappingPath) {
  if (!fs.existsSync(mappingPath)) {
    console.error(`Mapping file not found: ${mappingPath}`);
    return;
  }

  const mapping = JSON.parse(fs.readFileSync(mappingPath, "utf-8"));
  const catalog = loadCatalog();
  let updatedCount = 0;

  for (const [keyOrFilename, url] of Object.entries(mapping)) {
    const entry =
      catalog.assets[keyOrFilename] ||
      Object.values(catalog.assets).find(
        (a) => a.fileName === keyOrFilename || a.localPath.endsWith(keyOrFilename)
      );

    if (entry) {
      entry.uploadUrl = url;
      if (entry.status !== "deprecated") {
        entry.status = entry.references && entry.references.length > 0 ? "in-use" : "standby";
      }
      updatedCount++;
    } else {
      console.warn(`Asset not matched in catalog: ${keyOrFilename}`);
    }
  }

  saveCatalog(catalog);
  console.log(`Updated uploadUrl for ${updatedCount} asset(s).`);
}

export function exportMarkdown(catalog = loadCatalog()) {
  const lines = [
    "# iGEM Wiki 媒体资产主索引库 (Media Asset Registry)",
    "",
    "> 本文件是团队 Wiki 媒体资源的**本地单一真理来源 (Single Source of Truth)**。",
    "> 所有上传至 `uploads.igem.org`（CDN: `static.igem.wiki`）的静态资源必须在此登记，确保**无论当前是否立即引用，已上传资产永不丢失**，方便全队随时检索复用。",
    "",
    "## 资产库统计",
    "",
    `- **队伍编号 (Team ID)**: ${catalog.meta.teamId} (${catalog.meta.teamName})`,
    `- **最后更新时间**: ${catalog.meta.lastUpdated}`,
    `- **总资产数量**: ${catalog.meta.stats.total}`,
    `- **在用资产 (in-use)**: ${catalog.meta.stats.inUse}`,
    `- **备用资产 (standby)**: ${catalog.meta.stats.standby} *(已上传或就绪，保留备用)*`,
    `- **弃用资产 (deprecated)**: ${catalog.meta.stats.deprecated}`,
    "",
    "---",
    "",
    "## 资产明细表",
    "",
    "| 状态 | 分类 | 资产 ID / 文件名 | 本地路径 | 官方 CDN 路径 (static.igem.wiki) | 引用数 | 描述 / 关键词 |",
    "| :--- | :--- | :--- | :--- | :--- | :---: | :--- |",
  ];

  const statusEmoji = {
    "in-use": "🟢 在用",
    standby: "🟡 备用",
    deprecated: "⚪ 弃用",
  };

  const assets = Object.values(catalog.assets).sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.fileName.localeCompare(b.fileName);
  });

  for (const item of assets) {
    const badge = statusEmoji[item.status] || item.status;
    const urlLink = item.uploadUrl ? `[CDN 链接](${item.uploadUrl})` : "*待上传*";
    const refCount = item.references ? item.references.length : 0;
    const desc = item.description || item.keywords.join(", ") || "-";
    lines.push(
      `| ${badge} | \`${item.category}\` | **${item.fileName}**<br><sub>\`${item.id}\`</sub> | \`${item.localPath}\` | ${urlLink} | ${refCount} | ${desc} |`
    );
  }

  lines.push("", "---", "", "## 协作与维护指南", "");
  lines.push("1. **新图入库**：美工或队员新增图片后，运行 `node scripts/igem-asset-manager.mjs analyze <文件夹路径>` 自动入库并分析引用。");
  lines.push("2. **官方上传**：将整理好的图片批量上传至 `uploads.igem.org`，获取官方 CDN URL。");
  lines.push("3. **回填登记**：运行 `node scripts/igem-asset-manager.mjs update-urls <mapping.json>` 批量回填 URL。");
  lines.push("4. **备用资产复用**：若某张图当前页面暂未使用（状态为 🟡 备用），它仍完整记录在表中。其他队员开发新页面需要类似图表时，可直接查表复用，避免重复上传。");
  lines.push("");

  fs.writeFileSync(MARKDOWN_REGISTRY_PATH, lines.join("\n"), "utf-8");
}

export function auditGit() {
  const catalog = loadCatalog();
  console.log("\n--- iGEM Media Asset & Git Safety Audit ---");
  let missingUrls = 0;
  let largeFiles = 0;

  for (const item of Object.values(catalog.assets)) {
    if (!item.uploadUrl && item.status === "in-use") {
      missingUrls++;
    }
    if (item.fileSize > 1.5 * 1024 * 1024) {
      largeFiles++;
      console.warn(`[WARN] Large file (>1.5MB): ${item.localPath} (${(item.fileSize / 1024 / 1024).toFixed(2)} MB)`);
    }
  }

  console.log(`Missing uploadUrl for in-use assets: ${missingUrls}`);
  console.log(`Files > 1.5MB: ${largeFiles}`);
  console.log("-------------------------------------------\n");
}

export function exportUploadList(outputJsonPath = "upload-batch-list.json") {
  const catalog = loadCatalog();
  const pending = [];

  for (const item of Object.values(catalog.assets)) {
    if (!item.uploadUrl) {
      // Suggest sanitized name
      const ext = path.extname(item.fileName).toLowerCase();
      const stem = path.parse(item.fileName).name;
      const sanitizedName =
        stem
          .toLowerCase()
          .replace(/[\s_]+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
          .replace(/-+/g, "-") + ext;

      pending.push({
        id: item.id,
        currentFile: item.fileName,
        localPath: item.localPath,
        suggestedUploadName: sanitizedName,
        status: item.status,
        category: item.category,
        sizeKB: (item.fileSize / 1024).toFixed(1),
      });
    }
  }

  fs.writeFileSync(outputJsonPath, JSON.stringify(pending, null, 2), "utf-8");
  console.log(`Exported ${pending.length} pending asset(s) to ${outputJsonPath}`);
  console.log(`Tip: Upload these files to uploads.igem.org, then create a mapping JSON to run: node scripts/igem-asset-manager.mjs update-urls <mapping.json>`);
}

// --- CLI Execution ---

const args = process.argv.slice(2);
const command = args[0] || "analyze";

if (command === "analyze") {
  analyzeFolder(args[1] || "src/assets");
} else if (command === "update-urls") {
  if (!args[1]) {
    console.error("Usage: node scripts/igem-asset-manager.mjs update-urls <mapping.json>");
  } else {
    updateUrls(args[1]);
  }
} else if (command === "export-markdown") {
  exportMarkdown();
  console.log(`Exported markdown to: ${MARKDOWN_REGISTRY_PATH}`);
} else if (command === "export-upload-list") {
  exportUploadList(args[1] || "upload-batch-list.json");
} else if (command === "audit") {
  auditGit();
} else {
  console.log(`
Usage: node scripts/igem-asset-manager.mjs <command> [args]

Commands:
  analyze [dir]          Scan folder, analyze codebase references, and update asset catalog.
  update-urls <mapping>  Update uploaded CDN URLs from a JSON mapping file.
  export-upload-list     Generate pending upload batch list with sanitized filenames.
  export-markdown        Regenerate human-readable IGEM_ASSET_REGISTRY.md.
  audit                  Run safety audit on media size and missing upload URLs.
`);
}
