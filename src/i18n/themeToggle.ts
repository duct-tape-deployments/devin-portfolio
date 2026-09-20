import type { Language } from '@/stores/languageStore';

type ThemeToggleStrings = {
  switchLabel: string;
};

export const themeToggle: Record<Language, ThemeToggleStrings> = {
  en: {
    switchLabel: 'Dark mode',
  },
  no: {
    switchLabel: 'Mørk modus',
  },
};
