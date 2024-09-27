'use client';

import { CreditCard } from 'lucide-react';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { cva, cx, type VariantProps } from 'class-variance-authority';

const bankCardVariants = cva('perspective-1000 relative mx-auto w-full', {
  variants: {
    size: {
      large: 'max-w-[30rem]',
      small: 'max-w-[15rem]',
    },
    animate: {
      true: '-rotate-3 skew-x-6',
      false: '',
    },
  },
  defaultVariants: {
    size: 'large',
    animate: false,
  },
});

type BankCardProps = VariantProps<typeof bankCardVariants> & {
  centerIcon?: boolean;
};

const BankCard = ({ size, animate, centerIcon }: BankCardProps): ReactElement => {
  return (
    <div className={cx(bankCardVariants({ size, animate }), 'select-none')}>
      <motion.div
        className="bg-gradient-radial-dark border-b-1 relative aspect-[1.58/1] overflow-hidden rounded-xl border-l-2 border-slate-800 p-4 text-white shadow-xl shadow-slate-800"
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
            <div className={cx('font-light', size === 'small' ? 'text-lg' : 'text-5xl')}>
              BANK APP
            </div>
            <div className={cx('font-light', size === 'small' ? 'text-xs' : '')}>John Doe</div>
          </div>
          <div className={size === 'small' ? 'space-y-0 text-xs' : 'space-y-0 text-sm'}>
            <div className="flex items-end justify-between">
              <div
                className={cx(
                  'font-medium tracking-wider',
                  size === 'small' ? 'text-xs' : 'text-xl'
                )}
              >
                •••• 2205
              </div>
              <div
                className={cx(
                  'font-bold italic tracking-widest',
                  size === 'small' ? 'text-xs' : 'text-xl'
                )}
              >
                VISA
              </div>
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
          <CreditCard className={size === 'small' ? 'size-8' : 'size-12'} strokeWidth={0.75} />
        </div>
      )}
    </div>
  );
};

export default BankCard;
