import React from 'react';
import Hero from '@/components/ui/Hero';
import SignUp from './SignUp';
import ParallaxSection from './ParallaxSection';
import KYCSection from './KYCSection';

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="absolute left-0 top-[82.5vh] w-full blur-xl">
        <div className="bg-gradient-radial-lighter h-screen" />
      </div>
      <KYCSection />
      <div>Set alerts cards</div>
      <div>Combine cards - Add banks</div>
      <div>View Transactions (tab; what you'll see vs trusted party)</div>
      <ParallaxSection />

      <div className="absolute bottom-0 left-0 w-full">
        <div className="bg-gradient-radial-lighter h-screen scale-y-[-1] blur-xl" />
        <div className="bg-gradient-radial h-screen w-[100vw] rotate-180 scale-x-[-1]" />
      </div>

      <SignUp />
    </div>
  );
};

export default Page;
