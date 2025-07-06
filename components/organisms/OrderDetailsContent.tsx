import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { OrderDetailsHeader } from './OrderDetailsHeader';
import { OrderDetailsCard } from './OrderDetailsCard';
import { OrderItemsList } from './OrderItemsList';
import { Order } from '@/lib/types/order';

interface OrderDetailsContentProps {
  order: Order;
}

export const OrderDetailsContent: React.FC<OrderDetailsContentProps> = ({ order }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <OrderDetailsHeader orderId={order.id} date={order.date} />

      <div className="space-y-8">
        <OrderDetailsCard
          id={order.id}
          date={order.date}
          status={order.status}
          total={order.total}
        />

        <OrderItemsList items={order.items} />

        <div className="flex justify-start">
          <Link href="/orders">
            <Button variant="outline">Back to Orders</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
