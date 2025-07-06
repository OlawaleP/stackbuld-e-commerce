import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { ShoppingBag } from 'lucide-react';

interface EmptyOrdersStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
}

export const EmptyOrdersState: React.FC<EmptyOrdersStateProps> = ({
  title = 'No Orders Found',
  description = "You haven't placed any orders yet.",
  actionText = 'Shop Now',
  actionHref = '/',
}) => {
  return (
    <div className="text-center py-12">
      <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
        <ShoppingBag className="h-12 w-12" />
      </div>
      <h2 className="text-xl font-medium text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link href={actionHref} className="mt-6 inline-block">
        <Button>{actionText}</Button>
      </Link>
    </div>
  );
};
