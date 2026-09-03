import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const LANGUAGES = ['en', 'no'] as const;

export type Language = (typeof LANGUAGES)[number];

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
}

function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}

function hasValidLanguage(value: unknown): value is { language: Language } {
  return (
    typeof value === 'object' && value !== null && 'language' in value && isLanguage(value.language)
  );
}

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

/**
 * Reads the active language's strings out of a translation scope
 *
 * @example
 * const t = useT(languageToggle);
 * <input aria-label={t.switchLabel} />
 */
export function useT<T>(scope: Record<Language, T>): T {
  const language = useLanguageStore((state) => state.language);
  return scope[language];
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: getInitialLanguage(),
      toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'no' : 'en' })),
    }),
    {
      name: 'language-storage',
      version: 1,
      partialize: (state) => ({ language: state.language }),
      merge: (persisted, current) =>
        hasValidLanguage(persisted) ? { ...current, language: persisted.language } : current,
    },
  ),
);
