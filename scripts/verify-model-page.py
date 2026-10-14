"""Check source-copy preservation, CSV classifications, assets and panel wiring."""
import csv
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
source = ROOT / '文案集/drylab/model'
page = (ROOT/'src/data/drylab/modelPage.ts').read_text(encoding='utf-8')

def section(name):
    raw = page.split(name + ' = ', 1)[1].split(';\n', 1)[0]
    raw = re.sub(r'getModelImage\((".*?")\)', r'\1', raw)
    return json.loads(raw)

sections = section('const manuscriptSections: WikiPageContent["sections"]')
panels = section('export const modelPanels: Record<string, ModelPanel>')
references = section('export const modelReferences: CitationReference[]')
downloads = section('export const modelDownloads')
all_text = json.dumps([sections, panels, references], ensure_ascii=False)

def clean(text):
    text = re.sub(r'\\([!"#$%&\'()*+,\-./:;<=>?@\[\]^_`{|}~])', r'\1', text)
    return re.sub(r'<br\s*/?>', '\n', text).strip()

missing = []
source_text = next(source.glob('*.md')).read_text(encoding='utf-8')
body_text = source_text.split('## References')[0]
for paragraph in re.split(r'\n\s*\n', body_text):
    p = clean(' '.join(line.strip() for line in paragraph.strip().splitlines()))
    if len(p) < 80 or p.startswith(('|', '#', '![', '```')) or 'COLLAPSIBLE SECTION' in p:
        continue
    p = p.replace('（此图仅作示例使用，wiki在此处作可视化）', '').replace('（横纵切换）', '')
    p = re.sub(r'\s*（?折叠结束）?$', '', p).strip()
    if re.search(r'[\u3400-\u9fff]', p):
        continue
    if json.dumps(p, ensure_ascii=False)[1:-1] not in all_text:
        missing.append(p[:100])
assert not missing, 'Source paragraphs not preserved: ' + repr(missing)
assert not re.search(r'[\u3400-\u9fff]', all_text), 'Published Model content must be English-only'
assert all(f'path: "/{route}"' in page for route in ('software','hardware','games'))

for cohort, expected in [('024322',(5024,911,2799)), ('028102',(4495,158,2878))]:
    rows = json.loads((ROOT/'src/data/drylab/modelVolcanoData.json').read_text())[cohort]
    threshold, fdr = (.15,.05) if cohort=='024322' else (1,.01)
    up = sum(r[1]>=threshold and r[2]<fdr for r in rows)
    down = sum(r[1]<=-threshold and r[2]<fdr for r in rows)
    assert (up,down,len(rows)-up-down)==expected

heatmap = json.loads((ROOT/'src/data/drylab/modelHeatmapData.json').read_text())
raw_sasa = {r['peptide']:r for r in csv.DictReader((source/'17个表位相关原始数据(2)/00_SASA_PIVOT.csv').open(encoding='utf-8-sig'))}
assert len(heatmap)==17
for row in heatmap:
    assert len(row['values'])==9
    assert row['values']==[float(raw_sasa[row['peptide']][f'P{i}']) if raw_sasa[row['peptide']][f'P{i}'] else None for i in range(1,10)]
    for residue,value in zip(row['peptide'],row['values']):
        assert (residue=='G')==(value is None)

def blocks(items):
    for block in items:
        if block['type']=='feature':
            key = block['key']
            assert key in panels or key in ('model-references','model-downloads')
        if block['type']=='table':
            assert all(cell.strip('*').strip() for cell in block['headers']), 'English table headers must remain visible'
            assert all(len(row)==len(block['headers']) for row in block['rows'])
        if block['type']=='subheading':
            assert block['title'].strip(), 'English headings must remain visible'
for s in sections:
    blocks(s['blocks'])
    headings = [b for b in s['blocks'] if b['type']=='subheading']
    assert all(b['index'] and b['index'].startswith(str(int(s['index']))+'.') for b in headings)
    assert len({b['index'] for b in headings})==len(headings), 'Outline indices must be unique'
for p in panels.values():
    if p['kind']=='tabs':
        assert all(e['blocks'] for e in p['entries'])
        for e in p['entries']: blocks(e['blocks'])
    if p['kind']=='fold': blocks(p['blocks'])
for download in downloads:
    assert (ROOT/'public'/download['path']).is_file()
for file in re.findall(r'from "(../../assets/wiki/model/[^"]+)"', (ROOT/'src/data/drylab/modelAssets.ts').read_text(encoding='utf-8')):
    assert (ROOT/'src/data/drylab'/file).is_file()
assert '参照这个表格（' not in all_text
assert len(references)==56
assert sum(p['kind']=='tabs' for p in panels.values())==4
assert sum(p['kind']=='transpose' for p in panels.values())==1
legacy = (ROOT/'src/data/modelPage.ts').read_text(encoding='utf-8')
first = legacy[legacy.index('    {\n      id: "model-structural-confirmation"'):legacy.index('    {\n      id: "model-judge-brief"')].rstrip().rstrip(',')
assert first in page, 'The original 3D chapter must remain unchanged and first'
print('Model checks passed: manuscript paragraphs, 56 references, 4 tab groups, transpose table, CSV classifications, 153 heatmap cells, asset paths and downloads.')
