/**
 * CirCure — 手牌管理区
 * 分类展示手牌，多选高亮，提供打出/抽牌按钮。
 */

import { motion } from 'framer-motion';
import { Card } from './Card';
import { Button } from './Button';
import { HAND_ORDER } from '../constants/cards';
import type { GameState, Lang } from '../types/game';

export interface HandPanelProps {
  state: GameState;
  me: number;
  lang: Lang;
  sel: number[];
  setSel: React.Dispatch<React.SetStateAction<number[]>>;
  onPlay: () => void;
  onDraw: () => void;
  canAct: boolean;
}

const T = (l: { cn: string; en: string }, lang: Lang) => (lang === 'cn' ? l.cn : l.en);

export function HandPanel({ state, me, lang, sel, setSel, onPlay, onDraw, canAct }: HandPanelProps) {
  const player = state.players[me];
  if (!player) return null;

  const toggleSel = (i: number) => {
    if (!canAct) return;
    setSel((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  };

  // 按 HAND_ORDER 排序，保留原始索引
  const sorted = player.hand
    .map((c, i) => ({ c, i }))
    .sort((a, b) => {
      const oa = HAND_ORDER.indexOf(a.c);
      const ob = HAND_ORDER.indexOf(b.c);
      return (oa < 0 ? 99 : oa) - (ob < 0 ? 99 : ob);
    });

  return (
    <div className="flex w-full flex-col items-center">
      {/* 标题行 */}
      <div className="mb-2 flex w-full max-w-[900px] justify-between px-1">
        <span className="text-[13px] font-semibold" style={{ color: 'rgba(27,23,25,.85)' }}>
          {T({ cn: '你的手牌', en: 'Your Hand' }, lang)}
        </span>
        <span className="text-[13px]" style={{ color: 'rgba(27,23,25,.68)' }}>
          {state.over ? '' : state.turn === me
            ? T({ cn: `你的回合（还需 ${state.turnsLeft}）`, en: `Your turn (${state.turnsLeft})` }, lang)
            : T({ cn: `${state.players[state.turn]?.name} 行动中…`, en: `${state.players[state.turn]?.name}…` }, lang)}
        </span>
      </div>

      {/* 手牌 */}
      <motion.div layout className="flex min-h-[182px] flex-wrap justify-center gap-[11px]">
        {sorted.map(({ c, i }) => (
          <Card
            key={`${i}-${c}`}
            cardKey={c}
            selected={sel.includes(i)}
            lang={lang}
            onClick={() => toggleSel(i)}
          />
        ))}
      </motion.div>

      {/* 操作按钮 */}
      <div className="mt-3 flex flex-wrap justify-center gap-2.5">
        <Button variant="pink" onClick={onPlay} disabled={sel.length === 0 || !canAct}>
          {T({ cn: '打出选中', en: 'Play selected' }, lang)}
        </Button>
        <Button variant="primary" onClick={onDraw} disabled={!canAct}>
          🎴 {T({ cn: '抽牌结束回合', en: 'Draw & end' }, lang)}
        </Button>
        {sel.length > 0 && (
          <Button variant="ghost" onClick={() => setSel([])}>
            {T({ cn: '取消', en: 'Clear' }, lang)}
          </Button>
        )}
      </div>
    </div>
  );
}
