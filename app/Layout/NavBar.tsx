'use client';

import { HandCoins } from 'lucide-react';

const Nav = () => {
  const navbarTabs = [
    { id: '/', title: 'Home' },
    { id: '/about-me', title: 'About Me' },
    { id: '/my-work', title: 'My Work' },
    { id: '/contact-me', title: 'Contact Me' },
    { id: '/blog', title: 'My Blog' },
  ];

  return (
    <nav className="absolute top-0 z-50 flex w-full items-start justify-between px-6 py-3 text-white">
      <button className="flex text-zinc-400 gap-4"
         onClick={() => {
          document.getElementById('launch-schedule')?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
        >
        <HandCoins className="text-3xl mix-blend-difference" />
        <p className='font-black'>Banking App 1.0</p>
      </button>
      <div className="flex flex-col gap-1">
        {navbarTabs.map((tab) => (
          <button
            onClick={() => {
              document.getElementById('launch-schedule')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
            className="text-lg text-zinc-400 transition-all duration-300 hover:scale-125 hover:underline hover:underline-offset-4 active:scale-95 active:text-zinc-500"
            key={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
