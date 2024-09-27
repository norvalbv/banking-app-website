import { CheckCircle, XCircle } from 'lucide-react';
import React, { ReactElement } from 'react';
import Device from '..';

const DeviceWithConfirmPayment = (): ReactElement => {
  return (
    <Device variant="dark">
      <div className="pointer-events-none relative w-full max-w-[85.60mm] select-none px-2 pt-2">
        <div className="bg-gradient-radial flex aspect-[1.58/1] flex-col justify-between rounded-3xl p-4 text-white shadow-lg">
          <h3 className="mb-4 font-semibold text-rose-500 2xl:text-xl">Payment Limit Exceeded</h3>
          <p className="mb-6 text-pretty text-sm text-gray-700 2xl:text-base">
            There has been an payment limit exceeded in the{' '}
            <strong>&quot;Entertainment&quot;</strong> category. Do you want to approve this
            payment?
          </p>
          <div className="flex justify-around">
            <div className="flex items-center">
              <CheckCircle className="mr-2 size-4 text-green-500 2xl:size-6" />
              <span className="text-sm font-medium text-green-500 2xl:text-base">Approve</span>
            </div>
            <div className="flex items-center">
              <XCircle className="mr-2 size-4 text-red-500 2xl:size-6" />
              <span className="text-sm font-medium text-red-500 2xl:text-base">Deny</span>
            </div>
          </div>
        </div>
      </div>
    </Device>
  );
};

export default DeviceWithConfirmPayment;
