
import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizes = {
      sm: 'h-4 w-4 border-2',
      md: 'h-6 w-6 border-3',
      lg: 'h-8 w-8 border-4',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'animate-spin rounded-full border-t-transparent',
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';
export { LoadingSpinner };