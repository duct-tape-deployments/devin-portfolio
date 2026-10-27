import type { Localized, LocalizedImage } from '@/i18n/localized';

export type Severity = 'severe' | 'moderate' | 'low';

export type ResearchPersona = {
  name: string;
  age: number;
  location: string;

  image: LocalizedImage;

  content: Localized<{
    jobTitle: string;
    status: string;
    traits: string[];
  }>;
};

export type ResearchContent = {
  objective?: string;

  methodology?: {
    label: string;
    value: string;
  }[];

  feedback?: string;

  findings?: {
    items: {
      text: string;
      children?: string[];
    }[];
    summary?: string;
  };

  recommendations?: {
    text: string;
    severity: Severity;
  }[];
};

/** Optional research sections on a case study (personas, method, findings, ...) */
export type CaseStudyResearch = {
  personas?: ResearchPersona[];
  content: Localized<ResearchContent>;
};

export const southsideBloomsResearch: CaseStudyResearch = {
  personas: [
    {
      name: 'Alexander Doevisch',
      age: 27,
      location: 'Kentucky',

      image: {
        alt: {
          en: 'Young man with his hand on his chin in front of a red brick wall',
          no: 'Ung mann med hånden på haken foran en rød murvegg',
        },
        src: '/images/case-studies/southside-blooms/persona-alexander.webp',
      },

      content: {
        en: {
          jobTitle: 'Student',
          status: 'Single',
          traits: [
            'College student finishing a master’s degree',
            'Engaged and planning a wedding',
            'Tech-comfortable but doesn’t like digging for info',
          ],
        },
        no: {
          jobTitle: 'Student',
          status: 'Singel',
          traits: [
            'Student som fullfører en mastergrad',
            'Forlovet og planlegger bryllup',
            'Komfortabel med teknologi, men liker ikke å lete etter informasjon',
          ],
        },
      },
    },
    {
      name: 'Jessica Wade',
      age: 32,
      location: 'Indiana',

      image: {
        alt: {
          en: 'Smiling woman in a green plaid shirt making peace signs with both hands',
          no: 'Smilende kvinne i grønn rutete skjorte som gjør fredstegn med begge hendene',
        },
        src: '/images/case-studies/southside-blooms/persona-jessica.webp',
      },

      content: {
        en: {
          jobTitle: 'HR',
          status: 'Married',
          traits: [
            'Mother of 2',
            'Manager at her job and in charge of event planning',
            'Very goal-oriented; wants quick, clear info before purchasing',
          ],
        },
        no: {
          jobTitle: 'HR',
          status: 'Gift',
          traits: [
            'Mor til 2',
            'Leder på jobben og ansvarlig for å planlegge arrangementer',
            'Svært målrettet; vil ha rask og tydelig informasjon før hun kjøper',
          ],
        },
      },
    },
    {
      name: 'Adaline Meyers',
      age: 74,
      location: 'Illinois',

      image: {
        alt: {
          en: 'Older man kissing an older woman on the cheek by the sea',
          no: 'Eldre mann som kysser en eldre kvinne på kinnet ved sjøen',
        },
        src: '/images/case-studies/southside-blooms/persona-adaline.webp',
      },

      content: {
        en: {
          jobTitle: 'Retired',
          status: 'Married',
          traits: [
            'Retired',
            'Married to a pastor',
            'Loves celebrating for people in the church',
            'Not tech-savvy and would prefer to order by phone',
          ],
        },
        no: {
          jobTitle: 'Pensjonist',
          status: 'Gift',
          traits: [
            'Pensjonist',
            'Gift med en pastor',
            'Elsker å feire folk i menigheten',
            'Ikke teknisk anlagt og vil helst bestille på telefon',
          ],
        },
      },
    },
    {
      name: 'Derek Harrshe',
      age: 38,
      location: 'Illinois',

      image: {
        alt: {
          en: 'Man lifting a laughing toddler next to a woman in a dry field',
          no: 'Mann som løfter et leende lite barn ved siden av en kvinne på en tørr eng',
        },
        src: '/images/case-studies/southside-blooms/persona-derek.webp',
      },

      content: {
        en: {
          jobTitle: 'Army',
          status: 'Engaged',
          traits: [
            'Active-duty Army',
            'Loves surprising his fiancée while he is away',
            'Seeks financial value and clear eligibility information',
            'Prefers quick, direct navigation without reading excessive copy',
          ],
        },
        no: {
          jobTitle: 'Militær',
          status: 'Forlovet',
          traits: [
            'I aktiv tjeneste i hæren',
            'Elsker å overraske forloveden sin mens han er borte',
            'Ser etter god verdi og tydelig informasjon om hvem tilbudene gjelder for',
            'Foretrekker rask, direkte navigasjon uten å måtte lese mye tekst',
          ],
        },
      },
    },
  ],

  content: {
    en: {
      objective:
        'The goal was to understand how easily users can find a white bouquet for Mother’s Day. In order to test this, we must research where users expect such information to be located, what barriers prevent them from finding it and how the site’s navigation, labelling, and content influence findability.',

      methodology: [
        { label: 'Participants', value: '5' },
        { label: 'Method', value: 'Remote moderated usability testing' },
        { label: 'Sessions', value: '~15 minutes' },
        { label: 'Consent Obtained', value: 'Yes' },
        {
          label: 'Data collected',
          value:
            'Recording of participant, screen recording, time on task, success rate, observational notes, verbal feedback',
        },
      ],

      feedback:
        'Users found the previous website very text heavy, with confusing navigation, no uniformity in the photos but overall liked the colors, typography and design of the website.',

      findings: {
        items: [
          {
            text: 'Most went to the menu immediately',
            children: [
              'Most clicked ‘Shop’',
              'Most clicked ‘Flowers’',
              'Most clicked ‘White Flowers’',
            ],
          },
          { text: 'All would click ‘Add to Cart’ to purchase' },
        ],
        summary:
          'All users completed this task in under 2:00 without any trouble finding the information. Most stated they went to Shop or Event Flowers. 2 participants were confused about the Mother’s Day part of the task and uncertain if there was supposed to be a special sale or page for holidays.',
      },

      recommendations: [
        {
          text: 'Would add crumb navigation to the individual pages for different color flowers for people who aren’t very tech-savvy so they can track how they got to that page and can easily access the page with all flowers on it if needed.',
          severity: 'severe',
        },
        {
          text: 'Adding a banner for Mother’s Day sale / sales in general',
          severity: 'moderate',
        },
        {
          text: 'Make the FAQs more apparent for the user',
          severity: 'low',
        },
      ],
    },

    no: {
      objective:
        'Målet var å forstå hvor lett brukerne finner en hvit bukett til morsdag. For å teste dette måtte vi undersøke hvor brukerne forventer å finne slik informasjon, hva som hindrer dem i å finne den, og hvordan nettsidens navigasjon, merking og innhold påvirker hvor lett den er å finne.',

      methodology: [
        { label: 'Deltakere', value: '5' },
        { label: 'Metode', value: 'Fjernmoderert brukertesting' },
        { label: 'Økter', value: '~15 minutter' },
        { label: 'Samtykke innhentet', value: 'Ja' },
        {
          label: 'Innsamlede data',
          value:
            'Opptak av deltakeren, skjermopptak, tid brukt på oppgaven, suksessrate, observasjonsnotater, muntlige tilbakemeldinger',
        },
      ],

      feedback:
        'Brukerne syntes den gamle nettsiden hadde veldig mye tekst, forvirrende navigasjon og bilder uten et felles uttrykk, men likte stort sett fargene, typografien og designet på nettsiden.',

      findings: {
        items: [
          {
            text: 'De fleste gikk rett til menyen',
            children: [
              'De fleste klikket på «Shop»',
              'De fleste klikket på «Flowers»',
              'De fleste klikket på «White Flowers»',
            ],
          },
          { text: 'Alle ville klikket på «Add to Cart» for å kjøpe' },
        ],
        summary:
          'Alle brukerne fullførte oppgaven på under to minutter uten problemer med å finne informasjonen. De fleste sa at de gikk til Shop eller Event Flowers. 2 deltakere ble forvirret av morsdagsdelen av oppgaven og var usikre på om det skulle finnes et eget salg eller en egen side for høytider.',
      },

      recommendations: [
        {
          text: 'Ville lagt til brødsmulesti på de enkelte sidene for blomster i ulike farger, slik at brukere som ikke er så teknisk anlagt kan se hvordan de kom dit, og lett komme tilbake til siden med alle blomstene ved behov.',
          severity: 'severe',
        },
        {
          text: 'Legge til et banner for morsdagssalg og salg generelt',
          severity: 'moderate',
        },
        {
          text: 'Gjøre FAQ-en mer synlig for brukeren',
          severity: 'low',
        },
      ],
    },
  },
};
