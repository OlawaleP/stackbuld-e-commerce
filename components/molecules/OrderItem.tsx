import React from 'react';
import Image from 'next/image';
import { Price } from '@/components/atoms/Price';

interface OrderItemProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
  quantity: number;
}

export const OrderItem: React.FC<OrderItemProps> = ({ product, quantity }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={48}
          height={48}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">Qty: {quantity}</p>
      </div>
      <Price amount={product.price * quantity} />
    </div>
  );
};