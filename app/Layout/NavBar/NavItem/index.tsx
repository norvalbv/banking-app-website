import Link from '@/components/ui/Link';
import { MouseEvent, ReactElement } from 'react';

type NavItemProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: 'button' | 'link';
};

const NavItem = ({ href, children, onClick, type = 'link' }: NavItemProps): ReactElement => {
  return type === 'button' ? (
    <button
      onClick={onClick}
      className="flex h-9 items-center justify-center rounded-xl p-6 text-base capitalize text-gray-700 transition-all duration-500 ease-in-out hover:text-gray-900"
    >
      {children}
    </button>
  ) : (
    <Link href={href ?? ''} onClick={onClick}>
      {children}
    </Link>
  );
};

export default NavItem;
