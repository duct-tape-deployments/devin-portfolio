import { LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu';
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
    icon: LuFacebook,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: LuLinkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: LuInstagram,
  },
] as const;

export function Footer() {
  const language = useLanguageStore((state) => state.language);
  const t = getTranslations(language);

  return (
    <footer className="bg-background text-foreground">
      <GradientDivider />

      <PageContainer className="pt-5.25 pb-[7.8px]">
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
                ml-4.25
                inline-flex
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-focus
              "
            >
              {/* Light theme */}
              <img
                src="/header-logo-light.svg"
                alt=""
                className="-mr-1.5 -mb-2.25 h-12.25 w-auto max-w-none dark:hidden"
              />

              {/* Dark theme */}
              <img
                src="/header-logo-dark.svg"
                alt=""
                className="-mr-1.5 -mb-2.25 hidden h-12.25 w-auto max-w-none dark:block"
              />
            </Link>

            <div className="mt-5.75 flex items-center gap-5" aria-label="Social media links">
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
                mt-2.5
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
          <nav aria-label="Footer navigation" className="mr-3.5">
            <ul className="flex flex-col gap-[8.4px]">
              {navigation.map(({ labelKey, to, end }) => (
                <li key={to} className="flex">
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      [
                        'inline-flex whitespace-nowrap',
                        'font-body text-body leading-display font-bold',
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
            mt-[16.4px]
            grid
            grid-cols-[1fr_auto_1fr]
            items-start
          "
        >
          <div className="flex justify-self-start">
            <LanguageToggle />
          </div>

          <p className="mt-1.75 whitespace-nowrap text-xs text-foreground">© 2026 XE Design</p>

          <div aria-hidden="true" />
        </div>
      </PageContainer>

      <GradientDivider />
    </footer>
  );
}
