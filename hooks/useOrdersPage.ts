import { useCallback } from 'react';
import { useOrders } from '@/lib/queries/orders';

export const useOrdersPageEnhanced = () => {
  const { data: orders, isLoading, error, refetch } = useOrders();

  const hasOrders = orders && orders.length > 0;

  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    orders: orders || [],
    isLoading,
    error,
    hasOrders,
    handleRetry,
  };
};
