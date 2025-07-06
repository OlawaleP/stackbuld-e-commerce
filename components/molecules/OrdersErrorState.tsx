import React from 'react';
import { Button } from '@/components/atoms/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface OrdersErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showRetry?: boolean;
}

export const OrdersErrorState: React.FC<OrdersErrorStateProps> = ({
  title = 'Error Loading Orders',
  message = 'Unable to fetch orders. Please try again later.',
  onRetry,
  showRetry = true,
}) => {
  return (
    <div className="text-center py-12">
      <div className="mx-auto h-12 w-12 text-red-500 mb-4">
        <AlertTriangle className="h-12 w-12" />
      </div>
      <h2 className="text-2xl font-bold text-red-600">{title}</h2>
      <p className="mt-2 text-gray-600">{message}</p>
      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="mt-6"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
      )}
    </div>
  );
};