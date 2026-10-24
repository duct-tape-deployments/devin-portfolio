import type { Localized } from '@/i18n/localized';

export type Video = {
  slug: string;
  title: Localized<string>;
};

export type VideoCategory = {
  slug: string;
  title: Localized<string>;
  videos: Video[];
};

export const videoCategories: VideoCategory[] = [
  {
    slug: 'music',
    title: { en: 'Music', no: 'Musikk' },
    videos: [
      {
        slug: 'spotify-ad-2023',
        title: { en: 'Spotify Ad from 2023', no: 'Spotify-reklame fra 2023' },
      },
      {
        slug: 'tromso-concert-2024',
        title: { en: 'Tromsø Concert 2024', no: 'Konsert i Tromsø 2024' },
      },
      {
        slug: 'leave-you-tiktok-reel',
        title: { en: '‘Leave You’ TikTok reel', no: '‘Leave You’ TikTok-reel' },
      },
      {
        slug: 'music-video-recap-2024',
        title: { en: 'Music Video Recap from 2024', no: 'Oppsummering av musikkvideo fra 2024' },
      },
      {
        slug: 'metropolis-concert-2024',
        title: { en: 'Metropolis Concert 2024', no: 'Konsert på Metropolis 2024' },
      },
    ],
  },
];
