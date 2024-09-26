import Link from '@/components/ui/Link';
import { ReactElement } from 'react';

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavItem = ({ href, children }: NavItemProps): ReactElement => {
  return <Link href={href}>{children}</Link>;
};

export default NavItem;
