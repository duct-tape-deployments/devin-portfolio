import type { ComponentPropsWithRef } from 'react';

const baseClasses = 'mx-auto w-full max-w-content px-gutter';

/** Padding for a page's first section, directly under the header: 10px from the mobile frames up to `lg`, then design-system section padding */
export const pageSpacing = 'pt-2.5 pb-16 lg:py-24';

export function PageContainer({ className, ...props }: ComponentPropsWithRef<'div'>) {
  return <div className={className ? `${baseClasses} ${className}` : baseClasses} {...props} />;
}
