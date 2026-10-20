import { Check, Eye, Heart, MapPin } from 'lucide-react';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { profileIntro } from '@/i18n/profileIntro';
import { useT } from '@/stores/languageStore';

export function ProfileCard() {
  const t = useT(profileIntro);

  return (
    <div className="md:mx-auto md:max-w-sm">
      <div className="grid grid-cols-[minmax(0,183px)_minmax(8.75rem,1fr)] items-center gap-4">
        <img
          src="/images/home/devin-profile.webp"
          alt={t.photoAlt}
          width={800}
          height={878}
          decoding="async"
          className="aspect-183/190 w-full rounded-full object-cover"
        />

        <p className="text-center text-foreground">
          {t.hello}{' '}
          <span
            translate="no"
            className="mx-auto block w-fit bg-gradient-text bg-clip-text text-2xl leading-body text-transparent"
          >
            Devin Ekse
          </span>{' '}
          {t.role}
        </p>
      </div>

      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-foreground">
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

      <p className="badge mx-auto mt-2 min-w-0 gap-1 px-2">
        <Check size={16} aria-hidden="true" className="shrink-0" />
        {t.available}
      </p>

      <GradientDivider className="mt-4" />
    </div>
  );
}
