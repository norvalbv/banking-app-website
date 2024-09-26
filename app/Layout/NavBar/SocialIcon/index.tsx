import Link from 'next/link';

type SocialIconProps = {
  href: string;
  children: React.ReactNode;
};

const SocialIcon = ({ href, children }: SocialIconProps) => {
  return (
    <Link
      href={href}
      className={`text-gray-600 transition-all duration-500 ease-in-out hover:text-gray-900`}
    >
      {children}
    </Link>
  );
};

export default SocialIcon;
