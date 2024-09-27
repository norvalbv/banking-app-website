import Card from '@/components/ui/Card';
import CardWrapper from '@/components/ui/CardWrapper';
import React, { ReactElement } from 'react';
import {
  VERIFY_IDENTITY_DESCRIPTION,
  TRUSTED_PARTY_DESCRIPTION,
  ALERTS_DESCRIPTION,
} from './constants';

const AccountSetupSteps = (): ReactElement => {
  return (
    <CardWrapper className="mx-auto flex h-screen flex-col items-center justify-center gap-10 lg:flex-row">
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
    </CardWrapper>
  );
};

export default AccountSetupSteps;
