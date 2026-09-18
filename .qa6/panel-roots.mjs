// Extracts each panel component's root className from the old TSX sources.
import { readFile } from "node:fs/promises";

const OLD = "C:/Users/香芋派/.trae-cn/Official-wiki/src/components/wiki/features/";
const FILES = [
  "ModelEvidenceFeatures.tsx",
  "SoftwareEvidenceFeatures.tsx",
  "DryLabProjectExplorers.tsx",
];

for (const file of FILES) {
  const src = await readFile(OLD + file, "utf8");
  const re = /export function (\w+)\([^)]*\)\s*\{\s*[\s\S]{0,400}?className=(?:"([^"]+)"|\{`([^`]+)`\})/g;
  console.log(`\n=== ${file} ===`);
  let m;
  while ((m = re.exec(src))) {
    console.log(`  ${m[1]}  →  ${(m[2] ?? m[3] ?? "").replace(/\s+/g, " ")}`);
  }
}
