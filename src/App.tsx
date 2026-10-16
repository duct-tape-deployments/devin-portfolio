import { Route, Routes } from 'react-router';
import { AppLayout } from '@/components/layout/AppLayout';
import { DetailLayout } from '@/components/layout/DetailLayout';
import { PageLayout } from '@/components/layout/PageLayout';
import { routes } from '@/config/navigation';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import Photography from '@/pages/Photography';
import UiUx from '@/pages/UiUx';
import Videography from '@/pages/Videography';
import CaseStudy from '@/pages/CaseStudy';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<PageLayout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.uiUx} element={<UiUx />} />
          <Route path={routes.photography} element={<Photography />} />
          <Route path={routes.videography} element={<Videography />} />
          <Route path={routes.contact} element={<Contact />} />
        </Route>

        <Route element={<DetailLayout section="uiUx" />}>
          <Route path={`${routes.uiUx}/:slug`} element={<CaseStudy />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
