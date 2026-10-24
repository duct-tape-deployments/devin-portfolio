import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

import { PageContainer } from '@/components/layout/PageContainer';
import { PageLayout } from '@/components/layout/PageLayout';
import { routes } from '@/config/navigation';
import { getTranslations } from '@/i18n/translations';
import type { BackLinkSection } from '@/i18n/translations';
import { useLanguageStore } from '@/stores/languageStore';

type DetailLayoutProps = {
  /** Section overview the back link returns to; its label lives in `backLinks` */
  section: BackLinkSection;
};

/** Layout route for detail pages (e.g. case studies) */
export function DetailLayout({ section }: DetailLayoutProps) {
  const language = useLanguageStore((state) => state.language);
  const t = getTranslations(language);

  return (
    <>
      <PageContainer className="flex pt-2.5 lg:pt-4">
        <Link to={routes[section]} className="icon-link -ml-2 lg:h-10">
          <ChevronLeft size={24} aria-hidden="true" />
          {t.backLinks[section]}
        </Link>
      </PageContainer>

      {/* PageLayout's <Outlet /> renders this route's child */}
      <PageLayout />
    </>
  );
}
