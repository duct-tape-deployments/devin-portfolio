import { ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

import { routes } from '@/config/navigation';
import { homeHero } from '@/i18n/homeHero';
import { useLanguageStore, useT } from '@/stores/languageStore';

// Placeholder
const cvHref = '/documents/devin-ekse-cv.pdf';

type HeroHeadingProps = {
  headingId: string;
  className?: string;
};

export function HeroHeading({ headingId, className }: HeroHeadingProps) {
  const language = useLanguageStore((state) => state.language);
  const t = useT(homeHero);

  return (
    <div className={`md:flex md:items-end md:justify-between md:gap-5 lg:block ${className ?? ''}`}>
      <h1
        id={headingId}
        className={`font-display text-display font-bold uppercase text-shadow-drop ${language === 'no' ? 'max-[330px]:text-h1' : ''}`}
      >
        <span className="block bg-gradient-text bg-clip-text text-transparent text-shadow-none drop-shadow-text">
          {t.lineOne}
        </span>{' '}
        <span className="block">
          {t.lineTwoLead && <>{t.lineTwoLead} </>}
          <span className="text-noise">{t.highlight}</span>
        </span>{' '}
        <span className="block">{t.lineThree}</span>
      </h1>

      <div className="mt-8 flex flex-wrap justify-between gap-4 md:mt-0 md:flex-col md:flex-nowrap md:justify-start lg:mt-8 lg:flex-row lg:flex-wrap">
        <Link to={routes.contact} className="btn btn-primary md:max-lg:w-full">
          {t.letsTalk}
          <ChevronRight size={24} aria-hidden="true" />
        </Link>

        <a href={cvHref} download className="btn btn-outline md:max-lg:w-full">
          {t.downloadCv}
          <span className="sr-only"> {t.fileType}</span>
          <ChevronDown size={24} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
