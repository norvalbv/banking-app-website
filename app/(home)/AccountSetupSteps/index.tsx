import Card from '@/components/ui/Card';
import CardWrapper from '@/components/ui/CardWrapper';
import React, { ReactElement } from 'react';
import {
  VERIFY_IDENTITY_DESCRIPTION,
  TRUSTED_PARTY_DESCRIPTION,
  ALERTS_DESCRIPTION,
} from './constants';
import Header from '@/components/ui/Header';

const AccountSetupSteps = (): ReactElement => {
  return (
    <CardWrapper className="mx-auto flex flex-col items-center justify-center">
      <Header title="How It" highlightedText="Works" inline className="mb-6 sm:mb-10" />
      <div className="flex flex-col items-center justify-center lg:flex-row gap-6 md:gap-10">
        <Card
          cardKey="1."
          headerProps={{ title: 'Verify', highlightedText: 'Your Identity', size: 'sm' }}
          paragraph={VERIFY_IDENTITY_DESCRIPTION}
        />
        <Card
          cardKey="2."
          headerProps={{ title: 'Trusted Party', highlightedText: 'Management', size: 'sm' }}
          paragraph={TRUSTED_PARTY_DESCRIPTION}
        />
        <Card
          cardKey="3."
          headerProps={{ title: 'Spending', highlightedText: 'Alerts & Control', size: 'sm' }}
          paragraph={ALERTS_DESCRIPTION}
        />
      </div>
    </CardWrapper>
  );
};

export default AccountSetupSteps;
