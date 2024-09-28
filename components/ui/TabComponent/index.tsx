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
    <Tabs.Root
      className="relative w-full rounded-2xl border border-white bg-white/10 backdrop-blur-md"
      defaultValue={headers[0].value}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/30 to-white/10" />
      <Tabs.List className="flex" aria-label="Manage your account">
        {headers.map((header) => (
          <Tabs.Trigger
            key={header.value}
            className="relative flex h-14 w-full select-none items-center justify-center bg-white/30 font-bold transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:h-1 before:w-full before:rounded-lg before:bg-teal-500 before:opacity-0 before:shadow-sm before:shadow-teal-500 before:content-[''] first:rounded-tl-xl last:rounded-tr-xl hover:bg-white/30 data-[state=active]:before:z-10 data-[state=active]:before:opacity-100"
            value={header.value}
          >
            {header.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {contents.map((content) => (
        <Tabs.Content
          key={content.value}
          className="relative overflow-hidden rounded-b-xl border-t-4 border-white p-6 backdrop-blur-sm"
          value={content.value}
        >
          {content.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabComponent;
