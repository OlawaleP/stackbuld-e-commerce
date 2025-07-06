'use client';

import React from 'react';
import { useProduct } from '@/lib/queries/products';
import { useCartStore } from '@/lib/store/cart-store';
import { Button } from '@/components/atoms/Button';
import { Price } from '@/components/atoms/Price';
import { Badge } from '@/components/atoms/Badge';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { QuantitySelector } from '@/components/molecules/QuantitySelector';
import { MainLayout } from '@/components/templates/MainLayout';
import Image from 'next/image';
import { useState } from 'react';
import { ProductPageProps } from '@/lib/utils';

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const { data: product, isLoading, error } = useProduct(params.slug);
  const addItem = useCartStore((state) => state.addItem);
  
  if (isLoading) {
    return (
      <MainLayout title="Loading Product">
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }
  
  if (error || !product) {
    return (
      <MainLayout title="Product Not Found">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Product Not Found</h2>
          <p className="mt-2 text-gray-600">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </MainLayout>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  return (
    <MainLayout
      title={product.name}
      description={product.description}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <Badge variant={product.inStock ? 'success' : 'error'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </Badge>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <span className="mr-1">⭐</span>
                <span>{product.rating}</span>
                <span className="ml-1">({product.reviews} reviews)</span>
              </div>
            </div>
            
            <Price amount={product.price} size="lg" />
            
            <p className="text-gray-600">{product.description}</p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>
              
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="lg"
                className="w-full"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}