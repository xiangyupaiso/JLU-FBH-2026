import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { brotliCompressSync, brotliDecompressSync, constants, deflateSync, inflateSync } from "node:zlib";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const archivePath = path.join(root, "virtual-lab", "vendor", "ispring-code.br");
const roots = [
  "public/virtual-lab/experiment4_html",
  "public/virtual-lab/experiment9-assets/ispring",
];
const presentationPage = "public/virtual-lab/experiment9-assets/ispring/index.html";
const presentationData = "@experiment9-presentation-json";
const marker = "__IGEM_EXPERIMENT9_PRESENTATION_BASE64__";
const magic = Buffer.from("VLAB1");

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function safeTarget(relativePath) {
  if (!relativePath.startsWith("public/virtual-lab/") || relativePath.includes("..") || relativePath.includes("\\")) {
    throw new Error(`Invalid archive path: ${relativePath}`);
  }
  const target = path.resolve(root, relativePath);
  if (!target.startsWith(path.join(root, "public", "virtual-lab") + path.sep)) {
    throw new Error(`Archive path escaped the virtual lab: ${relativePath}`);
  }
  return target;
}

async function codeFiles(directory) {
  const entries = await readdir(path.join(root, directory), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "data.local-only") continue;
    const relativePath = `${directory}/${entry.name}`;
    if (entry.isDirectory()) files.push(...await codeFiles(relativePath));
    else if (entry.isFile() && /\.(?:js|css|html)$/.test(entry.name) && entry.name !== "bridge.js") {
      files.push(relativePath);
    }
  }
  return files;
}

async function pack() {
  const files = (await Promise.all(roots.map(codeFiles))).flat().sort();
  const records = [];
  for (const name of files) {
    let content = await readFile(safeTarget(name));
    if (name === presentationPage) {
      const html = content.toString("utf8");
      const match = html.match(/var presInfo\s*=\s*"([^"]+)"/);
      if (!match || html.includes(marker)) throw new Error("Experiment 9 presentation data was not found");
      const json = inflateSync(Buffer.from(match[1], "base64"));
      JSON.parse(json.toString("utf8"));
      records.push({ name: presentationData, content: json });
      content = Buffer.from(html.replace(match[1], marker), "utf8");
    }
    records.push({ name, content });
  }

  const manifest = Buffer.from(JSON.stringify(records.map(({ name, content }) => ({
    name, length: content.length, sha256: sha256(content),
  }))));
  const length = Buffer.alloc(4);
  length.writeUInt32LE(manifest.length);
  const archive = brotliCompressSync(Buffer.concat([
    magic, length, manifest, ...records.map(({ content }) => content),
  ]), { params: { [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY } });
  await mkdir(path.dirname(archivePath), { recursive: true });
  await writeFile(archivePath, archive);
  console.log(`Packed ${files.length} generated files: ${archive.length} bytes`);
}

async function restore() {
  if (!existsSync(archivePath)) throw new Error(`Missing generated-code archive: ${archivePath}`);
  const data = brotliDecompressSync(await readFile(archivePath));
  if (!data.subarray(0, magic.length).equals(magic)) throw new Error("Invalid generated-code archive");
  const headerLength = data.readUInt32LE(magic.length);
  const headerEnd = magic.length + 4 + headerLength;
  const manifest = JSON.parse(data.subarray(magic.length + 4, headerEnd).toString("utf8"));
  let offset = headerEnd;
  let presentationJson;
  let count = 0;
  for (const record of manifest) {
    const content = data.subarray(offset, offset + record.length);
    offset += record.length;
    if (content.length !== record.length || sha256(content) !== record.sha256) {
      throw new Error(`Corrupt generated-code archive entry: ${record.name}`);
    }
    if (record.name === presentationData) {
      presentationJson = content;
      continue;
    }
    const target = safeTarget(record.name);
    let output = content;
    if (record.name === presentationPage) {
      if (!presentationJson) throw new Error("Missing experiment 9 presentation data");
      const encoded = deflateSync(presentationJson).toString("base64");
      const template = content.toString("utf8");
      if (!template.includes(marker)) throw new Error("Missing experiment 9 presentation placeholder");
      output = Buffer.from(template.replace(marker, encoded), "utf8");
    }
    if (!existsSync(target) || !output.equals(await readFile(target))) {
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, output);
    }
    count++;
  }
  if (offset !== data.length) throw new Error("Unexpected data at end of generated-code archive");
  console.log(`Restored ${count} generated iSpring files`);
}

const command = process.argv[2];
if (command === "pack") await pack();
else if (command === "restore") await restore();
else throw new Error("Usage: node scripts/virtual-lab-vendor.mjs pack|restore");
