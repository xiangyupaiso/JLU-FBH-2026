import { useState, useCallback, useEffect } from 'react';
import { getSheepLines } from '@/data/sheepLines';
import { useGame } from './gameContext';

const SWITCH_MS = 5000;

/**
 * 小羊话术状态：随机初始句 + 每 5s 自动切换 + 手动切换。
 * 供「小羊+气泡」一体组件与「独立气泡」组件复用。
 */
export function useSheepLine() {
  const { state } = useGame();
  const lines = getSheepLines(state?.language);
  const [index, setIndex] = useState(() => Math.floor(Math.random() * lines.length));

  const next = useCallback(() => {
    setIndex((i) => {
      if (lines.length < 2) return i;
      let nextIndex = i;
      while (nextIndex === i) {
        nextIndex = Math.floor(Math.random() * lines.length);
      }
      return nextIndex;
    });
  }, [lines.length]);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(next, SWITCH_MS);
    return () => window.clearInterval(id);
  }, [next]);

  return { line: lines[index % lines.length], next };
}
