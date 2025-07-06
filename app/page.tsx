'use client';

import React from 'react';
import { useProducts } from '@/lib/queries/products';
import { ProductGrid } from '@/components/organisms/ProductGrid';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { MainLayout } from '@/components/templates/MainLayout';

export default function HomePage() {
  const { data: products, isLoading, error } = useProducts();
  
  return (
    <MainLayout
      title="Our Products"
      description="Discover our amazing collection of products at Stackbuild"
    >
      {isLoading ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      ) : error ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Error Loading Products</h2>
          <p className="mt-2 text-gray-600">
            Unable to fetch products. Please try again later.
          </p>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
            <p className="mt-2 text-gray-600">
              Discover our amazing collection of products
            </p>
          </div>
          {products && <ProductGrid products={products} />}
        </div>
      )}
    </MainLayout>
  );
}