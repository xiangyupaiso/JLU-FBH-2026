import type { Language } from '@/types';

const LANGUAGE_KEY = 'breast_guardian_lang';

export function readSavedLanguage(): Language {
  try {
    return window.localStorage.getItem(LANGUAGE_KEY) === 'zh' ? 'zh' : 'en';
  } catch {
    // Browser privacy settings can deny storage even in a same-origin iframe.
    return 'en';
  }
}

export function saveLanguage(language: Language): void {
  try {
    window.localStorage.setItem(LANGUAGE_KEY, language);
  } catch {
    // The current session can still switch languages without persistence.
  }
}
