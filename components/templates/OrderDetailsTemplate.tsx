import React from 'react';
import { MainLayout } from '@/components/templates/MainLayout';
import { LoadingState } from '@/components/molecules/LoadingState';
import { ErrorState } from '@/components/molecules/ErrorState';
import { OrderDetailsContent } from '@/components/organisms/OrderDetailsContent';
import { Order } from '@/lib/types/order';

interface OrderDetailsTemplateProps {
  order?: Order;
  isLoading: boolean;
  error: Error | null;
  orderId: string;
}

export const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
  order,
  isLoading,
  error,
}) => {
  const getTitle = (): string => {
    if (isLoading) return 'Loading Order Details';
    if (error || !order) return 'Order Not Found';
    return `Order ${order.id}`;
  };

  const getDescription = (): string => {
    if (order) return `Details for order ${order.id} at Stackbuild`;
    return 'View details of your order at Stackbuild';
  };

  return (
    <MainLayout title={getTitle()} description={getDescription()}>
      {isLoading && <LoadingState message="Loading order details..." />}
      
      {error && (
        <ErrorState
          title="Order Not Found"
          message="The order you're looking for doesn't exist."
          actionText="Back to Orders"
          actionHref="/orders"
        />
      )}
      
      {!isLoading && !error && !order && (
        <ErrorState
          title="Order Not Found"
          message="The order you're looking for doesn't exist."
          actionText="Back to Orders"
          actionHref="/orders"
        />
      )}

      {!isLoading && !error && order && (
        <OrderDetailsContent order={order} />
      )}
    </MainLayout>
  );
};