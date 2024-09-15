import clsx from 'clsx';
import React, { ReactElement } from 'react';

type Props = {
    children: ReactElement | ReactElement[];
    className?: string;
}

const CardWrapper = ({ children, className = 'max-w-screen-xl 2xl:max-w-screen-2xl' }: Props) => {
  return (
    <div className={clsx('mx-auto relative z-10', className)}>{children}</div>
  )
}

export default CardWrapper