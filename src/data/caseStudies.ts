import { untranslated } from '@/i18n/localized';
import type { Localized, LocalizedImage } from '@/i18n/localized';

export type CaseStudySummaryContent = {
  category: string;
  title: string;
  description: string;
};

export type CaseStudyDetailsContent = {
  role: string;
  duration: string;

  company: string;
  goal: string;

  targetAudience: {
    ageRange: string;
    description: string;
  };

  objective?: string;
  methodology?: string[];
  feedback?: string;
  findings?: string[];
  recommendations?: string[];
};

export type CaseStudyDetails = {
  content: Localized<CaseStudyDetailsContent>;

  prototypeUrl?: string;

  heroImage?: LocalizedImage;
  images?: LocalizedImage[];

  typography?: {
    name: string;
    weight: number;
    weightLabel?: string;
    family?: string;
    fallback?: 'serif' | 'sans-serif';
  }[];

  colors?: string[];
};

export type CaseStudy = {
  slug: string;
  projectName?: string;

  content: Localized<CaseStudySummaryContent>;

  image?: string;
  details?: CaseStudyDetails;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'food-discovery-logo',
    projectName: 'Food-IE',

    content: {
      en: {
        category: 'Logo Design',
        title: 'Delivering Mouth-watering Design to a Food Discovery App',
        description:
          'Creating a logo for a rustic style food app that matches users needs with a nearby restaurant.',
      },
      no: {
        category: 'Logodesign',
        title: 'Serverer fristende design til en app for å oppdage mat',
        description:
          'Design av en logo for en matapp i rustikk stil som kobler brukerne med en restaurant i nærheten.',
      },
    },

    image: '/images/case-studies/food-ie-card.jpg',

    details: {
      content: {
        en: {
          role: 'UX/UI Design',
          duration: '10 hours',

          company:
            'Food-IE is an app that searches all nearby restaurants, cafes and stores for a specific food item. The food you love is closer than you think!',

          goal: 'To create a logo that reflects the rustic and fun nature of the brand while standing out from other apps.',

          targetAudience: {
            ageRange: 'Ages 15-65',
            description: 'Foodies, tourists',
          },
        },
        no: {
          role: 'UX/UI-design',
          duration: '10 timer',

          company:
            'Food-IE er en app som søker gjennom alle restauranter, kafeer og butikker i nærheten etter en bestemt rett. Maten du elsker er nærmere enn du tror!',

          goal: 'Å lage en logo som gjenspeiler merkevarens rustikke og lekne preg, og som skiller seg ut fra andre apper.',

          targetAudience: {
            ageRange: 'Alder 15-65',
            description: 'Matelskere, turister',
          },
        },
      },

      prototypeUrl: '#',

      heroImage: {
        alt: {
          en: 'Food-IE logo in hand-drawn dark red letters with a spoon above the I, on an orange background',
          no: 'Food-IE-logoen med håndtegnede mørkerøde bokstaver og en skje over I-en, på oransje bakgrunn',
        },
        src: '/images/case-studies/food-ie-card.jpg',
      },

      images: [
        {
          alt: {
            en: 'Food-IE mood board with spices on wooden spoons, a typewriter-style type test and five color swatches',
            no: 'Moodboard for Food-IE med krydder på treskjeer, en typetest i skrivemaskinstil og fem fargeprøver',
          },
          src: '/images/case-studies/food-ie/food-ie-moodboard.webp',
        },
        {
          alt: {
            en: 'Hand-drawn user flow for the Food-IE app, from log in to the interactive map, search and profile',
            no: 'Håndtegnet brukerflyt for Food-IE-appen, fra innlogging til det interaktive kartet, søk og profil',
          },
          src: '/images/case-studies/food-ie/food-ie-user-flow.webp',
        },
        {
          alt: {
            en: 'Hand-drawn sketches of the Food-IE sign-in screen and map screen on two phones, with notes',
            no: 'Håndtegnede skisser av innloggingsskjermen og kartskjermen til Food-IE på to mobiler, med notater',
          },
          src: '/images/case-studies/food-ie/food-ie-sketches.webp',
        },
        {
          alt: {
            en: 'Handwritten Food-IE project notes with the app’s functions, ideal user, client goals and similar apps',
            no: 'Håndskrevne prosjektnotater for Food-IE med appens funksjoner, idealbruker, kundemål og lignende apper',
          },
          src: '/images/case-studies/food-ie/food-ie-notes.webp',
        },
      ],

      typography: [
        {
          name: 'Cabin Sketch',
          weight: 400,
        },
      ],

      colors: ['#0F4700', '#F9A014', '#401A00', '#DC6310', '#890F14'],
    },
  },

  {
    slug: 'portugal-travel-brand',

    content: untranslated({
      category: 'Design System',
      title: 'Building a Brand for a Travel Website Based in Portugal',
      description: 'Updating the brand to have a cohesive look with serious tropical vibes.',
    }),

    image: '/images/case-studies/jo-&-so-card.jpg',
  },

  {
    slug: 'solar-smart',
    projectName: 'SolarSmart',

    content: untranslated({
      category: 'Website & Design System',
      title: 'Powering Homes with Solar Panels from Solar Smart',
      description:
        'Building a website and design system for a solar panel company who educates clients.',
    }),

    image: '/images/case-studies/solar-smart-card.jpg',

    details: {
      content: untranslated({
        role: 'UX/UI Design',
        duration: '30 hours',

        company:
          'SolarSmart is a solar panel company dedicated to education of solar energy and sells solar panels for private and commercial needs.',

        goal: 'To create a responsive website that reflects the brand’s drive for solar energy through the use of color and visuals.',

        targetAudience: {
          ageRange: 'Ages 25-55',
          description: 'Looking to buy solar panels',
        },
      }),

      prototypeUrl: '#',

      images: [
        {
          alt: untranslated('SolarSmart FAQ page'),
          src: '/images/case-studies/solar-smart/solar-smart-faq.jpg',
        },
        {
          alt: untranslated('SolarSmart contact page'),
          src: '/images/case-studies/solar-smart/solar-smart-contact.jpg',
        },
        {
          alt: untranslated('SolarSmart company page'),
          src: '/images/case-studies/solar-smart/solar-smart-company.jpg',
        },
      ],

      typography: [
        {
          name: 'Montserrat',
          weight: 700,
          weightLabel: 'Bold',
        },
        {
          name: 'Open Sans',
          weight: 400,
          weightLabel: 'Regular',
        },
      ],

      colors: ['#000000', '#003366', '#FFA500', '#4CAF50'],
    },
  },

  {
    slug: 'travel-booking-app',

    content: untranslated({
      category: 'Mobile App',
      title: 'Adding an App for a Travel Website to Make Booking Easier',
      description:
        'This app can be used to make booking a stay easier, providing the user with updated information.',
    }),

    image: '/images/case-studies/cycle-norway-card.jpg',
  },

  {
    slug: 'nordic-furniture',
    projectName: 'Nor Møbler',

    content: {
      en: {
        category: 'Website & Dashboard',
        title: 'Building a Presence for Nordic Furniture Company',
        description:
          'Updated website and dashboard that will allow for better tracking for stakeholders.',
      },
      no: {
        category: 'Nettside og dashbord',
        title: 'Bygger opp tilstedeværelsen til et nordisk møbelfirma',
        description: 'Oppdatert nettside og et dashbord som gir interessentene bedre oversikt.',
      },
    },

    image: '/images/case-studies/nor-mobler-card.jpg',

    details: {
      content: {
        en: {
          role: 'UX/UI Design',
          duration: '40 hours',

          company:
            'Nor Møbler is a Norwegian furniture company specializing in elegant and timeless nordic style.',

          goal: 'To create a beautiful website that reflects the brand’s elegant and calming furniture. Also creating a dashboard to present sales data.',

          targetAudience: {
            ageRange: 'Ages 18-65',
            description: 'Looking to buy furniture / sales & marketing',
          },
        },
        no: {
          role: 'UX/UI-design',
          duration: '40 timer',

          company:
            'Nor Møbler er et norsk møbelfirma som spesialiserer seg på elegant og tidløs nordisk stil.',

          goal: 'Å lage en vakker nettside som gjenspeiler merkevarens elegante og rolige møbler, og et dashbord som presenterer salgstall.',

          targetAudience: {
            ageRange: 'Alder 18-65',
            description: 'Vil kjøpe møbler / salg og markedsføring',
          },
        },
      },

      prototypeUrl: '#',

      heroImage: {
        alt: {
          en: 'Nor Møbler landing page with a sign-up form on a desktop screen',
          no: 'Landingssiden til Nor Møbler med et registreringsskjema på en stasjonær skjerm',
        },
        src: '/images/case-studies/nor-mobler/nor-mobler-hero.webp',
      },

      images: [
        {
          alt: {
            en: 'Nor Møbler product page for a corner sofa on a tablet held sideways',
            no: 'Produktsiden til Nor Møbler for en hjørnesofa på et nettbrett holdt på tvers',
          },
          src: '/images/case-studies/nor-mobler/nor-mobler-product.webp',
        },
        {
          alt: {
            en: 'Nor Møbler dashboard overview with revenue and customer charts on a tablet',
            no: 'Oversikten i Nor Møbler-dashbordet med diagrammer over omsetning og kunder på et nettbrett',
          },
          src: '/images/case-studies/nor-mobler/nor-mobler-dashboard-overview.webp',
        },
        {
          alt: {
            en: 'Nor Møbler dashboard products page with bestsellers and stock status on a tablet',
            no: 'Produktsiden i Nor Møbler-dashbordet med bestselgere og lagerstatus på et nettbrett',
          },
          src: '/images/case-studies/nor-mobler/nor-mobler-dashboard-products.webp',
        },
      ],

      typography: [
        {
          name: 'Noto Serif',
          weight: 600,
          weightLabel: 'Semibold',
          fallback: 'serif',
        },
        {
          name: 'Raleway',
          weight: 400,
          weightLabel: 'Regular',
        },
      ],

      colors: ['#EFE6DB', '#8EBEE2', '#3776A6', '#666666'],
    },
  },

  {
    slug: 'local-pizza-brand',
    projectName: 'Pizza Slice',

    content: {
      en: {
        category: 'Brand Guide',
        title: 'Helping a Local Pizza Joint Better Connect with the Community',
        description:
          'A brand guide for a family-run pizza restaurant beloved by the neighbourhood.',
      },
      no: {
        category: 'Profilhåndbok',
        title: 'Hjelper en lokal pizzeria med å knytte sterkere bånd til nærmiljøet',
        description: 'En profilhåndbok for en familiedrevet pizzarestaurant elsket av nabolaget.',
      },
    },

    image: '/images/case-studies/pizza-slice-card.jpg',

    details: {
      content: {
        en: {
          role: 'UX/UI Design',
          duration: '10 hours',

          company:
            'Pizza Slice is a local pizza company focused on fresh ingredients, family atmosphere and authentic Italian pizza.',

          goal: 'To create a brand guide that the restaurant can use to ensure cohesion for signs, menus and marketing.',

          targetAudience: {
            ageRange: 'Ages 20-40',
            description: 'Sales/marketing team',
          },
        },
        no: {
          role: 'UX/UI-design',
          duration: '10 timer',

          company:
            'Pizza Slice er en lokal pizzeria med fokus på ferske råvarer, familiær stemning og ekte italiensk pizza.',

          goal: 'Å lage en profilhåndbok som restauranten kan bruke for å sikre et helhetlig uttrykk på skilt, menyer og markedsføring.',

          targetAudience: {
            ageRange: 'Alder 20-40',
            description: 'Salgs- og markedsføringsteam',
          },
        },
      },

      prototypeUrl: '#',

      heroImage: {
        alt: {
          en: 'Pages from the Pizza Slice brand guide',
          no: 'Sider fra profilhåndboken til Pizza Slice',
        },
        src: '/images/case-studies/pizza-slice/pizza-slice-hero.webp',
      },

      images: [
        {
          alt: {
            en: 'Pizza Slice brand guide with the logo, color palette and typography on a laptop',
            no: 'Profilhåndboken til Pizza Slice med logo, fargepalett og typografi på en bærbar PC',
          },
          src: '/images/case-studies/pizza-slice/pizza-slice-brand-guide.webp',
        },
        {
          alt: {
            en: 'Paper cup with the Pizza Slice logo, held in a hand while coffee is poured into it',
            no: 'Pappkopp med Pizza Slice-logoen i en hånd mens det skjenkes kaffe i den',
          },
          src: '/images/case-studies/pizza-slice/pizza-slice-cup.webp',
        },
        {
          alt: {
            en: 'Brown carrier bag with the Pizza Slice logo, held up against an orange wall',
            no: 'Brun bærepose med Pizza Slice-logoen, holdt opp mot en oransje vegg',
          },
          src: '/images/case-studies/pizza-slice/pizza-slice-bag.webp',
        },
      ],

      typography: [
        {
          name: 'Quicksand',
          weight: 500,
          weightLabel: 'Medium',
        },
        {
          name: 'Gimlet Display Narrow',
          weight: 300,
          family: 'Ancizar Serif',
          fallback: 'serif',
        },
      ],

      colors: ['#8E1611', '#694D35', '#91A94B', '#E1B554', '#C2A384'],
    },
  },

  {
    slug: 'visit-norway',
    projectName: 'Visit Norway',

    content: {
      en: {
        category: 'Responsive Website',
        title: 'Dazzling Visitors to Norway with Real, Stunning Views',
        description: 'Designing a responsive website showcasing all Norway has to offer.',
      },
      no: {
        category: 'Responsiv nettside',
        title: 'Begeistrer besøkende til Norge med ekte, storslåtte utsikter',
        description: 'Design av en responsiv nettside som viser fram alt Norge har å by på.',
      },
    },

    image: '/images/case-studies/visit-norway-card.jpg',

    details: {
      content: {
        en: {
          role: 'UX/UI Design',
          duration: '20 hours',

          company:
            'Visit Norway is a website providing tours, attractions, and things to do while travelling in Norway.',

          goal: 'To create a responsive website that reflects the brand’s emphasis on stunning photography and inspired by the Northern Lights.',

          targetAudience: {
            ageRange: 'Ages 18-65',
            description: 'Looking to experience Norway',
          },
        },
        no: {
          role: 'UX/UI-design',
          duration: '20 timer',

          company:
            'Visit Norway er en nettside med turer, attraksjoner og aktiviteter for deg som reiser i Norge.',

          goal: 'Å lage en responsiv nettside som gjenspeiler merkevarens vekt på storslåtte fotografier, inspirert av nordlyset.',

          targetAudience: {
            ageRange: 'Alder 18-65',
            description: 'Vil oppleve Norge',
          },
        },
      },

      prototypeUrl: '#',

      heroImage: {
        alt: {
          en: 'Visit Norway home page on a laptop and a phone, and the contact page on a second phone',
          no: 'Forsiden til Visit Norway på en bærbar PC og en mobil, og kontaktsiden på en annen mobil',
        },
        src: '/images/case-studies/visit-norway-card.jpg',
      },

      images: [
        {
          alt: {
            en: 'Visit Norway home page with the Northern Lights on a desktop screen',
            no: 'Forsiden til Visit Norway med nordlyset på en stasjonær skjerm',
          },
          src: '/images/case-studies/visit-norway/visit-norway-desktop.webp',
        },
        {
          alt: {
            en: 'Visit Norway home page with the Northern Lights on a phone',
            no: 'Forsiden til Visit Norway med nordlyset på en mobil',
          },
          src: '/images/case-studies/visit-norway/visit-norway-mobile.webp',
        },
        {
          alt: {
            en: 'Visit Norway contact form on a phone',
            no: 'Kontaktskjemaet til Visit Norway på en mobil',
          },
          src: '/images/case-studies/visit-norway/visit-norway-contact.webp',
        },
      ],

      typography: [
        {
          name: 'Jost',
          weight: 500,
          weightLabel: 'Medium',
        },
        {
          name: 'Jost',
          weight: 400,
          weightLabel: 'Regular',
        },
      ],

      colors: ['#FFFFFF', '#EFB8C8', '#293647'],
    },
  },

  {
    slug: 'pawfect-match',
    projectName: 'Pawfect Match',

    content: untranslated({
      category: 'Website',
      title: 'Giving Happy Endings to Local Furry Friends',
      description:
        'Designing a responsive website for pet adoption that’s both cute and informative.',
    }),

    image: '/images/case-studies/pawfect-match-card.jpg',

    details: {
      content: untranslated({
        role: 'UX/UI Design',
        duration: '40 hours',

        company:
          'Pawfect Match is a pet adoption service, mainly focused on cats and dogs. They offer not only adoption, but advice on how to care for your newly adopted friend.',

        goal: 'To create a responsive website that reflects the brand’s fun and caring nature, featuring all the services and pets currently available for adoption.',

        targetAudience: {
          ageRange: 'Ages 18-65',
          description: 'Looking to adopt a pet',
        },
      }),

      prototypeUrl: '#',

      images: [
        {
          alt: untranslated('Pawfect Match home page'),
          src: '/images/case-studies/pawfect-match/pawfect-match-home.jpg',
        },
        {
          alt: untranslated('Pawfect Match cats page'),
          src: '/images/case-studies/pawfect-match/pawfect-match-cats.jpg',
        },
        {
          alt: untranslated('Pawfect Match profile page'),
          src: '/images/case-studies/pawfect-match/pawfect-match-profile.jpg',
        },
        {
          alt: untranslated('Pawfect Match contact page'),
          src: '/images/case-studies/pawfect-match/pawfect-match-contact.jpg',
        },
      ],

      typography: [
        {
          name: 'Baloo 2',
          weight: 700,
          weightLabel: 'Bold',
        },
        {
          name: 'Lato',
          weight: 400,
          weightLabel: 'Regular',
        },
      ],

      colors: ['#6B4226', '#FF936B', '#B4DFEE', '#FFE8D6'],
    },
  },

  {
    slug: 'dark-delirium',
    projectName: 'Dark Delirium',

    content: {
      en: {
        category: 'Responsive Website',
        title: 'Bringing the Vibe of a Local Band to Life to Listeners Everywhere',
        description:
          'Designing a website showcasing the music of Dark Delirium, a Norwegian metal band.',
      },
      no: {
        category: 'Responsiv nettside',
        title: 'Får fram stemningen til et lokalt band for lyttere overalt',
        description:
          'Design av en nettside som viser fram musikken til Dark Delirium, et norsk metalband.',
      },
    },

    image: '/images/case-studies/dark-delirium-card.jpg',

    details: {
      content: {
        en: {
          role: 'UX/UI Design',
          duration: '60 hours',

          company:
            'Dark Delirium is a metal band based in Sandnes, Norway with over 250 monthly listeners on Spotify as well as 1.17K followers on Youtube, getting as many as 2.2M views.',

          goal: 'To create a responsive website that reflects the brand’s dark and raw energy both on and off stage, as well as set up a shop that sells the band’s merch.',

          targetAudience: {
            ageRange: 'Ages 0-100',
            description: 'Looking to learn about Dark Delirium',
          },
        },
        no: {
          role: 'UX/UI-design',
          duration: '60 timer',

          company:
            'Dark Delirium er et metalband fra Sandnes med over 250 månedlige lyttere på Spotify, 1 170 følgere på YouTube og opptil 2,2 millioner visninger.',

          goal: 'Å lage en responsiv nettside som gjenspeiler bandets mørke og rå energi både på og utenfor scenen, og å sette opp en nettbutikk som selger bandets merch.',

          targetAudience: {
            ageRange: 'Alder 0-100',
            description: 'Vil lære mer om Dark Delirium',
          },
        },
      },

      prototypeUrl: '#',

      heroImage: {
        alt: {
          en: 'Dark Delirium home page on a laptop',
          no: 'Forsiden til Dark Delirium på en bærbar PC',
        },
        src: '/images/case-studies/dark-delirium-card.jpg',
      },

      images: [
        {
          alt: {
            en: 'Dark Delirium home page with photos of the band members on a desktop screen',
            no: 'Forsiden til Dark Delirium med bilder av bandmedlemmene på en stasjonær skjerm',
          },
          src: '/images/case-studies/dark-delirium/dark-delirium-home.webp',
        },
        {
          alt: {
            en: 'Dark Delirium shop page with the band hoodie selected on a desktop screen',
            no: 'Nettbutikken til Dark Delirium med bandets hettegenser valgt, på en stasjonær skjerm',
          },
          src: '/images/case-studies/dark-delirium/dark-delirium-shop.webp',
        },
        {
          alt: {
            en: 'Dark Delirium media page with concert photos on a phone',
            no: 'Mediesiden til Dark Delirium med konsertbilder på en mobil',
          },
          src: '/images/case-studies/dark-delirium/dark-delirium-media.webp',
        },
      ],

      typography: [
        {
          name: 'Felix Titling',
          weight: 400,
          fallback: 'serif',
        },
        {
          name: 'Perpetua Titling MT',
          weight: 300,
          fallback: 'serif',
        },
      ],

      colors: ['#000000', '#FFFFFF', '#FC9779', '#8ACAE4'],
    },
  },

  {
    slug: 'southside-blooms',
    projectName: 'Southside Blooms',

    content: untranslated({
      category: 'User Testing',
      title: 'Testing Usability of Websites Flow for Increased Profits.',
      description:
        'Testing flow of ordering on a flower shop website to improve buying percentage.',
    }),

    image: '/images/case-studies/southside-blooms-card.jpg',

    details: {
      content: untranslated({
        role: 'UX/UI Design',
        duration: '40 hours',

        company:
          'Southside Blooms, based out of Chicago, is focused on sustainability and locally grown flowers. They also focus on youth empowerment and education.',

        goal: 'To increase profits through research and re-design of the website navigation. User tests were conducted on the re-design which improved the flow.',

        targetAudience: {
          ageRange: 'Ages 18-80',
          description: 'Looking to order flowers',
        },

        objective:
          'The goal was to understand how easily users can find a white bouquet for Mothers Day. The research examined where users expected this information to be located, what barriers prevented them from finding it, and how navigation, labelling and content influenced findability.',

        methodology: [
          'Participants: 5',
          'Method: Remote moderated usability testing',
          'Sessions: ~15 minutes',
          'Consent obtained: Yes',
          'Data collected: participant recording, screen recording, time on task, success rate, observational notes and verbal feedback',
        ],

        feedback:
          'Users found the previous website very text heavy, with confusing navigation and no uniformity in the photos, but overall liked the colors, typography and design of the website.',

        findings: [
          'Most went to the menu immediately.',
          'Most clicked Shop.',
          'Most clicked Flowers.',
          'Most clicked White Flowers.',
          'All users would click Add to Cart to purchase.',
          'All users completed the task in under two minutes.',
          'Two participants were confused about the Mother’s Day part of the task and expected a special sale or page for holidays.',
        ],

        recommendations: [
          'Add breadcrumb navigation to individual flower-colour pages.',
          'Add a banner for Mother’s Day and other sales.',
          'Make the FAQs more apparent.',
        ],
      }),

      prototypeUrl: '#',

      heroImage: {
        alt: untranslated('Southside Blooms demo image'),
        src: '/images/case-studies/southside-blooms/southside-blooms-hero.jpg',
      },

      images: [
        {
          alt: untranslated('Southside Blooms home page'),
          src: '/images/case-studies/southside-blooms/southside-blooms-home.jpg',
        },
        {
          alt: untranslated('Southside Blooms flowers page'),
          src: '/images/case-studies/southside-blooms/southside-blooms-flowers.jpg',
        },
        {
          alt: untranslated('Southside Blooms flowers page'),
          src: '/images/case-studies/southside-blooms/southside-blooms-flowers-2.jpg',
        },
        {
          alt: untranslated('Southside Blooms flowers page'),
          src: '/images/case-studies/southside-blooms/southside-blooms-flowers-3.jpg',
        },
      ],
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy | undefined {
  const start = caseStudies.findIndex((caseStudy) => caseStudy.slug === slug);

  if (start === -1) {
    return undefined;
  }

  for (let offset = 1; offset < caseStudies.length; offset++) {
    const candidate = caseStudies[(start + offset) % caseStudies.length];

    if (candidate.details) {
      return candidate;
    }
  }

  return undefined;
}
