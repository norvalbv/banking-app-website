'use client';

import { smoothScrollTo } from '@/lib/utils';
import { ArrowDownToLine, MoveRight } from 'lucide-react';
import React, { ReactElement } from 'react';
import CardWrapper from '../CardWrapper';
import { Button } from '../Button';

const Hero = (): ReactElement => {
  return (
    <div className="relative h-screen">
      <div className="bg-gradient-radial absolute inset-0 bg-line-mask bg-cover bg-center bg-no-repeat opacity-90" />
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
        <div className="flex items-center gap-4">
          <Button onClick={() => smoothScrollTo('launch-schedule', 2000)} icon={ArrowDownToLine}>
            Learn More
          </Button>
          <Button
            onClick={() => smoothScrollTo('launch-schedule', 2000)}
            variant="ghost"
            icon={MoveRight}
            iconPosition="right"
          >
            Pre Register
          </Button>
        </div>
      </CardWrapper>
    </div>
  );
};

export default Hero;
