import { PageContainer, pageSpacing } from '@/components/layout/PageContainer';
import { PageTitle } from '@/components/layout/PageTitle';
import { aboutMe } from '@/i18n/aboutMe';
import { useT } from '@/stores/languageStore';

function About() {
  const t = useT(aboutMe);

  return (
    <PageContainer className={pageSpacing}>
      <PageTitle page="about" />
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-8 sm:items-start sm:gap-x-5 lg:grid-cols-[167px_35rem] lg:justify-center lg:gap-x-16">
        <header className="sm:col-span-full">
          <h1 className="title-gradient">{t.title}</h1>
        </header>

        <div
          lang={t.proseLang}
          className="flex items-center justify-between gap-4 sm:col-span-3 sm:flex-col-reverse sm:items-start sm:justify-start sm:gap-6 lg:col-span-1"
        >
          <p className="w-41.75 whitespace-pre-line">{t.intro}</p>

          <img
            src="/images/devin-about.jpg"
            alt={t.photoAlt}
            width={141}
            height={141}
            className="size-35.25 shrink-0 rounded-full object-cover"
          />
        </div>

        <div lang={t.proseLang} className="flex flex-col gap-4 sm:col-span-5 lg:col-span-1">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default About;
