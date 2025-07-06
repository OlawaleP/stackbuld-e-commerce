import React from 'react';
import { MainLayout } from '@/components/templates/MainLayout';
import { OrdersContent } from '@/components/organisms/OrdersContent';
import { OrdersErrorState } from '@/components/molecules/OrdersErrorState';
import { LoadingSpinner } from '../atoms/LoadingSpinner';

interface OrdersTemplateProps {
  orders: Array<{
    id: string;
    date: string;
    total: number;
    status: string;
  }>;
  isLoading: boolean;
  error: Error | null;
  hasOrders: boolean;
  onRetry?: () => void;
}

export const OrdersTemplate: React.FC<OrdersTemplateProps> = ({
  orders,
  isLoading,
  error,
  hasOrders,
  onRetry,
}) => {
  const getTitle = (): string => {
    if (isLoading) return 'Loading Orders';
    if (error) return 'Error - Order History';
    return 'Order History';
  };

  return (
    <MainLayout 
      title={getTitle()} 
      description="View your past orders at Stackbuild"
    >
      {isLoading && <LoadingSpinner />}
      
      {error && (
        <OrdersErrorState
          onRetry={onRetry}
          showRetry={!!onRetry}
        />
      )}
      
      {!isLoading && !error && (
        <OrdersContent
          orders={orders}
          hasOrders={hasOrders}
        />
      )}
    </MainLayout>
  );
};