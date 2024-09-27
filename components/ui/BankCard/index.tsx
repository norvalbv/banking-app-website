'use client';

import { CreditCard } from 'lucide-react';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { cx } from 'class-variance-authority';

type Props = {
  centerIcon?: boolean;
  animate?: boolean;
};

const BankCard = ({ centerIcon, animate }: Props): ReactElement => {
  return (
    <div
      className={cx(
        'perspective-1000 relative mx-auto w-full max-w-[30rem]',
        animate && '-rotate-3 skew-x-6'
      )}
    >
      <motion.div
        className="bg-gradient-radial-dark relative aspect-[1.58/1] overflow-hidden rounded-xl p-4 text-white shadow-xl shadow-slate-800"
        animate={
          animate
            ? {
                rotateY: [0, 15, -15, 15, -15, 0],
                rotateX: [0, -15, 15, -5, 15, 0],
              }
            : {}
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card content */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="text-5xl font-light">BANK APP</div>
            <div className="font-light">John Doe</div>
            {/* <CreditCard className="size-5 text-gray-300" /> */}
          </div>
          <div className="space-y-0 text-sm">
            <div className="flex items-end justify-between">
              <div className="font-medium tracking-wider">•••• 2205</div>
              <div className="text-lg font-bold italic tracking-widest">VISA</div>
            </div>
          </div>
        </div>

        {/* Shine effect */}
        {animate && (
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 90%)',
              backgroundSize: '200% 200%',
              mixBlendMode: 'soft-light',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </motion.div>

      {centerIcon && (
        <div className="absolute z-20 grid size-full place-items-center text-white">
          <CreditCard className="size-12" strokeWidth={0.75} />
        </div>
      )}
    </div>
  );
};

export default BankCard;
