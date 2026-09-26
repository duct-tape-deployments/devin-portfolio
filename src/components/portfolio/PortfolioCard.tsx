import { ChevronRight } from 'lucide-react';
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
    <article className="ml-1 flex flex-col gap-3.5">
      {caseStudy.image && (
        <div className="overflow-hidden rounded-sm shadow-glow-image">
          <img src={caseStudy.image} alt="" className="aspect-[16/7] w-full object-cover" />
        </div>
      )}

      <div className="flex flex-col items-start">
        <p className="badge mb-4.25">{content.category}</p>

        <h2 className="text-h4 font-bold text-foreground text-shadow-drop">{content.title}</h2>

        <p className="mt-6 text-body leading-display text-foreground text-shadow-drop">
          {content.description}
        </p>

        <Link to={`/ui-ux/${caseStudy.slug}`} className="btn btn-primary mt-6">
          {t.viewCaseStudy}

          <ChevronRight className="size-6" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
