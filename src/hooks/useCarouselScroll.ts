import { useLayoutEffect, useRef, useState } from 'react';

type CarouselScrollOptions = {
  /** Smallest thumb width, as a percentage of its track. */
  minThumbPercent: number;
};

export function useCarouselScroll({ minThumbPercent }: CarouselScrollOptions) {
  const rowRef = useRef<HTMLUListElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useLayoutEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const maxScroll = row.scrollWidth - row.clientWidth;
      const visibleFraction = row.scrollWidth > 0 ? row.clientWidth / row.scrollWidth : 1;
      const scrollFraction = maxScroll > 0 ? row.scrollLeft / maxScroll : 0;

      const thumb = thumbRef.current;
      if (thumb) {
        const width = Math.max(minThumbPercent, 100 * visibleFraction);

        thumb.style.width = `${width}%`;
        thumb.style.transform = `translateX(${((100 - width) / width) * scrollFraction * 100}%)`;
      }

      setAtStart(row.scrollLeft < 1);
      setAtEnd(row.scrollLeft > maxScroll - 1);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(row);
    row.addEventListener('scroll', scheduleUpdate, { passive: true });

    return () => {
      resizeObserver.disconnect();
      row.removeEventListener('scroll', scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, [minThumbPercent]);

  const scrollByItem = (direction: 1 | -1) => {
    const row = rowRef.current;
    const item = row?.firstElementChild;
    if (!row || !item) return;

    const step = item.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    row.scrollBy({ left: direction * step, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return { rowRef, thumbRef, atStart, atEnd, scrollByItem };
}
