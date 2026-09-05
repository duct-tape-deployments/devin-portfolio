import type { ComponentPropsWithRef } from 'react';

const baseClasses = 'mx-auto w-full max-w-content px-gutter';

export function PageContainer({ className, ...props }: ComponentPropsWithRef<'div'>) {
  return <div className={className ? `${baseClasses} ${className}` : baseClasses} {...props} />;
}
