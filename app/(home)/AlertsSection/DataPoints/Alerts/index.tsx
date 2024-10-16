import React, { ReactElement } from 'react'
import Alert from '@/components/ui/Alert';


const Alerts = (): ReactElement => {
  return (
    <div className="relative grid h-[36rem] w-full grid-cols-1 sm:grid-cols-6" key={2}>
    <Alert
      variant="info"
      className="col-span-5 col-start-1 col-end-6 h-fit"
      title="Payment Limit Exceeded"
      description="You have reached your payment limits for the month for one or more payees."
      buttonText="Notify trusted party to review and approve"
    />
    <Alert
      variant="destructive"
      className="col-span-5 col-start-2 row-start-3 h-fit"
      title="Payment Limit Exceeded, Action Required"
      description="A recent transaction has been attempted that exceeds a limit set on payees."
      buttonText="Review and Approve"
    />
    <Alert
      variant="succeeded"
      className="col-span-5 col-start-1 col-end-6 row-start-5 h-fit"
      title="Payment Confirmed"
      description="The payment has been confirmed, you are able to attempt the payment again."
    />
  </div>  )
}

export default Alerts