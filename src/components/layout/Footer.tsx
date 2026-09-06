import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { navigation, routes } from '@/config/navigation';

import { GradientDivider } from '../interface/GradientDivider';
import { SocialLink } from '../interface/SocialLink';
import { PageContainer } from './PageContainer';

import { getTranslations } from '@/i18n/translations';
import { LanguageToggle } from '../interface/LanguageToggle';
import { useLanguageStore } from '@/stores/languageStore';

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: FaFacebookF,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
] as const;

export function Footer() {
  const language = useLanguageStore((state) => state.language);
  const t = getTranslations(language);

  return (
    <footer className="bg-background text-foreground">
      <GradientDivider />

      <PageContainer className="py-8">
        <div
          className="
    grid
    grid-cols-[minmax(0,1fr)_auto]
    gap-5
    max-[350px]:grid-cols-1
    max-[350px]:gap-8
  "
        >
          {/* Left side */}
          <div className="flex min-w-0 flex-col items-start">
            <Link
              to={routes.home}
              aria-label="XE Design home"
              className="
                inline-flex
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-focus
              "
            >
              {/* Light theme */}
              <img src="/header-logo-light.png" alt="" className="h-14 w-auto dark:hidden" />

              {/* Dark theme */}
              <img src="/header-logo-dark.png" alt="" className="hidden h-14 w-auto dark:block" />
            </Link>

            <div className="mt-5 flex items-center gap-2" aria-label="Social media links">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.label}
                  label={social.label}
                  href={social.href}
                  icon={social.icon}
                />
              ))}
            </div>

            <a
              href="mailto:design@XEDesign.com"
              className="
                mt-1
                whitespace-nowrap
                text-body
                text-foreground
                transition-colors
                hover:text-accent
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-focus
                active:opacity-60
              "
            >
              design@XEDesign.com
            </a>
          </div>

          {/* Right side */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-1">
              {navigation.map(({ labelKey, to, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      [
                        'inline-flex whitespace-nowrap',
                        'font-body text-h4 font-bold',
                        'transition-colors duration-150',
                        'hover:text-accent',
                        'focus-visible:outline-2',
                        'focus-visible:outline-offset-2',
                        'focus-visible:outline-focus',
                        'active:opacity-60',
                        isActive ? 'text-accent' : 'text-foreground',
                      ].join(' ')
                    }
                  >
                    {t.navigation[labelKey]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div
          className="
            mt-8
            grid
            grid-cols-[1fr_auto_1fr]
            items-end
          "
        >
          <div className="justify-self-start">
            <LanguageToggle />
          </div>

          <p className="whitespace-nowrap text-sm text-foreground">© 2026 XE Design</p>

          <div aria-hidden="true" />
        </div>
      </PageContainer>

      <GradientDivider />
    </footer>
  );
}
