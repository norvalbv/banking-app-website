import { cva, type VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import React, { ReactElement } from 'react';
import Loading from '../Loading';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center w-fit justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-700 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-teal-500 hover:bg-teal-600 text-gray-100 rounded-xl',
        ghost: 'hover:text-neutral-950 hover:underline hover:underline-offset-4',
      },
      size: {
        default: 'h-9 p-6',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type IconType = LucideIcon | React.ReactElement;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    onClick?: () => void;
    className?: string;
    icon?: IconType;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    buttonType?: 'button' | 'submit';
  };

const Button = ({
  onClick,
  className,
  size,
  icon: Icon,
  iconPosition = 'left',
  loading,
  buttonType = 'button',
  variant,
  children,
}: Props): ReactElement => {
  const renderIcon = (position: 'left' | 'right'): ReactElement | null => {
    if (!Icon) return null;

    const iconClass = `${position === 'left' ? 'mr-2' : 'ml-2'} size-5`;

    if (React.isValidElement(Icon)) {
      return React.cloneElement(Icon as ReactElement, { className: iconClass });
    }

    const LucideIcon = Icon as LucideIcon;
    return <LucideIcon className={iconClass} />;
  };

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      disabled={loading}
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      onClick={onClick}
    >
      {iconPosition === 'left' && renderIcon('left')}
      <span>{children}</span>
      {loading && <Loading className="ml-2 size-4" />}
      {iconPosition === 'right' && renderIcon('right')}
    </button>
  );
};

export { Button, buttonVariants };
