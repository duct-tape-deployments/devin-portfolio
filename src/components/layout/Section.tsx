import type { ComponentPropsWithRef } from 'react';

/** `default` 128px between sections · `tight` 72px · `none` for a page's first section or places needing to set their own spacing (e.g images) */
const spacing = {
  default: 'py-16 lg:py-20',
  tight: 'py-9 lg:py-12',
  none: '',
} as const;

type SectionProps = ComponentPropsWithRef<'section'> & {
  space?: keyof typeof spacing;
};

export function Section({ space = 'default', className, ...props }: SectionProps) {
  const classes = [spacing[space], className].filter(Boolean).join(' ');
  return <section className={classes} {...props} />;
}
