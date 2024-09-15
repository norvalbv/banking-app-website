import DataSection from '@/components/ui/DataSection';
import Hero from '@/components/ui/Hero';
// import Example from '@/components/ui/Mockup';
import React from 'react';
import Datainput from './DataInput';
import FAQs from './FAQs';
import SignUp from './SignUp';

const Page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Datainput />
      <DataSection />
      <FAQs />
      <SignUp />
    </div>
  );
};

export default Page;
