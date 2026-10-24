import { useId } from 'react';

import { HeroHeading } from '@/components/home/HeroHeading';
import { ProfileCard } from '@/components/home/ProfileCard';
import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';

export function HomeHero() {
  const headingId = useId();

  return (
    <Section space="none" aria-labelledby={headingId} className="pt-20 pb-4 lg:pt-32 lg:pb-8">
      <PageContainer className="md:grid md:grid-cols-8 md:gap-x-5 lg:grid-cols-12 lg:gap-x-6">
        <HeroHeading headingId={headingId} className="md:col-span-8 lg:col-span-7 lg:self-center" />

        <div className="-mx-page-margin mt-20 md:hidden">
          <GradientDivider />
        </div>

        <ProfileCard className="mt-3 md:col-span-8 md:mt-12 lg:col-span-5 lg:mt-0 lg:self-start" />
      </PageContainer>
    </Section>
  );
}
