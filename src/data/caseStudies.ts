import type { Language } from '@/stores/languageStore';

export type Localized<T> = Record<Language, T>;

function untranslated<T>(en: T): Localized<T> {
  return {
    en,
    no: en,
  };
}

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

export type CaseStudyImage = {
  src: string;
  alt: Localized<string>;
};

export type CaseStudyDetails = {
  content: Localized<CaseStudyDetailsContent>;

  prototypeUrl?: string;

  heroImage?: CaseStudyImage;
  images?: CaseStudyImage[];

  typography?: {
    name: string;
    weight: string;
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

    content: untranslated({
      category: 'Logo Design',
      title: 'Delivering Mouth-watering Design to a Food Discovery App',
      description:
        'Creating a logo for a rustic style food app that matches users needs with a nearby restaurant.',
    }),

    image: '/images/case-studies/food-ie-card.jpg',
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
          weight: 'Bold',
        },
        {
          name: 'Open Sans',
          weight: 'Regular',
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

    content: untranslated({
      category: 'Website & Dashboard',
      title: 'Building a Presence for Nordic Furniture Company',
      description:
        'Updated website and dashboard that will allow for better tracking for stakeholders.',
    }),

    image: '/images/case-studies/nor-mobler-card.jpg',
  },

  {
    slug: 'local-pizza-brand',

    content: untranslated({
      category: 'Brand Guide',
      title: 'Helping a Local Pizza Joint Better Connect with the Community',
      description: 'A brand guide for a family run pizza restaurant beloved by the neighbourhood.',
    }),

    image: '/images/case-studies/pizza-slice-card.jpg',
  },

  {
    slug: 'visit-norway',

    content: untranslated({
      category: 'Responsive Website',
      title: 'Dazzling Visitors to Norway with Real, Stunning Views',
      description: 'Designing a responsive website showcasing all Norway has to offer.',
    }),

    image: '/images/case-studies/visit-norway-card.jpg',
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
          weight: 'Bold',
        },
        {
          name: 'Lato',
          weight: 'Regular',
        },
      ],

      colors: ['#6B4226', '#FF936B', '#B4DFEE', '#FFE8D6'],
    },
  },

  {
    slug: 'dark-delirium',

    content: untranslated({
      category: 'Responsive Website',
      title: 'Bringing the Vibe of a Local Band to Life to Listeners Everywhere',
      description:
        'Designing a website showcasing the music of Dark Delirium, a Norwegian metal band.',
    }),

    image: '/images/case-studies/dark-delirium-card.jpg',
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
