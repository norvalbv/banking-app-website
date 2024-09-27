'use client';

import Link from 'next/link';
import { PiIcon } from 'lucide-react';
import NavItem from './NavItem';
import SocialIcon from './SocialIcon';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  const navWidth = useTransform(scrollYProgress, [0, 0.2], ['100%', '70%']);
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['rgba(255, 255, 255, 0.0)', 'rgba(255, 255, 255, 0.75)'],
  );
  const navShadow = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['0px 0px 0px rgba(0, 0, 0, 0)', '0px 4px 6px rgba(0, 0, 0, 0.1)']
  );
  const navBlur = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['blur(0px)', 'blur(8px)']
  );
  const navBorder = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['#FFFFFF0', '#FFFFFF']
  );

  return (
    <div className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-screen-xl justify-center 2xl:max-w-screen-2xl">
      <motion.nav
        className="mx-auto mt-10 w-full rounded-full px-10 py-6"
        style={{
          width: navWidth,
          background: navBackground,
          boxShadow: navShadow,
          backdropFilter: navBlur,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: navBorder
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 transition-transform duration-500 ease-in-out">
              BANKING APP
            </Link>
          </div>
          <div className="hidden items-center md:flex">
            <NavItem href="/enterprise">About Us</NavItem>
            <NavItem href="/about">Contact Us</NavItem>
            <NavItem href="/docs">Hi</NavItem>
            <NavItem href="/blog">Pre Register</NavItem>
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
      </motion.nav>
    </div>
  );
};

export default Navbar;
