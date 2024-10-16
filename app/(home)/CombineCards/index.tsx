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
      setCardSize(window.innerWidth > 900 ? 'lg' : 'sm');
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CardWrapper className="flex h-screen flex-col items-center justify-center gap-10 px-20 md:flex-row 2xl:h-[50vh] 2xl:items-end">
      <div className='flex-1'>
        <Header
          title="Combine All"
          highlightedText="Your Cards Into One"
          className="text-center md:text-left"
        />
        <p className="text-center md:text-left">{COMBINE_CARDS_DESCRIPTION}</p>
      </div>
      <div className="flex-1">
        {isClient && (
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
        )}
      </div>
    </CardWrapper>
  );
};

export default CombineCards;
