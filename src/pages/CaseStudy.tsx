import { useEffect, useRef } from 'react';
import { Circle } from 'lucide-react';
import { Navigate, useParams } from 'react-router';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer } from '@/components/layout/PageContainer';
import { PageTitle } from '@/components/layout/PageTitle';
import { CaseStudyGallery } from '@/components/portfolio/CaseStudyGallery';
import { sectionHeading } from '@/components/portfolio/caseStudyStyles';
import { NextCaseStudy } from '@/components/portfolio/NextCaseStudy';
import { routes } from '@/config/navigation';
import { getCaseStudy } from '@/data/caseStudies';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { localizeImage } from '@/i18n/localized';
import { useLanguageStore, useT } from '@/stores/languageStore';

function CaseStudy() {
  const { slug } = useParams();

  const language = useLanguageStore((state) => state.language);
  const t = useT(caseStudyLabels);

  const previousSlug = useRef(slug);

  useEffect(() => {
    if (previousSlug.current === slug) {
      return;
    }

    previousSlug.current = slug;
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [slug]);

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

  return (
    <PageContainer className="pt-4 pb-16 lg:pt-6 lg:pb-24">
      <PageTitle name={caseStudy.projectName ?? content.title} />
      <header className="mb-12">
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

            <h2 className={`mt-4 max-w-reading ${sectionHeading}`}>{content.title}</h2>

            <p className="mt-4 max-w-reading text-pretty text-foreground">{content.description}</p>
          </div>
        </div>
      </header>

      {!details || !detailsContent ? (
        <p className="text-foreground">{t.comingSoon}</p>
      ) : (
        <div className="space-y-8">
          <div className="space-y-4">
            <section>
              <h2 className={sectionHeading}>{t.role}</h2>

              <p className="mt-4 text-foreground">{detailsContent.role}</p>
            </section>

            <section>
              <h2 className={sectionHeading}>{t.duration}</h2>

              <p className="mt-4 text-foreground">{detailsContent.duration}</p>
            </section>
          </div>

          {(details.prototypeUrl || galleryImages.length > 0) && (
            <div className="space-y-8">
              {details.prototypeUrl && (
                <a
                  href={details.prototypeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  {t.viewPrototype}
                </a>
              )}

              {galleryImages.length > 0 && (
                <div>
                  <CaseStudyGallery images={galleryImages} />
                </div>
              )}
            </div>
          )}

          <div className="mx-auto w-3/5 py-4">
            <GradientDivider />
          </div>

          <section>
            <h2 className={sectionHeading}>{t.company}</h2>

            <p className="mt-4 max-w-reading text-pretty text-foreground">
              {detailsContent.company}
            </p>
          </section>

          <section>
            <h2 className={sectionHeading}>{t.goal}</h2>

            <p className="mt-4 max-w-reading text-pretty text-foreground">{detailsContent.goal}</p>
          </section>

          <section>
            <h2 className={sectionHeading}>{t.targetAudience}</h2>

            <ul className="mt-4 space-y-2">
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
          </section>

          <div className="mx-auto w-3/5 py-4">
            <GradientDivider />
          </div>

          {details.typography && (
            <section>
              <h2 className={sectionHeading}>{t.typographyAndColors}</h2>

              <div className="mt-4 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-body text-body font-semibold text-emphasis">{t.fontsUsed}</h3>

                  <div className="mt-4 space-y-4">
                    {details.typography.map((font) => (
                      <article key={`${font.name}-${font.weight}`}>
                        <h4
                          className="text-2xl"
                          style={{
                            fontFamily: `"${font.name}", sans-serif`,
                            fontWeight: font.weight === 'Bold' ? 700 : 400,
                          }}
                        >
                          {font.name} {font.weight}
                        </h4>

                        <p
                          className="mt-2"
                          style={{
                            fontFamily: `"${font.name}", sans-serif`,
                            fontWeight: font.weight === 'Bold' ? 700 : 400,
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
            </section>
          )}

          {detailsContent.objective && (
            <section>
              <h2 className={sectionHeading}>{t.objective}</h2>

              <p className="mt-4 max-w-reading text-pretty text-foreground">
                {detailsContent.objective}
              </p>
            </section>
          )}

          {detailsContent.methodology && (
            <section>
              <h2 className={sectionHeading}>{t.methodology}</h2>

              <ul className="mt-4 max-w-reading space-y-2 text-foreground">
                {detailsContent.methodology.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {detailsContent.feedback && (
            <section>
              <h2 className={sectionHeading}>{t.feedback}</h2>

              <p className="mt-4 max-w-reading text-pretty text-foreground">
                {detailsContent.feedback}
              </p>
            </section>
          )}

          {detailsContent.findings && (
            <section>
              <h2 className={sectionHeading}>{t.findings}</h2>

              <ul className="mt-4 max-w-reading list-disc space-y-2 pl-5 text-foreground">
                {detailsContent.findings.map((finding) => (
                  <li key={finding}>{finding}</li>
                ))}
              </ul>
            </section>
          )}

          {detailsContent.recommendations && (
            <section>
              <h2 className={sectionHeading}>{t.recommendations}</h2>

              <ul className="mt-4 max-w-reading list-disc space-y-2 pl-5 text-foreground">
                {detailsContent.recommendations.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}

      <NextCaseStudy slug={caseStudy.slug} />
    </PageContainer>
  );
}

export default CaseStudy;
