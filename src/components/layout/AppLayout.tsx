import { Outlet } from 'react-router';
import { Header } from '../UI/Header';

export function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> issue #8 */}
    </div>
  );
}
