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
    <CardWrapper className="flex h-screen flex-col items-center justify-center md:flex-row">
      <Lottie animationData={gradientBall} loop={true} className="size-72 md:size-96 flex-1" />
      <div className='flex-1'>
        <Header title="Your Money" highlightedText="In Trusted Hands." />
        <p className="my-4">{SECURITY_DESCRIPTION}</p>
        <Button>Tell me more</Button>
      </div>
    </CardWrapper>
  );
};

export default SecuritySection;
