import * as Tabs from '@radix-ui/react-tabs';
import React, { ReactNode } from 'react';

type TabComponentProps = {
  headers: TabHeader[];
  contents: TabContent[];
};

export type TabHeader = {
  value: string;
  label: string;
};

export type TabContent = {
  value: string;
  component: ReactNode;
};

const TabComponent = ({ headers, contents }: TabComponentProps) => {
  return (
    <Tabs.Root className="w-full rounded-lg border border-white" defaultValue={headers[0].value}>
      <Tabs.List className="flex" aria-label="Manage your account">
        {headers.map((header) => (
          <Tabs.Trigger
            key={header.value}
            className="relative flex h-14 w-full select-none items-center justify-center bg-white/70 font-bold before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-full before:bg-teal-500 before:opacity-0 before:content-[''] first:rounded-tl-lg last:rounded-tr-lg data-[state=active]:before:opacity-100"
            value={header.value}
          >
            {header.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {contents.map((content) => (
        <Tabs.Content
          key={content.value}
          className="border-t-4 border-white bg-white/70 p-6"
          value={content.value}
        >
          {content.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabComponent;
