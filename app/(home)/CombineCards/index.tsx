'use client';

import BankCard from '@/components/ui/BankCard';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import React from 'react';
import { COMBINE_CARDS_DESCRIPTION } from './constants';
import useWindowSize from '@/lib/hooks/useWindowSize';

const CombineCards = () => {
  const { windowSize } = useWindowSize();

  return (
    <CardWrapper className="flex h-screen flex-col items-center justify-center gap-10 px-20 md:flex-row 2xl:h-[50vh] 2xl:items-end">
      <div>
        <Header
          title="Combine All"
          highlightedText="Your Cards Into One"
          className="text-center md:text-left"
        />
        <p className="text-center md:text-left">{COMBINE_CARDS_DESCRIPTION}</p>
      </div>
      <BankCard
        skew
        enableAnimation
        size={windowSize > 900 ? 'lg' : 'lg'}
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
    </CardWrapper>
  );
};

export default CombineCards;
