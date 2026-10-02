/**
 * CirCure — 对局主画布
 * 渲染对手席位（仅手牌总数/存活状态）、抽牌堆风险与弃牌堆。
 */

import { motion } from 'framer-motion';
import { Activity, Dna, Trash2 } from 'lucide-react';
import { CARD_META, CATEGORY_COLORS } from '../constants/cards';
import type { GameState, Lang } from '../types/game';

export interface GameBoardProps {
  state: GameState;
  me: number;
  lang: Lang;
  onDraw?: () => void;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const T = (l: { cn: string; en: string }, lang: Lang) => (lang === 'cn' ? l.cn : l.en);

export function GameBoard({ state, me, lang, onDraw }: GameBoardProps) {
  const opponents = state.players.filter((_, i) => i !== me);
  const drawCount = state.drawCount ?? state.draw.length;
  const remainingBombs = state.remainingBombs ?? state.draw.filter(card => card === 'bomb').length;
  const outbreakRate = drawCount > 0 ? (remainingBombs / drawCount) * 100 : 0;

  return (
    <div className="flex flex-col items-center gap-5">
      {/* 对手席位 */}
      <div className="flex flex-wrap justify-center gap-3">
        {opponents.map((p) => {
          const isActive = state.turn === p.id && !state.over;
          const handCount = p.handCount ?? p.hand.length;
          return (
            <motion.div
              key={p.id}
              initial={false}
              animate={{ opacity: p.alive ? 1 : 0.35, scale: isActive ? 1.03 : 1 }}
              transition={{ ease: EASE, duration: 0.36 }}
              className="relative rounded-[12px] px-3.5 py-2.5 text-center"
              style={{
                background: 'var(--wet-paper, #f4f2ed)',
                border: `1.5px solid ${isActive ? 'var(--success, #2f6f68)' : 'rgba(27,23,25,.12)'}`,
                boxShadow: isActive ? '0 0 0 2px rgba(47,111,104,.25)' : 'none',
              }}
            >
              <div className="text-[26px] leading-none">{p.avatar}</div>
              <div className="mt-1.5 text-[13px] font-bold" style={{ color: 'var(--ink-primary, #1b1719)' }}>
                {p.name}{p.isBot ? ' 🤖' : ''}
              </div>
              <div className="mt-0.5 text-[11px]" style={{ color: 'rgba(27,23,25,.68)' }}>
                🎴 {handCount}
              </div>
              {!p.alive && (
                <div
                  className="absolute -right-2 -top-2 rounded-full px-1.5 py-0.5 text-[10px] font-bold text-white"
                  style={{ background: 'var(--danger, #df705b)' }}
                >
                  {T({ cn: '出局', en: 'OUT' }, lang)}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* 中央：抽牌堆 + 弃牌堆 */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* 抽牌堆 */}
        <motion.div
          onClick={onDraw}
          whileHover={onDraw ? { y: -3 } : undefined}
          transition={{ ease: EASE, duration: 0.22 }}
          className={`flex flex-col items-center justify-center ${onDraw ? 'cursor-pointer' : ''}`}
          style={{
            width: 122, height: 172, borderRadius: '13px',
            background: 'linear-gradient(135deg, var(--navy, #173f78), var(--navy-deep, #102f59))',
            border: '2px solid rgba(252,248,241,.15)',
            boxShadow: '0 8px 24px rgba(16,47,89,.25)',
            color: 'rgba(252,248,241,.9)',
          }}
        >
          <Dna size={38} style={{ opacity: 0.5 }} />
          <div className="mt-1.5 text-[13px] font-bold">
            {T({ cn: '抽牌', en: 'Draw' }, lang)}
          </div>
          <div className="text-[12px] opacity-80">
            {T({ cn: '剩 ', en: '' }, lang)}{drawCount}
          </div>
        </motion.div>

        {/* 风险监测：仅公开总量，不暴露牌序 */}
        <motion.div
          key={`${drawCount}-${remainingBombs}`}
          initial={{ opacity: 0.65, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[132px] w-[190px] flex-col justify-center rounded-[13px] px-4 py-3"
          style={{
            background: 'linear-gradient(160deg, rgba(252,248,241,.92), rgba(244,242,237,.76))',
            border: '1px solid rgba(223,112,91,.35)',
            boxShadow: '0 8px 22px rgba(16,47,89,.09)',
          }}
        >
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: 'var(--danger, #df705b)' }}>
            <Activity size={15} /> {T({ cn: '复发风险监测', en: 'Outbreak Monitor' }, lang)}
          </div>
          <div className="mt-3 text-[13px] font-semibold" style={{ color: 'var(--navy-deep, #102f59)' }}>
            {T({ cn: '残余肿瘤爆发', en: 'Outbreaks left' }, lang)}：{remainingBombs} / {state.cfg.bombs}
          </div>
          <div className="mt-1 text-[13px]" style={{ color: 'rgba(27,23,25,.72)' }}>
            {T({ cn: '实时触爆率', en: 'Live risk' }, lang)}：
            <strong style={{ color: outbreakRate >= 20 ? 'var(--danger, #df705b)' : 'var(--success, #2f6f68)' }}>
              {outbreakRate.toFixed(1)}%
            </strong>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full" style={{ background: 'rgba(27,23,25,.08)' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, outbreakRate)}%`, background: 'var(--danger, #df705b)' }} />
          </div>
        </motion.div>

        {/* 弃牌堆 */}
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{
            width: 122, height: 172, borderRadius: '13px',
            border: '2px dashed rgba(27,23,25,.25)',
            background: 'var(--paper, #eee7dc)',
          }}
        >
          {state.discard.length > 0 ? (() => {
            const top = state.discard[state.discard.length - 1];
            const meta = CARD_META[top];
            const color = CATEGORY_COLORS[meta.category];
            const Icon = meta.icon;
            return (
              <>
                <Icon size={22} style={{ color }} />
                <div className="mt-1 text-[10px] font-semibold" style={{ color }}>
                  {T(meta.name, lang)}
                </div>
              </>
            );
          })() : (
            <div className="flex flex-col items-center opacity-60">
              <Trash2 size={22} />
              <div className="mt-1 text-[12px]">
                {T({ cn: '弃牌堆', en: 'Discard' }, lang)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
