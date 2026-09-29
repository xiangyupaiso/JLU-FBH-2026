import { Check } from 'lucide-react';
import type { ExperimentStep } from '../types';
import { ScrollArea } from './ui/scroll-area';

interface StepIndicatorProps {
  steps: ExperimentStep[];
  currentStep: number;
  completedSteps: number[];
  onStepClick?: (stepIndex: number) => void;
  showDescriptionOnHover?: boolean;
  onStepHover?: (stepIndex: number | null) => void;
  allowFreeNavigation?: boolean;
  tone?: 'default' | 'exp3';
}

export function StepIndicator({
  steps,
  currentStep,
  completedSteps,
  onStepClick,
  showDescriptionOnHover = false,
  onStepHover,
  tone = 'default',
}: StepIndicatorProps) {
  const isExp3 = tone === 'exp3';

  return (
    <div className="h-full bg-card/80 backdrop-blur-sm border border-border rounded-lg p-2.5 flex flex-col">
      <h3 className="font-semibold text-xs mb-2 flex items-center gap-2 shrink-0">
        <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] ${isExp3 ? 'bg-blue-400/20 text-blue-100' : 'bg-primary/20 text-primary'}`}>
          {Math.min(currentStep + 1, steps.length)}
        </span>
        <span className={isExp3 ? 'text-blue-50' : 'text-foreground/90'}>Experiment Steps</span>
      </h3>

      <ScrollArea className="flex-1 -mx-1">
        <div className="space-y-1 px-1">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(index);
            const isActive = index === currentStep;
            const isPending = index > currentStep;
            const canNavigate = Boolean(onStepClick) && !isPending;

            return (
              <div
                key={step.id}
                onClick={() => { if (canNavigate) onStepClick?.(index); }}
                role={onStepClick ? 'button' : undefined}
                tabIndex={onStepClick ? (canNavigate ? 0 : -1) : undefined}
                aria-disabled={onStepClick ? !canNavigate : undefined}
                onKeyDown={canNavigate ? (event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onStepClick?.(index);
                  }
                } : undefined}
                onMouseEnter={() => onStepHover?.(index)}
                onMouseLeave={() => onStepHover?.(null)}
                className={`
                  group flex items-start gap-2 p-1.5 rounded-md transition-all duration-200 border
                  ${canNavigate ? 'cursor-pointer' : isPending ? 'cursor-not-allowed' : 'cursor-default'}
                  ${isExp3
                    ? (
                      isActive
                        ? 'border-blue-300/60 bg-blue-500/25 text-white'
                        : isCompleted
                          ? 'border-blue-400/30 bg-blue-500/15 text-blue-50'
                          : isPending
                            ? 'border-white/10 bg-white/5 text-blue-200/55 hover:bg-white/10 hover:text-blue-100'
                            : 'border-white/15 bg-white/10 text-blue-100'
                    )
                    : (
                      `${isActive ? 'bg-primary/20 border-primary/40' : ''}
                       ${isCompleted ? 'bg-green-500/10 border-green-500/30' : ''}
                       ${isPending ? 'bg-secondary/30 opacity-50' : 'hover:bg-secondary/50'}
                       ${!isActive && !isCompleted ? 'border-transparent' : ''}`
                    )}
                `}
              >
                <div className={`
                  w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0
                  ${isExp3
                    ? (isActive || isCompleted ? 'bg-blue-500 text-white' : 'bg-white/10 text-blue-200/70')
                    : (
                      `${isCompleted ? 'bg-green-500 text-white' : ''}
                       ${isActive ? 'bg-primary text-white animate-pulse' : ''}
                       ${isPending ? 'bg-secondary text-muted-foreground' : ''}`
                      + (canNavigate && !isActive && !isCompleted ? ' bg-secondary text-foreground' : '')
                    )}
                `}>
                  {isCompleted ? (
                    <Check className="w-2.5 h-2.5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`
                    text-[11px] font-medium leading-snug break-words
                    ${isExp3
                      ? ''
                      : `${isActive ? 'text-primary' : ''} ${isPending ? 'text-muted-foreground' : ''}`}
                  `}>
                    {step.title}
                  </p>
                  {showDescriptionOnHover && (
                    <p className="max-h-0 overflow-hidden text-[10px] leading-relaxed text-muted-foreground opacity-0 transition-all duration-200 group-hover:mt-1 group-hover:max-h-24 group-hover:opacity-100">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* 进度条 */}
      <div className="mt-2 pt-2 border-t border-border shrink-0">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
          <span>Overall Progress</span>
          <span>{Math.round((completedSteps.length / steps.length) * 100)}%</span>
        </div>
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${isExp3 ? 'bg-blue-400' : 'bg-gradient-to-r from-primary to-accent'}`}
            style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
