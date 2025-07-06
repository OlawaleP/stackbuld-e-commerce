import Link from 'next/link';
import { Button } from "../atoms/Button";

export function EmptyCart() {
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