import { ChevronRight } from 'lucide-react';
import { useId } from 'react';
import { Link } from 'react-router';

import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';
import { portfolioPreviews } from '@/data/portfolioPreviews';
import type { PortfolioPreview as Preview } from '@/data/portfolioPreviews';
import { portfolioPreviewLabels } from '@/i18n/portfolioPreview';
import { useLanguageStore, useT } from '@/stores/languageStore';

export function PortfolioPreview() {
  return (
    <Section>
      <PageContainer className="flex flex-col gap-12">
        {portfolioPreviews.map((preview) => (
          <PreviewItem key={preview.to} preview={preview} />
        ))}
      </PageContainer>
    </Section>
  );
}

function PreviewItem({ preview }: { preview: Preview }) {
  const language = useLanguageStore((state) => state.language);
  const t = useT(portfolioPreviewLabels);
  const titleId = useId();

  const title = preview.title[language];

  return (
    <article aria-labelledby={titleId} className="flex flex-col">
      <h2
        id={titleId}
        className={`title-gradient w-fit ${language === 'no' ? 'max-[381px]:text-4xl' : ''}`}
      >
        {title}
      </h2>
      <p className="mt-4">{preview.subtitle[language]}</p>
      <img
        src={preview.image}
        alt=""
        loading="lazy"
        decoding="async"
        className={`mt-8 w-full rounded-md object-cover shadow-card ${preview.imageClassName}`}
      />
      <Link to={preview.to} className="btn btn-primary mt-8 self-center">
        {t.viewPortfolio}
        <span className="sr-only"> {title}</span>
        <ChevronRight className="size-6" aria-hidden="true" />
      </Link>
    </article>
  );
}
