import React from 'react';
import { format } from 'date-fns';

interface OrderDetailsHeaderProps {
  orderId: string;
  date: string;
}

export const OrderDetailsHeader: React.FC<OrderDetailsHeaderProps> = ({
  orderId,
  date,
}) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Order {orderId}</h1>
      <p className="mt-2 text-gray-600">
        Placed on {format(new Date(date), 'MMM dd, yyyy')}
      </p>
    </div>
  );
};