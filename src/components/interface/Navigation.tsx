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
    orientation === 'horizontal' ? 'flex items-center gap-6' : 'flex flex-col gap-4';

  const translatedAriaLabel = ariaLabel ?? t.accessibility.mainNavigation;

  return (
    <nav aria-label={translatedAriaLabel}>
      <ul className={listClasses}>
        {navigation.map(({ labelKey, to, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'relative inline-flex w-fit items-center whitespace-nowrap',
                  'bg-gradient-text bg-clip-text text-transparent',
                  'font-display font-bold',
                  'transition-[filter,opacity] duration-200',

                  'hover:drop-shadow-[0_0_6px_var(--color-yellow)]',

                  'focus-visible:outline-2',
                  'focus-visible:outline-offset-4',
                  'focus-visible:outline-focus',

                  isActive ? 'drop-shadow-[0_0_5px_var(--color-yellow)]' : '',
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
