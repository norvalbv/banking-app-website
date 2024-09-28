'use client';

import Link from 'next/link';
import { PiIcon, Menu, X } from 'lucide-react';
import NavItem from './NavItem';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import useOutsideClick from '@/lib/hooks/useOutsideClick';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navWidth = useTransform(scrollYProgress, [0, 0.15], ['100%', '75%']);
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.15],
    ['rgba(255, 255, 255, 0.0)', 'rgba(255, 255, 255, 0.75)']
  );
  const navShadow = useTransform(
    scrollYProgress,
    [0, 0.15],
    ['0px 0px 0px rgba(0, 0, 0, 0)', '0px 4px 6px rgba(0, 0, 0, 0.1)']
  );
  const navBlur = useTransform(scrollYProgress, [0, 0.15], ['blur(0px)', 'blur(8px)']);
  const navBorder = useTransform(scrollYProgress, [0, 0.15], ['#FFFFFF0', '#FFFFFF']);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick({ refs: [menuRef], onBlur: () => setIsMenuOpen(false) });

  return (
    <div className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-screen-xl justify-center 2xl:max-w-screen-2xl">
      <motion.nav
        className="mx-auto mt-6 w-full rounded-full px-6 sm:px-10 py-2 2xl:py-6"
        style={{
          width: navWidth,
          background: navBackground,
          boxShadow: navShadow,
          backdropFilter: navBlur,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: navBorder,
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold italic lg:text-xl">
              BANKING APP
            </Link>
          </div>
          <div className="hidden items-center lg:flex">
            <NavItem href="/enterprise">About Us</NavItem>
            <NavItem href="/about">Contact Us</NavItem>
            <NavItem href="/docs">Hi</NavItem>
            <NavItem href="/blog">Pre Register</NavItem>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="block lg:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                  className="size-6"
                >
                  <button
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  >
                    {isMenuOpen ? <X /> : <Menu />}
                  </button>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <PiIcon className="hidden h-6 w-6 lg:block" />
            <PiIcon className="hidden h-6 w-6 lg:block" />
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full mx-auto mt-2 w-[75%] rounded-xl border border-white bg-white/75 p-4 underline shadow-lg backdrop-blur-[0.5rem]"
          >
            <NavItem href="/enterprise">About Us</NavItem>
            <NavItem href="/about">Contact Us</NavItem>
            <NavItem href="/docs">Hi</NavItem>
            <NavItem href="/blog">Pre Register</NavItem>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
