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
    <Section space="tight" aria-labelledby="who-i-am-title">
      <PageContainer className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <h2
            id="who-i-am-title"
            className="bg-gradient-text bg-clip-text font-display text-h1 font-bold text-transparent"
          >
            {t.title}
          </h2>
          <p
            className={`font-display text-h1 font-bold wrap-break-word text-shadow-drop ${language === 'no' ? 'max-[392px]:text-4xl' : ''}`}
          >
            {t.tagline}
          </p>
        </div>

        <div className="max-w-prose">
          <p>{t.intro}</p>

          <figure>
            <blockquote className="indent-6">{t.quote}</blockquote>

            <figcaption className="mt-2">
              <span className="block text-h3">{t.quoteAuthor}</span>
              <cite className="block text-label not-italic">{t.quoteSource}</cite>
            </figcaption>
          </figure>
        </div>

        <div className="max-w-prose">
          <GradientDivider className="mx-auto max-w-50.5" />
        </div>

        <p className="max-w-prose">{t.outro}</p>

        <div className="flex flex-wrap justify-between gap-x-8 gap-y-8 md:justify-start md:gap-x-24">
          {skillGroups.map(({ title, items }) => (
            <div key={title}>
              <h3 className="font-display text-h2 font-bold text-shadow-drop">{title}</h3>

              <ul className="mt-5 flex flex-col gap-2.5">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3.5">
                    <Circle size={14} absoluteStrokeWidth className="mx-px shrink-0 text-cyan" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
