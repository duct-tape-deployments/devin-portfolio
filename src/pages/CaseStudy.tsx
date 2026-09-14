import { Link, Navigate, useParams } from 'react-router';
import { PageContainer } from '@/components/layout/PageContainer';
import { getCaseStudy } from '@/data/caseStudies';
import { CaseStudyGallery } from '@/components/portfolio/CaseStudyGallery';
import { GradientDivider } from '@/components/interface/GradientDivider';

function CaseStudy() {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/ui-ux" replace />;
  }

  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return <Navigate to="/ui-ux" replace />;
  }

  const { details } = caseStudy;
  const heroImage = details?.heroImage ? details?.heroImage : details?.images?.[0];

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
          <h1 className="mb-2 font-display text-h1 font-bold block bg-gradient-text bg-clip-text text-transparent">
            {caseStudy.projectName}
          </h1>
        )}

        {heroImage && (
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="mb-12 w-full object-cover shadow-glow-image rounded-2xl aspect-video"
          />
        )}

        <p className="text-sm font-semibold bg-cyan text-foreground block w-fit rounded px-1">
          {caseStudy.category}
        </p>

        <h2 className="mt-2 max-w-3xl font-display text-h1 font-bold text-foreground text-shadow-drop">
          {caseStudy.title}
        </h2>

        <p className="mt-4 max-w-2xl text-body text-foreground">{caseStudy.description}</p>
      </header>

      {!details ? (
        <p className="text-foreground">Full case study content coming soon.</p>
      ) : (
        <div className="space-y-14">
          <div className="grid gap-8 sm:grid-cols-2">
            <section>
              <h2 className="font-display text-h3 font-semibold text-shadow-drop text-foreground">
                Role
              </h2>
              <p className="mt-2 text-foreground">{details.role}</p>
            </section>

            <section>
              <h2 className="font-display text-h3 font-semibold text-shadow-drop text-foreground">
                Project Duration
              </h2>
              <p className="mt-2 text-foreground">{details.duration}</p>
            </section>
            <section className="col-span-2">
              {details.prototypeUrl && (
                <a
                  href={details.prototypeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit mt-5 items-center gap-3 rounded-full
                            bg-gradient px-2 py-2.5
                            font-semibold text-btn-solid-foreground
                            shadow-btn transition
                            hover:bg-gradient-hover
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-focus"
                >
                  View Final Prototype
                </a>
              )}
              <div className="mt-10 mx-auto">
                {details.images?.length ? <CaseStudyGallery images={details.images} /> : null}
              </div>
            </section>
          </div>
          <div className="w-3/5 mx-auto">
            <GradientDivider />
          </div>
          <section>
            <h2 className="font-display text-h3 font-semibold text-shadow-drop text-foreground">
              The Company
            </h2>
            <p className="mt-4 text-foreground">{details.company}</p>
          </section>

          <section>
            <h2 className="font-display text-h3 font-semibold text-shadow-drop text-foreground">
              The Goal
            </h2>
            <p className="mt-4 text-foreground">{details.goal}</p>
          </section>

          <section>
            <h2 className="font-display text-h3 font-semibold text-shadow-drop text-foreground">
              Target Audience
            </h2>

            <ul className="mt-6 space-y-5">
              <li className="flex items-center gap-3 text-foreground">
                <span
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 rounded-full border-2 border-cyan"
                />

                <span>{details.targetAudience.ageRange}</span>
              </li>

              <li className="flex items-center gap-3 text-foreground">
                <span
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 rounded-full border-2 border-cyan"
                />

                <span>{details.targetAudience.description}</span>
              </li>
            </ul>
          </section>
          <div className="w-3/5 mx-auto">
            <GradientDivider />
          </div>
          {details.typography && (
            <section>
              <h2 className="font-display text-h3 font-semibold  text-shadow-drop text-foreground">
                Typography & Colors
              </h2>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-cyan">Fonts Used</h3>

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
                    <h3 className="font-semibold text-cyan">Colors Used</h3>

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

          {details.objective && (
            <section>
              <h2 className="font-display text-h2">Objective & Background</h2>
              <p className="mt-4 text-foreground">{details.objective}</p>
            </section>
          )}

          {details.methodology && (
            <section>
              <h2 className="font-display text-h2">Methodology</h2>

              <ul className="mt-4 space-y-2 text-foreground">
                {details.methodology.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {details.feedback && (
            <section>
              <h2 className="font-display text-h2 font-semibold">User Feedback</h2>
              <p className="mt-4 text-foreground">{details.feedback}</p>
            </section>
          )}

          {details.findings && (
            <section>
              <h2 className="font-display text-h2 font-semibold">Findings</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
                {details.findings.map((finding) => (
                  <li key={finding}>{finding}</li>
                ))}
              </ul>
            </section>
          )}

          {details.recommendations && (
            <section>
              <h2 className="font-display text-h2 font-semibold">Recommendations</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-foreground">
                {details.recommendations.map((recommendation) => (
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
