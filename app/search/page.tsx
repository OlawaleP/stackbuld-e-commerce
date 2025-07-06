'use client';

import React from 'react';
import { useProducts } from '@/lib/queries/products';
import { MainLayout } from '@/components/templates/MainLayout';
import { Price } from '@/components/atoms/Price';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const { data: products = [], isLoading, error } = useProducts();

  const filteredProducts = query
    ? products.filter((product) => product.name.toLowerCase().includes(query))
    : products;

  return (
    <MainLayout
      title={`Search Results for "${query}"`}
      description={`Find products matching "${query}" at Mini-Commerce`}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Search Results for &quot;{query || 'All Products'}&quot;
        </h1>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <LoadingSpinner size="lg" />
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            Error loading products. Please try again.
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                aria-label={`View details for ${product.name}`}
              >
                <div className="h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <h2 className="text-lg font-medium text-gray-900 mt-2">{product.name}</h2>
                <Price amount={product.price} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            No products found for &quot;{query}&quot;
          </div>
        )}
      </div>
    </MainLayout>
  );
}