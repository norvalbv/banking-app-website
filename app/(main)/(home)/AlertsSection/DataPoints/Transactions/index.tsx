import Header from '@/components/ui/Header';
import TransactionsTable from '@/components/ui/TransactionTable';
import { transactionMockData } from '@/lib/mocks/transactionMockData';
import React, { ReactElement } from 'react';

const Transactions = (): ReactElement => {
  return (
    <div
      className="relative grid h-full w-full grid-cols-1 grid-rows-7 gap-2 sm:grid-cols-5"
      key={3}
    >
      <div className="absolute left-0 top-0 w-2/3">
        <Header highlightedText="Your Transactions" size="sm" />
        <TransactionsTable transactions={transactionMockData} />
      </div>
      <div className="absolute right-0 top-28 w-2/3">
        <Header
          highlightedText="What Your Trusted Party Sees"
          size="sm"
          className="rounded-lg bg-white/30 p-4 backdrop-blur"
        />
        <div className="rounded-b-lg bg-white/30 backdrop-blur-lg">
          <TransactionsTable
            transactions={transactionMockData}
            blurCategories={['Income', 'Bills & Utilities', 'Food & Drink']}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
