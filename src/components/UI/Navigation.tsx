import { NavLink } from 'react-router';

import { navigation } from '@/config/navigation';

type NavigationProps = {
  orientation?: 'horizontal' | 'vertical';
  onNavigate?: () => void;
  ariaLabel?: string;
};

export function Navigation({
  orientation = 'horizontal',
  onNavigate,
  ariaLabel = 'Main navigation',
}: NavigationProps) {
  const listClasses =
    orientation === 'horizontal' ? 'flex items-center gap-6' : 'flex flex-col gap-4';

  return (
    <nav aria-label={ariaLabel}>
      <ul className={listClasses}>
        {navigation.map(({ label, to, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  'relative inline-flex items-center whitespace-nowrap',
                  'bg-gradient-text bg-clip-text text-transparent',
                  'font-display text-h2 font-bold',
                  'transition-[filter,opacity] duration-200',
                  'hover:drop-shadow-[0_0_6px_var(--color-yellow)]',
                  'focus-visible:outline-2',
                  'focus-visible:outline-offset-4',
                  'focus-visible:outline-focus',
                  isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100',
                ].join(' ')
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
