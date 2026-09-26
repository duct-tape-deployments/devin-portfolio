import { Quote } from 'lucide-react';

import type { Testimonial } from '@/data/testimonials';

const defaultIconSize = 24;

type TestimonialQuoteProps = {
  testimonial: Testimonial;
};

export function TestimonialQuote({ testimonial }: TestimonialQuoteProps) {
  const {
    quote,
    author,
    textWidth,
    textOffset,
    closingIconTop,
    openingIconSize = defaultIconSize,
    closingIconSize = defaultIconSize,
  } = testimonial;

  return (
    <figure
      className="relative box-content pr-6"
      style={{ width: textWidth, paddingLeft: textOffset }}
    >
      <Quote
        aria-hidden="true"
        size={openingIconSize}
        className="absolute top-0.75 left-0 -scale-x-100 text-cyan"
      />

      <blockquote className="relative pb-5">
        <p className="pt-0.75">{quote}</p>

        <Quote
          aria-hidden="true"
          size={closingIconSize}
          className="absolute left-full text-cyan"
          style={{ top: closingIconTop }}
        />
      </blockquote>

      {author && <figcaption className="mt-1 text-xs">{author}</figcaption>}
    </figure>
  );
}
