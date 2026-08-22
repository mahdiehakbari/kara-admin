import { forwardRef } from 'react';
import { ButtonProps } from './types';
import { cn } from '@/shareComponent';


const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'cursor-pointer inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none  disabled:opacity-50 disabled:pointer-events-none',

          variant === 'primary' &&
            'bg-(--second-primary) dark:bg-button-primary text-white hover:bg-(--second-primary-hover) dark:hover:bg-(--primary) focus:ring-(--second-primary-hover) disabled:bg-(--second-primary-disabled) disabled:text-(--text-disabled)',

          variant === 'outline' &&
            'bg-transparent border border-primary text-primary hover:border-(--second-primary-hover) hover:text-(--second-primary-hover) disabled:bg-(--button-outline-disabled) disabled:text-(--text-disabled) disabled:border-gray dark:border-primary dark:text-primary dark:hover:bg-(--primary)/10',

          variant === 'link' &&
            'bg-transparent text-primary hover:underline disabled:text-(--text-disabled)',
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
