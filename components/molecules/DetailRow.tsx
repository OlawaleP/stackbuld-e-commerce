import React from 'react';

interface DetailRowProps {
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

export const DetailRow: React.FC<DetailRowProps> = ({ 
  label, 
  value, 
  className = '' 
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
};
