import { PageContainer } from '@/components/layout/PageContainer';
import { aboutMe } from '@/i18n/aboutMe';
import { useT } from '@/stores/languageStore';

function About() {
  const t = useT(aboutMe);

  return (
    <PageContainer className="pt-2.5 pb-16 lg:pb-24">
      <header className="mb-4">
        <h1 className="title-gradient">{t.title}</h1>
      </header>

      <div
        lang={t.proseLang}
        className="flex flex-col gap-4 sm:grid sm:grid-cols-8 sm:items-start sm:gap-x-5 lg:grid-cols-12 lg:gap-x-6"
      >
        <div className="flex items-center justify-between gap-4 sm:col-span-3 sm:flex-col-reverse sm:items-start sm:justify-start sm:gap-6 lg:col-span-4">
          <p className="w-41.75 whitespace-pre-line">{t.intro}</p>

          <img
            src="/images/devin-about.jpg"
            alt={t.photoAlt}
            width={141}
            height={141}
            className="size-35.25 shrink-0 rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 sm:col-span-5 lg:col-span-8">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default About;
