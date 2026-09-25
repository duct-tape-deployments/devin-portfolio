import { useId, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useCarouselScroll } from './useCarouselScroll';

type PhotoCarouselProps = {
  images: { src: string; alt: string }[];
  label: string;
  previousLabel: string;
  nextLabel: string;
  priority?: boolean;
};

// Indicator min width relative to the track (11.05% / 30.11% of the row in Figma)
const INDICATOR_MIN_WIDTH_PERCENT = (11.05 / 30.11) * 100;
const chevronClasses = 'icon-button absolute top-1/2 -translate-y-1/2';

export function PhotoCarousel({
  images,
  label,
  previousLabel,
  nextLabel,
  priority = false,
}: PhotoCarouselProps) {
  const rowId = useId();
  const indicatorRef = useRef<HTMLDivElement>(null);

  const { rowRef, atStart, atEnd, scrollByItem } = useCarouselScroll(
    ({ visibleFraction, scrollFraction }) => {
      const indicator = indicatorRef.current;
      if (!indicator) return;

      const width = Math.max(INDICATOR_MIN_WIDTH_PERCENT, 100 * visibleFraction);

      indicator.style.width = `${width}%`;
      // translate % is relative to the indicator itself, so it moves without a layout pass
      indicator.style.transform = `translateX(${((100 - width) / width) * scrollFraction * 100}%)`;
    },
  );

  return (
    <div className="-ml-1.25 -mr-1">
      <div className="relative">
        <button
          type="button"
          onClick={() => scrollByItem(-1)}
          aria-label={previousLabel}
          aria-controls={rowId}
          aria-disabled={atStart}
          className={`${chevronClasses} left-0`}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <ul
          ref={rowRef}
          id={rowId}
          role="list"
          tabIndex={0}
          aria-label={label}
          className="ml-[7.46%] flex snap-x snap-mandatory gap-8 overflow-x-auto scrollbar-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
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
          className={`${chevronClasses} right-[4.14%]`}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div
        aria-hidden="true"
        className="relative mt-3.5 ml-[38.67%] h-3 w-[30.11%] rounded-full bg-cyan"
      >
        <div
          ref={indicatorRef}
          className="absolute inset-y-0 left-0 rounded-full bg-magenta"
          style={{ width: `${INDICATOR_MIN_WIDTH_PERCENT}%` }}
        />
      </div>
    </div>
  );
}
