import { useEffect } from 'react';
import { NavigationType, Outlet, useLocation, useNavigationType } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { useRouteFocus } from '@/hooks/useRouteFocus';
import { useLanguageStore } from '@/stores/languageStore';
import { useThemeStore } from '@/stores/themeStore';

export function AppLayout() {
  const theme = useThemeStore((state) => state.theme);
  const language = useLanguageStore((state) => state.language);

  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (navigationType !== NavigationType.Pop) {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  useRouteFocus();

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
