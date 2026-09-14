import { MoonStar, Sun } from 'lucide-react';
import { themeToggle } from '@/i18n/themeToggle';
import { useT } from '@/stores/languageStore';
import { useThemeStore } from '@/stores/themeStore';

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const t = useT(themeToggle);

  const isDark = theme === 'dark';

  return (
    <label className="relative inline-flex h-[22px] w-[45px] cursor-pointer items-center">
      <input
        type="checkbox"
        role="switch"
        checked={isDark}
        onChange={toggleTheme}
        aria-label={t.switchLabel}
        className="peer sr-only"
      />

      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-toggle-track
          shadow-glow-toggle
          peer-focus-visible:outline-2
          peer-focus-visible:outline-offset-2
          peer-focus-visible:outline-focus
        "
      />

      <span
        className="
          absolute
          top-px
          left-0
          flex
          h-[20px]
          w-[23px]
          translate-x-0
          items-center
          justify-center
          rounded-full
          bg-toggle-knob
          text-toggle-icon
          transition-transform
          duration-300
          peer-checked:translate-x-[21px]
          motion-reduce:transition-none
        "
      >
        {isDark ? (
          <MoonStar aria-hidden="true" strokeWidth={1.5} className="size-[16px]" />
        ) : (
          <Sun aria-hidden="true" strokeWidth={1.5} className="size-[16px]" />
        )}
      </span>
    </label>
  );
}
