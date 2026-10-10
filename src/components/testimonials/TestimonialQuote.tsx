import { Quote } from 'lucide-react';

import type { Testimonial } from '@/data/testimonials';

type TestimonialQuoteProps = {
  testimonial: Testimonial;
};

export function TestimonialQuote({ testimonial }: TestimonialQuoteProps) {
  const { quote, author } = testimonial;
  const lastSpace = quote.lastIndexOf(' ');

  return (
    <figure lang="en" className="relative pl-8">
      <Quote
        aria-hidden="true"
        size={24}
        className="absolute top-0 left-0 -scale-x-100 text-cyan"
      />

      <blockquote className="w-53.5">
        <p>
          {quote.slice(0, lastSpace + 1)}
          <span className="whitespace-nowrap">
            {quote.slice(lastSpace + 1)}
            <Quote aria-hidden="true" size={24} className="ml-2 inline-block align-top text-cyan" />
          </span>
        </p>
      </blockquote>

      {author && <figcaption className="mt-6 max-w-53.5 text-xs">{author}</figcaption>}
    </figure>
  );
}
