import React, { ReactElement } from 'react';
import Alert from '@/components/ui/Alert';

const Alerts = (): ReactElement => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-6 sm:p-4">
        <Alert
          variant="info"
          className="col-span-1 sm:col-span-5"
          title="Payment Limit Exceeded"
          description="You have reached your payment limits for the month for one or more payees."
          buttonText="Notify trusted party to review and approve"
        />
        <Alert
          variant="destructive"
          className="col-span-1 sm:col-span-5 sm:col-start-2"
          title="Payment Limit Exceeded, Action Required"
          description="A recent transaction has been attempted that exceeds a limit set on payees."
          buttonText="Review and Approve"
        />
        <Alert
          variant="succeeded"
          className="col-span-1 sm:col-span-5 sm:col-start-1"
          title="Payment Confirmed"
          description="The payment has been confirmed, you are able to attempt the payment again."
        />
      </div>
    </div>
  );
};

export default Alerts;
