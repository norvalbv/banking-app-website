import NextLink from 'next/link';
import { ReactElement } from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
};

const Link = ({ href, children }: Props): ReactElement => {
  return (
    <NextLink
      href={href}
      className="flex h-9 items-center justify-center rounded-xl p-6 text-base font-semibold capitalize text-gray-700 transition-all duration-500 ease-in-out hover:text-gray-900"
    >
      {children}
    </NextLink>
  );
};

export default Link;
