import type { Language } from '@/stores/languageStore';

type LanguageToggleStrings = {
  switchLabel: string;
};

export const languageToggle: Record<Language, LanguageToggleStrings> = {
  en: {
    switchLabel: 'Switch to Norwegian',
  },
  no: {
    switchLabel: 'Bytt til engelsk',
  },
};
