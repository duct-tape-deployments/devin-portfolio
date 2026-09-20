import { useEffect, useId, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';
import { useT } from '@/stores/languageStore';
import { homeTranslations } from '@/i18n/homeTranslation';

export function WhatIOffer() {
  const t = useT(homeTranslations);
  const offers = t.offers.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const carouselId = useId();
  const titleId = `${carouselId}-title`;
  const statusId = `${carouselId}-status`;

  const totalSlides = offers.length;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const slideGap = 16;

    function updateSlideOffset() {
      setSlideOffset(Math.max(viewport.clientWidth - slideGap, 0));
    }

    updateSlideOffset();

    const resizeObserver = new ResizeObserver(updateSlideOffset);
    resizeObserver.observe(viewport);

    return () => resizeObserver.disconnect();
  }, []);

  function showPrevious() {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? totalSlides - 1 : currentIndex - 1));
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex === totalSlides - 1 ? 0 : currentIndex + 1));
  }

  return (
    <section
      aria-labelledby={titleId}
      aria-roledescription="carousel"
      className="overflow-hidden bg-background py-12 sm:py-16"
    >
      <PageContainer>
        <header className="max-w-[42rem]">
          <h2 id={titleId} className="font-display text-h1 font-bold leading-tight">
            <span className="bg-gradient-text bg-clip-text text-transparent">{t.offers.title}</span>
          </h2>

          <h3 className="mt-8 max-w-[24rem] font-display text-h2 font-black leading-tight text-foreground sm:text-h1">
            {t.offers.headline.beforeBreak}
            <br />
            {t.offers.headline.afterBreak}
          </h3>

          <div
            aria-hidden="true"
            className="mx-auto mt-10 h-px w-2/3 bg-gradient-divider sm:w-1/2"
          />

          <p className="mt-10 max-w-[42rem] text-body">{t.offers.introduction}</p>
        </header>

        <div
          id={carouselId}
          className="mt-12"
          aria-roledescription="carousel"
          aria-label={t.offers.carouselLabel}
        >
          <p id={statusId} className="sr-only" aria-live="polite">
            {t.offers.slideStatus} {activeIndex + 1} of {totalSlides}: {offers[activeIndex].title}
          </p>

          <div ref={viewportRef} className="relative">
            <ul
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * slideOffset}px)`,
              }}
            >
              {offers.map((offer, index) => (
                <li
                  key={offer.title}
                  className="w-[calc(100%-2rem)] shrink-0"
                  aria-roledescription="slide"
                  aria-label={`${t.offers.slideLabel} ${index + 1} of ${totalSlides}`}
                  aria-hidden={index !== activeIndex}
                >
                  <article className="min-h-[17rem] bg-magenta p-8 text-paper sm:min-h-[20rem] sm:p-12">
                    <h4 className="font-display text-h2 font-bold sm:text-h1">{offer.title}</h4>

                    <p className="mt-8 max-w-[38rem] text-body text-paper sm:text-h3">
                      {offer.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label={t.offers.previous}
              className="flex size-11 items-center justify-center rounded-full border border-foreground text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <ChevronLeft aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" role="group" aria-label={t.offers.chooseSlide}>
              {offers.map((offer, index) => (
                <button
                  key={offer.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${t.offers.chooseSlide}: ${offer.title}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  className={[
                    'size-3 rounded-full border border-foreground',
                    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus',
                    index === activeIndex ? 'bg-foreground' : 'bg-transparent',
                  ].join(' ')}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label={t.offers.next}
              className="flex size-11 items-center justify-center rounded-full border border-foreground text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
