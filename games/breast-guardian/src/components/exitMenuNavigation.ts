import type { GamePhase } from '@/types';

export function getPreviousPhase(
  phase: GamePhase,
  isZh: boolean
): { phase: GamePhase; label: string } | null {
  switch (phase) {
    case 'visualNovel':
      return { phase: 'memoryCenter', label: isZh ? '记忆回廊' : 'Memory Center' };
    case 'skillReplace':
      return { phase: 'memoryCenter', label: isZh ? '记忆回廊' : 'Memory Center' };
    case 'bossBattle':
      return { phase: 'bossEntry', label: isZh ? 'Boss备战' : 'Boss Preparation' };
    case 'bossEntry':
      return { phase: 'microWorldMain', label: isZh ? '微观主城' : 'Citadel' };
    case 'memoryCenter':
      return { phase: 'microWorldMain', label: isZh ? '微观主城' : 'Citadel' };
    case 'microWorldMain':
      return { phase: 'perspectiveSelect', label: isZh ? '视角选择' : 'Perspective Select' };
    case 'realityTrigger':
      return { phase: 'perspectiveSelect', label: isZh ? '视角选择' : 'Perspective Select' };
    case 'perspectiveSelect':
      return { phase: 'mainMenu', label: isZh ? '游戏主菜单' : 'Main Menu' };
    case 'tutorial':
    case 'knowledgeBook':
    case 'beEnding':
    case 'heEnding':
    case 'specialEnding':
    case 'promotionVideo':
    case 'endingPage':
    case 'week2Transition':
      return { phase: 'mainMenu', label: isZh ? '游戏主菜单' : 'Main Menu' };
    case 'mainMenu':
    default:
      return null;
  }
}
