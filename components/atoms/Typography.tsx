import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ level, children, className = '' }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseClasses = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-semibold',
    3: 'text-2xl font-medium',
    4: 'text-xl font-medium',
    5: 'text-lg font-medium',
    6: 'text-base font-medium'
  };
  
  return (
    <Tag className={`${baseClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
};

interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'lead' | 'small';
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  className = '' 
}) => {
  const variantClasses = {
    body: 'text-base',
    lead: 'text-lg',
    small: 'text-sm'
  };
  
  return (
    <p className={`${variantClasses[variant]} ${className}`}>
      {children}
    </p>
  );
};