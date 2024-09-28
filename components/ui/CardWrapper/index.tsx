import clsx from 'clsx';
import React, { ReactElement, forwardRef } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
  className?: string;
  maxWidth?: boolean;
};

const CardWrapper = forwardRef<HTMLDivElement, Props>(
  ({ children, className, maxWidth = true }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'relative z-10 px-6 sm:px-10',
          className,
          maxWidth && 'mx-auto max-w-screen-xl 2xl:max-w-screen-2xl'
        )}
      >
        {children}
      </div>
    );
  }
);

CardWrapper.displayName = 'CardWrapper';

export default CardWrapper;
