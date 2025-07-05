import { Price } from '@/components/atoms/Price';
import { Button } from '@/components/atoms/Button';
import { CartItem as CartItemType } from '@/lib/types/product';
import Link from 'next/link';

interface CartSummaryProps {
  items: CartItemType[];
  getTotal: () => number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ items, getTotal }) => {
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
          <Button size="lg" className="w-full" disabled={items.length === 0}>
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};