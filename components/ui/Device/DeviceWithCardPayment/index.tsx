import React from 'react';
import Device from '..';
import Lottie from 'lottie-react';
import payConfirm from '@/lib/constants/pay-confirm.json';
import BankCard from '../../BankCard';

const DeviceWithCardPayment = () => {
  return (
    <Device>
      <div className="mx-2 mt-28">
        <BankCard size="small" />
      </div>
      <Lottie
        animationData={payConfirm}
        loop={true}
        className="mt-24 flex size-12 w-full items-center justify-center 2xl:size-16"
      />
    </Device>
  );
};

export default DeviceWithCardPayment;
