import React from 'react';
import Hero from '@/components/ui/Hero';
import FAQs from './FAQs';
import SignUp from './SignUp';
import ParallaxSection from './ParallaxSection';

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="bg-gradient-radial-lighter absolute left-0 top-[82.5vh] h-screen w-[110vw] -rotate-3 blur-xl" />
      <ParallaxSection />
      <FAQs />
      <SignUp />
    </div>
  );
};

export default Page;
