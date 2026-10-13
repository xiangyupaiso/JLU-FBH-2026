import type { MemoryPointData, Perspective, Language } from '@/types';
import { CHILD_STORIES } from './childStories';
import { ADULT_STORIES } from './adultStories';
import { ELDER_STORIES } from './elderStories';
import { CHILD_STORIES_ZH } from './childStoriesZh';
import { ADULT_STORIES_ZH } from './adultStoriesZh';
import { ELDER_STORIES_ZH } from './elderStoriesZh';

export const MEMORY_STORIES_ZH: Record<Perspective, Record<number, MemoryPointData>> = {
  child: CHILD_STORIES_ZH,
  adult: ADULT_STORIES_ZH,
  elder: ELDER_STORIES_ZH
};

export const MEMORY_STORIES_EN: Record<Perspective, Record<number, MemoryPointData>> = {
  child: CHILD_STORIES,
  adult: ADULT_STORIES,
  elder: ELDER_STORIES
};

export const MEMORY_STORIES = MEMORY_STORIES_EN;

export function getMemoryStory(
  perspective: Perspective,
  memoryPoint: number,
  lang: Language = 'en'
): MemoryPointData {
  const store = lang === 'en' ? MEMORY_STORIES_EN : MEMORY_STORIES_ZH;
  return store[perspective][memoryPoint];
}
