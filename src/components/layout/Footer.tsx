import { useId } from 'react';
import { LuFacebook, LuInstagram, LuLinkedin } from 'react-icons/lu';
import { Link, NavLink } from 'react-router';
import { footerNavigation, navigation, routes } from '@/config/navigation';

import { GradientDivider } from '../interface/GradientDivider';
import { Logo } from '../interface/Logo';
import { SocialLink } from '../interface/SocialLink';
import { PageContainer } from './PageContainer';

import { footer } from '@/i18n/footer';
import { getTranslations } from '@/i18n/translations';
import { LanguageToggle } from '../interface/LanguageToggle';
import { useLanguageStore, useT } from '@/stores/languageStore';

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

const linkStateClasses =
  'underline-offset-4 transition-colors duration-150 [-webkit-tap-highlight-color:transparent] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus active:text-muted-foreground';

/** Footer from md */
function FooterDesktop() {
  const language = useLanguageStore((state) => state.language);
  const t = getTranslations(language);
  const f = useT(footer);
  const headingId = useId();

  return (
    <div className="hidden md:block">
      <PageContainer>
        <div className="grid grid-cols-8 gap-x-5 pt-16 pb-12 lg:grid-cols-12 lg:gap-x-6">
          <div className="col-span-4 grid grid-cols-subgrid justify-items-start lg:col-span-5">
            <Link
              to={routes.home}
              aria-label={t.accessibility.homeLink}
              className="col-span-4 inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
              <Logo />
            </Link>

            <p className="col-span-4 mt-8 text-body text-muted-foreground">{f.tagline}</p>

            <div className="col-span-full mt-6 flex flex-wrap items-center gap-x-6 gap-y-6 lg:gap-x-8">
              <address className="not-italic">
                <a
                  href="mailto:design@XEDesign.com"
                  className="
                    text-h5
                    font-bold
                    text-contact-link
                    underline-offset-4
                    hover:underline
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-focus
                  "
                >
                  design@XEDesign.com
                </a>
              </address>
              <div
                className="flex items-center gap-5 lg:gap-4"
                role="group"
                aria-label={t.accessibility.socialLinks}
              >
                {socialLinks.map((social) => (
                  <SocialLink
                    key={social.label}
                    label={social.label}
                    href={social.href}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>
          </div>

          <nav
            aria-label={t.accessibility.footerNavigation}
            className="col-span-4 col-start-5 grid grid-cols-subgrid lg:col-start-9"
          >
            {footerNavigation.map(({ headingKey, items }) => (
              <div key={headingKey} className="col-span-2">
                <h2 id={`${headingId}-${headingKey}`} className="font-body text-h5 font-bold">
                  {f[headingKey]}
                </h2>
                <ul aria-labelledby={`${headingId}-${headingKey}`} className="mt-2">
                  {items.map(({ labelKey, to, end }) => (
                    <li key={to} className="flex">
                      <NavLink
                        to={to}
                        end={end}
                        className={`inline-flex py-1 whitespace-nowrap text-body text-muted-foreground hover:text-foreground ${linkStateClasses}`}
                      >
                        {t.navigation[labelKey]}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <GradientDivider />

        <div className="flex items-center justify-between gap-6 py-6 text-xs text-muted-foreground">
          <small className="text-xs">© 2026 XE Design. {f.rightsReserved}</small>
          <div className="flex items-center gap-6">
            <p>{f.location}</p>
            <LanguageToggle />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export function Footer() {
  const language = useLanguageStore((state) => state.language);
  const t = getTranslations(language);

  return (
    <footer className="bg-background text-foreground">
      <GradientDivider />

      <FooterDesktop />

      {/* Mobile, below md */}
      <div className="md:hidden">
        <PageContainer className="pt-6 pb-2">
          <div
            className="
    grid
    grid-cols-[minmax(0,1fr)_auto]
    gap-4
    max-[350px]:grid-cols-1
    max-[350px]:gap-8
  "
          >
            {/* Left side */}
            <div className="flex min-w-0 flex-col items-start">
              <Link
                to={routes.home}
                aria-label={t.accessibility.homeLink}
                className="
                ml-4
                inline-flex
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-focus
              "
              >
                <Logo />
              </Link>

              <div
                className="mt-6 flex items-center gap-5"
                role="group"
                aria-label={t.accessibility.socialLinks}
              >
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
                className={`mt-3 whitespace-nowrap text-body ${linkStateClasses}`}
              >
                design@XEDesign.com
              </a>
            </div>

            {/* Right side */}
            <nav aria-label={t.accessibility.footerNavigation} className="mr-4">
              <ul>
                {navigation.map(({ labelKey, to, end }) => (
                  <li key={to} className="flex">
                    <NavLink
                      to={to}
                      end={end}
                      className={`inline-flex whitespace-nowrap text-body font-bold text-foreground ${linkStateClasses}`}
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
            mt-2
            grid
            grid-cols-[1fr_auto_1fr]
            items-start
          "
          >
            <div className="flex justify-self-start">
              <LanguageToggle />
            </div>

            <p className="mt-2 whitespace-nowrap text-xs">© 2026 XE Design</p>

            <div aria-hidden="true" />
          </div>
        </PageContainer>

        <GradientDivider />
      </div>
    </footer>
  );
}
