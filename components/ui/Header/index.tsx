import React, { ReactElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const headerVariants = cva('mb-4 font-bold', {
  variants: {
    size: {
      sm: 'text-4xl',
      md: 'text-4xl md:text-5xl',
      lg: 'text-4xl md:text-6xl',
    },
    alignment: {
      center: 'text-center',
      left: 'text-left',
    },
  },
  defaultVariants: {
    size: 'md',
    alignment: 'left',
  },
});

export type HeaderProps = VariantProps<typeof headerVariants> & {
  title: string;
  highlightedText?: string;
  inline?: boolean;
  className?: string;
};

const Header = ({
  title,
  highlightedText,
  inline,
  size,
  alignment,
  className,
}: HeaderProps): ReactElement => {
  return (
    <h2 className={headerVariants({ size, alignment, className })}>
      {title}
      {highlightedText && (
        <>
          {!inline && <br />}
          {inline && ' '}
          <span className="text-rose-500">{highlightedText}</span>
        </>
      )}
    </h2>
  );
};

export default Header;
