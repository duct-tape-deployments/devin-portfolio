import { useId } from 'react';

import { HeroHeading } from '@/components/home/HeroHeading';
import { ProfileCard } from '@/components/home/ProfileCard';
import { GradientDivider } from '@/components/interface/GradientDivider';
import { PageContainer } from '@/components/layout/PageContainer';
import { Section } from '@/components/layout/Section';

/** buttons -> divider 48, divider -> photo 12 */
export function HomeHero() {
  const headingId = useId();

  return (
    <Section space="hero" aria-labelledby={headingId}>
      <PageContainer>
        <HeroHeading headingId={headingId} />
      </PageContainer>

      <GradientDivider className="mt-12" />

      <PageContainer className="mt-3">
        <ProfileCard />
      </PageContainer>
    </Section>
  );
}
