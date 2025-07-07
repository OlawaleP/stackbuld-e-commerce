import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ 
  children, 
  className = "text-3xl font-bold text-gray-900" 
}) => {
  return (
    <h1 className={className}>
      {children}
    </h1>
  );
};