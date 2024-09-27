import React from 'react';
import Device from '..';
import Lottie from 'lottie-react';
import payFail from '@/lib/constants/pay-fail.json';
import BankCard from '../../BankCard';

const DeviceWithCardPaymentFail = () => {
  return (
    <Device>
      <div className="mx-2 mt-28">
        <BankCard size="small" />
      </div>
      <Lottie
        animationData={payFail}
        className="mt-24 flex size-16 w-full items-center justify-center"
      />
    </Device>
  );
};

export default DeviceWithCardPaymentFail;
