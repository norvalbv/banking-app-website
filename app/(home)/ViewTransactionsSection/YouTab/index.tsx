'use client';

import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import Header from '@/components/ui/Header';
import { Badge } from 'lucide-react';
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
      <Badge className="absolute -left-28 -bottom-28 size-64 text-gray-100" strokeWidth={0.5} />
      <Badge className="absolute -left-32 -bottom-32 size-64 text-gray-200" strokeWidth={0.5} />
      <Badge className="absolute -left-36 -bottom-36 size-64 text-gray-300" strokeWidth={0.5} />
    </div>
  );
};

export default YouTab;
