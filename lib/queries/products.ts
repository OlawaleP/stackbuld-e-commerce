import { useQuery } from '@tanstack/react-query';
import { Product } from '../types/product';
import { getFromStorage, setToStorage } from '@/lib/utils/storage';

const PRODUCTS_KEY = 'mini-commerce-products';

const seedProducts = async (): Promise<Product[]> => {
  const stored = getFromStorage<Product[]>(PRODUCTS_KEY, []);
  if (stored.length > 0) {
    return stored;
  }
  
  const response = await fetch('/data/products.json');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  const products: Product[] = await response.json();
  setToStorage(PRODUCTS_KEY, products);
  return products;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: seedProducts,
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
  });
};

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const products = await seedProducts();
      const product = products.find(p => p.slug === slug);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    },
    enabled: !!slug,
  });
};