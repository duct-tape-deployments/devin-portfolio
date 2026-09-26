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
      className="social-link"
    >
      <Icon aria-hidden="true" className="size-6" />
    </a>
  );
}
