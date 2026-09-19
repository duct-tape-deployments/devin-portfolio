import type { Language } from '@/stores/languageStore';

export type CaseStudyLabels = {
  viewCaseStudy: string;
  comingSoon: string;
  role: string;
  duration: string;
  viewPrototype: string;
  company: string;
  goal: string;
  targetAudience: string;
  typographyAndColors: string;
  fontsUsed: string;
  colorsUsed: string;
  objective: string;
  methodology: string;
  feedback: string;
  findings: string;
  recommendations: string;

  closeImage: string;
  openImage: string;
  imageViewer: string;
  previousImage: string;
  nextImage: string;
};

export const caseStudyLabels: Record<Language, CaseStudyLabels> = {
  en: {
    viewCaseStudy: 'View Case Study',
    comingSoon: 'Full case study content coming soon.',
    role: 'Role',
    duration: 'Project Duration',
    viewPrototype: 'View Final Prototype',
    company: 'The Company',
    goal: 'The Goal',
    targetAudience: 'Target Audience',
    typographyAndColors: 'Typography & Colors',
    fontsUsed: 'Fonts Used',
    colorsUsed: 'Colors Used',
    objective: 'Objective & Background',
    methodology: 'Methodology',
    feedback: 'User Feedback',
    findings: 'Findings',
    recommendations: 'Recommendations',
    closeImage: 'Close enlarged image',
    openImage: 'Open image',
    imageViewer: 'Image viewer',
    previousImage: 'Previous image',
    nextImage: 'Next image',
  },

  no: {
    viewCaseStudy: 'Se casestudie',
    comingSoon: 'Hele casestudien kommer snart.',
    role: 'Rolle',
    duration: 'Prosjektvarighet',
    viewPrototype: 'Se ferdig prototype',
    company: 'Selskapet',
    goal: 'Målet',
    targetAudience: 'Målgruppe',
    typographyAndColors: 'Typografi og farger',
    fontsUsed: 'Brukte skrifttyper',
    colorsUsed: 'Brukte farger',
    objective: 'Formål og bakgrunn',
    methodology: 'Metode',
    feedback: 'Tilbakemeldinger fra brukere',
    findings: 'Funn',
    recommendations: 'Anbefalinger',
    closeImage: 'Lukk forstørret bilde',
    openImage: 'Åpne bilde',
    imageViewer: 'Bildevisning',
    previousImage: 'Forrige bilde',
    nextImage: 'Neste bilde',
  },
};
