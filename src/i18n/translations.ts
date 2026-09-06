export type Language = 'en' | 'no';

export const translations = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About Me',
      uiUx: 'UI/UX',
      photography: 'Photography',
      videography: 'Videography',
      contact: 'Contact',
    },

    accessibility: {
      homeLink: 'XE Design home',
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
      footerNavigation: 'Footer navigation',
      socialLinks: 'Social media links',
      openNavigation: 'Open navigation',
      closeNavigation: 'Close navigation',
      skipToContent: 'Skip to main content',
    },
  },

  no: {
    navigation: {
      home: 'Hjem',
      about: 'Om meg',
      uiUx: 'UI/UX',
      photography: 'Fotografi',
      videography: 'Videografi',
      contact: 'Kontakt',
    },

    accessibility: {
      homeLink: 'XE Design hjem',
      mainNavigation: 'Hovednavigasjon',
      mobileNavigation: 'Mobilnavigasjon',
      footerNavigation: 'Bunntekstnavigasjon',
      socialLinks: 'Lenker til sosiale medier',
      openNavigation: 'Åpne navigasjon',
      closeNavigation: 'Lukk navigasjon',
      skipToContent: 'Hopp til hovedinnhold',
    },
  },
} as const satisfies Record<Language, object>;

export type NavigationLabelKey = keyof typeof translations.en.navigation;

export function getTranslations(language: Language) {
  return translations[language];
}
