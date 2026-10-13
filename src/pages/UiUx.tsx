import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { PageContainer, pageSpacing } from '@/components/layout/PageContainer';
import { PageTitle } from '@/components/layout/PageTitle';
import { caseStudies } from '@/data/caseStudies';

function UiUx() {
  return (
    <div className="relative overflow-hidden bg-background">
      <PageTitle page="uiUx" />
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(var(--color-pattern-wash),var(--color-pattern-wash)),url('/images/background-shapes.png')]
          bg-size-[auto,1024px_auto]
          bg-top-left
          bg-repeat
          "
      />

      <PageContainer className={`relative ${pageSpacing}`}>
        <header className="mb-8">
          <h1 className="title-gradient">UI/UX</h1>
        </header>

        <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-16">
          {caseStudies.map((caseStudy) => (
            <PortfolioCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default UiUx;
