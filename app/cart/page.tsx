// app/cart/page.tsx
'use client';

import { useCartStore } from '@/lib/store/cart-store';
import { Button } from '@/components/atoms/Button';
import { Price } from '@/components/atoms/Price';
import { QuantitySelector } from '@/components/molecules/QuantitySelector';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    getTotal, 
    getItemCount 
  } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-md">
          <div className="mb-6 text-6xl">🛒</div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Your cart is empty
          </h2>
          <p className="mb-8 text-gray-600">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link href="/">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <p className="mt-2 text-gray-600">
          {getItemCount()} {getItemCount() === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4"
              >
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.product.category}
                  </p>
                  <div className="mt-2">
                    <Price amount={item.product.price} />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <QuantitySelector
                    quantity={item.quantity}
                    onQuantityChange={(quantity) =>
                      updateQuantity(item.product.id, quantity)
                    }
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
            
            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <Price amount={getTotal()} />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <Price amount={getTotal() * 0.08} />
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-base font-medium">
                  <span className="text-gray-900">Total</span>
                  <Price amount={getTotal() * 1.08} size="lg" />
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
        </div>
      </div>
    </div>
  );
}