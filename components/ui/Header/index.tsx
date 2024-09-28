import React, { ReactElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const headerVariants = cva('mb-4 font-bold', {
  variants: {
    size: {
      sm: 'text-4xl',
      md: 'text-4xl md:text-5xl',
      lg: 'text-4xl md:text-6xl',
      xl: 'text-5xl md:text-7xl lg:text-8xl',
    },
    alignment: {
      center: 'text-center',
      left: 'text-left',
    },
    as: {
      h1: '',
      h2: '',
      h3: '',
    },
  },
  compoundVariants: [
    {
      as: 'h1',
      size: 'xl',
      class: 'text-6xl md:text-8xl lg:text-9xl',
    },
  ],
  defaultVariants: {
    size: 'md',
    alignment: 'left',
    as: 'h2',
  },
});

export type HeaderProps = VariantProps<typeof headerVariants> & {
  title: string;
  highlightedText?: string;
  inline?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
};

const Header = ({
  title,
  highlightedText,
  inline,
  size,
  alignment,
  as = 'h2',
  className,
}: HeaderProps): ReactElement => {
  const Component = as;

  return (
    <Component className={headerVariants({ size, alignment, as, className })}>
      {title}
      {highlightedText && (
        <>
          {!inline && <br />}
          {inline && ' '}
          <span className="bg-gradient-to-t from-teal-400 to-teal-700 bg-clip-text text-transparent">
            {highlightedText}
          </span>
        </>
      )}
    </Component>
  );
};

export default Header;
