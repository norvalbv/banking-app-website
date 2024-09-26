'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PiIcon } from 'lucide-react';
import NavItem from './NavItem';
import SocialIcon from './SocialIcon';
import clsx from 'clsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="fixed top-0 z-50 flex w-full justify-center">
      <nav
        className={clsx(
          'mt-10 w-full px-10 py-6 transition-all duration-500 ease-in-out',
          scrolled
            ? 'max-w-5xl rounded-full bg-white/70 shadow-lg backdrop-blur-lg'
            : 'bg-transparent'
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 transition-transform duration-500 ease-in-out">
              BANKING APP
            </Link>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <NavItem href="/enterprise">Enterprise</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/docs">Docs</NavItem>
            <NavItem href="/blog">Blog</NavItem>
          </div>
          <div className="flex items-center space-x-4">
            <SocialIcon href="https://github.com/your-repo">
              <PiIcon className="h-6 w-6" />
            </SocialIcon>
            <SocialIcon href="https://discord.gg/your-server">
              <PiIcon className="h-6 w-6" />
            </SocialIcon>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
