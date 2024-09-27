import React from 'react';
import Hero from '@/components/ui/Hero';
import PreRegister from './PreRegister';
import ParallaxSection from './ParallaxSection';
import AccountSetupSteps from './AccountSetupSteps';
import CombineCards from './CombineCards';

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="absolute left-0 top-[82.5vh] w-full blur-xl">
        <div className="bg-gradient-radial-lighter h-screen" />
      </div>
      <AccountSetupSteps />
      <CombineCards />
      <div>Set up alerts</div>
      <div>View Transactions (tab; what you&apos;ll see vs trusted party)</div>
      <ParallaxSection />
      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-gradient-radial-lighter h-screen scale-y-[-1] blur-xl" />
        <div className="bg-gradient-radial h-screen w-[100vw] rotate-180 scale-x-[-1]" />
      </div>
      <PreRegister />
    </div>
  );
};

export default Page;
