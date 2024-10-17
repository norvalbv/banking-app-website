import { type VariantProps, cva } from 'class-variance-authority';
import type React from 'react';

const logoVariants = cva(
  'font-medium inline-block bg-gradient-to-r font-sans-alt from-gray-800 via-gray-500 to-gray-400 bg-clip-text w-fit text-transparent',
  {
    variants: {
      size: {
        md: '2xl:text-36 text-30',
        lg: 'text-5xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

type LogoProps = VariantProps<typeof logoVariants>;

const Logo = ({ size }: LogoProps): React.ReactElement => {
  return <span className={logoVariants({ size })}>ARIAN</span>;
};

export default Logo;
