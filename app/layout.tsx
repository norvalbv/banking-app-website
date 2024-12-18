import clsx from 'clsx';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const montserratAlt1 = localFont({
  src: [
    {
      path: '../public/fonts/MontserratAlt1-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MontserratAlt1-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat-alt1',
});

export const metadata: Metadata = {
  title: 'Arian App',
  description:
    'Take control of your finances with Arian. Combine cards, set spending limits, and get trusted oversight for your financial well-being.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          montserrat.variable,
          montserratAlt1.variable,
          'font-sans antialiased',
          'min-h-screen bg-gray-100 text-gray-800'
        )}
      >
        {children}
      </body>
    </html>
  );
}
