import React from 'react';

export const EmptyCart: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
      <p className="mt-2 text-gray-600">Add some items to checkout</p>
    </div>
  );
};