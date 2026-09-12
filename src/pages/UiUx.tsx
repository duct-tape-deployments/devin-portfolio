import { PortfolioCard } from '@/components/portfolio/PortfolioCard';
import { PageContainer } from '@/components/layout/PageContainer';
import { caseStudies } from '@/data/caseStudies';

function UiUx() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[url('/images/background-shapes.png')]
          bg-[length:100%_auto]
          bg-top
          bg-repeat-y
          opacity-20"
      />

      <PageContainer className="py-12">
        <header className="mb-12">
          <h1 className="font-display text-h1 font-bold text-foreground">UI/UX</h1>
        </header>

        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <PortfolioCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default UiUx;
