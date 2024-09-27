import React from 'react';
import Device from '..';

const DeviceWithSetLimits = () => {
  return (
    <Device>
      <div className="p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Set Spending Limits</h2>

        <div className="mb-3 flex items-center justify-between">
          <span className="text-gray-700">Daily Limit</span>
          <div className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700">$500</div>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <span className="text-gray-700">Weekly Limit</span>
          <div className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700">$2,000</div>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <span className="text-gray-700">Monthly Limit</span>
          <div className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700">$8,000</div>
        </div>

        <div className="mt-6 text-center text-gray-500">
          <p>Limits are monitored by your trusted party. You cannot make changes directly.</p>
        </div>
      </div>
    </Device>
  );
};

export default DeviceWithSetLimits;
