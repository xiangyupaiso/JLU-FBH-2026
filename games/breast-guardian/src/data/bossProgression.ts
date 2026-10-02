import type { BossType, Playthrough } from '@/types';

// Each playthrough has three ordered encounters, one unlocked by each memory point.
export const BOSSES_BY_PLAYTHROUGH: Record<Playthrough, readonly BossType[]> = {
  1: ['breastLump', 'nippleDischarge', 'orangePeel'],
  2: ['lymphNode', 'nippleRetraction', 'skinDimple']
};
