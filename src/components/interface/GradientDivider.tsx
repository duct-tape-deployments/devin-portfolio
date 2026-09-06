import type { ComponentPropsWithRef } from 'react';

export function GradientDivider({ className, ...props }: ComponentPropsWithRef<'div'>) {
  const classes = ['h-px w-full bg-gradient-divider', className].filter(Boolean).join(' ');

  return <div aria-hidden="true" className={classes} {...props} />;
}
