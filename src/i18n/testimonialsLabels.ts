import type { Language } from '@/stores/languageStore';

export type TestimonialsLabels = {
  title: string;
  subtitle: string;
  previous: string;
  next: string;
};

export const testimonialsLabels: Record<Language, TestimonialsLabels> = {
  en: {
    title: 'Testimonials',
    subtitle: 'Colleague/Client Feedback',
    previous: 'Previous testimonial',
    next: 'Next testimonial',
  },

  no: {
    title: 'Tilbakemeldinger',
    subtitle: 'Fra kolleger og kunder',
    previous: 'Forrige tilbakemelding',
    next: 'Neste tilbakemelding',
  },
};
