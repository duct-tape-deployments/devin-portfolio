import type { ComponentPropsWithRef } from 'react';

/** `default` design-system section padding: 64px mobile, 96px desktop · `hero` 80px mobile, 128px desktop · `none` for places that set their own spacing (a page's first section uses `pageSpacing`) */
const spacing = {
  default: 'py-16 lg:py-24',
  hero: 'py-20 lg:py-32',
  none: '',
} as const;

type SectionProps = ComponentPropsWithRef<'section'> & {
  space?: keyof typeof spacing;
};

export function Section({ space = 'default', className, ...props }: SectionProps) {
  const classes = [spacing[space], className].filter(Boolean).join(' ');
  return <section className={classes} {...props} />;
}
