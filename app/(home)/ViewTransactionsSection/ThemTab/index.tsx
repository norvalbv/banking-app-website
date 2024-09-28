'use client';

import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import Header from '@/components/ui/Header';
import React from 'react';

const ThemTab = () => {
  return (
    <div className="flex">
      <DeviceWithCardPayment />
      <Header title="View Your Transactions" highlightedText="In One Place" />
    </div>
  );
};

export default ThemTab;
