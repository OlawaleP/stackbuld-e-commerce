import React from 'react';
import { Button } from '@/components/atoms/Button';

interface SearchErrorStateProps {
  error: Error;
  onRetry?: () => void;
}

export const SearchErrorState: React.FC<SearchErrorStateProps> = ({
  error,
  onRetry,
}) => {
  return (
    <div className="text-center py-12">
      <div className="text-red-600 mb-4">
        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold">Error Loading Products</h2>
        <p className="mt-2 text-gray-600">
          {error.message || 'Something went wrong while loading products. Please try again.'}
        </p>
      </div>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          Try Again
        </Button>
      )}
    </div>
  );
};