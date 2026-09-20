import type { Language } from '@/stores/languageStore';

export const homeTranslations = {
  en: {
    hero: {
      crafting: 'CRAFTING',
      the: 'THE',
      future: 'FUTURE',
      forUxUi: 'FOR UX/UI',
      contact: "Let's Talk",
      downloadResume: 'Download Resume',
    },
    profile: {
      imageAlt: 'Devin Ekse',
      greeting: 'Hello I am',
      name: 'Devin Ekse',
      description: {
        beforeBreak: 'UI/UX designer & photographer/',
        afterBreak: 'videographer',
      },
      location: 'Stavanger, Norway',
      likes: '1.1K',
      views: '20',
      available: 'Available',
    },
    offers: {
      title: 'What I Can Offer',
      headline: {
        beforeBreak: 'Fresh Eyes,',
        afterBreak: 'Designing for the Future',
      },
      introduction:
        'While new to the UI/UX field, I bring over 15 years of photography experience, along with knowledge of psychology, print media, and content writing. My relentless passion drives me to learn and excel at everything I do.',
      previous: 'Previous offer',
      next: 'Next offer',
      chooseSlide: 'Choose offer slide',
      slideStatus: 'Showing slide',
      carouselLabel: 'Services and skills',
      slideLabel: 'Slide',
      items: [
        {
          title: 'UI Design',
          description:
            'I am actively learning Figma and design principles to make memorable works of art on screen.',
        },
        {
          title: 'User Research',
          description:
            'Due to my varied study background, I possess strong research skills and understand user needs and pain points.',
        },
        {
          title: 'Prototyping',
          description:
            'I have 2 years of experience prototyping websites and apps through school and as a designer.',
        },
        {
          title: 'Interactions',
          description:
            'As a former educator, I can organize information logically, translating intuitive interactions on screen.',
        },
        {
          title: 'Communication',
          description:
            'Years of experience in various settings allows me to express complex ideas and work with a varied audience.',
        },
      ],
    },
  },

  no: {
    hero: {
      crafting: 'BYGGER',
      the: 'FOR',
      future: 'FREMTIDENS',
      forUxUi: 'UX/UI',
      contact: 'Ta kontakt',
      downloadResume: 'Last ned CV',
    },
    profile: {
      imageAlt: 'Devin Ekse',
      greeting: 'Hei, jeg er',
      name: 'Devin Ekse',
      description: {
        beforeBreak: 'UI/UX-designer, fotograf og',
        afterBreak: 'videograf',
      },
      location: 'Stavanger, Norge',
      likes: '1,1K',
      views: '20',
      available: 'Tilgjengelig',
    },
    offers: {
      title: 'Dette kan jeg tilby',
      headline: {
        beforeBreak: 'Nye perspektiver,',
        afterBreak: 'design for fremtiden',
      },
      introduction:
        'Selv om jeg er ny innen UI/UX, tar jeg med meg over 15 års erfaring fra fotografi, samt kunnskap om psykologi, trykte medier og innholdsproduksjon. Lidenskapen min driver meg til å lære og utvikle meg.',
      previous: 'Forrige tilbud',
      next: 'Neste tilbud',
      chooseSlide: 'Velg lysbilde',
      slideStatus: 'Viser lysbilde',
      carouselLabel: 'Tjenester og ferdigheter',
      slideLabel: 'Lysbilde',
      items: [
        {
          title: 'UI-design',
          description:
            'Jeg lærer aktivt Figma og designprinsipper for å lage minneverdige arbeider på skjerm.',
        },
        {
          title: 'Brukerundersøkelser',
          description:
            'På grunn av min varierte studiebakgrunn har jeg gode forskningsevner og forstår brukernes behov og smertepunkter.',
        },
        {
          title: 'Prototyping',
          description:
            'Jeg har to års erfaring med prototyping av nettsider og apper gjennom skole og arbeid som designer.',
        },
        {
          title: 'Interaksjoner',
          description:
            'Som tidligere lærer kan jeg organisere informasjon logisk og oversette intuitive interaksjoner til skjerm.',
        },
        {
          title: 'Kommunikasjon',
          description:
            'År med erfaring fra ulike settinger gjør at jeg kan uttrykke komplekse ideer og samarbeide med et variert publikum.',
        },
      ],
    },
  },
} as const satisfies Record<Language, object>;
