import type { Language } from '@/stores/languageStore';

export type Localized<T> = Record<Language, T>;

export function untranslated<T>(en: T): Localized<T> {
  return {
    en,
    no: en,
  };
}

export type LocalizedImage = {
  src: string;
  alt: Localized<string>;
};

export type ImageWithAlt = {
  src: string;
  alt: string;
};

export function localizeImage(image: LocalizedImage, language: Language): ImageWithAlt {
  return { src: image.src, alt: image.alt[language] };
}
