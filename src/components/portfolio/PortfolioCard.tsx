import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

import { routes } from '@/config/navigation';
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
        <div className="overflow-hidden rounded-md shadow-glow-image">
          <img src={caseStudy.image} alt="" className="aspect-16/7 w-full object-cover" />
        </div>
      )}

      <div>
        <p className="badge mb-4">{content.category}</p>

        <h2 className="text-h5 leading-display font-bold text-foreground text-shadow-drop">
          {content.title}
        </h2>

        <p className="mt-6 text-body leading-display text-foreground text-shadow-drop">
          {content.description}
        </p>

        <Link to={`${routes.uiUx}/${caseStudy.slug}`} className="btn btn-primary mt-6">
          {t.viewCaseStudy}

          <ChevronRight className="size-6" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
