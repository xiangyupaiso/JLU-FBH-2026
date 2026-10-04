import React, { createContext, useContext, useReducer, useCallback } from 'react';
import type {
  GameState,
  Perspective,
  PerspectiveProgress,
  GamePhase,
  BossType,
  EndingType,
  Playthrough
} from '@/types';
import { BOSSES_BY_PLAYTHROUGH } from '@/data/bossProgression';
// 初始技能
const INITIAL_SKILLS = ['cellRepair', 'hormoneBalance', 'immuneBoost', 'detox'];

const emptyProgress = (): PerspectiveProgress => ({ memories: { 1: null, 2: null, 3: null }, completed: false });

// 全局游戏状态 - 无存档，纯内存状态
const initialState: GameState = {
  currentPhase: 'mainMenu',
  currentPerspective: null,
  currentMemoryPoint: 1,
  currentBoss: null,

  hasWatchedPromotion: false,
  allPerspectivesUnlocked: false,

  perspectivesData: {
    child: emptyProgress(),
    adult: emptyProgress(),
    elder: emptyProgress()
  },

  unlockedBosses: [],
  defeatedBosses: [],

  unlockedSkills: [...INITIAL_SKILLS],
  equippedSkills: [...INITIAL_SKILLS],
  beSkillSources: {},

  playthrough: 1,
  skipStory: false,
  hasCompletedTutorial: false,

  battleState: null,
  // 记录战斗中使用的负面技能来源（用于BE结局跳转）
  lastUsedNegativeSkillSource: null as number | null
};

// Action类型
type GameAction =
  | { type: 'SET_PHASE'; payload: GamePhase }
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

// Reducer
function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_PHASE':
      return { ...state, currentPhase: action.payload };

    case 'SET_PERSPECTIVE':
      return { ...state, currentPerspective: action.payload };

    case 'SET_MEMORY_POINT':
      return { ...state, currentMemoryPoint: action.payload };

    case 'SET_BOSS':
      return { ...state, currentBoss: action.payload };

    case 'SET_PLAYTHROUGH':
      return { ...state, playthrough: action.payload };

    case 'SET_SKIP_STORY':
      return { ...state, skipStory: action.payload };

    case 'COMPLETE_TUTORIAL':
      return { ...state, hasCompletedTutorial: true };

    case 'COMPLETE_MEMORY': {
      const { perspective, memoryPoint, result } = action.payload;
      const progress = state.perspectivesData[perspective];
      return {
        ...state,
        perspectivesData: {
          ...state.perspectivesData,
          [perspective]: {
            ...progress,
            memories: { ...progress.memories, [memoryPoint]: result }
          }
        }
      };
    }

    // 二周目通关进入特殊结局：标记当前线完整通关
    case 'COMPLETE_PERSPECTIVE': {
      const perspective = state.currentPerspective;
      if (!perspective) return state;
      const progress = state.perspectivesData[perspective];
      if (progress.completed) return state;
      return {
        ...state,
        perspectivesData: {
          ...state.perspectivesData,
          [perspective]: { ...progress, completed: true }
        }
      };
    }

    // 终局权限解锁：完成/跳过 promotion 联动，解锁全视角自由切换
    case 'COMPLETE_PROMOTION_AND_UNLOCK':
      return {
        ...state,
        hasWatchedPromotion: true,
        allPerspectivesUnlocked: true,
        currentPhase: 'mainMenu'
      };

    // 切换当前活跃视角：不重置技能背包与各线既有进度
    case 'SWITCH_PERSPECTIVE':
      return { ...state, currentPerspective: action.payload };

    case 'UNLOCK_BOSS':
      if (state.unlockedBosses.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        unlockedBosses: [...state.unlockedBosses, action.payload]
      };
    
    case 'DEFEAT_BOSS':
      if (state.defeatedBosses.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        defeatedBosses: [...state.defeatedBosses, action.payload]
      };
    
    case 'UNLOCK_SKILL':
      if (state.unlockedSkills.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        unlockedSkills: [...state.unlockedSkills, action.payload]
      };
    
    case 'EQUIP_SKILL':
      const newEquipped = state.equippedSkills.map(skill =>
        skill === action.payload.oldSkill ? action.payload.newSkill : skill
      );
      return { ...state, equippedSkills: newEquipped };
    
    case 'SET_EQUIPPED_SKILLS':
      return { ...state, equippedSkills: action.payload };
    
    case 'RECORD_BE_SKILL_SOURCE':
      return {
        ...state,
        beSkillSources: {
          ...state.beSkillSources,
          [action.payload.skillId]: action.payload.memoryPoint
        }
      };
    
    case 'SET_BATTLE_STATE':
      return { ...state, battleState: action.payload };
    
    case 'USE_SKILL_IN_BATTLE':
      if (!state.battleState) return state;
      const newUsedSkills = [...state.battleState.usedSkills, action.payload.skillId];
      return {
        ...state,
        battleState: {
          ...state.battleState,
          usedSkills: newUsedSkills,
          bossHealth: Math.max(0, 100 - newUsedSkills.length * 25),
          currentRound: state.battleState.currentRound + 1
        },
        // 记录负面技能来源（如果有）
        lastUsedNegativeSkillSource: action.payload.negativeSkillSource ?? state.lastUsedNegativeSkillSource
      };
    
    case 'RESET_BATTLE':
      return {
        ...state,
        battleState: {
          bossHealth: 100,
          usedSkills: [],
          failed: false,
          currentRound: 0
        },
        lastUsedNegativeSkillSource: null
      };
    
    case 'RESET_GAME':
      return initialState;
    
    case 'START_NEW_GAME': {
      // 全视角解锁后开新线：保留各线进度与共享技能背包，只重置本局流程
      const preserved = state.allPerspectivesUnlocked
        ? {
            perspectivesData: state.perspectivesData,
            unlockedSkills: state.unlockedSkills,
            equippedSkills: state.equippedSkills,
            beSkillSources: state.beSkillSources,
            hasCompletedTutorial: state.hasCompletedTutorial,
            hasWatchedPromotion: state.hasWatchedPromotion,
            allPerspectivesUnlocked: state.allPerspectivesUnlocked
          }
        : {};
      return {
        ...initialState,
        ...preserved,
        currentPerspective: action.payload,
        currentPhase: 'realityTrigger'
      };
    }
    
    case 'START_WEEK2':
      return {
        ...state,
        playthrough: 2,
        unlockedBosses: [],
        defeatedBosses: [],
        currentMemoryPoint: 1,
        currentBoss: null,
        battleState: null,
        lastUsedNegativeSkillSource: null
      };
    
    default:
      return state;
  }
}

// Context类型
interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
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

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // 开始新游戏
  const startNewGame = useCallback((perspective: Perspective) => {
    dispatch({ type: 'START_NEW_GAME', payload: perspective });
  }, []);

  // 开始二周目
  const startWeek2 = useCallback(() => {
    dispatch({ type: 'START_WEEK2' });
  }, []);

  // 读取指定视角记忆点结局（默认当前视角）
  const getMemoryResult = useCallback(
    (memoryPoint: number, perspective?: Perspective): EndingType | null => {
      const target = perspective || state.currentPerspective || 'child';
      return state.perspectivesData[target].memories[memoryPoint] ?? null;
    },
    [state.perspectivesData, state.currentPerspective]
  );

  const completeMemoryPoint = useCallback(
    (memoryPoint: number, result: EndingType) => {
      const perspective = state.currentPerspective || 'child';
      dispatch({ type: 'COMPLETE_MEMORY', payload: { perspective, memoryPoint, result } });
      const boss = BOSSES_BY_PLAYTHROUGH[state.playthrough][memoryPoint - 1];
      if (boss) dispatch({ type: 'UNLOCK_BOSS', payload: boss });
    },
    [state.currentPerspective, state.playthrough]
  );

  const getBossesForMemory = useCallback((memoryPoint: number): BossType[] => {
    const boss = BOSSES_BY_PLAYTHROUGH[state.playthrough][memoryPoint - 1];
    return boss ? [boss] : [];
  }, [state.playthrough]);

  const unlockBossForMemory = useCallback((memoryPoint: number) => {
    const bosses = getBossesForMemory(memoryPoint);
    bosses.forEach((boss) => {
      dispatch({ type: 'UNLOCK_BOSS', payload: boss });
    });
  }, [getBossesForMemory]);

  const defeatBoss = useCallback((boss: BossType) => {
    dispatch({ type: 'DEFEAT_BOSS', payload: boss });
  }, []);

  const equipSkill = useCallback((newSkill: string, oldSkill: string) => {
    dispatch({ type: 'EQUIP_SKILL', payload: { newSkill, oldSkill } });
  }, []);

  const unlockSkill = useCallback((skillId: string) => {
    dispatch({ type: 'UNLOCK_SKILL', payload: skillId });
  }, []);

  const startBattle = useCallback((boss: BossType) => {
    dispatch({ type: 'SET_BOSS', payload: boss });
    dispatch({
      type: 'SET_BATTLE_STATE',
      payload: {
        bossHealth: 100,
        usedSkills: [],
        failed: false,
        currentRound: 0
      }
    });
    dispatch({ type: 'SET_PHASE', payload: 'bossBattle' });
  }, []);

  const useSkillInBattle = useCallback((skillId: string, isNegative: boolean, negativeSkillSource?: number) => {
    if (isNegative) {
      dispatch({
        type: 'SET_BATTLE_STATE',
        payload: {
          ...state.battleState!,
          failed: true
        }
      });
    }
    // 始终记录技能使用，无论是否负面（否则 usedSkills/回合数/血量不更新）
    dispatch({ type: 'USE_SKILL_IN_BATTLE', payload: { skillId, negativeSkillSource } });
  }, [state.battleState]);

  const resetGame = useCallback(() => {
    dispatch({ type: 'RESET_GAME' });
  }, []);

  const canChallengeBoss = useCallback((memoryPoint: number) => {
    const target = state.currentPerspective || 'child';
    const result = state.perspectivesData[target].memories[memoryPoint];
    return result === 'HE' || result === 'BE';
  }, [state.perspectivesData, state.currentPerspective]);

  const value: GameContextType = {
    state,
    dispatch,
    startNewGame,
    startWeek2,
    completeMemoryPoint,
    unlockBossForMemory,
    defeatBoss,
    equipSkill,
    unlockSkill,
    startBattle,
    useSkillInBattle,
    resetGame,
    getMemoryResult,
    canChallengeBoss,
    getBossesForMemory
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
