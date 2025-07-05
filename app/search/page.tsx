'use client';

import { useSearchParams } from 'next/navigation';
import { useProducts } from '@/lib/queries/products';
import { ProductGrid } from '@/components/organisms/ProductGrid';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { MainLayout } from '@/components/templates/MainLayout';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <MainLayout title="Search Products" description="Search results for products at Mini-Commerce">
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout title="Search Error" description="Error searching for products at Mini-Commerce">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Error Loading Products</h2>
          <p className="mt-2 text-gray-600">
            Unable to fetch products. Please try again later.
          </p>
        </div>
      </MainLayout>
    );
  }

  const filteredProducts = products?.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  ) || [];

  return (
    <MainLayout
      title={`Search: ${query || 'All Products'}`}
      description={`Search results for "${query}" at Mini-Commerce`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Search Results for "{query || 'All Products'}"
          </h1>
          <p className="mt-2 text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} found
          </p>
        </div>
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center">
            <p className="text-gray-600">No products found matching your search.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}