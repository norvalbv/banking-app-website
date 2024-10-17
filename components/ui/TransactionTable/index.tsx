import { cn, formatAmount, formatDateTime, removeSpecialCharacters } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import { transactionCategoryStyles } from '@/lib/constants';
import { PoundSterling } from 'lucide-react';
import Image from 'next/image';
import type { Transaction } from '@/lib/types';
import React from 'react';

type CategoryBadgeProps = {
  category: string;
};

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] ||
    transactionCategoryStyles.default;

  return (
    <div
      className={cn(
        'flex w-fit items-center justify-center gap-1.5 truncate rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200',
        borderColor,
        chipBackgroundColor
      )}
    >
      <div className={cn('size-2 rounded-full', backgroundColor)} />
      <p className={cn('truncate', textColor)}>{category}</p>
    </div>
  );
};

type TransactionTableProps = {
  transactions: Transaction[];
  blurCategories?: string[];
};

const TransactionsTable = ({ transactions, blurCategories = [] }: TransactionTableProps) => {
  const groupedTransactions = transactions.reduce(
    (acc, transaction) => {
      const date = new Date(transaction.date).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(transaction);
      return acc;
    },
    {} as Record<string, Transaction[]>
  );

  const shouldBlur = (category: string) => blurCategories.includes(category);

  const blurText = (text: string, category: string) => {
    return shouldBlur(category) ? text.replace(/\S/g, '•') : text;
  };

  const blurAmount = (amount: string, category: string) => {
    return shouldBlur(category) ? '••••' : amount;
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableHeader className="bg-gray-50">
          <TableRow>
            <TableHead className="px-2 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-4 md:py-3">
              Transaction
            </TableHead>
            <TableHead className="px-2 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-4 md:py-3">
              Amount
            </TableHead>
            <TableHead className="hidden px-2 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:table-cell md:px-4 md:py-3">
              Category
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
            <React.Fragment key={date}>
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700 md:px-4 md:py-2 md:text-sm"
                >
                  {formatDateTime(new Date(date)).dateTime}
                </TableCell>
              </TableRow>
              {dateTransactions.map((t: Transaction) => {
                const amount = formatAmount(t.amount);
                const isDebit = t.transactionType === 'debit';

                return (
                  <TableRow
                    key={t.id}
                    className={cn(
                      'transition-colors duration-200',
                      isDebit || amount[0] === '-'
                        ? 'bg-red-50 hover:bg-red-100'
                        : 'bg-green-50 hover:bg-green-100'
                    )}
                  >
                    <TableCell className="whitespace-nowrap px-2 py-2 md:px-4 md:py-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 md:size-8">
                          {t.image ? (
                            <Image
                              src={t.image}
                              alt={blurText(t.name, t.category)}
                              width={16}
                              height={16}
                              className="rounded-full"
                            />
                          ) : (
                            <PoundSterling className="size-3 text-gray-500 md:size-4" />
                          )}
                        </div>
                        <div className="ml-2 md:ml-4">
                          <p className="max-w-[100px] truncate text-xs font-medium text-gray-900 md:max-w-[200px] md:text-sm">
                            {blurText(removeSpecialCharacters(t.name), t.category)}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      className={cn(
                        'whitespace-nowrap px-2 py-2 text-xs font-semibold md:px-4 md:py-3 md:text-sm',
                        isDebit || amount[0] === '-' ? 'text-red-600' : 'text-green-600'
                      )}
                    >
                      {blurAmount(isDebit ? `-${amount}` : amount, t.category)}
                    </TableCell>
                    <TableCell className="hidden whitespace-nowrap px-2 py-2 md:table-cell md:px-4 md:py-3">
                      <CategoryBadge category={t.category} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
