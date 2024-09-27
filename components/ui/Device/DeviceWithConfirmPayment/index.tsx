import React from 'react';
import Device from '..';
import { CheckCircle, XCircle } from 'lucide-react';

const DeviceWithConfirmPayment = () => {
  return (
    <Device>
      <div className="relative mt-40 w-full max-w-[85.60mm] px-2">
        <div className="bg-gradient-radial flex aspect-[1.58/1] flex-col justify-between rounded-xl p-4 text-white shadow-lg">
          <h3 className="mb-4 text-xl font-semibold text-yellow-500">Payment Limit Exceeded</h3>
          <p className="mb-6 text-gray-700">
            You have exceeded your payment limit in the &quot;Entertainment&quot; category. Do you
            want to confirm or deny this payment?
          </p>
          <div className="flex justify-around">
            <div className="flex cursor-pointer items-center">
              <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
              <span className="font-medium text-green-500">Confirm</span>
            </div>
            <div className="flex cursor-pointer items-center">
              <XCircle className="mr-2 h-6 w-6 text-red-500" />
              <span className="font-medium text-red-500">Deny</span>
            </div>
          </div>
        </div>
      </div>
    </Device>
  );
};

export default DeviceWithConfirmPayment;
