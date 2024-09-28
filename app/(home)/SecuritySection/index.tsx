'use client';

import { Button } from '@/components/ui/Button';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import gradientBall from '@/lib/constants/gradient-ball.json';
import Lottie from 'lottie-react';
import React, { ReactElement } from 'react';
import { SECURITY_DESCRIPTION } from './constants';

const SecuritySection = (): ReactElement => {
  return (
    <CardWrapper className="flex h-screen items-center justify-center">
      <Lottie animationData={gradientBall} loop={true} className="size-96 w-full" />
      <div>
        <Header title="Your Money" highlightedText="In Trusted Hands." />
        <p className="my-4">{SECURITY_DESCRIPTION}</p>
        <Button>Tell me more</Button>
      </div>
    </CardWrapper>
  );
};

export default SecuritySection;
