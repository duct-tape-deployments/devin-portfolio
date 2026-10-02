import { getTranslations } from '@/i18n/translations';
import type { NavigationLabelKey } from '@/i18n/translations';
import { useLanguageStore } from '@/stores/languageStore';
import type { Language } from '@/stores/languageStore';

const siteName = 'XE Design';

type PageTitleProps = { page: NavigationLabelKey } | { name: string };

/**
 * Sets the browser tab title to "<page> – XE Design" (the home page gets just "XE Design").
 * React 19 hoists the <title> into <head>.
 *
 * @example
 * <PageTitle page="about" />
 * <PageTitle name={caseStudy.projectName ?? content.title} />
 */
export function PageTitle(props: PageTitleProps) {
  const language = useLanguageStore((state) => state.language);
  const name = getPageName(props, language);

  return <title>{name ? `${name} – ${siteName}` : siteName}</title>;
}

function getPageName(props: PageTitleProps, language: Language) {
  if ('name' in props) return props.name;
  if (props.page === 'home') return undefined;
  return getTranslations(language).navigation[props.page];
}
