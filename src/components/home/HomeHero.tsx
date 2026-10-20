import { useId } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';
import { routes } from '@/config/navigation';
import { homeHero } from '@/i18n/homeHero';
import { useLanguageStore, useT } from '@/stores/languageStore';

/** Placeholder */
const cvHref = '/documents/devin-ekse-cv.pdf';

export function HomeHero() {
  const language = useLanguageStore((state) => state.language);
  const t = useT(homeHero);
  const headingId = useId();

  return (
    <>
      <Section space="hero" aria-labelledby={headingId}>
        <PageContainer>
          <h1
            id={headingId}
            className={`font-display text-display font-bold uppercase text-shadow-drop ${language === 'no' ? 'max-[330px]:text-h1' : ''}`}
          >
            <span className="block bg-gradient-text bg-clip-text text-transparent text-shadow-none drop-shadow-text">
              {t.lineOne}
            </span>{' '}
            <span className="block">
              {t.lineTwoLead && <>{t.lineTwoLead} </>}
              <span>{t.highlight}</span>
            </span>{' '}
            <span className="block">{t.lineThree}</span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-between gap-4 md:justify-start">
            <Link to={routes.contact} className="btn btn-primary">
              {t.letsTalk}
              <ChevronRight size={24} aria-hidden="true" />
            </Link>

            <a href={cvHref} download className="btn btn-outline">
              {t.downloadCv}
              <span className="sr-only"> {t.fileType}</span>
              <ChevronDown size={24} aria-hidden="true" />
            </a>
          </div>
        </PageContainer>
      </Section>

      <GradientDivider />
    </>
  );
}
