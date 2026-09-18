const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = process.cwd();
const out = path.join(__dirname, 'baseline');
if (fs.existsSync(out)) throw new Error('Baseline already exists; refusing to overwrite.');
fs.mkdirSync(out, { recursive: true });
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: file,
  }).outputText;
  const localRequire = (name) => {
    if (name.endsWith('.css')) return {};
    if (name.includes('?url')) return name;
    if (!name.startsWith('.')) return require(name);
    const target = path.resolve(path.dirname(file), name);
    return load([target, target + '.ts', target + '.tsx'].find(p => fs.existsSync(p) && fs.statSync(p).isFile()));
  };
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}
const wet = load(path.join(root, 'src/data/wetLabPages.ts'));
const protocol = load(path.join(root, 'src/data/protocolPages.ts'));
const features = load(path.join(root, 'src/components/wiki/features/WetLabFeatures.tsx'));
const { ProtocolBookcase } = load(path.join(root, 'src/components/wiki/features/ProtocolBookcase.tsx'));
const pages = [...Object.values(wet), protocol.protocolPage];
const featureMap = {
  'experiments-route': 'FiveGateMap', 'experiments-record': 'ProtocolStack', 'experiments-controls': 'ReadoutMatrix',
  'notebook-schema': 'NotebookRecordSchema', 'notebook-timeline': 'NotebookTrace', 'notebook-index': 'NotebookTraceability',
  'measurement-chain': 'MeasurementWindow', 'measurement-readouts': 'ReadoutMatrix', 'measurement-publication': 'MeasurementPublicationGate',
  'platform-rationale': 'PlatformOrbit', 'platform-workflow': 'PlatformWorkflow', 'platform-evidence': 'PlatformEvidenceMatrix',
  'safety-risks': 'SafetyBoundary', 'safety-controls': 'SafetyControlHierarchy', 'safety-boundaries': 'SafetyNoGoLedger',
  'protocol-library': 'ProtocolBookcase',
};
const featureHtml = Object.fromEntries(Object.entries({ ...features, ProtocolBookcase }).map(([name, component]) => [name, renderToStaticMarkup(React.createElement(component))]));
fs.writeFileSync(path.join(out, 'content.json'), JSON.stringify({ pages, protocolManuals: protocol.protocolManuals, protocolCategoryLabels: protocol.protocolCategoryLabels, featureMap, featureHtml }, null, 2));
const hashes = {};
function snapshot(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) snapshot(file);
    else {
      const relative = path.relative(root, file).replaceAll('\\', '/');
      const bytes = fs.readFileSync(file);
      hashes[relative] = crypto.createHash('sha256').update(bytes).digest('hex');
      if (/\.(tsx?|css)$/.test(file)) {
        const target = path.join(out, 'source', relative);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, bytes);
      }
    }
  }
}
snapshot(path.join(root, 'src'));
fs.writeFileSync(path.join(out, 'source-sha256.json'), JSON.stringify(hashes, null, 2));
const lines = ['# Wet Lab 改写前内容基准', '', '本清单由当前工作区内容生成，未使用 Git HEAD（工作区已有未提交改动）。完整字段、图表初始 HTML、全部手册信息见同目录 content.json；交互分支原文保存在 source 下。', '', '隐藏字段仍完整保存在 JSON；下列正文按旧 WikiPage 的可见内容规则列出。折叠项包含展开后文字。', ''];
for (const page of pages) {
  lines.push(`## ${page.title} — ${page.route}`, '', `Hero 标题：${page.title}`, '', `Hero 导语：${page.lede}`, '', `目录：${page.route === '/protocol' ? '无；hideOutline，正文满宽' : page.sections.map(s => `${s.index} ${s.navLabel ?? s.title} (#${s.id})`).join(' / ')}`, '');
  for (const section of page.sections) {
    lines.push(`### ${section.index} ${section.title}`, '', `锚点：${section.id}`, '');
    if (section.showKicker) lines.push(section.kicker, '');
    if (section.summary) lines.push(section.summary, '');
    lines.push(...(section.body ?? []).flatMap(p => [p, '']));
    const feature = featureMap[section.id];
    if (feature) lines.push(`图表/功能：${feature}（下列为初始渲染的完整 HTML；全部交互状态的原文见 source 中原组件）`, '', '```html', featureHtml[feature], '```', '');
    for (const [i, item] of (section.items ?? []).entries()) {
      lines.push(`#### ${Number(section.index)}.${i + 1} ${item.title}`, '', item.body, '');
      if (item.evidence?.length) lines.push('Evidence to include', '', ...item.evidence.map(p => `- ${p}`), '');
      if (item.decision) lines.push('Decision rule', '', item.decision, '');
    }
    if (section.note) lines.push(section.note.body, '');
  }
  lines.push('关联入口（原样保留；minimal 目录保留链接，区域标题由样式提供）：', '', ...page.links.map(link => `- ${link.label}: ${link.path}`), '', `Next 标题：${page.next.title}`, '', `Next 文案：Continue to ${page.next.label}. / Next page / ${page.next.label}`, '', `Next 链接：${page.next.path}`, '');
}
lines.push('## Library 手册完整数据', '', '```json', JSON.stringify(protocol.protocolManuals, null, 2), '```', '');
fs.writeFileSync(path.join(out, 'CONTENT-BASELINE.md'), lines.join('\n'));
console.log(JSON.stringify({ routes: pages.map(p => p.route), sections: pages.reduce((n,p)=>n+p.sections.length,0), items: pages.reduce((n,p)=>n+p.sections.reduce((m,s)=>m+(s.items?.length??0),0),0), manuals: protocol.protocolManuals.length, features: Object.keys(featureHtml).length, filesHashed: Object.keys(hashes).length }, null, 2));

