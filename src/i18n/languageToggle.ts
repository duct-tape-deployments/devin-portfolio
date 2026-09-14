import type { Language } from '@/stores/languageStore';

type LanguageToggleStrings = {
  switchLabel: string;
};

export const languageToggle: Record<Language, LanguageToggleStrings> = {
  en: {
    switchLabel: 'English selected, switch to Norwegian',
  },
  no: {
    switchLabel: 'Norsk valgt, bytt til engelsk',
  },
};
