/**
 * circRNA 细胞防护 — 权威主机引擎（纯函数）
 * 所有状态转移均为不可变操作，返回新的 GameState。
 * 定时器、广播、DOM 等 Side-Effect 由 Hooks 层处理。
 */

import type {
  GameState, Player, CardKey, GameAction,
  NopeState, NopeEffect, LogEntry, Localized,
} from '../types/game';
import {
  CARD_META, CORE_COMPONENTS, ALL_COMPONENTS, AVATARS,
  PRINTED_DECK_COUNTS, PRINTED_DECK_SIZE, getNopeEffectName,
} from '../constants/cards';

// ───────── 类型 ─────────

export interface PlayerDef {
  name: string;
  isBot: boolean;
}

// ───────── 不可变工具 ─────────

/** Fisher-Yates 洗牌，返回新数组 */
function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 深拷贝 GameState（仅可序列化数据，足够此引擎使用） */
function cloneState(s: GameState): GameState {
  return {
    ...s,
    players: s.players.map(p => ({ ...p, hand: [...p.hand] })),
    draw: [...s.draw],
    discard: [...s.discard],
    exile: [...s.exile],
    log: [...s.log],
    pending: s.pending ? { ...s.pending } : null,
    nope: s.nope ? { ...s.nope } : null,
    cfg: { ...s.cfg },
  };
}

/** 向日志追加条目（原地修改已克隆的 state） */
function log(s: GameState, m: Localized, c: LogEntry['c'] = '', a: number | null = null): void {
  s.log.push({ m, c, a });
  if (s.log.length > 90) s.log.shift();
}

/** 按索引移除数组元素，返回新数组 */
function removeAt<T>(arr: readonly T[], indices: readonly number[]): T[] {
  const set = new Set(indices);
  return arr.filter((_, i) => !set.has(i));
}

// ───────── 统一母牌池与动态 Setup ─────────

function deckConfig(n: number) {
  const activeVaccines = n === 2 ? 1 : PRINTED_DECK_COUNTS.defuse - n;
  return {
    bombs: n - 1,
    activeVaccines,
    defuse: n + activeVaccines,
    hand: 8,
  };
}

// ───────── createInitialGame ─────────

/**
 * 从统一 63 张印刷母牌池按 2~6 人动态创建对局。
 * - 先移出全部 5 张炸弹与 8 张疫苗
 * - 每人发 7 张普通牌 + 1 张疫苗
 * - 洗入 N-1 张炸弹
 * - 2 人局洗入 1 张备用疫苗；3~6 人局洗入全部剩余疫苗
 */
export function createInitialGame(playerDefs: PlayerDef[]): GameState {
  const n = playerDefs.length;
  if (n < 2 || n > 6) throw new Error('circRNA 爆炸猫仅支持 2–6 名玩家');
  const cfg = deckConfig(n);

  // 从印刷母牌池中构建 50 张非炸弹/非疫苗池
  const pool: CardKey[] = [];
  for (const [k, count] of Object.entries(PRINTED_DECK_COUNTS)) {
    if (k === 'bomb' || k === 'defuse') continue;
    for (let i = 0; i < count; i++) pool.push(k as CardKey);
  }
  const shuffled = shuffle(pool);

  // 创建玩家并发牌
  const players: Player[] = playerDefs.map((p, i) => ({
    id: i,
    name: p.name,
    isBot: p.isBot,
    hand: [] as CardKey[],
    alive: true,
    avatar: AVATARS[i % AVATARS.length],
  }));

  // 每人 7 张普通牌 + 1 张疫苗，起手固定 8 张
  const draw = [...shuffled];
  for (const p of players) {
    for (let i = 0; i < 7; i++) p.hand.push(draw.pop()!);
    p.hand.push('defuse');
  }

  // 仅把本局启用的炸弹与备用疫苗洗入抽牌堆；其余移出本局
  for (let i = 0; i < cfg.bombs; i++) draw.push('bomb');
  for (let i = 0; i < cfg.activeVaccines; i++) draw.push('defuse');

  return {
    players,
    draw: shuffle(draw),
    discard: [],
    exile: [],
    turn: 0,
    turnsLeft: 1,
    pendingExtra: 0,
    over: false,
    pending: null,
    nope: null,
    winner: null,
    log: [],
    cfg: {
      hand: cfg.hand,
      bombs: cfg.bombs,
      defuse: cfg.defuse,
      printedDeck: PRINTED_DECK_SIZE,
    },
    botActed: false,
  };
}

// ───────── applyPlayerAction（核心状态转移） ─────────

/**
 * 处理玩家动作的纯函数入口。
 * - nope 动作在否决窗口期间始终可被有资格者打出
 * - 否决窗口开启时拒绝其他所有动作
 * - pending 状态仅接受 pending.player 的回应
 * - 其余动作仅接受当前回合玩家
 */
export function applyPlayerAction(
  state: GameState,
  playerId: number,
  action: GameAction,
): GameState {
  if (state.over) return state;

  // 否决动作：有资格者随时可打出
  if (action.kind === 'nope') return handleNope(state, playerId);

  // 否决窗口期间拒绝其他动作
  if (state.nope?.open) return state;

  // 挂起状态：仅 pending.player 可回应
  if (state.pending) {
    if (state.pending.player !== playerId) return state;
    const s = cloneState(state);
    return resolvePending(s, playerId, action);
  }

  // 非回合玩家不可行动
  if (state.turn !== playerId) return state;

  const s = cloneState(state);

  if (action.kind === 'play') return applyPlay(s, playerId, action.cards);
  if (action.kind === 'draw') return applyDraw(s, playerId);

  // future_ack / reinsert / pickTarget / nameCard 在非 pending 状态下不应到达此处
  return s;
}

// ───────── applyPlay（出牌） ─────────

function applyPlay(s: GameState, pidx: number, idxs: number[]): GameState {
  const p = s.players[pidx];
  const keys = idxs.map(i => p.hand[i]);
  if (keys.some(k => k === undefined)) return s;

  const allComp = keys.every(k => CARD_META[k].isComponent);
  const distinct = new Set(keys);

  // ── 组件拼装 ──
  if (allComp) {
    // 3 个核心组件 → 随机抢牌
    if (keys.length === distinct.size && keys.length === 3
        && CORE_COMPONENTS.every(c => distinct.has(c))) {
      p.hand = removeAt(p.hand, idxs);
      s.discard.push(...keys);
      if (p.isBot) s.botActed = true;
      log(s, {
        cn: '🧩 拼出核心构建体（无靶向）',
        en: '🧩 Assembled a core construct (untargeted)',
      }, 'hl', pidx);
      s.nope = { open: true, actor: pidx, card: 'coreBuild', stack: 0, lastActor: pidx };
      return s;
    }
    // 4 组件（核心 + LNP）→ 点名索要
    if (keys.length === distinct.size && keys.length === 4
        && ALL_COMPONENTS.every(c => distinct.has(c))) {
      p.hand = removeAt(p.hand, idxs);
      s.discard.push(...keys);
      if (p.isBot) s.botActed = true;
      log(s, {
        cn: '🧩 集齐 4 组件，构建体带靶向递送！',
        en: '🧩 Assembled all 4 components with targeted delivery!',
      }, 'hl', pidx);
      s.nope = { open: true, actor: pidx, card: 'targetedBuild', stack: 0, lastActor: pidx };
      return s;
    }
    // 组件但不成套 → 无效
    return s;
  }

  // ── 单张功能卡 ──
  if (keys.length !== 1) return s;
  const k = keys[0];
  if (k === 'bomb' || k === 'defuse' || k === 'nope' || CARD_META[k].isComponent) return s;

  p.hand = removeAt(p.hand, idxs);
  s.discard.push(k);
  if (p.isBot) s.botActed = true;
  log(s, {
    cn: `打出 ${CARD_META[k].name.cn}`,
    en: `Played ${CARD_META[k].name.en}`,
  }, 'hl', pidx);

  // 所有普通功能卡都进入统一 ICI 否决窗口。
  s.nope = { open: true, actor: pidx, card: k, stack: 0, lastActor: pidx };
  return s;
}

// ───────── resolveAction（技能结算，仅非否决卡） ─────────

function resolveAction(s: GameState, pidx: number, k: NopeEffect): GameState {
  switch (k) {
    case 'coreBuild':
      s.pending = { kind: 'steal', mode: 'random', player: pidx };
      return s;
    case 'targetedBuild':
      s.pending = { kind: 'named', mode: 'named', player: pidx };
      return s;
    case 'skip':
      return endTurn(s, pidx, false, false);
    case 'attack':
      return endTurn(s, pidx, true, false);
    case 'shuffle':
      s.draw = shuffle(s.draw);
      log(s, { cn: '🔀 抽牌堆已洗混', en: '🔀 Shuffled the draw pile' });
      return s;
    case 'future':
      s.pending = { kind: 'future', player: pidx, cards: s.draw.slice(-3).reverse() };
      return s;
    case 'favor':
      s.pending = { kind: 'favorPick', player: pidx };
      return s;
    case 'bottom':
      return applyDraw(s, pidx, 'bottom');
    case 'swap':
      s.pending = { kind: 'swapPick', player: pidx };
      return s;
    default:
      return s;
  }
}

// ───────── resolvePending（挂起状态回应） ─────────

function resolvePending(s: GameState, pidx: number, a: GameAction): GameState {
  const pend = s.pending;
  if (!pend) return s;

  // 新抗原预测 → 确认查看
  if (a.kind === 'future_ack' && pend.kind === 'future') {
    s.pending = null;
    return s;
  }

  // 拆弹塞回 → 结束回合
  if (a.kind === 'reinsert' && pend.kind === 'reinsert') {
    doReinsert(s, a.where);
    s.pending = null;
    return endTurn(s, pidx, false, true);
  }

  // 选择目标（用于 favor / swap / steal / named）
  if (a.kind === 'pickTarget') {
    const t = s.players[a.target];
    if (!t || !t.alive || t.hand.length === 0) {
      s.pending = null;
      return s;
    }

    if (pend.kind === 'favorPick') {
      s.pending = { kind: 'favorGive', player: t.id, actor: pidx };
      return s;
    }

    if (pend.kind === 'swapPick') {
      if (s.players[pidx].hand.length === 0) {
        s.pending = null;
        return s;
      }
      s.pending = { kind: 'swapGive', player: pidx, target: t.id };
      return s;
    }

    if (pend.kind === 'steal') {
      const gi = Math.floor(Math.random() * t.hand.length);
      const c = t.hand.splice(gi, 1)[0];
      s.players[pidx].hand.push(c);
      log(s, {
        cn: `🧩 随机抢走 ${t.name} 一张牌`,
        en: `🧩 Randomly stole a card from ${t.name}`,
      }, 'hl', pidx);
      s.pending = null;
      return s;
    }

    if (pend.kind === 'named') {
      // named → 进入 nameCard 子状态，等待点名
      s.pending = { kind: 'nameCard', player: pidx, target: a.target };
      return s;
    }
    return s;
  }

  // 被提呈者自主选择交出的牌；交换发起者秘密选择要给出的牌。
  if (a.kind === 'giveCard') {
    if (pend.kind === 'favorGive') {
      const giver = s.players[pidx];
      const card = giver.hand[a.cardIndex];
      if (card === undefined) return s;
      giver.hand.splice(a.cardIndex, 1);
      s.players[pend.actor].hand.push(card);
      log(s, {
        cn: `🌿 ${giver.name} 交出一张牌`,
        en: `🌿 ${giver.name} gave a card`,
      }, '', pend.actor);
      s.pending = null;
      return s;
    }

    if (pend.kind === 'swapGive') {
      const actor = s.players[pidx];
      const target = s.players[pend.target];
      const give = actor.hand[a.cardIndex];
      if (give === undefined || !target?.alive || target.hand.length === 0) return s;
      const randomIndex = Math.floor(Math.random() * target.hand.length);
      const received = target.hand.splice(randomIndex, 1)[0];
      actor.hand.splice(a.cardIndex, 1);
      target.hand.push(give);
      actor.hand.push(received);
      log(s, {
        cn: `🔁 与 ${target.name} 完成一次秘密交换`,
        en: `🔁 Completed a secret swap with ${target.name}`,
      }, 'hl', pidx);
      s.pending = null;
      return s;
    }
  }

  // 点名具体牌
  if (a.kind === 'nameCard') {
    if (pend.kind !== 'nameCard') return s;
    const t = s.players[pend.target];
    const idx = t.hand.indexOf(a.card);
    if (idx >= 0) {
      t.hand.splice(idx, 1);
      s.players[pidx].hand.push(a.card);
      log(s, {
        cn: `🎯 点名从 ${t.name} 拿到 ${CARD_META[a.card].name.cn}`,
        en: `🎯 Named and took ${CARD_META[a.card].name.en} from ${t.name}`,
      }, 'hl', pidx);
    } else {
      log(s, {
        cn: `${t.name} 没有该牌`,
        en: `${t.name} does not have that card`,
      });
    }
    s.pending = null;
    return s;
  }

  return s;
}

// ───────── 否决链（Nope Chain） ─────────

/**
 * 否决链奇偶结算（纯函数）。
 * @returns canceled=true 表示技能被取消（奇数层否决）
 */
export function resolveNopeChain(nopeState: NopeState): { canceled: boolean } {
  return { canceled: nopeState.stack % 2 === 1 };
}

/** 处理某玩家打出否决卡 */
function handleNope(state: GameState, pidx: number): GameState {
  if (!state.nope?.open) return state;
  const ns = state.nope;
  if (pidx === ns.lastActor || !state.players[pidx].alive) return state;
  if (!state.players[pidx].hand.includes('nope')) return state;

  const s = cloneState(state);
  const p = s.players[pidx];
  p.hand.splice(p.hand.indexOf('nope'), 1);
  s.discard.push('nope');
  s.nope!.stack++;
  s.nope!.lastActor = pidx;

  const willCancel = s.nope!.stack % 2 === 1;
  const cardNameCn = getNopeEffectName(ns.card, 'cn');
  const cardNameEn = getNopeEffectName(ns.card, 'en');
  log(s, {
    cn: `🚫 ${willCancel
      ? `否决了「${cardNameCn}」的效果！`
      : `反否决——「${cardNameCn}」效果恢复！`}`,
    en: `🚫 ${willCancel
      ? `Canceled “${cardNameEn}”!`
      : `Counter-Nope — “${cardNameEn}” is active again!`}`,
  }, 'bad', pidx);

  return s;
}

/**
 * 否决窗口关闭时调用（由 Hook 定时器触发）。
 * 根据 resolveNopeChain 结果决定是否执行原始技能。
 */
export function finalizeNope(state: GameState): GameState {
  if (!state.nope) return state;
  const s = cloneState(state);
  const { canceled } = resolveNopeChain(s.nope!);
  const actorIdx = s.nope!.actor;
  const card = s.nope!.card;
  s.nope = null;

  if (canceled) {
    log(s, {
      cn: `↩️ 结算：技能被否决，回到 ${s.players[actorIdx].name} 的回合`,
      en: `↩️ Resolved: effect canceled; back to ${s.players[actorIdx].name}'s turn`,
    });
    return s;
  }

  // 未被否决 → 执行原始技能效果
  return resolveAction(s, actorIdx, card);
}

/** 当前可打出否决卡的玩家列表 */
export function getEligibleNopePlayers(state: GameState): number[] {
  if (!state.nope?.open) return [];
  return state.players
    .filter((p, i) => i !== state.nope!.lastActor && p.alive && p.hand.includes('nope'))
    .map(p => p.id);
}

// ───────── 抽牌 & 炸弹 ─────────

/** 抽牌堆空时自动重洗弃牌堆 */
function refillIfNeeded(s: GameState): void {
  if (s.draw.length === 0 && s.discard.length > 0) {
    const cards: CardKey[] = s.discard.filter(c => c !== 'bomb' && c !== 'defuse');
    const exiled = s.discard.filter(c => c === 'bomb' || c === 'defuse');
    s.exile.push(...exiled);
    s.discard = [];
    s.draw = [...shuffle<CardKey>(cards), ...s.draw];
    log(s, {
      cn: '♻️ 抽牌堆用尽，弃牌重新洗回牌堆',
      en: '♻️ Draw pile empty; shuffled the discard pile back in',
    }, 'hl');
  }
}

function applyDraw(s: GameState, pidx: number, from: 'top' | 'bottom' = 'top'): GameState {
  refillIfNeeded(s);
  if (s.draw.length === 0) return endTurn(s, pidx, false, true);

  const p = s.players[pidx];
  const card = from === 'bottom' ? s.draw.shift()! : s.draw.pop()!;

  if (card === 'bomb') {
    log(s, { cn: '💥 抽到肿瘤爆发！', en: '💥 Drew a Tumor Outbreak!' }, 'bad', pidx);
    const di = p.hand.indexOf('defuse');

    if (di >= 0) {
      // 有疫苗 → 拆弹
      p.hand.splice(di, 1);
      s.exile.push('defuse');
      log(s, {
        cn: '🛡️ 用 circRNA 疫苗拆弹成功；疫苗进入免疫记忆区',
        en: '🛡️ Defused with a circRNA Vaccine; it enters the Immune Memory Zone',
      }, 'hl', pidx);

      if (p.isBot) {
        doReinsert(s, 'rand');
        return endTurn(s, pidx, false, true);
      }
      // 人类玩家 → 弹窗选择塞回位置
      s.pending = { kind: 'reinsert', player: pidx };
      return s;
    }

    // 无疫苗 → 出局
    p.alive = false;
    s.exile.push('bomb');
    log(s, {
      cn: '☠️ 没有疫苗，患者复发出局…',
      en: '☠️ No vaccine — relapse eliminated this player…',
    }, 'bad', pidx);

    const win = checkWinCondition(s);
    if (win.over) {
      s.over = true;
      s.winner = win.winner;
      return s;
    }
    return endTurn(s, pidx, true, true);
  }

  // 普通牌 → 加入手牌，回合结束
  p.hand.push(card);
  log(s, { cn: '抽了一张牌', en: 'Drew a card' }, '', pidx);
  return endTurn(s, pidx, false, true);
}

/** 将炸弹塞回抽牌堆指定位置 */
function doReinsert(s: GameState, where: 'top' | 'bottom' | 'rand'): void {
  let pos: number;
  if (where === 'top') pos = s.draw.length;
  else if (where === 'bottom') pos = 0;
  else pos = Math.floor(Math.random() * (s.draw.length + 1));
  s.draw.splice(pos, 0, 'bomb');
}

// ───────── 回合推进 ─────────

/**
 * 回合结束逻辑。
 * @param forceEnd  attack 强制结束（下家 +1 回合）
 * @param didConsume 已消耗回合义务（抽牌 / 出局）
 */
function endTurn(s: GameState, pidx: number, forceEnd: boolean, didConsume: boolean): GameState {
  if (s.over) return s;

  // skip：不抽牌，消耗一个回合义务
  if (!didConsume && !forceEnd) {
    s.turnsLeft--;
    if (s.turnsLeft > 0) return s;
    return advanceTurn(s);
  }

  // attack：立即结束，下家承担额外回合
  if (forceEnd && !didConsume) {
    s.pendingExtra = 1;
    s.turnsLeft = 0;
    return advanceTurn(s);
  }

  // 正常抽牌 / 出局
  s.turnsLeft--;
  if (s.players[pidx].alive && s.turnsLeft > 0) return s;
  return advanceTurn(s);
}

/** 推进到下一个存活玩家 */
function advanceTurn(s: GameState): GameState {
  if (s.over) return s;
  let idx = s.turn, guard = 0;
  do {
    idx = (idx + 1) % s.players.length;
    guard++;
  } while (!s.players[idx].alive && guard < 20);
  s.turn = idx;
  s.turnsLeft = 1 + s.pendingExtra;
  s.pendingExtra = 0;
  s.botActed = false;
  return s;
}

// ───────── 胜负判定 ─────────

/**
 * 胜负判定与出局结算。
 * 存活玩家 ≤ 1 时游戏结束。
 */
export function checkWinCondition(state: GameState): { over: boolean; winner: number | null } {
  const alive = state.players.filter(p => p.alive);
  if (alive.length <= 1) {
    return { over: true, winner: alive[0]?.id ?? null };
  }
  return { over: false, winner: null };
}
