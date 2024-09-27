import Link from 'next/link';
import React from 'react';

const Footer = (): React.ReactElement => {
  return (
    <footer className="bg-gradient-radial border-t border-gray-200">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 2xl:max-w-screen-2xl">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h3 className="text-2xl font-bold text-rose-500">Banking App</h3>
            <p className="text-base text-gray-500">
              Making the world a better place through innovative solutions.
            </p>
            <div className="flex space-x-6">
              {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-gray-500 hover:text-rose-500">
                  <span>{social}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {[
                { title: 'Solutions', items: ['Product', 'Services', 'Technology'] },
                { title: 'Support', items: ['Pricing', 'Documentation', 'Guides'] },
              ].map((section) => (
                <div key={section.title} className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-base text-gray-500 hover:text-rose-500">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {['About', 'Blog', 'Jobs'].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-base text-gray-500 hover:text-rose-500">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 xl:text-center">
            &copy; {new Date().getFullYear()} Banking App, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
