'use client';

import { Button } from '@/components/ui/button';
import { smoothScrollTo } from '@/lib/utils';
import { Download } from 'lucide-react';
import React from 'react';
import CardWrapper from '../CardWrapper';
import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <div className="flex h-screen flex-grow flex-col items-center justify-center p-6 bg-gradient-to-br from-black via-slate-900 to-slate-800">
      <CardWrapper className='text-white text-center'>
        <h1 className="text-navy-900 mb-4 font-extrabold md:text-9xl">
          Take Control<br /><span className='text-purple-500'>
             of Your Finances
            </span>
        </h1>
        <p className="mx-auto mb-8 max-w-md text-gray-400">
          Achieve financial peace of mind with trusted oversight. Whether you&apos;re managing
          spending limits or getting help from a trusted party, our app ensures your financial
          health is secured.
        </p>
        <Button
          className="rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-600"
          onClick={() => smoothScrollTo('launch-schedule', 2000)}
        >
          <Download className="mr-2 h-4 w-4" /> Learn More
        </Button>
      </CardWrapper>
      <HeroBackground />
    </div>
  );
};

export default Hero;
