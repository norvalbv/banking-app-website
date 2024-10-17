import NextLink from 'next/link';
import { ReactElement, MouseEvent } from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
};

const Link = ({ href, children, onClick }: Props): ReactElement => {
  return (
    <NextLink
      href={href}
      onClick={onClick}
      className="flex h-9 items-center justify-center rounded-xl p-6 text-base capitalize text-gray-700 transition-all duration-500 ease-in-out hover:text-gray-900"
    >
      {children}
    </NextLink>
  );
};

export default Link;
