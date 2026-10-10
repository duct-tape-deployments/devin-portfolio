import { Circle } from 'lucide-react';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';
import { whoIAm } from '@/i18n/whoIAm';
import { useLanguageStore, useT } from '@/stores/languageStore';

export function WhoIAm() {
  const language = useLanguageStore((state) => state.language);
  const t = useT(whoIAm);

  const skillGroups = [t.hardSkills, t.softSkills];

  return (
    <Section space="none" aria-labelledby="who-i-am-title">
      <PageContainer className="flex flex-col gap-8 py-16 lg:py-24">
        <div className="flex flex-col gap-4">
          <h2 id="who-i-am-title" className="title-gradient">
            {t.title}
          </h2>
          <p
            className={`font-display text-h1 font-bold wrap-break-word text-shadow-drop md:text-balance ${language === 'no' ? 'max-[392px]:text-4xl' : ''}`}
          >
            {t.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-8 md:grid-rows-[auto_auto_1fr] md:gap-x-5 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-6 lg:gap-y-8">
          <div className="flex max-w-prose flex-col gap-4 md:col-start-1 md:col-end-6 md:row-start-1 lg:row-end-3">
            <p>{t.intro}</p>

            <figure lang="en">
              <blockquote className="indent-6">{t.quote}</blockquote>

              <figcaption className="mt-2">
                <span className="block text-h3">{t.quoteAuthor}</span>
                <cite className="block text-label not-italic">{t.quoteSource}</cite>
              </figcaption>
            </figure>
          </div>

          <GradientDivider className="mx-auto max-w-50.5 md:col-start-1 md:col-end-6 md:row-start-2 lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-3 lg:h-auto lg:w-px lg:bg-gradient-divider-vertical" />

          <p className="max-w-prose md:col-start-1 md:col-end-6 md:row-start-3 lg:col-start-8 lg:col-end-13 lg:row-start-1">
            {t.outro}
          </p>

          <div className="flex flex-wrap justify-between gap-x-6 gap-y-8 md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-4 md:flex-col md:justify-start md:self-start lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:row-end-3 lg:grid lg:grid-cols-2">
            {skillGroups.map(({ title, items }) => (
              <div key={title}>
                <h3 className="font-display text-h2 font-bold text-shadow-drop">{title}</h3>

                <ul className="mt-4 flex flex-col gap-3 lg:gap-4">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <Circle size={16} absoluteStrokeWidth className="shrink-0 text-cyan" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
