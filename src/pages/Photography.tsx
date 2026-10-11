import { PhotographyCategorySection } from '@/components/photography/PhotographyCategorySection';
import { PageContainer, pageSpacing } from '@/components/layout/PageContainer';
import { PageTitle } from '@/components/layout/PageTitle';
import { photographyCategories } from '@/data/photographyCategories';
import { photographyLabels } from '@/i18n/photographyLabels';
import { useT } from '@/stores/languageStore';

function Photography() {
  const t = useT(photographyLabels);

  return (
    <div className="page-grid">
      <PageTitle page="photography" />
      <PageContainer className={pageSpacing}>
        <header className="mb-8">
          <h1 className="title-gradient">{t.title}</h1>
        </header>

        <div className="flex flex-col gap-12 lg:gap-16">
          {photographyCategories.map((category, index) => (
            <PhotographyCategorySection
              key={category.slug}
              category={category}
              priority={index === 0}
            />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}

export default Photography;
