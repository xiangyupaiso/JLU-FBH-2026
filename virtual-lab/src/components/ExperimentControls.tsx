import { RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

export function RestartExperimentButton({ onRestart }: { onRestart: () => void }) {
  return (
    <button type="button" onClick={onRestart} aria-label="Restart experiment" title="Restart experiment"
      className="grid h-8 w-8 shrink-0 place-items-center rounded text-blue-200 hover:bg-white/10 hover:text-white">
      <RotateCcw className="h-4 w-4" />
    </button>
  );
}

export function ExperimentCompletion({ onRestart, onBack }: { onRestart: () => void; onBack: () => void }) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="experiment-complete-title"
      className="absolute inset-0 z-[300] flex items-center justify-center bg-slate-900/95 p-6 text-center animate-in fade-in">
      <div className="max-w-xs">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">✓</div>
        </div>
        <h2 id="experiment-complete-title" className="mb-6 text-3xl font-black tracking-tight text-white">Experiment Complete</h2>
        <div className="flex gap-3">
          <Button onClick={onRestart} className="flex-1 bg-blue-600">Try Again</Button>
          <Button onClick={onBack} variant="outline" className="flex-1">Back</Button>
        </div>
      </div>
    </div>
  );
}
