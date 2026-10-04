/**
 * CirCure — 弹窗与否决条
 * 1. 否决链悬浮条（底部 fixed，深蓝调色板）
 * 2. 二次挂起弹窗（Future 偷看 / Reinsert 塞回 / Favor-Steal 选目标 / NameCard 点名）
 * 3. 胜负弹窗
 */

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { CARD_META, CATEGORY_COLORS, getNopeEffectName } from '../constants/cards';
import type { GameState, Lang, CardKey, NetworkAction } from '../types/game';

export interface DialogsProps {
  state: GameState;
  me: number;
  lang: Lang;
  /** 统一发送操作 */
  onAction: (action: NetworkAction) => void;
  /** 关闭胜负弹窗 */
  onExit?: () => void;
}

const T = (l: { cn: string; en: string }, lang: Lang) => (lang === 'cn' ? l.cn : l.en);
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Dialogs({ state, me, lang, onAction, onExit }: DialogsProps) {
  const player = state.players[me];
  const nope = state.nope;
  const pending = state.pending;

  // ── 否决条 ──
  const canNope = nope?.open && me !== nope.lastActor && player?.alive && player.hand.includes('nope');
  const lastNopeActor = nope ? state.players[nope.lastActor] : null;
  const nopeCardName = nope ? getNopeEffectName(nope.card, lang) : '';

  // ── 挂起弹窗（仅当 pending.player === me） ──
  const myPending = pending?.player === me ? pending : null;

  // ── 胜负弹窗 ──
  const showWin = state.over;

  return (
    <>
      {/* ────── 否决链悬浮条 ────── */}
      <AnimatePresence>
        {canNope && nope && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ ease: EASE, duration: 0.36 }}
            className="fixed bottom-4 left-1/2 z-40 flex items-center gap-3 rounded-[12px] px-4 py-2.5"
            style={{
              transform: 'translateX(-50%)',
              background: 'var(--navy-deep, #102f59)',
              border: '1px solid var(--navy, #173f78)',
              boxShadow: '0 8px 30px rgba(0,0,0,.4)',
            }}
          >
            <span className="text-[13px]" style={{ color: 'rgba(252,248,241,.9)' }}>
              {nope.stack === 0
                ? T({ cn: `${lastNopeActor?.name} 打出「${nopeCardName}」，否决？`, en: `${lastNopeActor?.name} played ${nopeCardName} — Nope it?` }, lang)
                : T({ cn: `${lastNopeActor?.name} 打出了否决牌，反否决？`, en: `${lastNopeActor?.name} played a Nope — counter it?` }, lang)}
            </span>
            <Button variant="pink" onClick={() => onAction({ kind: 'nope' })}>
              🚫 {nope.stack === 0 ? T({ cn: '否决', en: 'Nope' }, lang) : T({ cn: '反否决', en: 'Counter' }, lang)}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ────── 挂起弹窗 ────── */}
      <AnimatePresence>
        {myPending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(16,47,89,.78)' }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ ease: EASE, duration: 0.32 }}
              className="w-full max-w-[460px] rounded-[16px] p-5 text-center"
              style={{
                background: 'var(--wet-paper-light, #fbfaf7)',
                border: '1px solid rgba(27,23,25,.14)',
                boxShadow: '0 20px 60px rgba(0,0,0,.4)',
              }}
            >
              {renderPendingContent(myPending, state, lang, onAction)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ────── 胜负弹窗 ────── */}
      <AnimatePresence>
        {showWin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(16,47,89,.78)' }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ ease: EASE, duration: 0.44 }}
              className="w-full max-w-[460px] rounded-[16px] p-6 text-center"
              style={{
                background: 'var(--wet-paper-light, #fbfaf7)',
                border: '1px solid rgba(27,23,25,.14)',
              }}
            >
              {(() => {
                const winner = state.winner != null ? state.players[state.winner] : null;
                const won = winner?.id === me;
                return (
                  <>
                    <div className="text-[52px]">{won ? '🏆🧬' : '🔬'}</div>
                    <h2 className="mt-2 text-[24px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
                      {won ? T({ cn: '你赢了！', en: 'You win!' }, lang) : T({ cn: '游戏结束', en: 'Game over' }, lang)}
                    </h2>
                    <p className="mt-2 text-[14px]" style={{ color: 'rgba(27,23,25,.68)' }}>
                      {won
                        ? T({ cn: '你的团队让患者获得持久缓解，赢下 circRNA 疫苗研发竞赛！', en: 'Durable remission — you won the race!' }, lang)
                        : T({ cn: `${winner?.name ?? ''} 笑到最后。`, en: `${winner?.name ?? ''} survived.` }, lang)}
                    </p>
                    <div className="mt-4">
                      <Button variant="pink" onClick={onExit}>
                        {T({ cn: '返回菜单', en: 'Back to menu' }, lang)}
                      </Button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ───────── 挂起弹窗内容渲染 ─────────

function renderPendingContent(
  pending: NonNullable<GameState['pending']>,
  state: GameState,
  lang: Lang,
  onAction: (a: NetworkAction) => void,
) {
  switch (pending.kind) {
    // 新抗原预测：偷看顶端 3 张
    case 'future': {
      const positions = lang === 'cn' ? ['最顶', '第2', '第3'] : ['next', '2nd', '3rd'];
      const cards = pending.cards ?? [];
      return (
        <>
          <h2 className="text-[20px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            🔮 {T({ cn: '新抗原预测', en: 'Neoantigen Prediction' }, lang)}
          </h2>
          <p className="mt-1.5 text-[13px]" style={{ color: 'rgba(27,23,25,.68)' }}>
            {T({ cn: '牌堆顶端 3 张（左=最先抽到）：', en: 'Top 3 (left = next):' }, lang)}
          </p>
          <div className="my-3 flex justify-center gap-2.5">
            {cards.length > 0 ? cards.map((c, i) => {
              const meta = CARD_META[c as CardKey];
              const color = CATEGORY_COLORS[meta.category];
              const Icon = meta.icon;
              return (
                <div key={i} className="flex w-[80px] flex-col items-center rounded-[9px] p-1.5 text-white"
                  style={{ background: color }}>
                  <Icon size={20} />
                  <div className="mt-1 text-[11px] font-semibold">{T(meta.name, lang)}</div>
                  <div className="text-[9px] opacity-70">{positions[i]}</div>
                </div>
              );
            }) : (
              <div className="py-4 text-[14px] opacity-70">{T({ cn: '牌堆空', en: 'empty' }, lang)}</div>
            )}
          </div>
          <Button variant="primary" onClick={() => onAction({ kind: 'future_ack' })}>
            {T({ cn: '知道了', en: 'OK' }, lang)}
          </Button>
        </>
      );
    }

    // 拆弹塞回
    case 'reinsert': {
      return (
        <>
          <h2 className="text-[20px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            🛡️ {T({ cn: '拆弹成功！', en: 'Defused!' }, lang)}
          </h2>
          <p className="mt-1.5 text-[13px]" style={{ color: 'rgba(27,23,25,.68)' }}>
            {T({ cn: '把肿瘤爆发秘密塞回牌堆哪里？', en: 'Where to reinsert the outbreak?' }, lang)}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button variant="primary" onClick={() => onAction({ kind: 'reinsert', where: 'top' })}>
              {T({ cn: '最顶端', en: 'Top' }, lang)}
            </Button>
            <Button variant="ghost" onClick={() => onAction({ kind: 'reinsert', where: 'rand' })}>
              {T({ cn: '随机', en: 'Random' }, lang)}
            </Button>
            <Button variant="ghost" onClick={() => onAction({ kind: 'reinsert', where: 'bottom' })}>
              {T({ cn: '最底部', en: 'Bottom' }, lang)}
            </Button>
          </div>
        </>
      );
    }

    // 选目标（Favor / Swap / Steal / Named）
    case 'favorPick':
    case 'swapPick':
    case 'steal':
    case 'named': {
      const title = pending.kind === 'favorPick'
        ? `🌿 ${T({ cn: '抗原提呈', en: 'Favor' }, lang)}`
        : pending.kind === 'swapPick'
          ? `🔁 ${T({ cn: '免疫突触交换', en: 'Immune Synapse Swap' }, lang)}`
        : pending.kind === 'named'
          ? `🎯 ${T({ cn: '靶向索要', en: 'Targeted' }, lang)}`
          : `🧩 ${T({ cn: '随机抢牌', en: 'Steal' }, lang)}`;
      const targets = state.players
        .filter((p, i) => i !== pending.player && p.alive && (p.handCount ?? p.hand.length) > 0);
      return (
        <>
          <h2 className="text-[20px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>{title}</h2>
          <p className="mt-1.5 text-[13px]" style={{ color: 'rgba(27,23,25,.68)' }}>
            {T({ cn: '选择一名目标玩家：', en: 'Choose a target:' }, lang)}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {targets.map((p) => (
              <Button key={p.id} variant="ghost"
                onClick={() => onAction({ kind: 'pickTarget', target: p.id })}>
                {p.name} (🎴{p.handCount ?? p.hand.length})
              </Button>
            ))}
          </div>
        </>
      );
    }

    // 提呈受方选牌 / 交换发起者秘密选牌
    case 'favorGive':
    case 'swapGive': {
      const hand = state.players[pending.player]?.hand ?? [];
      const isSwap = pending.kind === 'swapGive';
      return (
        <>
          <h2 className="text-[20px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            {isSwap ? '🔁' : '🌿'} {isSwap
              ? T({ cn: '秘密选择交换牌', en: 'Choose a card to swap' }, lang)
              : T({ cn: '选择交出的牌', en: 'Choose a card to give' }, lang)}
          </h2>
          <p className="mt-1.5 text-[13px]" style={{ color: 'rgba(27,23,25,.68)' }}>
            {isSwap
              ? T({ cn: '这张牌会交给目标；随后你会随机取得对方原有的一张牌。', en: 'Give this card, then receive one of their original cards at random.' }, lang)
              : T({ cn: '抗原提呈要求你自行挑选 1 张手牌交出。', en: 'Choose one card from your hand to give.' }, lang)}
          </p>
          <div className="mt-4 flex max-h-[300px] flex-wrap justify-center gap-2 overflow-y-auto">
            {hand.map((key, index) => {
              const meta = CARD_META[key];
              const Icon = meta.icon;
              return (
                <button key={`${key}-${index}`} onClick={() => onAction({ kind: 'giveCard', cardIndex: index })}
                  className="inline-flex items-center gap-1.5 rounded-[6px] px-3 py-2 text-[13px] font-semibold"
                  style={{ border: '1px solid rgba(27,23,25,.18)', color: 'var(--navy-deep, #102f59)' }}>
                  <Icon size={16} /> {T(meta.name, lang)}
                </button>
              );
            })}
          </div>
        </>
      );
    }

    // 点名索要具体牌
    case 'nameCard': {
      const target = state.players[pending.target];
      const nameOptions: CardKey[] = [
        'defuse', 'nope', 'attack', 'skip', 'favor', 'shuffle', 'future', 'bottom', 'swap',
        'ires', 'orf', 'circ', 'lnp',
      ];
      return (
        <>
          <h2 className="text-[20px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            🎯 {T({ cn: '点名一种牌', en: 'Name a card' }, lang)}
          </h2>
          <p className="mt-1.5 text-[13px]" style={{ color: 'rgba(27,23,25,.68)' }}>
            {T({ cn: `从 ${target?.name} 处索要（若有则拿走一张）`, en: `Take from ${target?.name} if they have it` }, lang)}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {nameOptions.map((k) => {
              const meta = CARD_META[k];
              const Icon = meta.icon;
              return (
                <button
                  key={k}
                  onClick={() => onAction({ kind: 'nameCard', card: k })}
                  className="inline-flex items-center gap-1.5 rounded-[6px] px-3 py-2 text-[13px] font-semibold transition-colors"
                  style={{
                    border: '1px solid rgba(27,23,25,.18)',
                    background: 'transparent',
                    color: 'var(--navy-deep, #102f59)',
                  }}
                >
                  <Icon size={16} />
                  {T(meta.name, lang)}
                </button>
              );
            })}
          </div>
        </>
      );
    }

    default:
      return null;
  }
}
