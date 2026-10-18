"""Figure 15: supplied ipTM scores joined to the manuscript's SASA fill criterion."""
import csv
import statistics
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def load_figure15():
    source = ROOT / '文案集/drylab/model'
    supplied = list(csv.DictReader((source/'figure15_data.csv').open(encoding='utf-8-sig')))
    sasa = list(csv.DictReader((source/'17个表位相关原始数据(2)/00_SASA.csv').open(encoding='utf-8-sig')))
    assert len(supplied) == len({r['peptide'] for r in supplied}) == 17
    rows = []
    for row in supplied:
        models = [float(row[f'iptm_model_{i}']) for i in range(5)]
        assert all(0 <= v <= 1 for v in models)
        assert abs(statistics.mean(models)-float(row['iptm_mean'])) < 1e-9
        p9 = [r for r in sasa if r['peptide'] == row['peptide'] and r['pos'] == '9']
        assert len(p9) == 5
        areas = [float(r['sasa_sc_free'])-float(r['sasa_sc_complex']) for r in p9]
        mean_area = statistics.mean(areas)
        # CSV fill_ratio_pct/pass_fail conflict with the confirmed structural criterion.
        rows.append(dict(peptide=row['peptide'], iptm=float(row['iptm_mean']), models=models,
                         buriedArea=round(mean_area, 6), fill=round(mean_area/140*100, 6),
                         passed=all(a >= 84 for a in areas)))
    assert {r['peptide'] for r in rows if not r['passed']} == {'FLAEASVRG','HILHVSFLA'}
    def ranks(values):
        ordered = sorted(values)
        return [statistics.mean(i+1 for i,v in enumerate(ordered) if v == value) for value in values]
    rho = statistics.correlation(ranks([r['fill'] for r in rows]), ranks([r['iptm'] for r in rows]))
    scores = [v for row in rows for v in row['models']]
    return dict(rows=rows, rho=rho, modelMin=min(scores), modelMax=max(scores),
                modelMedian=statistics.median(scores), meanMin=min(r['iptm'] for r in rows),
                meanMax=max(r['iptm'] for r in rows))

def update_figure15_copy(text, data):
    if text.startswith('Confidence scores were high across all 85 models,'):
        return (f"Confidence scores were high across all 85 models, with ipTM values ranging from {data['modelMin']:.3f} to {data['modelMax']:.3f} (median {data['modelMedian']:.3f}), but they did not distinguish candidates that passed structural review from those that failed (Figure 15). The two rejected peptides, FLAEASVRG and HILHVSFLA, had mean ipTM scores of 0.968 and 0.960, both within the range of accepted candidates. AlphaFold3's own confidence metric reports whether a model is self-consistent, not whether the peptide fits the groove correctly. We therefore assessed binding geometry separately using structural measurements derived from the predicted coordinates.")
    if text.replace('**','').startswith('Figure 15.'):
        return (f"Figure 15. AlphaFold 3 confidence scores and position-9 fill ratio for the 17 candidate peptides. Each point represents the mean across five models; diamonds mark the two candidates below the fill-ratio criterion. Mean ipTM ranged from {data['meanMin']:.3f} to {data['meanMax']:.3f}, with a rank correlation of {data['rho']:+.2f} between ipTM and fill ratio. HILHVSFLA had an ipTM of 0.960 and an F-pocket fill ratio of 43%.")
    return text
