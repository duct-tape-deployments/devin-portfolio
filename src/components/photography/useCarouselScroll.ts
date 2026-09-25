import { useEffect, useEffectEvent, useRef, useState } from 'react';

type CarouselScrollProgress = {
  visibleFraction: number;
  scrollFraction: number;
};

export function useCarouselScroll(onProgress: (progress: CarouselScrollProgress) => void) {
  const rowRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const reportProgress = useEffectEvent(onProgress);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      const maxScroll = row.scrollWidth - row.clientWidth;

      reportProgress({
        visibleFraction: row.scrollWidth > 0 ? row.clientWidth / row.scrollWidth : 1,
        scrollFraction: maxScroll > 0 ? row.scrollLeft / maxScroll : 0,
      });
      setAtStart(row.scrollLeft < 1);
      setAtEnd(row.scrollLeft > maxScroll - 1);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(row);
    row.addEventListener('scroll', scheduleUpdate, { passive: true });

    return () => {
      resizeObserver.disconnect();
      row.removeEventListener('scroll', scheduleUpdate);
      cancelAnimationFrame(frame);
    };
  }, []);

  const scrollByItem = (direction: 1 | -1) => {
    const row = rowRef.current;
    const item = row?.firstElementChild;
    if (!row || !item) return;

    const step = item.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    row.scrollBy({ left: direction * step, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return { rowRef, atStart, atEnd, scrollByItem };
}
