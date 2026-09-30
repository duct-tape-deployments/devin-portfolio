import { NavLink } from 'react-router';

import { navigation } from '@/config/navigation';
import { getTranslations } from '@/i18n/translations';
import { useLanguageStore } from '@/stores/languageStore';

type NavigationProps = {
  orientation?: 'horizontal' | 'vertical';
  onNavigate?: () => void;
  ariaLabel?: string;
};

export function Navigation({ orientation = 'horizontal', onNavigate, ariaLabel }: NavigationProps) {
  const language = useLanguageStore((state) => state.language);
  const t = getTranslations(language);

  const listClasses =
    orientation === 'horizontal'
      ? 'flex items-center gap-6'
      : 'flex flex-col text-h2 leading-tight';

  const linkPadding = orientation === 'horizontal' ? 'py-3' : 'py-2';
  const pillPosition =
    orientation === 'horizontal'
      ? 'after:inset-x-0 after:bottom-1 after:h-1'
      : 'after:inset-y-2 after:-left-2.5 after:w-1';

  const translatedAriaLabel = ariaLabel ?? t.accessibility.mainNavigation;

  return (
    <nav aria-label={translatedAriaLabel}>
      <ul className={listClasses}>
        {navigation.map(({ labelKey, to, end }) => (
          <li key={to} className="flex">
            <NavLink
              to={to}
              end={end}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'relative inline-flex w-fit items-center whitespace-nowrap',
                  linkPadding,
                  'bg-gradient-text bg-clip-text bg-origin-content bg-no-repeat text-transparent',
                  'font-display font-bold',
                  'transition-colors duration-150 ease-out',
                  'hover:text-foreground',

                  'focus-visible:outline-2',
                  'focus-visible:outline-offset-4',
                  'focus-visible:outline-focus',

                  isActive
                    ? `after:absolute ${pillPosition} after:rounded-full after:bg-magenta forced-colors:underline forced-colors:after:hidden`
                    : '',
                ].join(' ')
              }
            >
              {t.navigation[labelKey]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
