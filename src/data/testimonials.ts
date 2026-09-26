export type Testimonial = {
  id: string;
  quote: string;
  author?: string;
  textWidth: number;
  textOffset: number;
  closingIconTop: number;
  openingIconSize?: number;
  closingIconSize?: number;
  extraGap?: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 'quote-1',
    quote: 'XE Design has the best designs ever!',
    author: 'David Wade, Wade Cleaning Services',
    textWidth: 142,
    textOffset: 30.76,
    closingIconTop: 50,
  },
  {
    id: 'quote-2',
    quote:
      'Our mobile site was a mess and really needed updating. She worked fast and made it look 10x better.',
    author: 'Simeon Ekse, Dark Delirium',
    textWidth: 211,
    textOffset: 32.35,
    closingIconTop: 76,
    openingIconSize: 22.83,
    closingIconSize: 22.83,
  },
  {
    id: 'quote-3',
    quote: 'XE Design has the best designs ever!',
    textWidth: 188,
    textOffset: 32.75,
    closingIconTop: 50,
    extraGap: 8.65,
  },
  {
    id: 'quote-4',
    quote:
      'Our mobile site was a mess and really needed updating. She worked fast and made it look 10x better.',
    textWidth: 222,
    textOffset: 34,
    closingIconTop: 79,
  },
  {
    id: 'quote-5',
    quote:
      'I really appreciate how she listened to what we needed and came up with some outside-the-box ideas.',
    textWidth: 214,
    textOffset: 37.29,
    closingIconTop: 77,
    openingIconSize: 27.33,
    extraGap: -4.55,
  },
];
