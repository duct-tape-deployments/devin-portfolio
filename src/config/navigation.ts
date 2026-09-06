import type { NavigationLabelKey } from '@/i18n/translations';

export const routes = {
  home: '/',
  about: '/about',
  uiUx: '/ui-ux',
  photography: '/photography',
  videography: '/videography',
  contact: '/contact',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];

export type NavigationItem = {
  labelKey: NavigationLabelKey;
  to: RoutePath;
  end?: boolean;
};

export const navigation = [
  {
    labelKey: 'home',
    to: routes.home,
    end: true,
  },
  {
    labelKey: 'about',
    to: routes.about,
  },
  {
    labelKey: 'uiUx',
    to: routes.uiUx,
  },
  {
    labelKey: 'photography',
    to: routes.photography,
  },
  {
    labelKey: 'videography',
    to: routes.videography,
  },
  {
    labelKey: 'contact',
    to: routes.contact,
  },
] satisfies readonly NavigationItem[];
