import React from 'react';
import { Button } from '@/components/atoms/Button';
import { QuantitySelector } from '@/components/molecules/QuantitySelector';
import { Product } from '@/lib/types/product';

interface ProductActionsProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  canAddToCart: boolean;
}

export const ProductActions: React.FC<ProductActionsProps> = ({
  quantity,
  onQuantityChange,
  onAddToCart,
  canAddToCart,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium text-gray-700">Quantity:</span>
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
      </div>
      
      <Button
        onClick={onAddToCart}
        disabled={!canAddToCart}
        size="lg"
        className="w-full"
      >
        Add to Cart
      </Button>
    </div>
  );
};
