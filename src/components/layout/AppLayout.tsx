import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { useThemeStore } from '@/stores/themeStore';

export function AppLayout() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main-content" className="flex-1 bg-background">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
