import { useState, useCallback } from 'react';
import { useProduct } from '@/lib/queries/products';
import { useCartStore } from '@/lib/store/cart-store';
import { Product } from '@/lib/types/product';

interface UseProductPageReturn {
  product: Product | null;
  isLoading: boolean;
  error: Error | null;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
  canAddToCart: boolean;
}

export const useProductPageEnhanced = (slug: string): UseProductPageReturn => {
  const [quantity, setQuantity] = useState<number>(1);
  const { data: product, isLoading, error } = useProduct(slug);
  const addItem = useCartStore((state) => state.addItem);
  
  const handleAddToCart = useCallback(() => {
    if (product && product.inStock) {
      addItem(product, quantity);
    }
  }, [product, quantity, addItem]);
  
  const canAddToCart = Boolean(product?.inStock && quantity > 0);
  
  return {
    product: product ?? null, 
    isLoading,
    error,
    quantity,
    onQuantityChange: setQuantity,
    onAddToCart: handleAddToCart,
    canAddToCart,
  };
};