import type { Localized } from '@/i18n/localized';

export type ProfileIntroStrings = {
  hello: string;
  role: string;
  photoAlt: string;
  locationLabel: string;
  location: string;
  likes: string;
  likesLabel: string;
  views: string;
  viewsLabel: string;
  available: string;
};

export const profileIntro: Localized<ProfileIntroStrings> = {
  en: {
    hello: 'Hello I am',
    role: 'UI/UX designer & photographer/​videographer',
    photoAlt: 'Portrait of Devin Ekse',
    locationLabel: 'Location:',
    location: 'Stavanger, Norway',
    // Placeholders
    likes: '1.1K',
    likesLabel: 'likes',
    views: '20',
    viewsLabel: 'views',
    available: 'Available',
  },

  no: {
    hello: 'Hei, jeg er',
    role: 'UI/UX-designer og fotograf/​videograf',
    photoAlt: 'Portrett av Devin Ekse',
    locationLabel: 'Sted:',
    location: 'Stavanger, Norge',
    likes: '1,1k',
    likesLabel: 'liker',
    views: '20',
    viewsLabel: 'visninger',
    available: 'Tilgjengelig',
  },
};
