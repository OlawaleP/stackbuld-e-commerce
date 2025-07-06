import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Price } from '@/components/atoms/Price';
import { Button } from '@/components/atoms/Button';
import { OrderStatus } from '@/components/atoms/OrderStatus';
import { TableCell } from '@/components/atoms/TableCell';

interface OrderRowProps {
  order: {
    id: string;
    date: string;
    total: number;
    status: string;
  };
}

export const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  return (
    <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
      <TableCell className="text-gray-900 font-medium">
        {order.id}
      </TableCell>
      <TableCell className="text-gray-600">
        {format(new Date(order.date), 'MMM dd, yyyy')}
      </TableCell>
      <TableCell className="text-gray-900">
        <Price amount={order.total} />
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell>
        <Link href={`/orders/${order.id}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
      </TableCell>
    </tr>
  );
};