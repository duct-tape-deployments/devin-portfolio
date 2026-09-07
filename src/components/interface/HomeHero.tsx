import { DownArrow } from './DownArrow';

export function HomeHero() {
  return (
    <section className="bg-background px-1 py-8 text-left" aria-labelledby="home-hero-title">
      <div className="mx-auto w-full max-w-[900px] text-left place-items-center">
        <h1
          id="home-hero-title"
          className="max-w-[680px] text-display leading-display font-black tracking-[0.02em]"
        >
          <span className="block bg-gradient-text bg-clip-text text-transparent text-shadow-drop">
            CRAFTING
          </span>
          <span className="block text-shadow-drop">
            THE{' '}
            <span className="relative inline-block text-shadow-drop/20">
              <span
                aria-hidden="true"
                className="absolute -top-0.5 right-1 text-cyan text-shadow-drop/0"
              >
                FUTURE
              </span>
              <span className="relative -left-0.5 bg-text-noise bg-clip-text text-pink-500">
                FUTURE
              </span>
            </span>
          </span>
          <span className="block text-shadow-drop">FOR UX/UI</span>
        </h1>

        <div className="mt-10 flex flex-wrap gap-4 pl-5">
          <a
            href="/contact"
            className="group relative inline-flex h-[42px] w-[126px] shrink-0 items-center justify-between overflow-hidden rounded-full bg-gradient px-2 text-label font-bold text-foreground-inverse shadow-btn transition-[box-shadow,transform] duration-300 ease-in-out hover:scale-[1.02] active:shadow-pressed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-hover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
            <span className="relative z-10 flex w-full items-center justify-between">
              Let&apos;s Talk
              <span aria-hidden="true" className="pr-1 text-3xl leading-none font-light">
                ›
              </span>
            </span>
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex h-[42px] w-[200px] shrink-0 items-center px-2 justify-between rounded-full border-1 border-cyan bg-btn-solid  text-label font-bold text-btn-solid-foreground shadow-soft transition-[background-image,box-shadow,transform] hover:scale-[1.02] active:shadow-pressed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
          >
            Download Resume
            <DownArrow />
          </a>
        </div>
      </div>
    </section>
  );
}
