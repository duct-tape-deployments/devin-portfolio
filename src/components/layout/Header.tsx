import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';

import { Navigation } from '../interface/Navigation';
import { routes } from '@/config/navigation';

import { PageContainer } from '../layout/PageContainer';
import { GradientDivider } from '../interface/GradientDivider';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
    <header className="relative z-50 bg-background text-foreground pt-2">
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          focus:absolute
          focus:left-gutter
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
        Skip to main content
      </a>

      <PageContainer
        className="
          grid
          min-h-16
          grid-cols-[1fr_auto_1fr]
          items-center
          xl:flex
          xl:min-h-18
          xl:gap-8
        "
      >
        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="
                      flex
                      size-11
                      items-center
                      justify-center
                      justify-self-start
                      text-foreground
                      transition-colors
                      hover:text-accent
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-focus
                      xl:hidden
                    "
        >
          {menuOpen ? (
            <X className="size-7" aria-hidden="true" />
          ) : (
            <Menu className="size-7" aria-hidden="true" />
          )}
        </button>

        {/* Logo / home link */}
        <Link
          to={routes.home}
          aria-label="XE Design home"
          onClick={closeMenu}
          className="
                      justify-self-center
                      shrink-0
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-focus
                      xl:justify-self-auto
                    "
        >
          <img src="/header-logo-light.png" alt="" className="h-10 w-auto dark:hidden xl:h-12" />

          <img
            src="/header-logo-dark.png"
            alt=""
            className="hidden h-10 w-auto dark:block xl:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden flex-1 justify-center xl:flex">
          <Navigation orientation="horizontal" />
        </div>

        {/* Header controls */}
        <div className="flex items-center justify-self-end gap-2 xl:justify-self-auto">
          {/*
            Issue #5:
            <ThemeToggle />
          */}
        </div>
      </PageContainer>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`
          absolute
          left-0
          top-full
          w-full
          border-t
          border-border
          bg-background
          shadow-soft
          xl:hidden
          ${menuOpen ? 'block' : 'hidden'}
        `}
      >
        <PageContainer className="py-6">
          <Navigation orientation="vertical" ariaLabel="Mobile navigation" onNavigate={closeMenu} />
        </PageContainer>
      </div>

      <GradientDivider className="relative z-10" />
    </header>
  );
}
