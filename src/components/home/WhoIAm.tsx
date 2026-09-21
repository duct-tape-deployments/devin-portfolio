import { Circle, Quote } from 'lucide-react';

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
      <PageContainer className="flex flex-col gap-6 py-9 lg:gap-15 lg:py-25">
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

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-12">
          <div className="max-w-prose lg:min-w-0 lg:basis-145">
            <p className="lg:hidden">{t.intro}</p>

            <figure className="lg:flex lg:flex-col lg:gap-6 lg:rounded-2xl lg:border lg:border-card-border lg:p-10 lg:shadow-quote-card">
              <Quote aria-hidden="true" className="hidden size-6 lg:block" />

              <blockquote className="indent-6 lg:indent-0 lg:font-open-sans lg:text-xl lg:leading-body lg:italic">
                {t.quote}
              </blockquote>

              <figcaption className="mt-2 lg:mt-0 lg:flex lg:flex-col lg:gap-1">
                <span className="block text-h3 lg:text-h4 lg:leading-5.5 lg:font-bold lg:text-accent">
                  {t.quoteAuthor}
                </span>
                <cite className="block text-label not-italic lg:font-open-sans lg:text-sm lg:leading-4.75 lg:text-muted-foreground">
                  {t.quoteSource}
                </cite>
              </figcaption>
            </figure>
          </div>

          <div className="flex flex-col gap-6 lg:min-w-0 lg:basis-150 lg:gap-10">
            <GradientDivider className="mx-auto max-w-50.5 lg:hidden" />

            <p className="max-w-prose lg:leading-[1.8] lg:text-muted-foreground">{t.outro}</p>

            <div className="flex flex-wrap justify-between gap-x-8 gap-y-8 md:justify-start md:gap-x-24 lg:grid lg:grid-cols-[minmax(0,260px)_minmax(0,260px)] lg:justify-between lg:gap-x-0">
              {skillGroups.map(({ title, items }) => (
                <div key={title}>
                  <h3 className="font-display text-h2 font-bold text-shadow-drop">{title}</h3>

                  <ul className="mt-5 flex flex-col gap-2.5 lg:gap-5">
                    {items.map((skill) => (
                      <li key={skill} className="flex items-center gap-3.5">
                        <Circle
                          size={14}
                          absoluteStrokeWidth
                          className="mx-px shrink-0 text-cyan"
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
