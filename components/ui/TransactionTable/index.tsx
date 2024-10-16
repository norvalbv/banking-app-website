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
            <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Transaction
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Amount
            </TableHead>
            <TableHead className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Category
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
            <>
              <TableRow key={date}>
                <TableCell
                  colSpan={4}
                  className="bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700"
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
                    <TableCell className="whitespace-nowrap px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                          {t.image ? (
                            <Image
                              src={t.image}
                              alt={blurText(t.name, t.category)}
                              width={20}
                              height={20}
                              className="rounded-full"
                            />
                          ) : (
                            <PoundSterling className="size-4 text-gray-500" />
                          )}
                        </div>
                        <div className="ml-4">
                          <p className="max-w-[200px] truncate text-sm font-medium text-gray-900">
                            {blurText(removeSpecialCharacters(t.name), t.category)}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell
                      className={cn(
                        'whitespace-nowrap px-4 py-3 text-sm font-semibold',
                        isDebit || amount[0] === '-' ? 'text-red-600' : 'text-green-600'
                      )}
                    >
                      {blurAmount(isDebit ? `-${amount}` : amount, t.category)}
                    </TableCell>

                    <TableCell className="whitespace-nowrap px-4 py-3">
                      <CategoryBadge category={t.category} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
