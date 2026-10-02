import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { WhoIAm } from '@/components/home/WhoIAm';
import { PageTitle } from '@/components/layout/PageTitle';
import { Testimonials } from '@/components/testimonials/Testimonials';

function Home() {
  return (
    <>
      <PageTitle page="home" />
      <WhoIAm />
      <PortfolioPreview />
      <Testimonials />
    </>
  );
}

export default Home;
