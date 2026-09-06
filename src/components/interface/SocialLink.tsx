import type { IconType } from 'react-icons';

type SocialLinkProps = {
  label: string;
  href: string;
  icon: IconType;
  disabled?: boolean;
};

export function SocialLink({ label, href, icon: Icon, disabled = false }: SocialLinkProps) {
  return (
    <a
      href={disabled ? undefined : href}
      target={disabled ? undefined : '_blank'}
      rel={disabled ? undefined : 'noreferrer'}
      aria-label={label}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={[
        'inline-flex size-11 items-center justify-center',
        'text-social',
        'drop-shadow-icon',

        'transition-[filter,opacity,transform] duration-150',

        // Hover
        'hover:drop-shadow-[0_0_6px_var(--color-social)]',

        // Keyboard focus
        'focus-visible:outline-2',
        'focus-visible:outline-offset-1',
        'focus-visible:outline-focus',

        // Pressed
        'active:translate-y-px',
        'active:opacity-50',
        'active:drop-shadow-none',

        // Disabled
        'aria-disabled:pointer-events-none',
        'aria-disabled:text-disabled',
        'aria-disabled:opacity-40',
        'aria-disabled:drop-shadow-none',
      ].join(' ')}
    >
      <Icon aria-hidden="true" className="size-7" />
    </a>
  );
}
