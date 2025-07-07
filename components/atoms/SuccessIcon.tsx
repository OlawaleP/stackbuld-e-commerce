import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SuccessIcon: React.FC<SuccessIconProps> = ({ 
  className = "text-green-600",
  size = 'lg' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };
  
  return (
    <div className="flex justify-center">
      <CheckCircle className={`${sizeClasses[size]} ${className}`} />
    </div>
  );
};