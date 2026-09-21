import { ChevronDown } from 'lucide-react';

function Home() {
  return (
    <section className="bg-background">
      <h1>Home</h1>
      <p>yello.</p>
      {/* TEMP: Secondary button preview for fix-button-tokens. NB! Leaving it just for review*/}
      <button type="button" className="btn btn-outline mt-5">
        Download Resume
        <ChevronDown aria-hidden="true" />
      </button>
    </section>
  );
}

export default Home;
