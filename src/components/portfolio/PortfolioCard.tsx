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
    <article className="flex flex-col gap-4">
      {caseStudy.image && (
        <div className="overflow-hidden rounded-sm shadow-glow-image">
          <img src={caseStudy.image} alt="" className="aspect-[16/7] w-full object-cover" />
        </div>
      )}

      <div>
        <p className="badge mb-3">{content.category}</p>

        <h2 className="font-display text-h3 font-semibold text-foreground">{content.title}</h2>

        <p className="mt-3 text-body text-muted-foreground">{content.description}</p>

        <Link to={`/ui-ux/${caseStudy.slug}`} className="btn btn-primary mt-5">
          {t.viewCaseStudy}

          <ChevronRight className="size-6" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
