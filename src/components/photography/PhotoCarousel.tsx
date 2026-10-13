import { useId } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ScrollProgress } from '@/components/interface/ScrollProgress';
import { useCarouselScroll } from '@/hooks/useCarouselScroll';

type PhotoCarouselProps = {
  images: { src: string; alt: string }[];
  label: string;
  previousLabel: string;
  nextLabel: string;
  priority?: boolean;
};

const THUMB_MIN_WIDTH_PERCENT = (11.05 / 30.11) * 100;
const chevronClasses = 'icon-button col-start-1 row-start-1 self-center md:row-start-2';

export function PhotoCarousel({
  images,
  label,
  previousLabel,
  nextLabel,
  priority = false,
}: PhotoCarouselProps) {
  const rowId = useId();
  const { rowRef, thumbRef, atStart, atEnd, scrollByItem } = useCarouselScroll({
    minThumbPercent: THUMB_MIN_WIDTH_PERCENT,
  });

  return (
    <div className="grid gap-y-4 md:grid-cols-[minmax(0,1fr)_auto_30.11%_auto_minmax(0,1fr)] md:gap-x-4">
      <button
        type="button"
        onClick={() => scrollByItem(-1)}
        aria-label={previousLabel}
        aria-controls={rowId}
        aria-disabled={atStart}
        className={`${chevronClasses} justify-self-start md:col-start-2`}
      >
        <ChevronLeft aria-hidden="true" />
      </button>

      <ul
        ref={rowRef}
        id={rowId}
        role="list"
        tabIndex={0}
        aria-label={label}
        className="@container col-start-1 row-start-1 md:col-span-full flex snap-x snap-mandatory gap-(--carousel-gap) overflow-x-auto scrollbar-none [--carousel-gap:32px] [--carousel-item:220px] max-md:ml-[7.46%] md:[--carousel-gap:20px] md:[--carousel-item:calc((100cqw-3*var(--carousel-gap))/4)] lg:[--carousel-gap:24px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      >
        {images.map((image, index) => {
          const eager = priority && index === 0;

          return (
            <li key={image.src} className="shrink-0 snap-start">
              <img
                src={image.src}
                alt={image.alt}
                width={220}
                height={220}
                loading={eager ? 'eager' : 'lazy'}
                fetchPriority={eager ? 'high' : undefined}
                decoding="async"
                className="block size-(--carousel-item) object-cover shadow-photo"
              />
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => scrollByItem(1)}
        aria-label={nextLabel}
        aria-controls={rowId}
        aria-disabled={atEnd}
        className={`${chevronClasses} mr-[4.14%] justify-self-end max-md:icon-button-on-photo md:col-start-4 md:mr-0`}
      >
        <ChevronRight aria-hidden="true" />
      </button>

      <ScrollProgress
        thumbRef={thumbRef}
        className="row-start-2 w-[30.11%] max-md:ml-[38.67%] md:col-start-3 md:w-auto md:self-center"
      />
    </div>
  );
}
