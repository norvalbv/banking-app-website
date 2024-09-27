import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import TabComponent from '@/components/ui/TabComponent';
import { TabContent, TabHeader } from '@/components/ui/TabComponent/types';
import React, { useMemo } from 'react';
import You from './YouTab';

const ViewTransactionsSection = () => {
  const tabHeaders: TabHeader[] = [
    { value: 'You', label: 'What You See' },
    { value: 'Partner', label: 'Your Trusted Partner' },
  ];

  const tabContents: TabContent[] = useMemo(
    () => [
      {
        value: 'You',
        component: <You />,
      },
      {
        value: 'Partner',
        component: <You />,
      },
    ],
    []
  );

  return (
    <CardWrapper className="flex h-screen w-full items-center justify-center">
      <div className="w-full">
        <Header title="View Your Recent" highlightedText="Transactions" inline />
        <TabComponent headers={tabHeaders} contents={tabContents} />
      </div>
    </CardWrapper>
  );
};

export default ViewTransactionsSection;
