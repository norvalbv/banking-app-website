'use client';

import React from 'react';
import Hero from '@/app/(home)/Hero';
import PreRegister from './PreRegister';
import AlertsSection from './AlertsSection';
import AccountSetupSteps from './AccountSetupSteps';
import CombineCards from './CombineCards';
import SecuritySection from './SecuritySection';
import FinanceOverview from './FinanceOverview';

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="absolute left-0 top-[82.5vh] w-full blur-xl">
        <div className="bg-gradient-radial-lighter h-screen" />
      </div>
      <AccountSetupSteps />
      <CombineCards />
      <FinanceOverview />
      <AlertsSection />
      <SecuritySection />
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-gradient-radial-lighter h-screen scale-y-[-1] blur-xl" />
        <div className="bg-gradient-radial h-screen w-[100vw] rotate-180 scale-x-[-1]" />
      </div>
      <PreRegister />
    </div>
  );
};

export default Page;
