import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execSync } from "node:child_process";

/**
 * iGEM Asset Manager - Comprehensive CLI for all Wiki media, PDFs, fonts & structural assets.
 * Pure Node.js stdlib (fs, path, crypto, child_process). Follows /ponytail guidelines.
 */

const ROOT_DIR = process.cwd();
const CATALOG_PATH = path.join(ROOT_DIR, "src", "data", "assets", "igem-assets-catalog.json");
const MARKDOWN_REGISTRY_PATH = path.join(ROOT_DIR, "IGEM_ASSET_REGISTRY.md");

const ASSET_EXT_MAP = {
  // Images
  ".png": "image",
  ".jpg": "image",
  ".jpeg": "image",
  ".webp": "image",
  ".svg": "image",
  ".gif": "image",
  // Documents
  ".pdf": "pdf",
  ".docx": "document",
  ".xlsx": "document",
  // Fonts
  ".woff2": "font",
  ".woff": "font",
  ".ttf": "font",
  // Structures & Scientific Data
  ".pdb": "structure",
  ".cif": "structure",
  ".pse": "structure",
  // Archives
  ".zip": "archive",
  ".tar.gz": "archive",
  // Audio & Video
  ".mp3": "audio",
  ".wav": "audio",
  ".ogg": "audio",
  ".m4a": "audio",
  ".flac": "audio",
  ".mp4": "video",
  ".webm": "video",
  ".mov": "video",
  ".m4v": "video",
  ".ogv": "video",
};

const ALL_ASSET_EXTS = new Set(Object.keys(ASSET_EXT_MAP));
const CODE_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".md", ".json", ".html"]);
const IGNORED_DIRS = new Set(["node_modules", "dist", ".git", ".yarn-cache", "tmp", ".claude", ".qa6"]);

// Size limits recommended for web hosting before upload
const SIZE_LIMITS_KB = {
  image: 1500, // 1.5 MB
  font: 300, // 300 KB
  structure: 5000, // 5 MB
  pdf: 15000, // 15 MB
  audio: 10000, // 10 MB
  archive: 20000, // 20 MB
  video: 50000, // 50 MB
};

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

function inferKind(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ASSET_EXT_MAP[ext] || "other";
}

function inferCategory(filePath) {
  const normalized = filePath.replace(/\\/g, "/").toLowerCase();
  if (normalized.includes("wetlab") || normalized.includes("wet-lab")) return "wet-lab";
  if (normalized.includes("drylab") || normalized.includes("dry-lab")) return "dry-lab";
  if (normalized.includes("engagement") || normalized.includes("human-practices") || normalized.includes("sustainability") || normalized.includes("/hp/")) return "engagement";
  if (normalized.includes("project") || normalized.includes("description") || normalized.includes("design") || normalized.includes("engineering")) return "project";
  if (normalized.includes("team") || normalized.includes("members") || normalized.includes("roster")) return "team";
  if (normalized.includes("home") || normalized.includes("story")) return "home";
  if (normalized.includes("game") || normalized.includes("virtual-lab")) return "game";
  if (normalized.includes("font")) return "typography";
  if (normalized.includes("structure")) return "dry-lab";
  return "shared";
}

const CHINESE_NAME_MAP = {
  "丝带": "ribbon-source",
  "小羊": "lamb-source",
  "层级关系示意图": "preloader-layer-diagram",
  "手": "hands-source",
  "星星": "stars-source",
  "背景": "bg-source",
  "花瓣": "petals-source",
};

function generateAssetId(relPath, filename, existingIds) {
  const ext = path.extname(filename).toLowerCase().replace(".", "");
  const stem = path.parse(filename).name;
  let base = (CHINESE_NAME_MAP[stem] || stem)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!base || base.length < 2) {
    const parentFolder = path.basename(path.dirname(relPath)).toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const shortHash = crypto.createHash("md5").update(relPath).digest("hex").slice(0, 6);
    base = `${parentFolder && parentFolder !== "-" ? parentFolder : "asset"}-${shortHash}`;
  }

  let candidate = `${base}-${ext}`;
  let counter = 1;
  while (existingIds.has(candidate)) {
    const shortHash = crypto.createHash("md5").update(relPath + counter).digest("hex").slice(0, 4);
    candidate = `${base}-${shortHash}-${ext}`;
    if (existingIds.has(candidate)) {
      candidate = `${base}-${counter++}-${ext}`;
    }
  }
  existingIds.add(candidate);
  return candidate;
}

function loadCatalog() {
  if (fs.existsSync(CATALOG_PATH)) {
    try {
      return JSON.parse(fs.readFileSync(CATALOG_PATH, "utf-8"));
    } catch {
      // Fallback
    }
  }
  return {
    meta: {
      teamId: "6056",
      teamName: "JLU-FBH",
      year: 2026,
      lastUpdated: new Date().toISOString(),
      stats: { total: 0, inUse: 0, standby: 0, deprecated: 0, byKind: {} },
    },
    assets: {},
  };
}

function saveCatalog(catalog) {
  const dir = path.dirname(CATALOG_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const stats = { total: 0, inUse: 0, standby: 0, deprecated: 0, byKind: {} };
  for (const item of Object.values(catalog.assets)) {
    stats.total++;
    if (item.status === "in-use") stats.inUse++;
    else if (item.status === "standby") stats.standby++;
    else if (item.status === "deprecated") stats.deprecated++;

    const kind = item.kind || "other";
    stats.byKind[kind] = (stats.byKind[kind] || 0) + 1;
  }

  catalog.meta.stats = stats;
  catalog.meta.lastUpdated = new Date().toISOString();

  fs.writeFileSync(CATALOG_PATH, JSON.stringify(catalog, null, 2), "utf-8");
  exportMarkdown(catalog);
}

// --- Cross-Codebase Reference Topology Search ---

function cacheCodebase() {
  const codeFiles = walkDir(ROOT_DIR, (f) => CODE_EXTS.has(path.extname(f).toLowerCase()))
    .filter((f) => !f.includes("igem-assets-catalog.json") && !f.includes("IGEM_ASSET_REGISTRY.md") && !f.includes("upload-ready") && !f.includes("package-lock.json"));

  const cached = [];
  for (const f of codeFiles) {
    try {
      const content = fs.readFileSync(f, "utf8");
      cached.push({
        file: path.relative(ROOT_DIR, f).replace(/\\/g, "/"),
        content,
        lines: content.split("\n"),
      });
    } catch {}
  }
  return cached;
}

function hasAssetMention(line, needle) {
  if (needle.includes("/") || needle.includes("\\")) {
    return line.includes(needle);
  }
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(?<=^|[^a-zA-Z0-9_-])${escaped}(?=[^a-zA-Z0-9_-]|$)`);
  return regex.test(line);
}

function analyzeCodebaseReferences(assetFiles, cachedCode = cacheCodebase(), uploadUrlByPath = new Map()) {
  const referencesMap = new Map();
  for (const f of assetFiles) {
    referencesMap.set(f, []);
  }

  for (const fullPath of assetFiles) {
    const basename = path.basename(fullPath);
    const rel = path.relative(ROOT_DIR, fullPath).replace(/\\/g, "/");
    // Code that already points at the CDN copy no longer mentions the local file name,
    // so also match the full upload URL and the `${CDN_BASE}/<file>` template form.
    const uploadUrl = uploadUrlByPath.get(rel);
    const needles = [basename, rel];
    if (uploadUrl) needles.push(uploadUrl, `}/${uploadUrl.split("/").pop()}`);

    for (const c of cachedCode) {
      if (!needles.some((n) => c.content.includes(n))) continue;

      for (let i = 0; i < c.lines.length; i++) {
        const line = c.lines[i];
        if (needles.some((n) => hasAssetMention(line, n))) {
          let matchType = "mention";
          if (line.includes("import ") || line.includes("require(")) matchType = "import";
          else if (line.includes("url(")) matchType = "css-url";
          else if (line.includes("<img") || line.includes("src=")) matchType = "html-img";
          else if (/!\[.*?\]\(.*?\)/.test(line)) matchType = "markdown-image";
          else if (/\[.*?\]\(.*?\)/.test(line)) matchType = "markdown-link";
          else if (line.includes("loadStructureFromUrl") || line.includes(".pdb")) matchType = "structure-loader";

          referencesMap.get(fullPath).push({
            file: c.file,
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

function getGitDeletedAssets() {
  const deleted = [];
  try {
    const out = execSync("git -c core.quotepath=false status --porcelain", {
      cwd: ROOT_DIR,
      encoding: "utf8",
    });
    for (const line of out.split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("D ")) {
        const p = trimmed.slice(2).trim().replace(/\\/g, "/");
        const ext = path.extname(p).toLowerCase();
        if (ALL_ASSET_EXTS.has(ext)) {
          deleted.push(p);
        }
      }
    }
  } catch {}
  return deleted;
}

// --- Main Commands ---

export function analyzeFolders(folders = ["src/assets"]) {
  const allAssetFiles = [];
  for (const folder of folders) {
    const targetDir = path.resolve(ROOT_DIR, folder);
    if (!fs.existsSync(targetDir)) continue;
    const files = walkDir(targetDir, (f) => ALL_ASSET_EXTS.has(path.extname(f).toLowerCase()));
    allAssetFiles.push(...files);
  }

  console.log(`\nFound ${allAssetFiles.length} asset file(s) across: ${folders.join(", ")}`);
  console.log("Analyzing codebase references across all components...");
  const cachedCode = cacheCodebase();
  const catalog = loadCatalog();
  const uploadUrlByPath = new Map(
    Object.values(catalog.assets)
      .filter((item) => item.uploadUrl)
      .map((item) => [item.localPath, item.uploadUrl])
  );
  const uploadUrlByMd5 = new Map(
    Object.values(catalog.assets)
      .filter((item) => item.uploadUrl && item.md5)
      .map((item) => [item.md5, item.uploadUrl])
  );
  const refsMap = analyzeCodebaseReferences(allAssetFiles, cachedCode, uploadUrlByPath);
  const existingIds = new Set(Object.keys(catalog.assets));

  let inUseCount = 0;
  let standbyCount = 0;
  let newAssetCount = 0;

  for (const fullPath of allAssetFiles) {
    const relPath = path.relative(ROOT_DIR, fullPath).replace(/\\/g, "/");
    const filename = path.basename(fullPath);
    const md5 = getMD5(fullPath);
    const stat = fs.statSync(fullPath);
    const refs = refsMap.get(fullPath) || [];
    const isReferenced = refs.length > 0;
    const kind = inferKind(fullPath);

    if (isReferenced) inUseCount++;
    else standbyCount++;

    // 1. Match by exact localPath
    let key = Object.keys(catalog.assets).find(
      (k) => catalog.assets[k].localPath === relPath
    );

    // 2. If not matched by path, match by MD5 if the original path no longer exists (renamed/moved)
    if (!key) {
      key = Object.keys(catalog.assets).find(
        (k) =>
          catalog.assets[k].md5 === md5 &&
          !fs.existsSync(path.resolve(ROOT_DIR, catalog.assets[k].localPath))
      );
    }

    if (!key) {
      newAssetCount++;
      const id = generateAssetId(relPath, filename, existingIds);
      const inheritedUrl = uploadUrlByMd5.get(md5) || null;
      catalog.assets[id] = {
        id,
        kind,
        fileName: filename,
        category: inferCategory(relPath),
        localPath: relPath,
        md5,
        fileSize: stat.size,
        uploadUrl: inheritedUrl,
        status: isReferenced ? "in-use" : "standby",
        description: "",
        keywords: [path.parse(filename).name, kind],
        references: refs,
        notes: isReferenced ? `Referenced in ${refs.length} location(s)` : (inheritedUrl ? "Standby/Mirrored asset with CDN URL" : "Standby/Unreferenced asset"),
      };
    } else {
      const item = catalog.assets[key];
      item.kind = kind;
      item.fileName = filename;
      item.localPath = relPath;
      item.fileSize = stat.size;
      item.md5 = md5;
      item.category = inferCategory(relPath);
      item.references = refs;
      if (!item.uploadUrl && uploadUrlByMd5.has(md5)) {
        item.uploadUrl = uploadUrlByMd5.get(md5);
      }
      if (item.status !== "deprecated" || isReferenced) {
        item.status = isReferenced ? "in-use" : "standby";
      }
      item.notes = isReferenced ? `Referenced in ${refs.length} location(s)` : (item.uploadUrl ? "Standby/Mirrored asset with CDN URL" : "Standby/Unreferenced asset");
    }
  }

  // Check for deleted assets in existing catalog
  let deprecatedCount = 0;
  for (const item of Object.values(catalog.assets)) {
    const fileExists = fs.existsSync(path.resolve(ROOT_DIR, item.localPath));
    if (!fileExists && !item.uploadUrl) {
      item.status = "deprecated";
      item.references = [];
      item.notes = "文件已在本地删除 (File deleted from local disk)";
      deprecatedCount++;
    }
  }

  // Also record any git-tracked assets that were deleted in working tree
  const gitDeleted = getGitDeletedAssets();
  for (const delPath of gitDeleted) {
    const filename = path.basename(delPath);
    let key = Object.keys(catalog.assets).find(
      (k) => catalog.assets[k].localPath === delPath
    );
    if (!key) {
      const id = generateAssetId(delPath, filename, existingIds);
      catalog.assets[id] = {
        id,
        kind: inferKind(delPath),
        fileName: filename,
        category: inferCategory(delPath),
        localPath: delPath,
        md5: "",
        fileSize: 0,
        uploadUrl: null,
        status: "deprecated",
        description: "",
        keywords: [path.parse(filename).name, inferKind(delPath)],
        references: [],
        notes: "已从本地工作区删除 (Deleted from local workspace)",
      };
      deprecatedCount++;
    } else {
      catalog.assets[key].status = "deprecated";
      catalog.assets[key].references = [];
      catalog.assets[key].notes = "已从本地工作区删除 (Deleted from local workspace)";
    }
  }

  saveCatalog(catalog);

  console.log("\n=======================================================");
  console.log(" iGEM Asset Analysis Summary");
  console.log("=======================================================");
  console.log(`Total scanned assets : ${allAssetFiles.length}`);
  console.log(`Newly added assets   : ${newAssetCount}`);
  console.log(`Active in-use        : ${inUseCount}`);
  console.log(`Standby / Reserved   : ${standbyCount}`);
  console.log(`Deprecated / Deleted : ${deprecatedCount}`);
  console.log(`Updated catalog      : ${path.relative(ROOT_DIR, CATALOG_PATH)}`);
  console.log(`Updated registry MD  : ${path.relative(ROOT_DIR, MARKDOWN_REGISTRY_PATH)}`);
  console.log("=======================================================\n");

  return { total: allAssetFiles.length, inUse: inUseCount, standby: standbyCount, deprecated: deprecatedCount };
}

export function analyzeFolder(targetFolder = "src/assets") {
  return analyzeFolders([targetFolder]);
}

export function scanAllProjectAssets() {
  console.log("\n--- Comprehensive Scanning of All Project Assets ---");
  const scanDirs = ["src/assets", "public/assets", "文案集", "public/game-assets", "public/virtual-lab", "background", "loading"];
  return analyzeFolders(scanDirs);
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
  console.log(`Successfully updated uploadUrl for ${updatedCount} asset(s).`);
}

export function exportUploadList(outputJsonPath = "upload-batch-list.json") {
  const catalog = loadCatalog();
  const pending = [];

  for (const item of Object.values(catalog.assets)) {
    if (!item.uploadUrl && item.status !== "deprecated") {
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
        kind: item.kind,
        currentFile: item.fileName,
        localPath: item.localPath,
        suggestedUploadName: sanitizedName,
        status: item.status,
        category: item.category,
        sizeKB: (item.fileSize / 1024).toFixed(1),
        notes: item.fileSize > (SIZE_LIMITS_KB[item.kind] || 1500) * 1024 ? "⚠️ EXCEEDS RECOMMENDED SIZE" : "OK",
      });
    }
  }

  fs.writeFileSync(outputJsonPath, JSON.stringify(pending, null, 2), "utf-8");
  console.log(`Exported ${pending.length} pending asset(s) to ${outputJsonPath}`);
}

export function exportMarkdown(catalog = loadCatalog()) {
  const lines = [
    "# iGEM Wiki 全资产主索引库 (Master Asset Registry)",
    "",
    "> 本文件是团队 Wiki **所有媒体与非源码资产（图片、PDF 文档、字体、3D 结构数据、音视频）**的本地单一真理来源 (Single Source of Truth)。",
    "> 所有需要部署上线的静态资源均需通过官方工具上传，并在此结构化登记。无论当前页面是否立即引用，**所有已上传或待用资产均有迹可循、全队随时检索复用、永不丢失**。",
    "",
    "## 一、资产库统计",
    "",
    `- **队伍编号 (Team ID)**: ${catalog.meta.teamId} (${catalog.meta.teamName})`,
    `- **统计时间戳**: ${catalog.meta.lastUpdated}`,
    `- **总资产数量**: ${catalog.meta.stats.total}`,
    `- **🟢 在用资产 (in-use)**: ${catalog.meta.stats.inUse} *(代码/文案中正被引用)*`,
    `- **🟡 备用资产 (standby)**: ${catalog.meta.stats.standby} *(已就绪或已上传，保留供后续页面选用)*`,
    `- **⚪ 弃用资产 (deprecated)**: ${catalog.meta.stats.deprecated} *(已从本地删除或已弃用)*`,
    "",
    "### 类型细分统计",
    "",
    "| 类型 | 标识 | 说明 | 数量 |",
    "| :--- | :---: | :--- | :---: |",
  ];

  const kindDesc = {
    image: "🖼️ 图片/图表 (PNG, JPG, WebP, SVG)",
    pdf: "📄 PDF 文档/手册/报告",
    font: "🔤 Web 字体 (woff2, woff, ttf)",
    structure: "🧬 3D 分子/生物结构 (pdb, cif, pse)",
    audio: "🎵 音频/音效 (mp3, wav)",
    archive: "📦 压缩包/附件 (zip)",
    video: "🎬 视频 (需走 video.igem.org)",
    other: "📁 其他",
  };

  for (const [k, count] of Object.entries(catalog.meta.stats.byKind || {})) {
    lines.push(`| \`${k}\` | ${kindDesc[k] || k} | 静态资源 | ${count} |`);
  }

  lines.push("", "---", "", "## 二、全资产明细表", "");
  lines.push(
    "| 状态 | 类别 | 分类 | 文件名 / ID | 本地路径 | 体积 (KB) | 官方静态 CDN 链接 | 引用位置 | 描述与标签 |",
    "| :--- | :---: | :--- | :--- | :--- | :---: | :--- | :---: | :--- |"
  );

  const statusEmoji = {
    "in-use": "🟢 在用",
    standby: "🟡 备用",
    deprecated: "⚪ 弃用",
  };

  const assets = Object.values(catalog.assets).sort((a, b) => {
    if (a.status !== b.status) {
      const order = { "in-use": 1, standby: 2, deprecated: 3 };
      return (order[a.status] || 9) - (order[b.status] || 9);
    }
    if (a.kind !== b.kind) return a.kind.localeCompare(b.kind);
    return a.fileName.localeCompare(b.fileName);
  });

  for (const item of assets) {
    const badge = statusEmoji[item.status] || item.status;
    const urlLink = item.uploadUrl
      ? `[CDN 链接](${item.uploadUrl})`
      : item.status === "deprecated"
      ? "*已弃用*"
      : "*待上传*";
    const refCount = item.references ? item.references.length : 0;
    const desc = item.notes || item.description || (item.keywords && item.keywords.join(", ")) || "-";
    const sizeKB = item.fileSize > 0 ? (item.fileSize / 1024).toFixed(1) : "-";
    lines.push(
      `| ${badge} | \`${item.kind}\` | \`${item.category}\` | **${item.fileName}**<br><sub>\`${item.id}\`</sub> | \`${item.localPath}\` | ${sizeKB} | ${urlLink} | ${refCount} | ${desc} |`
    );
  }

  lines.push("", "---", "", "## 三、全队协同与维护准则", "");
  lines.push("1. **上传前先检索**：在制作或上传新素材前，先在本文档中按关键词（如 `sdg`, `trop2`, `protocol`, `apparatus`）检索，若已有 🟡 备用资源，直接使用其 CDN 链接，严禁重复上传。");
  lines.push("2. **全部非源码资产必须登记**：除图片外，所有的 PDF 协议、调查问卷、3D 结构文件（PDB）、字体等均必须通过官方途径托管并在本库登记。");
  lines.push("3. **大文件体积红线**：PDF > 15MB 必须极限压缩或分卷；图片 > 1.5MB 必须转为 WebP；视频必须上传 PeerTube (`video.igem.org`)。");
  lines.push("4. **永不物理删除**：页面改版撤下的图片/PDF 统一转为 🟡 备用，已从本地删除的文件标记为 ⚪ 弃用，保留在表中供溯源与复用。");
  lines.push("");

  fs.writeFileSync(MARKDOWN_REGISTRY_PATH, lines.join("\n"), "utf-8");
}

export function auditGit() {
  const catalog = loadCatalog();
  console.log("\n=======================================================");
  console.log(" iGEM All-Asset Safety & Git Defense Audit");
  console.log("=======================================================");
  let missingUrls = 0;
  let largeFiles = [];

  for (const item of Object.values(catalog.assets)) {
    if (!item.uploadUrl && item.status === "in-use") {
      missingUrls++;
    }
    const limitKB = SIZE_LIMITS_KB[item.kind] || 1500;
    if (item.fileSize > limitKB * 1024) {
      largeFiles.push({
        path: item.localPath,
        kind: item.kind,
        sizeMB: (item.fileSize / 1024 / 1024).toFixed(2),
        limitMB: (limitKB / 1024).toFixed(1),
      });
    }
  }

  console.log(`Active in-use assets missing official CDN upload: ${missingUrls}`);
  console.log(`Assets exceeding web size recommendations      : ${largeFiles.length}`);

  if (largeFiles.length > 0) {
    console.log("\n[OVERSIZED ASSETS - MUST COMPRESS BEFORE UPLOAD / STRIP FROM GIT]:");
    for (const lf of largeFiles) {
      console.log(` - [${lf.kind.toUpperCase()}] ${lf.path}: ${lf.sizeMB} MB (Recommended: < ${lf.limitMB} MB)`);
    }
  }
  console.log("=======================================================\n");
}

// --- CLI Execution ---

const args = process.argv.slice(2);
const command = args[0] || "scan-all";

if (command === "analyze") {
  analyzeFolder(args[1] || "src/assets");
} else if (command === "scan-all") {
  scanAllProjectAssets();
} else if (command === "update-urls") {
  if (!args[1]) {
    console.error("Usage: node scripts/igem-asset-manager.mjs update-urls <mapping.json>");
  } else {
    updateUrls(args[1]);
  }
} else if (command === "export-upload-list") {
  exportUploadList(args[1] || "upload-batch-list.json");
} else if (command === "export-markdown") {
  exportMarkdown();
  console.log(`Exported markdown to: ${MARKDOWN_REGISTRY_PATH}`);
} else if (command === "audit") {
  auditGit();
} else {
  console.log(`
Usage: node scripts/igem-asset-manager.mjs <command> [args]

Commands:
  scan-all               Scan all standard asset directories across the repository (default).
  analyze [dir]          Scan folder, analyze codebase references, and update asset catalog.
  update-urls <mapping>  Update uploaded CDN URLs from a JSON mapping file.
  export-upload-list     Generate pending upload batch list with sanitized filenames.
  export-markdown        Regenerate human-readable IGEM_ASSET_REGISTRY.md.
  audit                  Run safety audit on media size and missing upload URLs.
`);
}
