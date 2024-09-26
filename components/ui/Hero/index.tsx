'use client';

import { Button } from '@/components/ui/button';
import { smoothScrollTo } from '@/lib/utils';
import { Download } from 'lucide-react';
import React from 'react';
import CardWrapper from '../CardWrapper';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-gradient-radial absolute inset-0 bg-line-mask bg-cover bg-center bg-no-repeat" />
      <CardWrapper className="relative z-10 flex h-full flex-col justify-center">
        <h1 className="mb-4 font-extrabold md:text-9xl">
          Take Control
          <br />
          <span className="text-rose-500">of Your Finances</span>
        </h1>
        <p className="mb-8 max-w-md">
          Achieve financial peace of mind with trusted oversight. Whether you&apos;re managing
          spending limits or getting help from a trusted party, our app ensures your financial
          health is secured.
        </p>
        <Button onClick={() => smoothScrollTo('launch-schedule', 2000)}>
          <Download className="mr-2 h-4 w-4" /> Learn More
        </Button>
      </CardWrapper>
    </div>
  );
};

export default Hero;
