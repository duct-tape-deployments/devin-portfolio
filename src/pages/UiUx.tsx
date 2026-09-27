import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { PageContainer } from '@/components/layout/PageContainer';
import { caseStudies } from '@/data/caseStudies';

function UiUx() {
  return (
    <div className="relative overflow-hidden bg-background">
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

      <PageContainer className="pt-2.5 pb-12 relative">
        <header className="mb-8">
          <h1 className="title-gradient">UI/UX</h1>
        </header>

        <div className="grid gap-x-16 gap-y-20.5 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <PortfolioCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default UiUx;
