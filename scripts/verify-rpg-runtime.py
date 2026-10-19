"""Browser regressions for the RPG iframe and dialogue playback.

Run against a running wiki dev or preview server:
    python scripts/verify-rpg-runtime.py --base-url http://127.0.0.1:5173/jlu-fbh/
Requires Python Playwright (Chromium) and the repository's Node dependencies.
"""

import argparse
import json
from pathlib import Path
import subprocess

from playwright.sync_api import expect, sync_playwright


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / '.tmp-verify' / 'rpg'
OUTPUT.mkdir(parents=True, exist_ok=True)
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--base-url', default='http://127.0.0.1:5173/jlu-fbh/')
args = parser.parse_args()
BASE = args.base_url.rstrip('/') + '/'


def launch(page):
    page.goto(BASE + 'games', wait_until='networkidle', timeout=60000)
    page.locator('#game-breast-guardian').get_by_role('button').click()


def ready(page):
    frame = page.frame_locator('.breast-guardian-game-frame')
    expect(frame.get_by_role('button', name='Start Game', exact=True)).to_be_visible(timeout=30000)
    expect(page.locator('.bg-loading')).to_be_hidden(timeout=10000)
    return frame


def exercise_story(frame):
    # Switching language must also work when storage writes are denied.
    frame.get_by_role('button', name='中文', exact=True).click()
    frame.get_by_role('button', name='开始游戏', exact=True).click()
    frame.get_by_role('heading', name='幼年视角', exact=True).click()
    expect(frame.get_by_role('button', name='SKIP', exact=True)).to_be_visible()
    frame.get_by_role('button', name='SKIP', exact=True).click()
    frame.get_by_role('button', name='回顾', exact=True).click()
    expect(frame.get_by_role('heading', name='历史台词', exact=True)).to_be_visible()


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    try:
        for scenario in ['normal', 'storage-read-denied', 'storage-write-denied', 'invalid-language']:
            context = browser.new_context(viewport={'width': 1280, 'height': 800})
            if scenario == 'storage-read-denied':
                context.add_init_script("""
                    if (location.pathname.includes('/game-assets/')) {
                        Object.defineProperty(window, 'localStorage', {get() {
                            throw new DOMException('Storage blocked', 'SecurityError');
                        }});
                    }
                """)
            elif scenario == 'storage-write-denied':
                context.add_init_script("""
                    if (location.pathname.includes('/game-assets/')) {
                        Storage.prototype.setItem = () => {throw new DOMException('Storage full', 'QuotaExceededError')};
                    }
                """)
            elif scenario == 'invalid-language':
                context.add_init_script("""
                    if (location.pathname.includes('/game-assets/')) {
                        localStorage.setItem('breast_guardian_lang', 'invalid');
                    }
                """)
            page = context.new_page()
            errors = []
            page.on('pageerror', lambda error: errors.append(str(error)))
            launch(page)
            exercise_story(ready(page))
            assert not errors, (scenario, errors)
            if scenario == 'storage-read-denied':
                page.screenshot(path=str(OUTPUT / 'storage-denied-fixed.png'))
            print(f'PASS {scenario}: menu, language switch, dialogue, history', flush=True)
            context.close()

        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()
        page.route('**/game-assets/assets/*.js', lambda route: route.abort())
        launch(page)
        page.wait_for_timeout(1200)
        # The iframe load event must never reveal its empty root.
        expect(page.locator('.bg-loading')).to_be_visible()
        expect(page.get_by_role('button', name='Retry loading')).to_be_visible(timeout=20000)
        page.screenshot(path=str(OUTPUT / 'startup-retry.png'))
        page.unroute('**/game-assets/assets/*.js')
        page.get_by_role('button', name='Retry loading').click()
        ready(page)
        expect(page.locator('.breast-guardian-game-frame')).to_have_count(1)
        page.get_by_role('button', name='Close experience').click()
        expect(page.locator('.breast-guardian-game-frame')).to_have_count(0)
        page.locator('#game-breast-guardian').get_by_role('button').click()
        ready(page)
        print('PASS missing scripts: loading remains visible, timeout offers retry, retry and reopening recover', flush=True)
        context.close()

        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()
        page.route('**/game-assets/index.html', lambda route: route.fulfill(
            content_type='text/html',
            body='''<div>Starting the game...</div><script>
                window.reportReady = () => parent.postMessage({
                    source: 'breast-guardian-game', type: 'breast-guardian:ready'
                }, location.origin);
            </script>''',
        ))
        launch(page)
        expect(page.locator('.bg-loading')).to_be_visible()
        page.evaluate("window.postMessage({source:'breast-guardian-game',type:'breast-guardian:ready'},location.origin)")
        page.wait_for_timeout(700)
        expect(page.locator('.bg-loading')).to_be_visible()
        expect(page.get_by_role('button', name='Retry loading')).to_be_visible(timeout=20000)
        game_frame = next(frame for frame in page.frames if '/game-assets/index.html' in frame.url)
        game_frame.evaluate('window.reportReady()')
        expect(page.locator('.bg-loading')).to_be_hidden()
        print('PASS delayed startup: unrelated messages ignored; genuine late readiness recovers', flush=True)
        context.close()

        # Record every committed render to catch both a whole-line flash during
        # dialogue changes and isolated UTF-16 surrogate halves during typing.
        fixture = r'''
            import React, {useLayoutEffect, useState} from 'react';
            import {createRoot} from 'react-dom/client';
            import {useTypewriter} from './src/components/storyControls.tsx';
            window.recordedFrames = [];
            function Probe() {
                const [text, setText] = useState('An intentionally long opening line.');
                const playback = useTypewriter(text, 20);
                useLayoutEffect(() => {
                    window.recordedFrames.push({text, displayed: playback.displayed, complete: playback.isComplete});
                    window.changeLine = setText;
                    window.finishLine = playback.showAll;
                });
                return React.createElement('p', null, playback.displayed);
            }
            createRoot(document.getElementById('root')).render(React.createElement(Probe));
        '''
        bundle_command = '''
            import {build} from 'esbuild';
            const result = await build({
                stdin: {contents: JSON.parse(process.argv[1]), resolveDir: process.cwd(), loader: 'tsx'},
                bundle: true, write: false, format: 'iife', platform: 'browser',
                alias: {'@': process.cwd() + '/src'}, logLevel: 'silent',
                define: {'process.env.NODE_ENV': '"production"'}
            });
            process.stdout.write(result.outputFiles[0].text);
        '''
        bundle = subprocess.check_output(
            ['node', '--input-type=module', '-e', bundle_command, json.dumps(fixture)],
            cwd=ROOT / 'games' / 'breast-guardian', encoding='utf-8',
        )
        page = browser.new_page()
        page.set_content('<div id="root"></div>')
        page.add_script_tag(content=bundle)
        page.wait_for_function('window.finishLine !== undefined')
        page.evaluate('window.finishLine()')
        page.wait_for_function('window.recordedFrames.at(-1).complete')
        page.evaluate("window.changeLine('🧬 New line')")
        page.wait_for_function("window.recordedFrames.at(-1).text === '🧬 New line' && window.recordedFrames.at(-1).complete")
        frames = page.evaluate('window.recordedFrames')
        changed_frames = [frame for frame in frames if frame['text'] == '🧬 New line']
        assert changed_frames[0]['displayed'] == '', changed_frames
        assert changed_frames[-1]['displayed'] == '🧬 New line'
        for frame in frames:
            frame['displayed'].encode('utf-8', errors='strict')
        print('PASS typewriter: no whole-line flash; emoji stays intact on every render', flush=True)
    finally:
        browser.close()
