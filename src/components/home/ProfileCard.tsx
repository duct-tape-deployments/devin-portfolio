import { Check, Eye, Heart, MapPin } from 'lucide-react';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { profileIntro } from '@/i18n/profileIntro';
import { useT } from '@/stores/languageStore';

type ProfileCardProps = {
  className?: string;
};

export function ProfileCard({ className }: ProfileCardProps) {
  const t = useT(profileIntro);
  const classes = [
    'grid grid-cols-[minmax(0,183px)_minmax(8.75rem,1fr)] items-center gap-x-4 md:grid-cols-8 md:gap-x-5 lg:flex lg:flex-col',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <img
        src="/images/home/devin-profile.webp"
        alt={t.photoAlt}
        width={800}
        height={878}
        decoding="async"
        className="col-start-1 row-start-1 aspect-183/190 w-full rounded-full object-cover md:relative md:z-10 md:col-end-4 md:max-w-72 md:justify-self-end lg:z-auto lg:w-72"
      />

      <div className="contents md:relative md:col-start-3 md:col-end-9 md:row-start-1 md:block md:py-4 md:pr-4 md:gradient-frame md:max-lg:pl-[calc((100%-5*1.25rem)/6+1.5rem)] lg:-mt-16 lg:w-full lg:pl-4">
        <p className="col-start-2 row-start-1 text-center text-foreground md:max-lg:text-left">
          {t.hello}{' '}
          <span
            translate="no"
            className="mx-auto block w-fit bg-gradient-text bg-clip-text text-2xl leading-body text-transparent md:max-lg:mx-0"
          >
            Devin Ekse
          </span>{' '}
          {t.role}
        </p>

        <ul
          role="list"
          className="col-span-2 mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-foreground md:mt-4 md:max-lg:justify-start"
        >
          <li className="flex items-center gap-2">
            <MapPin size={24} aria-hidden="true" className="shrink-0" />
            <span>
              <span className="sr-only">{t.locationLabel} </span>
              {t.location}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Heart size={24} aria-hidden="true" className="shrink-0" />
            <span>
              {t.likes}
              <span className="sr-only"> {t.likesLabel}</span>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Eye size={24} aria-hidden="true" className="shrink-0" />
            <span>
              {t.views}
              <span className="sr-only"> {t.viewsLabel}</span>
            </span>
          </li>
        </ul>

        <p className="badge col-span-2 mx-auto mt-2 min-w-0 gap-1 px-2 md:max-lg:mx-0">
          <Check size={16} aria-hidden="true" className="shrink-0" />
          {t.available}
        </p>
      </div>

      <GradientDivider className="col-span-2 mt-4 md:hidden" />
    </div>
  );
}
