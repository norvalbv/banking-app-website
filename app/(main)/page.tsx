import DataSection from '@/components/ui/DataSection';
import Hero from '@/components/ui/Hero';
// import Example from '@/components/ui/Mockup';
import React from 'react';
import Datainput from './DataInput';
import FAQs from './FAQs';
import { Scroll } from 'lucide-react';

const Page = () => {
  return (
    <div className="h-screen">
      <Hero />
      <Datainput />
      <DataSection />
      <Scroll />
      <FAQs />
    </div>
  );
};

export default Page;
