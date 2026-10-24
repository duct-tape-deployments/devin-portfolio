import { useId } from 'react';

import { Section } from '@/components/layout/Section';
import type { VideoCategory } from '@/data/videoCategories';
import { useLanguageStore } from '@/stores/languageStore';

type VideoCategorySectionProps = {
  category: VideoCategory;
};

export function VideoCategorySection({ category }: VideoCategorySectionProps) {
  const language = useLanguageStore((state) => state.language);
  const titleId = useId();

  return (
    <Section space="none" aria-labelledby={titleId}>
      <h2 id={titleId} className="badge mb-8">
        {category.title[language]}
      </h2>

      <ul className="grid gap-y-12 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-16">
        {category.videos.map((video) => (
          <li key={video.slug}>
            <div className="aspect-square rounded-md bg-black shadow-glow-image" />

            <h3 className="mt-2 text-h5 leading-display font-bold text-foreground text-shadow-drop lg:text-h4">
              {video.title[language]}
            </h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}
