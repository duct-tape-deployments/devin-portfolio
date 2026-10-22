import type { ReactNode } from 'react';
import { Circle } from 'lucide-react';
import { Navigate, useParams } from 'react-router';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer } from '@/components/layout/PageContainer';
import { PageTitle } from '@/components/layout/PageTitle';
import { CaseStudyGallery } from '@/components/portfolio/CaseStudyGallery';
import { sectionDivider, sectionHeading } from '@/components/portfolio/caseStudyStyles';
import { NextCaseStudy } from '@/components/portfolio/NextCaseStudy';
import { routes } from '@/config/navigation';
import { getCaseStudy } from '@/data/caseStudies';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { localizeImage } from '@/i18n/localized';
import { useLanguageStore, useT } from '@/stores/languageStore';

const bodyText = 'max-w-reading text-pretty text-foreground';

type LabelledSectionProps = {
  title: string;
  children: ReactNode;
};

function LabelledSection({ title, children }: LabelledSectionProps) {
  return (
    <section className="lg:grid lg:grid-cols-12 lg:gap-x-6">
      <h2 className={`${sectionHeading} lg:col-span-4`}>{title}</h2>

      <div className="mt-4 lg:col-span-8 lg:mt-0">{children}</div>
    </section>
  );
}

function CaseStudy() {
  const { slug } = useParams();

  const language = useLanguageStore((state) => state.language);
  const t = useT(caseStudyLabels);

  if (!slug) {
    return <Navigate to={routes.uiUx} replace />;
  }

  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return <Navigate to={routes.uiUx} replace />;
  }

  const content = caseStudy.content[language];
  const { details } = caseStudy;

  const detailsContent = details?.content[language];

  const heroSource = details?.heroImage ?? details?.images?.[0];
  const heroImage = heroSource && localizeImage(heroSource, language);

  const galleryImages = details?.images?.map((image) => localizeImage(image, language)) ?? [];

  const TitleHeading = caseStudy.projectName ? 'h2' : 'h1';

  return (
    <PageContainer className="pt-4 pb-16 lg:pt-6 lg:pb-24">
      <PageTitle name={caseStudy.projectName ?? content.title} />
      <header className={detailsContent ? 'mb-8 lg:mb-12' : 'mb-12'}>
        {caseStudy.projectName && (
          <h1 translate="no" className="title-gradient mb-8 block">
            {caseStudy.projectName}
          </h1>
        )}

        <div
          className={heroImage ? 'lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-6' : undefined}
        >
          {heroImage && (
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="mb-6 aspect-video w-full rounded-card object-cover shadow-glow-image lg:col-span-7 lg:mb-0"
            />
          )}

          <div className="lg:order-first lg:col-span-5">
            <p className="badge">{content.category}</p>

            <TitleHeading className={`mt-4 max-w-reading ${sectionHeading}`}>
              {content.title}
            </TitleHeading>

            <p className="mt-4 max-w-reading text-pretty text-foreground">{content.description}</p>

            {details && detailsContent && (
              <>
                <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-x-5 lg:mt-8 lg:flex lg:flex-wrap lg:gap-x-12">
                  <section>
                    <h2 className={sectionHeading}>{t.role}</h2>

                    <p className="mt-4 text-foreground">{detailsContent.role}</p>
                  </section>

                  <section>
                    <h2 className={sectionHeading}>{t.duration}</h2>

                    <p className="mt-4 text-foreground">{detailsContent.duration}</p>
                  </section>
                </div>

                {details.prototypeUrl && (
                  <a
                    href={details.prototypeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-8"
                  >
                    {t.viewPrototype}
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </header>

      {!details || !detailsContent ? (
        <p className="text-foreground">{t.comingSoon}</p>
      ) : (
        <div className="space-y-8">
          {galleryImages.length > 0 && (
            <div>
              <CaseStudyGallery images={galleryImages} />
            </div>
          )}

          <div className={`${sectionDivider} py-4`}>
            <GradientDivider />
          </div>

          <LabelledSection title={t.company}>
            <p className={bodyText}>{detailsContent.company}</p>
          </LabelledSection>

          <LabelledSection title={t.goal}>
            <p className={bodyText}>{detailsContent.goal}</p>
          </LabelledSection>

          <LabelledSection title={t.targetAudience}>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground">
                <Circle
                  aria-hidden="true"
                  size={16}
                  absoluteStrokeWidth
                  className="shrink-0 text-icon-inline"
                />

                <span>{detailsContent.targetAudience.ageRange}</span>
              </li>

              <li className="flex items-center gap-2 text-foreground">
                <Circle
                  aria-hidden="true"
                  size={16}
                  absoluteStrokeWidth
                  className="shrink-0 text-icon-inline"
                />

                <span>{detailsContent.targetAudience.description}</span>
              </li>
            </ul>
          </LabelledSection>

          <div className={`${sectionDivider} py-4`}>
            <GradientDivider />
          </div>

          {details.typography && (
            <LabelledSection title={t.typographyAndColors}>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div>
                  <h3 className="font-body text-body font-semibold text-emphasis">{t.fontsUsed}</h3>

                  <div className="mt-4 space-y-4">
                    {details.typography.map((font) => (
                      <article key={`${font.name}-${font.weight}`}>
                        <h4
                          className="text-2xl"
                          style={{
                            fontFamily: `"${font.family ?? font.name}", ${font.fallback ?? 'sans-serif'}`,
                            fontWeight: font.weight,
                          }}
                        >
                          {font.weightLabel ? `${font.name} ${font.weightLabel}` : font.name}
                        </h4>

                        <p
                          className="mt-2"
                          style={{
                            fontFamily: `"${font.family ?? font.name}", ${font.fallback ?? 'sans-serif'}`,
                            fontWeight: font.weight,
                          }}
                        >
                          ABCDEFGHIJKLMNOPQRSTUVWXYZ
                          <br />
                          abcdefghijklmnopqrstuvwxyz
                          <br />
                          1234567890
                          <br />
                          !”#%&/()=?
                        </p>
                      </article>
                    ))}
                  </div>
                </div>

                {details.colors && (
                  <div>
                    <h3 className="font-body text-body font-semibold text-emphasis">
                      {t.colorsUsed}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-4">
                      {details.colors.map((color) => (
                        <div key={color}>
                          <div
                            className="size-[65px] rounded-full border border-border"
                            style={{ backgroundColor: color }}
                          />

                          <p className="mt-2 text-sm">{color}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </LabelledSection>
          )}

          {detailsContent.objective && (
            <LabelledSection title={t.objective}>
              <p className={bodyText}>{detailsContent.objective}</p>
            </LabelledSection>
          )}

          {detailsContent.methodology && (
            <LabelledSection title={t.methodology}>
              <ul className="max-w-reading space-y-2 text-foreground">
                {detailsContent.methodology.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </LabelledSection>
          )}

          {detailsContent.feedback && (
            <LabelledSection title={t.feedback}>
              <p className={bodyText}>{detailsContent.feedback}</p>
            </LabelledSection>
          )}

          {detailsContent.findings && (
            <LabelledSection title={t.findings}>
              <ul className="max-w-reading list-disc space-y-2 pl-5 text-foreground">
                {detailsContent.findings.map((finding) => (
                  <li key={finding}>{finding}</li>
                ))}
              </ul>
            </LabelledSection>
          )}

          {detailsContent.recommendations && (
            <LabelledSection title={t.recommendations}>
              <ul className="max-w-reading list-disc space-y-2 pl-5 text-foreground">
                {detailsContent.recommendations.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>
            </LabelledSection>
          )}
        </div>
      )}

      <NextCaseStudy slug={caseStudy.slug} />
    </PageContainer>
  );
}

export default CaseStudy;
