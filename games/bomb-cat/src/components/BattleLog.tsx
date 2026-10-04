/**
 * CirCure — 侧边栏战报
 * 编辑风气泡日志：本人右对齐、他人左对齐、系统旁白居中。
 * 自动滚动到底部。
 */

import { useRef, useEffect } from 'react';
import type { GameState, Lang } from '../types/game';

export interface BattleLogProps {
  state: GameState;
  me: number;
  lang: Lang;
}

export function BattleLog({ state, me, lang }: BattleLogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [state.log]);

  const entries = state.log.slice(-45);

  return (
    <div
      className="flex flex-col rounded-[14px] p-3"
      style={{
        background: 'var(--wet-paper-deep, #ebe7df)',
        border: '1px solid rgba(27,23,25,.09)',
        maxHeight: '74vh',
      }}
    >
      <div className="mb-2.5 px-0.5 text-[13px] font-bold" style={{ color: 'rgba(27,23,25,.85)' }}>
        {lang === 'cn' ? '📜 战报' : '📜 Battle Log'}
      </div>
      <div ref={scrollRef} className="flex flex-col gap-2.5 overflow-y-auto pr-1">
        {entries.map((entry, idx) => {
          const message = typeof entry.m === 'string' ? entry.m : entry.m[lang];
          // 系统旁白（a === null）
          if (entry.a === null || entry.a === undefined || !state.players[entry.a]) {
            return (
              <div key={idx} className="self-center px-2 py-0.5 text-center text-[11px] leading-relaxed"
                style={{ color: 'rgba(27,23,25,.6)' }}>
                {message}
              </div>
            );
          }
          const author = state.players[entry.a];
          const isMe = entry.a === me;
          const bg = entry.c === 'hl'
            ? (isMe ? '#0f4a3a' : '#134438')
            : entry.c === 'bad'
              ? (isMe ? '#4a2233' : '#48202f')
              : (isMe ? '#123f36' : '#1d3b56');
          const borderColor = entry.c === 'hl'
            ? 'rgba(47,111,104,.45)'
            : entry.c === 'bad'
              ? 'rgba(223,112,91,.45)'
              : 'rgba(252,248,241,.08)';

          return (
            <div key={idx} className={`flex gap-2 items-end ${isMe ? 'self-end flex-row-reverse' : 'self-start'}`}
              style={{ maxWidth: '90%' }}>
              <div
                className="flex items-center justify-center text-[15px] flex-shrink-0"
                style={{
                  width: 30, height: 30, borderRadius: '50%',
                  background: isMe ? '#123f36' : '#0e3040',
                  border: '1px solid rgba(252,248,241,.14)',
                }}
              >
                {author.avatar || '🧑‍🔬'}
              </div>
              <div className={`flex flex-col gap-0.5 min-w-0 ${isMe ? 'items-end' : 'items-start'}`}>
                <div className="px-1.5 text-[10px]" style={{ color: 'rgba(27,23,25,.55)' }}>
                  {author.name}
                </div>
                <div
                  className="px-3 py-1.5 text-[12.5px] leading-relaxed break-words"
                  style={{
                    background: bg,
                    border: `1px solid ${borderColor}`,
                    color: 'rgba(252,248,241,.95)',
                    borderRadius: isMe ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                  }}
                >
                  {message}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
