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
          bg-[url('/images/background-shapes.png')]
          bg-[length:100%_auto]
          bg-top
          bg-repeat-y
          opacity-20
          z-10
          "
      />

      <PageContainer className="pt-2.5 pb-12 z-20 relative">
        <header className="mb-12">
          <h1 className="title-gradient">UI/UX</h1>
        </header>

        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <PortfolioCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default UiUx;
