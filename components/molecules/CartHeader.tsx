export function CartHeader({ itemCount }: { itemCount: number }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
      <p className="mt-2 text-gray-600">
        {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
      </p>
    </div>
  );
}