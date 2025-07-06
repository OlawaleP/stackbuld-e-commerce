import React from 'react';
import { SearchHeader } from '@/components/molecules/SearchHeader';
import { ProductGrid } from '@/components/organisms/ProductGrid';
import { SearchErrorState } from '@/components/molecules/SearchErrorState';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import { Product } from '@/lib/types/product';
import { SearchEmptyState } from './SearchEmptyState';

interface SearchContentProps {
  query: string;
  filteredProducts: Product[];
  isLoading: boolean;
  error: Error | null;
  hasResults: boolean;
  resultsCount: number;
}

export const SearchContent: React.FC<SearchContentProps> = ({
  query,
  filteredProducts,
  isLoading,
  error,
  hasResults,
  resultsCount,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SearchHeader query={query} resultsCount={resultsCount} />
      
      {isLoading && (
        <div className="flex justify-center py-8">
          <LoadingSpinner size="lg" />
        </div>
      )}
      
      {error && (
        <SearchErrorState 
          error={error}
          onRetry={() => window.location.reload()}
        />
      )}
      
      {!isLoading && !error && hasResults && (
        <ProductGrid products={filteredProducts} />
      )}
      
      {!isLoading && !error && !hasResults && (
        <SearchEmptyState query={query} />
      )}
    </div>
  );
};
