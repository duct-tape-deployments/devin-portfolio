import { Outlet } from 'react-router';

/** Layout route that wraps a page in <main>, the target of the header's "Skip to main content" link */
export function PageLayout() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 bg-background focus:outline-none">
      <Outlet />
    </main>
  );
}
