/**
 * circRNA 细胞防护 — 游戏状态驱动 Hook
 * 封装 React State 管理 + 引擎调度 + AI/Bot 定时器 + 否决链倒计时。
 * 定时器全部通过 useEffect 驱动，天然支持 React StrictMode 双调用清理。
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import type { GameState, NetworkAction } from '../types/game';
import {
  createInitialGame, applyPlayerAction, finalizeNope,
  getEligibleNopePlayers, checkWinCondition,
  type PlayerDef,
} from '../engine/gameEngine';
import {
  computeBotAction, computeBotNopeDecision, computeBotPendingResponse,
} from '../engine/botAiTree';

// ───────── 类型 ─────────

export interface UseGameEngineOptions {
  /** 状态变更后回调（Host 端用于广播到客户端） */
  onStateChange?: (state: GameState) => void;
}

export interface UseGameEngineReturn {
  gameState: GameState | null;
  /** 统一调度入口：人类或机器人动作都走这里 */
  dispatchAction: (playerId: number, action: NetworkAction) => void;
  /** 创建新对局 */
  startGame: (playerDefs: PlayerDef[]) => void;
  /** 清空对局 */
  resetGame: () => void;
  /** 手牌选中索引（UI 用） */
  sel: number[];
  setSel: React.Dispatch<React.SetStateAction<number[]>>;
}

// ───────── Hook ─────────

export function useGameEngine(opts: UseGameEngineOptions = {}): UseGameEngineReturn {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [sel, setSel] = useState<number[]>([]);

  // ref 镜像：定时器回调中读取最新状态，避免闭包陈旧
  const stateRef = useRef<GameState | null>(null);
  const onStateChangeRef = useRef(opts.onStateChange);

  useEffect(() => { onStateChangeRef.current = opts.onStateChange; });

  /** 内部统一更新入口 */
  const updateState = useCallback((next: GameState) => {
    stateRef.current = next;
    setGameState(next);
    onStateChangeRef.current?.(next);
  }, []);

  /** 统一调度：人类 / 机器人 / 远程客户端动作都走这里 */
  const dispatchAction = useCallback((playerId: number, action: NetworkAction) => {
    const s = stateRef.current;
    if (!s || s.over) return;
    const next = applyPlayerAction(s, playerId, action);
    // 引擎可能返回同一对象（无效动作），只在变化时更新
    if (next !== s) updateState(next);
  }, [updateState]);

  /** 创建新对局 */
  const startGame = useCallback((playerDefs: PlayerDef[]) => {
    setSel([]);
    updateState(createInitialGame(playerDefs));
  }, [updateState]);

  /** 清空对局 */
  const resetGame = useCallback(() => {
    stateRef.current = null;
    setGameState(null);
    setSel([]);
  }, []);

  // ───────── 定时器驱动（useEffect 响应状态变化） ─────────

  useEffect(() => {
    if (!gameState || gameState.over) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const clearAll = () => timers.forEach(clearTimeout);

    // ── 1. 否决窗口 ──
    if (gameState.nope?.open) {
      const eligible = getEligibleNopePlayers(gameState);
      const humanEligible = eligible.some(id => !gameState.players[id].isBot);

      // 有资格的 Bot 按概率决定是否否决
      for (const id of eligible) {
        const player = gameState.players[id];
        if (!player.isBot) continue;
        if (computeBotNopeDecision(gameState, id)) {
          const delay = 450 + Math.random() * 800;
          timers.push(setTimeout(() => {
            const s = stateRef.current;
            if (s?.nope?.open && s.nope.lastActor !== id) {
              dispatchAction(id, { kind: 'nope' });
            }
          }, delay));
        }
      }

      // 否决窗口倒计时：有人类候选 3800ms，纯 Bot 1300ms
      const timeout = humanEligible ? 3800 : 1300;
      timers.push(setTimeout(() => {
        const s = stateRef.current;
        if (s?.nope?.open) updateState(finalizeNope(s));
      }, timeout));

      return clearAll;
    }

    // ── 2. 挂起状态：Bot 自动回应 ──
    if (gameState.pending) {
      const p = gameState.players[gameState.pending.player];
      if (p?.isBot) {
        timers.push(setTimeout(() => {
          const s = stateRef.current;
          if (!s?.pending || s.pending.player !== p.id) return;
          const resp = computeBotPendingResponse(s, p.id);
          if (resp) dispatchAction(p.id, resp);
        }, 700));
        return clearAll;
      }
      return; // 人类玩家挂起 — 等待 UI 交互
    }

    // ── 3. Bot 回合行动 ──
    const cur = gameState.players[gameState.turn];
    if (cur?.isBot && cur.alive) {
      timers.push(setTimeout(() => {
        const s = stateRef.current;
        if (!s || s.over || s.pending || s.nope?.open) return;
        if (s.turn !== cur.id) return;
        const action = computeBotAction(s, cur.id);
        dispatchAction(cur.id, action);
      }, 850));
      return clearAll;
    }

    return clearAll;
  }, [gameState, dispatchAction, updateState]);

  // ── 胜负检测：状态变更后检查是否结束 ──
  useEffect(() => {
    if (!gameState || gameState.over) return;
    const result = checkWinCondition(gameState);
    if (result.over) {
      updateState({ ...gameState, over: true, winner: result.winner });
    }
  }, [gameState, updateState]);

  return { gameState, dispatchAction, startGame, resetGame, sel, setSel };
}
