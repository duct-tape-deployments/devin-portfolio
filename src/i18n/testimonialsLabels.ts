import type { Language } from '@/stores/languageStore';

export type TestimonialsLabels = {
  title: string;
  subtitle: string;
};

export const testimonialsLabels: Record<Language, TestimonialsLabels> = {
  en: {
    title: 'Testimonials',
    subtitle: 'Colleague/Client Feedback',
  },

  no: {
    title: 'Tilbakemeldinger',
    subtitle: 'Fra kolleger og kunder',
  },
};
