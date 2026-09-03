import type { Language } from '@/stores/languageStore';

type LanguageToggleStrings = {
  switchLabel: string;
};

export const languageToggle: Record<Language, LanguageToggleStrings> = {
  en: {
    switchLabel: 'English selected. Switch to Norwegian.',
  },
  no: {
    switchLabel: 'Norsk valgt. Bytt til engelsk.',
  },
};
