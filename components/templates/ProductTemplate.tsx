import React from 'react';
import { MainLayout } from '@/components/templates/MainLayout';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { Product } from '@/lib/types/product';
import { ProductErrorState } from '../molecules/ProductErrorState';
import { ProductContent } from '../organisms/ProductContent';

interface ProductTemplateProps {
  product: Product | null;
  isLoading: boolean;
  error: Error | null;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  canAddToCart: boolean;
}

export const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  isLoading,
  error,
  quantity,
  onQuantityChange,
  onAddToCart,
  canAddToCart,
}) => {
  const getTitle = (): string => {
    if (isLoading) return 'Loading Product';
    if (error || !product) return 'Product Not Found';
    return product.name;
  };
  
  const getDescription = (): string | undefined => {
    return product?.description;
  };
  
  return (
    <MainLayout title={getTitle()} description={getDescription()}>
      {isLoading && (
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      )}
      
      {error && (
        <ProductErrorState 
          error={error}
          onRetry={() => window.location.reload()}
        />
      )}
      
      {!isLoading && !error && product && (
        <ProductContent
          product={product}
          quantity={quantity}
          onQuantityChange={onQuantityChange}
          onAddToCart={onAddToCart}
          canAddToCart={canAddToCart}
        />
      )}
    </MainLayout>
  );
};