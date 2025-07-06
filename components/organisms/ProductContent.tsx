import React from 'react';
import { Product } from '@/lib/types/product';
import { ProductImage } from '../molecules/ProductImage';
import { ProductDetails } from '../molecules/ProductDetails';
import { ProductActions } from '../molecules/ProductActions';

interface ProductContentProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  canAddToCart: boolean;
}

export const ProductContent: React.FC<ProductContentProps> = ({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
  canAddToCart,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ProductImage
          src={product.image}
          alt={product.name}
          className="aspect-square overflow-hidden rounded-lg"
        />
        
        <div className="space-y-6">
          <ProductDetails product={product} />
          
          <ProductActions
            product={product}
            quantity={quantity}
            onQuantityChange={onQuantityChange}
            onAddToCart={onAddToCart}
            canAddToCart={canAddToCart}
          />
        </div>
      </div>
    </div>
  );
};
