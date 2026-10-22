import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';

import { Navigation } from '../interface/Navigation';
import { routes } from '@/config/navigation';
import { getTranslations } from '@/i18n/translations';
import { useLanguageStore } from '@/stores/languageStore';

import { PageContainer } from '../layout/PageContainer';
import { GradientDivider } from '../interface/GradientDivider';
import { LanguageToggle } from '../interface/LanguageToggle';
import { Logo } from '../interface/Logo';
import { ThemeToggle } from '../interface/ThemeToggle';

export function Header() {
  const language = useLanguageStore((state) => state.language);
  const t = getTranslations(language);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;
      if (menuRef.current?.contains(event.target)) return;
      if (menuButtonRef.current?.contains(event.target)) return;

      setMenuOpen(false);
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');

    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setMenuOpen(false);
      }
    }

    desktopQuery.addEventListener('change', handleBreakpointChange);

    return () => {
      desktopQuery.removeEventListener('change', handleBreakpointChange);
    };
  }, []);

  return (
    <header className="relative z-50 bg-background text-foreground lg:pt-2">
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          focus:absolute
          focus:left-page-margin
          focus:top-2
          focus:z-[60]
          focus:bg-background
          focus:px-4
          focus:py-2
          focus:text-foreground
          focus:outline-2
          focus:outline-offset-2
          focus:outline-focus
        "
      >
        {t.accessibility.skipToContent}
      </a>

      <PageContainer
        className="
          grid
          grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
          items-center
          max-lg:h-16
          lg:min-h-18
          lg:gap-6
        "
      >
        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={t.accessibility.menu}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="icon-button justify-self-start lg:hidden"
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        {/* Logo / home link: XE alone below lg and when the cell is too narrow, XE + DESIGN otherwise */}
        <div className="justify-self-center lg:@container lg:justify-self-stretch">
          <Link
            to={routes.home}
            aria-label={t.accessibility.homeLink}
            onClick={closeMenu}
            className="
                      flex
                      w-fit
                      lg:@min-wordmark:wordmark
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-focus
                    "
          >
            <Logo className="lg:@min-wordmark:wordmark-xe" />
            <span className="hidden lg:@min-wordmark:inline">DESIGN</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:block">
          <Navigation orientation="horizontal" />
        </div>

        {/* Header controls */}
        <div className="flex items-center gap-5 justify-self-end">
          <div className="hidden md:flex">
            <LanguageToggle />
          </div>
          <ThemeToggle />
        </div>
      </PageContainer>

      {/* Mobile navigation */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`
          absolute
          left-page-margin
          top-full
          mt-px
          w-53.5
          bg-background
          shadow-soft
          dark:shadow-card
          [clip-path:inset(0_-50px_-50px_-50px)]
          lg:hidden
          ${menuOpen ? 'block' : 'hidden'}
        `}
      >
        <div className="px-4 py-2">
          <Navigation
            orientation="vertical"
            ariaLabel={t.accessibility.mobileNavigation}
            onNavigate={closeMenu}
          />
        </div>
      </div>

      <GradientDivider className="relative z-10 max-lg:absolute max-lg:top-full" />
    </header>
  );
}
