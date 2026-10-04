import { useEffect, useRef } from 'react';
import { useGame } from '@/hooks/gameState';

const MESSAGE_SOURCE = 'breast-guardian-game';

function notifyParent(type: string, detail: Record<string, unknown> = {}) {
  if (window.parent === window) return;

  window.parent.postMessage(
    { source: MESSAGE_SOURCE, type, ...detail },
    window.location.origin,
  );
}

export default function WikiBridge() {
  const { state } = useGame();
  const reportedPhaseRef = useRef<string | null>(null);

  useEffect(() => {
    notifyParent('breast-guardian:ready');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      notifyParent('breast-guardian:close');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!['beEnding', 'heEnding', 'specialEnding'].includes(state.currentPhase)) {
      return;
    }

    if (reportedPhaseRef.current === state.currentPhase) return;
    reportedPhaseRef.current = state.currentPhase;

    notifyParent('breast-guardian:complete', {
      stats: {
        perspective: state.currentPerspective ?? null,
        ending: state.currentPhase,
      },
    });
  }, [state.currentPhase, state.currentPerspective]);

  return null;
}
