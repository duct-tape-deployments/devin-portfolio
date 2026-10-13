import type { ComponentPropsWithRef } from 'react';

const baseClasses = 'mx-auto w-full max-w-content px-page-margin';

/** Padding for a page's first section, directly under the header: 10px top from the mobile frames up to `lg`, 80px from the desktop draft frame, bottom is design-system section padding */
export const pageSpacing = 'pt-2.5 pb-16 lg:pt-20 lg:pb-24';

export function PageContainer({ className, ...props }: ComponentPropsWithRef<'div'>) {
  return <div className={className ? `${baseClasses} ${className}` : baseClasses} {...props} />;
}
