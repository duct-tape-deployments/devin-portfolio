import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { PageContainer } from '@/components/layout/PageContainer';
import { caseStudies } from '@/data/caseStudies';

function UiUx() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 z-10
          bg-[url('/images/background-shapes.png')]
          bg-size-[1024px_auto]
          bg-top-left
          bg-repeat
          "
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-white/60 dark:bg-black/80"
      />

      <PageContainer className="pt-2.5 pb-12 z-20 relative">
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
