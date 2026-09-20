import { useLanguageStore, useT } from '@/stores/languageStore';
import { languageToggle } from '@/i18n/languageToggle';
import norwayFlag from '@/assets/emojione_flag-for-norway.svg';
import ukFlag from '@/assets/emojione_flag-for-united-kingdom.svg';

export function LanguageToggle() {
  const language = useLanguageStore((state) => state.language);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);
  const t = useT(languageToggle);

  const isEnglish = language === 'en';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.switchLabel}
      className="group relative inline-flex h-[21px] w-[45px] cursor-pointer items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
    >
      <span className="absolute inset-0 rounded-[11px] border border-[#fdf8e2] bg-[#fdf8e2] shadow-[inset_0px_4px_4px_var(--color-scrim-25)] group-focus-visible:shadow-[inset_0px_4px_4px_var(--color-scrim-25),0_0_0_2px_var(--color-focus),0px_4px_4px_var(--color-paper-25)]" />
      <span
        className={`absolute top-0 left-0 transition-transform duration-300 motion-reduce:transition-none ${
          isEnglish ? 'translate-x-[24px]' : 'translate-x-0'
        }`}
      >
        <img
          src={isEnglish ? ukFlag : norwayFlag}
          alt=""
          width={21}
          height={21}
          className="rounded-full shadow-[inset_0px_4px_4px_var(--color-scrim-25)]"
        />
      </span>
    </button>
  );
}
