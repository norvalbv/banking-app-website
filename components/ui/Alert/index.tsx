import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const alertVariants = cva('relative w-full rounded-lg border shadow-lg mb-6 overflow-hidden', {
  variants: {
    variant: {
      default:
        'bg-white border-teal-200 text-gray-800 dark:bg-gray-800 dark:border-teal-800 dark:text-gray-100',
      destructive:
        'bg-white border-red-200 text-red-800 dark:bg-gray-800 dark:border-red-800 dark:text-red-200',
      succeeded:
        'bg-white border-green-400 text-green-800 dark:bg-gray-800 dark:border-green-800 dark:text-green-200',
      info: 'bg-white border-blue-400 text-blue-800 dark:bg-gray-800 dark:border-blue-800 dark:text-blue-200',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    title?: string;
    description?: string;
    buttonText?: string;
    onButtonClick?: () => void;
  };

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, description, buttonText, onButtonClick, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          variant === 'destructive'
            ? 'from-red-500/10'
            : variant === 'succeeded'
              ? 'from-green-500/10'
              : variant === 'info'
                ? 'from-blue-500/10'
                : 'from-teal-500/10'
        } to-transparent`}
      />
      <div className="relative flex flex-col items-start p-2 sm:flex-row sm:items-center sm:p-4">
        <div className="w-full flex-1 sm:w-auto">
          {title && <AlertTitle>{title}</AlertTitle>}
          {description && <AlertDescription>{description}</AlertDescription>}
          {buttonText && <AlertButton onClick={onButtonClick}>{buttonText}</AlertButton>}
        </div>
      </div>
    </div>
  )
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('text-sm font-semibold sm:text-base', className)} {...props} />
  )
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-1 text-xs text-gray-700 dark:text-gray-300 sm:text-sm', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

const AlertButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'mt-2 inline-flex items-center rounded-md py-1 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-3 sm:py-2 sm:text-sm',
      'hover:bg-current/10 w-full justify-start text-inherit focus:ring-current sm:w-auto',
      className
    )}
    {...props}
  >
    {props.children}
    <svg
      className="-mr-0.5 ml-1 h-2 w-2 sm:h-3 sm:w-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
));
AlertButton.displayName = 'AlertButton';

export default Alert;
