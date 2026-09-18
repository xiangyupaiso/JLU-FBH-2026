const fs = require('node:fs');
const postcss = require('postcss');
const report = [];
// These selectors belong to the retired category layout or to components
// confirmed unused by source-reference search. Shared selectors are retained.
for (const file of ['src/styles/wiki-rebuild.css', 'src/styles/wiki-features.css', 'src/styles/wetlab-editorial.css', 'src/components/wiki/WikiNextRecord.css']) {
  const css = postcss.parse(fs.readFileSync(file, 'utf8'), { from: file });
  css.walkRules(rule => {
    const retired = rule.selectors.filter(selector => /\.wiki-page--wet-lab\b|\.wet-lab-route\b|\.wet-hero-art\b/.test(selector));
    if (!retired.length) return;
    report.push({ file, line: rule.source.start.line, selectors: retired });
    const keep = rule.selectors.filter(selector => !retired.includes(selector));
    if (keep.length) rule.selectors = keep;
    else rule.remove();
  });
  css.walkAtRules(rule => { if (rule.nodes && !rule.nodes.length) rule.remove(); });
  fs.writeFileSync(file, css.toString());
}
const file = 'src/styles/protocol-bookcase.css';
let library = fs.readFileSync(file, 'utf8');
const replacements = { 'wet-blue': 'route-main', 'wet-mint': 'route-soft', 'wet-yellow': 'route-base', 'wet-paper': 'route-paper', 'wet-ink': 'route-ink', 'wet-muted': 'route-muted', 'wet-accent': 'route-accent', 'wet-line-strong': 'route-line-strong', 'wet-line': 'route-line' };
for (const [before, after] of Object.entries(replacements)) library = library.replaceAll('--' + before, '--' + after);
const css = postcss.parse(library, { from: file });
css.walkRules(rule => {
  if (rule.selector.includes('.wiki-record--full')) {
    report.push({ file, line: rule.source.start.line, selectors: rule.selectors, reason: 'Now provided by the shared hideOutline variant.' });
    rule.remove();
  }
});
fs.writeFileSync(file, css.toString());
fs.writeFileSync(__dirname + '/cleanup.json', JSON.stringify(report, null, 2));
console.log('Removed ' + report.length + ' retired or duplicate CSS rules; shared selectors retained.');
