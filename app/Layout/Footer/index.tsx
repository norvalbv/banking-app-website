import Logo from '@/components/ui/Logo';
import Link from 'next/link';
import React from 'react';

const Footer = (): React.ReactElement => {
  return (
    <footer className="bg-gradient-radial border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 2xl:max-w-screen-2xl">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div className="space-y-6 md:w-1/3">
            <Logo size="lg" />
            <p className="text-sm text-gray-500 sm:text-base">
              Making the world a better place through innovative solutions.
            </p>
            {/* <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-gray-500 hover:text-teal-500">
                  <span className="text-sm sm:text-base">{social}</span>
                </a>
              ))}
            </div> */}
          </div>
          <div className="grid grid-cols-2 gap-8 md:w-2/3 md:grid-cols-3">
            {[{ title: 'Support', items: ['Contact Us'] }].map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-800">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="/contact-us"
                        className="text-sm text-gray-500 hover:text-teal-500"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Banking App, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
