import { routes } from '@/config/navigation';
import type { RoutePath } from '@/config/navigation';
import type { Localized } from '@/data/caseStudies';

export type PortfolioPreview = {
  to: RoutePath;
  title: Localized<string>;
  subtitle: Localized<string>;
  image: string;
  imageClassName: string;
};

export const portfolioPreviews: PortfolioPreview[] = [
  {
    to: routes.uiUx,
    title: { en: 'UI/UX Portfolio', no: 'UI/UX-portefølje' },
    subtitle: {
      en: 'Modern Interface with a Creative Touch',
      no: 'Moderne grensesnitt med et kreativt preg',
    },
    image: '/images/home/portfolio-ui-ux.jpg',
    imageClassName: 'aspect-[350/247]',
  },
  {
    to: routes.photography,
    title: { en: 'Photo Portfolio', no: 'Fotoportefølje' },
    subtitle: {
      en: 'Specialising in Nature, Portrait and Food',
      no: 'Spesialisert i natur, portrett og mat',
    },
    image: '/images/home/portfolio-photography.jpg',
    imageClassName: 'aspect-[350/247]',
  },
  {
    to: routes.videography,
    title: { en: 'Video Portfolio', no: 'Videoportefølje' },
    subtitle: { en: 'Bringing Concerts to Life', no: 'Gir liv til konserter' },
    image: '/images/home/portfolio-videography.jpg',
    // Portrait photo: Figma shows the singer's face, near the top
    imageClassName: 'aspect-[350/247] object-[center_10%]',
  },
];
