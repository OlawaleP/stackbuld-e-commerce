import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useProducts } from '@/lib/queries/products';
import { Product } from '@/lib/types/product';

interface UseSearchPageReturn {
  query: string;
  products: Product[];
  filteredProducts: Product[];
  isLoading: boolean;
  error: Error | null;
  hasResults: boolean;
  resultsCount: number;
}

export const useSearchPage = (): UseSearchPageReturn => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase().trim() || '';
  const { data: products = [], isLoading, error } = useProducts();
  
  const filteredProducts = useMemo(() => {
    if (!query) return products;
    
    return products.filter((product) => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  }, [products, query]);
  
  const hasResults = filteredProducts.length > 0;
  const resultsCount = filteredProducts.length;
  
  return {
    query,
    products,
    filteredProducts,
    isLoading,
    error,
    hasResults,
    resultsCount,
  };
};
