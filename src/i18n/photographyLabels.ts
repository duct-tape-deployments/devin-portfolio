import type { Language } from '@/stores/languageStore';

export type PhotographyLabels = {
  title: string;
  viewAll: string;
  viewAllCategory: (category: string) => string;
  photos: (category: string) => string;
  previousImage: (category: string) => string;
  nextImage: (category: string) => string;
};

export const photographyLabels: Record<Language, PhotographyLabels> = {
  en: {
    title: 'Photography',
    viewAll: 'View All',
    viewAllCategory: (category) => `${category} photos`,
    photos: (category) => `${category} photos`,
    previousImage: (category) => `Previous ${category} photo`,
    nextImage: (category) => `Next ${category} photo`,
  },

  no: {
    title: 'Fotografi',
    viewAll: 'Se alle',
    viewAllCategory: (category) => `bilder i kategorien ${category}`,
    photos: (category) => `Bilder i kategorien ${category}`,
    previousImage: (category) => `Forrige bilde i kategorien ${category}`,
    nextImage: (category) => `Neste bilde i kategorien ${category}`,
  },
};
