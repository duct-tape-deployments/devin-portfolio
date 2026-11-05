import type { ReactNode } from 'react';

import { sectionHeading } from '@/components/portfolio/caseStudyStyles';

type LabelledSectionProps = {
  title: string;
  children: ReactNode;
};

/** Case study section: heading above the content, 4 + 8 grid columns from lg */
export function LabelledSection({ title, children }: LabelledSectionProps) {
  return (
    <section className="lg:grid lg:grid-cols-12 lg:gap-x-6">
      <h2 className={`${sectionHeading} lg:col-span-4`}>{title}</h2>

      <div className="mt-4 lg:col-span-8 lg:mt-0">{children}</div>
    </section>
  );
}
