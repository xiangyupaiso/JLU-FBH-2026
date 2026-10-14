"""Import the supplied Model manuscript without rewriting its scientific copy.

Run with the source directory as the sole argument. Original files are retained
under 文案集/drylab/model; generated page data contains no React or JSX.
"""
import csv
import json
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / '文案集/drylab/model'
ARCHIVE = ROOT / '文案集/drylab/model'
if SOURCE.resolve() != ARCHIVE.resolve():
    shutil.copytree(SOURCE, ARCHIVE, dirs_exist_ok=True)
SOURCE = ARCHIVE
text = next(SOURCE.glob('*.md')).read_text(encoding='utf-8')
lines = text.splitlines()
DATA = ROOT / 'src/data/drylab'
DATA.mkdir(parents=True, exist_ok=True)
ASSETS = ROOT / 'src/assets/wiki/model'
ASSETS.mkdir(parents=True, exist_ok=True)
DOWNLOADS = ROOT / 'public/assets/docs/model'
DOWNLOADS.mkdir(parents=True, exist_ok=True)

def clean(s):
    s = re.sub(r'\\([!"#$%&\'()*+,\-./:;<=>?@\[\]^_`{|}~])', r'\1', s)
    s = re.sub(r'<br\s*/?>', '\n', s)
    return s.strip()

def dump(value):
    return json.dumps(value, ensure_ascii=False, indent=2)

HAN = re.compile(r'[\u3400-\u9fff]')

def english_label(value):
    """Keep the source's English wording; remove its paired Chinese translation."""
    value = re.split(r'\s+/\s+(?=[^/\n]*[\u3400-\u9fff])', value, maxsplit=1)[0]
    value = '\n'.join(line for line in value.splitlines() if not HAN.search(line)).strip()
    if value.startswith('**') and value.count('**') % 2:
        value += '**'
    return value

asset_descriptions = {}
for line_index, raw_line in enumerate(lines):
    image = re.match(r'^!\[.*\]\((.+)\)$', raw_line.strip())
    if not image:
        continue
    image_name = Path(unquote(image[1])).name
    nearby = lines[line_index+1:line_index+9] + lines[max(0,line_index-8):line_index]
    caption = next((clean(l).replace('**','') for l in nearby if re.match(r'^(\*\*)?Figure \d', clean(l))), None)
    preceding_heading = next((clean(l).lstrip('# ').replace('**','') for l in reversed(lines[:line_index]) if l.startswith('#')), image_name)
    asset_descriptions[image_name] = (caption or preceding_heading).replace('（此图仅作示例使用，wiki在此处作可视化）', '')

assets = {}
for i, path in enumerate(sorted((SOURCE / '图片和附件').glob('*'))):
    if not path.is_file():
        continue
    name = f'model-figure-{i + 1:02d}{path.suffix.lower()}'
    shutil.copy2(path, ASSETS / name)
    assets[path.name] = dict(fileName=name, localSourcePath=f'文案集/drylab/model/图片和附件/{path.name}',
                             uploadUrl='', alt=english_label(asset_descriptions[path.name]))
imports = '\n'.join(f'import image{i} from "../../assets/wiki/model/{a["fileName"]}";' for i, a in enumerate(assets.values()))
asset_code = imports + '\n\nexport const modelAssets = {\n'
for i, (key, value) in enumerate(assets.items()):
    asset_code += f'  {json.dumps(key, ensure_ascii=False)}: {{ ...{dump(value)}, localSrc: image{i} }},\n'
asset_code += '} as const;\nexport type ModelAssetKey = keyof typeof modelAssets;\nexport const getModelImage = (key: ModelAssetKey): string => modelAssets[key].uploadUrl || modelAssets[key].localSrc;\n'
(DATA / 'modelAssets.ts').write_text(asset_code, encoding='utf-8')

downloads = []
remote_downloads = {
    'PXD024322_TNBC_vs_Normal_limma_ALL_9088_proteins(1).csv': 'https://static.igem.wiki/teams/6056/wiki/files/pages/dry-lab/model/pxd024322-tnbc-vs-normal-limma-all-9088-proteins-1.csv',
    'PXD028102_paired_limma_imputed_ALL.csv': 'https://static.igem.wiki/teams/6056/wiki/files/pages/dry-lab/model/pxd028102-paired-limma-imputed-all.csv',
}
for i, path in enumerate(sorted(SOURCE.rglob('*'))):
    if path.suffix not in ('.csv', '.log'):
        continue
    if path.name in remote_downloads:
        downloads.append(dict(label=path.name, path=remote_downloads[path.name]))
        continue
    name = re.sub(r'[^a-z0-9._-]+', '-', path.stem.lower()).strip('-') + path.suffix
    shutil.copy2(path, DOWNLOADS / name)
    downloads.append(dict(label=path.name, path=f'assets/docs/model/{name}'))

panels = {}
counter = 0
def feature(config):
    global counter
    counter += 1
    key = f'model-panel-{counter}'
    panels[key] = config
    return dict(type='feature', key=key)

def heading(line):
    m = re.match(r'^(#{1,6})\s+(.+)', line)
    return (len(m[1]), clean(m[2]).replace('**','').strip()) if m else None

def parse(part):
    """Small import-time parser for the manuscript's existing block vocabulary."""
    blocks = []
    i = 0
    while i < len(part):
        raw = part[i].strip()
        s = clean(raw)
        if not s or s == '---' or s in ('分块', '下面内容分块', '结构组件') or '参照这个表格（' in s:
            i += 1
            continue
        if 'COLLAPSIBLE SECTION START:' in s:
            title = s.split('COLLAPSIBLE SECTION START:', 1)[1].split(']')[0].strip()
            end = i + 1
            while end < len(part) and 'COLLAPSIBLE SECTION END' not in clean(part[end]):
                end += 1
            body = parse(part[i + 1:end])
            if body:
                blocks.append(feature(dict(kind='fold', title=title, blocks=body)))
            i = end + 1
            continue
        if ('（折叠）' in s and heading(raw)) or s == '（下述内容折叠）':
            title = re.sub(r'^#+\s*', '', s).replace('（折叠）', '')
            start = i + 1
            if s == '（下述内容折叠）':
                start = i + 2
                title = clean(part[i + 1]).lstrip('# ').strip() if part[i + 1].strip() else clean(part[i + 2]).lstrip('# ').strip()
                if not part[i + 1].strip():
                    start = i + 3
            end = start
            while end < len(part) and '折叠结束' not in part[end]:
                end += 1
            blocks.append(feature(dict(kind='fold', title=title, blocks=parse(part[start:end]))))
            i = end + 1
            continue
        if any(x in s for x in ('COLLAPSIBLE SECTION END', '折叠结束', '(分块结束)')):
            i += 1
            continue
        if raw.startswith('```'):
            end = i + 1
            while end < len(part) and not part[end].startswith('```'):
                end += 1
            blocks.append(dict(type='code', language=raw[3:], code='\n'.join(part[i+1:end])))
            i = end + 1
            continue
        image = re.match(r'^!\[.*\]\((.+)\)$', raw)
        if image:
            name = Path(unquote(image[1])).name
            if name in ('pipeline Sc (1).png', 'IEDB pipeline (1).png', 'image 13.png'):
                # Its steps and associated prose are rendered once in a tab panel.
                i += 1
                continue
            replacement = {'image 12.png': 'volcano-024322', 'image 4.png': 'volcano-028102', 'image 10.png': 'burial-heatmap', 'image 9.png': 'p9-volume'}
            if name in replacement:
                blocks.append(feature(dict(kind='chart', chart=replacement[name])))
            else:
                blocks.append(dict(type='figure', src=f'ASSET:{name}', alt=assets[name]['alt']))
            i += 1
            continue
        if raw.startswith('|') and i + 1 < len(part) and re.match(r'^\|[\s:|\-]+\|$', part[i+1]):
            table = []
            while i < len(part) and part[i].strip().startswith('|'):
                row = [clean(c) for c in part[i].strip().strip('|').split('|')]
                if not all(re.match(r'^:?-+:?$', c) for c in row):
                    table.append(row)
                i += 1
            block = dict(type='table', headers=table[0], rows=table[1:])
            if table[0][0] == '**Measurement**':
                blocks.append(feature(dict(kind='transpose', table=block)))
            else:
                blocks.append(block)
            continue
        h = heading(raw)
        if h:
            blocks.append(dict(type='subheading', id=f'model-heading-{len(headings)+1}', index='', title=h[1].replace('（折叠）','')))
            heading_levels[blocks[-1]['id']] = h[0]
            headings.append(h[1])
            i += 1
            continue
        if re.match(r'^[-*]\s+', raw):
            items = []
            while i < len(part) and re.match(r'^[-*]\s+', part[i].strip()):
                items.append(clean(re.sub(r'^[-*]\s+', '', part[i].strip())))
                i += 1
            blocks.append(dict(type='list', items=items))
            continue
        paragraph = [raw]
        i += 1
        while i < len(part) and part[i].strip() and not part[i].startswith(('#', '|', '![', '```')):
            paragraph.append(part[i].strip())
            i += 1
        value = clean(' '.join(paragraph))
        value = value.replace('（此图仅作示例使用，wiki在此处作可视化）', '').replace('（横纵切换）', '')
        blocks.append(dict(type='prose', paragraphs=[value]))
    return blocks

headings = []
heading_levels = {}
def tabs(title, entries):
    return feature(dict(kind='tabs', title=title, entries=[dict(title=t, blocks=parse(p)) for t,p in entries]))

# Interactions are bounded by the author's headings, not generated summaries.
def parse_with_panels(part):
    out = []
    i = 0
    while i < len(part):
        s = clean(part[i])
        if '[TAB 1:' in s:
            end = next(j for j in range(i+1,len(part)) if '### Abbreviations' in part[j])
            starts = [j for j in range(i,end) if re.search(r'\[TAB \d:', clean(part[j]))] + [end]
            entries = [(re.search(r'\[TAB \d: (.+?)\]', clean(part[a]))[1], part[a+1:b]) for a,b in zip(starts,starts[1:])]
            out.append(tabs('Survival evidence / 生存研究', entries))
            i = end
        elif s.startswith('#### Single-cell dataset, processing, and statistical methods'):
            end = next(j for j in range(i+1,len(part)) if part[j].startswith('#### Patient'))
            starts = [j for j in range(i+1,end) if part[j].startswith('##### ')] + [end]
            out.append(tabs(s.lstrip('# '), [(clean(part[a]).lstrip('# '), part[a+1:b]) for a,b in zip(starts, starts[1:])]))
            i = end
        elif s.startswith('#### IEDB inputs, parameters, and filtering rules'):
            end = next(j for j in range(i+1,len(part)) if '分块结束' in part[j])
            starts = [j for j in range(i+1,end) if part[j].startswith('##### ')] + [end]
            out.append(tabs(s.lstrip('# '), [(clean(part[a]).lstrip('# '), part[a+1:b]) for a,b in zip(starts, starts[1:])]))
            i = end + 1
        elif s.startswith('**Step 1'):
            end = next(j for j in range(i+1,len(part)) if '折叠结束' in part[j])
            starts = [j for j in range(i,end) if re.match(r'^\*\*Step \d', clean(part[j]))] + [end]
            entries = []
            for a,b in zip(starts,starts[1:]):
                body = list(part[a+1:b])
                zh = next((clean(l).strip('*').replace('（折叠）','') for l in body if clean(l).startswith('**步骤')), '')
                body = [l for l in body if not clean(l).startswith('**步骤')]
                entries.append((clean(part[a]).strip('*') + (' / ' + zh if zh else ''), body))
            out.append(tabs('Structural processing / 结构处理', entries))
            i = end + 1
        else:
            end = i + 1
            while end < len(part) and not any(x in clean(part[end]) for x in ('[TAB 1:', '#### Single-cell dataset, processing, and statistical methods', '#### IEDB inputs, parameters, and filtering rules', '**Step 1')):
                end += 1
            out += parse(part[i:end])
            i = end
    return out

boundaries = [(5, 'model-overview', 'Overview'), (19, 'model-aeip', 'AEIP'), (35, 'model-antigen-selection', 'Antigen Selection'),
              (553, 'model-epitope-screening', 'Epitope Screening'), (720, 'model-structural-validation', 'Structural validation of the 17 candidates / 17 条候选的结构验证'),
              (1027, 'model-discussion', 'Discussion / 讨论'), (1043, 'model-downloads', 'Reproducibility and downloads / 可复现性与下载'),
              (1066, 'model-references', 'References / 参考文献'), (1182, 'model-cell2dose', 'Cell2Dose'), (1184, 'model-sst-qn', 'SST-QN')]
# Fail rather than silently losing content when the source heading positions change.
for line, _, _ in boundaries:
    assert heading(lines[line-1]), (line, lines[line-1])
sections = []
references = []
for n, (line, ident, title) in enumerate(boundaries):
    end = boundaries[n+1][0]-1 if n+1 < len(boundaries) else len(lines)
    body = lines[line:end]
    if ident == 'model-references':
        for para in re.split(r'\n\s*\n', '\n'.join(body)):
            if not para.strip():
                continue
            raw = clean(para)
            label = re.match(r'^\*+([^*]+)\*+\s*(.*)', raw, re.S)
            assert label, raw[:80]
            links = [dict(label=m[0], href=m[1]) for m in re.findall(r'\[([^\]]+)\]\(([^)]+)\)', label[2])]
            body = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', '', label[2]).strip()
            references.append(dict(id=len(references)+1, authors=label[1], title=body, journal='', volumeYear='', links=links))
        blocks = [dict(type='feature', key='model-references')]
    else:
        blocks = parse_with_panels(body)
        if ident == 'model-downloads':
            blocks.append(dict(type='feature', key='model-downloads'))
    # Shared outline nesting requires nonempty, unique dotted indices. Preserve
    # the manuscript's heading levels, including skipped Markdown levels.
    stack = []
    sibling_counts = {}
    def number_headings(items):
        for block in items:
            if block['type'] == 'subheading':
                level = heading_levels[block['id']]
                while stack and stack[-1][0] >= level:
                    stack.pop()
                parent = tuple(ordinal for _, ordinal in stack)
                sibling_counts[parent] = sibling_counts.get(parent, 0) + 1
                stack.append((level, sibling_counts[parent]))
                block['index'] = '.'.join(map(str, (n+2, *(ordinal for _, ordinal in stack))))
            elif block['type'] == 'feature' and block['key'] in panels:
                panel = panels[block['key']]
                if panel['kind'] == 'fold':
                    number_headings(panel['blocks'])
                elif panel['kind'] == 'tabs':
                    for entry in panel['entries']:
                        number_headings(entry['blocks'])
    number_headings(blocks)
    sections.append(dict(id=ident, index=f'{n+2:02}', kicker=title, navLabel=title.split(' / ')[0], title=title, summary='', blocks=blocks))

# The user requested English-only publication. The archived bilingual manuscript
# remains intact; filter translations only from the generated display data.
def english_blocks(items):
    result = []
    for block in items:
        if block['type'] == 'prose':
            block['paragraphs'] = [p for p in block['paragraphs'] if not HAN.search(p)]
            if not block['paragraphs']:
                continue
        elif block['type'] == 'table':
            block['headers'] = [english_label(cell) for cell in block['headers']]
            block['rows'] = [[english_label(cell) for cell in row] for row in block['rows']]
        for field in ('title', 'alt', 'caption'):
            if field in block:
                block[field] = english_label(block[field])
        result.append(block)
    return result

for section in sections:
    section['blocks'] = english_blocks(section['blocks'])
    for field in ('title', 'navLabel', 'kicker', 'summary'):
        section[field] = english_label(section[field])
for panel in panels.values():
    if 'title' in panel:
        panel['title'] = english_label(panel['title'])
    if panel['kind'] == 'fold':
        panel['blocks'] = english_blocks(panel['blocks'])
    elif panel['kind'] == 'tabs':
        for entry in panel['entries']:
            entry['title'] = english_label(entry['title'])
            entry['blocks'] = english_blocks(entry['blocks'])
    elif panel['kind'] == 'transpose':
        panel['table'] = english_blocks([panel['table']])[0]

# Keep the first existing chapter verbatim; only the unfilled manuscript changes.
old = (ROOT / 'src/data/modelPage.ts').read_text(encoding='utf-8')
first = old[old.index('    {\n      id: "model-structural-confirmation"'):old.index('    {\n      id: "model-judge-brief"')].rstrip().rstrip(',') if 'model-judge-brief' in old else None
if first is None:
    existing = (DATA/'modelPage.ts').read_text(encoding='utf-8')
    first = existing.split('sections: [\n',1)[1].split('\n    ...manuscriptSections',1)[0].rstrip().rstrip(',')

def resolve_assets(code):
    return re.sub(r'"ASSET:([^"\n]+)"', lambda m: 'getModelImage(' + json.dumps(m[1], ensure_ascii=False) + ')', code)

header = 'import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";\nimport type { ModelPanel } from "./modelPanelTypes";\nimport type { CitationReference } from "../citations/citationTypes";\nimport { getModelImage } from "./modelAssets";\n'
data = header + '\nconst manuscriptSections: WikiPageContent["sections"] = ' + resolve_assets(dump(sections)) + ';\n'
data += '\nexport const modelPanels: Record<string, ModelPanel> = ' + resolve_assets(dump(panels)) + ';\n'
data += '\nexport const modelReferences: CitationReference[] = ' + dump(references) + ';\n'
data += '\nexport const modelDownloads = ' + dump(downloads) + ';\n'
data += '\nexport const modelPage: WikiPageContent = {\n route: "/model", category: "dry-lab", chapter: "Dry Lab / 01 of 04", eyebrow: "Model", title: "Model", lede: "", boundary: "", visual: "model-manuscript", visualLabel: "Model", visualSteps: [], facts: [],\n sections: [\n' + first + ',\n    ...manuscriptSections\n ],\n links: [{ path: "/software", label: "Software" }, { path: "/hardware", label: "Hardware" }, { path: "/games", label: "Games" }], next: { path: "/software", label: "Software", title: "Software" }\n};\n'
(DATA/'modelPage.ts').write_text(data, encoding='utf-8')

sasa = list(csv.DictReader((SOURCE/'17个表位相关原始数据(2)/00_SASA_PIVOT.csv').open(encoding='utf-8-sig')))
groups = {'trop2':'TROP2','b7h4':'B7-H4','nectin4':'Nectin-4','liv1':'LIV-1'}
order = ['RLFRERYRL','SVCWCVNSV','TLIYYLDEI','YLDEIPPKF','AVFADQVIV','WLKEGVLGL','AVTSEFHLV','FLAEASVRG','FQARLRLRV','HILHVSFLA','RLRVLV PPL'.replace(' ',''),'YINGRGHLV','FIGHYAENV','GLHNFSDGL','GVATLAWMV','SVAVFCHEL','TVSEGTHFL']
heatmap = []
for pep in order:
    r = next(r for r in sasa if r['peptide'] == pep)
    heatmap.append(dict(peptide=pep, target=groups[r['target']], values=[float(r[f'P{i}']) if r[f'P{i}'] else None for i in range(1,10)]))
assert len(heatmap)==17 and all(len(r['values'])==9 for r in heatmap)
(DATA/'modelHeatmapData.json').write_text(dump(heatmap),encoding='utf-8')
print(f'Imported {len(sections)} manuscript chapters, {len(panels)} panels, {len(assets)} images, {len(references)} references; volcano data is hosted remotely')
