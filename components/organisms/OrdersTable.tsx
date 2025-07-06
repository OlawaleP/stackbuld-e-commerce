import React from 'react';
import { TableHeader } from '@/components/atoms/TableHeader';
import { OrderRow } from '@/components/molecules/OrderRow';

interface OrdersTableProps {
  orders: Array<{
    id: string;
    date: string;
    total: number;
    status: string;
  }>;
}

export const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <TableHeader>Order ID</TableHeader>
                <TableHeader>Date</TableHeader>
                <TableHeader>Total</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Actions</TableHeader>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {orders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};