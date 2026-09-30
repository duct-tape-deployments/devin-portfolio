import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';

import { Navigation } from '../interface/Navigation';
import { routes } from '@/config/navigation';

import { PageContainer } from '../layout/PageContainer';
import { GradientDivider } from '../interface/GradientDivider';
import { Logo } from '../interface/Logo';
import { ThemeToggle } from '../interface/ThemeToggle';

export function Header() {
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
          grid-cols-[1fr_auto_1fr]
          items-center
          max-xl:h-15
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
                    "
        >
          <Logo className="xl:m-0 xl:h-12" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden flex-1 justify-center xl:flex">
          <Navigation orientation="horizontal" />
        </div>

        {/* Header controls */}
        <div className="flex justify-self-end max-xl:mt-4.5 max-xl:mr-0.5 max-xl:self-start">
          <ThemeToggle />
        </div>
      </PageContainer>

      {/* Mobile navigation */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`
          absolute
          left-0
          top-full
          mt-px
          w-53.5
          bg-background
          shadow-soft
          dark:shadow-card
          xl:hidden
          ${menuOpen ? 'block' : 'hidden'}
        `}
      >
        <div className="p-4">
          <Navigation orientation="vertical" ariaLabel="Mobile navigation" onNavigate={closeMenu} />
        </div>
      </div>

      <GradientDivider className="relative z-10 max-xl:absolute max-xl:top-full" />
    </header>
  );
}
