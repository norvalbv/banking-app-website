import Alert from '@/components/ui/Alert';
import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import addNewLimit from '@/public/images/addNewLimit.png';
import limitList from '@/public/images/limitList.png';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ReactElement } from 'react';

const images = [
  <div className="relative grid h-full w-full grid-cols-1 grid-rows-5 gap-2 sm:grid-cols-5" key={1}>
    <Image
      src={addNewLimit}
      alt="Add New Limit"
      className="col-span-3 col-start-2 row-span-3 rounded-lg shadow-lg"
    />
    <Image
      src={limitList}
      alt="Limit List"
      className="col-span-5 row-start-5 rounded-lg shadow-lg"
    />
  </div>,
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
  </div>,
  <DeviceWithCardPayment key={4} />,
];

type ChangingImagesProps = {
  activeSection: 0 | 1 | 2;
};

const ChangingImages = ({ activeSection }: ChangingImagesProps): ReactElement => {
  return (
    <div className="sticky top-0 flex h-screen w-full items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full max-h-[50vh] w-full max-w-4xl px-4 sm:px-0"
        >
          {images[activeSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ChangingImages;
