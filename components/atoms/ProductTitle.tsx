import React from 'react';

interface ProductTitleProps {
  title: string;
  className?: string;
}

export const ProductTitle: React.FC<ProductTitleProps> = ({ 
  title, 
  className = "text-lg font-medium text-gray-900" 
}) => {
  return (
    <h2 className={className}>
      {title}
    </h2>
  );
};