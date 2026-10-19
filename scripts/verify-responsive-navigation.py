"""Browser regression checks against a built Wiki served by `npm run preview`.

Requires Python Playwright and Chromium. Example:
    python scripts/verify-responsive-navigation.py --base-url http://127.0.0.1:4173/jlu-fbh/
Screenshots and JSON results go to .tmp-verify/responsive-navigation by default.
"""

import argparse
import json
from pathlib import Path

from playwright.sync_api import sync_playwright


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--base-url', default='http://127.0.0.1:4173/jlu-fbh/')
parser.add_argument('--artifacts', type=Path, default=Path('.tmp-verify/responsive-navigation'))
parser.add_argument('--channel', help='Optional installed Chromium channel, e.g. msedge')
args = parser.parse_args()
base = args.base_url.rstrip('/') + '/'
args.artifacts.mkdir(parents=True, exist_ok=True)
results = []


def record(label, **values):
    result = {'check': label, **values}
    results.append(result)
    print(json.dumps(result, ensure_ascii=False), flush=True)
    (args.artifacts / 'results.json').write_text(
        json.dumps(results, ensure_ascii=False, indent=2), encoding='utf-8')


def ready(page):
    page.wait_for_selector('main.wiki-page', timeout=45000)
    page.wait_for_function("document.getElementById('page-loader')?.hidden", timeout=60000)
    page.wait_for_timeout(500)


def navigate(page, slug):
    page.locator('a[href]').evaluate_all('''(links, slug) => {
        const link=links.find(a=>new URL(a.href).pathname.endsWith('/'+slug));
        if(!link) throw new Error('Missing navigation link: '+slug);
        link.click();
    }''', slug)
    page.wait_for_function('(slug)=>location.pathname.endsWith("/"+slug)', arg=slug)
    ready(page)


def at_top(page, label):
    page.wait_for_timeout(500)
    y = page.evaluate('scrollY')
    assert y <= 1, f'{label}: started at {y}px instead of the hero'
    record(label, scrollY=y)


def reader_geometry(page):
    return page.evaluate('''() => {
        const rect = e => {const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom,right:r.right}};
        const record=document.querySelector('.wiki-record');
        const frame=document.querySelector('.route-frame');
        const inner=document.querySelector('.route-frame__scroll');
        const article=document.querySelector('.wiki-article');
        const css=getComputedStyle(record);
        return {viewport:[innerWidth,innerHeight],documentWidth:document.documentElement.scrollWidth,
          record:rect(record),frame:rect(frame),inner:rect(inner),
          padding:parseFloat(css.paddingBottom),position:css.position,
          innerScroll:inner.scrollTop,extra:inner.scrollHeight-inner.clientHeight,
          contentBottom:article.lastElementChild.getBoundingClientRect().bottom};
    }''')


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, **({'channel': args.channel} if args.channel else {}))
    context = browser.new_context(viewport={'width': 1536, 'height': 864})
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.goto(base + 'sustainability', wait_until='domcontentloaded')
    ready(page)
    at_top(page, 'sustainability-direct-entry')

    # Resize one mounted page across both sides of the JS/CSS reader breakpoint.
    for width, height in [(1536, 864), (1920, 1080), (2560, 1440), (3440, 1440),
                          (3840, 2160), (1280, 720), (1280, 600), (1024, 768), (981, 720),
                          (980, 720), (768, 1024), (390, 844), (320, 568), (1536, 864)]:
        page.set_viewport_size({'width': width, 'height': height})
        page.wait_for_timeout(500)
        page.evaluate('''() => {
            const track=document.querySelector('.wiki-reader-track'), mat=track.firstElementChild;
            const start=track.getBoundingClientRect().top+scrollY-(parseFloat(getComputedStyle(mat).top)||0);
            window.scrollTo({top:start+300,behavior:'instant'});
        }''')
        page.wait_for_timeout(300)
        geometry = reader_geometry(page)
        assert geometry['documentWidth'] <= width + 1, geometry
        assert abs(geometry['record']['width'] - width) <= 1, geometry
        if width > 980:
            assert geometry['position'] == 'sticky', geometry
            assert abs(geometry['frame']['bottom'] - (height - geometry['padding'])) <= 2, geometry
            assert geometry['inner']['height'] > height * 0.65, geometry
            # Follow the same document timeline to its end: the last section must
            # be reachable inside the reading frame, including after a resize.
            for _ in range(5):
                page.evaluate('''() => {
                  const track=document.querySelector('.wiki-reader-track'), record=track.firstElementChild;
                  const inner=record.querySelector('.route-frame__scroll');
                  const start=track.getBoundingClientRect().top+scrollY-parseFloat(getComputedStyle(record).top);
                  window.scrollTo({top:start+inner.scrollHeight-inner.clientHeight,behavior:'instant'});
                }''')
                page.wait_for_timeout(350)
                tail = reader_geometry(page)
                if abs(tail['innerScroll'] - tail['extra']) <= 2:
                    break
            assert abs(tail['innerScroll'] - tail['extra']) <= 2, tail
            assert tail['contentBottom'] <= tail['inner']['bottom'] + 2, tail
        else:
            assert geometry['position'] == 'relative', geometry
            assert geometry['frame']['height'] > height, geometry
        record(f'responsive-{width}x{height}', **geometry)
        if width in (1536, 3840, 390):
            page.screenshot(path=str(args.artifacts / f'reader-{width}x{height}.png'))

    page.locator('.wiki-outline a[href="#sustainability-conclusion"]').first.evaluate('(a)=>a.click()')
    page.wait_for_timeout(500)
    anchor_top = page.locator('#sustainability-conclusion').evaluate('(e)=>e.getBoundingClientRect().top')
    assert 78 <= anchor_top < 432, anchor_top
    record('outline-anchor', targetTop=anchor_top)
    page.screenshot(path=str(args.artifacts / 'sustainability-conclusion.png'))

    page.evaluate('window.scrollTo({top:document.documentElement.scrollHeight,behavior:"instant"})')
    page.wait_for_timeout(400)
    navigate(page, 'engineering')
    at_top(page, 'engineering-from-another-page-footer')
    page.evaluate('window.scrollTo({top:document.documentElement.scrollHeight,behavior:"instant"})')
    page.wait_for_timeout(400)
    page.reload(wait_until='domcontentloaded')
    ready(page)
    at_top(page, 'engineering-reload-from-footer')
    navigate(page, 'sustainability')
    at_top(page, 'reader-after-engineering')
    page.evaluate('window.scrollTo({top:document.documentElement.scrollHeight,behavior:"instant"})')
    page.wait_for_timeout(400)
    navigate(page, 'engineering')
    at_top(page, 'engineering-cached-route-from-footer')
    page.go_back(wait_until='domcontentloaded')
    ready(page)
    at_top(page, 'reader-history-back')
    page.go_forward(wait_until='domcontentloaded')
    ready(page)
    at_top(page, 'engineering-history-forward')

    # Deep links are deliberate entry positions, including within the GSAP scene.
    iteration = page.locator('.eng-stage[data-dbtl-stage="test"]').first.get_attribute('id')
    page.goto(base + 'engineering#' + iteration, wait_until='domcontentloaded')
    ready(page)
    assert page.evaluate('scrollY') > 1000
    visible = page.locator('#' + iteration).evaluate('''e => {
        const r=e.getBoundingClientRect(),s=getComputedStyle(e);
        return {top:r.top,bottom:r.bottom,opacity:s.opacity,visibility:s.visibility};
    }''')
    assert visible['visibility'] == 'visible' and float(visible['opacity']) > 0.9, visible
    assert visible['top'] < 864 and visible['bottom'] > 78, visible
    record('engineering-deep-link', anchor=iteration, **visible)
    page.screenshot(path=str(args.artifacts / 'engineering-deep-link.png'))

    for anchor in ['sdg12-responsible-consumption', 'sustainability-conclusion']:
        page.goto(base + 'sustainability#' + anchor, wait_until='domcontentloaded')
        ready(page)
        top = page.locator('#' + anchor).evaluate('(e)=>e.getBoundingClientRect().top')
        assert 78 <= top < 432, (anchor, top)
        record('reader-deep-link', anchor=anchor, targetTop=top)

    assert not errors, errors
    record('browser-errors', errors=errors)
    browser.close()
