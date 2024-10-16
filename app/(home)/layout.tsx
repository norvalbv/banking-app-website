'use client';

import clsx from 'clsx';
import ReactLenis from 'lenis/react';
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';
import React, { ReactElement } from 'react';
import Footer from '../Layout/Footer';
import Nav from '../Layout/NavBar';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const montserratAlt1 = localFont({
  src: [
    {
      path: '../../public/fonts/MontserratAlt1-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MontserratAlt1-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MontserratAlt1-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MontserratAlt1-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MontserratAlt1-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MontserratAlt1-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MontserratAlt1-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MontserratAlt1-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MontserratAlt1-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat-alt1',
});

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props): ReactElement => {
  return (
    <ReactLenis root>
      <div
        className={clsx(
          montserrat.variable,
          montserratAlt1.variable,
          'font-sans antialiased',
          'bg-gray-100 text-gray-800'
        )}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default MainLayout;
