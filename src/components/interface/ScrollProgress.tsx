import type { Ref } from 'react';

type ScrollProgressProps = {
  /** `thumbRef` from `useCarouselScroll`, which sizes and moves the thumb. */
  thumbRef: Ref<HTMLDivElement>;
  /** Width and placement of the track */
  className?: string;
};

/** Decorative carousel progress bar */
export function ScrollProgress({ thumbRef, className = '' }: ScrollProgressProps) {
  return (
    <div aria-hidden="true" className={`relative h-3 rounded-full bg-cyan ${className}`}>
      <div ref={thumbRef} className="absolute inset-y-0 left-0 rounded-full bg-magenta" />
    </div>
  );
}
