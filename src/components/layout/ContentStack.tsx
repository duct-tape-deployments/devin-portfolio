import type { ComponentPropsWithRef } from 'react';

const baseClasses = 'flex flex-col gap-8';

export function ContentStack({ className, ...props }: ComponentPropsWithRef<'div'>) {
  return <div className={className ? `${baseClasses} ${className}` : baseClasses} {...props} />;
}
