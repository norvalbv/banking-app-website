import Card from '@/components/ui/Card';
import CardWrapper from '@/components/ui/CardWrapper';
import React from 'react';

const KYCSection = () => {
  return (
    <CardWrapper className="mx-auto flex flex-col items-center justify-center gap-10 lg:flex-row">
      <Card cardKey="1." />
      <Card cardKey="2." />
      <Card cardKey="3." />
    </CardWrapper>
  );
};

export default KYCSection;
