import { Route, Routes } from 'react-router';
import { AppLayout } from '@/components/layout/AppLayout';
import Home from '@/pages/Home';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
