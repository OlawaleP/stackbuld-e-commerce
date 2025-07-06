import React from 'react';

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <th className={`px-6 py-3 text-left text-sm font-medium text-gray-900 ${className}`}>
      {children}
    </th>
  );
};
