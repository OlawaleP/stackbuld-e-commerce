import React from 'react';
import { cn } from "@/lib/utils";

interface PriceProps {
  amount: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Price: React.FC<PriceProps> = ({ amount, className, size = 'md' }) => {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg font-semibold',
  };
  
  return (
    <span className={cn('font-medium text-green-600', sizes[size], className)}>
      ${amount.toFixed(2)}
    </span>
  );
};