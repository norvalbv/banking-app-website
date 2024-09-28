import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import TabComponent, { TabContent, TabHeader } from '@/components/ui/TabComponent';
import React, { useMemo } from 'react';
import YouTab from './YouTab';
import ThemTab from './ThemTab';

const ViewTransactionsSection = () => {
  const tabHeaders: TabHeader[] = [
    { value: 'You', label: 'What You See' },
    { value: 'Partner', label: 'Your Trusted Partner' },
  ];

  const tabContents: TabContent[] = useMemo(
    () => [
      {
        value: 'You',
        component: <YouTab />,
      },
      {
        value: 'Partner',
        component: <ThemTab />,
      },
    ],
    []
  );

  return (
    <CardWrapper className="flex h-[50vh] w-full items-end justify-center">
      <div className="w-full">
        <Header title="View Your Recent" highlightedText="Transactions" inline />
        <TabComponent headers={tabHeaders} contents={tabContents} />
      </div>
    </CardWrapper>
  );
};

export default ViewTransactionsSection;
