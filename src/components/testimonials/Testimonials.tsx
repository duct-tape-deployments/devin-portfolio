import { useId } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ScrollProgress } from '@/components/interface/ScrollProgress';
import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';
import { TestimonialQuote } from '@/components/testimonials/TestimonialQuote';
import { testimonials } from '@/data/testimonials';
import { useCarouselScroll } from '@/hooks/useCarouselScroll';
import { testimonialsLabels } from '@/i18n/testimonialsLabels';
import { useLanguageStore, useT } from '@/stores/languageStore';

// Progress bar copied from Photography's Figma
const THUMB_MIN_WIDTH_PERCENT = (11.05 / 30.11) * 100;
const chevronClasses = 'icon-button hidden shrink-0 pointer-fine:inline-flex';

export function Testimonials() {
  const language = useLanguageStore((state) => state.language);
  const t = useT(testimonialsLabels);
  const titleId = useId();
  const subtitleId = useId();
  const rowId = useId();
  const { rowRef, thumbRef, atStart, atEnd, scrollByItem } = useCarouselScroll({
    minThumbPercent: THUMB_MIN_WIDTH_PERCENT,
  });

  return (
    <Section aria-labelledby={titleId}>
      <PageContainer>
        <header>
          <h2
            id={titleId}
            className={`title-gradient block w-fit ${language === 'no' ? 'max-[389px]:text-4xl' : ''}`}
          >
            {t.title}
          </h2>
          <p id={subtitleId} className="mt-4">
            {t.subtitle}
          </p>
        </header>

        {/* Touch swipes, mouse users get chevrons and progress bar */}
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => scrollByItem(-1)}
            aria-label={t.previous}
            aria-controls={rowId}
            aria-disabled={atStart}
            className={chevronClasses}
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <ul
            ref={rowRef}
            id={rowId}
            role="list"
            aria-labelledby={subtitleId}
            tabIndex={0}
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-8 overflow-x-auto scrollbar-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            {testimonials.map((testimonial) => (
              <li key={testimonial.id} className="shrink-0 snap-start">
                <TestimonialQuote testimonial={testimonial} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollByItem(1)}
            aria-label={t.next}
            aria-controls={rowId}
            aria-disabled={atEnd}
            className={chevronClasses}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>

        <ScrollProgress
          thumbRef={thumbRef}
          className="mx-auto mt-4 hidden w-[30.11%] pointer-fine:block"
        />
      </PageContainer>
    </Section>
  );
}
