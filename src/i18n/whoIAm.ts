import type { Language } from '@/stores/languageStore';

type SkillGroup = {
  title: string;
  items: string[];
};

type WhoIAmStrings = {
  title: string;
  tagline: string;
  intro: string;
  quote: string;
  quoteAuthor: string;
  quoteSource: string;
  outro: string;
  hardSkills: SkillGroup;
  softSkills: SkillGroup;
};

const prose = {
  tagline: 'Inquisitive, Adaptive, and Inclusive',
  intro:
    'I sometimes encounter difficulties when beginning a new project or trying to decide what to capture on the screen or through a lens. I often find that when I lack inspiration, I think about the quote',
  quote: '“If you don’t produce, you won’t thrive, no matter how skilled or talented you are.”',
  quoteAuthor: 'Cal Newport',
  quoteSource: 'Deep Work',
  outro:
    'My skillset is constantly evolving. I value open & honest communication and have a passion for the environment, learning and accessibility for all. I’m always eager to contribute my knowledge and learn from others.',
};

export const whoIAm: Record<Language, WhoIAmStrings> = {
  en: {
    ...prose,
    title: 'Who I Am',
    hardSkills: {
      title: 'Hard Skills',
      items: ['Figma', 'Design', 'Photoshop', 'Accessibility'],
    },
    softSkills: {
      title: 'Soft Skills',
      items: ['Communication', 'Problem-Solving', 'Empathy', 'Creative'],
    },
  },

  no: {
    ...prose,
    title: 'Hvem jeg er',
    tagline: 'Nysgjerrig, tilpasningsdyktig og inkluderende',
    intro:
      'Noen ganger støter jeg på vanskeligheter når jeg begynner på et nytt prosjekt eller prøver å bestemme meg for hva jeg skal fange på skjermen eller gjennom en linse. Jeg opplever ofte at når jeg mangler inspirasjon, tenker jeg på sitatet',
    outro:
      'Ferdighetene mine er i stadig utvikling. Jeg verdsetter åpen og ærlig kommunikasjon og brenner for miljøet, læring og tilgjengelighet for alle. Jeg er alltid ivrig etter å bidra med kunnskapen min og lære av andre.',
    // Kept skill headings English for now. Norwegian options:
    // 'Faglige ferdigheter' (hard) and 'Myke ferdigheter' (soft).
    hardSkills: {
      title: 'Hard Skills',
      items: ['Figma', 'Design', 'Photoshop', 'Accessibility'],
    },
    softSkills: {
      title: 'Soft Skills',
      items: ['Kommunikasjon', 'Problemløsning', 'Empati', 'Kreativitet'],
    },
  },
};
