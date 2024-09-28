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
    <Tabs.Root className="w-full border border-white rounded-lg" defaultValue={headers[0].value}>
      <Tabs.List className="flex" aria-label="Manage your account">
        {headers.map((header) => (
          <Tabs.Trigger
            key={header.value}
            className="flex w-full select-none items-center justify-center h-14 font-bold first:rounded-tl-lg last:rounded-tr-lg bg-white/70 relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-teal-500 before:opacity-0 data-[state=active]:before:opacity-100"
            value={header.value}
          >
            {header.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {contents.map((content) => (
        <Tabs.Content
          key={content.value}
          className="h-[40rem] bg-white/70 border-t-4 border-white p-6"
          value={content.value}
        >
          {content.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabComponent;
