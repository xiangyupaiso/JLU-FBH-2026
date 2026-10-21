import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve, join } from 'node:path';
import { transformSync } from 'esbuild';

const require = createRequire(import.meta.url);
const root = resolve(process.argv[2] ?? '.');

const registryText = readFileSync(resolve(root, '../ASSET_REGISTRY.md'), 'utf8');
const registry = new Set(
  registryText.split('\n')
    .filter((line) => line.startsWith('|') && line.includes('public/game-assets/assets/'))
    .flatMap((line) => Array.from(line.matchAll(/\((https:\/\/static\.igem\.wiki\/[^)]+)\)/g), (match) => match[1])),
);

const strip = (s) => s.replace(/^import[^;]*;$/gm, '');

const bundle = [
  strip(readFileSync(join(root, 'src/data/assetUrls.ts'), 'utf8')),
  strip(readFileSync(join(root, 'src/data/assets.ts'), 'utf8')),
  strip(readFileSync(join(root, 'src/data/generatedAssets.ts'), 'utf8')),
  'module.exports = { assetUrl, getSceneAssetPath, getCharacterAssetPath, getBossAssetPath, ALL_RUNTIME_ASSET_PATHS, ASSET_URLS };',
].join('\n');

const tmp = join(root, 'scripts/.tmp');
mkdirSync(tmp, { recursive: true });
const cjs = join(tmp, 'runtime-check.cjs');
writeFileSync(cjs, transformSync(bundle, { loader: 'ts', format: 'cjs' }).code);
const api = require(cjs);

/** Real call sites per hero perspective, as wired in VisualNovel.tsx. */
const HERO_PERSPECTIVE = { child: 'child', adult: 'adult', elder: 'elder' };

const problems = [];
const seen = new Set();
const check = (label, url) => {
  if (!url) { problems.push(`NULL   ${label}`); return; }
  if (!url.startsWith('https://static.igem.wiki/teams/6056/')) { problems.push(`NONCDN ${label} -> ${url}`); return; }
  if (!registry.has(url)) { problems.push(`NOREG  ${label} -> ${url}`); return; }
  seen.add(url);
};

console.log(`ASSET_URLS entries            : ${Object.keys(api.ASSET_URLS).length}`);
console.log(`preload URLs                  : ${api.ALL_RUNTIME_ASSET_PATHS.length}`);

// ---- scenes used by every section ----
for (const name of [
  '大脑记忆中枢', '乳腺主城（正常）', '乳腺主城（黑雾笼罩）', '卧室', '客厅', '家庭客厅', '厨房',
  '妈妈的卧室', '书房', '公园', '职场办公室', '酒店包厢', '小区花园', '正规医院', '社区医院',
  '三甲医院', '体检中心', '办公室', '家里', '医院', '社区', '碎片化记忆中枢',
  '生信筛选研究像素背景图', '环状 RNA 载体像素背景图', '免疫通路像素背景图',
  '多癌种拓展平台像素背景图', '激活的碎片化记忆中枢', '结尾页',
]) check(`scene:${name}`, api.getSceneAssetPath(name));

// ---- every 【立绘：X / Y】 pair in the data, resolved for the perspective that
// ---- actually owns it (a child's 焦虑 is not a child's portrait) ----
const { readdirSync, statSync } = await import('node:fs');
const walk = (d) =>
  readdirSync(d).flatMap((n) => {
    const p = join(d, n);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.ts') || p.endsWith('.tsx') ? [p] : [];
  });

const pairs = new Map(); // "role\0state" -> set(perspectives|'any')
for (const f of walk(join(root, 'src'))) {
  const t = readFileSync(f, 'utf8');
  // Track which perspective key we are inside when reading stories.ts
  const lines = t.split('\n');
  let ctx = f.match(/(?:^|[\\/])(child|adult|elder)Stories(?:Zh)?\.ts$/)?.[1] ?? 'any';
  for (const line of lines) {
    const persp = line.match(/^\s{2}"?(child|adult|elder)"?:\s*\{/);
    if (persp) ctx = persp[1];
    for (const m of line.matchAll(/【立绘[：:]\s*([^\]】]+)】/g)) {
      for (const part of m[1].split(/[、,，]/)) {
        const pm = part.match(/^(.+?)\s*\/\s*(.+?)\s*$/);
        if (!pm) continue;
        const key = `${pm[1].trim()}\u0000${pm[2].trim()}`;
        if (!pairs.has(key)) pairs.set(key, new Set());
        pairs.get(key).add(ctx);
      }
    }
  }
}

console.log(`【立绘】 pairs found           : ${pairs.size}`);
for (const [key, perspectives] of pairs) {
  const [role, state] = key.split('\u0000');
  if (role === '主角') {
    const own = [...perspectives].filter((p) => p !== 'any');
    if (own.length === 0) {
      // hero portrait outside the story tables (TutorialGuide default) -> adult
      check(`hero:${state}/adult-default`, api.getCharacterAssetPath(role, state, HERO_PERSPECTIVE.adult));
    } else {
      for (const p of own) check(`hero:${state}/${p}`, api.getCharacterAssetPath(role, state, HERO_PERSPECTIVE[p]));
    }
  } else {
    check(`pair:${role}/${state}`, api.getCharacterAssetPath(role, state));
  }
}

// ---- boss portraits, only the states the source project actually shipped ----
for (const id of ['breastLump', 'lymphNode', 'nippleRetraction', 'nippleDischarge', 'skinDimple', 'orangePeel']) {
  for (const st of ['狰狞', '虚弱', '嚣张']) {
    const r = api.getBossAssetPath(id, st);
    const shipped = ['breastLump', 'lymphNode'].includes(id)
      ? ['狰狞', '虚弱', '嚣张']
      : ['狰狞', '虚弱'];
    if (shipped.includes(st)) check(`bossid:${id}/${st}`, r);
    else if (r) problems.push(`EXTRA  bossid:${id}/${st} unexpectedly resolves`);
  }
}

// ---- preload ----
api.ALL_RUNTIME_ASSET_PATHS.forEach((u, i) => check(`preload[${i}]`, u));

console.log(`\ndistinct official URLs exercised: ${seen.size}`);
console.log(`problems: ${problems.length}`);
for (const p of problems) console.log('   ', p);
const unex = [...registry].filter((u) => !seen.has(u));
console.log(`\nregistry assets not exercised: ${unex.length}`);
for (const u of unex) console.log('   ', u);

rmSync(tmp, { recursive: true, force: true });
if (problems.length) process.exitCode = 1;
