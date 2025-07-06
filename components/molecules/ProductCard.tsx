import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types/product';
import { Button } from '@/components/atoms/Button';
import { Price } from '@/components/atoms/Price';
import { useCartStore } from '@/lib/store/cart-store';
import { Badge } from '../atoms/Badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };
  
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <Badge variant={product.inStock ? 'success' : 'error'}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-1">⭐</span>
              <span>{product.rating}</span>
              <span className="ml-1">({product.reviews})</span>
            </div>
          </div>
          
          <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          
          <p className="mb-3 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <Price amount={product.price} size="lg" />
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              size="sm"
              className="ml-2"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};