import type { IconType } from 'react-icons';

type SocialLinkProps = {
  label: string;
  href: string;
  icon: IconType;
};

export function SocialLink({ label, href, icon: Icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="icon-button social-link"
    >
      <Icon aria-hidden="true" size={24} />
    </a>
  );
}
