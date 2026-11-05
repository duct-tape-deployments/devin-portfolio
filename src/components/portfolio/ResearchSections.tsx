import { bodyText } from '@/components/portfolio/caseStudyStyles';
import { LabelledSection } from '@/components/portfolio/LabelledSection';
import { PersonaCard } from '@/components/portfolio/PersonaCard';
import type { CaseStudyResearch, Severity } from '@/data/caseStudyResearch';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { useLanguageStore, useT } from '@/stores/languageStore';

const severityColor: Record<Severity, string> = {
  severe: 'text-severity-severe',
  moderate: 'text-severity-moderate',
  low: 'text-severity-low',
};

type ResearchSectionsProps = {
  research: CaseStudyResearch;
};

/** Research-specific case study sections; each one renders only when its data exists */
export function ResearchSections({ research }: ResearchSectionsProps) {
  const language = useLanguageStore((state) => state.language);
  const t = useT(caseStudyLabels);

  const content = research.content[language];
  const { personas } = research;

  return (
    <>
      {personas && personas.length > 0 && (
        <LabelledSection title={t.personas}>
          <ul className="grid gap-6 md:grid-cols-2 md:gap-5 lg:gap-6">
            {personas.map((persona) => (
              <li key={persona.name}>
                <PersonaCard persona={persona} />
              </li>
            ))}
          </ul>
        </LabelledSection>
      )}

      {content.objective && (
        <LabelledSection title={t.objective}>
          <p className={bodyText}>{content.objective}</p>
        </LabelledSection>
      )}

      {content.methodology && content.methodology.length > 0 && (
        <LabelledSection title={t.methodology}>
          <dl className={`space-y-4 ${bodyText}`}>
            {content.methodology.map((item) => (
              <div key={item.label}>
                <dt className="inline">{item.label}:</dt> <dd className="inline">{item.value}</dd>
              </div>
            ))}
          </dl>
        </LabelledSection>
      )}

      {content.feedback && (
        <LabelledSection title={t.feedback}>
          <p className={bodyText}>{content.feedback}</p>
        </LabelledSection>
      )}

      {content.findings && content.findings.items.length > 0 && (
        <LabelledSection title={t.findings}>
          <div className={bodyText}>
            <ul className="list-dash space-y-2 pl-4">
              {content.findings.items.map((item) => (
                <li key={item.text}>
                  {item.text}

                  {item.children && (
                    <ul className="mt-2 list-disc space-y-2 pl-5">
                      {item.children.map((child) => (
                        <li key={child}>{child}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {content.findings.summary && <p className="mt-4">{content.findings.summary}</p>}
          </div>
        </LabelledSection>
      )}

      {content.recommendations && content.recommendations.length > 0 && (
        <LabelledSection title={t.recommendations}>
          <ul className={`list-dash space-y-2 pl-4 ${bodyText}`}>
            {content.recommendations.map((recommendation) => (
              <li key={recommendation.text}>
                {recommendation.text}{' '}
                <span className={severityColor[recommendation.severity]}>
                  ({t.severity[recommendation.severity]})
                </span>
              </li>
            ))}
          </ul>
        </LabelledSection>
      )}
    </>
  );
}
