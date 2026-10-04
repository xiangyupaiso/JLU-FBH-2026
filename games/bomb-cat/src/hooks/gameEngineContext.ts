/**
 * Shared access to the single game-engine instance.
 *
 * `CircRnaGame` owns the authoritative engine. `WikiBridge` needs to observe
 * round completion without creating a second engine (two `useGameEngine`
 * calls would mean two independent states), so the engine is exposed through
 * this context and consumed by both.
 */
import { createContext, useContext } from 'react';
import type { UseGameEngineReturn } from '../hooks/useGameEngine';

export const GameEngineContext = createContext<UseGameEngineReturn | null>(null);

export function useSharedGameEngine(): UseGameEngineReturn {
  const engine = useContext(GameEngineContext);
  if (!engine) {
    throw new Error('useSharedGameEngine must be used inside <GameEngineContext.Provider>');
  }
  return engine;
}