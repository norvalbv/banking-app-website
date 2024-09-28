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
      <BankCard animate size={windowSize > 900 ? 'lg' : 'sm'} />
    </CardWrapper>
  );
};

export default CombineCards;
