import { Link } from 'react-router';

import type { CaseStudy } from '@/data/caseStudies';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { useLanguageStore, useT } from '@/stores/languageStore';

type PortfolioCardProps = {
  caseStudy: CaseStudy;
};

export function PortfolioCard({ caseStudy }: PortfolioCardProps) {
  const language = useLanguageStore((state) => state.language);
  const t = useT(caseStudyLabels);

  const content = caseStudy.content[language];

  return (
    <article className="flex flex-col gap-4">
      {caseStudy.image && (
        <div className="overflow-hidden rounded-sm shadow-glow-image">
          <img src={caseStudy.image} alt="" className="aspect-[16/7] w-full object-cover" />
        </div>
      )}

      <div>
        <p className="mb-3 inline-flex rounded bg-cyan px-4 py-1.5 text-sm font-semibold text-ink">
          {content.category}
        </p>

        <h2 className="font-display text-h3 font-semibold text-foreground">{content.title}</h2>

        <p className="mt-3 text-body text-muted-foreground">{content.description}</p>

        <Link to={`/ui-ux/${caseStudy.slug}`} className="btn btn-primary mt-5">
          {t.viewCaseStudy}

          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            <path
              d="m9 18 6-6-6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
