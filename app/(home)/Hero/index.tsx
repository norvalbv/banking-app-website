'use client';

import { Button } from '@/components/ui/Button';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import { smoothScrollTo } from '@/lib/utils';
import { ArrowDownToLine, MoveRight } from 'lucide-react';
import React, { ReactElement } from 'react';

const Hero = (): ReactElement => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="bg-gradient-radial absolute inset-0 bg-line-mask bg-cover bg-center bg-no-repeat opacity-50" />
      <CardWrapper className="relative z-10 flex h-full flex-col justify-center">
        <div className="mb-4 flex items-center gap-6">
          <div className="h-0.5 w-20 rounded-lg bg-gray-800 sm:w-32" />
          <p className="text-xs font-bold 2xl:text-sm">Start Your Journey</p>
        </div>
        <Header
          title="Take Control"
          highlightedText="of Your Finances"
          size="xl"
          as="h1"
          className="mb-4"
        />
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
