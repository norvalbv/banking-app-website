'use client';

import React, { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

const Device = ({ children }: Props) => {
  return (
    <div className="relative mx-auto h-[660px] w-[320px] rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800">
      <div className="absolute -start-[11px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -start-[11px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -start-[11px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -end-[11px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute h-full w-full rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 rounded-[30px] bg-white">{children}</div>
      </div>
    </div>
  );
};

export default Device;
