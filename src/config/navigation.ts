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
  label: string;
  to: RoutePath;
  end?: boolean;
};

export const navigation = [
  {
    label: 'Home',
    to: routes.home,
    end: true,
  },
  {
    label: 'About Me',
    to: routes.about,
  },
  {
    label: 'UI/UX',
    to: routes.uiUx,
  },
  {
    label: 'Photography',
    to: routes.photography,
  },
  {
    label: 'Videography',
    to: routes.videography,
  },
  {
    label: 'Contact',
    to: routes.contact,
  },
] satisfies readonly NavigationItem[];
