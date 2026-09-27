import type { Language } from '@/stores/languageStore';

type AboutMeStrings = {
  title: string;
  intro: string[];
  photoAlt: string;
  paragraphs: string[];
};

const prose = {
  intro: ['Welcome!', 'It’s me Devin,', 'thanks for visiting my portfolio website.'],
  photoAlt: 'Devin making peace signs with both hands',
  paragraphs: [
    'Growing up poor, I learned from an early age to get creative. I lived on a farm most of my life and craved the bright lights of the city. As an adult, I have travelled the world, looking for inspiration, learning about different cultures and helping people who need it the most.',
    'I’m a curious creative who has studied Chemistry, English Literature, Psychology, Photography and now UI Design. Life-long learning is a big focus in my life, but now I want to shift my focus more to creating solutions of my own, rather than just studying them.',
    'As a child, I grew up in a multi-cultural family, with heavy influences from Japan, the Philippines and Germany. The design system for XE Design is actually called ‘Natsukashii’ which means the feeling of fond nostalgia or longing for something from the past. It’s tied to the idea of ‘mono no aware’, the awareness of life’s impermanence and ‘ikigai’ the reason for being. These 3 terms are the driving force not just behind my brand, but my entire life. The small moments of beauty in life that bring back feelings of your childhood.',
    'Through my work, I want to take the beauty in this fleeting life and merge that, with the forgotten whimsy of our childhoods, into clean, thoughtful and inclusive designs.',
  ],
};

export const aboutMe: Record<Language, AboutMeStrings> = {
  en: {
    ...prose,
    title: 'About Me',
  },

  // TODO: get and add a Norwegian translation from Devin
  no: {
    ...prose,
    title: 'Om meg',
  },
};
