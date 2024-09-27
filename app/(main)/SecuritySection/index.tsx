import { Button } from '@/components/ui/Button';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import React, { ReactElement } from 'react';

const SecuritySection = (): ReactElement => {
  return (
    <CardWrapper className="h-screen flex items-center">
      <Header title='Your Money' highlightedText='In Trusted Hands.' />
      <Button>Tell me more</Button>
    </CardWrapper>
  );
};

export default SecuritySection;
