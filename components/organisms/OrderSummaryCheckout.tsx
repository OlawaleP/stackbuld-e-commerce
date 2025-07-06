import React from 'react';
import Image from 'next/image';
import { Price } from '@/components/atoms/Price';
import { CartItem } from '@/lib/types/product';

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
  tax: number;
  grandTotal: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  total,
  tax,
  grandTotal,
}) => {
  return (
    <div className="lg:sticky lg:top-8">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
        
        <div className="mt-4 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center space-x-3">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-900">
                  {item.product.name}
                </h4>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <Price amount={item.product.price * item.quantity} />
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <Price amount={total} />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-900">Free</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <Price amount={tax} />
          </div>
          <div className="border-t border-gray-200 pt-3">
            <div className="flex justify-between text-base font-medium">
              <span className="text-gray-900">Total</span>
              <Price amount={grandTotal} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};