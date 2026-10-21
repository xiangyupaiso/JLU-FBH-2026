import type { GameState } from '../types/game';

/** Exported for tests; mirrors the payload the wiki's iframe listener expects. */
export function completionStats(state: GameState, me: number) {
  const winner = state.winner != null ? state.players[state.winner] : null;
  return {
    title: winner ? winner.name : '',
    won: winner ? winner.id === me : false,
    winner,
  };
}
