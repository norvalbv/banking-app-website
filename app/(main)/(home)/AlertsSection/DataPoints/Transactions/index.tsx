import Header from '@/components/ui/Header';
import TransactionsTable from '@/components/ui/TransactionTable';
import { transactionMockData } from '@/lib/mocks/transactionMockData';
import React, { ReactElement } from 'react';

const Transactions = (): ReactElement => {
  return (
    <div className="relative grid h-[30rem] lg:h-full w-full grid-cols-1 grid-rows-7 gap-2 sm:grid-cols-5 place-items-center">
      <div className="absolute left-0 top-0 w-full lg:top-20 md:w-2/3">
        <Header highlightedText="Your Transactions" size="xs" />
        <TransactionsTable transactions={transactionMockData} />
      </div>
      <div className="absolute right-0 top-20 w-full lg:top-60 md:w-2/3">
        <Header
          highlightedText="What Your Trusted Party Sees"
          size="xs"
          className="rounded-lg bg-white/30 p-4 backdrop-blur w-fit"
        />
          <TransactionsTable
            transactions={transactionMockData}
            blurCategories={['Income', 'Bills & Utilities', 'Food & Drink']}
          />
      </div>
    </div>
  );
};

export default Transactions;
