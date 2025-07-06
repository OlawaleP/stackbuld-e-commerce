import React from 'react';
import { OrdersPageHeader } from '@/components/molecules/OrdersPageHeader';
import { OrdersTable } from './OrdersTable';
import { EmptyOrdersState } from '@/components/molecules/EmptyOrdersState';

interface OrdersContentProps {
  orders: Array<{
    id: string;
    date: string;
    total: number;
    status: string;
  }>;
  hasOrders: boolean;
}

export const OrdersContent: React.FC<OrdersContentProps> = ({
  orders,
  hasOrders,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <OrdersPageHeader
        title="Order History"
        description="View your past orders and their details"
        orderCount={orders.length}
      />

      {hasOrders ? (
        <OrdersTable orders={orders} />
      ) : (
        <EmptyOrdersState />
      )}
    </div>
  );
};
