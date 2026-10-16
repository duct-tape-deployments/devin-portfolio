import { useEffect, useRef } from 'react';
import { NavigationType, useLocation, useNavigationType } from 'react-router';

/**
 * Moves focus to the page's <h1> (or <main> when a page has none) when the pathname changes, so
 * screen readers announce the new page (WCAG 2.4.3). Back/Forward too: `preventScroll` keeps the
 * browser's restored scroll position.
 */
export function useRouteFocus() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    if (navigationType === NavigationType.Replace) return;

    const main = document.getElementById('main-content');
    const heading = main?.querySelector('h1');
    heading?.setAttribute('tabindex', '-1');
    (heading ?? main)?.focus({ preventScroll: true });
  }, [pathname, navigationType]);
}
