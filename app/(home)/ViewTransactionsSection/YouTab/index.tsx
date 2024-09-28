'use client';

import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import Header from '@/components/ui/Header';
import React from 'react';

const YouTab = () => {
  return (
    <div className="flex">
      <div className='w-1/2 mt-10 px-6 gap-10'>
        <Header title="View Your Transactions" highlightedText="In One Place"  />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quod neque assumenda
          voluptatem cupiditate perspiciatis optio dolor magni in et, voluptatibus suscipit aliquam
          laboriosam dicta delectus sunt nam minima consequatur.
        </p>
      </div>
      <div className='w-1/2'>
        <DeviceWithCardPayment />
      </div>
    </div>
  );
};

export default YouTab;
