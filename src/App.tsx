import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { useLanguageStore } from '@/stores/languageStore';
import Home from '@/pages/Home';

function App() {
  const language = useLanguageStore((state) => state.language);

  // TODO: Stands in for shared Layout's effect until #4/#7 get implemented
  useLayoutEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      {/* Temporary langtoggle here, movee into footer with #8. */}
      <LanguageToggle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
