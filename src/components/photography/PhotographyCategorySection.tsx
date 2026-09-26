import { useId } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

import { Section } from '@/components/layout/Section';
import { routes } from '@/config/navigation';
import type { PhotographyCategory } from '@/data/photographyCategories';
import { photographyLabels } from '@/i18n/photographyLabels';
import { useLanguageStore, useT } from '@/stores/languageStore';

import { PhotoCarousel } from './PhotoCarousel';

type PhotographyCategorySectionProps = {
  category: PhotographyCategory;
  priority?: boolean;
};

export function PhotographyCategorySection({
  category,
  priority = false,
}: PhotographyCategorySectionProps) {
  const language = useLanguageStore((state) => state.language);
  const t = useT(photographyLabels);
  const title = category.title[language];

  const titleId = useId();
  const images = category.images.map((image) => ({ src: image.src, alt: image.alt[language] }));

  return (
    <Section space="none" aria-labelledby={titleId} className="flex flex-col">
      <h2 id={titleId} className="badge mb-9">
        {title}
      </h2>

      <PhotoCarousel
        images={images}
        label={t.photos(title)}
        previousLabel={t.previousImage(title)}
        nextLabel={t.nextImage(title)}
        priority={priority}
      />

      <Link to={`${routes.photography}/${category.slug}`} className="btn btn-primary mt-3.75 w-fit">
        {t.viewAll}
        <span className="sr-only"> {t.viewAllCategory(title)}</span>

        <ChevronRight className="size-6" aria-hidden="true" />
      </Link>
    </Section>
  );
}
