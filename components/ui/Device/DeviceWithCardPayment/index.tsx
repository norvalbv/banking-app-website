import React from 'react';
import Device from '..';
import Lottie from 'lottie-react';
import payConfirm from '@/lib/constants/pay-confirm.json';
import BankCard from '../../BankCard';

const DeviceWithCardPayment = () => {
  return (
    <Device>
      <div className="mx-2 mt-28">
      <BankCard
            skew
            enableAnimation
            size='sm'
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
          />      </div>
      <Lottie
        animationData={payConfirm}
        loop={true}
        className="mt-24 flex size-12 w-full items-center justify-center 2xl:size-16"
      />
    </Device>
  );
};

export default DeviceWithCardPayment;
