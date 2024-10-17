import Card from '@/components/ui/Card';
import CardWrapper from '@/components/ui/CardWrapper';
import React, { ReactElement } from 'react';
import {
  VERIFY_IDENTITY_DESCRIPTION,
  TRUSTED_PARTY_DESCRIPTION,
  ALERTS_DESCRIPTION,
} from './constants';
import Header from '@/components/ui/Header';

const HowItWorks = (): ReactElement => {
  return (
    <CardWrapper className="mx-auto flex flex-col items-center justify-center" id="how-it-works">
      <Header title="How It" highlightedText="Works" inline className="mb-6 sm:mb-10" />
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 lg:flex-row">
        <Card
          cardKey="1."
          headerProps={{ title: 'Verify', highlightedText: 'Your Identity', size: 'md' }}
          paragraph={VERIFY_IDENTITY_DESCRIPTION}
        />
        <Card
          cardKey="2."
          headerProps={{ title: 'Trusted Party', highlightedText: 'Management', size: 'md' }}
          paragraph={TRUSTED_PARTY_DESCRIPTION}
        />
        <Card
          cardKey="3."
          headerProps={{ title: 'Spending', highlightedText: 'Alerts & Control', size: 'md' }}
          paragraph={ALERTS_DESCRIPTION}
        />
      </div>
    </CardWrapper>
  );
};

export default HowItWorks;
