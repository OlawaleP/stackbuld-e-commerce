import React from 'react';
import { OrderItem } from '@/components/molecules/OrderItem';

interface OrderItemsListProps {
  items: Array<{
    product: {
      id: string;
      name: string;
      image: string;
      price: number;
    };
    quantity: number;
  }>;
}

export const OrderItemsList: React.FC<OrderItemsListProps> = ({ items }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-lg font-medium text-gray-900">Items</h2>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <OrderItem 
            key={item.product.id} 
            product={item.product} 
            quantity={item.quantity} 
          />
        ))}
      </div>
    </div>
  );
};