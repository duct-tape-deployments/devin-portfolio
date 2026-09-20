import { Link, Navigate, useParams } from 'react-router';

import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer } from '@/components/layout/PageContainer';
import { CaseStudyGallery } from '@/components/portfolio/CaseStudyGallery';
import { getCaseStudy } from '@/data/caseStudies';
import { caseStudyLabels } from '@/i18n/caseStudyLabels';
import { useLanguageStore, useT } from '@/stores/languageStore';

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
    <PageContainer className="py-12">
      <Link
        to="/ui-ux"
        className="mb-8 inline-flex text-sm font-semibold text-accent hover:underline"
      >
        ← UI/UX
      </Link>

      <header className="mb-12">
        {caseStudy.projectName && (
          <h1 className="mb-2 block bg-gradient-text bg-clip-text font-display text-h1 font-bold text-transparent">
            {caseStudy.projectName}
          </h1>
        )}

        {heroImage && (
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="mb-12 aspect-video w-full rounded-2xl object-cover shadow-glow-image"
          />
        )}

        <p className="block w-fit rounded bg-cyan px-1 text-sm font-semibold text-foreground">
          {content.category}
        </p>

        <h2 className="mt-2 max-w-3xl font-display text-h1 font-bold text-foreground text-shadow-drop">
          {content.title}
        </h2>

        <p className="mt-4 max-w-2xl text-body text-foreground">{content.description}</p>
      </header>

      {!details || !detailsContent ? (
        <p className="text-foreground">{t.comingSoon}</p>
      ) : (
        <div className="space-y-14">
          <div className="grid gap-8 sm:grid-cols-2">
            <section>
              <h2 className="font-display text-h3 font-semibold text-foreground text-shadow-drop">
                {t.role}
              </h2>

              <p className="mt-2 text-foreground">{detailsContent.role}</p>
            </section>

            <section>
              <h2 className="font-display text-h3 font-semibold text-foreground text-shadow-drop">
                {t.duration}
              </h2>

              <p className="mt-2 text-foreground">{detailsContent.duration}</p>
            </section>

            <section className="sm:col-span-2">
              {details.prototypeUrl && (
                <a
                  href={details.prototypeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary mt-5"
                >
                  {t.viewPrototype}
                </a>
              )}

              {galleryImages.length > 0 && (
                <div className="mx-auto mt-10">
                  <CaseStudyGallery images={galleryImages} />
                </div>
              )}
            </section>
          </div>

          <div className="mx-auto w-3/5">
            <GradientDivider />
          </div>

          <section>
            <h2 className="font-display text-h3 font-semibold text-foreground text-shadow-drop">
              {t.company}
            </h2>

            <p className="mt-4 text-foreground">{detailsContent.company}</p>
          </section>

          <section>
            <h2 className="font-display text-h3 font-semibold text-foreground text-shadow-drop">
              {t.goal}
            </h2>

            <p className="mt-4 text-foreground">{detailsContent.goal}</p>
          </section>

          <section>
            <h2 className="font-display text-h3 font-semibold text-foreground text-shadow-drop">
              {t.targetAudience}
            </h2>

            <ul className="mt-6 space-y-5">
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

          <div className="mx-auto w-3/5">
            <GradientDivider />
          </div>

          {details.typography && (
            <section>
              <h2 className="font-display text-h3 font-semibold text-foreground text-shadow-drop">
                {t.typographyAndColors}
              </h2>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-cyan">{t.fontsUsed}</h3>

                  {details.typography.map((font) => (
                    <article className="my-8" key={`${font.name}-${font.weight}`}>
                      <h4
                        className="my-6 text-h2"
                        style={{
                          fontFamily: `"${font.name}", sans-serif`,
                          fontWeight: font.weight === 'Bold' ? 700 : 400,
                        }}
                      >
                        {font.name} {font.weight}
                      </h4>

                      <p
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

                {details.colors && (
                  <div>
                    <h3 className="font-semibold text-cyan">{t.colorsUsed}</h3>

                    <div className="mt-4 flex flex-wrap gap-4">
                      {details.colors.map((color) => (
                        <div key={color}>
                          <div
                            className="h-14 w-14 rounded-full border border-border"
                            style={{ backgroundColor: color }}
                          />

                          <p className="mt-2 text-xs">{color}</p>
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
              <h2 className="font-display text-h2">{t.objective}</h2>

              <p className="mt-4 text-foreground">{detailsContent.objective}</p>
            </section>
          )}

          {detailsContent.methodology && (
            <section>
              <h2 className="font-display text-h2">{t.methodology}</h2>

              <ul className="mt-4 space-y-2 text-foreground">
                {detailsContent.methodology.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {detailsContent.feedback && (
            <section>
              <h2 className="font-display text-h2 font-semibold">{t.feedback}</h2>

              <p className="mt-4 text-foreground">{detailsContent.feedback}</p>
            </section>
          )}

          {detailsContent.findings && (
            <section>
              <h2 className="font-display text-h2 font-semibold">{t.findings}</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
                {detailsContent.findings.map((finding) => (
                  <li key={finding}>{finding}</li>
                ))}
              </ul>
            </section>
          )}

          {detailsContent.recommendations && (
            <section>
              <h2 className="font-display text-h2 font-semibold">{t.recommendations}</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
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
