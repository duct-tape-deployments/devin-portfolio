import { useId } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { sectionHeading } from '@/components/portfolio/caseStudyStyles';
import { routes } from '@/config/navigation';
import { getNextCaseStudy } from '@/data/caseStudies';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { useLanguageStore, useT } from '@/stores/languageStore';

type NextCaseStudyProps = {
  slug: string;
};

export function NextCaseStudy({ slug }: NextCaseStudyProps) {
  const language = useLanguageStore((state) => state.language);
  const t = useT(caseStudyLabels);

  const headingId = useId();
  const nameId = useId();

  const next = getNextCaseStudy(slug);

  if (!next) {
    return null;
  }

  const content = next.content[language];
  const to = `${routes.uiUx}/${next.slug}`;

  return (
    <nav aria-labelledby={headingId} className="mt-16 lg:mt-24">
      <div className="mx-auto w-3/5">
        <GradientDivider />
      </div>

      <h2 id={headingId} className={`mt-12 ${sectionHeading}`}>
        {t.nextProject}
      </h2>

      <div
        className={`group/teaser mt-8 ${next.image ? 'md:grid md:grid-cols-8 md:items-start md:gap-x-5 lg:grid-cols-12 lg:gap-x-6' : ''}`}
      >
        {next.image && (
          <Link
            to={to}
            tabIndex={-1}
            aria-hidden="true"
            className="mb-6 block overflow-hidden rounded-card shadow-glow-image md:col-span-4 md:mb-0 lg:col-span-7"
          >
            <img
              src={next.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-16/7 w-full object-cover motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-105 [@media(hover:hover)]:motion-safe:group-has-[.btn-primary:hover]/teaser:scale-105"
            />
          </Link>
        )}

        <div className="md:order-first md:col-span-4 lg:col-span-5">
          <p className="badge">{content.category}</p>

          <h3
            id={nameId}
            translate={next.projectName ? 'no' : undefined}
            className="mt-4 font-display text-h3 font-bold text-foreground text-shadow-drop"
          >
            {next.projectName ?? content.title}
          </h3>

          <p className="mt-4 max-w-reading text-pretty text-foreground">{content.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to={to} aria-describedby={nameId} className="btn btn-primary">
              {t.viewCaseStudy}
              <ChevronRight size={24} aria-hidden="true" />
            </Link>

            <Link to={routes.uiUx} className="btn btn-outline">
              {t.viewAll}
              <span className="sr-only"> {t.viewAllContext}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
