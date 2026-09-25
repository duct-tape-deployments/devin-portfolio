import { PhotographyCategorySection } from '@/components/photography/PhotographyCategorySection';
import { PageContainer } from '@/components/layout/PageContainer';
import { photographyCategories } from '@/data/photographyCategories';
import { photographyLabels } from '@/i18n/photographyLabels';
import { useT } from '@/stores/languageStore';

function Photography() {
  const t = useT(photographyLabels);

  return (
    <div className="page-grid">
      <PageContainer className="pt-2.5 pb-10.25">
        <header className="mb-9.25">
          <h1 className="bg-gradient-text bg-clip-text font-display text-h1 font-bold text-transparent">
            {t.title}
          </h1>
        </header>

        <div className="flex flex-col gap-10.5">
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
