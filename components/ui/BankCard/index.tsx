'use client';

import { CreditCard } from 'lucide-react';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { cva, cx, type VariantProps } from 'class-variance-authority';
import { formatAmount } from '@/lib/utils';

const bankCardVariants = cva('perspective-1000 relative mx-auto w-full', {
  variants: {
    size: {
      lg: 'max-w-[30rem]',
      sm: 'max-w-[15rem]',
    },
    skew: {
      true: '-rotate-3 skew-x-6',
      false: '',
    },
  },
  defaultVariants: {
    size: 'lg',
    skew: false,
  },
});

type BankCardProps = VariantProps<typeof bankCardVariants> & {
  centerIcon?: boolean;
  account: {
    appwriteItemId: string;
    name: string;
    currentBalance?: number;
    mask: string;
    sharableId?: string;
    cardNumber?: string;
    expiryDate?: string;
    sortCode?: string;
    accountNumber?: string;
    cvv?: string;
  };
  userName: string;
  showBalance?: boolean;
  background?: string;
  enableAnimation?: boolean;
  enableHoverAnimation?: boolean;
  enableFlip?: boolean;
  showBackDetails?: boolean;
  showAllDetails?: boolean;
  onFlip?: () => void;
};

const ROTATION_RANGE = 10;
const CARD_ASPECT_RATIO = 1.586;

const BankCard = ({
  size,
  skew,
  centerIcon,
  account,
  userName,
  showBalance = true,
  background = 'bg-gradient-radial-dark',
  enableAnimation = false,
  enableHoverAnimation = false,
  enableFlip = true,
  showBackDetails = false,
  showAllDetails = false,
  onFlip,
}: BankCardProps): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(showBackDetails);

  useEffect(() => {
    setIsFlipped(showBackDetails);
  }, [showBackDetails]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || (!enableAnimation && !enableHoverAnimation)) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = (mouseY / height - 0.5) * ROTATION_RANGE * -1;
    const rY = (mouseX / width - 0.5) * ROTATION_RANGE;

    if (enableAnimation) {
      // Continuous animation is handled by animate prop
    } else {
      x.set(rX);
      y.set(rY);
    }
  };

  const handleMouseLeave = () => {
    if (enableAnimation || !enableHoverAnimation) {
      x.set(0);
      y.set(0);
    }
  };

  const handleFlip = () => {
    if (!enableFlip) return;
    setIsFlipped((prev) => !prev);
    if (onFlip) {
      onFlip();
    }
  };

  return (
    <div
      className={cx(
        bankCardVariants({ size, skew }),
        'flex select-none flex-col',
        background.includes('dark') ? 'text-white' : 'text-black'
      )}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleFlip}
        style={{
          transformStyle: 'preserve-3d',
          transform: enableAnimation ? undefined : transform,
        }}
        className={`relative w-full ${enableFlip ? 'cursor-pointer' : ''}`}
        animate={
          enableAnimation
            ? {
                rotateY: [20, 15, -15, 20, -15, 20],
                rotateX: [0, -15, 15, -5, 15, 0],
              }
            : {}
        }
        transition={
          enableAnimation
            ? {
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : {}
        }
        whileHover={
          enableHoverAnimation
            ? {
                scale: 1.05,
                rotateY: isFlipped ? 180 : 0,
              }
            : {}
        }
      >
        <motion.div
          className="w-full"
          style={{
            aspectRatio: CARD_ASPECT_RATIO,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <motion.div
            className={`backface-hidden absolute h-full w-full overflow-hidden rounded-2xl border border-gray-500 backdrop-blur-sm ${background}`}
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            <CardFront
              account={account}
              userName={userName}
              showAllDetails={showAllDetails}
              showBalance={showBalance}
            />
          </motion.div>
          <motion.div
            className={`backface-hidden absolute h-full w-full overflow-hidden rounded-2xl border border-gray-500 backdrop-blur-sm ${background}`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <CardBack account={account} showAllDetails={showAllDetails} />
          </motion.div>
        </motion.div>
      </motion.div>

      {centerIcon && (
        <div className="absolute z-20 grid h-full w-full place-items-center text-white">
          <CreditCard className={size === 'sm' ? 'h-8 w-8' : 'h-12 w-12'} strokeWidth={0.75} />
        </div>
      )}
    </div>
  );
};

const CardFront = ({
  account,
  userName,
  showAllDetails,
  showBalance,
}: {
  account: BankCardProps['account'];
  userName: string;
  showAllDetails: boolean;
  showBalance?: boolean;
}): ReactElement => (
  <>
    <div className="relative z-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl p-5">
      <div>
        <h1 className="truncate font-sans-alt text-sm font-semibold sm:text-base md:text-3xl">
          {account?.name}
        </h1>
        {showBalance && account?.currentBalance !== undefined && (
          <p className="truncate text-sm font-black sm:text-base">
            {formatAmount(account?.currentBalance)}
          </p>
        )}
      </div>

      <article className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="truncate text-[10px] font-medium sm:text-xs md:text-sm">{userName}</h1>
        </div>
        <p className="truncate text-xs font-semibold tracking-wider sm:text-base">
          {account?.cardNumber && showAllDetails ? (
            <>
              {account?.cardNumber?.slice(0, -4).replace(/\d{4}/g, '$& ')}
              <span>{account?.cardNumber?.slice(-4)}</span>
            </>
          ) : (
            <>
              ●●●● ●●●● ●●●● <span>{account?.mask}</span>
            </>
          )}
        </p>
      </article>
    </div>

    <div className="absolute bottom-0 right-0 flex flex-col items-end justify-between rounded-r-2xl bg-cover bg-center bg-no-repeat py-5 pr-5">
      VISA
    </div>
  </>
);

const CardBack = ({
  account,
  showAllDetails,
}: {
  account: BankCardProps['account'];
  showAllDetails: boolean;
}): ReactElement => (
  <div className="relative z-10 flex h-full w-full items-end justify-between overflow-hidden p-4">
    <div className="flex items-end justify-between">
      <div className="space-y-2">
        <div>
          <p className="text-[10px] uppercase sm:text-xs">CVV</p>
          <p className="text-xs font-medium sm:text-sm">
            {showAllDetails && account?.cvv ? account?.cvv : '●●●'}
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase sm:text-xs">Expiry Date</p>
          <p className="text-xs font-medium sm:text-sm">
            {showAllDetails && account?.expiryDate ? account?.expiryDate : '●● / ●●'}
          </p>
        </div>
      </div>
    </div>
    <p className="mt-2 text-[10px] uppercase sm:text-xs">© 2024 ARIAN</p>
  </div>
);

export default BankCard;
