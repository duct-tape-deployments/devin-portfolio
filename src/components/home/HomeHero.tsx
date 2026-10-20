import { useId } from 'react';

import { HeroHeading } from '@/components/home/HeroHeading';
import { ProfileCard } from '@/components/home/ProfileCard';
import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';

/**
 * Hero padding, 80px mobile / 128px desktop: above and below the heading block, and
 * below the hero. The bottom is only 16/32 because the next section adds its own 64/96 top.
 */
export function HomeHero() {
  const headingId = useId();

  return (
    <Section space="none" aria-labelledby={headingId} className="pt-20 pb-4 lg:pt-32 lg:pb-8">
      <PageContainer>
        <HeroHeading headingId={headingId} />
      </PageContainer>

      <GradientDivider className="mt-20 lg:mt-32" />

      <PageContainer className="mt-3">
        <ProfileCard />
      </PageContainer>
    </Section>
  );
}
