'use client';

import BankCard from '@/components/ui/BankCard';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import React, { useEffect, useState } from 'react';
import { COMBINE_CARDS_DESCRIPTION } from './constants';

const CombineCards = () => {
  const [cardSize, setCardSize] = useState<'sm' | 'lg'>('sm');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setCardSize(window.innerWidth > 650 ? 'lg' : 'sm');
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CardWrapper className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 sm:px-6 md:flex-row md:gap-10 lg:px-20 2xl:h-[50vh]">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <Header
          title="Combine All"
          highlightedText="Your Cards Into One"
          className="text-center md:text-left"
        />
        <p className="mt-4 text-center text-sm sm:text-base md:text-left">
          {COMBINE_CARDS_DESCRIPTION}
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-3/5">
        {isClient && (
          <div className="flex justify-center md:justify-end">
            <BankCard
              skew
              enableAnimation
              size={cardSize}
              account={{
                appwriteItemId: '1234',
                name: 'ARIAN',
                currentBalance: 100,
                mask: '1234',
                sharableId: '123',
                cardNumber: '1234 1234 2205 1999',
                expiryDate: '22/28',
                sortCode: '123456',
                accountNumber: '12312312',
                cvv: '123',
              }}
              showAllDetails
              userName="John Doe"
              showBalance={false}
            />
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default CombineCards;
