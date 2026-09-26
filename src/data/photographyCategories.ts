import type { Localized } from '@/data/caseStudies';

export type PhotographyImage = {
  src: string;
  alt: Localized<string>;
};

export type PhotographyCategory = {
  slug: string;
  title: Localized<string>;
  images: PhotographyImage[];
};

export const photographyCategories: PhotographyCategory[] = [
  {
    slug: 'nature',
    title: { en: 'Nature', no: 'Natur' },
    images: [
      {
        src: '/images/photography/nature/nature_1.jpg',
        alt: {
          en: 'The sheer edge of Preikestolen in Norway disappearing into thick blue fog',
          no: 'Den bratte kanten av Preikestolen som forsvinner i tett, blå tåke',
        },
      },
      {
        src: '/images/photography/nature/nature_2.jpg',
        alt: {
          en: 'A wooden jetty on still water reflecting autumn trees, with a blue shed on the right',
          no: 'En trebrygge på stille vann som speiler høsttrær, med et blått skur til høyre',
        },
      },
      {
        src: '/images/photography/nature/nature_3.jpg',
        alt: {
          en: 'Close-up of the center of a sunflower with an insect resting among the yellow pollen',
          no: 'Nærbilde av midten av en solsikke med et insekt blant det gule pollenet',
        },
      },
      {
        src: '/images/photography/nature/nature_4.jpg',
        alt: {
          en: 'Snow-dusted boulders and branches below a misty mountainside with spruce trees',
          no: 'Snødekte steiner og greiner under en tåkete fjellside med grantrær',
        },
      },
      {
        src: '/images/photography/nature/nature_5.jpg',
        alt: {
          en: 'Snow-capped Mount Fuji rising above the clouds behind a town',
          no: 'Det snødekte Fuji-fjellet som hever seg over skyene bak en by',
        },
      },
    ],
  },
  {
    slug: 'portrait',
    title: { en: 'Portrait', no: 'Portrett' },
    images: [
      {
        src: '/images/photography/portrait/portrait_1.jpg',
        alt: {
          en: 'A woman with auburn hair and cowboy boots sitting on a stone step in front of an ivy-covered wall',
          no: 'En kvinne med rødbrunt hår og cowboystøvler som sitter på et steintrinn foran en eføydekket vegg',
        },
      },
      {
        src: '/images/photography/portrait/portrait_2.jpg',
        alt: {
          en: 'A blond toddler in a knitted blue outfit standing among autumn leaves',
          no: 'Et lite barn med blondt hår i blå strikkedress som står blant høstløv',
        },
      },
      {
        src: '/images/photography/portrait/portrait_3.jpg',
        alt: {
          en: 'A woman with wavy auburn hair in a black satin dress and a red bead necklace, standing in front of the sea',
          no: 'En kvinne med bølgete rødbrunt hår i svart satengkjole og rødt perlekjede, som står foran havet',
        },
      },
      {
        src: '/images/photography/portrait/portrait_4.jpg',
        alt: {
          en: 'A woman with long auburn hair in a black cardigan looking into the camera, with green trees behind her',
          no: 'En kvinne med langt rødbrunt hår i svart cardigan som ser inn i kamera, med grønne trær bak seg',
        },
      },
      {
        src: '/images/photography/portrait/portrait_5.jpg',
        alt: {
          en: 'A smiling bearded man in a purple shirt and pink tie in front of a grey studio backdrop',
          no: 'En smilende mann med skjegg i lilla skjorte og rosa slips foran en grå studiobakgrunn',
        },
      },
    ],
  },
  {
    slug: 'wildlife',
    title: { en: 'Wildlife', no: 'Dyreliv' },
    images: [
      {
        src: '/images/photography/wildlife/wildlife_1.jpg',
        alt: {
          en: 'An orange, black and white goldfish swimming towards the camera over blue aquarium gravel',
          no: 'En oransje, svart og hvit gullfisk som svømmer mot kamera over blå akvariegrus',
        },
      },
      {
        src: '/images/photography/wildlife/wildlife_2.jpg',
        alt: {
          en: 'A red parrot with green and yellow wings perched on a branch among green leaves',
          no: 'En rød papegøye med grønne og gule vinger som sitter på en gren blant grønne blader',
        },
      },
      {
        src: '/images/photography/wildlife/wildlife_3.jpg',
        alt: {
          en: 'An orange iguana with a spiky crest resting on a rock',
          no: 'En oransje leguan med piggete kam som hviler på en stein',
        },
      },
      {
        src: '/images/photography/wildlife/wildlife_4.jpg',
        alt: {
          en: 'A Philippine serpent eagle with white-spotted brown plumage and yellow eyes, surrounded by green leaves',
          no: 'En filippinersnokørn med brun fjærdrakt med hvite prikker og gule øyne, omgitt av grønne blader',
        },
      },
      {
        src: '/images/photography/wildlife/wildlife_5.jpg',
        alt: {
          en: 'Close-up of a ginger kitten looking up at the camera',
          no: 'Nærbilde av en rødgul kattunge som ser opp mot kamera',
        },
      },
    ],
  },
  {
    slug: 'architecture',
    title: { en: 'Architecture', no: 'Arkitektur' },
    images: [
      {
        src: '/images/photography/architecture/architecture_1.jpg',
        alt: {
          en: 'Fujimi-yagura at the Tokyo Imperial Palace, a white castle tower with curved roofs on a high stone wall, under a deep blue sky',
          no: 'Fujimi-yagura ved det keiserlige palasset i Tokyo, et hvitt borgtårn med buede tak på en høy steinmur, under en dypblå himmel',
        },
      },
      {
        src: '/images/photography/architecture/architecture_2.jpg',
        alt: {
          en: 'Looking up into strings of purple lights radiating from a single point',
          no: 'Utsikt opp mot tråder av lilla lys som stråler ut fra ett punkt',
        },
      },
      {
        src: '/images/photography/architecture/architecture_3.jpg',
        alt: {
          en: 'Hogwarts castle at the Wizarding World of Harry Potter, with pointed towers on top of a rocky cliff under a blue sky',
          no: 'Galtvort-slottet i Wizarding World of Harry Potter, med spisse tårn på toppen av en fjellskrent under en blå himmel',
        },
      },
      {
        src: '/images/photography/architecture/architecture_4.jpg',
        alt: {
          en: 'A stone church tower with a green copper spire and a small turret, lit by the evening sun',
          no: 'Et kirketårn i stein med grønt kobberspir og et lite tårn, opplyst av kveldssolen',
        },
      },
      {
        src: '/images/photography/architecture/architecture_5.jpg',
        alt: {
          en: 'The curved white Center for Maritime Education building of the Seamen’s Church Institute, with a band of windows and an overhanging roof against a blue sky',
          no: 'Den buede, hvite bygningen til Center for Maritime Education ved Seamen’s Church Institute, med et bånd av vinduer og et utstikkende tak mot en blå himmel',
        },
      },
    ],
  },
  {
    slug: 'food',
    title: { en: 'Food', no: 'Mat' },
    images: [
      {
        src: '/images/photography/food/food_1.jpg',
        alt: {
          en: 'An iced coffee in a jar with a chocolate cat face drawn on the milk foam',
          no: 'En iskaffe i et glass med et kattefjes tegnet i sjokolade på melkeskummet',
        },
      },
      {
        src: '/images/photography/food/food_2.jpg',
        alt: {
          en: 'Slices of raw marbled beef arranged on a gold plate with an orchid in the middle',
          no: 'Skiver av rått, marmorert storfekjøtt lagt på et gullfat med en orkidé i midten',
        },
      },
      {
        src: '/images/photography/food/food_3.jpg',
        alt: {
          en: 'Green and brown soba noodles with seaweed and spring onion, next to a large tempura prawn',
          no: 'Grønne og brune sobanudler med tang og vårløk, ved siden av en stor tempurareke',
        },
      },
      {
        src: '/images/photography/food/food_4.jpg',
        alt: {
          en: 'Grilled beef cubes on a wooden board with a small salad, a bowl of sauce and wasabi',
          no: 'Grillede biffterninger på et trebrett med en liten salat, en skål med saus og wasabi',
        },
      },
      {
        src: '/images/photography/food/food_5.jpg',
        alt: {
          en: 'An iced coffee topped with a scoop of ice cream and caramel sauce',
          no: 'En iskaffe toppet med en kule iskrem og karamellsaus',
        },
      },
    ],
  },
  {
    slug: 'event',
    title: { en: 'Event', no: 'Event' },
    images: [
      {
        src: '/images/photography/event/event_1.jpg',
        alt: {
          en: 'A woman with red hair in a blue T-shirt raising her fist in front of pink smoke',
          no: 'En kvinne med rødt hår i blå T-skjorte som løfter knyttneven foran rosa røyk',
        },
      },
      {
        src: '/images/photography/event/event_2.jpg',
        alt: {
          en: 'A singer with dark eye makeup performing into a microphone under red and green stage lights',
          no: 'En vokalist med mørk øyensminke som synger i en mikrofon under rødt og grønt scenelys',
        },
      },
      {
        src: '/images/photography/event/event_3.jpg',
        alt: {
          en: 'Silhouette of a singer on a smoky stage lit in blue, with drums and a band behind',
          no: 'Silhuett av en vokalist på en røykfylt scene i blått lys, med trommer og band bak',
        },
      },
      {
        src: '/images/photography/event/event_4.jpg',
        alt: {
          en: 'The red front of a paddleboard with a blue number 3, on rippling water facing hills under dark clouds',
          no: 'Den røde fronten av et padlebrett med et blått tall 3, på krusete vann mot åser under mørke skyer',
        },
      },
      {
        src: '/images/photography/event/event_5.jpg',
        alt: {
          en: 'White roses and a red rose on top of a white casket',
          no: 'Hvite roser og en rød rose på en hvit kiste',
        },
      },
    ],
  },
];
