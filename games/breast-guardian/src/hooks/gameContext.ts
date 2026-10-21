import { createContext, useContext } from 'react';
import type { Dispatch } from 'react';
import type { GameState, Language, Perspective, GamePhase, BossType, EndingType, Playthrough } from '@/types';

// Action类型
export type GameAction =
  | { type: 'SET_PHASE'; payload: GamePhase }
  | { type: 'SET_EXIT_MENU_OPEN'; payload: boolean }
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_PERSPECTIVE'; payload: Perspective | null }
  | { type: 'SET_MEMORY_POINT'; payload: number }
  | { type: 'SET_BOSS'; payload: BossType | null }
  | { type: 'SET_PLAYTHROUGH'; payload: Playthrough }
  | { type: 'SET_SKIP_STORY'; payload: boolean }
  | { type: 'COMPLETE_TUTORIAL' }
  | { type: 'COMPLETE_MEMORY'; payload: { perspective: Perspective; memoryPoint: number; result: EndingType } }
  | { type: 'COMPLETE_PERSPECTIVE' }
  | { type: 'COMPLETE_PROMOTION_AND_UNLOCK' }
  | { type: 'SWITCH_PERSPECTIVE'; payload: Perspective }
  | { type: 'UNLOCK_BOSS'; payload: BossType }
  | { type: 'DEFEAT_BOSS'; payload: BossType }
  | { type: 'UNLOCK_SKILL'; payload: string }
  | { type: 'EQUIP_SKILL'; payload: { newSkill: string; oldSkill: string } }
  | { type: 'SET_EQUIPPED_SKILLS'; payload: string[] }
  | { type: 'RECORD_BE_SKILL_SOURCE'; payload: { skillId: string; memoryPoint: number } }
  | { type: 'SET_BATTLE_STATE'; payload: GameState['battleState'] }
  | { type: 'USE_SKILL_IN_BATTLE'; payload: { skillId: string; negativeSkillSource?: number } }
  | { type: 'RESET_BATTLE' }
  | { type: 'RESET_GAME' }
  | { type: 'START_NEW_GAME'; payload: Perspective }
  | { type: 'START_WEEK2' };

// Context类型
export interface GameContextType {
  state: GameState;
  dispatch: Dispatch<GameAction>;
  setLanguage: (lang: Language) => void;
  openExitMenu: () => void;
  closeExitMenu: () => void;
  // 游戏流程
  startNewGame: (perspective: Perspective) => void;
  startWeek2: () => void;
  completeMemoryPoint: (memoryPoint: number, result: EndingType) => void;
  unlockBossForMemory: (memoryPoint: number) => void;
  defeatBoss: (boss: BossType) => void;
  equipSkill: (newSkill: string, oldSkill: string) => void;
  unlockSkill: (skillId: string) => void;
  startBattle: (boss: BossType) => void;
  useSkillInBattle: (skillId: string, isNegative: boolean, negativeSkillSource?: number) => void;
  resetGame: () => void;
  // 查询
  getMemoryResult: (memoryPoint: number, perspective?: Perspective) => EndingType | null;
  canChallengeBoss: (memoryPoint: number) => boolean;
  getBossesForMemory: (memoryPoint: number) => BossType[];
}

export const GameContext = createContext<GameContextType | null>(null);

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
