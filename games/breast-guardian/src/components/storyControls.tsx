import { useCallback, useEffect, useState } from 'react';
import { useGame } from '@/hooks/gameState';
import {
  ChevronLeft,
  EyeOff,
  Play,
  ScrollText,
  Settings,
  SkipForward,
  X
} from 'lucide-react';

// 剧情播放引擎共享模块：打字机 / AUTO / SKIP / HIDE / LOG

export interface StoryLine {
  speaker?: string;
  text: string;
  /**
   * Scene backdrop key. Only consumed by the tutorial section, which passes a
   * narrower array than this signature advertises — kept optional so both
   * callers type-check.
   */
  background?: string;
}

// 打字机渲染：逐字显示当前台词
export function useTypewriter(text: string, charMs = 30) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [text]);

  useEffect(() => {
    if (count >= text.length) return;
    const timer = setTimeout(() => setCount((c) => c + 1), charMs);
    return () => clearTimeout(timer);
  }, [count, text, charMs]);

  return {
    displayed: text.slice(0, count),
    isComplete: count >= text.length,
    showAll: () => setCount(text.length)
  };
}

// 剧情播放状态机：管理当前句 / 自动播放 / 隐藏 UI / 回顾
export function useStoryPlayback(scenes: StoryLine[], onFinish: () => void) {
  const [index, setIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const current = scenes[index];
  const isLast = index >= scenes.length - 1;
  const { displayed, isComplete, showAll } = useTypewriter(current?.text ?? '');

  // AUTO：延迟 = 1500ms + 当前句字数 * 45ms；最后一句不自动结算
  useEffect(() => {
    if (!isAuto || showLog || isLast || !current) return;
    const timer = setTimeout(() => {
      setIndex(index + 1);
    }, 1500 + current.text.length * 45);
    return () => clearTimeout(timer);
  }, [isAuto, showLog, isLast, index, scenes, current]);

  // SKIP：打字中→补全整句；已完成→推进下一句（选项层由各页 stopPropagation 强制暂停）
  const advance = useCallback(() => {
    if (isHidden) {
      setIsHidden(false);
      return;
    }
    if (showLog) {
      setShowLog(false);
      return;
    }
    if (!isComplete) {
      showAll();
      return;
    }
    if (index < scenes.length - 1) {
      setIndex(index + 1);
    } else {
      onFinish();
    }
  }, [isHidden, showLog, isComplete, showAll, index, scenes.length, onFinish]);

  // 手动点击屏幕：解除自动播放并推进
  const handleScreenClick = useCallback(() => {
    setIsAuto(false);
    advance();
  }, [advance]);

  const back = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  // 历史台词 = 已播放片段
  const log = scenes.slice(0, index + 1);

  const hiddenUiClass = `transition-opacity duration-300${isHidden ? ' opacity-0 pointer-events-none' : ''}`;

  return {
    index,
    setIndex,
    current,
    isLast,
    displayed,
    isComplete,
    isAuto,
    toggleAuto: () => setIsAuto((v) => !v),
    isHidden,
    hideUi: () => setIsHidden(true),
    showLog,
    setShowLog,
    log,
    advance,
    skip: advance,
    back,
    handleScreenClick,
    hiddenUiClass
  };
}

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
  const { openExitMenu } = useGame();
  const isZh = lang
    ? lang === 'zh'
    : typeof window !== 'undefined'
      ? localStorage.getItem('breast_guardian_lang') === 'zh'
      : false;

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
  const isZh = lang
    ? lang === 'zh'
    : typeof window !== 'undefined'
      ? localStorage.getItem('breast_guardian_lang') === 'zh'
      : false;

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
