import Link from '@/components/ui/Link';
import { ReactElement } from 'react';

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavItem = ({ href, children, onClick }: NavItemProps): ReactElement => {
  return <Link href={href} onClick={onClick}>{children}</Link>;
};

export default NavItem;
