import type { Localized } from './localized';

type FooterStrings = {
  tagline: string;
  explore: string;
  portfolios: string;
  rightsReserved: string;
  location: string;
};

export const footer: Localized<FooterStrings> = {
  en: {
    tagline:
      'Leveraging 15+ years of design, media and artistic creation. Elevating brand presence through cohesive digital systems.',
    explore: 'Explore',
    portfolios: 'Portfolios',
    rightsReserved: 'All rights reserved.',
    location: 'Stavanger, Norway',
  },
  no: {
    tagline:
      'Bygger på over 15 års erfaring innen design, media og kunstnerisk arbeid. Løfter merkevarens tilstedeværelse gjennom helhetlige digitale systemer.',
    explore: 'Utforsk',
    portfolios: 'Portefølje',
    rightsReserved: 'Alle rettigheter forbeholdt.',
    location: 'Stavanger, Norge',
  },
};
