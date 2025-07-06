import React from 'react';
import { Badge } from '@/components/atoms/Badge';
import { Price } from '@/components/atoms/Price';
import { Product } from '@/lib/types/product';
import { ProductRating } from '../atoms/ProductRating';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="space-y-4">
      <div>
        <Badge variant={product.inStock ? 'success' : 'error'}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Badge>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          {product.name}
        </h1>
        <ProductRating rating={product.rating} reviews={product.reviews} />
      </div>
      
      <Price amount={product.price} size="lg" />
      
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};
