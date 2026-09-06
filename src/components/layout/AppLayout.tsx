import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      {/* <Header /> issue #7 */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> issue #8 */}
    </div>
  );
}
