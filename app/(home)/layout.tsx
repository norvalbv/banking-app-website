'use client';

import clsx from 'clsx';
import ReactLenis from 'lenis/react';
import { Lato } from 'next/font/google';
import React, { ReactElement } from 'react';
import Footer from '../Layout/Footer';
import Nav from '../Layout/NavBar';

const poppins = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props) => {
  return (
    <ReactLenis root>
      <div className={clsx(poppins.className, 'bg-gray-100 text-gray-800')}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default MainLayout;
