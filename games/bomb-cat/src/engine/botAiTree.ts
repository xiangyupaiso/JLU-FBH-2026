/**
 * circRNA 细胞防护 — AI 机器人决策树
 * 纯函数，根据当前游戏状态计算机器人行动。
 * Hook 层负责调度（延迟、循环），引擎层负责状态转移。
 */

import type { GameState, GameAction } from '../types/game';
import { CORE_COMPONENTS, ALL_COMPONENTS } from '../constants/cards';

// ───────── computeBotAction（回合行动决策） ─────────

/**
 * 根据危险系数、手牌组合决定机器人出牌或抽牌。
 *
 * 决策优先级：
 * 1. 集齐 4 组件（靶向构建体）→ 90% 概率打出
 * 2. 集齐 3 核心组件（无靶向构建体）→ 80% 概率打出
 * 3. 危险（牌堆 ≤ 存活人数）且无疫苗 → 85% 概率打出 attack/skip
 * 4. favor → 30% 概率打出
 * 5. future → 25% 概率打出
 * 6. swap / bottom → 低概率策略性使用
 * 6. 否则抽牌
 *
 * botActed=true 时强制抽牌（每回合最多主动出 1 次牌）。
 */
export function computeBotAction(state: GameState, botPlayerId: number): GameAction {
  const bot = state.players[botPlayerId];
  if (!bot || !bot.alive) return { kind: 'draw' };

  // 已出过牌 → 必须抽牌
  if (state.botActed) return { kind: 'draw' };

  const hand = bot.hand;

  // 1. 四组件靶向构建体
  const hasAll = ALL_COMPONENTS.every(c => hand.includes(c));
  if (hasAll && Math.random() < 0.9) {
    return { kind: 'play', cards: ALL_COMPONENTS.map(c => hand.indexOf(c)).filter(i => i >= 0) };
  }

  // 2. 三核心组件构建体
  const hasCore = CORE_COMPONENTS.every(c => hand.includes(c));
  if (hasCore && Math.random() < 0.8) {
    return { kind: 'play', cards: CORE_COMPONENTS.map(c => hand.indexOf(c)).filter(i => i >= 0) };
  }

  // 3. 危险评估：牌堆剩余 ≤ 存活人数 且 无疫苗
  const aliveCount = state.players.filter(p => p.alive).length;
  const danger = state.draw.length <= aliveCount;
  const hasDef = hand.includes('defuse');

  if (danger && !hasDef) {
    if (hand.includes('attack') && Math.random() < 0.85) {
      return { kind: 'play', cards: [hand.indexOf('attack')] };
    }
    if (hand.includes('skip') && Math.random() < 0.85) {
      return { kind: 'play', cards: [hand.indexOf('skip')] };
    }
  }

  // 4. favor（30%）
  if (hand.includes('favor') && Math.random() < 0.3) {
    return { kind: 'play', cards: [hand.indexOf('favor')] };
  }

  // 5. future（25%）
  if (hand.includes('future') && Math.random() < 0.25) {
    return { kind: 'play', cards: [hand.indexOf('future')] };
  }

  if (hand.includes('swap') && hand.length > 1 && Math.random() < 0.2) {
    return { kind: 'play', cards: [hand.indexOf('swap')] };
  }

  if (hand.includes('bottom') && Math.random() < 0.18) {
    return { kind: 'play', cards: [hand.indexOf('bottom')] };
  }

  // 6. 抽牌
  return { kind: 'draw' };
}

// ───────── computeBotNopeDecision（否决链决策） ─────────

/**
 * 在否决链开启时，按概率决定是否打出否决卡。
 * - stack=0（首次否决）→ 40% 概率
 * - stack>0（反否决）→ 28% 概率（越到后面越不愿意，链条自然收敛）
 */
export function computeBotNopeDecision(state: GameState, botPlayerId: number): boolean {
  if (!state.nope?.open) return false;
  const bot = state.players[botPlayerId];
  if (!bot || !bot.alive) return false;
  if (botPlayerId === state.nope.lastActor) return false;
  if (!bot.hand.includes('nope')) return false;

  const prob = state.nope.stack === 0 ? 0.4 : 0.28;
  return Math.random() < prob;
}

// ───────── computeBotPendingResponse（挂起状态回应） ─────────

/**
 * 自动回应二次挂起状态：
 * - future（新抗原预测）→ future_ack 确认
 * - reinsert（拆弹塞回）→ 随机位置塞回
 * - favorPick / swapPick / steal / named（选目标）→ 随机选存活对手
 * - favorGive / swapGive → 交出价值最低的一张牌
 * - nameCard（点名索要）→ 优先索要 defuse
 *
 * @returns GameAction 或 null（不应由该 bot 回应时）
 */
export function computeBotPendingResponse(
  state: GameState,
  botPlayerId: number,
): GameAction | null {
  if (!state.pending) return null;
  const pend = state.pending;

  // 仅 pending.player 需要回应
  if (pend.player !== botPlayerId) return null;
  const bot = state.players[botPlayerId];
  if (!bot || !bot.isBot) return null;

  switch (pend.kind) {
    case 'future':
      return { kind: 'future_ack' };

    case 'reinsert':
      return { kind: 'reinsert', where: 'rand' };

    case 'favorPick':
    case 'swapPick':
    case 'steal':
    case 'named': {
      const target = pickBotTarget(state, botPlayerId);
      if (target < 0) return null;
      return { kind: 'pickTarget', target };
    }

    case 'nameCard':
      // 优先索要 defuse（最有价值）
      return { kind: 'nameCard', card: 'defuse' };

    case 'favorGive':
    case 'swapGive':
      return { kind: 'giveCard', cardIndex: pickGiveIndex(bot.hand) };

    default:
      return null;
  }
}

/** 优先交出低价值组件/信息牌，尽量保留疫苗与 ICI。 */
function pickGiveIndex(hand: GameState['players'][number]['hand']): number {
  const order = ['ires', 'orf', 'circ', 'lnp', 'shuffle', 'future', 'bottom', 'favor', 'swap', 'skip', 'attack', 'nope', 'defuse'] as const;
  for (const key of order) {
    const index = hand.indexOf(key);
    if (index >= 0) return index;
  }
  return 0;
}

// ───────── 内部工具 ─────────

/** 随机选择一名有手牌的存活对手 */
function pickBotTarget(state: GameState, selfId: number): number {
  const cand = state.players
    .filter((p, i) => i !== selfId && p.alive && p.hand.length > 0)
    .map(p => p.id);
  return cand.length ? cand[Math.floor(Math.random() * cand.length)] : -1;
}
