import React from 'react';
import { format } from 'date-fns';
import { Price } from '@/components/atoms/Price';
import { OrderStatus } from '@/components/atoms/OrderStatus';
import { DetailRow } from '@/components/molecules/DetailRow';

interface OrderDetailsCardProps {
  id: string;
  date: string;
  status: string;
  total: number;
}

export const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({
  id,
  date,
  status,
  total,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h2 className="text-lg font-medium text-gray-900">Order Details</h2>
      <div className="mt-4 space-y-4">
        <DetailRow label="Order ID" value={id} />
        <DetailRow 
          label="Date" 
          value={format(new Date(date), 'MMM dd, yyyy')} 
        />
        <DetailRow 
          label="Status" 
          value={<OrderStatus status={status} />} 
        />
        <DetailRow 
          label="Total" 
          value={<Price amount={total} size="md" />} 
        />
      </div>
    </div>
  );
};