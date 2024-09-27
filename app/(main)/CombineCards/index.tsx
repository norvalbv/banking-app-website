import BankCard from '@/components/ui/BankCard';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import React from 'react';
import { COMBINE_CARDS_DESCRIPTION } from './constants';

const CombineCards = () => {
  return (
    <CardWrapper className="flex h-screen items-center justify-center gap-10 px-20">
      <div>
        <Header title="Combine All" highlightedText="Your Cards Into One" />
        <p>{COMBINE_CARDS_DESCRIPTION}</p>
      </div>
      <BankCard animate />
    </CardWrapper>
  );
};

export default CombineCards;
