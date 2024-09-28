import BankCard from '@/components/ui/BankCard';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import React from 'react';
import { COMBINE_CARDS_DESCRIPTION } from './constants';

const CombineCards = () => {
  return (
    <CardWrapper className="flex flex-col sm:flex-row h-screen 2xl:h-[50vh] items-center 2xl:items-end justify-center gap-10 px-20">
      <div>
        <Header title="Combine All" highlightedText="Your Cards Into One" className='text-center sm:text-left' />
        <p className='text-center sm:text-left'>{COMBINE_CARDS_DESCRIPTION}</p>
      </div>
      <BankCard animate size={'sm'} />
    </CardWrapper>
  );
};

export default CombineCards;
