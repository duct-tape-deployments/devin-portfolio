export type Testimonial = {
  id: string;
  quote: string;
  author?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'quote-1',
    quote: 'XE Design has the best designs ever!',
    author: 'David Wade, Wade Cleaning Services',
  },
  {
    id: 'quote-2',
    quote:
      'Our mobile site was a mess and really needed updating. She worked fast and made it look 10x better.',
    author: 'Simeon Ekse, Dark Delirium',
  },
  {
    id: 'quote-3',
    quote: 'XE Design has the best designs ever!',
  },
  {
    id: 'quote-4',
    quote:
      'Our mobile site was a mess and really needed updating. She worked fast and made it look 10x better.',
  },
  {
    id: 'quote-5',
    quote:
      'I really appreciate how she listened to what we needed and came up with some outside-the-box ideas.',
  },
];
