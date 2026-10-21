import { useEffect, useState } from 'react';
import type { StoryLine } from '@/hooks/useStoryPlayback';
import { useGame } from '@/hooks/gameContext';
import {
  ChevronLeft,
  EyeOff,
  Play,
  ScrollText,
  Settings,
  SkipForward,
  X
} from 'lucide-react';

const stop = (fn: () => void) => (event: React.MouseEvent) => {
  event.stopPropagation();
  fn();
};

const BAR_BUTTON =
  'flex items-center gap-1 rounded-none border-2 border-[#3E2723] px-2.5 py-1 text-xs font-bold shadow-[0_2px_0_#3E2723] transition-all select-none active:translate-y-0.5 active:shadow-none';

const BAR_BUTTON_IDLE = 'bg-[#FFFDF8]/90 text-[#3E2723] hover:bg-[#FFE082]';

interface StoryControlBarProps {
  className?: string;
  extra?: React.ReactNode;
  canBack?: boolean;
  onBack?: () => void;
  hideExit?: boolean;
  onExit?: () => void;
  isAuto: boolean;
  onToggleAuto: () => void;
  onSkip: () => void;
  onHide: () => void;
  onShowLog: () => void;
  onSettings?: () => void;
  lang?: 'zh' | 'en';
}

// Retro pixel shortcut bar: BACK / AUTO / SKIP / HIDE / LOG / SETTINGS / EXIT
export function StoryControlBar({
  className = '',
  extra,
  canBack = false,
  onBack,
  hideExit = false,
  onExit,
  isAuto,
  onToggleAuto,
  onSkip,
  onHide,
  onShowLog,
  onSettings,
  lang
}: StoryControlBarProps) {
  const { state, openExitMenu } = useGame();
  const isZh = (lang ?? state.language) === 'zh';

  const handleExit = onExit || openExitMenu;

  return (
    <div className={`absolute top-4 right-4 z-40 flex flex-wrap items-center justify-end gap-2 select-none ${className}`}>
      {extra}
      {onBack && (
        <button
          className={`${BAR_BUTTON} ${
            canBack ? BAR_BUTTON_IDLE : 'cursor-not-allowed border-[#3E2723]/40 bg-[#E8E0D4] text-[#3E2723]/40 shadow-none'
          }`}
          disabled={!canBack}
          onClick={stop(onBack)}
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          {isZh ? '回退' : 'BACK'}
        </button>
      )}
      <button
        className={`${BAR_BUTTON} ${isAuto ? 'scale-105 bg-[#E91E63] text-white' : BAR_BUTTON_IDLE}`}
        onClick={stop(onToggleAuto)}
      >
        <Play className="h-3.5 w-3.5" />
        AUTO
      </button>
      <button className={`${BAR_BUTTON} ${BAR_BUTTON_IDLE}`} onClick={stop(onSkip)}>
        <SkipForward className="h-3.5 w-3.5" />
        SKIP
      </button>
      <button className={`${BAR_BUTTON} ${BAR_BUTTON_IDLE}`} onClick={stop(onHide)}>
        <EyeOff className="h-3.5 w-3.5" />
        {isZh ? '隐藏' : 'HIDE'}
      </button>
      <button className={`${BAR_BUTTON} ${BAR_BUTTON_IDLE}`} onClick={stop(onShowLog)}>
        <ScrollText className="h-3.5 w-3.5" />
        {isZh ? '回顾' : 'LOG'}
      </button>
      {onSettings && (
        <button className={`${BAR_BUTTON} ${BAR_BUTTON_IDLE}`} onClick={stop(onSettings)}>
          <Settings className="h-3.5 w-3.5" />
          {isZh ? '设置' : 'SETTINGS'}
        </button>
      )}
      {!hideExit && (
        <button
          className={`${BAR_BUTTON} bg-[#C2185B] text-white hover:bg-[#D81B60]`}
          onClick={stop(handleExit)}
          title={isZh ? '退出 / 菜单' : 'Exit / Menu'}
        >
          <X className="h-3.5 w-3.5" />
          {isZh ? '退出' : 'EXIT'}
        </button>
      )}
    </div>
  );
}

// Story line history drawer
export function StoryLogDrawer({
  open,
  onClose,
  entries,
  lang
}: {
  open: boolean;
  onClose: () => void;
  entries: StoryLine[];
  lang?: 'zh' | 'en';
}) {
  const [shown, setShown] = useState(false);
  const { state } = useGame();
  const isZh = (lang ?? state.language) === 'zh';

  useEffect(() => {
    if (open) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    setShown(false);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="absolute inset-0 z-50 bg-black/30"
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <div
        className={`absolute right-0 top-0 flex h-full w-[min(420px,88vw)] flex-col border-l-4 border-[#3E2723] bg-[#2B1B17]/85 shadow-[0_0_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-300 ${
          shown ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b-2 border-[#D4A373]/50 px-4 py-3">
          <h3 className="flex items-center gap-2 text-sm font-bold tracking-wider text-[#FFE082]">
            <ScrollText className="h-4 w-4" />
            {isZh ? '历史台词' : 'Story Log'}
          </h3>
          <button
            className="flex h-7 w-7 items-center justify-center border-2 border-[#3E2723] bg-[#6B2D5C] text-[#FFE082] shadow-[0_2px_0_#3E2723]"
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {entries.map((entry, i) => (
            <div key={i} className="rounded-none border-l-4 border-[#6B2D5C]/60 bg-white/5 px-3 py-2">
              {entry.speaker && entry.speaker !== '旁白' && entry.speaker !== 'Narrator' ? (
                <p className="mb-1 text-xs font-bold tracking-wider text-[#FFE082]">{entry.speaker}</p>
              ) : null}
              <p className={`text-sm leading-relaxed ${entry.speaker === '旁白' || entry.speaker === 'Narrator' ? 'italic text-[#C9B8A8]' : 'text-[#F5EFE6]'}`}>
                {entry.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
