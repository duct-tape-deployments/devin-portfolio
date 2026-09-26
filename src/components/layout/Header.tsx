import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';

import { Navigation } from '../interface/Navigation';
import { routes } from '@/config/navigation';

import { PageContainer } from '../layout/PageContainer';
import { GradientDivider } from '../interface/GradientDivider';
import { ThemeToggle } from '../interface/ThemeToggle';

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
    <header className="relative z-50 bg-background text-foreground xl:pt-2">
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
          h-15
          grid-cols-[1fr_auto_1fr]
          items-center
          xl:flex
          xl:h-auto
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
          className="icon-button justify-self-start xl:hidden"
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
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
          <img
            src="/header-logo-light.svg"
            alt=""
            className="-mr-1.5 -mb-2.25 h-12.25 w-auto max-w-none dark:hidden xl:m-0 xl:h-12"
          />

          <img
            src="/header-logo-dark.svg"
            alt=""
            className="-mr-1.5 -mb-2.25 hidden h-12.25 w-auto max-w-none dark:block xl:m-0 xl:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden flex-1 justify-center xl:flex">
          <Navigation orientation="horizontal" />
        </div>

        {/* Header controls */}
        <div className="mt-4.5 mr-0.5 flex items-center gap-2 self-start justify-self-end xl:m-0 xl:self-auto xl:justify-self-auto">
          <ThemeToggle />
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

      <GradientDivider className="absolute top-full z-10 xl:relative xl:top-auto" />
    </header>
  );
}
