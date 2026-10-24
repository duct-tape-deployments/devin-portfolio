import type { Localized } from '@/i18n/localized';

export type HomeHeroStrings = {
  lineOne: string;
  lineTwoLead: string;
  highlight: string;
  lineThree: string;
  letsTalk: string;
  downloadCv: string;
  fileType: string;
};

export const homeHero: Localized<HomeHeroStrings> = {
  en: {
    lineOne: 'Crafting',
    lineTwoLead: 'The',
    highlight: 'Future',
    lineThree: 'For UX/UI',
    letsTalk: 'Let’s Talk',
    downloadCv: 'Download CV',
    fileType: '(PDF)',
  },

  no: {
    lineOne: 'Former',
    lineTwoLead: '',
    highlight: 'fremtiden',
    lineThree: 'for UX/UI',
    letsTalk: 'Ta kontakt',
    downloadCv: 'Last ned CV',
    fileType: '(PDF)',
  },
};
