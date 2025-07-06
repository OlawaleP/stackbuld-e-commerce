import React from 'react';
import { Button } from '@/components/atoms/Button';

interface ProductErrorStateProps {
  error: Error;
  onRetry?: () => void;
}

export const ProductErrorState: React.FC<ProductErrorStateProps> = ({
  error,
  onRetry,
}) => {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-red-600">Product Not Found</h2>
      <p className="mt-2 text-gray-600">
        The product you're looking for doesn't exist.
      </p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="mt-4">
          Try Again
        </Button>
      )}
    </div>
  );
};