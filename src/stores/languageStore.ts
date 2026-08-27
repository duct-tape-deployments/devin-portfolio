import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const LANGUAGES = ['en', 'no'] as const;

export type Language = (typeof LANGUAGES)[number];

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}

/** Detect visitor's preferred language from browser on first visit */
function getInitialLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const tag of preferred) {
    const lower = (tag ?? '').toLowerCase();
    if (lower.startsWith('nb') || lower.startsWith('nn') || lower.startsWith('no')) return 'no';
    if (lower.startsWith('en')) return 'en';
  }

  return 'en';
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: getInitialLanguage(),
      setLanguage: (language) => set({ language }),
      toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'no' : 'en' })),
    }),
    {
      name: 'language-storage',
      version: 1,
      partialize: (state) => ({ language: state.language }),
      /*Guard against a corrupted/foreign persisted value (manual edit, stale schema, browser extension) bypassing the compile-time-only Language type */
      merge: (persisted, current) => {
        const persistedLanguage =
          typeof persisted === 'object' && persisted !== null && 'language' in persisted
            ? persisted.language
            : undefined;

        return isLanguage(persistedLanguage)
          ? { ...current, language: persistedLanguage }
          : current;
      },
    },
  ),
);
