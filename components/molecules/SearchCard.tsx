import React from 'react';
import Link from 'next/link';
import { ProductImage } from '@/components/atoms/ProductImage';
import { ProductTitle } from '@/components/atoms/ProductTitle';
import { Price } from '@/components/atoms/Price';
import { Product } from '@/lib/types/product';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className = "border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200" 
}) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={className}
      aria-label={`View details for ${product.name}`}
    >
      <ProductImage
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="h-48 w-full object-cover rounded mb-3"
      />
      <div className="space-y-2">
        <ProductTitle title={product.name} />
        <Price amount={product.price} />
      </div>
    </Link>
  );
};
