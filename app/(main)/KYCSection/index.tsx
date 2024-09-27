import Card from '@/components/ui/Card';
import CardWrapper from '@/components/ui/CardWrapper';
import React, { ReactElement } from 'react';
import { VERIFY_IDENTITY_DESCRIPTION, TRUSTED_PARTY_DESCRIPTION, ALERTS_DESCRIPTION } from './constants';

const KYCSection = (): ReactElement => {
  return (
    <CardWrapper className="mx-auto h-screen flex flex-col items-center justify-center gap-10 lg:flex-row">
      <Card
        cardKey="1."
        headerProps={{ title: "Verify", highlightedText: "Your Identity" }}
        paragraph={VERIFY_IDENTITY_DESCRIPTION}
      />
      <Card
        cardKey="2."
        headerProps={{ title: "Trusted Party", highlightedText: "Management" }}
        paragraph={TRUSTED_PARTY_DESCRIPTION}
      />
      <Card
        cardKey="3."
        headerProps={{ title: "Spending", highlightedText: "Alerts & Control" }}
        paragraph={ALERTS_DESCRIPTION}
      />
    </CardWrapper>
  );
};

export default KYCSection;
