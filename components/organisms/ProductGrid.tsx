import React from 'react';
import { ProductCard } from '@/components/molecules/ProductCard';
import { Product } from '@/lib/types/product';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
}) => {
  return (
    <div className={className}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};