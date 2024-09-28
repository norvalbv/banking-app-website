'use client';

import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import Header from '@/components/ui/Header';
import { Badge } from 'lucide-react';
import React from 'react';

const ThemTab = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2">
        <DeviceWithCardPayment />
      </div>
      <div className="mt-10 gap-10 md:w-1/2 md:m-0 mb-6">
        <Header title="Ensure You're" highlightedText="Always On Track" className="md:text-right" />
        <p className="md:text-right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quod neque assumenda
          voluptatem cupiditate perspiciatis optio dolor magni in et, voluptatibus suscipit aliquam
          laboriosam dicta delectus sunt nam minima consequatur.
        </p>
      </div>
      <Badge
        className="absolute -bottom-28 -right-28 -z-10 size-64 text-gray-100"
        strokeWidth={0.5}
      />
      <Badge
        className="absolute -bottom-32 -right-32 -z-10 size-64 text-gray-200"
        strokeWidth={0.5}
      />
      <Badge
        className="absolute -bottom-36 -right-36 -z-10 size-64 text-gray-300"
        strokeWidth={0.5}
      />
    </div>
  );
};

export default ThemTab;
