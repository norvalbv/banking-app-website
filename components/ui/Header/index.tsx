import React, { ReactElement } from 'react';
import { cx } from 'class-variance-authority';

export type HeaderProps = {
  title: string;
  highlightedText?: string;
  className?: string;
};

const Header = ({ title, highlightedText, className }: HeaderProps): ReactElement => {
  return (
    <h2 className={cx('mb-4 font-bold text-4xl', className)}>
      {title}
      {highlightedText && (
        <>
          <br />
          <span className="text-rose-500">{highlightedText}</span>
        </>
      )}
    </h2>
  );
};

export default Header;
