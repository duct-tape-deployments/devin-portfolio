import type { Language } from '@/stores/languageStore';

export type PortfolioPreviewLabels = {
  viewPortfolio: string;
};

export const portfolioPreviewLabels: Record<Language, PortfolioPreviewLabels> = {
  en: {
    viewPortfolio: 'View Portfolio',
  },

  no: {
    viewPortfolio: 'Se portefølje',
  },
};
