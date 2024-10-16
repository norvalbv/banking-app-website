import { type VariantProps, cva } from 'class-variance-authority';
import type React from 'react';

const logoVariants = cva(
  'font-medium bg-gradient-to-r font-sans-alt from-gray-800 via-gray-500 to-gray-400 bg-clip-text text-transparent',
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
  return <h1 className={logoVariants({ size })}>ARIAN</h1>;
};

export default Logo;
