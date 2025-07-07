import React from 'react';

interface PageDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageDescription: React.FC<PageDescriptionProps> = ({ 
  children, 
  className = "text-gray-600" 
}) => {
  return (
    <p className={className}>
      {children}
    </p>
  );
};