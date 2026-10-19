"""Import the English Model manuscript, retaining author-directed interactions.

Chapter boundaries follow headings, never fixed source line numbers. The
bilingual manuscript and supplied CSVs remain the sources of truth.
"""
import csv
import hashlib
import json
import re
import shutil
import sys
from pathlib import Path
from urllib.parse import unquote
from PIL import Image

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / '文案集/drylab/model'
DATA = ROOT / 'src/data/drylab'
ASSETS = ROOT / 'src/assets/wiki/model'
DOWNLOADS = ROOT / 'public/assets/docs/model'
HAN = re.compile(r'[\u3400-\u9fff]')


def clean(value):
    # Markdown escaping must not remove LaTeX commands inside equations.
    parts = re.split(r'(\$[\s\S]*?\$)', value)
    for i in range(0, len(parts), 2):
        parts[i] = re.sub(r'\\([^\w\s]|_)', r'\1', parts[i])
    return re.sub(r'<br\s*/?>', '\n', ''.join(parts)).strip()


def english(value):
    value = clean(value).replace('（链接）', '').replace('（整个折叠）', '').replace('（折叠）', '')
    value = re.split(r'\s+/\s+(?=[^\n]*[\u3400-\u9fff])', value, maxsplit=1)[0]
    value = '\n'.join(line for line in value.splitlines() if not HAN.search(line)).strip()
    if value.count('**') % 2:
        value += '**'
    return value


def heading(line):
    match = re.match(r'^(#{1,6})\s+(.+)', line)
    return (len(match[1]), english(match[2]).strip('* ')) if match else None


def dump(value):
    return json.dumps(value, ensure_ascii=False, indent=2)


def caption(value):
    plain = clean(value).replace('*', '').strip()
    return re.match(r'^Figure\s+(\d+[A-Z]?)\s*[.,|:]\s*(.+)', plain, re.S)


def main():
    for directory in (DATA, ASSETS, DOWNLOADS):
        directory.mkdir(parents=True, exist_ok=True)
    lines = (SOURCE / '5.1 Model.md').read_text(encoding='utf-8-sig').splitlines()
    existing = (DATA / 'modelPage.ts').read_text(encoding='utf-8')
    footer = existing.split('export const modelPage:', 1)[1].split(' links:', 1)[1]
    # Keep published subheading anchors stable as chapters are regrouped.
    legacy_headings = {}
    for match in re.finditer(r'"id": "(model-heading-\d+)"[^}]*?"title": ("[^\n]+")', existing):
        legacy_headings.setdefault(json.loads(match[2]), []).append(match[1])
    next_heading_id = max((int(ident.rsplit('-', 1)[1]) for ids in legacy_headings.values() for ident in ids), default=0)
    for ids in legacy_headings.values():
        ids.sort(key=lambda ident: int(ident.rsplit('-', 1)[1]))
    aeip_anchors = {
        (2, 'Antigen Selection'): 'model-antigen-selection',
        (2, 'Epitope Screening'): 'model-epitope-screening',
        (3, 'Structural validation of the 17 candidates'): 'model-structural-validation',
        (2, 'Discussion'): 'model-discussion',
        (3, 'Reproducibility and downloads'): 'model-downloads',
    }
    chart_by_file = {
        'image 32.png': ('volcano-024322', 'Differential protein abundance in PXD024322'),
        'image 30.png': ('volcano-028102', 'Paired differential abundance analysis in PXD028102'),
        'image 11.png': ('confidence-scatter', 'confidence scores and position-9 fill ratio'),
        'image 14.png': ('burial-heatmap', 'Per-position side-chain burial'),
        'image 7.png': ('p9-volume', 'Absolute buried area of position-9'),
    }
    image_pattern = re.compile(r'^!\[.*\]\((.+)\)$')
    assets = {}
    for i, line in enumerate(lines):
        match = image_pattern.match(line.strip())
        if not match:
            continue
        name = Path(unquote(match[1])).name
        source = SOURCE / '图片和附件' / name
        assert source.is_file(), f'Missing manuscript image: {source}'
        nearby = next((english(v) for v in lines[i+1:i+5] if caption(v)), '')
        if name in chart_by_file:
            assert chart_by_file[name][1].lower() in nearby.lower(), (name, nearby)
        title = next((heading(v)[1] for v in reversed(lines[:i]) if heading(v) and heading(v)[1]), 'Model')
        normalized = re.sub(r'[^a-z0-9]+', '-', source.stem.lower()).strip('-')
        filename = f'model-{normalized}.webp'
        with Image.open(source) as image:
            width, height = image.size
            destination = ASSETS / filename
            if not destination.exists() or destination.stat().st_mtime < source.stat().st_mtime:
                image.save(destination, 'WEBP', lossless=True, method=6)
        assets[name] = dict(fileName=filename, localSourcePath=source.relative_to(ROOT).as_posix(),
                            uploadUrl='', width=width, height=height, alt=nearby or title)

    imports = '\n'.join(f'import image{i} from "../../assets/wiki/model/{item["fileName"]}";' for i, item in enumerate(assets.values()))
    asset_code = imports + '\n\nexport const modelAssets = {\n'
    for i, (name, item) in enumerate(assets.items()):
        asset_code += f'  {dump(name)}: {{ ...{dump(item)}, localSrc: image{i} }},\n'
    asset_code += '} as const;\nexport type ModelAssetKey = keyof typeof modelAssets;\n'
    asset_code += 'export const getModelImage = (key: ModelAssetKey): string => modelAssets[key].uploadUrl || modelAssets[key].localSrc;\n'
    asset_code += '\nexport const modelDoseScanDownload = { localSourcePath: "文案集/drylab/model/dose_scan.csv", uploadUrl: "", publicPath: "assets/docs/model/cell2dose-dose-scan.csv" };\n'
    asset_code += 'export const getModelDoseScanDownload = (): string => modelDoseScanDownload.uploadUrl || `${import.meta.env.BASE_URL}${modelDoseScanDownload.publicPath}`;\n'
    (DATA / 'modelAssets.ts').write_text(asset_code, encoding='utf-8')

    downloads = []
    remote_downloads = {
        'PXD024322_TNBC_vs_Normal_limma_ALL_9088_proteins(1).csv': 'https://static.igem.wiki/teams/6056/wiki/files/pages/dry-lab/model/pxd024322-tnbc-vs-normal-limma-all-9088-proteins-1.csv',
        'PXD028102_paired_limma_imputed_ALL.csv': 'https://static.igem.wiki/teams/6056/wiki/files/pages/dry-lab/model/pxd028102-paired-limma-imputed-all.csv',
    }
    for file in sorted(SOURCE.rglob('*')):
        if file.suffix not in ('.csv', '.log'):
            continue
        if file.name in remote_downloads:
            url = remote_downloads[file.name]
        else:
            name = 'cell2dose-dose-scan.csv' if file.name == 'dose_scan.csv' else re.sub(r'[^a-z0-9._-]+', '-', file.stem.lower()).strip('-') + file.suffix
            destination = DOWNLOADS / name
            if not destination.exists() or destination.read_bytes() != file.read_bytes():
                if destination.exists():
                    destination.chmod(destination.stat().st_mode | 0o200)
                shutil.copyfile(file, destination)
            url = f'assets/docs/model/{name}'
        downloads.append(dict(label=file.name, path=url))
    dose_file = SOURCE / 'dose_scan.csv'
    fields = ('dose_ug', 'p_effect', 'p_screen', 'p_joint', 'p_joint_mcse', 'volume_lo', 'volume_median', 'volume_hi')
    dose_rows = [{key: float(row[key]) for key in fields} for row in csv.DictReader(dose_file.open(encoding='utf-8-sig', newline=''))]
    assert len(dose_rows) == 301 and all(abs(row['dose_ug'] - i / 10) < 1e-9 for i, row in enumerate(dose_rows))
    assert all(0 <= row['p_joint'] <= min(row['p_effect'], row['p_screen']) <= 1 for row in dose_rows)
    (DATA / 'modelDoseScanData.json').write_text(dump(dict(sourceSha256=hashlib.sha256(dose_file.read_bytes()).hexdigest(), draws=1024, rows=dose_rows)), encoding='utf-8')
    panels, heading_levels = {}, {}

    def feature(config):
        key = f'model-panel-{len(panels)+1}'
        panels[key] = config
        return dict(type='feature', key=key)

    def table_row(value):
        return [english(cell) for cell in re.split(r'(?<!\\)\|', value.strip().strip('|'))]

    def is_end(value):
        return bool(re.search(r'COLLAPSIBLE SECTION END|折叠结束', value))

    def parse(part):
        nonlocal next_heading_id
        blocks, i = [], 0
        while i < len(part):
            raw = part[i].strip()
            value = clean(raw)
            h = heading(raw)
            if not value or value == '---' or is_end(value):
                i += 1
                continue
            if value == '结构组件':
                blocks.append(dict(type='feature', key='model-structural-confirmation'))
                i += 1
                continue
            if value in ('分块', '下面内容分块', '（组件）', '（此图重传）', '（下表横纵切换）', '（此处做组件，左侧流程图，右侧小窗）', '下述内容若标签；若折叠，就把图删了') or '分块结束' in value:
                i += 1
                continue
            if '在此处插入交互组件' in value:
                blocks.append(dict(type='feature', key='model-dose-explorer'))
                i += 1
                continue
            if 'COLLAPSIBLE SECTION START:' in value or (h and ('（折叠）' in value or '（整个折叠）' in value)) or value.strip('*()（）【】 ') in ('此处折叠', '下述内容折叠'):
                title, start = 'Equations and parameter details', i+1
                if 'COLLAPSIBLE SECTION START:' in value:
                    title = english(value.split('COLLAPSIBLE SECTION START:', 1)[1].split(']')[0]).strip('* ')
                elif h:
                    title = h[1]
                elif '下述内容折叠' in value:
                    while start < len(part) and not part[start].strip():
                        start += 1
                    title = heading(part[start])[1]
                    start += 1
                end = start
                while end < len(part) and not is_end(clean(part[end])):
                    next_heading = heading(part[end])
                    if next_heading and next_heading[0] <= (h[0] if h else 2):
                        break
                    end += 1
                body = parse(part[start:end])
                if body:
                    blocks.append(feature(dict(kind='fold', title=title, blocks=body)))
                i = end+1 if end < len(part) and is_end(clean(part[end])) else end
                continue
            tab = re.search(r'\[TAB(?:\s+\d+)?:\s*(.+?)\]', value)
            workflow = value.startswith('**Step 1 ·')
            method_tabs = h and (h[1].startswith('Single-cell dataset, processing, and statistical methods') or h[1].startswith('IEDB inputs, parameters, and filtering rules'))
            if tab or workflow or method_tabs:
                if workflow:
                    end = next((j for j in range(i+1, len(part)) if is_end(clean(part[j]))), len(part))
                    starts = [j for j in range(i, end) if re.match(r'^\*\*Step \d ·', clean(part[j]))]
                    title = 'Structural processing'
                elif method_tabs:
                    end = next((j for j in range(i+1, len(part)) if heading(part[j]) and heading(part[j])[1] and heading(part[j])[0] <= h[0]), len(part))
                    starts = [j for j in range(i+1, end) if heading(part[j]) and heading(part[j])[0] == h[0]+1 and heading(part[j])[1] and '分块结束' not in part[j]]
                    title = h[1]
                    blocks.extend(parse([v for v in part[i+1:starts[0]] if image_pattern.match(v.strip())]))
                else:
                    level = h[0] if h else 4
                    end = next((j for j in range(i+1, len(part)) if heading(part[j]) and heading(part[j])[1] and heading(part[j])[0] <= level and '[TAB' not in clean(part[j])), len(part))
                    starts = [j for j in range(i, end) if re.search(r'\[TAB(?:\s+\d+)?:', clean(part[j]))]
                    title = 'Histopathological evidence' if h else 'Survival evidence'
                entries = []
                for a, b in zip(starts, starts[1:]+[end]):
                    label = re.search(r'\[TAB(?:\s+\d+)?:\s*(.+?)\]', clean(part[a]))
                    label = english(label[1]) if label else (heading(part[a])[1] if heading(part[a]) else english(part[a]).strip('* '))
                    entries.append(dict(title=label, blocks=parse(part[a+1:b])))
                if workflow:
                    # Author requested a fold instead of seven structural tabs.
                    body = []
                    for entry in entries:
                        body.append(dict(type='heading', level=5, title=entry['title']))
                        body.extend(entry['blocks'])
                    blocks.append(feature(dict(kind='fold', title=title, blocks=body)))
                else:
                    blocks.append(feature(dict(kind='tabs', title=title, entries=entries)))
                i = end
                continue
            if raw.startswith('```'):
                end = next((j for j in range(i+1, len(part)) if part[j].startswith('```')), len(part))
                blocks.append(dict(type='code', language=raw[3:], code='\n'.join(part[i+1:end])))
                i = end+1
                continue
            image = image_pattern.match(raw)
            if image:
                name = Path(unquote(image[1])).name
                if name == 'Model_structure (2).png':
                    blocks.append(dict(type='feature', key='model-module-navigation'))
                    i += 1
                    continue
                if any('若折叠，就把图删了' in line for line in part[i+1:i+4]):
                    i += 1
                    continue
                if not name.startswith('CirCure_icon_'):
                    blocks.append(feature(dict(kind='chart', chart=chart_by_file[name][0])) if name in chart_by_file else dict(type='figure', src=f'ASSET:{name}', alt=assets[name]['alt']))
                i += 1
                continue
            if raw.startswith('|') and i+1 < len(part) and re.match(r'^\|[\s:|\-]+\|$', part[i+1].strip()):
                rows = [table_row(raw)]
                i += 2
                while i < len(part) and part[i].strip().startswith('|'):
                    rows.append(table_row(part[i]))
                    i += 1
                if not any(rows[0]):
                    continue  # A separate Chinese translation of the preceding table.
                block = dict(type='table', headers=rows[0], rows=rows[1:])
                assert all(len(row) == len(rows[0]) for row in rows), rows[0]
                if rows[0][0] == '**Measurement**':
                    blocks.append(feature(dict(kind='transpose', table=block)))
                elif [c.strip('*') for c in rows[0][:3]] == ['Antigen', 'Peptide', 'Protein position']:
                    blocks.append(feature(dict(kind='antigen-table', table=block)))
                else:
                    blocks.append(block)
                continue
            if h:
                if h[1]:
                    key = aeip_anchors.get(h) if ident == 'model-aeip' else None
                    if not key:
                        old_ids = legacy_headings.get(h[1], [])
                        if old_ids:
                            key = old_ids.pop(0)
                        else:
                            next_heading_id += 1
                            key = f'model-heading-{next_heading_id}'
                    heading_levels[key] = h[0]
                    blocks.append(dict(type='subheading', id=key, index='', title=h[1], level=3 if h[0] == 2 else 4))
                i += 1
                continue
            if re.match(r'^[-*]\s+', raw):
                items = []
                while i < len(part) and re.match(r'^[-*]\s+', part[i].strip()):
                    item = english(re.sub(r'^[-*]\s+', '', part[i].strip()))
                    if item:
                        items.append(item)
                    i += 1
                if items:
                    blocks.append(dict(type='list', items=items))
                continue
            paragraph = [raw]
            i += 1
            while i < len(part) and part[i].strip() and not part[i].startswith(('#', '|', '![', '```')):
                paragraph.append(part[i].strip())
                i += 1
            value = english(' '.join(paragraph))
            if value and not value.startswith('**          AEIP') and '[repository URL]' not in value:
                blocks.append(dict(type='prose', paragraphs=[value]))
        return blocks

    specs = [(1, 'Judging', 'model-judging'), (1, 'Overview', 'model-overview'),
             (1, 'AEIP', 'model-aeip'),
             (1, 'Cell2Dose', 'model-cell2dose'), (1, 'SST-QN', 'model-sst-qn'), (1, 'References', 'model-references')]
    boundaries = []
    for level, title, ident in specs:
        matches = [i for i, line in enumerate(lines) if heading(line) == (level, title) and (not boundaries or i > boundaries[-1][0])]
        assert matches, (title, matches)
        boundaries.append((matches[0], title, ident))
    assert boundaries == sorted(boundaries)
    sections, references, reference_labels, judging = [], [], [], []
    for n, (start, title, ident) in enumerate(boundaries):
        end = boundaries[n+1][0] if n+1 < len(boundaries) else len(lines)
        part = lines[start+1:end]
        if ident == 'model-references':
            for paragraph in re.split(r'\n\s*\n', '\n'.join(part)):
                value = english(paragraph)
                if not value:
                    continue
                label = re.match(r'^(.*?)(\(\d{4}[a-z]?\)|\(n\.d\.(?:-[a-z])?\))\.?\*{0,2}\s*(.*)', value, re.S)
                assert label, value[:100]
                authors = label[1].strip('* ') + ' ' + label[2] + '.'
                body = label[3].strip()
                links = [dict(label=m[0], href=m[1]) for m in re.findall(r'\[([^\]]+)\]\(([^\s]+)\)', body)]
                body = re.sub(r'\[([^\]]+)\]\(([^\s]+)\)', '', body).strip()
                journal_match = re.search(r'(?<!\*)\*([^*]+)\*(?!\*)', body)
                paper_title, journal, volume_year = body, '', ''
                if journal_match:
                    paper_title, journal, volume_year = body[:journal_match.start()].strip(), journal_match[1], body[journal_match.end():].strip()
                ref_id = len(references)+1
                references.append(dict(id=ref_id, authors=authors, title=paper_title, journal=journal, volumeYear=volume_year, links=links))
                name = label[1].strip('* ')
                if ',' in name:
                    name = name.split(',', 1)[0] + ' et al.'
                reference_labels.append(dict(id=ref_id, name=name, year=label[2].strip('()')))
            blocks = [dict(type='feature', key='model-references')]
        elif ident == 'model-judging':
            starts = [i for i, line in enumerate(part) if heading(line)]
            blocks = parse(part[:starts[0]])
            for i, (a, b) in enumerate(zip(starts, starts[1:]+[len(part)])):
                body = parse(part[a+1:b])
                assert all(block['type'] == 'prose' for block in body)
                judging.append(dict(id=f'model-criterion-{i+1}', question=heading(part[a])[1], paragraphs=[p for block in body for p in block['paragraphs']]))
            blocks.append(dict(type='feature', key='model-judging'))
        else:
            blocks = parse(part)
            if ident == 'model-aeip':
                blocks.append(dict(type='feature', key='model-downloads'))
            if ident == 'model-overview':
                blocks.append(dict(type='feature', key='model-graphical-abstracts'))
        stack, counts = [], {}

        def number(items):
            for block in items:
                if block['type'] == 'subheading':
                    level = heading_levels[block['id']]
                    while stack and stack[-1][0] >= level:
                        stack.pop()
                    parent = tuple(v for _, v in stack)
                    counts[parent] = counts.get(parent, 0)+1
                    stack.append((level, counts[parent]))
                    block['index'] = '.'.join(map(str, (n+1, *(v for _, v in stack))))
                elif block['type'] == 'feature' and block['key'] in panels:
                    panel = panels[block['key']]
                    if panel['kind'] == 'fold':
                        number(panel['blocks'])
                    elif panel['kind'] == 'tabs':
                        for entry in panel['entries']:
                            number(entry['blocks'])
        number(blocks)
        sections.append(dict(id=ident, index=f'{n+1:02}', kicker=title, navLabel=title, title=title, summary='', blocks=blocks))

    def resolve_assets(code):
        return re.sub(r'"src": "ASSET:([^"\n]+)"', lambda m: '"src": getModelImage(' + dump(m[1]) + '), "width": ' + str(assets[m[1]]['width']) + ', "height": ' + str(assets[m[1]]['height']), code)

    cell = next(section for section in sections if section['id'] == 'model-cell2dose')
    modules = {int(match[1]): block for block in cell['blocks'] if block['type'] == 'subheading' and (match := re.match(r'Module ([1-7]):', block['title']))}
    assert set(modules) == set(range(1, 8))
    # Pixel coordinates in the original 2516 × 1694 Figure 21, including
    # four separate regions inside the shared Modules 2–5 frame.
    module_regions = [(1, 411, 64, 1695, 386), (2, 414, 600, 462, 413),
                      (3, 882, 600, 408, 413), (4, 1296, 600, 377, 413),
                      (5, 1680, 600, 428, 413), (6, 414, 1238, 1694, 292),
                      (7, 414, 1535, 1694, 103)]
    module_links = [dict(target=modules[number]['id'], label=modules[number]['title'], x=x, y=y, width=width, height=height)
                    for number, x, y, width, height in module_regions]

    header = 'import type { WikiPageContent, WikiJudgingCriterion } from "../../components/wiki/wikiPageTypes";\nimport type { ModelPanel } from "./modelPanelTypes";\nimport type { CitationReference } from "../citations/citationTypes";\nimport { getModelImage } from "./modelAssets";\n'
    data = header + '\nconst manuscriptSections: WikiPageContent["sections"] = ' + resolve_assets(dump(sections)) + ';\n'
    for declaration, value in [('modelPanels: Record<string, ModelPanel>', panels), ('modelReferences: CitationReference[]', references), ('modelReferenceLabels', reference_labels), ('modelJudging: WikiJudgingCriterion[]', judging), ('modelDownloads', downloads)]:
        data += '\nexport const ' + declaration + ' = ' + resolve_assets(dump(value)) + ';\n'
    data += '\nexport const modelModuleLinks = ' + dump(module_links) + ';\n'
    data += '\nexport const modelStructuralConfirmation = { title: "Structural Confirmation of Trop2-CTL1 (SVCWCVNSV)", complex: "HLA-A*02:01 / β2M" };\n'
    data += '\nexport const modelPage: WikiPageContent = {\n route: "/model", category: "dry-lab", chapter: "Dry Lab / 01 of 04", eyebrow: "Model", title: "Model", lede: "", boundary: "", visual: "model-manuscript", visualLabel: "Model", visualSteps: [], facts: [],\n sections: manuscriptSections,\n links:' + footer
    (DATA / 'modelPage.ts').write_text(data, encoding='utf-8')
    print(f'Imported {len(sections)} manuscript chapters, {len(panels)} panels, {len(assets)} figures, {len(references)} references, {len(dose_rows)} dose points; placed 3D Structure at the manuscript marker.')


if __name__ == '__main__':
    main()
