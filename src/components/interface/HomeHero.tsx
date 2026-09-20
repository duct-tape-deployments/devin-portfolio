import type { LucideIcon } from 'lucide-react';
import { Check, Eye, Heart, MapPin } from 'lucide-react';
import { DownArrow } from './DownArrow';
import { GradientDivider } from './GradientDivider';
import { PageContainer } from '../layout/PageContainer';
import profileImage from '@/assets/devin-profile-image.jpg';

const profileStats = [
  { icon: MapPin, label: 'Location', value: 'Stavanger, Norway' },
  { icon: Heart, label: 'Likes', value: '1.1K' },
  { icon: Eye, label: 'Views', value: '20' },
] satisfies ReadonlyArray<{
  icon: LucideIcon;
  label: string;
  value: string;
}>;

export function HomeHero() {
  return (
    <div className="bg-background text-foreground">
      <HeroIntro />
      <GradientDivider />
      <ProfilePreview />
      <div className="mx-auto w-[90%]" aria-hidden="true">
        <GradientDivider />
      </div>
    </div>
  );
}

function HeroIntro() {
  return (
    <section className="py-8 sm:py-14" aria-labelledby="home-hero-title">
      <PageContainer className="font-display">
        <div className="mx-auto max-w-[680px]">
          <h1
            id="home-hero-title"
            className="text-display leading-display font-black tracking-[0.02em]"
          >
            <span className="block bg-gradient-text bg-clip-text text-transparent text-shadow-drop">
              CRAFTING
            </span>
            <span className="block text-shadow-drop">
              THE{' '}
              <span className="relative inline-block text-shadow-drop/20">
                <span
                  aria-hidden="true"
                  className="absolute -top-0.5 right-1 text-cyan text-shadow-drop/0"
                >
                  FUTURE
                </span>
                <span className="relative -left-0.5 bg-white grainy-text">FUTURE</span>
              </span>
            </span>
            <span className="block text-shadow-drop">FOR UX/UI</span>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
            <a
              href="/contact"
              className="group relative inline-flex h-[42px] w-[126px] shrink-0 items-center justify-between overflow-hidden rounded-full bg-gradient px-2 text-label font-bold text-foreground-inverse shadow-btn transition-[box-shadow,transform] duration-300 ease-in-out hover:scale-[1.02] active:shadow-pressed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <span className="pointer-events-none absolute inset-0 bg-gradient-hover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
              <span className="relative z-10 flex w-full items-center justify-between">
                Let&apos;s Talk
                <span aria-hidden="true" className="pr-1 text-3xl leading-none font-light">
                  ›
                </span>
              </span>
            </a>

            <a
              href="/resume.pdf"
              download="Devin-Ekse-Resume.pdf"
              className="inline-flex h-[42px] w-[200px] shrink-0 items-center justify-between rounded-full border border-cyan bg-btn-solid px-2 text-label font-bold text-btn-solid-foreground shadow-soft transition-[background-image,box-shadow,transform] hover:scale-[1.02] active:shadow-pressed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              Download Resume
              <DownArrow />
            </a>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function ProfilePreview() {
  return (
    <section className="py-8 sm:py-14" aria-labelledby="profile-title">
      <PageContainer>
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-4 sm:gap-8 md:gap-12">
          <img
            src={profileImage}
            alt="Devin Ekse"
            className="mx-auto aspect-square w-full max-w-[360px] rounded-full object-cover shadow-glow-image"
          />

          <div className="text-left">
            <p className="text-body">Hello I am</p>
            <h2
              id="profile-title"
              className="mt-1 bg-gradient-text bg-clip-text font-body text-h2 font-normal text-transparent sm:text-h1"
            >
              Devin Ekse
            </h2>
            <p className="mt-2 max-w-[24rem] text-body sm:mt-3">
              UI/UX designer &amp; photographer/videographer
            </p>
          </div>
        </div>

        <dl className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-10 sm:gap-x-10 sm:gap-y-4">
          {profileStats.map(({ icon: StatIcon, label, value }) => (
            <div key={label} className="inline-flex items-center gap-2">
              <StatIcon
                className="size-7 shrink-0 sm:size-8"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <dt className="sr-only">{label}</dt>
              <dd className="text-body">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-badge px-3 py-2 text-sm font-medium text-badge-foreground">
            <Check className="size-5" strokeWidth={2.75} aria-hidden="true" />
            Available
          </span>
        </div>
      </PageContainer>
    </section>
  );
}
