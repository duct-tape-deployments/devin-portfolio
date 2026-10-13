import { Link, Navigate, useParams } from 'react-router';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer, pageSpacing } from '@/components/layout/PageContainer';
import { PageTitle } from '@/components/layout/PageTitle';
import { CaseStudyGallery } from '@/components/portfolio/CaseStudyGallery';
import { getCaseStudy } from '@/data/caseStudies';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { useLanguageStore, useT } from '@/stores/languageStore';

const sectionHeading =
  'font-display text-h5 leading-display font-bold text-foreground text-shadow-drop lg:text-h4';

function CaseStudy() {
  const { slug } = useParams();

  const language = useLanguageStore((state) => state.language);
  const t = useT(caseStudyLabels);

  if (!slug) {
    return <Navigate to="/ui-ux" replace />;
  }

  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return <Navigate to="/ui-ux" replace />;
  }

  const content = caseStudy.content[language];
  const { details } = caseStudy;

  const detailsContent = details?.content[language];

  const heroImage = details?.heroImage
    ? {
        src: details.heroImage.src,
        alt: details.heroImage.alt[language],
      }
    : details?.images?.[0]
      ? {
          src: details.images[0].src,
          alt: details.images[0].alt[language],
        }
      : undefined;

  const galleryImages =
    details?.images?.map((image) => ({
      src: image.src,
      alt: image.alt[language],
    })) ?? [];

  return (
    <PageContainer className={pageSpacing}>
      <PageTitle name={caseStudy.projectName ?? content.title} />
      <header className="relative mb-12">
        <Link
          to="/ui-ux"
          className="mb-4 flex w-fit text-sm font-semibold text-accent hover:underline lg:absolute lg:bottom-full"
        >
          ← UI/UX
        </Link>

        {caseStudy.projectName && (
          <h1 className="title-gradient mb-8 block">{caseStudy.projectName}</h1>
        )}

        <div
          className={heroImage ? 'lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6' : undefined}
        >
          {heroImage && (
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="mb-6 aspect-video w-full rounded-2xl object-cover shadow-glow-image lg:col-span-7 lg:mb-0"
            />
          )}

          <div className="lg:order-first lg:col-span-5">
            <p className="badge">{content.category}</p>

            <h2 className={`mt-4 max-w-3xl ${sectionHeading}`}>{content.title}</h2>

            <p className="mt-4 max-w-reading text-body text-pretty text-foreground">
              {content.description}
            </p>
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
            <section className="space-y-8">
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
                <div className="mx-auto">
                  <CaseStudyGallery images={galleryImages} />
                </div>
              )}
            </section>
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
              <li className="flex items-center gap-3 text-foreground">
                <span
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 rounded-full border-2 border-cyan"
                />

                <span>{detailsContent.targetAudience.ageRange}</span>
              </li>

              <li className="flex items-center gap-3 text-foreground">
                <span
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 rounded-full border-2 border-cyan"
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
                  <h3 className="font-body text-body text-accent">{t.fontsUsed}</h3>

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
                    <h3 className="font-body text-body text-accent">{t.colorsUsed}</h3>

                    <div className="mt-4 flex flex-wrap gap-4">
                      {details.colors.map((color) => (
                        <div key={color}>
                          <div
                            className="h-14 w-14 rounded-full border border-border"
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
    </PageContainer>
  );
}

export default CaseStudy;
