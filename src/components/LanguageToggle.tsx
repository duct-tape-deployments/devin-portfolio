import { useLanguageStore } from '@/stores/languageStore';
import norwayFlag from '@/assets/emojione_flag-for-norway.svg';
import ukFlag from '@/assets/emojione_flag-for-united-kingdom.svg';

// TODO: Swap to design-system tokens once #3 done
const TRACK_COLOR = '#FDF8E2';
const INSET_SHADOW = 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)';

export function LanguageToggle() {
  const language = useLanguageStore((state) => state.language);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  const isEnglish = language === 'en';

  return (
    <label className="relative inline-flex h-[21px] w-[45px] cursor-pointer items-center">
      <input
        type="checkbox"
        role="switch"
        checked={isEnglish}
        onChange={toggleLanguage}
        aria-label={
          isEnglish ? 'English selected. Switch to Norwegian.' : 'Norsk valgt. Bytt til engelsk.'
        }
        className="peer sr-only"
      />
      <span
        className="absolute inset-0 rounded-[11px] border shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)] peer-focus-visible:shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25),0_0_0_2px_#EDEC18,0px_4px_4px_rgba(244,244,244,0.25)]"
        style={{ background: TRACK_COLOR, borderColor: TRACK_COLOR }}
      />
      <span className="absolute top-0 left-0 translate-x-0 transition-transform duration-300 peer-checked:translate-x-[24px]">
        <img
          src={isEnglish ? ukFlag : norwayFlag}
          alt=""
          width={21}
          height={21}
          className="rounded-full"
          style={{ boxShadow: INSET_SHADOW }}
        />
      </span>
    </label>
  );
}
