'use client';

import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import Header from '@/components/ui/Header';
import React from 'react';

const YouTab = () => {
  return (
    <div className="flex">
      <Header title="View Your Transactions" highlightedText="In One Place" />
      <DeviceWithCardPayment />
    </div>
  );
};

export default YouTab;
