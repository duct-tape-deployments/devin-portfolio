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
const chevronClasses =
  'icon-button shrink-0 max-md:absolute max-md:top-1/2 max-md:-translate-y-1/2';

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
    <div>
      <div className="relative md:flex md:items-center md:gap-4">
        <button
          type="button"
          onClick={() => scrollByItem(-1)}
          aria-label={previousLabel}
          aria-controls={rowId}
          aria-disabled={atStart}
          className={`${chevronClasses} max-md:left-0`}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <ul
          ref={rowRef}
          id={rowId}
          role="list"
          tabIndex={0}
          aria-label={label}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto scrollbar-none max-md:ml-[7.46%] md:min-w-0 md:flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
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
                  className="block size-55 object-cover shadow-photo"
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
          className={`${chevronClasses} max-md:right-[4.14%]`}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <ScrollProgress
        thumbRef={thumbRef}
        className="mt-4 w-[30.11%] max-md:ml-[38.67%] md:mx-auto"
      />
    </div>
  );
}
