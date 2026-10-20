import type { ComponentPropsWithRef } from 'react';

/**
 * `default` design-system section padding, 64px mobile, 96px desktop: top only, so two sections are one padding apart, plus bottom on the last section before the footer (`last:` assumes sections are direct siblings in <main>)
 * · `hero` 80px mobile, 128px desktop, top only like `default`
 * · `none` for places that set their own spacing (a page's first section uses `pageSpacing`)
 */
const spacing = {
  default: 'pt-16 lg:pt-24 last:pb-16 lg:last:pb-24',
  hero: 'pt-20 lg:pt-32',
  none: '',
} as const;

type SectionProps = ComponentPropsWithRef<'section'> & {
  space?: keyof typeof spacing;
};

export function Section({ space = 'default', className, ...props }: SectionProps) {
  const classes = [spacing[space], className].filter(Boolean).join(' ');
  return <section className={classes} {...props} />;
}
