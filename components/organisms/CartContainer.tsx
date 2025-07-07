// components/organisms/CartContainer.tsx
'use client';

import { useCartStore } from '@/lib/store/cart-store';
import { EmptyCart } from '@/components/organisms/EmptyCart';
import { OrderSummary } from '@/components/organisms/OrderSummary';
import { CartHeader } from '../molecules/CartHeader';
import { CartItemsList } from './CartItemsList';

export function CartContainer() {
  const { items, getItemCount } = useCartStore();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CartHeader itemCount={getItemCount()} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CartItemsList /> 
        </div>
        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}