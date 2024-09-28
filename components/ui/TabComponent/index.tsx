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
    <Tabs.Root className="w-full relative rounded-2xl border border-white backdrop-blur-md bg-white/10" defaultValue={headers[0].value}>
        <div className="absolute inset-0 bg-gradient-to-br -z-10 from-white/30 to-white/10 pointer-events-none" />
      <Tabs.List className="flex" aria-label="Manage your account">
        {headers.map((header) => (
          <Tabs.Trigger
            key={header.value}
            className="relative flex h-14 w-full bg-white/30 select-none items-center justify-center font-bold transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-full before:bg-teal-500 before:opacity-0 before:content-[''] first:rounded-tl-xl last:rounded-tr-xl data-[state=active]:before:opacity-100 data-[state=active]:before:z-10 hover:bg-white/30"
            value={header.value}
          >
            {header.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {contents.map((content) => (
        <Tabs.Content
          key={content.value}
          className="border-t-4 border-white p-6 rounded-b-xl relative overflow-hidden backdrop-blur-sm"
          value={content.value}
        >
          {content.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabComponent;
