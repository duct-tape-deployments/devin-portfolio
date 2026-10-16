import { Outlet } from 'react-router';

/** Layout route that wraps a page in <main>, the target of the header's "Skip to main content" link */
export function PageLayout() {
  return (
    <main id="main-content" className="flex-1 bg-background">
      <Outlet />
    </main>
  );
}
