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
    <Tabs.Root className="w-full" defaultValue={headers[0].value}>
      <Tabs.List className="border-mauve6 flex shrink-0 border-b" aria-label="Manage your account">
        {headers.map((header) => (
          <Tabs.Trigger
            key={header.value}
            className="text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
            value={header.value}
          >
            {header.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {contents.map((content) => (
        <Tabs.Content
          key={content.value}
          className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value={content.value}
        >
          {content.component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabComponent;
