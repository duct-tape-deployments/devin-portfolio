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
      <PageContainer className="flex flex-col gap-12 md:gap-16 lg:gap-24">
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
    <article
      aria-labelledby={titleId}
      className="group grid md:grid-cols-2 md:grid-rows-[1fr_auto_auto_auto_1fr] md:gap-x-5 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-x-6 lg:even:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <h2
        id={titleId}
        className={`title-gradient w-fit md:col-start-2 md:row-start-2 md:group-even:col-start-1 ${language === 'no' ? 'max-[381px]:text-4xl' : ''}`}
      >
        {title}
      </h2>
      <p className="mt-4 md:col-start-2 md:row-start-3 md:group-even:col-start-1">
        {preview.subtitle[language]}
      </p>
      <img
        src={preview.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="mt-8 aspect-350/247 w-full rounded-md object-cover shadow-card md:col-start-1 md:row-span-full md:mt-0 md:self-center md:group-even:col-start-2"
      />
      <Link
        to={preview.to}
        className="btn btn-primary mt-8 justify-self-center md:col-start-2 md:row-start-4 md:justify-self-start md:group-even:col-start-1"
      >
        {t.viewPortfolio}
        <span className="sr-only"> {title}</span>
        <ChevronRight className="size-6" aria-hidden="true" />
      </Link>
    </article>
  );
}
