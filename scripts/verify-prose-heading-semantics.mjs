import assert from "node:assert/strict";
import { readFile, readdir, writeFile, unlink } from "node:fs/promises";
import { join } from "node:path";
import ts from "typescript";
import { build } from "esbuild";
import { renderToStaticMarkup } from "react-dom/server";

const source = await readFile("src/components/wiki/WikiRoutePage.tsx", "utf8");
const ast = ts.createSourceFile("WikiRoutePage.tsx", source, ts.ScriptTarget.Latest, true);
const renderer = ast.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === "renderProseParagraphs");
assert(renderer);
const result = await build({
  stdin: { contents: `import { linkify } from './src/components/wiki/proseInline';\nexport ${renderer.getText(ast)}`,
    loader: "tsx", resolveDir: process.cwd() },
  bundle: true, write: false, format: "esm", platform: "node", packages: "external", jsx: "automatic",
});
const temporary = new URL("../.prose-heading-verification.mjs", import.meta.url);
try {
  await writeFile(temporary, result.outputFiles[0].text);
  const { renderProseParagraphs } = await import(temporary.href);
  let checked = 0;
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) { await visit(path); continue; }
      if (!path.endsWith(".ts")) continue;
      const file = ts.createSourceFile(path, await readFile(path, "utf8"), ts.ScriptTarget.Latest, true);
      function walk(node) {
        if (ts.isPropertyAssignment(node) && node.name.text === "paragraphs" && ts.isArrayLiteralExpression(node.initializer)) {
          for (const paragraph of node.initializer.elements) {
            if (!ts.isStringLiteralLike(paragraph) || !/^\*\*[^*]+\*\*(?:\s*\[\d+\])*\s*$/.test(paragraph.text)) continue;
            const html = renderToStaticMarkup(renderProseParagraphs([paragraph.text]));
            assert(html.startsWith("<p>"), `Prose promoted to heading: ${path}: ${paragraph.text}`);
            assert(html.includes("<strong>"));
            assert(!html.includes("wiki-protocol-step-subheading"));
            checked++;
          }
        }
        ts.forEachChild(node, walk);
      }
      walk(file);
    }
  }
  await visit("src/data");
  assert(checked > 100);
  assert(!source.includes("subheadMatch"));
  const entrepreneurship = await readFile("src/data/engagement/entrepreneurshipPage.ts", "utf8");
  assert(/type:\s*"heading",\s*level:\s*4,\s*title:\s*"Risks in Vaccine Candidate Identity and Functional Validation"/.test(entrepreneurship));
  console.log(`Prose semantics verified: ${checked} bold paragraphs remain paragraphs; genuine headings are explicit.`);
} finally {
  await unlink(temporary).catch(() => {});
}
