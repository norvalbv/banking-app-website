'use client';

import { HandCoins, MoveRightIcon } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <HandCoins className="text-3xl text-zinc-400 mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById('launch-schedule')?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        Get Started <MoveRightIcon />
      </button>
    </nav>
  );
};

export default Nav;
