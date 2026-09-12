import { Link, Navigate, useParams } from 'react-router';

import { getCaseStudy } from '@/data/caseStudies';

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

  return (
    <main className="mx-auto w-full max-w-content px-gutter py-12">
      <Link
        to="/ui-ux"
        className="mb-8 inline-flex text-sm font-semibold text-accent hover:underline"
      >
        ← UI/UX
      </Link>

      <header className="mb-12">
        {caseStudy.projectName && (
          <p className="mb-2 font-display text-h2 font-bold text-accent">{caseStudy.projectName}</p>
        )}

        <p className="text-sm font-semibold text-muted-foreground">{caseStudy.category}</p>

        <h1 className="mt-2 max-w-3xl font-display text-h1 font-bold text-foreground">
          {caseStudy.title}
        </h1>

        <p className="mt-4 max-w-2xl text-body text-muted-foreground">{caseStudy.description}</p>
      </header>

      {caseStudy.image && (
        <img src={caseStudy.image} alt="" className="mb-12 w-full shadow-glow-image" />
      )}

      {!details ? (
        <p className="text-muted-foreground">Full case study content coming soon.</p>
      ) : (
        <div className="space-y-14">
          <div className="grid gap-8 sm:grid-cols-2">
            <section>
              <h2 className="font-display text-h3 font-semibold">Role</h2>
              <p className="mt-2 text-muted-foreground">{details.role}</p>
            </section>

            <section>
              <h2 className="font-display text-h3 font-semibold">Project Duration</h2>
              <p className="mt-2 text-muted-foreground">{details.duration}</p>
            </section>
          </div>

          <section>
            <h2 className="font-display text-h2 font-semibold">The Company</h2>
            <p className="mt-4 text-muted-foreground">{details.company}</p>
          </section>

          <section>
            <h2 className="font-display text-h2 font-semibold">The Goal</h2>
            <p className="mt-4 text-muted-foreground">{details.goal}</p>
          </section>

          <section>
            <h2 className="font-display text-h2 font-semibold">Target Audience</h2>
            <p className="mt-4 font-semibold">{details.targetAudience.ageRange}</p>
            <p className="text-muted-foreground">{details.targetAudience.description}</p>
          </section>

          {details.typography && (
            <section>
              <h2 className="font-display text-h2 font-semibold">Typography & Colors</h2>

              <div className="mt-6 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold">Fonts Used</h3>

                  <ul className="mt-3 space-y-2 text-muted-foreground">
                    {details.typography.map((font) => (
                      <li key={`${font.name}-${font.weight}`}>
                        {font.name} {font.weight}
                      </li>
                    ))}
                  </ul>
                </div>

                {details.colors && (
                  <div>
                    <h3 className="font-semibold">Colors Used</h3>

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
              <h2 className="font-display text-h2 font-semibold">Objective & Background</h2>
              <p className="mt-4 text-muted-foreground">{details.objective}</p>
            </section>
          )}

          {details.methodology && (
            <section>
              <h2 className="font-display text-h2 font-semibold">Methodology</h2>

              <ul className="mt-4 space-y-2 text-muted-foreground">
                {details.methodology.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {details.feedback && (
            <section>
              <h2 className="font-display text-h2 font-semibold">User Feedback</h2>
              <p className="mt-4 text-muted-foreground">{details.feedback}</p>
            </section>
          )}

          {details.findings && (
            <section>
              <h2 className="font-display text-h2 font-semibold">Findings</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                {details.findings.map((finding) => (
                  <li key={finding}>{finding}</li>
                ))}
              </ul>
            </section>
          )}

          {details.recommendations && (
            <section>
              <h2 className="font-display text-h2 font-semibold">Recommendations</h2>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                {details.recommendations.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </main>
  );
}

export default CaseStudy;
