import { PageContainer, pageSpacing } from '@/components/layout/PageContainer';
import { PageTitle } from '@/components/layout/PageTitle';
import { VideoCategorySection } from '@/components/videography/VideoCategorySection';
import { videoCategories } from '@/data/videoCategories';
import { videographyLabels } from '@/i18n/videographyLabels';
import { useT } from '@/stores/languageStore';

function Videography() {
  const t = useT(videographyLabels);

  return (
    <div className="page-grid">
      <PageTitle page="videography" />
      <PageContainer className={pageSpacing}>
        <header className="mb-8">
          <h1 className="title-gradient">{t.title}</h1>
        </header>

        <div className="flex flex-col gap-12 lg:gap-16">
          {videoCategories.map((category) => (
            <VideoCategorySection key={category.slug} category={category} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default Videography;
