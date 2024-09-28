'use client';

import React, { ReactElement } from 'react';
import { cx } from 'class-variance-authority';

type Props = {
  children: ReactElement | ReactElement[];
  variant?: 'light' | 'dark';
};

const Device = ({ children, variant = 'light' }: Props): ReactElement => {
  return (
    <div className="relative mx-auto h-[440px] w-[220px] rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800 sm:h-[500px] sm:w-[250px] 2xl:h-[660px] 2xl:w-[330px]">
      <div className="absolute -start-[11px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -start-[11px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -start-[11px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute -end-[11px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>
      <div className="absolute h-full w-full rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900">
        <div
          className={cx(
            'absolute inset-0 rounded-[30px]',
            variant === 'dark' ? 'bg-gradient-to-b from-gray-200 to-gray-500' : 'bg-white'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Device;
