import BankCard from '@/components/ui/BankCard';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import React from 'react';
import { COMBINE_CARDS_DESCRIPTION } from './constants';

const CombineCards = () => {
  return (
    <CardWrapper className="h-screen flex justify-center items-center gap-10">
        <div className='px-10'>
            <Header title='Combine All Your Cards Into One' />
            <p>{COMBINE_CARDS_DESCRIPTION}</p>
        </div>
        <BankCard animate />
    </CardWrapper>
  );
};

export default CombineCards;
