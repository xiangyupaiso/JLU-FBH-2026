"""Check the complete Model manuscript, source assets and supplied dose scan."""
import csv
import hashlib
import importlib.util
import json
import re
import sys
from pathlib import Path

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / '文案集/drylab/model'
spec = importlib.util.spec_from_file_location('model_import', ROOT/'scripts/prepare-model-page.py')
importer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(importer)
page = (ROOT/'src/data/drylab/modelPage.ts').read_text(encoding='utf-8')


def section(name):
    raw = page.split(name + ' = ', 1)[1].split(';\n', 1)[0]
    raw = re.sub(r'getModelImage\((".*?")\)', r'\1', raw)
    return json.loads(raw)


sections = section('const manuscriptSections: WikiPageContent["sections"]')
panels = section('export const modelPanels: Record<string, ModelPanel>')
references = section('export const modelReferences: CitationReference[]')
judging = section('export const modelJudging: WikiJudgingCriterion[]')
downloads = section('export const modelDownloads')
strings = []


def walk(items):
    for block in items:
        strings.extend(block.get('paragraphs', []))
        strings.extend(block.get('items', []))
        if block['type'] in ('subheading', 'heading'):
            strings.append(block['title'])
        if block['type'] == 'subheading':
            assert block['index'], block
        if block['type'] == 'table':
            assert all(cell.strip('* ') for cell in block['headers']), block
            assert all(len(row) == len(block['headers']) for row in block['rows'])
            strings.extend(block['headers'])
            strings.extend(cell for row in block['rows'] for cell in row)
        if block['type'] == 'figure':
            assert block['width'] > 0 and block['height'] > 0
        if block['type'] == 'feature':
            key = block['key']
            assert key in panels or key in ('model-judging', 'model-graphical-abstracts', 'model-downloads', 'model-dose-explorer', 'model-references', 'model-structural-confirmation', 'model-module-navigation'), key


for chapter in sections:
    walk(chapter['blocks'])
for panel in panels.values():
    if panel['kind'] == 'fold':
        strings.append(panel['title'])
        walk(panel['blocks'])
    elif panel['kind'] == 'tabs':
        assert all(entry['blocks'] for entry in panel['entries'])
        for entry in panel['entries']:
            strings.append(entry['title'])
            walk(entry['blocks'])
    elif panel['kind'] in ('transpose', 'antigen-table'):
        walk([panel['table']])
for item in judging:
    strings.append(item['question'])
    strings.extend(item['paragraphs'])
assert not re.search(r'[\u3400-\u9fff]', json.dumps([sections, panels, references, judging], ensure_ascii=False))

source = (SOURCE/'5.1 Model.md').read_text(encoding='utf-8-sig')
body = source.split('# References\n', 1)[0]
missing = []
for paragraph in re.split(r'\n\s*\n|\n(?=[-*]\s+)', body):
    raw = ' '.join(line.strip() for line in paragraph.strip().splitlines())
    if raw.startswith(('#', '|', '![', '```')) or 'COLLAPSIBLE SECTION' in raw:
        continue
    value = importer.english(raw)
    if '[repository URL]' in value:
        continue  # The repository URL remains an unpublished placeholder.
    value = re.sub(r'^[-*]\s+', '', value)
    if value.startswith('**Step ') and value.endswith('**'):
        value = value.strip('* ')
    if len(value) < 40 or value.startswith('**          AEIP'):
        continue
    if value not in strings:
        missing.append(value[:160])
assert not missing, 'Source paragraphs not preserved: ' + repr(missing)
source_lines = body.splitlines()
translated_table = False
for i, line in enumerate(source_lines):
    if not line.startswith('|'):
        translated_table = False
    elif i+1 < len(source_lines) and re.match(r'^\|[\s:|\-]+\|$', source_lines[i+1]):
        translated_table = not any(importer.english(cell) for cell in re.split(r'(?<!\\)\|', line.strip().strip('|')))
    if translated_table:
        continue
    if line.startswith('|') and not re.match(r'^\|[\s:|\-]+\|$', line):
        for cell in re.split(r'(?<!\\)\|', line.strip().strip('|')):
            value = importer.english(cell)
            assert not value or value in strings, f'Source table cell missing: {value}'
assert len(judging) == 4
assert [chapter['title'] for chapter in sections] == ['Judging', 'Overview', 'AEIP', 'Cell2Dose', 'SST-QN', 'References']
assert [chapter['index'] for chapter in sections] == ['01', '02', '03', '04', '05', '06']
aeip = next(chapter for chapter in sections if chapter['id'] == 'model-aeip')
assert {block['id']: block['index'] for block in aeip['blocks'] if block['type'] == 'subheading'}['model-antigen-selection'] == '3.1'
assert {block['id']: block['index'] for block in aeip['blocks'] if block['type'] == 'subheading'}['model-epitope-screening'] == '3.2'
viewer_index = next(i for i, block in enumerate(aeip['blocks']) if block.get('key') == 'model-structural-confirmation')
assert aeip['blocks'][viewer_index-2]['title'] == 'What correct loading looks like'
assert aeip['blocks'][viewer_index+1]['title'] == 'The conserved network is complete in all seventeen candidates'
workflow = next(panel for panel in panels.values() if panel.get('title') == 'Structural processing')
assert workflow['kind'] == 'fold'
assert sum(block['type'] == 'heading' and block['title'].startswith('Step ') for block in workflow['blocks']) == 7
assert not any(block['type'] == 'figure' and block['src'] == 'image 33.png' for block in aeip['blocks'])
cell = next(chapter for chapter in sections if chapter['id'] == 'model-cell2dose')
assert sum(block['type'] == 'subheading' and re.match(r'Module [1-7]:', block['title']) is not None for block in cell['blocks']) == 7
module_links = section('export const modelModuleLinks')
modules = [block for block in cell['blocks'] if block['type'] == 'subheading' and re.match(r'Module [1-7]:', block['title'])]
assert len(module_links) == 7
assert [link['target'] for link in module_links] == [block['id'] for block in modules]
assert [link['label'] for link in module_links] == [block['title'] for block in modules]
assert len({link['target'] for link in module_links}) == 7
for i, link in enumerate(module_links):
    assert 0 <= link['x'] < link['x'] + link['width'] <= 2516
    assert 0 <= link['y'] < link['y'] + link['height'] <= 1694
    for other in module_links[i+1:]:
        assert (link['x'] + link['width'] <= other['x'] or other['x'] + other['width'] <= link['x']
                or link['y'] + link['height'] <= other['y'] or other['y'] + other['height'] <= link['y'])
assert page.count('"key": "model-module-navigation"') == 1
assert any(panel['kind'] == 'fold' and panel['title'] == 'Reusability' for panel in panels.values())
assert {panel['chart'] for panel in panels.values() if panel['kind'] == 'chart'} == {'volcano-024322', 'volcano-028102', 'confidence-scatter', 'burial-heatmap', 'p9-volume'}
assert page.count('"key": "model-dose-explorer"') == 1
assert page.count('"key": "model-structural-confirmation"') == 1
assert 'MCMC sampling' not in json.dumps(strings)
assert sum(text.count('**') for text in strings) > 1500, 'Updated manuscript emphasis must be retained'
assert 'This is not MCMC' in re.sub(r'\*+', '', ' '.join(strings))

dose_file = SOURCE/'dose_scan.csv'
dose = json.loads((ROOT/'src/data/drylab/modelDoseScanData.json').read_text())
raw_rows = list(csv.DictReader(dose_file.open(encoding='utf-8-sig', newline='')))
assert len(dose['rows']) == len(raw_rows) == 301
assert dose['sourceSha256'] == hashlib.sha256(dose_file.read_bytes()).hexdigest()
assert (ROOT/'public/assets/docs/model/cell2dose-dose-scan.csv').read_bytes() == dose_file.read_bytes()
for i, (row, raw) in enumerate(zip(dose['rows'], raw_rows)):
    assert row['dose_ug'] == i/10
    assert all(value == float(raw[key]) for key, value in row.items())
    assert 0 <= row['p_joint'] <= min(row['p_effect'], row['p_screen']) <= 1
    assert row['volume_lo'] <= row['volume_median'] <= row['volume_hi']
    assert all(abs(row[key]*dose['draws'] - round(row[key]*dose['draws'])) < 1e-7 for key in ('p_effect', 'p_screen', 'p_joint'))
assert [round(dose['rows'][115][key]*1024) for key in ('p_effect', 'p_screen', 'p_joint')] == [873, 976, 828]
assert max(dose['rows'], key=lambda row: row['p_joint'])['dose_ug'] == 10.2
from model_figure15 import load_figure15
assert json.loads((ROOT/'src/data/drylab/modelConfidenceData.json').read_text()) == load_figure15()
heatmap = json.loads((ROOT/'src/data/drylab/modelHeatmapData.json').read_text())
raw_sasa = {row['peptide']: row for row in csv.DictReader((SOURCE/'17个表位相关原始数据(2)/00_SASA_PIVOT.csv').open(encoding='utf-8-sig'))}
for row in heatmap:
    assert row['values'] == [float(raw_sasa[row['peptide']][f'P{i}']) if raw_sasa[row['peptide']][f'P{i}'] else None for i in range(1, 10)]

for file in downloads:
    if not file['path'].startswith('https://'):
        assert (ROOT/'public'/file['path']).is_file()
assets = (ROOT/'src/data/drylab/modelAssets.ts').read_text(encoding='utf-8')
for file in re.findall(r'from "(../../assets/wiki/model/[^"]+)"', assets):
    assert (ROOT/'src/data/drylab'/file).is_file()
assert not re.search(r'<(?:div|span|p|section)\b', page)
print(f'Model fidelity passed: {len(strings)} manuscript strings, {len(sections)} chapters, {len(panels)} panels, {len(references)} references, seven Cell2Dose modules and all 301 exact dose rows.')
