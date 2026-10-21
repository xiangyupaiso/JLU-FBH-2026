/**
 * Wiki integration bridge.
 *
 * The published wiki embeds this game in an iframe and listens for messages on
 * `window.parent`. Three events are reported:
 *
 *   bomb-cat:ready    once the bundle has mounted
 *   bomb-cat:close    the player pressed Escape
 *   bomb-cat:complete the round ended (with win/loss stats)
 *
 * Standalone (opened directly in a browser, no iframe) `window.parent ===
 * window`, so every `notifyParent` call is a no-op and nothing is posted.
 *
 * This replaces an inline `MutationObserver` in the prebuilt wiki bundle that
 * scraped the visible `你赢了！ / 游戏结束 / You win! / Game over` heading out of
 * the DOM. Completion is now derived from game state, so it cannot be missed
 * by a copy change and does not depend on rendering order.
 */
import { useEffect, useRef } from 'react';
import { useSharedGameEngine } from '../hooks/gameEngineContext';
import { completionStats } from './wikiBridgeStats';

const MESSAGE_SOURCE = 'bomb-cat-game';

function notifyParent(type: string, detail: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  if (window.parent === window) return;

  window.parent.postMessage(
    { source: MESSAGE_SOURCE, type, ...detail },
    window.location.origin,
  );
}

export default function WikiBridge({ me }: { me: number }) {
  const { gameState } = useSharedGameEngine();
  const reportedRef = useRef(false);

  // ready
  useEffect(() => {
    notifyParent('bomb-cat:ready');
  }, []);

  // close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      notifyParent('bomb-cat:close');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // complete — fires once per round
  useEffect(() => {
    if (!gameState?.over) {
      reportedRef.current = false;
      return;
    }
    if (reportedRef.current) return;
    reportedRef.current = true;

    notifyParent('bomb-cat:complete', { stats: completionStats(gameState, me) });
  }, [gameState, me]);

  return null;
}