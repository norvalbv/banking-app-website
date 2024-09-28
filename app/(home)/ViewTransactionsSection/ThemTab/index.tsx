'use client';

import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import Header from '@/components/ui/Header';
import React from 'react';

const ThemTab = () => {
  return (
    <div className="flex">
      <div className='w-1/2'>
        <DeviceWithCardPayment />
      </div>
      <div className='w-1/2 mt-10 px-10'>
        <Header title="Ensure You're" highlightedText="Always On Track" className='text-right'  />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quod neque assumenda
          voluptatem cupiditate perspiciatis optio dolor magni in et, voluptatibus suscipit aliquam
          laboriosam dicta delectus sunt nam minima consequatur.
        </p>
      </div>
    </div>
  );
};

export default ThemTab;
