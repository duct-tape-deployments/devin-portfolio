import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const THEMES = ['light', 'dark'] as const;

export type Theme = (typeof THEMES)[number];

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && (THEMES as readonly string[]).includes(value);
}

function hasValidTheme(value: unknown): value is { theme: Theme } {
  return typeof value === 'object' && value !== null && 'theme' in value && isTheme(value.theme);
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: getInitialTheme(),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'theme-storage',
      version: 1,
      partialize: (state) => ({ theme: state.theme }),
      merge: (persisted, current) =>
        hasValidTheme(persisted) ? { ...current, theme: persisted.theme } : current,
    },
  ),
);
