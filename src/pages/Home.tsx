import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { WhoIAm } from '@/components/home/WhoIAm';
import { Testimonials } from '@/components/testimonials/Testimonials';

function Home() {
  return (
    <>
      <WhoIAm />
      <PortfolioPreview />
      <Testimonials />
    </>
  );
}

export default Home;
