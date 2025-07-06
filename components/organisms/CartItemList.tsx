'use client';

import { useCartStore } from '@/lib/store/cart-store';
import { CartItem } from '@/components/molecules/CartItem';

export function CartItemsList() {
  const { items, updateQuantity, removeItem } = useCartStore();

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.product.id}
          item={item}
          onQuantityChange={(quantity) =>
            updateQuantity(item.product.id, Number(quantity))
          }
          onRemove={() => removeItem(item.product.id)}
        />
      ))}
    </div>
  );
}