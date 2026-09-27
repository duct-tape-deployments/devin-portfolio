type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const classes = ['-mr-1.5 -mb-2.25 h-12.25 w-auto max-w-none', className]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <img src="/header-logo-light.svg" alt="" className={`${classes} dark:hidden`} />
      <img src="/header-logo-dark.svg" alt="" className={`${classes} hidden dark:block`} />
    </>
  );
}
