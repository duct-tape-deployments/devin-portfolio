import type { ResearchPersona } from '@/data/caseStudyResearch';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { localizeImage } from '@/i18n/localized';
import { useLanguageStore, useT } from '@/stores/languageStore';

type PersonaCardProps = {
  persona: ResearchPersona;
};

export function PersonaCard({ persona }: PersonaCardProps) {
  const language = useLanguageStore((state) => state.language);
  const t = useT(caseStudyLabels);

  const content = persona.content[language];
  const image = localizeImage(persona.image, language);

  const facts = [
    { label: t.age, value: persona.age },
    { label: t.jobTitle, value: content.jobTitle },
    { label: t.status, value: content.status },
    { label: t.location, value: persona.location },
  ];

  return (
    <article className="@container h-full rounded-card bg-persona-card p-5 text-sm text-soft-white lg:p-6">
      <div className="grid items-start gap-x-4 gap-y-3 @2xs:grid-cols-2 @2xs:grid-rows-[auto_auto_1fr]">
        <h3 className="font-body text-sm font-bold @2xs:col-start-2 @2xs:row-start-1">
          {persona.name}
        </h3>

        <img
          src={image.src}
          alt={image.alt}
          width={104}
          height={99}
          loading="lazy"
          decoding="async"
          className="aspect-104/99 w-26 object-cover @2xs:col-start-1 @2xs:row-span-2 @2xs:row-start-1"
        />

        <dl className="space-y-2 font-bold @2xs:col-start-1 @2xs:row-start-3">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-wrap gap-x-2">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="list-disc space-y-2 pl-4 @2xs:col-start-2 @2xs:row-span-2 @2xs:row-start-2">
          {content.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
