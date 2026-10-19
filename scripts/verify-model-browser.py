"""Browser checks for Model, including exact supplied dose values and mobile layout.

Run against Vite dev or preview with --base-url http://127.0.0.1:5174/jlu-fbh/.
"""
import argparse
import json
import re
from pathlib import Path
from urllib.parse import urljoin
from playwright.sync_api import sync_playwright

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--base-url', default='http://127.0.0.1:5174/jlu-fbh/')
parser.add_argument('--artifacts', type=Path, default=Path('.tmp-verify/model'))
args = parser.parse_args()
args.artifacts.mkdir(parents=True, exist_ok=True)


def jump(page, locator):
    # Project into the document's single scroll timeline, like reader anchors.
    locator.evaluate('''target => {
      const inner=target.closest('.wiki-page').querySelector('.route-frame__scroll');
      const track=inner?.closest('.wiki-reader-track');
      if (!track || getComputedStyle(inner).overflowY !== 'hidden') {
        const headerBottom=document.querySelector('.circure-nav-head')?.getBoundingClientRect().bottom || 0;
        scrollTo({top:scrollY+target.getBoundingClientRect().top-headerBottom-32,behavior:'instant'}); return;
      }
      const top=Math.max(0,inner.scrollTop+target.getBoundingClientRect().top-inner.getBoundingClientRect().top-32);
      const sticky=parseFloat(getComputedStyle(track.firstElementChild).top)||0;
      const start=track.getBoundingClientRect().top+scrollY-sticky;
      inner.scrollTop=top;
      scrollTo({top:start+top,behavior:'instant'});
    }''')
    page.wait_for_timeout(150)


report = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    for label, width, height in [('desktop', 1440, 1100), ('mobile', 390, 844)]:
        page = browser.new_page(viewport={'width': width, 'height': height}, device_scale_factor=1,
                                is_mobile=label == 'mobile', has_touch=label == 'mobile')
        errors = []
        page.on('pageerror', lambda error: errors.append(error.stack) if error.stack not in errors else None)
        page.goto(args.base_url.rstrip('/')+'/model', wait_until='networkidle', timeout=60000)
        page.wait_for_selector('.dose-prediction-explorer')
        page.wait_for_function("document.getElementById('page-loader')?.hidden", timeout=60000)
        explorer = page.locator('.dose-prediction-explorer')
        assert explorer.count() == 1
        assert page.get_by_role('toolbar', name='3D Controls').count() == 1
        chapters = ['Judging', 'Overview', 'AEIP', 'Cell2Dose', 'SST-QN', 'References']
        assert page.locator('.wiki-section h2').all_text_contents() == chapters
        assert page.locator('.wiki-outline').first.locator('.wiki-outline__primary .wiki-outline__copy').all_text_contents() == chapters
        assert page.locator('.wiki-page--model .wiki-prose strong').count() > 1000
        module_map = page.locator('.image-anchor-map')
        module_links = module_map.get_by_role('link')
        assert module_map.count() == 1 and module_links.count() == 7
        assert module_map.locator('img').evaluate('el=>el.complete && el.naturalWidth===2516 && el.naturalHeight===1694')
        map_image = module_map.locator('img').bounding_box()
        map_overlay = module_map.locator('svg').bounding_box()
        assert all(abs(map_image[key] - map_overlay[key]) < 1 for key in ('x', 'y', 'width', 'height'))
        targets = []
        for i in range(7):
            jump(page, module_map)
            link = module_links.nth(i)
            target = link.get_attribute('href')[1:]
            targets.append(target)
            assert re.match(rf'Module {i+1}:', link.get_attribute('aria-label'))
            if label == 'mobile':
                bounds = link.bounding_box()
                page.touchscreen.tap(bounds['x'] + bounds['width']/2, bounds['y'] + bounds['height']/2)
            else:
                link.click()
            page.wait_for_timeout(150)
            actual_hash = page.evaluate('location.hash')
            if actual_hash != '#' + target:
                page.screenshot(path=str(args.artifacts/f'{label}-module{i+1}-failure.png'))
            assert actual_hash == '#' + target, f'{label} Module {i+1}: {actual_hash} != #{target}'
            assert page.evaluate('document.activeElement.id') == target
            heading = page.locator('#' + target)
            assert re.match(rf'Module {i+1}:', heading.inner_text())
            heading_bounds = heading.bounding_box()
            header_bottom = page.locator('.circure-nav-head').bounding_box()['height']
            assert header_bottom <= heading_bounds['y'] <= height/2, heading_bounds
        assert len(set(targets)) == 7
        jump(page, module_map)
        module_links.first.focus()
        page.keyboard.press('Shift+Tab')
        page.keyboard.press('Tab')
        for i in range(7):
            link = module_links.nth(i)
            page.wait_for_timeout(80)
            assert link.evaluate('el=>el===document.activeElement && el.matches(":focus-visible")')
            assert link.locator('rect').evaluate('el=>getComputedStyle(el).stroke') == 'rgb(32, 112, 98)'
            focused_bounds = link.bounding_box()
            header_bottom = page.locator('.circure-nav-head').bounding_box()['height']
            assert header_bottom <= focused_bounds['y'] and focused_bounds['y'] + focused_bounds['height'] <= height, focused_bounds
            if i < 6:
                page.keyboard.press('Tab')
        page.screenshot(path=str(args.artifacts/f'{label}-figure21-navigation.png'))
        page.keyboard.press('Enter')
        assert page.evaluate('location.hash') == '#' + targets[-1]
        assert page.evaluate('document.activeElement.id') == targets[-1]
        for text in ['AEIP', 'Cell2Dose', 'SST-QN', 'cover 88% of patients']:
            strong = page.locator('#model-overview .wiki-prose strong').filter(has_text=text).first
            assert int(strong.evaluate('el=>getComputedStyle(el).fontWeight')) >= 600
        viewer = page.locator('.model-structural-viewer')
        assert viewer.locator('h5 span').inner_text() == 'HLA-A*02:01 / β2M'
        assert viewer.evaluate("el=>el.closest('.wiki-section').id") == 'model-aeip'
        assert viewer.evaluate("el=>el.closest('.wiki-feature').previousElementSibling.previousElementSibling.textContent").endswith('What correct loading looks like')
        assert viewer.locator('h5').evaluate("el=>!el.querySelector('br')")
        assert viewer.evaluate('el=>el.scrollWidth<=el.clientWidth'), '3D title overflows'
        jump(page, viewer)
        page.screenshot(path=str(args.artifacts/f'{label}-structural-viewer.png'))
        workflow = page.locator('details.model-fold').filter(has=page.locator('summary', has_text='Structural processing'))
        assert workflow.count() == 1
        assert page.get_by_role('tablist', name='Structural processing').count() == 0
        jump(page, workflow)
        workflow.locator('summary').click()
        assert workflow.get_attribute('open') is not None
        assert workflow.locator('h5').count() == 7
        assert workflow.get_by_text('Step 7 · Aggregating the five models into a single row', exact=True).is_visible()
        page.screenshot(path=str(args.artifacts/f'{label}-structural-fold.png'))
        workflow.locator('summary').click()
        ramps = page.locator('.model-heatmap-legend i').evaluate_all('els=>els.map(el=>getComputedStyle(el).backgroundImage)')
        assert len(ramps) == 4 and len(set(ramps)) == 1 and '32, 112, 98' in ramps[0], ramps
        heatmap = page.locator('.model-chart-panel').filter(has=page.locator('.model-heatmap-legend'))
        jump(page, heatmap)
        page.screenshot(path=str(args.artifacts/f'{label}-burial-heatmap.png'))
        parameter_heading = page.get_by_role('heading', name=re.compile('Parameters at a glance$'))
        assert parameter_heading.count() == 1
        assert page.get_by_text('Table 26.', exact=False).count() >= 1
        assert page.get_by_text('Table 27.', exact=False).count() >= 1
        jump(page, explorer)
        number = explorer.get_by_role('spinbutton')
        slider = explorer.get_by_role('slider')
        number.fill('11.5')
        number.press('Tab')
        assert '85.25%' in explorer.locator('[data-metric="p_effect"]').inner_text()
        assert '873 / 1,024' in explorer.locator('[data-metric="p_effect"]').inner_text()
        assert '95.31%' in explorer.locator('[data-metric="p_screen"]').inner_text()
        assert '976 / 1,024' in explorer.locator('[data-metric="p_screen"]').inner_text()
        assert '80.86%' in explorer.locator('[data-metric="p_joint"]').inner_text()
        assert '828 / 1,024' in explorer.locator('[data-metric="p_joint"]').inner_text()
        assert '34.89 [0.00, 1,930.27]' in explorer.locator('[data-metric="volume"]').inner_text()
        assert '45 meet tumor control' in explorer.locator('.dose-prediction-explorer__joint').inner_text()
        assert slider.input_value() == '11.5'
        assert explorer.locator('[data-passes="true"]').count() == 1
        assert explorer.locator('canvas').count() == 1
        jump(page, explorer)
        page.screenshot(path=str(args.artifacts/f'{label}-dose-controls.png'))
        jump(page, explorer.locator('[data-metric="p_effect"]'))
        page.screenshot(path=str(args.artifacts/f'{label}-dose-results.png'))

        jump(page, number)
        number.fill('11.56')
        number.press('Tab')
        assert number.input_value() == '11.6'
        assert slider.input_value() == '11.6'
        number.fill('-2')
        number.press('Tab')
        assert number.input_value() == '0.0'
        assert '0.00%' in explorer.locator('[data-metric="p_joint"]').inner_text()
        assert explorer.locator('[data-passes="false"]').count() == 1
        slider.focus()
        slider.press('ArrowRight')
        assert number.input_value() == '0.1'
        slider.press('End')
        assert number.input_value() == '30.0', f"End key: number={number.input_value()}, range={slider.input_value()}"
        number.fill('10.2')
        number.press('Tab')
        assert '81.45%' in explorer.locator('[data-metric="p_joint"]').inner_text()
        number.fill('')
        number.press('Tab')
        assert number.input_value() == '10.2'

        download = explorer.get_by_role('link', name='Download all 301 dose points')
        response = page.request.get(urljoin(page.url, download.get_attribute('href')))
        assert response.status == 200
        supplied = (Path(__file__).resolve().parents[1]/'文案集/drylab/model/dose_scan.csv').read_bytes()
        assert response.body() == supplied
        assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'), 'Document overflows horizontally'
        bounds = explorer.bounding_box()
        assert bounds['width'] <= width
        assert explorer.evaluate('el=>el.scrollWidth <= el.clientWidth'), 'Dose component overflows'

        judging = page.locator('#model-judging .judging-criteria').get_by_role('button').first
        jump(page, judging)
        judging.click()
        assert judging.get_attribute('aria-expanded') == 'true'
        assert page.locator('#model-criterion-1-answer').is_visible()
        judging.click()

        tabs = page.locator('.manuscript-tabs').first
        jump(page, tabs)
        tab = tabs.get_by_role('tab', name='LIV-1', exact=True)
        tab.click()
        assert tab.get_attribute('aria-selected') == 'true'
        assert tabs.locator('[data-manuscript-tab="3"]').is_visible()

        fold = page.locator('details.model-fold').first
        jump(page, fold)
        fold.locator('summary').click()
        assert fold.get_attribute('open') is not None
        fold.locator('summary').click()
        assert fold.get_attribute('open') is None
        assert not errors, errors
        metrics = explorer.locator('.dose-prediction-explorer__metrics').evaluate('el=>getComputedStyle(el).gridTemplateColumns')
        report.append({'viewport': label, 'width': width, 'dose_width': bounds['width'], 'metrics_columns': metrics,
                       'module_targets': targets,
                       'checks': 'seven independent Figure 21 links by pointer/touch and keyboard, six ordered outline chapters, source emphasis, inline 3D title, seven structural fold steps, four equal green ramps, complete parameter tables, exact dose data, keyboard, CSV, judging, tabs and folds', 'page_errors': errors})
        page.close()
    browser.close()
print(json.dumps(report, indent=2))
(args.artifacts/'browser-results.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
