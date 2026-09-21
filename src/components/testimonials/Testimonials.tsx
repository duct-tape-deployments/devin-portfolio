import { useId } from 'react';

import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';
import { TestimonialQuote } from '@/components/testimonials/TestimonialQuote';
import { testimonials } from '@/data/testimonials';
import { testimonialsLabels } from '@/i18n/testimonialsLabels';
import { useLanguageStore, useT } from '@/stores/languageStore';

export function Testimonials() {
  const language = useLanguageStore((state) => state.language);
  const t = useT(testimonialsLabels);
  const titleId = useId();
  const subtitleId = useId();

  return (
    <Section aria-labelledby={titleId}>
      <PageContainer>
        <header>
          <h2
            id={titleId}
            className={`my-2.5 block w-fit bg-gradient-text bg-clip-text font-display text-h1 font-bold text-transparent ${language === 'no' ? 'max-[389px]:text-4xl' : ''}`}
          >
            {t.title}
          </h2>

          <p id={subtitleId}>{t.subtitle}</p>
        </header>

        <ul
          aria-labelledby={subtitleId}
          tabIndex={0}
          className="mt-9.5 -ml-0.75 flex gap-8 overflow-x-auto scrollbar-none pointer-fine:scrollbar-thin pointer-fine:pb-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus pointer-coarse:[&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.id}
              className="shrink-0"
              style={{ marginLeft: testimonial.extraGap }}
            >
              <TestimonialQuote testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </PageContainer>
    </Section>
  );
}
