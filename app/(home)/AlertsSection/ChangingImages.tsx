import Alert from '@/components/ui/Alert';
import Header from '@/components/ui/Header';
import TransactionsTable from '@/components/ui/TransactionTable';
import { transactionMockData } from '@/lib/mocks/transactionMockData';
import addNewLimit from '@/public/images/addNewLimit.png';
import limitList from '@/public/images/limitList.png';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ReactElement } from 'react';

const images = [
  <div className="relative grid h-full w-full grid-cols-1 grid-rows-7 gap-2 sm:grid-cols-5 bg-red-500" key={1}>
    <Image
      src={addNewLimit}
      alt="Add New Limit"
      className="col-span-3 col-start-2 row-span-3 rounded-lg shadow-lg"
    />
    <Image
      src={limitList}
      alt="Limit List"
      className="col-span-5 row-start-7 rounded-lg shadow-lg"
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
  <div className="relative grid h-full w-full grid-cols-1 grid-rows-7 gap-2 sm:grid-cols-5" key={3}>
    <div className="absolute left-0 top-0 w-2/3">
      <Header title="Your Transactions" size="sm" />
      <TransactionsTable transactions={transactionMockData} />
    </div>
    <div className="absolute right-0 top-28 w-2/3">
        <Header title="What Your Trusted Party Sees" size="sm" className='bg-white/30 backdrop-blur p-4 rounded-lg' />
      <div className="bg-white/30 backdrop-blur-lg rounded-b-lg">
        <TransactionsTable transactions={transactionMockData} blurCategories={["Income", "Bills & Utilities"]} />
      </div>
    </div>
  </div>,
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
