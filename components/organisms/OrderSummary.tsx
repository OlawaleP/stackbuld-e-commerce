'use client';

import { useCartStore } from '@/lib/store/cart-store';
import { Button } from '@/components/atoms/Button';
import { Price } from '@/components/atoms/Price';
import Link from 'next/link';

export function OrderSummary() {
  const { getTotal } = useCartStore();
  const subtotal = getTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
      <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
      
      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <Price amount={subtotal} />
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
            <Price amount={total} size="lg" />
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <Link href="/checkout">
          <Button size="lg" className="w-full">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
      
      <div className="mt-4 text-center">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-700">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}