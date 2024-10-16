'use client';

import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import gradientBall from '@/lib/constants/gradient-ball.json';
import Lottie from 'lottie-react';
import React, { ReactElement } from 'react';
import { SECURITY_DESCRIPTION } from './constants';

const SecuritySection = (): ReactElement => {
  return (
    <CardWrapper className="flex min-h-screen flex-col items-center justify-center px-4 py-8 md:flex-row md:px-8">
      <Lottie
        animationData={gradientBall}
        loop={true}
        className="mb-8 w-full max-w-[18rem] md:mb-0 md:w-1/2 md:max-w-[24rem]"
      />
      <div className="w-full text-center md:w-1/2 md:text-left">
        <Header
          title="Your Money"
          highlightedText="In Trusted Hands."
          className="mb-4 md:mb-6 max-md:text-center"
          size="md"
        />
        <p className="mb-6 text-sm md:text-base">{SECURITY_DESCRIPTION}</p>
      </div>
    </CardWrapper>
  );
};

export default SecuritySection;
