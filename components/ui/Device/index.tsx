'use client';

import React from 'react';
import Lottie from 'lottie-react';
import payConfirm from '@/lib/constants/pay-confirm.json';
import BankCard from '../BankCard';

const Device = () => {
  return (
    <div className="relative mx-auto h-[660px] w-[340px] rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800">
      <div className="absolute -start-[11px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -start-[11px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -start-[11px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -end-[11px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute h-full w-full rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 rounded-[30px] bg-white">
          <div className="mx-2 mt-28">
            <BankCard />
          </div>
          <Lottie
            animationData={payConfirm}
            loop={true}
            className="mt-24 flex size-16 w-full items-center justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Device;
