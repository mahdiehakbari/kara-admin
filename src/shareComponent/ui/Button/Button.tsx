import { forwardRef } from 'react';
import { ButtonProps } from './types';
import { cn } from '@/shareComponent/lib/utils';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'cursor-pointer inline-flex items-center justify-center font-medium rounded-btn transition-colors focus:outline-none  disabled:opacity-50 disabled:pointer-events-none rounded-2xl',

          variant === 'primary' &&
            'bg-(--primary) text-white hover:bg-(--primary-hover) focus:ring-(--primary-hover) disabled:bg-(--second-primary-disabled)  disabled:text-(--text-disabled)',

          variant === 'outline' &&
            'bg-transparent border border-(--primary) text-(--primary) hover:border-(--primary-hover) hover:text-(--primary-hover) disabled:bg-(--button-outline-disabled) disabled:text-(--text-disabled) disabled:border-(--border-color-gray)',

          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'md' && 'w-40.25 h-10.5 text-base font-medium text-[16px]',
          size === 'lg' && 'w-68.75 h-10.5 font-medium text-[16px]',

          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
