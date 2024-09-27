import React from 'react';
import Hero from '@/components/ui/Hero';
import FAQs from './FAQs';
import SignUp from './SignUp';
import ParallaxSection from './ParallaxSection';
import KYCSection from './KYCSection';

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="absolute left-0 top-[82.5vh] w-full -rotate-3 overflow-x-hidden blur-xl">
        <div className="bg-gradient-radial-lighter h-screen w-[110vw]" />
      </div>
      <KYCSection />
      <div>Set alerts cards</div>
      <div>Combine cards - Add banks</div>
      <div>View Transactions (tab; what you'll see vs trusted party)</div>
      <ParallaxSection />
      <SignUp />
    </div>
  );
};

export default Page;
