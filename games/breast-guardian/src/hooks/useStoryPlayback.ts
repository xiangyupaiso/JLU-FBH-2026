import { useCallback, useEffect, useMemo, useState } from 'react';

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
  const characters = useMemo(() => Array.from(text), [text]);
  const [progress, setProgress] = useState({ text, count: 0 });
  // Reset in the rendered result immediately, before the next effect runs.
  if (progress.text !== text) {
    setProgress({ text, count: 0 });
  }
  const count = progress.text === text ? progress.count : 0;

  useEffect(() => {
    if (count >= characters.length) return;
    const timer = setTimeout(() => setProgress({ text, count: count + 1 }), charMs);
    return () => clearTimeout(timer);
  }, [count, text, charMs, characters.length]);

  return {
    displayed: characters.slice(0, count).join(''),
    isComplete: count >= characters.length,
    showAll: () => setProgress({ text, count: characters.length })
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
