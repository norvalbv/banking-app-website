import React from 'react';
import Hero from '@/components/ui/Hero';
import FAQs from './FAQs';
import SignUp from './SignUp';
import ParallaxSection from './ParallaxSection';

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <ParallaxSection />
      <FAQs />
      <SignUp />
    </div>
  );
};

export default Page;
